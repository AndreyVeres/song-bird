
export let lang = '';

export function language() {
    const languageButton = document.querySelector('.language__change');
    const translationArr = {
        'lng-mainPage':
        {
            'ru': 'Главная',
            'en': 'Main page'
        },
        'lng-galleryPage': {
            'ru': 'Галерея',
            'en': 'Gallery page'
        }
        ,
        'lng-score': {
            'ru': 'Баллы',
            'en': 'Score'
        }
        ,
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
        'lng-menu-quiz': {
            'ru': 'Викторина',
            'en': 'Quiz'
        },
        'lng-menu-gallery': {
            'ru': 'Галерея',
            'en': 'Gallery'
        },
        'lng-back-menu': {
            'ru': 'Главное меню',
            'en': 'Main menu'
        },

        'lng-gallery-page-title': {
            'ru': 'Галерея',
            'en': 'Gallery'
        },
        'lng-play-again': {
            'ru': 'Начать снова',
            'en': 'Play again'
        },
        'lng-results-title': {
            'ru': 'УРА',
            'en': 'HURRAH'
        },
        'lng-results-text': {
            'ru': `Вы набрали <span class="results__score">0</span>
            баллов из <span class="results__max">30</span> возможных</p>`,
            'en': `You have  <span class="results__score">0</span> received points from <span class="results__max">30</span> possible`
        }


    }

    
    DefineLanguage();
    translatePage(lang)


    function DefineLanguage() {
        languageButton.textContent = localStorage.getItem('lang')
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'ru');
            languageButton.textContent = 'ru'
        }
        lang = localStorage.getItem('lang');
    }

    function setLanguage() {
        if (this.textContent === 'ru') {
            this.textContent = 'en';
        } else {
            this.textContent = 'ru';
        }
        localStorage.setItem('lang', this.textContent);
        lang = this.textContent

        translatePage(lang);
        location.reload();
    }


    function translatePage(lang) {
        for (let key in translationArr) {
            const elems = document.querySelectorAll(`.${key}`);
            if (elems.length > 0) {
                elems.forEach(elem => {
                    elem.innerHTML = translationArr[key][lang]
                })

            }
        }
      
    }

    languageButton.addEventListener('click', setLanguage);
}
