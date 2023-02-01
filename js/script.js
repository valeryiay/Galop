/* Menu btn dropdown languages */
function menuDropDownBtn() {
  document.querySelector(".menu-dropdown-content").classList.toggle("show");
}

// resize menu on scroll
$(window).scroll(function(event) {
  var y = $(this).scrollTop(); //set position from top when to change style in pixels
  if (y >= 200) {
    $(".menu").addClass("resize");
    $(".menu-logo").addClass("change-position");
    $(".burger").addClass("burger-small");
    $(".burger-linija").addClass("thin-line");
    $(".menu-logo").addClass("kocka-resize");
    $(".menu-logo-svg").addClass("kocka-resize");
  } else {
    $(".menu").removeClass("resize");
    $(".menu-logo").removeClass("change-position");
    $(".burger").removeClass("burger-small");
    $(".burger-linija").removeClass("thin-line");
    $(".menu-logo").removeClass("kocka-resize");
    $(".menu-logo-svg").removeClass("kocka-resize");
  }
});

// scroll effect anchor link
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// Burger menu
function togleBurger(i) {
  const body = document.querySelector("body");
  const htmla = document.querySelector("html");
  const bm = document.getElementById("burger-menu-body");
  i.classList.toggle("open");
  bm.classList.toggle("open-menu");
  // body.classList.toggle("no-scroll");
  // htmla.classList.toggle("no-scroll");
}

// pocetna baner carousel
$(".baner-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 0,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  items: 1
});

// pocetna nekretnine carousel
$(".nekretnine-carousel").owlCarousel({
  loop: false,
  nav: true,
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>"
  ],
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    767: {
      items: 2
    }
  }
});

// turizam carousel
$(".turizam-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay:5000,    
  responsive: {
    0: {
      items: 1
    },
    568: {
      items: 2
    },
    991: {
      items: 3
    }
  }
});

// detalji stana carousel
$(".detalji-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  items: 1
});
