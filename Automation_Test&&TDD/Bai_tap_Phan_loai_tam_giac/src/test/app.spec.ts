import {TriangleClassifier} from "../app";

describe('TriangleClassifier Testing', () => {
    let newTest = new TriangleClassifier(2,2,3)
    test('should return the type of triangle (if exist)', () => {
        expect(newTest.classify()).toEqual('tam giac can');
    });

});