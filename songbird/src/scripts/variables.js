import correctSound from '../audio/correct.mp3';
import wrongSound from '../audio/wrong.mp3';
// import { lang } from './language';




export const elems = {
    img: document.querySelector('.quiz__player-img'),
    plugSrc: document.querySelector('.quiz__player-img').src,
    player: document.querySelector('.audio'),
    name: document.querySelector('.quiz__name'),
    voice: document.querySelector('.voice'),
    score: document.querySelector('.score'),
    question: document.querySelectorAll('.quiz__quest-item'),
    nextLevel: document.querySelector('.next__level'),
    answersItems: document.querySelectorAll('.quiz__quest-item-text'),
    // languageButton: document.querySelector('.language__change'),
    clearField: function () {
        this.answersItems.forEach(item => {
            item.classList.remove('correct__answer', 'wrong__answer');
        });
        this.question.forEach(item => {
            item.classList.remove('quiz__quest-item--active');
        });
    },
};

export const vars = {
    currPoints: 5,
    totalPoints: 0,
    questIndex: 0,
    currentBird: {},
    haveAnswer: false,

};

export const menu = {
    quiz:document.querySelector('.menu__quiz'),
    gallery:document.querySelector('.menu__gallery'),
    back: document.querySelectorAll('.back'),
    playAgain:document.querySelector('.playAgain'),
    
}
export const sounds = {
    wrong: new Audio(wrongSound),
    correct: new Audio(correctSound),
};


export const translationArr = {
    'lng-mainPage':
    {
        'ru': 'Главная',
        'en': 'Main page'
    },
    'lng-galleryPage': {
        'ru': 'Галерея',
        'en': 'Gallery page'
    },
    'lng-score': {
        'ru': 'Очки',
        'en': 'Score'
    },
    'lng-button': {
        'ru': 'Далее',
        'en': 'Next level'
    },
    'lng-q1': {
        'ru': 'Разминка',
        'en': 'Warm-up'
    },
    'lng-q2': {
        'ru': 'Воробьиные',
        'en': 'Passerines'
    },
    'lng-q3': {
        'ru': 'Лесные',
        'en': 'Forest'
    },

    'lng-q4': {
        'ru': 'Певчие',
        'en': 'Choristers'
    },
    'lng-q5': {
        'ru': 'Хищные',
        'en': 'Predatory'
    },
    'lng-q6': {
        'ru': 'Морские',
        'en': 'Marine'
    },
    'lng-text': {
        'ru': 'Послушайте плеер. Выберите птицу из списка',
        'en': 'Listen to the player. Select a bird from the list'
    },

}