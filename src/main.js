const piyo = require('./piyo');

const main = () => {
    const container = document.getElementById('container');
    container.innerHTML += 'hoge';
    container.innerHTML += piyo.piyo;
}

main();