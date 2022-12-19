const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// requiring fs, path, inquirer, and the generate markdown file/function

// inquirer prompts
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['APACHE_2.0', 'BSD_3', 'Eclipse_Public_License_1.0', 'GNU_GPL_v3', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you run tests on your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// functios to use fs to write file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.info('Generating README File');
        writeToFile('README.md', generateMarkdown({ ...answers }));
    });
}

// Function call to initialize app
init();
