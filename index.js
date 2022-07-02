const inquirer = require('inquirer');
const fs = require('fs');

// WHEN I am prompted for my team members and their information
inquirer
    // WHEN I start the application
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    .prompt([
        {
            message: 'What is your manager name?',
            name: 'manager-name',
            type: 'input',
            default: 'Team Manager'
        },
        {
            message: 'What is your employee ID?',
            name: 'id',
            type: 'input',
            default: '1'
        },
        {
            message: 'What is your email address?',
            name: 'email',
            type: 'input',
            default: 'example@example.com'
        },
        {
            message: 'What is your office number?',
            name: 'off-num',
            type: 'input',
            default: '1'
        },
        {
            message: 'Would you like to add an engineer or intern?',
            name: 'add-eng-int',
            type: 'rawlist',
            choices: [
                'Yes, add engineer',
                'Yes, add intern',
                'No, thanks.'
            ]
        },
    ])
    .then(answers => {
        console.log(answers);
        // THEN an HTML file is generated that displays a nicely formatted team roster based on user input
        fs.writeFile(`${answers.name}.html`, JSON.stringify(answers, null, 2), err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Success!');
        })
    });

