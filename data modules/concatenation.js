import { calculatedMainNumber } from "../data modules/subtractionNumber.js";
import { labNameSubString } from "../data modules/separateNameAndNumber.js";

let finalName;

const concatenatedNamespac = function (labNameSubString, calculatedMainNumber) {
  finalName = labNameSubString.map((item, index) => item + calculatedMainNumber[index]);
};

const test = concatenatedNamespac(labNameSubString, calculatedMainNumber);

export {finalName };
