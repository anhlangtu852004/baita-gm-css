$(function () {
  var owlMain = $("#owlMain");
  var owlModalContent = $("#prd-owl-modal-content");
  var btnClose = $(".btn-modal-close");
  owlMain.owlCarousel({
    items: 1,
    startPosition: 0,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter, //When the translation of the stage has finished.
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#counter").html("item " + item + " of " + items);
  }

  //   owlModalContent.html(owlMain);

  //   $(".slides").each(function () {
  //     var theSrc = $(this).find("img").attr("src");
  //     var item = $("<div>", { class: "modal-item" }).appendTo(owlModalContent);
  //     $("<img>", { src: theSrc }).appendTo(item);
  //   });
  //   owlModalContent.owlCarousel({
  //     items: 1,
  //   });

  $("#owlMain .slides a").on("click", function () {
    $(".slides").each(function () {
      var theSrc = $(this).find("img").attr("src");
      var item = $("<div>", { class: "modal-item" }).appendTo(owlModalContent);
      $("<img>", { src: theSrc }).appendTo(item);
    });
    owlModalContent.owlCarousel({
      items: 1,
    });

    $("#owlModal").show();
  });
  btnClose.click(function () {
    $("#owlModal").hide();
    owlModalContent.empty();
  });
});
