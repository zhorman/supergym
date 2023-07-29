const accordionButtons = document.querySelectorAll('.accordion__button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('accordion__button--opened');
  });
});
