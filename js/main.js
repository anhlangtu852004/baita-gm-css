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
