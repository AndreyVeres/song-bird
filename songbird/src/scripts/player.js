import { vars } from "./variables";
import pauseImg from '../img/pause.svg'

export function player2(player) {
    let isPlaying = false;
    const _player = document.querySelector(player)
    const control = _player.querySelector('.control');
    const timeProgressBar = _player.querySelector('.progress__bar');
    const timeProgress = _player.querySelector('.progress');
    const volumeBar = _player.querySelector('.volume__bar')
    const volProgress = _player.querySelector('.volume__progress');
    const audio = _player.querySelector('.audio');

    
    console.log(pauseImg)
    const input = _player.querySelector('.volume__range')


    function playSong() {
        isPlaying ? audio.pause() : audio.play()
        isPlaying = !isPlaying;
        this.src = pauseImg
    }

    function updateTime(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        timeProgress.style.width = `${progressPercent}%`;

    }

    function setTime(e) {
        const width = this.clientWidth;
        const click = e.offsetX;
        console.log(click)
        const duration = audio.duration;
        audio.currentTime = (click / width) * duration;
    }



    function volumeChange(e) {
        const volume = audio.volume;
        volProgress.style.height = `${100}%`
    }

    function setVolume (e){
        console.log(e.target.value)
        audio.volume = e.target.value
 
    }
    

    input.addEventListener('click' , setVolume);


    timeProgressBar.addEventListener('click', setTime)
    control.addEventListener('click', playSong);
    audio.addEventListener('timeupdate', updateTime)
    // audio.addEventListener('volumechange' , volumeChange)
}