
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function setLang(lang) {
  document.getElementById("title-pl").style.display = lang === 'pl' ? 'block' : 'none';
  document.getElementById("desc-pl").style.display = lang === 'pl' ? 'block' : 'none';
  document.getElementById("title-ua").style.display = lang === 'ua' ? 'block' : 'none';
  document.getElementById("desc-ua").style.display = lang === 'ua' ? 'block' : 'none';
}
