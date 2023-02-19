var $cursor = $(".cursor"),
  $overlay = $(".project-overlay");

function moveCircle(e) {
  TweenLite.to($cursor, 0.37, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
    delay: 0.01,
  });
}

$(".p-1").hover(function () {
  $(".cursor").css({
    "background-image":
      "url(https://i.pinimg.com/564x/85/24/d7/8524d785a8427617d475bf02d51710fc.jpg)",
    cursor: "pointer",
  });
});

$(".p-2").hover(function () {
  $(".cursor").css({
    "background-image":
      "url(https://i.pinimg.com/564x/97/59/85/9759859a26a8f8195d1c4dd92f00cb73.jpg)",
    cursor: "pointer",
  });
});
$(".p-3").hover(function () {
  $(".cursor").css({
    "background-image":
      "url(https://i.pinimg.com/564x/9c/52/81/9c528158c74da06541565671cfc2644b.jpg)",
    cursor: "pointer",
  });
});
$(".p-4").hover(function () {
  $(".cursor").css({
    "background-image":
      "url(https://i.pinimg.com/564x/38/18/c3/3818c31969226e29a9dabd5e3cd0802a.jpg)",
    cursor: "pointer",
  });
});

var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});
