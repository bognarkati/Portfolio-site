/* Hiányzó képeket szép, feliratos helykitöltőre cseréli.
   Amint a valódi kép a helyén van (images/...), magától eltűnik.
   Each missing image is swapped for a labelled placeholder. */
(function () {
  function swap(img) {
    var ph = document.createElement("div");
    ph.className = "ph " + img.className;
    ph.textContent = img.getAttribute("data-ph") || "kép helye";
    if (img.getAttribute("style")) ph.setAttribute("style", img.getAttribute("style"));
    if (img.parentNode) img.parentNode.replaceChild(ph, img);
  }
  var imgs = document.querySelectorAll("img[data-ph]");
  imgs.forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) {
      swap(img);
    } else {
      img.addEventListener("error", function () { swap(img); });
    }
  });
})();

/* Hamburger mobil menü */
(function () {
  var btn   = document.querySelector('.nav__hamburger');
  var menu  = document.getElementById('mobile-menu');
  var close = document.getElementById('mobile-menu-close');
  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
})();
