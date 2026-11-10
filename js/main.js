/* Cuscuz Restaurante — main.js (JS puro) */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var body = document.body;

  /* ---------- Preloader ---------- */
  var pre = $('#preloader'), bar = $('#preloaderBar'), pct = $('#preloaderPct');
  var progress = 0, loaded = false, started = Date.now(), MIN = 1900;

  function setProgress(v) {
    progress = Math.min(100, v);
    bar.style.width = progress + '%';
    pct.textContent = Math.round(progress) + '%';
  }
  var tick = setInterval(function () {
    var elapsed = Date.now() - started;
    var target = loaded ? 100 : Math.min(88, (elapsed / MIN) * 88);
    setProgress(Math.min(target, progress + (target - progress) * 0.16 + 0.4));
    if (progress >= 99.5 && loaded && elapsed >= MIN) { clearInterval(tick); setProgress(100); finish(); }
  }, 40);

  function finish() {
    setTimeout(function () {
      pre.classList.add('is-done');
      body.classList.remove('is-loading');
      body.classList.add('is-ready');
      staggerHero();
      setTimeout(function () { pre.classList.add('is-gone'); }, 1500);
    }, 250);
  }
  function onLoaded() { loaded = true; }
  if (document.readyState === 'complete') onLoaded(); else window.addEventListener('load', onLoaded);
  setTimeout(onLoaded, 6000); // segurança: não trava se algum recurso demorar

  function staggerHero() {
    $$('[data-hero]').forEach(function (el, i) { el.style.transitionDelay = (0.15 + i * 0.1) + 's'; });
  }

  /* ---------- Header ---------- */
  var header = $('#header');
  var wa = $('.wa-float');
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-stuck', y > 30);
    wa.classList.toggle('is-show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  var burger = $('#burger'), nav = $('#nav');
  function toggleNav(open) {
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { toggleNav(burger.getAttribute('aria-expanded') !== 'true'); });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { toggleNav(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { toggleNav(false); closeLb(); } });

  /* Link ativo conforme a seção */
  var links = $$('.nav ul a');
  var sections = links.map(function (a) { return $(a.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }

  /* ---------- Reveal ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Placeholders de imagem ---------- */
  $$('.ph').forEach(function (ph) {
    var img = $('img', ph);
    if (!img) return;
    function ok() { if (img.naturalWidth > 0) ph.classList.add('has-img'); }
    img.addEventListener('load', ok);
    img.addEventListener('error', function () { ph.classList.remove('has-img'); });
    if (img.complete) ok();
  });

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox'), lbImg = $('#lbImg');
  function openLb(src, alt) { lbImg.src = src; lbImg.alt = alt || ''; lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); }
  function closeLb() { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); }
  $$('.mosaic .ph').forEach(function (ph) {
    ph.addEventListener('click', function () {
      var img = $('img', ph);
      if (ph.classList.contains('has-img')) openLb(img.currentSrc || img.src, img.alt);
    });
  });
  $('#lbClose').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });

  /* ---------- Slider de depoimentos ---------- */
  var track = $('#sliderTrack'), dotsWrap = $('#dots');
  var slides = $$('.review', track), dots = [];
  function perView() { return window.innerWidth <= 620 ? 1 : window.innerWidth <= 960 ? 2 : 3; }
  function pages() { return Math.max(1, slides.length - perView() + 1); }
  function buildDots() {
    dotsWrap.innerHTML = ''; dots = [];
    for (var i = 0; i < pages(); i++) {
      (function (i) {
        var b = document.createElement('button');
        b.setAttribute('aria-label', 'Ir para o depoimento ' + (i + 1));
        b.addEventListener('click', function () { goTo(i); });
        dotsWrap.appendChild(b); dots.push(b);
      })(i);
    }
    updateDots();
  }
  function stepSize() { return slides[1] ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth; }
  function current() { return Math.round(track.scrollLeft / stepSize()); }
  function goTo(i) { track.scrollTo({ left: i * stepSize(), behavior: 'smooth' }); }
  function updateDots() { var c = Math.min(current(), dots.length - 1); dots.forEach(function (d, i) { d.classList.toggle('is-on', i === c); }); }
  track.addEventListener('scroll', function () { window.requestAnimationFrame(updateDots); }, { passive: true });
  $('#prev').addEventListener('click', function () { goTo(Math.max(0, current() - 1)); });
  $('#next').addEventListener('click', function () { var n = current() + 1; goTo(n >= pages() ? 0 : n); });
  window.addEventListener('resize', buildDots);
  buildDots();

  var auto = setInterval(function () { if (!document.hidden && !track.matches(':hover')) { var n = current() + 1; goTo(n >= pages() ? 0 : n); } }, 7000);
  track.addEventListener('pointerdown', function () { clearInterval(auto); });

  /* ---------- Player de vídeo ---------- */
  var player = $('#player'), film = $('#film');
  if (player && film) {
    var pFill = $('#pFill'), pTrack = $('#pTrack'), manual = false;
    var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    player.classList.add('is-muted');
    var sync = function () { player.classList.toggle('is-playing', !film.paused); $('#pPlay').setAttribute('aria-label', film.paused ? 'Reproduzir vídeo' : 'Pausar vídeo'); };
    var toggle = function () { if (film.paused) { manual = false; film.play().catch(function () {}); } else { manual = true; film.pause(); } };
    film.addEventListener('play', sync); film.addEventListener('pause', sync);
    film.addEventListener('click', toggle);
    $('#pBig').addEventListener('click', toggle);
    $('#pPlay').addEventListener('click', toggle);
    $('#pMute').addEventListener('click', function () {
      film.muted = !film.muted;
      player.classList.toggle('is-muted', film.muted);
      this.setAttribute('aria-label', film.muted ? 'Ativar som' : 'Desativar som');
    });
    film.addEventListener('timeupdate', function () {
      var p = film.duration ? (film.currentTime / film.duration) * 100 : 0;
      pFill.style.width = p + '%'; pTrack.setAttribute('aria-valuenow', Math.round(p));
    });
    pTrack.addEventListener('click', function (e) {
      var r = pTrack.getBoundingClientRect();
      film.currentTime = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * film.duration;
    });
    pTrack.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') film.currentTime = Math.min(film.duration, film.currentTime + 5);
      if (e.key === 'ArrowLeft') film.currentTime = Math.max(0, film.currentTime - 5);
    });
    // fundo desfocado (apenas em telas largas), sincronizado com o vídeo principal
    var bgv = $('#filmBg'), wide = window.matchMedia('(min-width:621px)');
    function bgSync() {
      if (!bgv) return;
      if (!wide.matches) { bgv.pause(); return; }
      if (Math.abs(bgv.currentTime - film.currentTime) > 0.35) bgv.currentTime = film.currentTime;
      if (film.paused) bgv.pause(); else bgv.play().catch(function () {});
    }
    ['play', 'pause', 'seeked', 'playing'].forEach(function (ev) { film.addEventListener(ev, bgSync); });
    film.addEventListener('timeupdate', function () { if (bgv && wide.matches && !film.paused && Math.abs(bgv.currentTime - film.currentTime) > 0.5) bgv.currentTime = film.currentTime; });
    if ('IntersectionObserver' in window && !reduce) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (en.isIntersecting) { if (!manual) film.play().catch(function () {}); }
          else if (!film.paused) { film.pause(); }
        });
      }, { threshold: 0.5 }).observe(player);
    }
  }

  /* ---------- Parallax suave no hero ---------- */
  var visual = $('.hero__visual');
  if (visual && window.matchMedia('(min-width:961px)').matches && !window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
    var plate = $('.plate', visual);
    window.addEventListener('mousemove', function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 14, y = (e.clientY / window.innerHeight - 0.5) * 14;
      plate.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    }, { passive: true });
    plate.style.transition = 'transform .6s ease-out';
  }
})();
