// variables
let circle = document.querySelector('.circle');

let target = document.querySelector('.target');

// circle mouse follower
const moveCircle = (e) => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
};
window.addEventListener('mousemove' , moveCircle);

// target random positioning

const moveTargetRandomly = (e) => {
    let numL = (Math.random() * 1000);
    let numT = (Math.random() * 500);

    target.style.left = `${numL}px`;
    target.style.top = `${numT}px`;
};