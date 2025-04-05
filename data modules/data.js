
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
  
 
  
  export {data}; 