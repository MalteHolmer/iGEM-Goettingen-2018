$(document)
  .ready(function () {
    $(".dropdown_button")
      .click(function () {
        if ($(this)
          .hasClass("is-sidebar-active")) {
          $(this)
            .next()
            .slideUp(1000);
          $(this)
            .removeClass("is-sidebar-active");
        } else {
          $(".is-sidebar-active")
            .next();
          $(".is-sidebar-active")
            .removeClass("is-sidebar-active");
          $(this)
            .next()
            .slideDown(1000);
          $(this)
            .addClass("is-sidebar-active");
        }
      });

    $("#show_nav").click(function (event) {
      var nav = $("#navigation");
      if (!nav.hasClass("is-nav-active")) {
        nav.fadeIn(1000);
        nav.addClass("is-nav-active");
      }
    });

    $(document).click(function (event) {
      var nav = $("#navigation");
      //kleiner Hack, damit wirklich nur ein Anklicken irgendwo außer im Menü dieses verschwidnen lässt
      if (nav.hasClass("is-nav-active") && nav.find(event.target).length == 0 && event.target != $("#show_nav").get(0)) {
        nav.fadeOut(1000);
        nav.removeClass("is-nav-active");
      };
    })
  });
