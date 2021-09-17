

const data = [{
    "client" : "pippo-2",
    "cluster" : "ams",
    "mode" : "ON",
    "time_zone" : "GMT",
    "max_agents" : 17,
    "instance_sha" :  "4633506b95a4e0757d76f80",
    "long_name" : "Pippo",
    "reseller" : "ZEBRONS",
    "contact_person" : "pippo",
    "contact_email" : "me@home",
    "billing_person" : "",
    "billing_email" : "",
    "expires" : "2016-11-11",
    "instance_state" : "UNK",
    "instance_state_up" : 0,
    "max_retention" : 37,
    "client_state" : "SOLD",
    "vhostname" : "my.booboo.com",
    "kMode" : "",
    "kNumber" : "",
    "kApikey" : ""
  }]


function Instance(prop: {n: string} ) {
    return (
        <div>
        <div className="uk-card uk-card-default uk-card-body">
            <b>{prop.n}</b> 
            <a href="" className="uk-icon-button" uk-icon="link"></a>
            <a href="" className="uk-icon-button" uk-icon="settings"></a>
            
            <br/>
            Agents: 37 
            Expires: 2021-03-23
            State: ON
            Sold: <span className="uk-label">Default</span>



            
        </div>
    </div>
    
                
    )
}

function Operator(prop: {name: string, cluster: string} ) {
    return (
        <li>
            <a className="uk-accordion-title" href="#">
                {prop.name} ({prop.cluster})</a>
            <div className="uk-accordion-content">

            <div className="uk-child-width-expand@s uk-text-center" uk-grid>
                <Instance n="gino" />
                <Instance n="pino" />

            </div>

            </div>
        </li>
    ) 
}



function Operators() {
    return (
        <div>
    <h1>
        Operators
        </h1>
        <ul uk-accordion="collapsible: false">
        <Operator name="ZEBRON" cluster="ams"/>
        <Operator name="CICCIA" cluster="za"/>
        

    </ul>
    </div>
        
    )
  }
  export default Operators
  