//create a function that returns a license badge based on which license is passed in
function renderLicensebadg(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

//Function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [license](#license)\n`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ✨ ${data.projectTitle}


${renderLicensebadg(data.license)};


## 💡 Description
${data.description}  


---
node 
## 🔎 Table of Contents
* [Installation](##installation)
* [Usage](##sage)
* [License](##license)
* [Contribution](##contribution)
* [Tests Instructions](##testInstructions)
* [Questions](##questions)
* [Contact-me](##Contact)
---

## 📌 Installation
The inquire, fs and utils dependencies must be installed to run the application.


---

## 📌 Usage
In order to use this application, ${data.usage}


---

## 👉 License
${renderLicenseLink(data.license)};



---

## 🙌🏻 Contribution
Contributors: ${data.contribution}

---

## 🖥️ Test Instructions
The following test instructions must be completed to run the application: ${data.testInstructions}

---

## ❓Questions
If  you have any questions about this repo, open an issue or contact me at ${data.email}.


---

## 📧 Contact-me
${data.name}
${data.email}
`;
  }
  
  module.exports = generateMarkdown;
  