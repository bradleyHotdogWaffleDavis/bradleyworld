
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
export const addClass = function() {

    $(".light-dark-mode").click(function (e) {
        $(this).addClass("light").siblings().removeClass("dark");
        });

}