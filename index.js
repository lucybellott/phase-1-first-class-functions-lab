
let drivers = ["Sally", "Bob", "Freddy", "Claudia"]

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function () {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
    return function(fare){
      return num*fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareQuintupler = createFareMultiplier(5);
    
const fareTripler = createFareMultiplier(3);

const  selectDifferentDrivers = function(drivers, method) {
    
    if (method === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else if(method === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}   

selectDifferentDrivers(drivers,returnFirstTwoDriver);