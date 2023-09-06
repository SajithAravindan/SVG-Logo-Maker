const parentShape = require('./shape.js')

// this class is child of parent class shape
// renders triangle using svg literal template
class triangle extends parentShape {
    constructor(logoShapeColor, logoText, logoTextColor) {
        super(logoShapeColor, logoText, logoTextColor);
    };
    render() {
        return `
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.logoShapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
    </svg>
        `
    };
};

module.exports = triangle;