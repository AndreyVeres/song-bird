import birdsData from "./birdsData";
import { player2 } from "./player";
import { vars } from "./variables";
import { lang } from '../scripts/language'
// import { lang } from '../scripts/variables'
import playImg from '../img/pencil__play.svg';

export function aboutBird() {
    removeAbout();

    let bird = vars.haveAnswer ?
        birdsData[vars.questIndex - 1][parseInt(this.id) - 1] :
        birdsData[vars.questIndex][parseInt(this.id) - 1];

    const text = document.querySelector('.about__default-text');
    text.style.display = 'none';
    const parent = document.querySelector('.quiz__botton-panel-box');
    let about = document.createElement('div');
    about.classList.add('about', 'about__player');

    about.innerHTML = `
    <div class="about__top-panel">
        <img src="${bird.image}" alt="about-img"
            class="about__img">
        <div class="about__info">
        <h3 class="about__info-name">${lang === 'ru' ? bird.name : bird.nameEn}</h3>
        <p class="about__info-family">${bird.species}</p>
        <div class="player">
            <audio controls class="audio about__player">
                <source class="voice" type="audio/mpeg" 
                src="${bird.audio}">
            </audio>
                <img class="playBtn control" src="${playImg}" alt="control">
            <div class="progress__bar">
                <div class="progress">
                </div>
            </div>
            <input class="volume__range" type="range" min="0" max="1" step="0.1" value="0.5">
        </div>
         </div>
        </div>
        <div class="about__addition-info">
          ${lang === 'ru' ? bird.description : bird.descriptionEn}
    </div>
    `;
    parent.append(about);
    player2('.about__player');
};


export function removeAbout() {
    try {
        document.querySelector('.about').remove();
        const text = document.querySelector('.about__default-text');
        text.style.display = 'block';
    } catch { }
};