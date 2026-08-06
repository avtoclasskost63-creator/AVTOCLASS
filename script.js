// АВТОКЛАСС — минимальный JS: мобильное меню + год в футере
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burger');
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('main-nav');

  if (burger && header && nav) {
    burger.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
