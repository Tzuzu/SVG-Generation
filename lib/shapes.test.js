// Importing Shapes.js

const {Circle, Square, Triangle} = require('./shapes');

// Circle Testing

describe('Circle', () => {
    it('Will render a circle that is red', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="red"/>`);
    });
});

// Square Testing

describe('Square', () => {
    it('Will render a square that uses the hex code #702abf', () => {
        const shape = new Square();
        shape.setColor('#702abf');
        expect(shape.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="#702abf"/>`);
    });
});

// Triangle Testing

describe('Triangle', () => {
    it('Will render a Blue Triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<polygon points="150, 0 300, 200 0, 200" fill="blue"/>`);
    });
});