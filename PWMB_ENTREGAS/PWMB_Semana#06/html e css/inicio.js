'use strict'

const menuSize = '250px';

let open = true;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    }

    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
}

let compre = document.getElementById('compre');

compre.addEventListener('click', function(){
    location.href = './peixes/peixes.html';
});