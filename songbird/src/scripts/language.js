import { translationArr } from '../scripts/variables'

export function translatePage() {
    
    for(let key in translationArr){
        const elem = document.querySelector(`.${key}`);
        elem.textContent = translationArr[key]['en']
    }
}
