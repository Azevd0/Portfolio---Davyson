(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const navPanel = document.querySelector('.nav-links');

  function closeMenu() {
    navPanel.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = navPanel.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav') && navPanel.classList.contains('is-open')) closeMenu();
  });

  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
  const setCurrent = id => {
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const onScroll = () => {
    const threshold = 165;
    let current = '';
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    }
    setCurrent(current);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('.tech-track');
    const prev = carousel.querySelector('[data-direction="prev"]');
    const next = carousel.querySelector('[data-direction="next"]');
    if (!prev || !next) return;

    function updateControls() {
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    }

    function move(direction) {
      const chip = track.querySelector('.tech-chip');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 9;
      const step = (chip ? chip.getBoundingClientRect().width : 130) + gap;
      track.scrollBy({ left: direction * step * 2, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }

    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    updateControls();
  });
})();
