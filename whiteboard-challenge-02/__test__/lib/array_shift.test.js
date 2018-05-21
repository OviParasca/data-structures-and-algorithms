
const ArrayShift = require('../../lib/array_shift.js');

describe('ArrayShift', () => {

    let testArray = new ArrayShift();

    let loadArray = () => {
        return testArray.insertShiftArray([2, 4, 6, 8], 5);
    };

    let loadRemoveFromArray = () => {
        return testArray.removeShiftArray([1, 2, 3, 4, 5]);
    }

    // The following tests are for the inserting a new element in the middle of an array
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

    // The following tests are for removing the middle element from an array
    it('check the array for the valid length after removing the middle element', () => {
        let newLength = loadRemoveFromArray().length;
        console.log(`new length: ${newLength}`);
        expect(newLength).toEqual(4);
    });

    it('check if all the elements in the array are numbers', () => {
        loadRemoveFromArray().forEach((val,i) => {
            expect(typeof val).toEqual("number");
        });
    });

    // it('check if the middle element is removed', () => {
    //     const centerPoint = Math.floor([2, 4, 6, 8].length/2);
    // });

});