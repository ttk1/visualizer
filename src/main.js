const main = () => {
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    if (container.classList.contains('randomlines')) {
        return require('./randomlines.js').start(canvas);
    }
    if (container.classList.contains('animation01')) {
        return require('./animation01.js').start(canvas);
    }
}

window.onload = main;