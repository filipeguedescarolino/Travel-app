// Import the js file to test
import { hideDiv } from '../client/js/hideHistory';

describe("Testing the submit functionality", () => {
    test("Testing the hideDiv() function", () => {
        expect(hideDiv).toBeDefined();
    });

    test('Should be a function', () => {
        expect(typeof hideDiv).toBe("function");
    });
});