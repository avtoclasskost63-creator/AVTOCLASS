// АВТОКЛАСС — фото: если файл не нашёлся по исходному пути (например .jpg vs .JPG),
// пробуем несколько частых вариантов расширения, и только если ни один не сработал —
// показываем аккуратную заглушку вместо пустого места.
var IMG_FALLBACK_EXTS = ['.JPG', '.jpeg', '.JPEG', '.png', '.PNG'];

function imgFallback(img) {
  var name = img.getAttribute('data-name');
  var step = parseInt(img.getAttribute('data-step') || '0', 10);

  if (name && step < IMG_FALLBACK_EXTS.length) {
    img.setAttribute('data-step', String(step + 1));
    img.src = 'image/' + name + IMG_FALLBACK_EXTS[step];
    return;
  }

  var aboutMedia = img.closest('.about-media');
  if (aboutMedia) {
    aboutMedia.classList.add('img-fallback');
    img.style.display = 'none';
    return;
  }

  img.style.display = 'none';
  var placeholder = document.createElement('div');
  placeholder.className = 'img-placeholder';
  placeholder.textContent = img.getAttribute('alt') || 'Фото скоро будет';
  img.insertAdjacentElement('afterend', placeholder);
}

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
