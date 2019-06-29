const getElementById = (id) => document.getElementById(id);
const menuButton = getElementById('menuButton');
const menu = getElementById('menu');


menuButton.addEventListener('click',() => {
    menu.classList.toggle('d-block')
});

menu.addEventListener('click',() => {
    // if(){}
    menu.classList.toggle('d-block')
});
