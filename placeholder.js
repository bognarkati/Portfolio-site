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
