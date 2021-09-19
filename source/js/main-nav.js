var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var map = document.querySelector(".page-footer__map");
var mapImage = document.querySelector(".page-footer__map-image");
var mapGoogle = document.querySelector(".page-footer__map-google");

navMain.classList.remove("main-nav--nojs");
map.classList.remove("page-footer__map--nojs");
mapImage.classList.remove("page-footer__map-image--nojs");
mapGoogle.classList.remove("page-footer__map-google--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
