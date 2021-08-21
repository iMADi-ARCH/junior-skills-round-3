const navBurger = document.querySelector("#nav-burger");
const nav = document.querySelector("#nav-links");
let navOpen = false;

navBurger.onclick = function () {
  if (!navOpen) {
    nav.style.transform = "translateX(0px)";
    // nav.style.opacity = "100%";
    navOpen = true;
  } else {
    nav.style.transform = "translateX(500px)";
    // nav.style.opacity = "0%";
    navOpen = false;
  }
};

var bannerIndex = 0;
bannerSlide();

function bannerSlide() {
  var i;
  var x = document.getElementsByClassName("banner-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  bannerIndex++;
  if (bannerIndex > x.length) {
    bannerIndex = 1;
  }
  x[bannerIndex - 1].style.display = "block";
  setTimeout(bannerSlide, 2000); // Change image every 2 seconds
}

var countDownDate = new Date("Aug 28, 2021 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter").innerHTML =
    "Time left: " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);
