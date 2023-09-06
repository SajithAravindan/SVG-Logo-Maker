const parentShape = require('./shape.js')

// this class is child of parent class shape
// renders square using svg literal template
class square extends parentShape {
    constructor(logoShapeColor, logoText, logoTextColor) {
        super(logoShapeColor, logoText, logoTextColor);
    };
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.logoShapeColor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
    </svg>
        `
    };
};

module.exports = square;