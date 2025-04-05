import { data } from "../data modules/data.js";
import { finalName } from "../data modules/concatenation.js";

const converterDataProperties = function (data, finalName) {
  for (let i = 0; i < data.length; i++) {
  data[i].parameters.namespace = finalName[i];
  }
  return data; 
}
 
const convertedData = converterDataProperties(data, finalName);

export { data };
