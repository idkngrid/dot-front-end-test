function closeCard() {
    const details = document.querySelectorAll('details');
  
    details.forEach((detail) => {
      detail.addEventListener('click', () => {
        details.forEach((item) => {
          if (item !== detail) {
            item.removeAttribute('open');
          }
        });
      });
    });
  }
  
  function toggleCircle() {
    const buttons = document.querySelectorAll('.circle__icon');
    const text = document.querySelectorAll('.circle__text__item');
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((item) => {
          if (item !== button) {
            item.classList.remove('circle__icon--active');
          }
        });
  
        button.classList.toggle('circle__icon--active');
  
        text.forEach((item) => {
          if (item.id == button.getAttribute('data-text')) {
            item.classList.add('circle__text__item--active');
          } else {
            item.classList.remove('circle__text__item--active');
          }
        });
      });
    });
  }
  
  toggleCircle();
  closeCard();
  