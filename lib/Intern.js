const Employee = require('./Employee')

class Intern extends Employee {
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
    constructor(employeeName, id, email, internSchool) {
        const school = internSchool;

        super(employeeName, id, email);
            this.employeeName = employeeName;
            this.id = id;
            this.email = email;
            this.school = school;
        

    }
}

const intern = new Intern('jim', 25, 'something', 'UNH')

module.exports = Intern;