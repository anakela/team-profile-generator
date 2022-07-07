const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe('Initialilzation', () => {
        describe('GitHub Number', () => {
            it('Should return the engineer GitHub', () => {
                const newGithub = 'example';
                const { github: result } = new Engineer('', '', '', newGithub);
                expect(result).toEqual(newGithub);
            });
        });

        describe('Role', () => {
            it('Should return the engineer role', () => {
                const engineer1 = new Engineer('newName', 'newId', 'newEmail', 'newGithub');
                expect(engineer1.getRole()).toEqual('Engineer');
            });
        });
    });
});