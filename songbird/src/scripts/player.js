import pauseImg from '../img/pause.svg';
import playImg from '../img/play.svg';

export function player2(player) {
    const _player = document.querySelector(player)
    const control = _player.querySelector('.control');
    const timeProgressBar = _player.querySelector('.progress__bar');
    const timeProgress = _player.querySelector('.progress');
    const audio = _player.querySelector('.audio');
    const volume = _player.querySelector('.volume__range');

    let isPlaying = false;

    function setState() {
        if(isPlaying) {
            audio.pause();
            this.src = playImg;
        }else{
            audio.play();
            this.src = pauseImg;
        }
        isPlaying = !isPlaying;
    };

    function updateTime(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        timeProgress.style.width = `${progressPercent}%`;
    };

    function setTime(e) {
        const width = this.clientWidth;
        const click = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (click / width) * duration;
    };

    function setVolume (e){
        audio.volume = e.target.value;
    };

    volume.addEventListener('click' , setVolume);
    timeProgressBar.addEventListener('click', setTime);
    control.addEventListener('click', setState);
    audio.addEventListener('timeupdate', updateTime);
};

