import $ from "jquery";

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
export const revealBoy = function() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        document.querySelector(".reveal-boy").classList.remove("active");
        document.querySelector(".hey-bitch").classList.add("go-down-on-me");
        } else {
        document.querySelector(".reveal-boy").classList.add("active");
        document.querySelector(".hey-bitch").classList.remove("go-down-on-me");
        }
        prevScrollpos = currentScrollPos;
    }
}