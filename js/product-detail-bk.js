$(function () {
  var owlMain = $("#owlMain");
  var htmlOwlMain = owlMain.html();
  var owlModalContent = $("#prd-owl-modal-content");
  var btnClose = $(".btn-modal-close");
  var indexOwlMainActive = 0;
  var owlModal;
  var owl;

  function owlMainStart(index) {
    owl = owlMain.owlCarousel({
      items: 1,
      startPosition: index ?? 0,
      onInitialized: counter, //When the plugin has initialized.
      onTranslated: counter, //When the translation of the stage has finished.
    });
  }
  function owlModalStart(index) {
    owlModal = owlModalContent.owlCarousel({
      items: 1,
      startPosition: index ?? 0,
      onTranslated: counter,
    });
  }

  owlMainStart(indexOwlMainActive);

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item
    indexOwlMainActive = event.item.index;

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#counter").html("item " + item + " of " + items);
  }

  $("#owlMain .slides a").on("click", function () {
    owlModalContent.append(htmlOwlMain);
    owlModalStart(indexOwlMainActive);

    // owlModal = owlModalContent.owlCarousel({
    //   items: 1,
    //   startPosition: indexOwlMainActive,
    //   onTranslated: counter,
    // });

    $("#owlModal").show();
  });

  btnClose.click(function () {
    owl.trigger("destroy.owl.carousel");
    owlMainStart(indexOwlMainActive);
    $("#owlModal").hide();
    owlModal.trigger("destroy.owl.carousel");
    owlModalContent.empty();
  });

  // cach1
  // $("#owlMain .slides a").on("click", function () {
  //   $(".slides").each(function () {
  //     var theSrc = $(this).find("img").attr("src");
  //     var item = $("<div>", { class: "modal-item" }).appendTo(owlModalContent);
  //     $("<img>", { src: theSrc }).appendTo(item);
  //   });
  //   owlModalContent.owlCarousel({
  //     items: 1,
  //   });

  //   $("#owlModal").show();
  // });
  // btnClose.click(function () {
  //   $("#owlModal").hide();
  //   owlModalContent.trigger("destroy.owl.carousel");
  //   owlModalContent.empty();
  // });
});
