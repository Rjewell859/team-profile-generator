const inquirer = require('inquirer')
const fs = require('fs')

// Classes

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const fileLocation = './dist/index.html'

var team = ``

// Question Arrays

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

const engineerQuestions = [{
        type: 'input',
        message: 'What is your engineers name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is your engineers employee ID?',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'What is your engineers email?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'What is your engineers github account?',
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'Add an engineer, intern or finish building your team.',
        name: 'newEmployee',
        choices: ['Engineer', 'Intern', 'Done'],
    },
]

const internQuestions = [{
        type: 'input',
        message: 'What is your interns name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'What is your interns ID?',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'What is your interns email address?',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'What is your interns school name?',
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'Add an engineer, intern or finish building your team.',
        name: 'newEmployee',
        choices: ['Engineer', 'Intern', 'Done'],
    },
]

// Begin asking questions

var askQuestions = function () {
    inquirer
        .prompt(managerQuestions)
        .then((data) =>
            createManager(data)
        )
}

var askEngQuestions = function () {
    inquirer
        .prompt(engineerQuestions)
        .then((data) =>
            createEngineer(data)
        )
}

var askIntQuestions = function () {
    inquirer
        .prompt(internQuestions)
        .then((data) =>
            createIntern(data)
        )
}

// Creates file and adds manager information to a card

var writeToFile = function (team) {
    var fileContent = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">  
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/2054ad37bb.js" crossorigin="anonymous"></script>
      <title>Team Profile Generator</title>
    </head>
    <header style = 'background-color:royalblue'>
    <h1 class = 'card-header' style = 'text-align:center'>Your Team Profile</h1>
    </header>
    <body style = 'background-color:rgb(185, 219, 248);'>
      <main>
      ${team}
      </main>

    </body>
    
    </html>`

    // Writing file, program should be complete.

    fs.writeFile(fileLocation, fileContent, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("File succesfully created.")
        }
    });
}

// Creating employees and cards, appending together to string together the HTML


var createManager = function (content) {

    const manager = new Manager(content.managerName, content.managerId, content.managerEmail, content.managerOffice)

    var managerHTML = `
    <div class="card" style="width: 18rem; height: 18rem; margin: 20px;display:inline-block;">
    <div class="card-header" style = 'background-color:cornflowerblue'>
    <h3 style='font-weight:bold;'><i class="fas fa-suitcase-rolling"style="margin:5px;"></i>${manager.getRole()}:</h3> 
    <span style='font-weight:bold;'>${manager.getName()}</span>
  </div>
  <div class="card-body" style = 'background-color:rgb(49, 177, 177); height:100%;'>
  <ul class="list-group list-group-flush"style = 'background-color:aliceblue'>
    <li class="list-group-item">ID: <span style = 'color:blue;'>${manager.getId()}</span</li>
    <li class="list-group-item">Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office Number: <span style = 'color:blue;'>${manager.getOffice()}</span></li>
  </ul>
  </div>
</div>`

    team = managerHTML

    if (content.newEmployee == 'Engineer') {
        askEngQuestions()
    } else if (content.newEmployee == 'Intern') {
        askIntQuestions()
    } else {
        writeToFile(team)
    }
}

var createEngineer = function (content) {

    const engineer = new Engineer(content.engineerName, content.engineerId, content.engineerEmail, content.engineerGithub)

    var engineerHTML = `
    <div class="card" style="width: 18rem; height: 18rem; margin: 20px;display:inline-block;">
    <div class="card-header" style = 'background-color:cornflowerblue'>
    <h3><i class="fas fa-wrench"style="margin:5px;"></i>${engineer.getRole()}:</h3>
    <span style='font-weight:bold;'>${engineer.getName()}</span>
  </div>
  <div class="card-body" style = 'background-color:rgb(49, 177, 177); height:100%;'>
  <ul class="list-group list-group-flush" style = 'background-color:aliceblue'>
    <li class="list-group-item">ID: <span style = 'color:blue;'>${engineer.getId()}</span></li>
    <li class="list-group-item">Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
    <li class="list-group-item">Github Account: <a href = 'https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></span></li>
  </ul>
  </div>
</div>`

    team = team + engineerHTML

    if (content.newEmployee == 'Engineer') {
        askEngQuestions()
    } else if (content.newEmployee == 'Intern') {
        askIntQuestions()
    } else {
        writeToFile(team)
    }
}

// Append Intern to file

var createIntern = function (content) {

    const intern = new Intern(content.internName, content.internId, content.internEmail, content.internSchool)

    var internHTML = `
    <div class="card" style="width: 18rem; height: 18rem; margin: 20px;display:inline-block;">
    <div class="card-header" style = 'background-color:cornflowerblue'>
    <h3><i class="fas fa-user-graduate"style="margin:5px;"></i>${intern.getRole()}:</h3>
    <span style='font-weight:bold;'>${intern.getName()}</span>
  </div>
  <div class="card-body" style = 'background-color:rgb(49, 177, 177); height:100%;'>
  <ul class="list-group list-group-flush" style = 'background-color:aliceblue'>
    <li class="list-group-item">ID: <span style = 'color:blue;'>${intern.getId()}</span></li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">School: <span style = 'color:blue;'>${intern.getSchool()}</span></li>
  </ul>
  </div>
</div>`

    team = team + internHTML

    if (content.newEmployee == 'Engineer') {
        askEngQuestions()
    } else if (content.newEmployee == 'Intern') {
        askIntQuestions()
    } else {
        writeToFile(team)
    }
}

// Initialize File

function init() {
    askQuestions()
}

init();
