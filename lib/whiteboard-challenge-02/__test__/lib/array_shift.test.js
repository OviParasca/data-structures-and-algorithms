
const ArrayShift = require('../../lib/array_shift.js');

describe('ArrayShift', () => {

    let testArray = new ArrayShift();

    let loadArray = () => {
        return testArray.insertShiftArray([2, 4, 6, 8], 5);
    };


    it('check the array for the valid length after inserting the new value', () => {
        expect(loadArray().length).toEqual(5);
    });

    it('check if all the elements in the array are numbers', () => {
        loadArray().forEach((val,i) => {
            expect(typeof val).toEqual("number");
        });
    });

    it('check if the new value is in the center', () => {
        const centerPoint = Math.ceil([2, 4, 6, 8].length/2);
        expect(loadArray()[centerPoint]).toEqual(5);
    });

});