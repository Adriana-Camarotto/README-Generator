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
        name: "tableOfContents",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are the usage information? (i.e. Markdown, JavaScript, Node, JSON, etc)",
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
        message: "Contact info for inquires. (i.e. 8.2.4 (or later))",
        name: "Questions",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        Type: "input",
        message: "What is your name?",
        name: "name",        
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",    
    },

];

// function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}


// function to initialize program
function init() { 
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your professional README.md file...");
        writeToFile("README.md", generateMarkdown({ ...responses}));
    });
}

// function call to initialize program
init();