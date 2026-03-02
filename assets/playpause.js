document.getElementById("playpause").onclick = function() {
    var audio = document.getElementById("audio");
    audio.volume = 0.15;
    if (audio.paused) audio.play();
    else audio.pause();
}