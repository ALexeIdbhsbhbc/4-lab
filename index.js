<div class='video-container'>
<video src="video.mp4" poster='preview.jpg' class='video-player' id='video-player' preload='metadata'></video>
<div class='video-hud'>
<div class='video-hud__element video-hud__action video-hud__action_play' id='video-hud__action'></div>
<div class='video-hud__element video-hud__curr-time' id='video-hud__curr-time'>00:00</div>
<progress value='0' max='100' class='video-hud__element video-hud__progress-bar' id='video-hud__progress-bar'></progress>
<div class='video-hud__element video-hud__duration' id='video-hud__duration'>00:00</div>
<div class='video-hud__element video-hud__mute video-hud__mute_false' id='video-hud__mute'></div>
<input type='range' value='100' max='100' title='Громкость' class='video-hud__element video-hud__volume' id='video-hud__volume'>
<select title='Скорость' class='video-hud__element video-hud__speed' id='video-hud__speed'>
<option value='25'>x0.25</option>
<option value='50'>x0.50</option>
<option value='75'>x0.75</option>
<option value='100' selected>x1.00</option>
<option value='125'>x1.25</option>
<option value='150'>x1.50</option>
<option value='175'>x1.75</option>
<option value='200'>x2.00</option>
</select>
<a class='video-hud__element video-hud__download' title='Скачать' href='video.mp4' download></a>
</div>
</div>
//Получаем объекты
//Плеер
var videoPlayer = document.getElementById('video-player');
//Время
var progressBar = document.getElementById('video-hud__progress-bar');
var currTime = document.getElementById('video-hud__curr-time');
var durationTime = document.getElementById('video-hud__duration');
//Кнопки
var actionButton = document.getElementById('video-hud__action');
var muteButton = document.getElementById('video-hud__mute');
var volumeScale = document.getElementById('video-hud__volume');
var speedSelect = document.getElementById('video-hud__speed');
function videoAct() {
if(videoPlayer.paused) {
videoPlayer.play();
actionButton.setAttribute('class','video-hud__element video-hud__action video-hud__action_play');
} else {
videoPlayer.pause();
actionButton.setAttribute('class','video-hud__element video-hud__action video-hud__action_pause');
}
if(durationTime.innerHTML == '00:00') {
durationTime.innerHTML = videoTime(videoPlayer.duration);
}
}
    actionButton.addEventListener('click',videoAct);
    videoPlayer.addEventListener('click',videoAct);
    function videoTime(time) {
    time = Math.floor(time);
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    var minutesVal = minutes;
    var secondsVal = seconds;
    if(minutes < 10) {
    minutesVal = '0' + minutes;
    }
    if(seconds < 10) {
    secondsVal = '0' + seconds;
    }
    return minutesVal + ':' + secondsVal;
    }
    function videoProgress() {
    progress = (Math.floor(videoPlayer.currentTime) / (Math.floor(videoPlayer.duration) / 100));
    progressBar.value = progress;
    currTime.innerHTML = videoTime(videoPlayer.currentTime);
    }
    function videoChangeTime(e) {
    var mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
    var progress = mouseX / (progressBar.offsetWidth / 100);
    videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
    }

    videoPlayer.addEventListener('timeupdate',videoProgress);

    progressBar.addEventListener('click',videoChangeTime);
    function videoChangeVolume() {
    var volume = volumeScale.value / 100;
    videoPlayer.volume = volume;
    if(videoPlayer.volume == 0) {
    muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_true');
    } else {
    muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_false');
    }
    }
    function videoMute() {
    if(videoPlayer.volume == 0) {
    videoPlayer.volume = volumeScale.value / 100;
    muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_false');
    } else {
    videoPlayer.volume = 0;
    muteButton.setAttribute('class','video-hud__element video-hud__mute video-hud__mute_true');
    }
    }
    function videoChangeSpeed() {
    var speed = speedSelect.value / 100;
    videoPlayer.playbackRate = speed;
    }

    muteButton.addEventListener('click',videoMute);
    volumeScale.addEventListener('change',videoChangeVolume);

    speedSelect.addEventListener('change',videoChangeSpeed);   
    var buttonA = document.getElementsByid('button');
    var clickSound = document.getElementById('click-sound');
    function buttonClick() {
    clickSound.currTime = 0;
    clickSound.play();
}
    buttonA.addEventListener('click',buttonClick);

    <video src='./file.gif' preload='none' id='gif-player' class='gif-player gif-player_pause' loop></video>

    var gifPlayer = document.getElementById('gif-player');
    function gifAct() {
    if(gifPlayer.paused) {
    gifPlayer.play();
    gifPlayer.setAttribute('class','gif-player gif-player_play');
    } else {
    gifPlayer.pause();
    gifPlayer.currentTime = 0;
    gifPlayer.setAttribute('class','gif-player gif-player_pause');
    }
    }
    gifPlayer.addEventListener('click',gifAct);