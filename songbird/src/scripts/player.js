import pauseImg from '../img/pencil__pause.svg';
import playImg from '../img/pencil__play.svg';
import volumeFull from '../img/volumeFull.svg';
import volumeMute from '../img/volumeMute.svg';
// import { elems , vars} from './variables';
// import notes0 from '../img/plug-0notes.png';
// import notes1 from '../img/plug-1notes.png';
// import notes2 from '../img/plug-2notes.png';
// export const plugImages = [notes0, notes1, notes2, elems.plugSrc];






// export let moveNotes;


export function player2(player) {
    const _player = document.querySelector(player)
    const control = _player.querySelector('.control');
    const timeProgressBar = _player.querySelector('.progress__bar');
    const timeProgress = _player.querySelector('.progress');
    const audio = _player.querySelector('.audio');
    const volume = _player.querySelector('.volume__range');

    const mainVolume = document.querySelector('.main__volume__range')
    const volumeFull = document.querySelector('.volumeFull')
    const volumeMute = document.querySelector('.volumeMute')

    let isPlaying = false;

    function setState(e) {
        if (isPlaying) {
            audio.pause();
            this.src = playImg;
        } else {
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

    function setVolume(e) {
        let currentVolume = e.target.value;
        audio.volume = currentVolume;
    };

    function volumeImageChange() {
        let volume = this.value;

        if (volume === '0') {
            volumeFull.style.display = 'none';
            volumeMute.style.display = 'block'
        } else {
            volumeMute.style.display = 'none';
            volumeFull.style.display = 'block';

            if (parseInt(volume.slice(2)) <= 5) {
                document.querySelector('.volume__max').style.display = 'none'
            } else {
                document.querySelector('.volume__max').style.display = 'block'
            }
        }
    }
    mainVolume.addEventListener('input', volumeImageChange)
    volume.addEventListener('click', setVolume);
    timeProgressBar.addEventListener('click', setTime);
    control.addEventListener('click', setState);
    audio.addEventListener('timeupdate', updateTime);
};

