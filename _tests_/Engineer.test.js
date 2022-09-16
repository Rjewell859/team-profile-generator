const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('getRole', () => {
            it("Should be overwritten to return engineer", () => {
                const testEngineer = new Engineer('Tim', '42', 'test@test.com', 'githubaccount')

                expect(testEngineer.getRole()).toEqual('Engineer');
            });
        }),
        describe('getGithub', () => {
            it("Should return the correct github account", () => {
                const testEngineer = new Engineer('Tim', '42', 'test@test.com', 'githubaccount')
                expect(testEngineer.getGithub()).toEqual('githubaccount')
            })
        })
})