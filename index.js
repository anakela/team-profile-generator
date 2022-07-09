const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const generateHtmlPage = require('./src/generateHtmlPage');

const employArr = [];

const newManager = [
    {
        message: 'What is your manager name?',
        name: 'manager',
        type: 'input',
        // default: 'Team Manager',
        // validate: 
    },
    {
        message: 'What is your employee ID?',
        name: 'id',
        type: 'input',
        default: '1',
        // validate: 
    },
    {
        message: 'What is your email address?',
        name: 'email',
        type: 'input',
        // validate: 
    },
    {
        message: 'What is your office number?',
        name: 'offNum',
        type: 'input',
        default: '1',
        // validate: 
    }];

function addManager() {
    inquirer
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        .prompt(newManager)
        .then(answers => {
            // WHEN I enter the team manager’s name, employee ID, email address, and office number
            console.log(answers);
            addTeamMember();
        });
}

function addTeamMember() {
    inquirer
        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        // WHEN I decide to finish building my team
        // THEN I exit the application, and the HTML is generated
        .prompt([
            {
                message: 'Would you like to add another team member?',
                name: 'addEngInt',
                type: 'list',
                choices: [
                    'Yes, add a team member.',
                    'No, build the team.'
                ],
                // validate: 
            }
        ])
        .then(answers => {
            console.log(answers.addEngInt);
            if (answers.addEngInt == 'Yes, add a team member.') {
                addEngInt();
            } else {
                fs.writeFile(`dist/team.html`, generateHtmlPage(employArr), err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Success!');
                });
            }
        });
}

function addEngInt() {
    inquirer
        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        .prompt([
            {
                message: 'What is your employee name?',
                name: 'employeeName',
                type: 'input',
                // validate: 
            },
            {
                message: 'What is the employee ID?',
                name: 'id',
                type: 'input',
                default: '1',
                // validate: 
            },
            {
                message: 'What is the employee email address?',
                name: 'email',
                type: 'input',
                // validate: 
            },
            {
                message: 'What type of employee is this?',
                name: 'addEngInt',
                type: 'list',
                choices: [
                    'Engineer',
                    'Intern',
                ],
                // validate: 
            },
            {
                message: 'What is your GitHub username?',
                name: 'github',
                type: 'input',
                default: 'github_username',
                // validate: ,
                when: (answers) => {
                    return answers.addEngInt === 'Engineer';
                }
            },
            {
                message: 'What is your school name?',
                name: 'school',
                type: 'input',
                default: 'School Name',
                // validate: ,
                when: (answers) => {
                    return answers.addEngInt === 'Intern';
                }
            }
        ])
        .then(answers => {
            console.log(answers);
            addTeamMember();
        });
}

// WHEN I start the application
addManager();