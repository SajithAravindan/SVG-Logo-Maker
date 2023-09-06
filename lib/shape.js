//Parent Class Shape with constructor taking in shape color , text & text color.
//extends to child class circle,square and triangle.
class shape {
    constructor(logoShapeColor, logoText, logoTextColor) {        
        this.logoShapeColor = logoShapeColor;
        this.logoText = logoText;
        this.logoTextColor = logoTextColor;
    }
}

module.exports = shape;