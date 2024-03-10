document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});

window.onload = function() {
    document.getElementById('hi-text').className = 'visible';
};
var textElement = document.getElementsByClassName('name-animataded')[0];

textElement.addEventListener('animationend', function(event) {
    if (event.animationName === 'typing') {
        textElement.classList.add('no-cursor');
    }
});