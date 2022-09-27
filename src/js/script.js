const dropdownButtonDown = document.querySelector('#dropdownButtonDown');

dropdownButtonDown.addEventListener('click', () => {
    const dropdownText = document.querySelector('.dropdown__text--purple');
    
    dropdownText.classList.toggle('hide-for-all');
})