//Packages for the app
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

//README prompts
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },{
        type: "input",
        message: "Provide the url to your Github profile.",
        name: "linkProfile"
    },{
        type: "input",
        message: "Provide the url to tthe app's repository.",
        name: "linkRepo"
    },{
        type: "input",
        message: "What is your email address?",
        name: "email"
    },{
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
        type: "input",
        message: "Describe your repository.",
        name: "description"
    },{
        type: "input",
        message: "Provide relevant installation instructions.",
        name: "installing"
    },{
        type: "input",
        message: "Provide relevant usage information.",
        name: "usage"
    },{
        type: "input",
        message: "Provide the contribution guidelines.",
        name: "guidelines"
    },{
        type: "list",
        message: "Select one license for your application.",
        name: "license",
        choices: [
            "afl-3.0",
            "mit",
            "mpl-2.0",
            "osl-3.0",
            "ms-pl",
            "none"
        ],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
