const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
   {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are the usage information?",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "Please choose the correspondent license to this project.",
        name: "license",
        choices: [`MIT`, `APACHE 2.0`, `GPL 3.0`, `None`],
    },
    {
        type: "input",
        message: "Please List any contributors to this project? (use GitHub username)",
        name: "contribution",
        default: "", 
    },
    {
        type: "input",
        message: "What is the test instructions?",
        name:  "testInstructions",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name",        
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",    
    },
    {
        type: "input",
        message: "What is the project URL"
        name: "url"
    }

];

// function to write README file
function writeToFile(fileName, data) { 
    //cwd is a method of global object process, returns a string value which is the current working directory of the Node.js process.
    try {
        fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
            if (err) {
                console.error(`Error writing to file ${fileName}: ${err}`);
            } else {
                console.log(`File ${fileName} created!`);
            }
        });     
    } catch (err) {
        console.error(`Error writing to file ${fileName}: ${err}`);
    }       
}

// function to initialize programa
function init() { 
    inquirer.prompt(questions).then((data) => {
        console.log("Creating your professional README.md file...");
        console.log(data);
        writeToFile("README.md", generateMarkdown(data));
    });
}

// function call to initialize application
init();

 //exports
 module.exports = questions;
  