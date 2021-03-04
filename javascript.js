$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        loop: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 1500,
        paginationSpeed: 400,
        items: 1,
        autoplay: true,
        autoplayspeed: 500,
    })
});
    $(document).ready(function () {
      $("#ParagraphHide").click(function () {
        $("#hideParagraph").toggle();
      });
    });
    $(document).ready(function () {
      $("#QualitygraphHide").click(function () {
        $("#hideQuality").toggle();
      });
    });
    $(document).ready(function () {
      $("#FuturegraphHide").click(function () {
        $("#hideFuture").toggle();
      });
    });
    if ($(window).width() > 992) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

        } else {
          $('#navbar_top').removeClass("fixed-top");
          // remove padding top from body

          $('body').css('padding-top', '0');
        }
      });
    }
        