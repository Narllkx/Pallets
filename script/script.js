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
  autoplay: true,
  autoplaySpeed: 2000,
});
/* Slider */

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#sub").value = "Отправка...";
  let data = new FormData(form);
  fetch(
    "https://docs.google.com/spreadsheets/d/1PVRZWMerbTAO9aebm-lvtD_cezQxHwMAUGrhRoclVak/edit#gid=0",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#sub").value = "Отправлено!";
    });
});
