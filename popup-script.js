jQuery(document).ready(function ($) {
    setTimeout(function () {
        $('#welcome-popup').fadeIn();

        setTimeout(function () {
            $('#welcome-popup').fadeOut();
        }, 5000); // Pop-up will disappear after 5 seconds
    }, 1000); // Pop-up will appear after 1 second
});
