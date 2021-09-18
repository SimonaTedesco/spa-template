//  {
//    client: "pippo-2",
//    cluster: "ams",
//    mode: "ON",
//    time_zone: "GMT",
//    max_agents: 17,
//    instance_sha: "4633506b95a4e0757d76f80",
//    long_name: "Pippo",
//    reseller: "ZEBRONS",
//    contact_person: "pippo",
//    contact_email: "me@home",
//    billing_person: "",
//    billing_email: "",
//    expires: "2016-11-11",
//    instance_state: "UNK",
//    instance_state_up: 0,
//    max_retention: 37,
//    client_state: "SOLD",
//    vhostname: "my.booboo.com",
//    kMode: "",
//    kNumber: "",
//    kApikey: "",
//  },

interface IInstance {
  client: string;
  cluster: string;
  max_agents: integer;
}

type Operator = {
  token: string;
  name: string;
  instances: IInstance[];
};

type SystemState = {
  operators: Operator[];
};

type InstanceAction = {
  type: string;
  instance: IInstance;
};

type DispatchType = (args: ReplaceAction) => ReplaceAction;
