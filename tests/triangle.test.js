const Triangle = require('../lib/triangle.js');//import triangle class

//Unit test case for class circle
describe('Triangle', () => {
    it('given user choice of Logo shape color, Logo text, and Logo text color, should return logo svg file with ', () => {
        const triangle = new Triangle('green', 'SVG', 'white');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="green"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">SVG</text>
    </svg>
        `
        );
    });
});