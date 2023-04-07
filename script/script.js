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

const $contactForm = document.querySelector("#form");

$contactForm.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const $form = e.target,
    $name = $form.querySelector("#name");
  $phone = $form.querySelector("#phone");
  $text = $form.querySelector("#text");
  response = await fetch(
    "https://api.apispreadsheets.com/data/mbghqFr0FfC0wqL8/",
    {
      method: "POST",
      body: JSON.stringify({
        data: {
          name: $name.value,
          phone: $phone.value,
          text: $text.value,
        },
      }),
    }
  );
  if (response.status === 201) alert("Отправлено!");
  else alert("Повторите попытку ещё раз!");

  $form.reset();
}
