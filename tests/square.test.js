const Square = require('../lib/square.js');

//test case for class square
describe('Square', () => {
    it('given user choice of Logo shape color, Logo text, and Logo text color, should return logo svg file with ', () => {
        const square = new Square('green','SVG','white');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">           
            <rect width="200" height="200" fill="green"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});