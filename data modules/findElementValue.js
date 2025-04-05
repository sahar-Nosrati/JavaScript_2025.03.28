import { data} from "../data modules/data.js";


const findNamespaceValue = function (data) {
  const namespaceValue = data.map((item) => item.parameters.namespace);
  return namespaceValue;
};

const namespaceValue = findNamespaceValue(data);

export { findNamespaceValue, namespaceValue };
