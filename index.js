//Global Variables
const inquirer = require('inquirer');// Imports Inquirer - need for user prompts
const fs = require('fs');// Imports File system module - need for writing the logo file
const questions = require('./lib/questions.js');//Imports Questions class- need for prompt questions
//Variables for shapes
const shapeCircle = require('./lib/circle.js'); //Imports Circle class
const shapeSquare = require('./lib/square.js');//Imports Square class
const shapeTriangle = require('./lib/triangle.js');//Imports Triangle class


// function to create new svg file using inquirer response and file system module
function generateLogo(response) {
    const svg = assignShape(response);
    const fileName = `./examples/${response.logoName}.svg`;//file name
    fs.writeFile(fileName, svg, err => {
        if (err) {
            return console.log(err);
        }
        console.log(`Success! Generated logo as svg file! `)
    });
}

//Function to set user selections to relevant shape class
function assignShape(response) {
    if (response.logoShape === 'Circle') {
        let userShape = new shapeCircle(response.logoShapeColor, response.logoText, response.logoTxtColor);
        return userShape.render();//renders shape : Cirlce
    }

    if (response.logoShape === 'Square') {
        let userShape = new shapeSquare(response.logoShapeColor, response.logoText, response.logoTxtColor);
        return userShape.render();//renders shape : Square
    }

    if (response.logoShape === 'Triangle') {
        let userShape = new shapeTriangle(response.logoShapeColor, response.logoText, response.logoTxtColor);
        return userShape.render();//renders shape : Triangle
    }
};

// Funtion initializes, utilizes inquirer .prompt to prompt the user to answer 
// questions in the command line and save user input then generate Logo using responses, catch any errors
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            generateLogo(response);//generate logo function
        })
        .catch(err => {
            console.log(err)
        });
}

init();//initialize the application