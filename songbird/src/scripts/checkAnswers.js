import { initQuestion, verifyAnswer } from "../pages/main";
import { elems, vars, sounds } from "./variables";
import { lang } from "./language";
import { move } from "../pages/main";
import birdsData from "./birdsData";
import { moveNotes } from "./player";
export function correctAnswer() {
    // clearInterval(moveNotes);
    vars.haveAnswer = true;
    
   
    this.classList.add('correct__answer');
    let addScore = vars.totalPoints += vars.currPoints >= 0 ? vars.currPoints : 0;
    vars.currPoints = 5;
    elems.score.textContent = addScore;
    elems.img.src = vars.currentBird.image;
    elems.name.textContent = lang === 'ru'  ? vars.currentBird.name : vars.currentBird.nameEn
    vars.questIndex++;
    sounds.correct.play()
    setTimeout(() => {
        sounds.correct.load()
    }, 600);
    elems.nextLevel.disabled = false;
    elems.nextLevel.addEventListener('click', function () {
        if(vars.questIndex === birdsData.length){
            renderResult();
            move.showResults();
            resetGame();
            return;
        }
        elems.clearField();
        initQuestion(vars.questIndex)
    });
}


export function wrongAnswer() {
    this.classList.add('wrong__answer');
    vars.currPoints--;
    sounds.wrong.play();
    setTimeout(() => {
        sounds.wrong.load();
    }, 600);
}


export function resetGame(){
    vars.totalPoints = 0;
    vars.questIndex = 0;
    vars.haveAnswer = false;
    vars.currPoints = 5;
    elems.score.textContent = 0;
}


function renderResult(){
    document.querySelector('.results__score').textContent = vars.totalPoints;
}


