import { FizzBuzzTranslate } from '../app'

describe("FizzBuzz translate", () => {
    test("it should translate the input number", () => {
        let n = new FizzBuzzTranslate(2)
        expect(n.translate()).toEqual('2');
    });
});