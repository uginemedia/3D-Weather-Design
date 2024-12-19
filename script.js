$(document).ready(function () {
  $(".more").click(function () {
    $(".back").addClass("active");
    $(".front").removeClass("active");
  });

  $(".go-back").click(function () {
    $(".front").addClass("active");
    $(".back").removeClass("active");
  });
});
