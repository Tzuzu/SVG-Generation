// Importing other documents

const {Circle, Square, Triangle} = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

// Questions to be answered by the user

const questions = [
    {
        type: 'list',
        name: 'shape',
        choices: ["Circle", "Square", "Triangle"],
        message: "Select the shape for your logo",
    },
    {
        type: 'input',
        name: 'text',
        message: "Type up to 3 characters for your logo",
    }, 
    {
        type: 'input',
        name: 'textColor',
        message: "Enter a CSS or Hexadecimal color for your logo's text",
    }, 
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter a CSS or Hexadecimal color for your logo's shape",
    }
]

// Asks the user questions, checking that it meets all requirements

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        if (answers.text.length < 1 || answers.text.length >3) {
            console.log('Your answer may not be less than 1 character or more than 3 character')
            init()
        } else {
            writeToFile('yourlogo.svg', answers)
        };
    });
};
init();

// Renders the options entered

function renderShape(shape, selectedColor) {
    if (shape === "Circle") {
        const shape = new Circle();
        shape.setColor(selectedColor);
        return shape.render();
    } else if (shape === "Square") {
        const shape = new Square();
        shape.setColor(selectedColor);
        return shape.render();
    } else if (shape === "Triangle") {
        const shape = new Triangle();
        shape.setColor(selectedColor);
        return shape.render();
    };
};

function createSVG(data) {
    let yAxis = 125;
    if (data.shape === "Triangle") {
        yAxis = 160
    };
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderShape(data.shape, data.shapeColor)}
<text x="150" y="${yAxis}" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`
};

// Writes the svg file to the users storage

function writeToFile(fileName, data) {
    const fileData = createSVG(data);
    fs.writeFile(fileName, fileData, (error) => error ? console.log(error) : console.log('Generated SVG File as logo.svg'));
}
