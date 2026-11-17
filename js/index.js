
class Component extends DCLogic {
  D = {
    tr: {
      hifu: { img: 'img/a00bf4d68616b06bb6df3caccbf94b52.webp', name: 'HIFU lifting', za: 'HIFU lifting', price: 'od 24.000 din.', dur: '60-90 min', down: 'Bez oporavka', lasts: 'Obično oko godinu dana',
        forWho: 'Za opušteniju kožu donjeg dela lica, vilice i vrata. Ultrazvuk, bez igle i bez punila.',
        photo: 'Fotografija: ruke lekarke, HIFU aparat na liniji vilice',
        why: 'HIFU zateže kožu ultrazvukom, bez igle i bez punila.' },
      usne: { img: 'img/595958c5a345887e35b66d0b200c36fc.webp', name: 'Hijaluron za usne', za: 'hijaluron za usne', price: 'od 18.000 din.', dur: '45 min', down: 'Otok 1-3 dana', lasts: '6-12 meseci',
        forWho: 'Za volumen ili oblik usana, u meri koju sama odrediš. Počinjemo sa manje.',
        photo: 'Fotografija: detalj, špric i rukavice na tacni',
        why: 'Hijaluron vraća volumen i oblik usana, a količinu biraš zajedno sa dr Anom.' },
      booster: { img: 'img/8f4a4f5ca2295e9ee3947d6bcbddcad0.webp', name: 'Skin booster', za: 'skin booster', price: '20.000 din.', dur: '45 min', down: 'Sitne kvržice i crvenilo do 24 h', lasts: 'Oko 6 meseci, serija od 3 tretmana',
        forWho: 'Za umornu, suvu kožu bez sjaja. Koža dobija vlagu, a crte lica ostaju iste.',
        photo: 'Fotografija: detalj kože obraza, ruka u rukavici',
        why: 'Skin booster vraća vlagu koži celog lica i ne menja crte.' },
      savet: { name: 'Nisam sigurna, želim savet', za: 'savet o tretmanu' }
    },
    quiz: [
      { t: 'Šta bi najviše volela da promeniš?', o: [
        { l: 'Koža je opuštenija, kontura lica nije jasna', s: { H: 3 } },
        { l: 'Usne, volumen ili oblik', s: { U: 3 } },
        { l: 'Koža je umorna, suva, bez sjaja', s: { S: 3 } },
        { l: 'Nisam sigurna', s: {} } ] },
      { t: 'Koja zona te najviše zanima?', o: [
        { l: 'Donji deo lica, vilica, vrat', s: { H: 2 } },
        { l: 'Usne', s: { U: 2 } },
        { l: 'Celo lice', s: { S: 2 } },
        { l: 'Više zona', s: { H: 1, S: 1 } } ] },
      { t: 'Koliko vremena imaš za oporavak?', o: [
        { l: 'Nijedan dan', s: { H: 1 } },
        { l: 'Do 3 dana je u redu', s: {} },
        { l: 'Nije mi bitno', s: {} } ] },
      { t: 'Da li si ranije imala estetske tretmane?', o: [
        { l: 'Ne, ovo bi bio prvi', s: {} },
        { l: 'Da, slične', s: {} },
        { l: 'Da, drugačije', s: {} } ] },
      { t: 'Kakav rezultat želiš?', o: [
        { l: 'Postepen, da se ne primeti da sam nešto radila', s: { H: 1, S: 1 } },
        { l: 'Vidljiv odmah', s: { U: 1 } },
        { l: 'Ne znam', s: {} } ] }
    ],
    zone: ['Najviše te zanima donji deo lica, vilica i vrat.', 'Najviše te zanimaju usne.', 'Najviše te zanima celo lice.', 'Zanima te više zona odjednom.'],
    faq: [
      { q: 'Da li boli?', a: 'Kod HIFU-a osetiš toplotu i kratke ubode duž vilice, dok traje impuls. Za hijaluron i skin booster stavljamo kremu za anesteziju 20 minuta pre, a filer za usne ima anestetik u sebi. Većina pacijentkinja kaže da je lakše nego što su očekivale.' },
      { q: 'Koliko traje rezultat?', a: 'HIFU: rezultat se razvija 2-3 meseca i traje oko godinu dana. Hijaluron za usne: 6-12 meseci. Skin booster: oko 6 meseci posle serije od 3 tretmana, na 3-4 nedelje.' },
      { q: 'Da li će se primetiti da sam nešto radila?', a: 'Ljudi obično kažu da izgledaš odmorno. Kod usana počinjemo sa manjom količinom, pa na kontroli posle 2 nedelje dodajemo ako želiš.' },
      { q: 'Može li da se kombinuje više tretmana?', a: 'Može, ali ne uvek isti dan. Skin booster i usne mogu zajedno, a HIFU i filer radimo u razmaku od 2 nedelje. Redosled dogovaraš sa dr Anom na konsultaciji.' },
      { q: 'Šta ako mi se rezultat ne svidi?', a: 'Kontrola posle 2 nedelje je u ceni. Ako nešto treba ispraviti, ispravljamo na kontroli. Hijaluron može da se rastvori enzimom ako baš zatreba.' },
      { q: 'Da li je konsultacija obavezna?', a: 'Jeste, pre prvog tretmana. Traje 20 minuta i košta 3.000 din. Ako se odlučiš za tretman, taj iznos odbijamo od cene tretmana. Ne obavezuje te da uradiš tretman.' },
      { q: 'Kako da se pripremim?', a: 'Dođi bez šminke. Dan pre tretmana iglom nemoj da piješ alkohol. Detaljno uputstvo za tvoj tretman stiže na mejl čim zakažeš.' },
      { q: 'Kako plaćam?', a: 'U klinici, posle tretmana: gotovinom ili karticom (Visa, Mastercard, Dina). Konsultaciju plaćaš na dan konsultacije, a ako uradiš tretman, odbijamo je od cene.' },
      { q: 'Gde da parkiram?', a: 'Parkiraj u garaži TC Promenada, pa liftom do drugog sprata. Ordinacija je pored lifta, na vratima piše Aurea.' }
    ],
    when: [ { id: 'pre15', l: 'Radnim danom pre 15 h' }, { id: 'posle15', l: 'Radnim danom posle 15 h' }, { id: 'sub', l: 'Subotom' }, { id: 'svejedno', l: 'Svejedno' } ],
    dowShort: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
    dowAcc: ['u nedelju', 'u ponedeljak', 'u utorak', 'u sredu', 'u četvrtak', 'u petak', 'u subotu'],
    monShort: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
    monGen: ['januara', 'februara', 'marta', 'aprila', 'maja', 'juna', 'jula', 'avgusta', 'septembra', 'oktobra', 'novembra', 'decembra']
  };

  state = {
    menuOpen: false, privacyOpen: false, faqOpen: 0,
    anim: false, seen: {}, qSlide: '', qCalc: false,
    qStep: 0, qAns: [], qDone: false,
    tab: 'cal', source: 'početna', quizResult: '',
    offset: 0, dayKey: null, slot: null, calStep: 1, loading: true, takenMsg: false, taken: {}, tookOnce: false, booked: null,
    f: { name: '', phone: '', email: '', treatment: '', consent: false, when: 'svejedno', hp: '' },
    errors: {}, callDone: false, callName: '', callTr: '', callWhen: '',
    vw: 1440
  };

