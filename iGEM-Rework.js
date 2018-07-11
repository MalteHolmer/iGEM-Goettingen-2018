$(document).ready(function () {
    $(".dropdown_button")
        .click(function () {
            if($(this).hasClass("is-active")) {
                $(this)
                    .next()
                    .slideUp(1000);
                $(this)
                    .removeClass("is-active");
            } else {
                $(".is-active").next();
                $(".is-active")
                    .removeClass("is-active");
                $(this).next().slideDown(1000);
                $(this)
                    .addClass("is-active");
            }
        });
});
