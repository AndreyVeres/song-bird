const formInput = document.querySelector('.footer__form-email__input')
const label = document.querySelector('.footer__form-email__label');
formInput.addEventListener('click', (e) => {
    label.classList.remove('footer__form-email__label-inactive')
    label.classList.add('footer__form-email__label-focused')
    label.style.position = 'relative'
})

formInput.addEventListener('blur' , ()=> {
    label.classList.add('footer__form-email__label-inactive')
    label.classList.remove('footer__form-email__label-focused')
})