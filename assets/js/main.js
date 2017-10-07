let things = [];
let newThing;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    for (let x = 0; x < things.length; x++) {
        things[x].show();
        things[x].move();
    }

    if (newThing != null) {
        newThing.show();
    }
}

function mousePressed() {
    newThing = new Thing(mouseX, mouseY, 0);
}

function mouseDragged() {
    newThing.w = mouseX - newThing.pos.x;
    newThing.h = mouseY - newThing.pos.y;
}

function mouseReleased() {
    things.push(newThing);
    newThing = null;
}