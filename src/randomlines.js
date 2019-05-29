exports.start = (canvas) => {
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#F00';
    ctx.lineWidth = 5;

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