class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

    // Class functions 

    getName() {
        return this.employeeName
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}

// Exporting for use in other sub-classes

module.exports = Employee;