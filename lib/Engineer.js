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

module.exports = Engineer;