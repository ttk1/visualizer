const width = 700;
const height = 700;

exports.start = (canvas) => {
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    window.setInterval(callback, 50);

    function callback() {
        //refresh(ctx);
        let pos = getRandomPos();
        let radius = getRandomInt(50);
        //drawCircle(ctx, pos, radius);
        drawCircle2(ctx, pos, radius);

        // eslint-disable-next-line no-unused-vars
        function drawCircle(ctx, pos, radius) {
            ctx.strokeStyle = getRandomColor();
            ctx.lineWidth = 5;
            ctx.beginPath();
            //ctx.moveTo(pos.x + radius, pos.y);
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, true);
            ctx.stroke();
        }

        function drawCircle2(ctx, pos, radius) {
            ctx.fillStyle = getRandomColor(true);
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, true);
            ctx.fill();
        }

        function getRandomPos() {
            const pos = {};
            pos.x = getRandomInt(width);
            pos.y = getRandomInt(height);
            return pos;
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

        // eslint-disable-next-line no-unused-vars
        function refresh(ctx) {
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            //ctx.fillStyle = 'green';
            ctx.fillRect(0, 0, width, height);
        }
    }
}