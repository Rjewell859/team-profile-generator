const Employee = require('./Employee')

class Engineer extends Employee {
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
    constructor(employeeName, id, email, githubUser) {
        const github = githubUser;

        super(employeeName, id, email);
            this.employeeName = employeeName;
            this.id = id;
            this.email = email;
            this.github = github;
        

    }
}

const engineer = new Engineer('jim', 25, 'something', 'githubuser')

console.log(engineer)

console.log(engineer.getRole())
console.log(engineer.getGithub())
console.log(engineer.getEmail())