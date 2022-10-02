const donateDots = () => {
    const dotsParent = document.querySelector('.scale__container')

    dotsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('scale__circle')) {
            document.querySelectorAll('.scale__circle').
                forEach(item => {
                    item.classList.remove('scale__circle-active')
                    item.nextElementSibling.classList.remove('scale__price--active')
                });

            target.classList.add('scale__circle-active')
            target.nextElementSibling.classList.add('scale__price--active')
         
            const input = document.querySelector('.donate__form-input')
            input.value = target.nextElementSibling.textContent.slice(1)
        }
    })


}

export default donateDots;