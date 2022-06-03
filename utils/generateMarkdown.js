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
  [Back to Table of Contents](#description) 
  <br>
  ${data.description} 

  ## Usage Information
  [Back to Table of Contents](#usage-info)
  <br>
  ${data.usage}

  ## Installation
  [Back to Table of Contents](#installation)
  <br>
  ${data.installing}

  ## Contribution Guidelines 
  [Back to Table of Contents](#contribution-guidelines)
  <br>
  ${data.guidelines}

  ### License
  [Back to Table of Contents](#license)
  <br>
  ${data.license}

  ### Questions
  [Back to Table of Contents](#questions)
  If you have any questions about anything regarding this application, feel free to contact me via email through [here](${data.email}. Or visit the repository directly on [Github](${data.linkRepo}).
  <br>
  You can visit my Github profile at [${data.username}](${data.linkProfile}).
`;
}

module.exports = generateMarkdown;
