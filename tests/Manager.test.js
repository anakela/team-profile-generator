const Manager = require('../index');

describe("Manager", () => {
    describe('Initialilzation', () => {
        it('Should...', () => {
            const newManager = new Manager();

            expect("" in newManager).toEqual();
        });
    });
});

// .toBeInstanceOf(Manager);