const Employee = require('./Employee')

class Manager extends Employee {
    getRole() {
        return 'Manager';
    }
    constructor(employeeName, id, email, officeNumber) {
        const office = officeNumber;

        super(employeeName, id, email);
        this.employeeName = employeeName
        this.id = id;
        this.email = email;
        this.office = office;



    }
}

module.exports = Manager;