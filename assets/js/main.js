let things = [];

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
}

function mousePressed() {
    things.push(new Thing(mouseX, mouseY, random(10, 200)));
}