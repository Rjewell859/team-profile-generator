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

const manager = new Manager('jim', 25, 'something', 6)

console.log(manager)

console.log(manager.getRole())