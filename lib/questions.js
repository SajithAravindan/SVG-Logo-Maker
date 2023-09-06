
// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Text of your Logo (three character maximum): ',//Logo Text Question
        name: 'logoText',
        validate: function (answer) {
            if (answer == '')
                return console.log("\n Invalid Entry! Please try again");
            else if (answer.length > 3) 
                return console.log("\n Text must be three characters or less! Please try again");

            return true;
        }
    },
    // Option color keyword or hexadecimal for textColor
    {
        type: 'list',
        name: 'logoTxtClrChoice',
        message: 'Choose a Logo Text color format: ',
        choices: ['color keyword', 'hexadecimal']
    },
    // text Color keyword
    {
        type: "input",
        name: "logoTxtColor",
        message: "Enter the text color keyword: ",
        when: (answer) => {
            if (answer.logoTxtClrChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const KWRegEx = '^[A-Za-z]+$';
            if (!answer.match(KWRegEx)) {
                return console.log("\n Invalid color Keyword, please try again!");
            }
            return true;
        }
    },
    // text Colorhexadecimal
    {
        type: "input",
        name: "logoTxtColor",
        message: "Enter the text hexadecimal number (#CCCCCC): ",
        when: (answer) => {
            if (answer.logoTxtClrChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const HXRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(HXRegEx)) {
                return console.log("\n Invalid hexadecimal, please try again!")
            }
            return true;
        }
    },
    // Option for Logo Shape
    {
        type: 'list',
        name: 'logoShape',
        message: 'Choose a Logo Text color format: ',
        choices: ['Circle', 'Square', 'Triangle']
    },
    // Option color keyword or hexadecimal for Shape Color
    {
        type: 'list',
        name: 'logoShapeClrChoice',
        message: 'Choose a Logo Shape color format: ',
        choices: ['color keyword', 'hexadecimal']
    },
    //  Shape Color keyword
    {
        type: "input",
        name: "logoShapeColor",
        message: "Enter the color keyword: ",
        when: (answer) => {
            if (answer.logoShapeClrChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const SCKWRegEx = '^[A-Za-z]+$';
            if (!answer.match(SCKWRegEx)) {
                return console.log("\n Invalid color Keyword, please try again!")
            }
            return true;
        }
    },
    //  Shape Color hexadecimal
    {
        type: "input",
        name: "logoShapeColor",
        message: "Enter the hexadecimal number (#CCCCCC): ",
        when: (answer) => {
            if (answer.logoShapeClrChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const SCHXRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(SCHXRegEx)) {
                return console.log("\n Invalid hexadecimal, please try again!")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter name of your Logo (AlphaNumeric only) :',//Logo Text Question
        name: 'logoName',
        default: 'logo',
        validate: function (answer) {
            if (answer != '') {
                const logoNameRegEx = '^[A-Za-z0-9]+$';
                if (!answer.match(logoNameRegEx)) {
                    return console.log("\n Please enter a name (AlphaNumeric only)!")
                }
            }
            return true;
        }
    }
];

module.exports = questions;
