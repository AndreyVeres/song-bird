import { initQuestion, verifyAnswer } from "../pages/main";
import { elems, vars, sounds } from "./variables";

export function correctAnswer() {
    vars.haveAnswer = true;
    this.classList.add('correct__answer');
    let addScore = vars.totalPoints += vars.currPoints >= 0 ? vars.currPoints : 0;
    vars.currPoints = 5;
    elems.score.textContent = 'Score' + ' : ' + addScore;
    elems.img.src = vars.currentBird.image;
    elems.name.textContent = vars.currentBird.name
    vars.questIndex++;
    sounds.correct.play()
    setTimeout(() => {
        sounds.correct.load()
    }, 600);
    elems.nextLevel.disabled = false;
    elems.nextLevel.addEventListener('click', function () {
        elems.clearField();
        initQuestion(vars.questIndex)
    })
}


export function wrongAnswer() {
    this.classList.add('wrong__answer');
    vars.currPoints--;
    sounds.wrong.play();
    setTimeout(() => {
        sounds.wrong.load();
    }, 600);
}


