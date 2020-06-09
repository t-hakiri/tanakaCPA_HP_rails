// $(function () {
//   var current;
//   $.scrollify({
//     section: ".box",
//     interstitialSection: "footer",
//     setHeights: false,
//     scrollSpeed: 650, // スクロール時の速度
//     scrollbars: false,
//     before: function (i, box) {
//       current = i;
//       $(".pagenation .active").removeClass("active");
//       $(".pagenation").find("a").eq(i).addClass("active");
//     },
//     afterRender: function () {
//       var pagenation = '<ul class="pagenation">';
//       $(".box").each(function (i) {
//         pagenation += "<li><a></a></li>";
//       });
//       pagenation += "</ul>";
//       $("body").append(pagenation);
//       $(".pagenation a").each(function (i) {
//         $(this).on("click", function () {
//           $.scrollify.move(i);
//         });
//       });
//       $(".pagenation li:first-child").find("a").addClass("active");
//     },
//   });
//   $(window).on("resize", function () {
//     if (current) {
//       var currentScrl = $(".box").eq(current).offset().top;
//       $(window).scrollTop(currentScrl);
//     }
//   });
// });

var $section = $(".js-section"); // 各スライド
var $pager = $("#js-pager"); // ページャー枠

// scrollifyのオプション設定
var option = {
  section: ".js-section",
  easing: "swing",
  scrollSpeed: 600,
  scrollbars: true,
  before: function (index) {
    pagerCurrent(index); // ページャーに対応する順番にクラス名を付与
  },
  afterRender: function () {
    createPager(); // ページャーの作成
  },
};

$(function () {
  $.scrollify(option); // scrollifyの実行
});

// ==============================
// functions
// ------------------------------

// ページャーに対応する順番にクラス名を付与
function pagerCurrent(index = 0) {
  var $li = $pager.find("li");
  $li.removeClass("is-current");
  $li.eq(index).addClass("is-current");
}

// ページャーの作成
function createPager() {
  $section.each(function (i, e) {
    // ページ内リンク先の作成
    var sectionName = $(e).attr("data-section-name");
    // 最初のliにはクラスを付与
    var addClass = "";
    if (i === 0) {
      addClass = "is-current";
    }
    // liのHTML作成
    var html = "";
    html += '<li class="' + addClass + '">';
    html += '<a href="#' + sectionName + '"></a>';
    html += "</li>";
    $pager.append(html);
  });

  pagerLink();
}

// ページャーでaタグをクリックされたらスクロールする
function pagerLink() {
  $pager.find("a").on("click", function () {
    $.scrollify.move($(this).attr("href"));
  });
}
