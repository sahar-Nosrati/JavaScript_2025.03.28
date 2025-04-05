import { labNumberSubString } from "../data modules/separateNameAndNumber.js";

const unitNumber = 1000;
let calculatedMainNumber;


const substringNumberConverter = function (labNumberSubString){
  calculatedMainNumber = labNumberSubString.map((number) => number - unitNumber); 
  return calculatedMainNumber;
}

substringNumberConverter(labNumberSubString); 

export {calculatedMainNumber};
