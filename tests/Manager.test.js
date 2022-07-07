const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe('Initialilzation', () => {
        describe('Office Number', () => {
            it('Should return the manager office number', () => {
                const newOffNum = '1';
                const { officeNumber: result } = new Manager('', '', '', newOffNum);
                expect(result).toEqual(newOffNum);
            });
        });

        describe('Role', () => {
            it('Should return the manager role', () => {
                const manager1 = new Manager('newName', 'newId', 'newEmail', 'newOffNum');
                expect(manager1.getRole()).toEqual('Manager');
            });
        });
    });
});