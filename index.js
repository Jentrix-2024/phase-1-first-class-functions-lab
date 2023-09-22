const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers=(drivers)=>  drivers.slice(-2);

  function createFareMultiplier(multiplier){
    return function(fare){
    return (fare*multiplier)};
  }
   
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3)
function selectDifferentDrivers(drivers,driverselector){
    return driverselector(drivers);
}
 


const drivers=returnLastTwoDrivers(drivers)
 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
 


    