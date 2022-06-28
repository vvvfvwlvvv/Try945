var isOpen = false;
var elem = document.querySelector(".swiper");
var rep = document.querySelector(".repair");
var btn = document.querySelector(".view__content");
var image = document.querySelector(".view__image");

document.querySelector(".repair__button").onclick = function () {
  if (isOpen == false) {
    isOpen = true;
    elem.style.height = "250px";
    rep.style.height = "370px";
    btn.innerHTML = "Скрыть";
    image.style.transform = "rotate(180deg)";
    image.style.padding = "0px 0px 0px 16px";
  }
  else {
    isOpen = false;
    elem.style.height = "180px";
    rep.style.height = "300px";
    btn.innerHTML = "Показать все";
    image.style.transform = "rotate(360deg)";
    image.style.padding = "0px 16px 0px 0px";
  }
};

if(matchMedia){
  var screen = window.matchMedia("(max-width: 1119px)");
  screen.addListener(changes);
  changes(screen);
}
function changes(screen){
  if (screen.matches){
    document.querySelector(".repair__button").onclick = function () {
      if (isOpen == false) {
        isOpen = true;
        elem.style.height = "350px";
        rep.style.height = "500px";
        btn.innerHTML = "Скрыть";
        image.style.transform = "rotate(180deg)";
        image.style.padding = "0px 0px 0px 16px";
      }
      else {
        isOpen = false;
        elem.style.height = "180px";
        rep.style.height = "300px";
        btn.innerHTML = "Показать все";
        image.style.transform = "rotate(360deg)";
        image.style.padding = "0px 16px 0px 0px";
      }
    };
  }
  else{
    document.querySelector(".repair__button").onclick = function () {
      if (isOpen == false) {
        isOpen = true;
        elem.style.height = "250px";
        rep.style.height = "370px";
        btn.innerHTML = "Скрыть";
        image.style.transform = "rotate(180deg)";
        image.style.padding = "0px 0px 0px 16px";
      }
      else {
        isOpen = false;
        elem.style.height = "180px";
        rep.style.height = "300px";
        btn.innerHTML = "Показать все";
        image.style.transform = "rotate(360deg)";
        image.style.padding = "0px 16px 0px 0px";
      }
    };
  }
}