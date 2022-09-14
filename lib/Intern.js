const Employee = require('./Employee')

class Intern extends Employee {
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
    constructor()
}