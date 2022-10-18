// script for filter
$(document).ready(function () {
  // active class
  $(".product__filter__container-content-item-field").each(function () {
    $(this).click(function () {
      if ($(this).hasClass("filterActive")) {
        $(this).find("i").css("display", "none");
      } else {
        $(this).find("i").css("display", "block");
      }
      $(this).toggleClass("filterActive");
    });
  });
  $("#product__filter__container-content-footer-unselected").click(function () {
    $(".filterActive").removeClass("filterActive");
  });
  //end active class

  //nut dong modal filter
  $("#btn-filter-close").click(function () {
    $(".product__filter__container-content").css("display", "none");
  });
  // end nut dong modal filter

  //nut open modal filter
  $("#btn-filter-open").click(function () {
    $(".product__filter__container-content").css("display", "block");
  });
  //end nut open modal filter

  //add class va remove sticky class base on screen size
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww > 740) {
      $("#btn-filter").removeClass("sticky");
    } else {
      $("#btn-filter").addClass("sticky");
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
  //end add class va remove sticky class base on screen size
});
// script for filter
