import {namespaceValue} from "../data modules/findElementValue.js";

let labNameSubString;
let labNumberSubString;


const separationNameAndNumber = function (namespaceValue){
  labNameSubString = namespaceValue.map((labName) => labName.substring(0,7));
  labNumberSubString = namespaceValue.map((labName) => labName.substring(7));
  return [labNameSubString, labNumberSubString]
}


const value = separationNameAndNumber(namespaceValue); 

export {labNameSubString, labNumberSubString};