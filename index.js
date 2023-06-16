const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache-2.0", "GPL-3.0"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md file created successfully!");
    }
  });
}

// Function to initialize app
function init() {
  // Prompt user with questions and generate README file
  inquirer.prompt(questions).then(function (answers) {
    // Generate README content using user's answers
    var readmeContent = `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions or concerns, please contact me via GitHub or email:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}`;

    // Write README file
    writeToFile("README.md", readmeContent);
  });
}

// Call the init function to start the application
init();
