const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const generateHtmlPage = require('./src/generateHtmlPage');

const employArr = [];

const newManager = [
    {
        message: 'What is your manager name?',
        name: 'manager-name',
        type: 'input',
        default: 'Team Manager',
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
        default: 'example@example.com',
        // validate: 
    },
    {
        message: 'What is your office number?',
        name: 'off-num',
        type: 'input',
        default: '1',
        // validate: 
    }];

function addManager() {
    inquirer
        .prompt(newManager)
        .then(answers => {
            console.log(answers);
            addTeamMember();
        });
}

function addTeamMember() {
    inquirer
        .prompt([
            {
                message: 'Would you like to add another team member?',
                name: 'add-eng-int',
                type: 'rawlist',
                choices: [
                    'Yes, add a team member',
                    'No, build the team.'
                ],
                // validate: 
            }
        ])
        .then(answers => {
            if (answers.add - eng - int === 'Yes, add team member') {
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
        // WHEN I start the application
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        .prompt([
            {
                message: 'What is your employee name?',
                name: 'employee-name',
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
                name: 'add-eng-int',
                type: 'rawlist',
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
                    return answers.add-eng-int === 'Engineer';
                }
            },
            {
                message: 'What is your school name?',
                name: 'school',
                type: 'input',
                default: 'School Name',
                // validate: ,
                when: (answers) => {
                    return answers.add-eng-int === 'Intern';
                }
            }
        ])
        .then(answers => {
            console.log(answers);
            addTeamMember();
        });
}

addManager();

// WHEN I am prompted for my team members and their information



// const employeeQuestions = ([
//     {
//         message: 'What is your manager name?',
//         name: 'manager-name',
//         type: 'input',
//         default: 'Team Manager',
//         // validate: 
//     },
//     {
//         message: 'What is your employee ID?',
//         name: 'id',
//         type: 'input',
//         default: '1',
//         // validate: 
//     },
//     {
//         message: 'What is your email address?',
//         name: 'email',
//         type: 'input',
//         default: 'example@example.com',
//         // validate: 
//     },
//     {
//         message: 'What is your office number?',
//         name: 'off-num',
//         type: 'input',
//         default: '1',
//         // validate: 
//     },
//     {
//         message: 'Would you like to add an engineer or intern?',
//         name: 'add-eng-int',
//         type: 'rawlist',
//         choices: [
//             'Yes, add engineer.',
//             'Yes, add intern.',
//             'No, thanks.'
//         ],
//         // validate: 
//     },
// ]);

// const engineerQuestions = ([

// ]);

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// init();

// module.exports = index.js;