var items = document.querySelectorAll('.grid-a .grid-item');

var isToggled = false;
var isMoving = false;
var toggleDirection = 1;
var lastMove = new Date();
var moveIndex = items.length;
var delay = 50;

function animate() {
    moveItems();
    requestAnimationFrame(animate);
}

function clicked() {
    isToggled = !isToggled;
    toggleDirection *= -1;
    moveIndex -= isMoving ? toggleDirection : 0;
    isMoving = true;
    
    setTimeout(clicked, 3000);
}


function moveItems() {
    if (!isMoving) {
        return;
    }

    var now = new Date();

    if (now - lastMove < delay) {
        return;
    }

    lastMove = now;
    moveIndex += toggleDirection;

    var item = items[moveIndex];

    if (item) {
        item.classList.toggle('is-moved');
    } else {
        isMoving = false;
    }
}

animate();
clicked();