  componentDidMount() {
    this._onResize = () => this.setState({ vw: window.innerWidth });
    this._onResize();
    window.addEventListener('resize', this._onResize);
    this._fetchTermini();
    // animacije: isključene ako korisnik traži manje pokreta
    this._rm = (this.props.animacije ?? 'uvek uključene') !== 'uvek uključene' && !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (!this._rm && 'IntersectionObserver' in window) {
      this.setState({ anim: true });
      this._io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          this._io.unobserve(e.target);
          const id = e.target.id;
          this.setState((st) => ({ seen: { ...st.seen, [id]: true } }));
        });
      }, { rootMargin: '0px 0px -12% 0px' });
      setTimeout(() => document.querySelectorAll('.rv').forEach((el) => this._io.observe(el)), 0);
    }
  }
  componentWillUnmount() { window.removeEventListener('resize', this._onResize); clearTimeout(this._t); if (this._io) this._io.disconnect(); }

  // ---------- kviz: prelazi ----------
  _qGo(qi, i) {
    if (this.state.qSlide) return;
    const ans = this.state.qAns.slice(0, qi); ans[qi] = i;
    const wait = this._rm ? 0 : 400;
    this.setState({ qAns: ans, qSlide: this._rm ? '' : 'out-l' });
    setTimeout(() => {
      if (qi === 4) {
        this.setState({ qCalc: true, qSlide: '' });
        setTimeout(() => this.setState({ qCalc: false, qDone: true }), this._rm ? 0 : 900);
        return;
      }
      this.setState({ qStep: qi + 1, qSlide: this._rm ? '' : 'pre-r' });
      if (!this._rm) requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ qSlide: '' })));
    }, wait);
  }
  _qBack(qi) {
    if (this.state.qSlide || qi === 0) return;
    const wait = this._rm ? 0 : 400;
    this.setState({ qSlide: this._rm ? '' : 'out-r' });
    setTimeout(() => {
      this.setState({ qStep: qi - 1, qSlide: this._rm ? '' : 'pre-l' });
      if (!this._rm) requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ qSlide: '' })));
    }, wait);
  }

  _load() {}

  // ---------- kalendar ----------
  _fmtDay(d) { return this.D.dowAcc[d.getDay()] + ', ' + d.getDate() + '. ' + this.D.monGen[d.getMonth()]; }

  // ---------- forma ----------
  _setF(k, v) { this.setState({ f: { ...this.state.f, [k]: v }, errors: { ...this.state.errors, [k]: '' } }); }
  _validate() {
    const f = this.state.f, e = {};
    if (!f.name.trim()) e.name = 'Upiši ime. Dovoljno je samo ime.';
    if (f.phone.replace(/\D/g, '').length < 8) e.phone = 'Upiši broj telefona, npr. 064 123 4567.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Upiši mejl, npr. jelena@gmail.com. Na njega šaljemo uputstvo za pripremu.';
    if (!f.treatment) e.treatment = 'Izaberi tretman ili „Nisam sigurna, želim savet“.';
    if (!f.consent) e.consent = 'Štikliraj saglasnost da bismo mogli da te kontaktiramo.';
    this.setState({ errors: e });
    return Object.keys(e).length === 0;
  }
  _callWhen() {
    const n = new Date(), dow = n.getDay(), h = n.getHours();
    const open = (dow >= 1 && dow <= 5 && h >= 10 && h < 20) || (dow === 6 && h >= 10 && h < 14);
    if (open) return 'u toku jednog radnog dana';
    if ((dow === 6 && h >= 14) || dow === 0) return 'u ponedeljak posle 10 h';
    if (h < 10 && dow !== 0) return 'danas posle 10 h';
    return 'sutra posle 10 h';
  }
  _bookFrom(trId, source, tab) {
    this.setState({ f: { ...this.state.f, treatment: trId || this.state.f.treatment }, source, tab: tab || 'cal', menuOpen: false });
  }

  // ---------- kviz ----------
  _quizResult(ans) {
    const sc = { H: 0, U: 0, S: 0 };
    ans.forEach((oi, qi) => { const s = this.D.quiz[qi].o[oi].s; Object.keys(s).forEach(k => sc[k] += s[k]); });
    const ids = { H: 'hifu', U: 'usne', S: 'booster' };
    const sorted = Object.keys(sc).sort((a, b) => sc[b] - sc[a]);
    const top = sorted[0], second = sorted[1];
    const unclear = sc[top] < 3 || (sc[top] - sc[second]) < 2;
    return { unclear, win: ids[top], second: ids[second], sc };
  }

  _nb(t) { return typeof t === 'string' ? t.replace(/ (\S{1,20})$/, '\u00a0$1') : t; }

  _renderVals0() {
    const s = this.state, D = this.D;
    const demo = '';

    // tretmani
    const activeTr = s.activeTr || 'hifu';
    const cards = ['hifu', 'usne', 'booster'].map((id, i) => ({
      ...D.tr[id], n: '0' + (i + 1),
      meta: D.tr[id].dur + ' · ' + D.tr[id].down + ' · ' + D.tr[id].price,
      aria: D.tr[id].name + ', saznaj više',
      st: D.tr[id].img ? 'background-image:url(' + D.tr[id].img + ');background-size:cover;background-position:50% 60%' : '',
      photoLabel: D.tr[id].img ? '' : D.tr[id].photo,
      href: ({ hifu: 'hifu-lifting.html', usne: 'hijaluron-za-usne.html', booster: 'skin-booster.html' })[id],
      cls: 'tr-row' + (activeTr === id ? ' is-on' : ''),
      hover: () => this.setState({ activeTr: id })
    }));
    const activePhoto = D.tr[activeTr].photo;

    // kviz
    const qi = s.qStep;
    const q = D.quiz[Math.min(qi, 4)];
    const qOpts = q.o.map((o, i) => ({
      label: o.l,
      cls: 'opt' + (s.qAns[qi] === i ? ' is-sel' : ''),
      pick: () => this._qGo(qi, i)
    }));
    let r = { title: '', why: '', price: '', dur: '', down: '', box: false, trId: 'savet', label: '' };
    if (s.qDone) {
      const res = this._quizResult(s.qAns);
      const zone = D.zone[s.qAns[1]] || '';
      if (res.unclear) {
        const a = D.tr[res.win].name, b = D.tr[res.second].name;
        r.title = 'Za tebe bi bila najbolja konsultacija sa procenom';
        r.why = zone + ' Tvoji odgovori se uklapaju u dva tretmana: ' + a + ' i ' + b + '. Dr Ana pogleda kožu i kaže ti koji ima više smisla, ili da ti ne treba nijedan.';
        r.trId = 'savet'; r.label = 'Konsultacija sa procenom (' + a + ', ' + b + ')';
      } else {
        const t = D.tr[res.win];
        r.title = 'Za tebe bi mogao da bude ' + t.za;
        const rec = s.qAns[2] === 0
          ? (res.win === 'hifu' ? 'Rekla si da nemaš vremena za oporavak, a posle HIFU-a se vraćaš obavezama isti dan.' : 'Rekla si da nemaš vremena za oporavak. Oporavak je: ' + t.down.toLowerCase() + ', o tome pričaš na konsultaciji.')
          : (res.win === 'hifu' ? 'Posle HIFU-a nema dana oporavka, isti dan si na poslu.' : 'Oporavak: ' + t.down.toLowerCase() + ', što se uklapa u ono što si rekla.');
        r.why = zone + ' ' + t.why + ' ' + rec;
        r.price = t.price; r.dur = t.dur; r.down = t.down; r.box = true; r.trId = res.win; r.label = t.name;
      }
    }
    this._qLabel = s.qDone ? r.label : '';
    const rBook = (tab) => () => this.setState({ f: { ...s.f, treatment: r.trId }, source: 'kviz', quizResult: r.label, tab });

    // kalendar
    const days = this._days();
    const visCount = s.vw < 768 ? 3 : 5;
    const maxOff = Math.max(0, days.length - visCount);
    const off = Math.min(s.offset, maxOff);
    const vis = days.slice(off, off + visCount);
    let selKey = s.dayKey && vis.find(d => d.key === s.dayKey) ? s.dayKey : (vis.find(d => d.slots.length) || vis[0] || {}).key;
    const selDay = days.find(d => d.key === selKey) || { slots: [] };
    const visDays = vis.map(d => ({
      dow: D.dowShort[d.dow], num: d.date.getDate(), mon: d.slots.length ? D.monShort[d.date.getMonth()] : 'popunjeno',
      sel: d.key === selKey,
      cls: 'day' + (d.key === selKey ? ' is-sel' : '') + (d.slots.length ? '' : ' is-full'),
      pick: () => this.setState({ dayKey: d.key, slot: null, takenMsg: false })
    }));
    const slots = selDay.slots.map(t => ({
      t, cls: 'slot' + (s.slot === selKey + ' ' + t ? ' is-sel' : ''),
      pick: () => this.setState({ slot: selKey + ' ' + t, dayKey: selKey, takenMsg: false })
    }));
    const pickedDay = s.slot ? days.find(d => s.slot.startsWith(d.key + ' ')) : null;
    const pickedTime = s.slot ? s.slot.split(' ')[1] : '';
    const pickedLabel = pickedDay ? (this._fmtDay(pickedDay.date) + ', ' + pickedTime) : '';
    const errs = s.errors;

    // hvala posle kalendara
    let calThanksTitle = '', gcalUrl = '#', bookedTr = '';
    if (s.booked) {
      const b = s.booked;
      calThanksTitle = 'Vidimo se ' + this._fmtDay(b.date) + ', u ' + b.time + '.';
      bookedTr = (D.tr[b.tr] || D.tr.savet).za;
      const p = n => String(n).padStart(2, '0');
      const [hh, mm] = b.time.split(':').map(Number);
      const st = new Date(b.date.getFullYear(), b.date.getMonth(), b.date.getDate(), hh, mm);
      const en = new Date(st.getTime() + 20 * 60000);
      const fmt = d => d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + 'T' + p(d.getHours()) + p(d.getMinutes()) + '00';
      gcalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent('Konsultacija, Aurea Estetika') +
        '&dates=' + fmt(st) + '/' + fmt(en) + '&ctz=Europe/Belgrade&location=' + encodeURIComponent('Bulevar oslobođenja 119, Novi Sad');
    }

    const calError = false;
    const go = (src) => () => this.setState({ source: src, tab: 'cal', menuOpen: false });

    return {
      menuOpen: s.menuOpen,
      openMenu: () => this.setState({ menuOpen: true }),
      closeMenu: () => this.setState({ menuOpen: false }),
      privacyOpen: s.privacyOpen,
      openPrivacy: (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({ privacyOpen: true }); },
      closePrivacy: () => this.setState({ privacyOpen: false }),
      goHome: go('početna'), goContact: go('kontakt'),
      cards, activePhoto,
      photos: ['hifu', 'usne', 'booster'].map((id) => ({ label: D.tr[id].img ? '' : D.tr[id].photo, st: D.tr[id].img ? 'background-image:url(' + D.tr[id].img + ');background-size:cover;background-position:50% 60%' : '', cls: 'ph tr-ph' + (activeTr === id ? ' on' : '') })),
      pageCls: 'page' + (s.anim ? ' anim' : '') + ((this.props.animacije ?? 'uvek uključene') !== 'uvek uključene' ? ' respect-rm' : ''),
      rv: {
        tretmani: 'sec rv' + (s.seen.tretmani ? ' in' : ''),
        kviz: 'sec quiz-sec dark rv' + (s.seen.kviz ? ' in' : ''),
        recenzije: 'sec rv' + (s.seen.recenzije ? ' in' : ''),
        drAna: 'sec dark rv' + (s.seen['dr-ana'] ? ' in' : ''),
        zakazivanje: 'sec book-sec rv' + (s.seen.zakazivanje ? ' in' : ''),
        pitanja: 'sec rv' + (s.seen.pitanja ? ' in' : ''),
        kontakt: 'sec rv' + (s.seen.kontakt ? ' in' : '')
      },

      qActive: !s.qDone && !s.qCalc, qCalc: s.qCalc, qDone: s.qDone,
      qNum: qi + 1, qLeft: qi === 4 ? 'poslednje pitanje' : (4 - qi) + ' do rezultata', qPct: ((qi + 1) * 20) + '%',
      qTitle: q.t, qOpts, qCanBack: qi > 0,
      qBack: () => this._qBack(qi),
      qRestart: () => this.setState({ qStep: 0, qAns: [], qDone: false, qCalc: false, qSlide: '' }),
      qScale: (qi + 1) / 5,
      qSlideCls: 'q-slide' + (s.qSlide ? ' ' + s.qSlide : ''),
      rTitle: this._nb(r.title), rWhy: this._nb(r.why), rHasBox: r.box, rPrice: r.price, rDur: r.dur, rDown: r.down,
      rFirst: s.qDone && s.qAns[3] === 0,
      rBookCal: rBook('cal'), rBookCall: rBook('call'),
      rTrHref: ({ hifu: 'hifu-lifting.html', usne: 'hijaluron-za-usne.html', booster: 'skin-booster.html' })[r.trId] || '#tretmani',
      rTrLabel: r.box ? 'pročitaj sve o tretmanu' : 'pogledaj sva tri tretmana',

      isCal: s.tab === 'cal', isCall: s.tab === 'call',
      tabCalCls: 'tab' + (s.tab === 'cal' ? ' is-on' : ''), tabCallCls: 'tab' + (s.tab === 'call' ? ' is-on' : ''),
      toCal: () => this.setState({ tab: 'cal' }), toCall: () => this.setState({ tab: 'call' }),
      source: s.source, quizResult: s.quizResult,
      calError, calOk: !calError,
      showStepper: s.calStep < 3,
      st1: s.calStep === 1 ? 'on' : '', st2: s.calStep === 2 ? 'on' : '', st3: s.calStep === 3 ? 'on' : '',
      step1: s.calStep === 1, step2: s.calStep === 2, step3: s.calStep === 3,
      takenMsg: s.takenMsg,
      visCount, visDays,
      prevDis: off === 0, nextDis: off >= maxOff,
      prevDays: () => { this.setState({ offset: Math.max(0, off - visCount), dayKey: null }); this._load(); },
      nextDays: () => { this.setState({ offset: Math.min(maxOff, off + visCount), dayKey: null }); this._load(); },
      loading: s.loading,
      hasSlots: !s.loading && slots.length > 0, noSlots: !s.loading && slots.length === 0,
      slots,
      nextFree: () => {
        const idx = days.findIndex(d => d.key === selKey);
        const nx = days.slice(idx + 1).find(d => d.slots.length);
        if (!nx) return;
        const ni = days.indexOf(nx);
        const newOff = ni >= off + visCount ? Math.min(maxOff, ni) : off;
        this.setState({ dayKey: nx.key, offset: newOff });
        if (newOff !== off) this._load();
      },
      noSlotPicked: !s.slot, step2Opacity: s.slot ? 1 : 0.4,
      toStep2: () => { if (s.slot) this.setState({ calStep: 2 }); },
      toStep1: () => this.setState({ calStep: 1 }),
      pickedLabel,
      confirmCal: () => {
        if (!this._validate()) return;
        if (demo === 'termin zauzet u međuvremenu' && !s.tookOnce) {
          this.setState({ taken: { ...s.taken, [s.slot]: true }, slot: null, calStep: 1, takenMsg: true, tookOnce: true });
          this._load();
          return;
        }
        this.setState({ calStep: 3, booked: { date: pickedDay.date, time: pickedTime, tr: s.f.treatment } });
      },
      calThanksTitle: this._nb(calThanksTitle), gcalUrl, bookedTr,

      f: s.f,
      onName: e => this._setF('name', e.target.value),
      onPhone: e => this._setF('phone', e.target.value),
      onEmail: e => this._setF('email', e.target.value),
      onTreatment: e => this._setF('treatment', e.target.value),
      onConsent: e => this._setF('consent', e.target.checked),
      onHp: e => this._setF('hp', e.target.value),
      fName: 'field' + (errs.name ? ' is-err' : ''), fPhone: 'field' + (errs.phone ? ' is-err' : ''),
      fEmail: 'field' + (errs.email ? ' is-err' : ''), fTr: 'field' + (errs.treatment ? ' is-err' : ''),
      eName: errs.name || '', ePhone: errs.phone || '', eEmail: errs.email || '', eTr: errs.treatment || '', eConsent: errs.consent || '',
      whenOpts: D.when.map(w => ({ label: w.l, sel: s.f.when === w.id, cls: 'chip' + (s.f.when === w.id ? ' is-sel' : ''), pick: () => this._setF('when', w.id) })),
      callForm: !s.callDone, callDone: s.callDone,
      submitCall: () => {
        if (s.f.hp) { this.setState({ callDone: true }); return; }
        if (!this._validate()) return;
        const t = s.f.treatment;
        this.setState({ callDone: true, callName: s.f.name.trim(), callTr: t, callWhen: this._callWhen() });
      },
      callThanksTitle: this._nb(s.callDone ? ('Hvala, ' + (s.callName || '') + '. ' + (s.callTr && s.callTr !== 'savet' ? 'Primili smo tvoj zahtev za konsultaciju za ' + D.tr[s.callTr].za + '.' : 'Primili smo tvoj zahtev za konsultaciju.')) : ''),
      callWhen: s.callWhen,

      faq: D.faq.map((x, i) => ({ q: this._nb(x.q), a: this._nb(x.a), open: s.faqOpen === i, plus: s.faqOpen === i ? 0 : 1, toggle: () => this.setState({ faqOpen: s.faqOpen === i ? -1 : i }) }))
    };
  }

  // ---------- zakazivanje: prava pozadina ----------
  _days() {
    return (this.state.dani || []).map((x) => {
      const p = String(x.datum).split('-').map(Number);
      const date = new Date(p[0], p[1] - 1, p[2]);
      return { key: x.datum, date, dow: date.getDay(), slots: Array.isArray(x.termini) ? x.termini : [] };
    });
  }
  _fetchTermini() {
    this.setState({ loading: true, apiErr: false });
    fetch('https://script.google.com/macros/s/AKfycbwTAJ72jQuwvjCJnRWfOJ2sOMhNlfbYDy6a7zYizNywz_l9AvfCMYMmcaT-vwrorDSZ/exec' + '?akcija=termini')
      .then((r) => r.json())
      .then((d) => {
        if (!d || d.ok !== true || !Array.isArray(d.dani)) throw new Error('odgovor');
        this.setState({ dani: d.dani, apiErr: false, loading: false });
      })
      .catch(() => this.setState({ dani: [], apiErr: true, loading: false }));
  }
  _send(podaci, onOk) {
    if (this.state.sending) return;
    const net = 'Nije poslato. Proveri internet i pokušaj ponovo.';
    this.setState({ sending: true, sendErr: '' });
    fetch('https://script.google.com/macros/s/AKfycbwTAJ72jQuwvjCJnRWfOJ2sOMhNlfbYDy6a7zYizNywz_l9AvfCMYMmcaT-vwrorDSZ/exec', { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(podaci) })
      .then((r) => r.json())
      .then((d) => {
        if (d && d.ok === true) { this.setState({ sending: false, sendErr: '' }); onOk(); return; }
        const g = d && d.greska;
        if (g === 'zauzeto' && podaci.tip === 'termin') {
          this.setState({ sending: false, sendErr: '', calStep: 1, slot: null, dayKey: null, takenMsg: true });
          this._fetchTermini();
          return;
        }
        this.setState({ sending: false, sendErr: g === 'previse' ? 'Već smo primili više zahteva sa ovog mejla. Pozovi nas na +381 65 381 9567.' : net });
      })
      .catch(() => this.setState({ sending: false, sendErr: net }));
  }
  // kada te Milica zove: prati izabrani čip (pon-pet 10-20 h, subota 10-14 h, nedelja zatvoreno)
  _callWhen(kada) {
    const n = new Date(), dow = n.getDay(), h = n.getHours();
    const radni = dow >= 1 && dow <= 5;
    const sledeci = (dow >= 1 && dow <= 4) || dow === 0 ? 'sutra' : 'u ponedeljak';
    if (kada === 'sub') {
      if (dow === 6 && h < 14) return h < 10 ? 'danas između 10 i 14 h' : 'danas do 14 h';
      if (dow === 5) return 'sutra između 10 i 14 h';
      if (dow === 6) return 'sledeće subote između 10 i 14 h';
      return 'u subotu između 10 i 14 h';
    }
    if (kada === 'pre15') {
      if (radni && h < 15) return h < 10 ? 'danas između 10 i 15 h' : 'danas do 15 h';
      return sledeci + ' između 10 i 15 h';
    }
    if (kada === 'posle15') {
      if (radni && h < 20) return h < 15 ? 'danas između 15 i 20 h' : 'danas do 20 h';
      return sledeci + ' između 15 i 20 h';
    }
    const open = (radni && h >= 10 && h < 20) || (dow === 6 && h >= 10 && h < 14);
    if (open) return 'u toku jednog radnog dana';
    if ((dow === 6 && h >= 14) || dow === 0) return 'u ponedeljak posle 10 h';
    if (h < 10) return 'danas posle 10 h';
    return 'sutra posle 10 h';
  }
  _izvor() { return ({ 'početna': 'pocetna', 'kviz': 'kviz', 'kontakt': 'kontakt' })[this.state.source] || 'pocetna'; }
  _kviz() { return this.state.quizResult || this._qLabel || ''; }
  _prvi() { return this.state.qDone ? (this.state.qAns[3] === 0 ? 'da' : 'ne') : ''; }
  _bkVals() {
    const s = this.state, f = s.f;
    const days = this._days();
    const osnova = () => ({ ime: f.name.trim(), telefon: f.phone.trim(), mejl: f.email.trim(), tretman: f.treatment, saglasnost: true });
    const zajedno = () => ({ izvor: this._izvor(), rezultatKviza: this._kviz(), prvi: this._prvi(), website: f.hp || '' });
    return {
      loading: !!s.loading,
      calError: !!s.apiErr, calOk: !s.apiErr,
      takenMsg: !!s.takenMsg,
      sending: !!s.sending, sendErr: s.sendErr || '',
      calBtn: s.sending ? 'Šaljem...' : 'Potvrdi termin',
      callBtn: s.sending ? 'Šaljem...' : 'Zakaži konsultaciju',
      toCal: () => this.setState({ tab: 'cal', sendErr: '' }),
      toCall: () => this.setState({ tab: 'call', sendErr: '' }),
      toStep2: () => { if (s.slot) this.setState({ calStep: 2, takenMsg: false, sendErr: '' }); },
      toStep1: () => this.setState({ calStep: 1, sendErr: '' }),
      onHp: (e) => this._setF('hp', e.target.value),
      confirmCal: () => {
        if (s.sending || !this._validate()) return;
        const pd = s.slot ? days.find((d) => s.slot.indexOf(d.key + ' ') === 0) : null;
        if (!pd) return;
        const vreme = s.slot.split(' ')[1];
        const b = osnova(), z = zajedno();
        this._send({ tip: 'termin', ime: b.ime, telefon: b.telefon, mejl: b.mejl, tretman: b.tretman, saglasnost: true, datum: pd.key, vreme,
          izvor: z.izvor, rezultatKviza: z.rezultatKviza, prvi: z.prvi, website: z.website },
          () => this.setState({ calStep: 3, takenMsg: false, booked: { date: pd.date, time: vreme, tr: f.treatment } }));
      },
      submitCall: () => {
        if (s.sending || !this._validate()) return;
        const b = osnova(), z = zajedno();
        this._send({ tip: 'poziv', ime: b.ime, telefon: b.telefon, mejl: b.mejl, tretman: b.tretman, saglasnost: true, kada: f.when,
          izvor: z.izvor, rezultatKviza: z.rezultatKviza, prvi: z.prvi, website: z.website },
          () => this.setState({ callDone: true, callName: f.name.trim(), callTr: f.treatment, callWhen: this._callWhen(f.when) }));
      }
    };
  }
  renderVals() { return Object.assign(this._renderVals0(), this._bkVals()); }

}

