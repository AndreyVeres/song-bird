import birdsData from '../../scripts/birdsData';
import { elems, vars, translationArr, menu } from '../../scripts/variables';
import { randomInteger, renderPlayer } from '../../scripts/helpers';
import { correctAnswer, resetGame, wrongAnswer } from '../../scripts/checkAnswers';
import { language, setLanguage, translatePage } from '../../scripts/language';
import './index.html';
import './main.scss';
import { player, player2 } from '../../scripts/player';
import { aboutBird, removeAbout } from '../../scripts/aboutBird';
import { DefineLanguage } from '../../scripts/language';
import { lang } from '../../scripts/language';
import logo from '../../img/logo.svg'
import { moveBlocks } from '../../scripts/moveBlocks';
import { gallery } from '../../scripts/gallery';







export const move = new moveBlocks('.main__menu', '.quiz', '.results', '.gallery');
move.showMenu();



menu.quiz.addEventListener('click', () => {
    move.showQuiz();
});

menu.gallery.addEventListener('click', () => {
    move.showGallery();
})

menu.playAgain.addEventListener('click', () => {
    resetGame();
    move.showQuiz();
})

menu.back.forEach(button => {
    button.addEventListener('click', () => {

        move.showMenu();
    })
})

language();

initQuestion(vars.questIndex);
gallery();

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
        elems.answersItems[i].textContent = lang === 'ru' ? questItems[i].name : questItems[i].nameEn;
        elems.answersItems[i].id = questItems[i].id;
        elems.answersItems[i].addEventListener('click', aboutBird);
        elems.answersItems[i].addEventListener('click', verifyAnswer);

    };
};

function verifyAnswer() {
    if (vars.haveAnswer) return;

    const isCorrectAnswer = parseInt(this.id) === vars.currentBird.id;
    isCorrectAnswer ? correctAnswer.apply(this) : wrongAnswer.apply(this);
};





