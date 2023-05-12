const inquirer = require('inquirer');

function promptUser() {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter your project title:',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log("Please enter your project title.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter your project description:',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log("Please enter your project description.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter your project installation instructions:',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log("Please enter your project installation instructions.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter your project usage information:',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log("Please enter your project usage information.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Enter your project contribution guidelines:',
                validate: contributionInput => {
                    if (contributionInput) {
                        return true;
                    } else {
                        console.log("Please enter your project contribution guidelines.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Enter your project test instructions:',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    } else {
                        console.log("Please enter your project test instructions.");
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project:',
                choices: ['MIT', 'Apache', 'GPL', 'None'],
                validate: () => true //because choices can not be empty
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub username:',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your GitHub username.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address:',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter your email address.");
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            resolve(answers);
        })
        .catch(error => {
            reject(error);
        });
    });
}

function init() {
    promptUser()
    .then(answers => {
        console.log(answers);
    })
}

init();