$(document)
    .ready(function () {
        $(".dropdown_button")
            .click(function () {
                if($(this)
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
    });
