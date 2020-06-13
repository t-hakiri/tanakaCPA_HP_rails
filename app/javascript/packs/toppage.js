var current;
var option = {
  section: ".js-section",
  easing: "swing",
  scrollSpeed: 600,
  scrollbars: true,
  before: function (i, box) {
    current = i;
    $(".pagenation .active").removeClass("active");
    $(".pagenation").find("a").eq(i).addClass("active");
  },
  afterRender: function () {
    var pagenation = '<ul class="pagenation">';
    $(".section").each(function (i) {
      pagenation += "<li><a></a></li>";
    });
    pagenation += "</ul>";
    $("body").append(pagenation);
    $(".pagenation a").each(function (i) {
      $(this).on("click", function () {
        $.scrollify.move(i);
      });
    });
    $(".pagenation li:first-child").find("a").addClass("active");
  },
};

$(function () {
  $.scrollify(option); // scrollifyの実行
});
$(window).on("resize", function () {
  if (current) {
    var currentScrl = $(".section").eq(current).offset().top;
    $(window).scrollTop(currentScrl);
  }
});

window.addEventListener('popstate', function(e) {
    document.location.reload();
});
