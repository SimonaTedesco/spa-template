const data = [
  {
    client: "pippo-2",
    cluster: "ams",
    mode: "ON",
    time_zone: "GMT",
    max_agents: 17,
    instance_sha: "4633506b95a4e0757d76f80",
    long_name: "Pippo",
    reseller: "ZEBRONS",
    contact_person: "pippo",
    contact_email: "me@home",
    billing_person: "",
    billing_email: "",
    expires: "2016-11-11",
    instance_state: "UNK",
    instance_state_up: 0,
    max_retention: 37,
    client_state: "SOLD",
    vhostname: "my.booboo.com",
    kMode: "",
    kNumber: "",
    kApikey: "",
  },
];

function Instance(prop: { instance: IInstance }) {
  const i = prop.instance;
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body">
        <b>{i.client}</b>
        <a href="" className="uk-icon-button" uk-icon="link"></a>
        <a href="" className="uk-icon-button" uk-icon="settings"></a>
        <br />
        Agents: {i.max_agents} <br />
        Expires: 2021-03-23 State: ON Sold:{" "}
        <span className="uk-label">Default</span>
      </div>
    </div>
  );
}

function Operator(prop: { op: Operator }) {
  return (
    <li>
      <a className="uk-accordion-title" href="#">
        {prop.op.name} ({prop.op.token})
      </a>
      <div className="uk-accordion-content">
        <div className="uk-child-width-expand@s uk-text-center" uk-grid>
          {prop.op.instances.map((i: IInstance) => (
            <Instance instance={i} />
          ))}
        </div>
      </div>
    </li>
  );
}

function Operators(prop: { ops: any[] }) {
  const ops = prop.ops;
  return (
    <div>
      <h1>Operators {ops.length}</h1>
      <ul uk-accordion="collapsible: false">
        {ops.map((i: Operator) => (
          <Operator op={i} />
        ))}
      </ul>
    </div>
  );
}
export default Operators;
