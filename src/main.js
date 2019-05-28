const piyo = require('./piyo');

const canvas_test = (canvas) => {
    // set size
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    // line style
    ctx.strokeStyle = '#F00';
    ctx.lineWidth = 5;

    // 適当に描画

    /*
    let start = { x: 10, y: 10 };
    let end = { x: 300, y: 300 };
    drawLine(ctx, start, end);
    */

    for (let i = 0; i < 20; i++) {
        let start = getRandomPos();
        let end = getRandomPos();
        drawLine(ctx, start, end);
    }


    function drawLine(ctx, start, end) {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    }

    function getRandomPos() {
        const pos = {};
        pos.x = Math.floor(Math.random() * 500);
        pos.y = Math.floor(Math.random() * 500);
        return pos;
    }

}

const main = () => {
    console.log(piyo);
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    canvas_test(canvas);
}

main();