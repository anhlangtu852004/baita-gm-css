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
