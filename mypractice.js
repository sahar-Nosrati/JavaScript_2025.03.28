const data = [
  {
    moId: "PLMN-PLMN/CNF-1001",
    moClass: { id: "com.nokia.cnf.lcm:CNF", version: "CNF1.0" },
    planOperation: "CREATE",
    parameters: {
      deploymentProfile: [
        {
          values: "CiAg",
          chart: "crit-cluster-preparation-1.7.2.tgz",
          order: 0,
          releaseName: "crit-cluster-preparation",
        },
        {
          values: "CiAgY2x1",
          chart: "crit-prerequisite-1.7.2.tgz",
          order: 1,
          releaseName: "crit-prerequisite",
        },
        {
          values: "uMi4wLTw==",
          chart: "crit-1.7.2.tgz",
          order: 2,
          releaseName: "crit",
        },
      ],
      containerRegistries: ["PLMN-PLMN/CONTAINER_REGISTRY-1"],
      cnfSwId: "vCUCNF24R2_1.7.2",
      cloudId: "PLMN-PLMN/CLOUD-1001",
      name: "VCU-CNF-1001",
      namespace: "lab574-1001",
      neRelId: "PLMN-PLMN/MRBTS-1001",
      secrets: [
        "crit.cnf1001secret1.secret",
        "crit.cnf1001secret2.secret",
        "crit.cnf1001secret3.secret",
      ],
    },
  },
  {
    moId: "PLMN-PLMN/CNF-1002",
    moClass: { id: "com.nokia.cnf.lcm:CNF", version: "CNF1.0" },
    planOperation: "CREATE",
    parameters: {
      deploymentProfile: [
        {
          values:
            "CiAgY2x1c3Rlci1YWFzLXNsYXllcjoKICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNl",
          chart: "crit-cluster-preparation-1.7.2.tgz",
          order: 0,
          releaseName: "crit-cluster-preparation",
        },
        {
          values:
            "CiAgY2gIGxjbWFhcy1zbGF5ZXI6CiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZQ==",
          chart: "crit-prerequisite-1.7.2.tgz",
          order: 1,
          releaseName: "crit-prerequisite",
        },
        {
          values:
            "IAogICAgIgICAgIGdlbmVyYXRlS2V5OiB0cnVlICAjIGlmIHByaXZhdGUga2V5cyBzaG91bGQgYmUgY3JlYXRlZCwgdGhpcyBjcmVhdGVzIGhlYXZ5IENQVSBsb2FkIG9uIGxjbWFhcw==",
          chart: "crit-1.7.2.tgz",
          order: 2,
          releaseName: "crit",
        },
      ],
      containerRegistries: ["PLMN-PLMN/CONTAINER_REGISTRY-1"],
      cnfSwId: "vCUCNF24R2_1.7.2",
      cloudId: "PLMN-PLMN/CLOUD-1002",
      name: "VCU-CNF-1002",
      namespace: "lab574-1002",
      neRelId: "PLMN-PLMN/MRBTS-1002",
      secrets: [
        "crit.cnf1002secret1.secret",
        "crit.cnf1002secret2.secret",
        "crit.cnf1002secret3.secret",
      ],
    },
  },
  {
    moId: "PLMN-PLMN/CNF-1003",
    moClass: { id: "com.nokia.cnf.lcm:CNF", version: "CNF1.0" },
    planOperation: "CREATE",
    parameters: {
      deploymentProfile: [
        {
          values:
            "CiAgY2x1c3Rlci1wcmVwYXvci1zbGF5ZXI6CiAgICBlbmFibGVkOiBmYWxzZQogICAgcGFyYWxsZWxpc206IDEKCiAgbGNtYWFzLXNsYXllcjoKICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNl",
          chart: "crit-cluster-preparation-1.7.2.tgz",
          order: 0,
          releaseName: "crit-cluster-preparation",
        },
        {
          values:
            "CiAgY2x1c3Rlci1wcmVwYXJhdGlHBhcmFsbGVsaXNtOiAxCgogIGxjbWFhcy1zbGF5ZXI6CiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZQ==",
          chart: "crit-prerequisite-1.7.2.tgz",
          order: 1,
          releaseName: "crit-prerequisite",
        },
        {
          values:
            "IAogICAgI2V5cyBzaG91bGQgYmUgY3JlYXRlZCwgdGhpcyBjcmVhdGVzIGhlYXZ5IENQVSBsb2FkIG9uIGxjbWFhcw==",
          chart: "crit-1.7.2.tgz",
          order: 2,
          releaseName: "crit",
        },
      ],
      containerRegistries: ["PLMN-PLMN/CONTAINER_REGISTRY-1"],
      cnfSwId: "vCUCNF24R2_1.7.2",
      cloudId: "PLMN-PLMN/CLOUD-1003",
      name: "VCU-CNF-1003",
      namespace: "lab574-1003",
      neRelId: "PLMN-PLMN/MRBTS-1003",
      secrets: [
        "crit.cnf1003secret1.secret",
        "crit.cnf1003secret2.secret",
        "crit.cnf1003secret3.secret",
      ],
    },
  },
];

