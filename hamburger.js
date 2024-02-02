const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.top-menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

if (vw < 1024) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('top-menu-active');

        line1.classList.toggle('line1-active');
        line2.classList.toggle('line2-active');
        line3.classList.toggle('line3-active');

    });
}


