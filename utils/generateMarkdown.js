function renderLicenseSection(license) {
  if (license !== "none") {
    returne `## License
    This project is licensed under the $(license) license.`;
  }
  return "";
}

function renderlicenseLink(license) {
  if (license !== "none") {
    return `n\* [License](#license)\n`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ✨ ${data.projectTitle}

By ${data.name}
${remderLicenseBadg(data.license)}

## 💡 Description
${data.description}  


---

## 🔎 Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
$(renderLicenseLink(data.license))
* [Contribution](#contribution)
* [Tests](#testInstructions)
* [Questions](#questions)
* [Contact](#contact)

---

## 📌 Installation
The inquire, fs and utils dependencies must be installed to run the application.


---

## 📌 Usage
In order to use this application, ${data.Usage}


---

## 👉 License
This project is licensed under the ${data.license} license.
![GitHub: license:] (https://img.shields.io/badge/license-MIT-yellow.svg)

---

## 🙌🏻 Contribution
Contributors: ${data.Contribution}

---

## 🖥️ Test Instructions
The following test instructions must be completed to run the application: ${data.TestInstructions}

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
  