const returnFirstTwoDrivers = array => array.slice(0,2);
const returnLastTwoDrivers = function(array){return array.slice(-2)}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = multiplier =>{
    return function(fare){return fare * multiplier}
}
const fareDoubler = integer => integer * 2;
const fareTripler = integer => integer * 3;
const selectDifferentDrivers = (array, callback) => {
    return callback(array)
}