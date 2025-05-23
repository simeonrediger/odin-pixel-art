import { mouse } from './mouse.js';
import { tools } from './tools.js';

const container = document.querySelector('#grid-container');
let size = 16;

function create(size) {
    clear();

    const pixelRowTemplate = document.createElement('div');
    pixelRowTemplate.classList.add('pixel-row');
    const pixelTemplate = document.createElement('div');
    pixelTemplate.classList.add('pixel');

    for (let column = 0; column < size; column++) {
        const pixel = pixelTemplate.cloneNode();
        pixelRowTemplate.append(pixel);
    }

    for (let row = 0; row < size; row++) {
        const pixelRow = pixelRowTemplate.cloneNode(true);
        container.append(pixelRow);
    }

    for (const pixel of container.querySelectorAll('.pixel')) {
        pixel.addEventListener('mousedown', updatePixel);
        pixel.addEventListener('mouseenter', updatePixel);
    }
}

function clear() {
    container.innerHTML = '';
}

function updatePixel(event) {
    const pixel = event.target;

    if (mouse.leftButtonDown && !mouse.rightButtonDown) {
        tools.useTool(pixel);
    } else if (mouse.rightButtonDown && !mouse.leftButtonDown) {
        tools.erase(pixel);
    }
}

export const grid = {
    create,
    size,
};
