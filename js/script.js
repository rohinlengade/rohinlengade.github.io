(function () {
  var root = document.documentElement;
  var toggleBtns = document.querySelectorAll('.theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggleBtns.forEach(function (btn) {
      btn.setAttribute('aria-pressed', theme === 'dark');
      var knob = btn.querySelector('.knob');
      if (knob) knob.textContent = theme === 'dark' ? '\u263E' : '\u2600';
    });
  }

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');

  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  var mobileToggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var entryToggles = document.querySelectorAll('.entry-toggle');
  entryToggles.forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isOpen);
      panel.classList.toggle('is-open', !isOpen);
      var label = btn.querySelector('span');
      if (label) label.textContent = isOpen ? 'View photos' : 'Hide photos';
    });
  });
})();
