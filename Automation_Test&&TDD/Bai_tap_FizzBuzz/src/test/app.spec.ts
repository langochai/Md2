import { NextDayCalculator } from '../app'

describe("Calculate next day", () => {
    test("it should return to an array which shows the next day", () => {
        const day:number = 28
        const month:number = 2
        const year:number = 2032
        expect(NextDayCalculator(day,month,year)).toEqual([29,2,2032]);
    });
    test("it should return to an array which shows the next day", () => {
        const day:number = 29
        const month:number = 2
        const year:number = 2032
        expect(NextDayCalculator(day,month,year)).toEqual([1,3,2032]);
    });
});