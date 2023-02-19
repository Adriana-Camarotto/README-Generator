// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
# ✨ ${data.projectTitle}

https://github.com/${data.username}/${data.projectTitle}
# 💡 Description
${data.description}  
# 🔎 Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#testInstructions)
* [Questions](#questions)
* [Contact](#contact)

# 📌 Installation
The inquire, fs and utils dependencies must be installed to run the application.

# 📌 Usage
In order to use this application, ${data.Usage}

# 👉 License
This project is licensed under the ${data.license} license.
![GitHub: license] (https://img.shields.io/badge/license-MIT-yellow.svg)

# 🙌🏻 Contribution
Contributors: ${data.Contribution}

# 🖥️ Test Instructions
The following test instructions must be completed to run the application: ${data.TestInstructions}

# ❓Questions
If  you have any questions about this repo, open an issue or contact me at ${data.email}.
 
# 📧 Contact
${data.email}


`
  }
  
  module.exports = generateMarkdown;
  