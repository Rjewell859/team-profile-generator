const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getRole', () => {
            it("Should be overwritten to return Employee", () => {
                const testEmployee = new Employee('TestName', '0101', 'test@test.com')

                expect(testEmployee.getRole()).toEqual('Employee');
            });
        }),
        describe('getName', () => {
            it("Should match the correct name", () => {
                const testEmployee = new Employee('TestName', '0101', 'test@test.com')

                expect(testEmployee.getName()).toEqual('TestName');
            });
        }),
        describe('getId', () => {
            it("Should return the correct ID", () => {
                const testEmployee = new Employee('TestName', '0101', 'test@test.com')
                expect(testEmployee.getId()).toEqual('0101')
            })
        }),
        describe('getEmail', () => {
            it("Should return the correct email", () => {
                const testEmployee = new Employee('TestName', '0101', 'test@test.com')

                expect(testEmployee.getEmail()).toEqual('test@test.com');
            });
        })
        
})