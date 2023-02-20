const fs = require("fs");
const inquirer = require('inquirer');
const index = require("../index.js");

//Function that returns a license badge based on which license is passed in
//if there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``;
  if(license === `MIT`) {
    badge = `![Github license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)` 
  } else if (license === `APACHE 2.0`) {
    badge = `![license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)`
  } else if (license === `GPL 3.0`) {
    badge = `![license: GPL v3](https://img.shields.io/badge/license-GPLv3-blue.svg)`
  } else { 
    badge = ``
   }
    return badge;
}

//function that returns the license link
//if there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ``;
  if(license === `MIT`) {
    licenseLink = `https://choosealicense.com/licenses/mit/`
  } else if (license === `APACHE 2.0`) {
    licenseLink = `https://apache.org/licenses/LICENSE-2.0/`
  } else if (license === `GPL 3.0`) {
    licenseLink = `https://www.gnu.org/licenses`
  } else {
    licenseLink = ``
  }
  return licenseLink;
}
    
//function that returns the license section of README
//if there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ``;
  if(license === `None`) {
    licenseSection = ``
  } else {
    `licenseSection = ${license}`
    
  }
  return licenseSection;
}


// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ✨ ${data.projectTitle}

## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)} \n
### ${renderLicenseLink(data.license)}


## 💡 Description
${data.description}  


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

## 👉 License

This application is covered under the ${data.license} license. \n
## ${renderLicenseBadge(data.license)}



---

## 🙌🏻 Contribution
Contributors: ${data.contribution}

---

## 🖥️ Test Instructions
The following commands in your terminal to test this app: \n ${data.testInstructions}

---

## ❓Questions
If  you have any questions about this repo, you may contact me \n
Github: hhtps://github.com/${data.username} \n
Email: ${data.email}


---

## 📧 Contact-me
${data.name} \n
${data.email}
`;
  }
 
  //exports
  module.exports = generateMarkdown;
  