DC.mount({ templateHTML: "\n\n\n<div class=\"{{pageCls}}\">\n\n<!-- HEDER (komponenta) -->\n<header class=\"hdr\">\n  <div class=\"wrap hdr-in\">\n    <a class=\"logo\" href=\"#top\" aria-label=\"Aurea Estetika, početna\"><b>Aurea</b><span>Estetika</span></a>\n    <nav class=\"nav\" aria-label=\"Glavni meni\">\n      <a href=\"#tretmani\">Tretmani</a>\n      <a href=\"#kviz\">Kviz</a>\n      <a href=\"#dr-ana\">Dr Ana</a>\n      <a href=\"#pitanja\">Pitanja</a>\n      <a href=\"#kontakt\">Kontakt</a>\n      <a class=\"hdr-cta\" href=\"#zakazivanje\" onClick=\"{{goHome}}\">Zakaži konsultaciju</a>\n    </nav>\n    <button class=\"burger\" aria-label=\"Otvori meni\" onClick=\"{{openMenu}}\">\n      <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M3 10h22M3 18h22\"/></svg>\n    </button>\n  </div>\n</header>\n\n<sc-if value=\"{{menuOpen}}\" hint-placeholder-val=\"{{ false }}\">\n  <div class=\"overlay\" onClick=\"{{closeMenu}}\"></div>\n  <div class=\"drawer\" role=\"dialog\" aria-label=\"Meni\">\n    <div class=\"drawer-top\">\n      <span class=\"logo\"><b>Aurea</b></span>\n      <button class=\"burger\" style=\"display:block\" aria-label=\"Zatvori meni\" onClick=\"{{closeMenu}}\">\n        <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M7 7l14 14M21 7L7 21\"/></svg>\n      </button>\n    </div>\n    <a class=\"dl\" href=\"#tretmani\" onClick=\"{{closeMenu}}\">Tretmani</a>\n    <a class=\"dl\" href=\"#kviz\" onClick=\"{{closeMenu}}\">Kviz</a>\n    <a class=\"dl\" href=\"#dr-ana\" onClick=\"{{closeMenu}}\">Dr Ana</a>\n    <a class=\"dl\" href=\"#pitanja\" onClick=\"{{closeMenu}}\">Pitanja</a>\n    <a class=\"dl\" href=\"#kontakt\" onClick=\"{{closeMenu}}\">Kontakt</a>\n    <a class=\"btn\" href=\"#zakazivanje\" onClick=\"{{closeMenu}}\">Zakaži konsultaciju</a>\n  </div>\n</sc-if>\n\n<!-- HERO: pismo -->\n<section class=\"hero\" id=\"top\">\n  <div class=\"wrap hero-g\">\n    <div class=\"copy\">\n      <span class=\"eyebrow ha\" style=\"--d:0s\">Estetska ordinacija u srcu Novog Sada</span>\n      <h1 class=\"ha\" style=\"--d:.1s\">Prirodan izgled, uz lekara koji ti objasni <em>svaki korak</em></h1>\n      <div class=\"letter ha\" style=\"--d:.3s\">\n        <p>Pre svakog tretmana sedimo 20 minuta i razgovaramo: šta kod tebe ima smisla, šta ti ne treba i koliko košta. Tek onda odlučuješ.</p>\n      </div>\n      <div class=\"sign ha\" style=\"--d:.45s\"><span class=\"hand\">Ana</span><small>dr Ana Marković<br>specijalista dermatovenerologije</small></div>\n      <div class=\"btns ha\" style=\"--d:.55s\"><a class=\"btn\" href=\"#zakazivanje\" onClick=\"{{goHome}}\">Zakaži konsultaciju</a><a class=\"link\" href=\"#kviz\">Koji tretman je za tebe? Kviz od 1 minuta</a></div>\n    </div>\n    <div>\n      <figure class=\"pol\"><span class=\"tape\" aria-hidden=\"true\"></span><img src=\"img/7db5502b03df5d43aac526a37574c90e.webp\" alt=\"Dr Ana razgovara sa pacijentkinjom za stolom u ordinaciji\" fetchpriority=\"high\" srcset=\"img/7db5502b03df5d43aac526a37574c90e-480.webp 480w, img/7db5502b03df5d43aac526a37574c90e-960.webp 960w, img/7db5502b03df5d43aac526a37574c90e.webp 1584w\" sizes=\"(max-width: 768px) 300vw, 1300px\" decoding=\"async\"><figcaption>ovde počinje svaki prvi dolazak</figcaption></figure>\n      <p class=\"hand hnote\"><svg width=\"56\" height=\"48\" viewBox=\"0 0 56 48\" fill=\"none\" stroke=\"#2F4A86\" stroke-width=\"1.6\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M50 44C38 40 18 30 10 8\"/><path d=\"M4 16l6-9 8 6\"/></svg>konsultacija 3.000 din., odbija se od cene tretmana</p>\n    </div>\n  </div>\n</section>\n\n<!-- TRETMANI -->\n<section class=\"{{rv.tretmani}}\" id=\"tretmani\" style=\"padding-top:0\">\n  <div class=\"wrap\">\n    <div class=\"tr-head\">\n      <div><h2>Tri tretmana koje dr Ana radi <em>svake nedelje</em></h2></div>\n      <p>Ne radimo sve. Ovo su tretmani koje dr Ana zna u detalje, pa ti može tačno reći šta da očekuješ. Cena, priprema i oporavak su na stranici svakog tretmana.</p>\n    </div>\n    <div class=\"trl\">\n      <a class=\"tri\" href=\"hifu-lifting.html\">\n        <span class=\"num\">01</span>\n        <div><h3>HIFU lifting</h3><p>Za opuštenu kožu duž vilice i ispod brade. Ultrazvuk zateže dublji sloj kože, bez igle i bez dana oporavka.</p><div class=\"meta\"><b>od 24.000 din.</b><span class=\"hand\">rezultat dolazi postepeno, za 2 do 3 meseca</span></div></div>\n        <figure class=\"pol\"><span class=\"tape\" aria-hidden=\"true\" style=\"width:70px;margin-left:-35px\"></span><img src=\"img/a00bf4d68616b06bb6df3caccbf94b52.webp\" alt=\"\" srcset=\"img/a00bf4d68616b06bb6df3caccbf94b52-480.webp 480w, img/a00bf4d68616b06bb6df3caccbf94b52.webp 896w\" sizes=\"(max-width: 768px) 92vw, 40vw\" decoding=\"async\" loading=\"lazy\"><figcaption>aparat za HIFU</figcaption></figure>\n      </a>\n      <a class=\"tri\" href=\"hijaluron-za-usne.html\">\n        <span class=\"num\">02</span>\n        <div><h3>Hijaluron za usne</h3><p>Za jasniju ivicu ili malo više volumena. Počinjemo sa 0,5 ml, pa na kontroli odlučujemo da li dodajemo.</p><div class=\"meta\"><b>od 18.000 din.</b><span class=\"hand\">kontrola posle 2 nedelje je u ceni</span></div></div>\n        <figure class=\"pol\"><span class=\"tape\" aria-hidden=\"true\" style=\"width:70px;margin-left:-35px\"></span><img src=\"img/595958c5a345887e35b66d0b200c36fc.webp\" alt=\"\" srcset=\"img/595958c5a345887e35b66d0b200c36fc-480.webp 480w, img/595958c5a345887e35b66d0b200c36fc.webp 896w\" sizes=\"(max-width: 768px) 92vw, 40vw\" decoding=\"async\" loading=\"lazy\"><figcaption>usne, posle 2 nedelje</figcaption></figure>\n      </a>\n      <a class=\"tri\" href=\"skin-booster.html\">\n        <span class=\"num\">03</span>\n        <div><h3>Skin booster</h3><p>Za umornu, suvu kožu bez sjaja. Hidrira kožu iznutra, a crte lica ostaju potpuno iste.</p><div class=\"meta\"><b>20.000 din.</b><span class=\"hand\">dr Ana ga često predlaže umesto filera</span></div></div>\n        <figure class=\"pol\"><span class=\"tape\" aria-hidden=\"true\" style=\"width:70px;margin-left:-35px\"></span><img src=\"img/8f4a4f5ca2295e9ee3947d6bcbddcad0.webp\" alt=\"\" srcset=\"img/8f4a4f5ca2295e9ee3947d6bcbddcad0-480.webp 480w, img/8f4a4f5ca2295e9ee3947d6bcbddcad0.webp 896w\" sizes=\"(max-width: 768px) 92vw, 40vw\" decoding=\"async\" loading=\"lazy\"><figcaption>koža, bez filtera</figcaption></figure>\n      </a>\n    </div>\n    <div class=\"tr-foot\"><a class=\"btn\" href=\"#zakazivanje\" onClick=\"{{goHome}}\">Zakaži konsultaciju</a><a class=\"link\" href=\"#kviz\">Ne znaš koji? Reši kviz</a></div>\n  </div>\n</section>\n\n<!-- KVIZ -->\n<section class=\"{{rv.kviz}}\" id=\"kviz\">\n  <div class=\"wrap qz-g\">\n    <div>\n      <span class=\"eyebrow\">Kviz · 5 pitanja</span>\n      <h2>Nisi sigurna <em>odakle da kreneš?</em></h2>\n      <p class=\"sub\">Ista pitanja dr Ana postavlja na prvoj konsultaciji. Rezultat vidiš odmah, bez ostavljanja mejla. Kviz ne pita ništa o zdravlju.</p>\n    </div>\n\n    <div class=\"quiz\">\n      <sc-if value=\"{{qActive}}\" hint-placeholder-val=\"{{ true }}\">\n        <div class=\"q-top\"><span>pitanje {{qNum}} od 5</span><span>{{qLeft}}</span></div>\n        <div class=\"bar\"><i style=\"transform: scaleX({{qScale}})\"></i></div>\n        <div class=\"{{qSlideCls}}\">\n        <h3>{{qTitle}}</h3>\n        <div class=\"opts\">\n          <sc-for list=\"{{qOpts}}\" as=\"o\" hint-placeholder-count=\"4\">\n            <button class=\"{{o.cls}}\" onClick=\"{{o.pick}}\">{{o.label}}\n              <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" aria-hidden=\"true\"></svg>\n            </button>\n          </sc-for>\n        </div>\n        </div>\n        <div class=\"q-nav\">\n          <sc-if value=\"{{qCanBack}}\" hint-placeholder-val=\"{{ false }}\">\n            <button class=\"link\" onClick=\"{{qBack}}\">nazad</button>\n          </sc-if>\n          <span></span>\n        </div>\n      </sc-if>\n\n      <sc-if value=\"{{qCalc}}\" hint-placeholder-val=\"{{ false }}\">\n        <div class=\"calc\" role=\"status\"><span class=\"dots\" aria-hidden=\"true\"><i></i><i></i><i></i></span><p>računam tvoj rezultat</p></div>\n      </sc-if>\n\n      <sc-if value=\"{{qDone}}\" hint-placeholder-val=\"{{ false }}\">\n        <div class=\"q-res\">\n        <span class=\"eyebrow\">Tvoj rezultat</span>\n        <h3>{{rTitle}}</h3>\n        <p>{{rWhy}}</p>\n        <sc-if value=\"{{rHasBox}}\" hint-placeholder-val=\"{{ true }}\">\n          <div class=\"res-box\">\n            <div><small>Cena</small>{{rPrice}}</div>\n            <div><small>Trajanje</small>{{rDur}}</div>\n            <div><small>Oporavak</small>{{rDown}}</div>\n          </div>\n        </sc-if>\n        <sc-if value=\"{{rFirst}}\" hint-placeholder-val=\"{{ false }}\">\n          <p class=\"first\">Prvi put? Konsultacija traje 20 minuta i ne obavezuje te na tretman.</p>\n        </sc-if>\n        <p class=\"note\">Ovo nije dijagnoza. Dr Ana potvrđuje izbor na konsultaciji, kad vidi kožu.</p>\n        <div class=\"btns\">\n          <a class=\"btn\" href=\"#zakazivanje\" onClick=\"{{rBookCal}}\">Izaberi termin</a>\n          <a class=\"btn ghost\" href=\"#zakazivanje\" onClick=\"{{rBookCall}}\">Pozovite me</a>\n        </div>\n        <div class=\"q-nav\">\n          <a class=\"link\" href=\"{{rTrHref}}\">{{rTrLabel}}</a>\n          <button class=\"link\" onClick=\"{{qRestart}}\">ponovi kviz</button>\n        </div>\n        </div>\n      </sc-if>\n    </div>\n  </div>\n</section>\n\n<!-- RECENZIJE -->\n<section class=\"{{rv.recenzije}}\" id=\"recenzije\">\n  <div class=\"wrap\">\n    <div class=\"pull\">\n      <span class=\"mk\" aria-hidden=\"true\">“</span>\n      <blockquote>Najviše sam se plašila da će se videti da sam nešto radila. Koleginica mi je rekla da izgledam odmorno. I to je bilo to.</blockquote>\n      <cite><b>Snežana M., 48</b> · HIFU lifting</cite>\n    </div>\n    <div class=\"board\">\n      <figure class=\"rev c1\"><span class=\"tape\" aria-hidden=\"true\"></span><p class=\"q\">„Dr Ana mi je rekla da mi filer ne treba i predložila skin booster. Nisam očekivala da će me neko odgovoriti od skupljeg tretmana.“</p><figcaption class=\"who\">Ivana K., 39 · Skin booster</figcaption></figure>\n      <figure class=\"rev c2\"><div class=\"g-top\"><span class=\"g-tag\">sa Google-a, 5 od 5</span></div><p class=\"t\">Sve mi je objašnjeno pre nego što je išta počelo, a cena je bila ista kao na sajtu. Milica je jako ljubazna, a u čekaonici nema gužve.</p><figcaption class=\"who\">Jelena R., 42 · pre 3 nedelje</figcaption></figure>\n      <figure class=\"rev c3\"><p class=\"q\">„Usne sam radila prvi put. Počele smo sa pola mililitra, a na kontroli smo dodale još malo. Tačno onoliko koliko sam htela.“</p><figcaption class=\"who\">Marija P., 34 · Hijaluron za usne</figcaption></figure>\n      <figure class=\"rev c4\"><span class=\"tape\" aria-hidden=\"true\"></span><div class=\"g-top\"><span class=\"g-tag\">sa Google-a, 5 od 5</span></div><p class=\"t\">Kod dr Ane dolazim treću godinu. Nikad me nije nagovarala na nešto što mi ne treba, a kontrola posle dve nedelje je stvarno uključena u cenu.</p><figcaption class=\"who\">Dragana V., 51 · pre 2 meseca</figcaption></figure>\n      <figure class=\"rev c5\"><p class=\"q\">„Bila sam skeptična jer se ne vidi odmah. Posle dva meseca sam na slici sa letovanja opet videla svoju vilicu.“</p><figcaption class=\"who\">Vesna T., 52 · HIFU lifting</figcaption></figure>\n    </div>\n    <p class=\"rev-note\">Prosečna ocena 4,9 od 112 recenzija na Google-u · <a class=\"link\" style=\"font-size:15px\" href=\"https://www.google.com/maps/search/?api=1&query=TC+Promenada%2C+Bulevar+oslobo%C4%91enja+119%2C+21000+Novi+Sad\" target=\"_blank\" rel=\"noopener\">pročitaj sve</a></p>\n  </div>\n</section>\n\n<!-- DR ANA (komponenta) -->\n<section class=\"{{rv.drAna}}\" id=\"dr-ana\">\n  <div class=\"wrap\">\n    <div class=\"strip\">\n      <figure class=\"pol p-a\"><span class=\"tape\" aria-hidden=\"true\"></span><img class=\"skica\" src=\"img/5dfb058cd03358b25cecdc469a1b95a8.webp\" alt=\"Dr Ana na papiru crta skicu lica i objašnjava pacijentkinji plan tretmana\" srcset=\"img/5dfb058cd03358b25cecdc469a1b95a8-480.webp 480w, img/5dfb058cd03358b25cecdc469a1b95a8.webp 742w\" sizes=\"(max-width: 768px) 92vw, 40vw\" decoding=\"async\" loading=\"lazy\"><figcaption>prvo ti nacrta šta će raditi</figcaption></figure>\n      <figure class=\"pol p-b\"><span class=\"tape\" aria-hidden=\"true\"></span><img class=\"portrait\" src=\"img/455b61a8307fbd50882463399a7923b0.webp\" alt=\"Dr Ana Marković, specijalista dermatovenerologije\" srcset=\"img/455b61a8307fbd50882463399a7923b0-480.webp 480w, img/455b61a8307fbd50882463399a7923b0.webp 800w\" sizes=\"(max-width: 768px) 92vw, 40vw\" decoding=\"async\" loading=\"lazy\"><figcaption>dr Ana Marković</figcaption></figure>\n      <figure class=\"pol p-c\"><span class=\"tape\" aria-hidden=\"true\"></span><img src=\"img/f24573b839f1482dc529114bbc0f48cb.webp\" alt=\"Dr Ana Marković sa šoljom čaja pored prozora u ordinaciji\" srcset=\"img/f24573b839f1482dc529114bbc0f48cb-480.webp 480w, img/f24573b839f1482dc529114bbc0f48cb.webp 900w\" sizes=\"(max-width: 768px) 92vw, 40vw\" decoding=\"async\" loading=\"lazy\"><figcaption>između dve konsultacije</figcaption></figure>\n    </div>\n    <div class=\"row3\">\n      <div><h2>Dr Ana Marković</h2><p class=\"sub\">Specijalista dermatovenerologije. Svaki tretman u Aurei radi sama, od pregleda do kontrole. Milica, medicinska sestra, te dočeka i zakaže kontrolu.</p></div>\n      <p class=\"q\">„Polovina žena dođe po jedan tretman, a treba im drugi. Nekad im ne treba ništa. To moram da kažem pre nego što naplatim.“</p>\n      <p class=\"q\">„Uvek počinjem sa manje. Ako posle dve nedelje poželiš više, dodajemo. Obrnuto ne ide tako lako.“</p>\n    </div>\n    <div class=\"tline\">\n      <div><span class=\"hand\">2009.</span>Medicinski fakultet u Novom Sadu</div>\n      <div><span class=\"hand\">2015.</span>Specijalizacija iz dermatovenerologije</div>\n      <div><span class=\"hand\">2018.</span>Obuka za hijaluronske filere, Beč</div>\n      <div><span class=\"hand\">2020.</span>Sertifikat za rad sa HIFU aparatom</div>\n      <div><span class=\"hand\">2022.</span>Kurs anatomije lica, Prag</div>\n    </div>\n  </div>\n</section>\n\n<!-- ZAKAZIVANJE -->\n<section class=\"{{rv.zakazivanje}}\" id=\"zakazivanje\">\n  <div class=\"wrap book\">\n    <div class=\"book-left\">\n      <h2>Zakaži <em>konsultaciju</em></h2>\n      <p class=\"sub\">Ovde zakazuješ samo konsultaciju sa dr Anom: 20 minuta, 3.000 din., a iznos se odbija od cene tretmana. Tretman dogovaraš tek kad znaš šta i koliko.</p>\n      <p class=\"book-note\">Termin iz kalendara je potvrđen čim klikneš. Ako izabereš „Pozovite me“, Milica te zove u toku jednog radnog dana.</p>\n      <div class=\"steps3\">\n        <div class=\"st\"><span class=\"num\">1.</span><div><strong>Pričaš šta ti smeta</strong><p>Dr Ana pogleda kožu pri dnevnom svetlu.</p></div></div>\n        <div class=\"st\"><span class=\"num\">2.</span><div><strong>Dobijaš predlog</strong><p>Tretman, količinu, cenu i šta da očekuješ.</p></div></div>\n        <div class=\"st\"><span class=\"num\">3.</span><div><strong>Odlučuješ</strong><p>Danas, za nedelju dana ili nikad.</p></div></div>\n      </div>\n    </div>\n\n    <div class=\"widget\">\n      <div class=\"tabs\" role=\"tablist\">\n        <button class=\"{{tabCalCls}}\" role=\"tab\" aria-selected=\"{{isCal}}\" onClick=\"{{toCal}}\">Izaberi termin</button>\n        <button class=\"{{tabCallCls}}\" role=\"tab\" aria-selected=\"{{isCall}}\" onClick=\"{{toCall}}\">Pozovite me</button>\n      </div>\n      <div class=\"w-body\">\n        <input type=\"hidden\" name=\"izvor\" value=\"{{source}}\">\n        <input type=\"hidden\" name=\"rezultat_kviza\" value=\"{{quizResult}}\">\n        <!-- KARTICA: KALENDAR -->\n        <sc-if value=\"{{isCal}}\" hint-placeholder-val=\"{{ true }}\">\n          <sc-if value=\"{{calError}}\" hint-placeholder-val=\"{{ false }}\">\n            <div class=\"msg\" style=\"margin-top:0\">\n              <p style=\"font-weight:600;margin-bottom:6px\">Kalendar trenutno ne radi. Ostavi broj, pa te zovemo.</p>\n              <p style=\"color:var(--muted);font-size:15px;margin-bottom:16px\">Podaci koje si već unela ostaju sačuvani.</p>\n              <button class=\"btn\" onClick=\"{{toCall}}\">Pređi na „Pozovite me“</button>\n            </div>\n          </sc-if>\n\n          <sc-if value=\"{{calOk}}\" hint-placeholder-val=\"{{ true }}\">\n            <sc-if value=\"{{showStepper}}\" hint-placeholder-val=\"{{ true }}\">\n              <div class=\"stepper\">\n                <span class=\"{{st1}}\"><i>1</i>Dan i vreme</span>\n                <span class=\"{{st2}}\"><i>2</i>Podaci</span>\n                <span class=\"{{st3}}\"><i>3</i>Potvrda</span>\n              </div>\n            </sc-if>\n\n            <!-- korak 1 -->\n            <sc-if value=\"{{step1}}\" hint-placeholder-val=\"{{ true }}\">\n              <sc-if value=\"{{takenMsg}}\" hint-placeholder-val=\"{{ false }}\">\n                <p class=\"msg warn\">Termin je upravo zauzet. Izaberi drugi.</p>\n              </sc-if>\n              <div class=\"days-row\">\n                <button class=\"arrow\" aria-label=\"Prethodni dani\" disabled=\"{{prevDis}}\" onClick=\"{{prevDays}}\">\n                  <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><path d=\"M10 3L5 8l5 5\"/></svg>\n                </button>\n                <div class=\"days\" style=\"grid-template-columns: repeat({{visCount}}, minmax(0, 1fr))\">\n                  <sc-for list=\"{{visDays}}\" as=\"d\" hint-placeholder-count=\"5\">\n                    <button class=\"{{d.cls}}\" onClick=\"{{d.pick}}\" aria-pressed=\"{{d.sel}}\"><small>{{d.dow}}</small><b>{{d.num}}</b><em>{{d.mon}}</em></button>\n                  </sc-for>\n                </div>\n                <button class=\"arrow\" aria-label=\"Sledeći dani\" disabled=\"{{nextDis}}\" onClick=\"{{nextDays}}\">\n                  <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><path d=\"M6 3l5 5-5 5\"/></svg>\n                </button>\n              </div>\n\n              <sc-if value=\"{{loading}}\" hint-placeholder-val=\"{{ false }}\">\n                <div class=\"slots\" aria-label=\"Učitavanje termina\">\n                  <span class=\"skel\"></span><span class=\"skel\"></span><span class=\"skel\"></span><span class=\"skel\"></span>\n                  <span class=\"skel\"></span><span class=\"skel\"></span><span class=\"skel\"></span><span class=\"skel\"></span>\n                </div>\n              </sc-if>\n              <sc-if value=\"{{hasSlots}}\" hint-placeholder-val=\"{{ true }}\">\n                <div class=\"slots\">\n                  <sc-for list=\"{{slots}}\" as=\"s\" hint-placeholder-count=\"8\">\n                    <button class=\"{{s.cls}}\" onClick=\"{{s.pick}}\">{{s.t}}</button>\n                  </sc-for>\n                </div>\n              </sc-if>\n              <sc-if value=\"{{noSlots}}\" hint-placeholder-val=\"{{ false }}\">\n                <div class=\"msg\">\n                  <p style=\"margin-bottom:16px\">Ovog dana nema slobodnih termina.</p>\n                  <button class=\"btn ghost sm\" onClick=\"{{nextFree}}\">Sledeći slobodan dan</button>\n                </div>\n              </sc-if>\n\n              <div class=\"cal-foot\">\n                <p>Konsultacija · 20 min · 3.000 din., odbija se od cene tretmana</p>\n                <button class=\"btn\" onClick=\"{{toStep2}}\" disabled=\"{{noSlotPicked}}\" style=\"opacity: {{step2Opacity}}\">Dalje</button>\n              </div>\n            </sc-if>\n\n            <!-- korak 2 -->\n            <sc-if value=\"{{step2}}\" hint-placeholder-val=\"{{ false }}\">\n              <div class=\"summary\"><span><b>{{pickedLabel}}</b> · konsultacija 20 min</span><button class=\"link\" onClick=\"{{toStep1}}\">Promeni</button></div>\n              <div class=\"form\">\n                <div class=\"row2\">\n                  <div class=\"{{fName}}\"><label for=\"c-name\">Ime</label><input id=\"c-name\" class=\"input\" autocomplete=\"given-name\" value=\"{{f.name}}\" onChange=\"{{onName}}\"><sc-if value=\"{{eName}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eName}}</p></sc-if></div>\n                  <div class=\"{{fPhone}}\"><label for=\"c-phone\">Telefon</label><input id=\"c-phone\" class=\"input\" type=\"tel\" autocomplete=\"tel\" placeholder=\"064 123 4567\" value=\"{{f.phone}}\" onChange=\"{{onPhone}}\"><sc-if value=\"{{ePhone}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{ePhone}}</p></sc-if></div>\n                </div>\n                <div class=\"{{fEmail}}\"><label for=\"c-email\">Mejl</label><input id=\"c-email\" class=\"input\" type=\"email\" autocomplete=\"email\" value=\"{{f.email}}\" onChange=\"{{onEmail}}\"><sc-if value=\"{{eEmail}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eEmail}}</p></sc-if></div>\n                <div class=\"{{fTr}}\"><label for=\"c-tr\">Tretman</label>\n                  <select id=\"c-tr\" class=\"input\" value=\"{{f.treatment}}\" onChange=\"{{onTreatment}}\">\n                    <option value=\"\">Izaberi tretman</option>\n                    <option value=\"hifu\">HIFU lifting</option>\n                    <option value=\"usne\">Hijaluron za usne</option>\n                    <option value=\"booster\">Skin booster</option>\n                    <option value=\"savet\">Nisam sigurna, želim savet</option>\n                  </select>\n                  <sc-if value=\"{{eTr}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eTr}}</p></sc-if>\n                </div>\n                <div>\n                  <label class=\"check\"><input type=\"checkbox\" checked=\"{{f.consent}}\" onChange=\"{{onConsent}}\"><span>Slažem se da me klinika kontaktira u vezi sa konsultacijom. <button class=\"link\" style=\"font-size:14.5px\" onClick=\"{{openPrivacy}}\">Politika privatnosti</button></span></label>\n                  <sc-if value=\"{{eConsent}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eConsent}}</p></sc-if>\n                </div>\n                <div class=\"hp\" aria-hidden=\"true\"><label for=\"c-web\">Veb sajt</label><input id=\"c-web\" name=\"website\" tabindex=\"-1\" autocomplete=\"off\" value=\"{{f.hp}}\" onChange=\"{{onHp}}\"></div>\n<div class=\"submit-row\"><button class=\"btn\" onClick=\"{{confirmCal}}\" disabled=\"{{sending}}\">{{calBtn}}</button></div>\n<sc-if value=\"{{sendErr}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{sendErr}}</p></sc-if>\n\n              </div>\n            </sc-if>\n\n            <!-- korak 3: hvala -->\n            <sc-if value=\"{{step3}}\" hint-placeholder-val=\"{{ false }}\">\n              <div class=\"thanks\">\n                <svg class=\"check-anim\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"28\" cy=\"28\" r=\"26\" stroke=\"#B89A68\" pathLength=\"1\"/><path d=\"M17 29l7 7 15-16\" stroke=\"#1F3D2F\" pathLength=\"1\"/></svg>\n                <span class=\"eyebrow\">Termin je potvrđen</span>\n                <h3>{{calThanksTitle}}</h3>\n                <div class=\"tsteps\">\n                  <div><span class=\"num\">·</span><span><b>Tretman:</b> konsultacija za {{bookedTr}}</span></div>\n                  <div><span class=\"num\">·</span><span><b>Adresa:</b> Bulevar oslobođenja 119, TC Promenada, 2. sprat, Novi Sad.</span></div>\n                </div>\n                <div class=\"map-box\"><div class=\"map-fb\" aria-hidden=\"true\"><svg class=\"map-art\" viewBox=\"0 0 1000 380\" preserveAspectRatio=\"xMidYMid slice\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"><path d=\"M-20 300 L1020 60\"/><path d=\"M-20 330 L1020 90\" stroke-width=\"2.4\"/><path d=\"M120 -20 L260 400\"/><path d=\"M420 -20 L560 400\"/><path d=\"M700 -20 L840 400\"/><path d=\"M-20 120 L1020 200\"/><path d=\"M-20 40 C300 80 600 20 1020 120\"/></g></svg><div class=\"map-pin\"><span class=\"dot\"></span><b>Aurea · TC Promenada</b><span>Bulevar oslobođenja 119, Novi Sad</span><a class=\"link\" href=\"https://www.google.com/maps/search/?api=1&query=TC+Promenada%2C+Bulevar+oslobo%C4%91enja+119%2C+21000+Novi+Sad\" target=\"_blank\" rel=\"noopener\">Otvori u Google mapama</a></div></div><iframe class=\"map-frame sm\" title=\"Mapa: Aurea Estetika, TC Promenada, Bulevar oslobođenja 119, Novi Sad\" src=\"https://maps.google.com/maps?q=TC%20Promenada%2C%20Bulevar%20oslobo%C4%91enja%20119%2C%20Novi%20Sad&z=16&hl=sr&output=embed\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" allowfullscreen></iframe><div class=\"map-actions\"><a class=\"btn ghost sm\" href=\"https://www.google.com/maps/dir/?api=1&destination=TC+Promenada%2C+Bulevar+oslobo%C4%91enja+119%2C+21000+Novi+Sad\" target=\"_blank\" rel=\"noopener\">Uputstva do ordinacije</a><a class=\"link\" href=\"https://www.google.com/maps/search/?api=1&query=TC+Promenada%2C+Bulevar+oslobo%C4%91enja+119%2C+21000+Novi+Sad\" target=\"_blank\" rel=\"noopener\">Otvori u Google mapama</a><a class=\"link\" href=\"https://waze.com/ul?q=TC%20Promenada%20Novi%20Sad&navigate=yes\" target=\"_blank\" rel=\"noopener\">Waze</a></div></div>\n                <div class=\"btns\" style=\"margin-top:0\">\n                  <a class=\"btn\" href=\"{{gcalUrl}}\" target=\"_blank\" rel=\"noopener\">Dodaj u svoj kalendar</a>\n                  <a class=\"btn ghost\" href=\"viber://chat?number=%2B381653819567\">Piši nam na Viber</a>\n                </div>\n                <div class=\"q-nav\">\n                  <a class=\"link\" href=\"viber://chat?number=%2B381653819567\">Promeni termin</a>\n                  <a class=\"link\" href=\"#tretmani\">Pročitaj o tretmanu</a>\n                </div>\n              </div>\n            </sc-if>\n          </sc-if>\n        </sc-if>\n\n        <!-- KARTICA: POZOVITE ME -->\n        <sc-if value=\"{{isCall}}\" hint-placeholder-val=\"{{ false }}\">\n          <sc-if value=\"{{callForm}}\" hint-placeholder-val=\"{{ true }}\">\n            <div class=\"form\">\n              <div class=\"row2\">\n                <div class=\"{{fName}}\"><label for=\"p-name\">Ime <small>(dovoljno je samo ime)</small></label><input id=\"p-name\" class=\"input\" autocomplete=\"given-name\" value=\"{{f.name}}\" onChange=\"{{onName}}\"><sc-if value=\"{{eName}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eName}}</p></sc-if></div>\n                <div class=\"{{fPhone}}\"><label for=\"p-phone\">Telefon <small>(zovemo na ovaj broj)</small></label><input id=\"p-phone\" class=\"input\" type=\"tel\" autocomplete=\"tel\" placeholder=\"064 123 4567\" value=\"{{f.phone}}\" onChange=\"{{onPhone}}\"><sc-if value=\"{{ePhone}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{ePhone}}</p></sc-if></div>\n              </div>\n              <div class=\"{{fEmail}}\"><label for=\"p-email\">Mejl <small>(šaljemo uputstvo za pripremu)</small></label><input id=\"p-email\" class=\"input\" type=\"email\" autocomplete=\"email\" value=\"{{f.email}}\" onChange=\"{{onEmail}}\"><sc-if value=\"{{eEmail}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eEmail}}</p></sc-if></div>\n              <div class=\"{{fTr}}\"><label for=\"p-tr\">Tretman</label>\n                <select id=\"p-tr\" class=\"input\" value=\"{{f.treatment}}\" onChange=\"{{onTreatment}}\">\n                  <option value=\"\">Izaberi tretman</option>\n                  <option value=\"hifu\">HIFU lifting</option>\n                  <option value=\"usne\">Hijaluron za usne</option>\n                  <option value=\"booster\">Skin booster</option>\n                  <option value=\"savet\">Nisam sigurna, želim savet</option>\n                </select>\n                <sc-if value=\"{{eTr}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eTr}}</p></sc-if>\n              </div>\n              <div class=\"field\"><label>Kada ti odgovara da te pozovemo? <small>(nije obavezno)</small></label>\n                <div class=\"chips\">\n                  <sc-for list=\"{{whenOpts}}\" as=\"w\" hint-placeholder-count=\"4\">\n                    <button class=\"{{w.cls}}\" onClick=\"{{w.pick}}\" aria-pressed=\"{{w.sel}}\">{{w.label}}</button>\n                  </sc-for>\n                </div>\n              </div>\n              <div class=\"hp\" aria-hidden=\"true\"><label for=\"p-web\">Veb sajt</label><input id=\"p-web\" name=\"website\" autocomplete=\"off\" value=\"{{f.hp}}\" onChange=\"{{onHp}}\"></div>\n              <div>\n                <label class=\"check\"><input type=\"checkbox\" checked=\"{{f.consent}}\" onChange=\"{{onConsent}}\"><span>Slažem se da me klinika kontaktira u vezi sa konsultacijom. <button class=\"link\" style=\"font-size:14.5px\" onClick=\"{{openPrivacy}}\">Politika privatnosti</button></span></label>\n                <sc-if value=\"{{eConsent}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{eConsent}}</p></sc-if>\n              </div>\n              <div>\n                <div class=\"submit-row\">\n                  <button class=\"btn\" onClick=\"{{submitCall}}\" disabled=\"{{sending}}\">{{callBtn}}</button>\n                  <a class=\"btn ghost\" href=\"viber://chat?number=%2B381653819567\">Radije Viber\n                  </a>\n                </div>\n                <sc-if value=\"{{sendErr}}\" hint-placeholder-val=\"{{ false }}\"><p class=\"err\">{{sendErr}}</p></sc-if>\n                <p class=\"fine\">Javljamo se u roku od jednog radnog dana.</p>\n              </div>\n            </div>\n          </sc-if>\n\n          <sc-if value=\"{{callDone}}\" hint-placeholder-val=\"{{ false }}\">\n            <div class=\"thanks\">\n              <svg class=\"check-anim\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"28\" cy=\"28\" r=\"26\" stroke=\"#B89A68\" pathLength=\"1\"/><path d=\"M17 29l7 7 15-16\" stroke=\"#1F3D2F\" pathLength=\"1\"/></svg>\n              <span class=\"eyebrow\">Zahtev je poslat</span>\n              <h3>{{callThanksTitle}}</h3>\n              <div class=\"tsteps\">\n                <div><span class=\"num\">01</span><span>Milica sa recepcije te zove {{callWhen}}.</span></div>\n                <div><span class=\"num\">02</span><span>Dogovarate termin konsultacije.</span></div>\n                <div><span class=\"num\">03</span><span>Na mejl ti je već stiglo uputstvo za pripremu.</span></div>\n              </div>\n              <div class=\"btns\" style=\"margin-top:0\">\n                <a class=\"btn\" href=\"viber://chat?number=%2B381653819567\">Piši nam na Viber</a>\n                <a class=\"btn ghost\" href=\"#tretmani\">Pročitaj o tretmanu</a>\n              </div>\n            </div>\n          </sc-if>\n        </sc-if>\n      </div>\n      <p class=\"demo-note\"><span>Ovo je demo projekat. Termini su izmišljeni i ništa se zaista ne zakazuje.</span></p>\n    </div>\n  </div>\n</section>\n\n<!-- PITANJA -->\n<section class=\"{{rv.pitanja}}\" id=\"pitanja\">\n  <div class=\"wrap fq-g\">\n    <div>\n      <h2>Šta nas najčešće <em>pitaju</em></h2>\n    </div>\n    <div class=\"faq\">\n      <sc-for list=\"{{faq}}\" as=\"q\" hint-placeholder-count=\"9\">\n        <div class=\"faq-item\">\n          <button class=\"faq-q\" aria-expanded=\"{{q.open}}\" onClick=\"{{q.toggle}}\">{{q.q}}\n            <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" stroke=\"#2F4A86\" stroke-width=\"1.4\" aria-hidden=\"true\"><path d=\"M4 11h14\"/><path d=\"M11 4v14\" style=\"opacity: {{q.plus}}\"/></svg>\n          </button>\n          <sc-if value=\"{{q.open}}\" hint-placeholder-val=\"{{ false }}\">\n            <p class=\"faq-a\">{{q.a}}</p>\n          </sc-if>\n        </div>\n      </sc-for>\n    </div>\n  </div>\n</section>\n\n<!-- KONTAKT -->\n<section class=\"{{rv.kontakt}}\" id=\"kontakt\">\n  <div class=\"wrap\">\n    <div class=\"kt-head\">\n      <h2>Gde nas <em>nalaziš</em></h2>\n      <p class=\"kt-adr\">Bulevar oslobođenja 119, TC Promenada, drugi sprat, 21000 Novi Sad</p>\n    </div>\n    <div class=\"map-box big\"><div class=\"map-fb\" aria-hidden=\"true\"><svg class=\"map-art\" viewBox=\"0 0 1000 380\" preserveAspectRatio=\"xMidYMid slice\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"><path d=\"M-20 300 L1020 60\"/><path d=\"M-20 330 L1020 90\" stroke-width=\"2.4\"/><path d=\"M120 -20 L260 400\"/><path d=\"M420 -20 L560 400\"/><path d=\"M700 -20 L840 400\"/><path d=\"M-20 120 L1020 200\"/><path d=\"M-20 40 C300 80 600 20 1020 120\"/></g></svg><div class=\"map-pin\"><span class=\"dot\"></span><b>Aurea · TC Promenada</b><span>Bulevar oslobođenja 119, Novi Sad</span><a class=\"link\" href=\"https://www.google.com/maps/search/?api=1&query=TC+Promenada%2C+Bulevar+oslobo%C4%91enja+119%2C+21000+Novi+Sad\" target=\"_blank\" rel=\"noopener\">Otvori u Google mapama</a></div></div><iframe class=\"map-frame\" title=\"Mapa: Aurea Estetika, TC Promenada, Bulevar oslobođenja 119, Novi Sad\" src=\"https://maps.google.com/maps?q=TC%20Promenada%2C%20Bulevar%20oslobo%C4%91enja%20119%2C%20Novi%20Sad&z=16&hl=sr&output=embed\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" allowfullscreen></iframe></div>\n    <div class=\"info\">\n      <div><small>Telefon i Viber</small><p><a class=\"link\" href=\"tel:+381653819567\">+381 65 381 9567</a></p></div>\n      <div><small>Mejl</small><p><a class=\"link\" href=\"mailto:kontakt@aurea-estetika.rs\">kontakt@aurea-estetika.rs</a></p></div>\n      <div><small>Radno vreme</small><div class=\"hours\"><span>Pon-pet</span><span>10-20 h</span><span>Subota</span><span>10-14 h</span><span>Nedelja</span><span>zatvoreno</span></div></div>\n      <div><small>Ulaz i parking</small><p>Glavni ulaz Promenade ili garaža tržnog centra, pa liftom na drugi sprat. Na vratima piše Aurea.</p></div>\n    </div>\n    <div class=\"btns\"><a class=\"btn\" href=\"#zakazivanje\" onClick=\"{{goContact}}\">Zakaži konsultaciju</a></div>\n  </div>\n</section>\n\n<!-- FUTER (komponenta) -->\n<footer class=\"ft dark\">\n  <div class=\"wrap\">\n    <p class=\"hand ft-note\">Ako ti je lakše da pričaš nego da pišeš, pozovi <a href=\"tel:+381653819567\">+381 65 381 9567</a>. Javlja se Milica.</p>\n    <div class=\"ft-links\">\n      <div><h4>Tretmani</h4><ul><li><a href=\"hifu-lifting.html\">HIFU lifting</a></li><li><a href=\"hijaluron-za-usne.html\">Hijaluron za usne</a></li><li><a href=\"skin-booster.html\">Skin booster</a></li></ul></div>\n      <div><h4>Aurea</h4><ul><li><a href=\"index.html\">Početna</a></li><li><a href=\"#dr-ana\">Dr Ana</a></li><li><a href=\"#kviz\">Kviz</a></li><li><a href=\"#kontakt\">Kontakt</a></li></ul></div>\n      <div><h4>Ostalo</h4><ul><li><a href=\"#\">Instagram</a></li><li><a href=\"viber://chat?number=%2B381653819567\">Viber</a></li><li><a href=\"mailto:kontakt@aurea-estetika.rs\">kontakt@aurea-estetika.rs</a></li><li><button onClick=\"{{openPrivacy}}\">Politika privatnosti</button></li></ul></div>\n    </div>\n    <div class=\"ft-bot\"><span>© 2026 Aurea Estetika · Bulevar oslobođenja 119, Novi Sad</span><span>dr Ana Marković, specijalista dermatovenerologije</span></div>\n  </div>\n</footer>\n\n<sc-if value=\"{{privacyOpen}}\" hint-placeholder-val=\"{{ false }}\">\n  <div class=\"overlay\" style=\"z-index:50\" onClick=\"{{closePrivacy}}\"></div>\n  <div class=\"modal\" role=\"dialog\" aria-label=\"Politika privatnosti\">\n    <h3>Politika privatnosti</h3>\n    <p><strong>Ko obrađuje podatke.</strong> Aurea Estetika, Bulevar oslobođenja 119, Novi Sad.</p>\n    <p><strong>Koje podatke uzimamo.</strong> Ime, telefon, mejl, tretman koji te zanima i termin koji si izabrala.</p>\n    <p><strong>Zašto.</strong> Samo da bismo te kontaktirali u vezi sa konsultacijom i poslali ti uputstvo za pripremu. Ne šaljemo reklamne poruke i ne dajemo podatke drugima.</p>\n    <p><strong>Koliko dugo.</strong> Podatke čuvamo 12 meseci od poslednjeg kontakta, pa ih brišemo.</p>\n    <p><strong>Tvoja prava.</strong> Možeš da tražiš uvid, ispravku ili brisanje podataka. Piši na privatnost@aurea-estetika.rs. Podatke obrađujemo u skladu sa Zakonom o zaštiti podataka o ličnosti.</p>\n    <div class=\"btns\"><button class=\"btn\" onClick=\"{{closePrivacy}}\">Zatvori</button></div>\n  </div>\n</sc-if>\n\n</div>\n", root: 'app', Component: Component, props: {"animacije": "uvek uključene"} });
