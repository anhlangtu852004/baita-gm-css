$(document).ready(function () {
  var owlMain = $("#owlMain");
  var htmlOwlMain = owlMain.html();
  var owlModalContent = $("#prd-owl-modal-content");
  var btnClose = $(".btn-modal-close");
  var indexOwlMainActive = 0;
  var owl;
  var owlModal;

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
  owlModalContent.append(htmlOwlMain);
  owlMainStart(indexOwlMainActive);
  owlModalStart(indexOwlMainActive);
  $("#owlModal").hide();
  $("#owlMain .slides a").on("click", function () {
    owlModal.trigger("destroy.owl.carousel");
    owlModalStart(indexOwlMainActive);
    // owlModalStart(indexOwlMainActive);
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
    // owlModal.trigger("destroy.owl.carousel");
    // owlModalStart(indexOwlMainActive);
    // owlModalContent.empty();
    $("#owlModal").hide();
  });

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