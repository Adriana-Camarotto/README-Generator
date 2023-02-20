const fs = require("fs");
const inquirer = require('inquirer');
const index = require("../index.js");

//Function that returns a license badge based on which license is passed in
//if there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``;
  if(license == `MIT`) {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == `APACHE 2.0`) {
    badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == `GPL 3.0`) {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else { 
    badge = ``
   }
    return badge;
};

//function that returns the license link
//if there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ``;
  if(license == `MIT`) {
    licenseLink = `https://opensource.org/licenses/MIT`
  } else if (license == `APACHE 2.0`) {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`
  } else if (license == `GPL 3.0`) {
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0`
  } else {
    licenseLink = ``
  }
  return licenseLink;
};
    
//function that returns the license section of README
//if there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ``;
  if(license === `None`) {
    licenseSection = ``
  } else {
    licenseSection = `License: ${license}`
    
  }
  return licenseSection;
};


// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ✨ ${data.projectTitle}

## 💡 Description
${data.description}  

---

## 👉 License

This application is covered under the ${data.license} license. \n

###  ${renderLicenseBadge(data.license)} \n
###  ${renderLicenseLink(data.license)}

// user ypur terminal to gener
---

## 🔎 Table of Contents
### * [Description](#description)
### * [Installation](#installation)
### * [Usage](#usage)
### * [License](#license)
### * [Contribution](#contribution)
### * [Test Instructions](#testInstructions)
### * [Questions](#questions)
### * [Contact-me](#Contact)
---

## 📌 Installation
The inquire, fs and utils dependencies must be installed to run the application.


---

## 📌 Usage
In order to use this application, ${data.usage}

---

## 🙌🏻 Contribution
Contributors: ${data.contribution}

---

## 🖥️ Test Instructions
Follow the commands in your terminal to test this app: \n 
${data.testInstructions}

---

## ❓Questions
If  you have any questions about this repo, you may send me an issue \n
Github: https://github.com/${data.username} \n

---

## 📧 Contact-me
${data.name} \n
${data.email}
`;
  };
 
  //exports
  module.exports = generateMarkdown;
  