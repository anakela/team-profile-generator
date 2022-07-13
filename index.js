const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtmlPage = require('./src/generateHtmlPage');

const employArr = [];

const newManager = [
    {
        message: 'What is your manager name?',
        name: 'name',
        type: 'input',
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
        // ...THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        .prompt(newManager)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.offNum);
            employArr.push(manager);
            // WHEN I enter the team manager’s name, employee ID, email address, and office number...
            console.log(answers);
            addTeamMember();
        });
}

function addTeamMember() {
    inquirer
        // ...THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        .prompt([
            {
                message: 'Would you like to add another team member?',
                name: 'addEngInt',
                type: 'list',
                choices: [
                    'Yes, add an Engineer.',
                    'Yes, add an Intern.',
                    'No, build the team.'
                ],
                // validate: 
            }
        ])
        .then(answers => {
            console.log(answers.addEngInt);
            if (answers.addEngInt == 'Yes, add an Engineer.') {
                addEngineer();
            } else if (answers.addEngInt == 'Yes, add an Intern.') {
                addIntern();
            } else {
                // WHEN I decide to finish building my team
                // THEN I exit the application, and the HTML is generated
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

function addEngineer() {
    inquirer
        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        .prompt([
            {
                message: "What is your engineer's name?",
                name: 'name',
                type: 'input',
                // validate: 
            },
            {
                message: "What is your engineer's employee ID?",
                name: 'id',
                type: 'input',
                default: '1',
                // validate: 
            },
            {
                message: "What is your engineer's email address?",
                name: 'email',
                type: 'input',
                // validate: 
            },
            {
                message: "What is your engineer's GitHub username?",
                name: 'github',
                type: 'input',
                default: 'github_username',
                // validate: ,
            },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employArr.push(engineer);

            console.log(answers);
            addTeamMember();
        });
}

function addIntern() {
    inquirer
        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        .prompt([
            {
                message: "What is your intern's name?",
                name: 'name',
                type: 'input',
                // validate: 
            },
            {
                message: "What is the intern's employee ID?",
                name: 'id',
                type: 'input',
                default: '1',
                // validate: 
            },
            {
                message: "What is the intern's email address?",
                name: 'email',
                type: 'input',
                // validate: 
            },
            {
                message: "What is your intern's school name?",
                name: 'school',
                type: 'input',
                default: 'School Name',
                // validate: ,
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employArr.push(intern);

            console.log(answers);
            addTeamMember();
        });
}

// WHEN I start the application...
addManager();