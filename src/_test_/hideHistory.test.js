// Import the js file to test
import { toggleHistory } from '../client/js/hideHistory';

describe("Testing the submit functionality", () => {
    test("Testing the toggleHistory() function", () => {
        expect(toggleHistory).toBeDefined();
    });

    test('Should be a function', () => {
        expect(typeof toggleHistory).toBe("function");
    });
});