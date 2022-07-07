const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe('Initialilzation', () => {
        describe('Name', () => {
            it('Should return the employee name', () => {
                const newName = 'Angie';
                const { name: result } = new Employee(newName, '', '');
                expect(result).toEqual(newName);
            });
        });

        describe('Id', () => {
            it('Should return the employee ID', () => {
                const newId = '2';
                const { id: result } = new Employee('newName', newId, );
                expect(result).toEqual(newId);
            });
        });

        describe('Email', () => {
            it('Should return the employee email', () => {
                const newEmail = 'example@example.com';
                const { email: result } = new Employee('newName', 'newId', newEmail);
                expect(result).toEqual(newEmail);
            });
        });

        describe('Role', () => {
            it('Should return the employee role', () => {
                const employee1 = new Employee('newName', 'newId', 'newEmail');
                expect(employee1.getRole()).toEqual('Employee');
            });
        });
    });
});