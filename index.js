//Global Variables
const inquirer = require('inquirer');//need for user prompts
const fs = require('fs');//need for writing the logo file
const questions = require('./lib/questions.js');//need for prompt questions
//Variables for shapes
const shapeCircle = require('./lib/circle.js');
const shapeSquare = require('./lib/square.js');
const shapeTriangle = require('./lib/triangle.js');


// function to create new svg file using inquirer response and file system logo.svg
function generateLogo(response) {
    const svg = assignShape(response);
    const fileName = `./examples/${response.logoName}.svg`;//file name
    fs.writeFile(fileName, svg, err => {
        if (err) {
            return console.log(err);
        }
        console.log(`Generated logo as svg file! `)
    });
}

//Function to set user selction to shape class
function assignShape(response) {
    if (response.logoShape === 'Circle') {
        let userShape = new shapeCircle (response.logoShapeColor, response.logoText, response.logoTxtColor);
        return userShape.render();
    }

    if (response.logoShape === 'Square') {
        let userShape = new shapeSquare (response.logoShapeColor, response.logoText, response.logoTxtColor);
        return userShape.render();
    }

    if (response.logoShape === 'Triangle') {
        let userShape = new shapeTriangle (response.logoShapeColor, response.logoText, response.logoTxtColor);
        return userShape.render();
    }
};

// initialize, ask questions then generate Logo using responses, catch any errors
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        generateLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();