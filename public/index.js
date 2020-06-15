document.getElementById("navButton").addEventListener("click", function() {
  if (!/(navbar1)/.exec(document.getElementById("nav").classList)) {
    removeClass("navbar0");
    addClass("navbar1");
  } else if (/(navbar1)/.exec(document.getElementById("nav").classList)) {
    removeClass("navbar1");
    addClass("navbar0");
  }
})

function addClass(classs) {
  document.getElementById("nav").classList.add(classs);
}

function removeClass(classs) {
  document.getElementById("nav").classList.remove(classs);
}
