import birdsData from '../../scripts/birdsData';
import { elems, vars } from '../../scripts/variables';
import { randomInteger, renderPlayer } from '../../scripts/helpers';
import { correctAnswer, wrongAnswer } from '../../scripts/checkAnswers';
import './index.html';
import './main.scss';
import { player, player2 } from '../../scripts/player';
import { aboutBird, removeAbout } from '../../scripts/aboutBird';

import logo from '../../img/logo.svg'

initQuestion(vars.questIndex);

export function initQuestion(index) {
    vars.haveAnswer = false;
    const questItems = [...birdsData[index]];
    const rightAnswer = questItems[randomInteger(0, elems.answersItems.length - 1)];
    vars.currentBird = { ...rightAnswer };

    removeAbout();
    elems.img.src = elems.plugSrc;
    elems.nextLevel.disabled = true;
    elems.name.textContent = '??????????';
    elems.voice.src = vars.currentBird.audio;
    elems.player.load();
    player2('.main__player');

    elems.question[index].classList.add('quiz__quest-item--active');

    for (let i = 0; i < elems.answersItems.length; i++) {
        elems.answersItems[i].textContent = questItems[i].name;
        elems.answersItems[i].id = questItems[i].id;
        elems.answersItems[i].addEventListener('click' , aboutBird);
        elems.answersItems[i].addEventListener('click', verifyAnswer);
  
    };
};

function verifyAnswer() {
    if (vars.haveAnswer) return;
    
    const isCorrectAnswer = parseInt(this.id) === vars.currentBird.id;
    isCorrectAnswer ? correctAnswer.apply(this) : wrongAnswer.apply(this);
};


// player();


