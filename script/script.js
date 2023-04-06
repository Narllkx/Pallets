AOS.init();
/* Call AOS */
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("fast");
  });
});
/* Loader */
$(".slider-box").slick({
  dots: true,
  speed: 1500,
  fade: true,
});
/* Slider */
