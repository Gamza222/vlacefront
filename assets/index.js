$(document).ready(function () {
  $(".content__layout__live-events__item-container").hover(
    function () {
      $(".content__layout__live-events__items").addClass(
        "content__layout__live-events__items-color-red-hovered"
      );
    },
    function () {
      $(".content__layout__live-events__items").removeClass(
        "content__layout__live-events__items-color-red-hovered"
      );
    }
  );

  $("#showEvent-close-btn").click(() => {
    $(".showevent-container").removeClass("showevent-container-open");
  });

  $(".content__layout__live-events__items__hov-window__button").click(() => {
    $(".showevent-container").addClass("showevent-container-open");
  });

  $("#showAllEvents-close-btn").click(() => {
    $(".showAllLiveEvents-container").removeClass(
      "showAllLiveEvents-container-open"
    );
  });

  $(".header__buttons__mode-btn-moon").click(() => {
    $("body").addClass("dark-theme");
  });

  $(".header__buttons__mode-btn-sun").click(() => {
    $("body").removeClass("dark-theme");
  });
});
