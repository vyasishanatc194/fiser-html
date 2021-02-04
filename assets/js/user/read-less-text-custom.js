$(document).ready(function () {
  // Configure/customize these variables.
  var showChar = 145; // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "SHOW MORE";
  var lesstext = "SHOW LESS";

  $(".more-text-content").each(function () {
    var content = $(this).html();

    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp; <a href="" class="morelink">' + moretext + '<i class="fe fe-chevron-down"></i>' + '</a></span>';

      $(this).html(html);
    }
  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext + '<i class="fe fe-chevron-down"></i>');
    } else {
      $(this).addClass("less");
      $(this).html(lesstext + '<i class="fe fe-chevron-up"></i>');
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});
