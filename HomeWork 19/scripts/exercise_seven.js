$(document).ready(function () {
  $("ul").each(function () {
    if (!$(this).hasClass("navbar-nav")) {
      $(this).hide();
    }
  });

  $("h3").each(function () {
    $(this)
      .mouseenter(() => {
        $(this).next("ul").show();
      })
      .mouseleave(() => {
        $(this).next("ul").hide();
      });
  });
});
