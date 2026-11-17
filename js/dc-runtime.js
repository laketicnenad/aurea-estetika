/* Aurea – mali runtime za šablone ({{vrednost}}, <sc-if>, <sc-for>) i komponente sa stanjem.
   Radi isto kao u pregledu: renderVals() daje vrednosti, setState() ponovo iscrtava,
   a morphdom menja samo ono što se promenilo (animacije i fokus u formi ostaju). */
(function () {
  'use strict';

  var BOOL_ATTRS = { disabled: 1, checked: 1, selected: 1, hidden: 1, readonly: 1, required: 1, open: 1 };
  var SSR = /[?&]dc-ssr\b/.test(location.search);
  var EXPR = /\{\{\s*([^}]+?)\s*\}\}/g;
  var ONLY = /^\{\{\s*([^}]+?)\s*\}\}$/;

  function lookup(scope, path) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    var parts = path.split('.'), v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }
  function str(v) { return v == null || v === false ? '' : String(v); }

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (u) {
    var patch = typeof u === 'function' ? u(this.state, this.props) : u;
    if (!patch) return;
    var next = {}, k;
    for (k in this.state) next[k] = this.state[k];
    for (k in patch) next[k] = patch[k];
    this.state = next;
    if (this.__schedule) this.__schedule();
  };
  DCLogic.prototype.renderVals = function () { return {}; };
  window.DCLogic = DCLogic;

  function mount(opts) {
    var tEl = document.createElement('template'); tEl.innerHTML = opts.templateHTML; var tpl = tEl.content;
    var root = document.getElementById(opts.root);
    var comp = new opts.Component(opts.props || {});
    var handlers = {}, hid = 0, queued = false, mounted = false;

    function interp(text, scope) {
      return text.replace(EXPR, function (_, p) { return str(lookup(scope, p)); });
    }

    function renderNode(node, scope, out) {
      if (node.nodeType === 3) {
        out.push(document.createTextNode(node.nodeValue.indexOf('{{') < 0 ? node.nodeValue : interp(node.nodeValue, scope)));
        return;
      }
      if (node.nodeType !== 1) return;
      var tag = node.tagName.toLowerCase();
      if (tag === 'sc-if') {
        var m = ONLY.exec(node.getAttribute('value') || '');
        if (m && lookup(scope, m[1])) renderChildren(node, scope, out);
        return;
      }
      if (tag === 'sc-for') {
        var lm = ONLY.exec(node.getAttribute('list') || '');
        var list = lm ? lookup(scope, lm[1]) : null, as = node.getAttribute('as');
        if (list && list.length) {
          for (var i = 0; i < list.length; i++) {
            var s2 = Object.create(scope); s2[as] = list[i];
            renderChildren(node, s2, out);
          }
        }
        return;
      }
      var el = node.namespaceURI === 'http://www.w3.org/1999/xhtml' ? document.createElement(node.localName) : document.createElementNS(node.namespaceURI, node.localName);
      // slike: src postavljamo poslednji, da loading="lazy" važi i pre ubacivanja u stranicu
      var attrs = Array.prototype.slice.call(node.attributes);
      if (tag === 'img') { var rank = function (n) { return n === 'loading' ? 0 : (n === 'src' || n === 'srcset' || n === 'sizes') ? 2 : 1; }; attrs.sort(function (x, y) { return rank(x.name) - rank(y.name); }); }
      for (var a = 0; a < attrs.length; a++) {
        var at = attrs[a], name = at.name, val = at.value;
        if (name.indexOf('hint-placeholder') === 0) continue;
        var lname = name.toLowerCase();
        if (lname.indexOf('on') === 0 && lname.length > 2 && ONLY.test(val)) {
          var fn = lookup(scope, ONLY.exec(val)[1]);
          if (typeof fn === 'function') {
            var id = 'h' + (hid++);
            handlers[id] = fn;
            el.setAttribute('data-on-' + lname.slice(2), id);
          }
          continue;
        }
        if (val.indexOf('{{') < 0) { el.setAttribute(name, val); continue; }
        var only = ONLY.exec(val);
        if (only) {
          var v = lookup(scope, only[1]);
          if (BOOL_ATTRS[lname]) { if (v) el.setAttribute(name, ''); continue; }
          if (typeof v === 'boolean') { el.setAttribute(name, v ? 'true' : 'false'); continue; }
          if (v == null) continue;
          el.setAttribute(name, String(v));
          continue;
        }
        el.setAttribute(name, interp(val, scope));
      }
      var kids = [];
      renderChildren(node.tagName.toLowerCase() === 'template' ? node.content : node, scope, kids);
      for (var k = 0; k < kids.length; k++) el.appendChild(kids[k]);
      out.push(el);
    }
    function renderChildren(node, scope, out) {
      for (var c = node.firstChild; c; c = c.nextSibling) renderNode(c, scope, out);
    }

    function render() {
      queued = false;
      handlers = {}; hid = 0;
      var vals = comp.renderVals();
      var holder = root.cloneNode(false), out = [];
      renderChildren(tpl, vals, out);
      for (var i = 0; i < out.length; i++) holder.appendChild(out[i]);
      morphdom(root, holder, {
        childrenOnly: true,
        onBeforeElUpdated: function (fromEl, toEl) {
          // vrednost polja koje korisnik upravo kuca ne diramo, osim ako ga stanje briše
          if ((fromEl.tagName === 'INPUT' || fromEl.tagName === 'TEXTAREA') && fromEl === document.activeElement &&
              fromEl.type !== 'checkbox' && fromEl.type !== 'radio') {
            var nv = toEl.getAttribute('value') || '';
            if (nv !== '' && nv !== fromEl.value) fromEl.value = nv;
            toEl.setAttribute('value', fromEl.value);
          }
          return true;
        }
      });
      // svojstva koja atributi ne postavljaju sami
      var sel = root.querySelectorAll('select[value]');
      for (var s = 0; s < sel.length; s++) sel[s].value = sel[s].getAttribute('value');
      var chk = root.querySelectorAll('input[type=checkbox]');
      for (var c = 0; c < chk.length; c++) chk[c].checked = chk[c].hasAttribute('checked');
      var inp = root.querySelectorAll('input[value]:not([type=checkbox]):not([type=hidden])');
      for (var n = 0; n < inp.length; n++) if (inp[n] !== document.activeElement && inp[n].value !== inp[n].getAttribute('value')) inp[n].value = inp[n].getAttribute('value');
      if (!mounted && !SSR) { mounted = true; if (comp.componentDidMount) requestAnimationFrame(function () { comp.componentDidMount(); }); }
    }
    comp.__schedule = function () { if (!queued) { queued = true; Promise.resolve().then(render); } };

    function fire(type, e) {
      var t = e.target;
      while (t && t !== root.parentNode) {
        if (t.nodeType === 1 && t.hasAttribute('data-on-' + type)) {
          var fn = handlers[t.getAttribute('data-on-' + type)];
          if (fn) fn(e);
          return;
        }
        t = t.parentNode;
      }
    }
    root.addEventListener('click', function (e) { fire('click', e); });
    // React onChange = svaki unos u polje; za checkbox i select = promena
    root.addEventListener('input', function (e) {
      var t = e.target;
      if (t.type === 'checkbox' || t.tagName === 'SELECT') return;
      fire('change', e);
    });
    root.addEventListener('change', function (e) {
      var t = e.target;
      if (t.type === 'checkbox' || t.tagName === 'SELECT') fire('change', e);
    });
    window.addEventListener('pagehide', function () { if (comp.componentWillUnmount) comp.componentWillUnmount(); });

    if (SSR && 'anim' in comp.state) comp.state.anim = true;
    // stranica je već iscrtana (pre-render): povezivanje ostavljamo za posle učitavanja,
    // da prvi prikaz i hero slika ne čekaju JavaScript
    if (!SSR && root.firstElementChild) {
      var go = function () { setTimeout(render, 0); };
      if (document.readyState === 'complete') go(); else window.addEventListener('load', go, { once: true });
    } else {
      render();
    }
    return comp;
  }

  window.DC = { mount: mount };
})();
