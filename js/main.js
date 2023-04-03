const header = document.getElementById('header');
const about = document.querySelector('.about');

console.log(about.offsetTop);
console.log(header.offsetHeight);

let abTo = about.offsetTop;
let heHe = header.offsetHeight;



window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > abTo - heHe - 60) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
});
