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
    $(".gm-choosed").hide();
  });
  //end active class

  const modal = $("#modal");

  //nut dong modal filter
  $("#btn-filter-close").click(function () {
    modal.css("display", "none");
  });
  // end nut dong modal filter

  //nut open modal filter
  $("#btn-filter-open").click(function () {
    modal.css("display", "block");
  });
  //end nut open modal filter

  // When the user clicks anywhere outside of the modal, close it

  $(window).click(function (e) {
    if (e.target.id == "modal") {
      modal.css("display", "none");
    }
  });

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
