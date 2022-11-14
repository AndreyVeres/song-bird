import { translationArr } from '../scripts/variables'
// import { lang } from '../scripts/variables';

export let lang = 'ru'

export function translatePage() {
    console.log(this)
    this.textContent === 'ru' ? 'ru' : 'en'
    lang = this.textContent;
    for (let key in translationArr) {
        const elem = document.querySelector(`.${key}`);
        if (elem) {
            elem.textContent = translationArr[key]['en']
        }
    }
}



export function setLanguage() {
    
    if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
    } else {
        localStorage.setItem('lang', 'ru')
    }

}
