const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('getRole', () => {
            it("Should be overwritten to return manager", () => {
                const testManager = new Manager('Tim', '7', 'test@test.com', '52')

                expect(testManager.getRole()).toEqual('Manager');
            });
        }),
        describe('getOffice', () => {
            it("Should return the manager office number", () => {
                const testManager = new Manager('Tim', '7', 'test@test.com', '52')
                expect(testManager.getOffice()).toEqual('52')
            })
        })
})