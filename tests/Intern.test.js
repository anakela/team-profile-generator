const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe('Initialilzation', () => {
        describe('School', () => {
            it('Should return the intern school', () => {
                const newSchool = 'Example School';
                const { school: result } = new Intern('', '', '', newSchool);
                expect(result).toEqual(newSchool);
            });
        });

        describe('Role', () => {
            it('Should return the intern role', () => {
                const intern1 = new Intern('newName', 'newId', 'newEmail', 'newSchool');
                expect(intern1.getRole()).toEqual('Intern');
            });
        });
    });
});