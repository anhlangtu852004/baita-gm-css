$(document).ready(function () {
  var indexColor = 0;
  var indexSize = 0;
  var itemColors = $(
    "#productDetailInfoFilterColors .product__detail-info-filter-item"
  );

  var itemSizes = $(
    "#productDetailInfoFilterSizes .product__detail-info-filter-item"
  );

  itemColors.each(function () {
    if ($(this).hasClass("activeFilter")) {
      $(this).find("i").css("display", "block");
    } else {
      $(this).find("i").css("display", "none");
    }
    $(this).click(function () {
      // alert("a");
      var activeFilter = $("#productDetailInfoFilterColors  .activeFilter");
      activeFilter.find("i").css("display", "none");
      activeFilter.removeClass("activeFilter");

      $(this).addClass("activeFilter");
      $(this).find("i").css("display", "block");
    });
  });

  itemSizes.each(function () {
    if ($(this).hasClass("activeFilter")) {
      $(this).find("i").css("display", "block");
    } else {
      $(this).find("i").css("display", "none");
    }
    $(this).click(function () {
      // alert("a");
      var activeFilter = $("#productDetailInfoFilterSizes .activeFilter");
      activeFilter.find("i").css("display", "none");
      activeFilter.removeClass("activeFilter");

      $(this).addClass("activeFilter");
      $(this).find("i").css("display", "block");
    });
  });
});
