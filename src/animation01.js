const width = 500;
const height = 500;

exports.start = (canvas) => {
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#F00';
    ctx.lineWidth = 5;

    window.setInterval(callback, 500);


    function callback() {
        refresh(ctx);
        let start = getRandomPos();
        let end = getRandomPos();
        drawLine(ctx, start, end);
    }

    function refresh(ctx) {
        //ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
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