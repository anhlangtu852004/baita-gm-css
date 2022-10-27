$(document).ready(function () {
  var owlMain = $("#owlMain");
  var owlMainHtml = owlMain.html();
  var owlMainThumb = $("#owlMainThumb").children().not("#btnOwlModalOpen");

  var owlModalContent = $("#prdOwlModalContent");
  var owlModalThumb = $("#prdOwlModalThumb");
  var btnClose = $("#btnModalClose");

  const btnOwlModalOpen = $("#btnOwlModalOpen");

  var owl;
  var owlModal;
  var selectedDotOwlMain = $("#owlMainThumb .owl-main-dots .owl-main-dot");
  var selectedDotOwlModal;

  var tempCurrentIndex = 0;
  var tempMainIndex;

  function owlMainStart(index) {
    owl = owlMain.owlCarousel({
      items: 1,
      startPosition: index ?? 0,
      // mouseDrag: false,
      // dotsData: true,
      // dots: true,
      // dotsContainer: "#owlMainThumb",
      // dotsEach: 2,
      onInitialized: counter, //When the plugin has initialized.
      onTranslated: counter, //When the translation of the stage has finished.
    });
  }

  function owlModalStart(index) {
    owlModal = owlModalContent.owlCarousel({
      items: 1,
      startPosition: index ?? 0,
      onInitialized: counterModal,
      onTranslated: counterModal,
    });
  }
  owlModalContent.append(owlMainHtml);
  addDotImageIntoModal();
  selectedDotOwlModal = $("#prdOwlModalThumb .items .item");

  owlMainStart(tempCurrentIndex);

  btnOwlModalOpen.click(function () {
    $("#owlMain .slides a").trigger("click");
  });

  $("#owlMain .slides a").on("click", function () {
    owl.trigger("destroy.owl.carousel");
    $("#owlMainThumb").css("display", "none");
    owlModalStart(tempCurrentIndex);

    $("#owlModal").css({ opacity: "1", transform: "translateX(0)" });
  });

  $("#owlMainThumb .owl-main-dots .owl-main-dot").click(function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 300]);

    tempCurrentIndex = $(this).index();
    tempMainIndex = tempCurrentIndex;
    console.log("MAIN tempCurrentIndex : ", tempCurrentIndex);
  });

  $("#prdOwlModalThumb .items .item").click(function () {
    owlModal.trigger("to.owl.carousel", [$(this).index(), 300]);
    tempCurrentIndex = $(this).index();
    console.log("MODAL tempCurrentIndex : ", tempCurrentIndex);
  });

  btnClose.click(function () {
    tempCurrentIndex = tempMainIndex;
    owlModal.trigger("destroy.owl.carousel");
    // owl.trigger("destroy.owl.carousel");
    owlMainStart(tempCurrentIndex);
    $("#owlMainThumb").css("display", "block");
    // owlModalStart(indexOwlMainActive);
    // owlModalContent.empty();
    $("#owlModal").css({ opacity: "0", transform: "translateX(-100%)" });
  });

  $("#arrowOwlModalLeft").click(function () {
    owlModal.trigger("prev.owl.carousel", [300]);
  });
  $("#arrowOwlModalRight").click(function () {
    owlModal.trigger("next.owl.carousel", [300]);
  });

  function counter(event) {
    // var element = event.target; // DOM element, in this example .owl-carousel
    // var items = event.item.count; // Number of items
    // var item = event.item.index + 1; // Position of the current item
    tempCurrentIndex = event.item.index;

    // // it loop is true then reset counter from 1
    // if (item > items) {
    //   item = item - items;
    // }
    // $("#counter").html("item " + item + " of " + items);

    // check active
    checkActive(selectedDotOwlMain);
  }
  function counterModal(event) {
    tempCurrentIndex = event.item.index;

    // check active
    checkActive(selectedDotOwlModal);
  }

  function addDotImageIntoModal() {
    var ulItems = $("<div>", { class: "items" }).appendTo(owlModalThumb);
    $("#owlMainThumb .owl-main-dots .owl-main-dot").each(function (i, e) {
      var imageSrc = $(e).find("img").attr("src");
      var item = $("<div>", { class: "item" }).appendTo(ulItems);
      $("<img>", { src: imageSrc }).appendTo(item);
    });
  }

  function checkActive(selectedOwl) {
    $(".owlActive").removeClass("owlActive");

    selectedOwl.each(function () {
      var indexCurrentDot = $(this).index();

      console.log("MODAL indexCurrentDot : ", indexCurrentDot);
      console.log("tempCurrentIndex:", tempCurrentIndex);
      if (indexCurrentDot === tempCurrentIndex) {
        $(this).addClass("owlActive");
      }
    });
  }
});
