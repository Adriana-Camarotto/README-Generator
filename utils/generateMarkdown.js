//create a function that returns a license badge based on which license is passed in
function renderLicensebadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ✨ ${data.projectTitle}

${renderLicensebadge(data.license)};

## 💡 Description
${data.description}  


---

## 🔎 Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test Instructions](#testInstructions)
* [Questions](#questions)
* [Contact-me](#Contact)
---

## 📌 Installation
The inquire, fs and utils dependencies must be installed to run the application.


---

## 📌 Usage
In order to use this application, ${data.usage}


---

## 👉 License

This application is covered under the ${data.license} license. \n
${renderLicensebadge(data.license)}



---

## 🙌🏻 Contribution
Contributors: ${data.contribution}

---

## 🖥️ Test Instructions
The following test instructions must be completed to run the application: \n ${data.testInstructions}

---

## ❓Questions
If  you have any questions about this repo, open an issue or send me an email.


---

## 📧 Contact-me
${data.name} \n
${data.email}
`;
  }
  
  module.exports = generateMarkdown;
  