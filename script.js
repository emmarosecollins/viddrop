var videoNames = ['luna.mov'];

document.addEventListener('DOMContentLoaded', placeVideo);

function placeVideo() {
    // videoName = videoNames[Math.floor(Math.random() * videoNames.length)];
    var videoName = videoNames[0];
    var parent = document.getElementById('parent');
    var videoElement = document.createElement('video');
    videoElement.src = videoName;
    videoElement.addEventListener('canplay', function() {
        var GOALAREA = 100000;
        var vidArea = videoElement.videoWidth * videoElement.videoHeight;
        console.log(videoElement.videoWidth);
        videoElement.width = videoElement.videoWidth * Math.sqrt(GOALAREA / vidArea) + '';
        videoElement.height = videoElement.videoHeight * Math.sqrt(GOALAREA / vidArea) + '';
        parent.appendChild(videoElement);
        videoElement.play();
    });
}
