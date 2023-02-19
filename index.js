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
        message: "Tabel of Contentes?",
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
        message: "Please select a license to this project",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD", "None"],
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What is the test instructions?",
        name:  "testInstructions",
    },
    {
        type: "input",
        message: "Contact info for inquires.",
        name: "Questions",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",    
    },

];

// function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("Success!");
        }
    })
}


// function to initialize program
function init() { 
    inquirer.createPromptModule(questions)  
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}

// function call to initialize program
init();