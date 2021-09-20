let canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext('2d');

c.shadowColor = "black";
class Circle {
    constructor(x, y, dy, ddy, color, radius) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.color = color;
        this.ddy = ddy;
        this.radius = radius;
    }


    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        if (this.y + this.radius > innerHeight) {
            this.dy = -this.dy * 0.99;
        } else {
            this.dy += this.ddy;
        }
        this.y += this.dy

        //this.x += this.dx;
        this.draw();
        console.log(this.y)
    }

    ballStopped() {
        if (this.dy <= 0) {
            return true;
        }
        return false;
    }

}
let circles = [];
let colors = ['#08f7ee', '#09fbd3', '#fe53bb', '#f5d300']
for (let i = 0; i < 500; ++i) {
    let r = Math.random() * 10 + 1
    let x = Math.random() * innerWidth;
    let y = Math.random() * (innerHeight - 180);
    let dy = Math.random() * 3;
    circles.push(new Circle(x, y, dy, .09, colors[Math.floor(Math.random() * 4)], r));
}
// setInterval(function () {
//     let x = Math.random() * innerWidth;
//     let y = 100;
//     let dy = Math.random() * 3;
//     circles.push(new Circle(x, y, dy, .09, colors[Math.floor(Math.random() * 4)]));



// }, 500)



function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(animate);


    for (let i = 0; i < circles.length; ++i) {
        circles[i].update();
    }

    // for (let i = 0; i < circles.length; ++i) {
    //     if (circles[i].ballStopped()) {
    //         circles.splice(i, 1);
    //     }
    // }





}
animate();