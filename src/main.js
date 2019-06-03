window.onload = () => {
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    const mode = getParam('mode');
    switch (mode) {
        case 'randomlines':
            return require('./randomlines.js').start(canvas);
        case 'animation01':
            return require('./animation01.js').start(canvas);
        case 'motion01':
            return require('./motion01.js').start(canvas);
        case 'lifegame':
            return require('./lifegame.js').start(canvas, getParam('data'));
    }
}

function getParam(key) {
    try {
        return window.location.search
        .replace(/^\?/, '').split('&')
        .map(x => x.split('='))
        .find(x => x[0] == key)[1];
    } catch(e) {
        return undefined;
    }
}
