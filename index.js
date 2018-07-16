
function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let starting = parseInt(startingBlock);
    let ending = parseInt(endingBlock);
    let difference = blockRange - Math.abs(ending - starting);
    return difference>0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`
  }
}


const produceTipCalculator = (percentage) => {
  return function(rideFare){
    return rideFare*percentage;
  }
}

const createDriver = () => {
  let driverId=0;
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
