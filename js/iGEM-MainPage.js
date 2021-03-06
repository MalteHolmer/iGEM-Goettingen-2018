/*############################Javascript using the anime.js library for the mindmap on the fronside#################*/

$(document)
  .ready(function () {
    function wrapper_width() {
      return window.getComputedStyle(document.getElementById("mindmap_wrapper"), null)
        .getPropertyValue("width")
        .match(/\d+/);
    }

    var spread_out = anime({
      targets: ".mindmap_topic",
      translateY: function (el, i) {
        return wrapper_width() * 0.40 * Math.cos(2 * Math.PI * i / 5);
      },
      translateX: function (el, i) {
        return wrapper_width() * 0.40 * Math.sin(2 * Math.PI * i / 5);
      },
      delay: function (target, index, count) {
        return index * 200;
      },
      scale: [
        {
          value: 1.25,
          duration: 2000,
          delay: 2000,
          elasticity: 0
        }
      ],
      opacity: 1,
      loop: 1,
      autoplay: false,
      duration: 2000,
      elasticity: 0,
      begin: function () {
        anime({
          targets: ".mindmap_iGEMLogo",
          scale: 0.75,
          loop: 1,
          autoplay: false,
          duration: 2000,
          elasticity: 0,
          delay: 2000,
        }).play();
      }
    });

    var show_background = anime({
      targets: ".mindmap_background",
      scale: 5,
      loop: 1,
      duration: 2000,
      easing: "easeInQuad",
      autoplay: false,
    });

    //scroll-event for the spread-out animation
    $(document).scroll(function () {
      if ($(".mindmap_iGEMLogo").isInViewport()) {
        spread_out.play();
        show_background.play();
      }
    });

    //eventlistener for video-controls
    var video = $("#main-content_glyphvideo");
    video.mouseenter(function () {
      $(this).attr("controls", true);
    });
    video.mouseleave(function () {
      $(this).attr("controls", false);
    });

    video.attr("muted", "true");
    video[0].play();
  });

(function ($) {
  $.fn.isInViewport = function () {
    var elementTop = this.offset().top;
    var elementBottom = elementTop + this.outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
}(jQuery));
