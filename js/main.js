// <!-- script for mobile navbar -->
$(document).ready(function () {
  var menuField;
  $(".nav__mobile__menu").click(function () {
    var menu = $(this).data("menu");
    $(".nav__mobile__menu__container").css("display", "block");
    $(".nav__mobile__menu-" + menu).addClass(
      "nav__mobile__menu-" + menu + "-show"
    );
    menuField = menu;
    if (menu === "search") {
      $("#search-field-mobile").focus();
    }
  });

  $(".nav__mobile__menu-product-close-btn").click(function () {
    $(".nav__mobile__menu-" + menuField).removeClass(
      "nav__mobile__menu-" + menuField + "-show"
    );
  });
});
// <!-- script for mobile navbar -->

// <!-- script for banner slideshow -->
$(document).ready(function () {
  $(".banner__slideShow__container").owlCarousel({
    items: 2,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      740: {
        items: 2,
        nav: false,
      },
      1024: {
        items: 2,
        nav: false,
      },
    },
  });
  // <!-- script for banner hotsale -->
  $(".hotsale__container__main").owlCarousel({
    stagePadding: 20,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='ri-arrow-left-s-line hotsale-pre-btn'></i>",
      "<i class='ri-arrow-right-s-line hotsale-next-btn'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      740: {
        items: 3,
      },
      1024: {
        items: 5,
      },
    },
  });
});
// <!-- end script for banner slideshow -->

// script for footer menu mobile
$(document).ready(function () {
  $(".footer__container__policy-menu-title").each(function () {
    $(this).click(function () {
      $(this).toggleClass("tab-show");
      var nextSib = $(this).next();
      var heighSib = nextSib.prop("scrollHeight") + "px";
      if (nextSib.css("height") !== "0px") {
        // nextSib.prop("scrollHeight", null);
        nextSib.css("height", "");
        nextSib.css("margin-top", "");
      } else {
        nextSib.css({ height: heighSib, "margin-top": "20px" });
      }
    });
  });
});
//   end script for footer menu mobile

// script for filter
$(document).ready(function () {
  $(".product__filter__container-content-item-field").each(function () {
    $(this).click(function () {
      $(this).toggleClass("filterActive");
    });
  });
});
// script for filter
