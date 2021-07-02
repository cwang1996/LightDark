const button = document.querySelector('.switch');
const background = document.querySelector('.background');
const titlecolor = document.querySelector('.title');

button.addEventListener('click', function(){
    button.classList.toggle('switch-right');
    background.classList.toggle('background-night');
    titlecolor.classList.toggle('title-color');
})
