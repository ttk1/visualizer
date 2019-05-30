const main = () => {
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    const mode = getParam('mode');
    switch (mode) {
        case 'randomlines':
            return require('./randomlines.js').start(canvas);
        case 'animation01':
            return require('./animation01.js').start(canvas);
    }
}

function getParam(key) {
    return window.location.search
        .replace(/^\?/, '').split('&')
        .map(x => x.split('='))
        .find(x => x[0] == key)[1];
}

window.onload = main;