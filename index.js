const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const fileLocation = './dist/index.html'

// prompts

const managerQuestions = [{
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

var askQuestions = function () {
    inquirer
        .prompt(managerQuestions)
        .then((data) =>
            writeToFile(data)
        )
}



var writeToFile = function (content) {

    const manager = new Manager(content.managerName, content.managerId, content.managerEmail, content.managerOffice)

    var managerHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">  
      <link rel="stylesheet" href="./assets/css/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      <title>Team Profile Generator</title>
    </head>
    <header>
    <h1 class = card-header>Your Team Profile</h1>
    </header>
    <body>
      <main id = 'teamLocation'>
      <div class="card" style="width: 18rem;">
  <div class="card-header">
    <h3>${manager.getRole()}: ${manager.employeeName}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.office}</li>
  </ul>
</div>
      </main>

    </body>
    
    </html>
    
    `
    fs.writeFile(fileLocation, managerHTML, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Manager succesfully created.")
        }
    });
}

function init() {
    askQuestions()
}

init();
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