const width = 700;
const height = 700;

class Ball {
    constructor(pos, radius, velocity, color) {
        this.pos = pos;
        this.radius = radius;
        this.velocity = velocity;
        this.color = color;
    }

    move() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
        if (this.pos.x < 0 || width < this.pos.x) {
            this.reboundX();
        }
        if (this.pos.y < 0 || width < this.pos.y) {
            this.reboundY();
        }
    }

    reboundX() {
        this.velocity.x *= -1;
    }

    reboundY() {
        this.velocity.y *= -1;
    }
}

exports.start = (canvas) => {
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    const balls = [];

    // ここでボールをいくつか追加
    for(let i = 0; i < 100; i++) {
        let pos = getRandomPos();
        let radius = 10;
        let velocity = {
            x: getRandomNum(5),
            y: getRandomNum(5)
        }
        let color = getRandomColor();
        balls.push(new Ball(pos, radius, velocity, color));
    }

    window.setInterval(animate, 10);

    function animate() {
        refresh(ctx);
        balls.forEach(ball => {
            drawBall(ctx, ball);
            ball.move();
        })
    }

    function drawBall(ctx, ball) {
        ctx.beginPath();
        ctx.fillStyle = ball.color;
        ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function getRandomPos() {
        const pos = {};
        pos.x = getRandomNum(width);
        pos.y = getRandomNum(height);
        return pos;
    }

    function getRandomNum(max) {
        return Math.random() * max;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomColor(alpha) {
        if (alpha) {
            return 'rgba('
                + getRandomInt(256) + ', '
                + getRandomInt(256) + ', '
                + getRandomInt(256) + ', '
                + Math.random() + ')';
        }
        return 'rgba('
            + getRandomInt(256) + ', '
            + getRandomInt(256) + ', '
            + getRandomInt(256) + ', 1)';
    }

    function refresh(ctx) {
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        //ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, width, height);
    }
}