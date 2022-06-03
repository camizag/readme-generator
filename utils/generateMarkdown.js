// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### Table of Contents
  * [Description](#description)
  * [Usage Information](#usage-info)
  * [Installation](#installation)
  * [Contribution Guidelines](#contribution-guidelines)
  * [License](#license)
  * [Questions](#questions)

  ### Description 
  ######[Back to Table of Contents](#description)
  ${data.description} 

  ## Usage Information
  ######[Back to Table of Contents](#usage-info)
  ${data.usage}

  ## Installation
  ######[Back to Table of Contents](#installation)
  ${data.installing}

  ## Contribution Guidelines 
  ######[Back to Table of Contents](#contribution-guidelines)
  ${data.guidelines}

  ### License
  ######[Back to Table of Contents](#license)
  ${data.license}

  ### Questions
  ######[Back to Table of Contents](#questions)
  If you have any questions about anything regarding this application, feel free to contact me via email through [here](${data.email}. Or visit the repository directly on [Github](${data.linkRepo}).
  
  You can visit my Github profile at [${data.username}](${data.linkProfile}).


`;
}

module.exports = generateMarkdown;
