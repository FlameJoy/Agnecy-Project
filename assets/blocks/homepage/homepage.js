window.addEventListener("DOMContentLoaded", handleWindowLoad);

function handleWindowLoad() {
    let video = document.getElementById("homepage-video");
    let btn = document.getElementById("play");
    let control = document.getElementsByClassName("homepage-video__play-btn");

    btn.addEventListener("click", playVideo);
    video.addEventListener("click", pauseVideo);

    function playVideo() {
        video.play();
        control[0].style.visibility = "hidden";
    }
    function pauseVideo() {
        video.pause();
        control[0].style.visibility = "visible";
    }
}