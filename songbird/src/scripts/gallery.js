import birdsData from "./birdsData";
import playImg from '../img/pencil__play.svg';
import { player2 } from "./player";
import { lang } from "./language";
export function gallery() {

    const galleryBox = document.querySelector('.gallery__list');
    const galleryPopup = document.querySelector('.gallery__popup');
    function renderGalleryList() {

        birdsData.flat(1).forEach(item => {
            console.log(lang)
            const galleryItem = document.createElement('li');
            galleryItem.classList.add('gallery__item');
            galleryItem.style.backgroundImage = `url('${item.image}')`;

            galleryItem.innerHTML = `
                 <h5 class="gallery__item-name">${lang === 'ru' ? item.name : item.nameEn}</h5>
            `
            galleryBox.append(galleryItem);
            galleryItem.addEventListener('click', () => {
                showGalleryPopup(item);
            })
        });
    }

    function showGalleryPopup(item) {
        galleryPopup.style.display = 'flex'
        galleryPopup.innerHTML = `
        <div class="gallery__popup-box">
            <img src="${item.image}" alt="gallery__popup-img" class="gallery__popup-img">
            <div class="gallery__popup-info">
                <h3 class="gallery__popup-name">${lang === 'ru' ? item.name : item.nameEn}</h3>
                <p class="gallery__popup-family">${item.species}</p>
                <div class="player">
                    <audio controls class="audio popup__player">
                        <source class="voice" type="audio/mpeg" src="${item.audio}">
                    </audio>
                    <img class="playBtn control" src="${playImg}" alt="control">
                    <div class="progress__bar">
                        <div class="progress">
                        </div>
                    </div>
                    <input class="volume__range" type="range" min="0" max="1" step="0.1" value="0.5">
                </div>
            </div>
            <div class="about__addition-info">
                ${lang === 'ru' ? item.description : item.descriptionEn}
        </div>
    </div>
            `;
        // console.log(document.querySelector('.volume__range'))
        player2('.gallery__popup-box');
    };



    function closePopup(e) {
        if(e.target === galleryPopup){
            galleryPopup.style.display ='none';
            console.log(e.target)
        }
    }
    galleryPopup.addEventListener('click', closePopup)
    renderGalleryList();
}