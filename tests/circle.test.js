const Circle = require('../lib/circle.js');

//test case for class circle
describe('Circle', () => {
    it('given user choice og Logo shape color, Logo text, and Logo text color, should return logo svg file with ', () => {
        const circle = new Circle('green','SVG','white');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="green" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});