const circleButton = document.querySelector('.circle__text');

circleButton.addEventListener('click', (e) => {
    const clickedTarget = e.target;
    const circleText = document.querySelector('#circleText');

    if(clickedTarget.classList.contains("yellowArrow")) {
        circleButton.classList.toggle('open');
        circleButton.style.backgroundColor = "#FFCC33";
        circleText.innerText = "Este texto é referente ao botão que está sobre a flecha amarela!";
    } else if (clickedTarget.classList.contains("greyArrow")) {
        circleButton.style.backgroundColor = "#707070";
        circleText.innerText = "Este texto é referente ao botão que está sobre a flecha cinza!";
    } else if (clickedTarget.classList.contains("redArrow")) {
        circleButton.style.backgroundColor = "#FF3737";
        circleText.innerText = "Este texto é referente ao botão que está sobre a flecha vermelha!";
    }
})