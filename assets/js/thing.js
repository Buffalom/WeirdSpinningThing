class Thing {
    constructor(x, y, w) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = w;
        this.angle = 0;
    }
  
    move() {
        this.pos.x += random(-5, 5);
        this.pos.y += random(-5, 5);
        this.angle += random(-20, 20);
    }
  
    show() {
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        rect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
        pop();
    }
  }