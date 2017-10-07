class Thing {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = w;
        this.angle = 0;
    }
  
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
        this.angle += random(-20, 20);
    }
  
    show() {
        push();
        stroke(255);
        noFill();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
        pop();
    }
  }