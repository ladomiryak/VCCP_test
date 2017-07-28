import {TweenMax} from "gsap";

const content = document.getElementById('main');

for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    content.appendChild(square);
}

const squares = document.getElementsByClassName('square');

function showName() {
    TweenMax.to('.git-name', 1, {opacity: 1, autoAlpha:1});
}

for (let j = 0; j <= squares.length; j++) {
    TweenMax.staggerTo(
        ".square",
        2,
        {
            rotation: 360,
            x: function () {
                return Math.floor((Math.random() * (3 - 1) - 1)*1000);
            },
            y: function () {
                return Math.floor((Math.random() * (3 - 1) - 1)*1000);
            },
            transformOrigin: 'center center'
        },
        0.1,
        showName
    )
}