const namespaceKeyValue = {};
let propertiesNameOfTest = [];
let labName = [];
let originalNumberLab = [];
let originalNameLab = [];
let unitNumber = 1000;
let concatenatedLabName = [];
let finalLabName = [];

const substringNumberOfLab = function (namespaceKeyValue) {
  // for (let element in namespaceKeyValue) {
  // mainLabName.push(namespaceKeyValue[element][0].substring(0, 7));
  // console.log(namespaceKeyValue[element][0].substring(0, 7));
  // console.log(mainLabName);
  // originalNumberLab.push(
  //   parseInt(namespaceKeyValue[element][0].substring(7))
  // );
  // console.log(parseInt(namespaceKeyValue[element][0].substring(7)));
  // }

  labName.push(Object.values(namespaceKeyValue));
  const flattedLabNameValue = labName.flat(Infinity);
  for (element of flattedLabNameValue) {
    originalNumberLab.push(parseInt(element.substring(7)));
    originalNameLab.push(element.substring(0, 7));
  }
  return [originalNameLab, originalNumberLab]; // create originalNameLab, originalNumberLab arrays
};

const namespaceValue = function (data) {
  for (let i = 0; i <= data.length; i++) {
    for (let element in data[i]) {
      data[i].parameters["namespace"];
      namespaceKeyValue[i] = data[i].parameters.namespace.split(" ");
      continue;
    }
  }
  return substringNumberOfLab(namespaceKeyValue); // call substringNumberOfLab
};
namespaceValue(data); // call namespaceValue

const subtractedNumberLab = originalNumberLab.map(
  (number) => number - unitNumber
); //subtractedNumberLab
const joinedLabName = function (originalNameLab, subtractednumberLab) {
  for (let i = 0; i < originalNameLab.length; i++) {
    for (let element of subtractednumberLab) {
      concatenatedLabName.push(
        originalNameLab[i] + "" + subtractednumberLab[i]
      ); // Create concatenatedLabName array
      continue;
    }
  }
};

function removeDuplicatesElements(array) {
  const removedRepeatedElement = [...new Set(array)];
  console.log(removedRepeatedElement);
  for (let element of removedRepeatedElement) {
    element !== "undefinedundefined"
      ? finalLabName.push(element)
      : finalLabName;
  }
  return finalLabName;
}
joinedLabName(originalNameLab, subtractedNumberLab);
removeDuplicatesElements(concatenatedLabName);

const replacednamespaceValue = function (data, finalLabName) {
  console.log(finalLabName);
  for (let i = 0; i < data.length; i++) {
    //   for (let element of finalLabName) {
    //     console.log(data[i].parameters.namespace);
    //     console.log(finalLabName[element]);
    //     data[i].parameters.namespace = element;
    //     continue;
    //   }
    data[i].parameters.namespace = finalLabName[i];
  }
};

replacednamespaceValue(data, finalLabName);
console.log(data);
console.time("eecution time⏱️")

