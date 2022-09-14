const inquirer = require('inquirer')



// prompts

const questions = [{
    type: 'input',
    message: 'What is your team managers name?',
    name: 'managerName',
},
{
    type: 'input',
    message: 'What is your team managers employee ID?',
    name: 'managerId',
},
{
    type: 'input',
    message: 'What is your team managers email address?',
    name: 'managerEmail',
},
{
    type: 'input',
    message: 'What is your team managers office number?',
    name: 'managerOffice',
},
{
    type: 'list',
    message: 'Add an engineer, intern or finish building your team.',
    name: 'newEmployee',
    choices: ['Engineer', 'Intern', 'Done'],
},
]



// ask questions

// write file function







// index template

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
  
// </body>
// </html>