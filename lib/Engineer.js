const Employee = require('./Employee')

// Requires employee to inherit base attributes

class Engineer extends Employee {

    // Overwriting getRole()

    getRole() {
        return 'Engineer';
    }

    // New function for engineer

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

// Exporting for use in index.js

module.exports = Engineer;