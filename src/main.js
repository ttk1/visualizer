const main = () => {
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    switch (mode) {
        case 'randomlines':
            return require('./randomlines.js').start(canvas);
        case 'animation01':
            return require('./animation01.js').start(canvas);
    }
}

window.onload = main;