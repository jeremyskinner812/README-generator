// function to render the license badge based on user input
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-success)`
  } else {
    return '';
  }
}

// function to only render license link if license was chosen
function renderLicenseLink(license) {
  if(license !== 'None') {
    return `* [License](#license)`;
  } else {
    return '';
  }

}

// function to render license section if a license was chosen
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// function to generate the markdown content with user inputs
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions about the project, have suggestions, or would like to contribute, please contact me at ${data.email}.
You can view my other projects on github [${data.github}](https://github.com/${data.github}/).


`;
}
//  exporting file 
module.exports = generateMarkdown;
