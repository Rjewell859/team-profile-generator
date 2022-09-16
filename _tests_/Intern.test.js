const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('getRole', () => {
            it("Should be overwritten to return Intern", () => {
                const testIntern = new Intern('Tim', '42', 'test@test.com', 'UNH')

                expect(testIntern.getRole()).toEqual('Intern');
            });
        }),
        describe('getGithub', () => {
            it("Should return the correct github account", () => {
                const testIntern = new Intern('Tim', '42', 'test@test.com', 'UNH')
                expect(testIntern.getSchool()).toEqual('UNH')
            })
        })
})