const inquirer = require('inquirer');
const fs = require('fs');

// WHEN I am prompted for my team members and their information
inquirer
    .prompt([
        {
            message: '',
            name: '',
            type: 'input',
        },
    ]);

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input