$(document)
  .ready(function () {
    $(".dropdown_button")
      .click(function () {
        if ($(this)
          .hasClass("is-sidebar-active")) {
          $(this)
            .next()
            .slideUp(500);
          $(this)
            .removeClass("is-sidebar-active");
        } else {
          $(".is-sidebar-active")
            .next();
          $(".is-sidebar-active")
            .removeClass("is-sidebar-active");
          $(this)
            .next()
            .slideDown(500);
          $(this)
            .addClass("is-sidebar-active");
        }
      });

    $("#show_nav").click(function (event) {
      var nav = $("#navigation");
      if (!nav.hasClass("is-nav-active")) {
        nav.fadeIn(500);
        nav.addClass("is-nav-active");
      }
    });

    $(document).click(function (event) {
      var nav = $("#navigation");
      //kleiner Hack, damit wirklich nur ein Anklicken irgendwo außer im Menü dieses verschwidnen lässt
      if (nav.hasClass("is-nav-active") && nav.find(event.target).length == 0 && event.target != $("#show_nav").get(0)) {
        nav.fadeOut(500);
        nav.removeClass("is-nav-active");
      };
    })

    //sorgt beim Scrollen für die korrekte Anzeige des top-scroll und des navigations-buttons (wenn vorhanden)
    $(window).scroll(function () {
      if ($(document).scrollTop() > 20) {
        $("#top-scroll").fadeIn(500);
      } else {
        $("#top-scroll").fadeOut(500);
      }

      var scrollTop = $(document).scrollTop();
      var showNav = $("#show_nav");
      var nav = $("#navigation");
      var showTop = showNav.css("top").match(/\d+/);

      if (scrollTop < 90) {
        nav.css("top", 103)
        showNav.css("top", 120 - scrollTop);
      } else {
        nav.css("top", 18);
        showNav.css("top", 30);
      }
    })

    //ein wenig jQuery magie zum Hochscrollen der Seite
    $("#top-scroll").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    });
  });
