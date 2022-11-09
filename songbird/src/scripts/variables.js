export const elems = {
    img: document.querySelector('.quiz__player-img'),
    plugSrc: document.querySelector('.quiz__player-img').src,
    player: document.querySelector('.audio'),
    name: document.querySelector('.quiz__name'),
    voice: document.querySelector('.voice'),
    score: document.querySelector('.score'),
    question: document.querySelectorAll('.quiz__quest-item'),
    nextLevel: document.querySelector('.next__level'),
    answersItems: document.querySelectorAll('.answers__item'),
    clearField: function () {
        this.answersItems.forEach(item => {
            item.classList.remove('correct__answer', 'wrong__answer')
        });
        this.question.forEach(item => {
            item.classList.remove('quiz__quest-item--active')
        })
    },
}

export const vars = {
    currPoints: 5,
    totalPoints: 0,
    questIndex: 0,
    currentBird: {},
    haveAnswer: false,
}