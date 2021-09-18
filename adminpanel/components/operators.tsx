import * as React from "react";

import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { NewInstance } from "../components/newinstance";
import { addArticle } from "../store/actionCreators";

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
  const dispatch: Dispatch<any> = useDispatch();
  const token = prop.op.name;

  const saveInstance = React.useCallback(
    (article: IInstance) => {
      const newInst = {
          ...article,
          reseller: token
      }  
      dispatch(addArticle(newInst));
    },
    [dispatch]
  );

  return (
    <li>
      <a className="uk-accordion-title" href="#">
        {prop.op.name} ({prop.op.token})
      </a>
      <div className="uk-accordion-content">
        <div className="uk-child-width-expand@s uk-text-center uk-grid">
          {prop.op.instances.map((i: IInstance) => (
            <Instance instance={i} key={i.client} />
          ))}
        </div>
        <NewInstance saveInstance={saveInstance} />
      </div>
    </li>
  );
}

function Operators(prop: { ops: any[] }) {
  const ops = prop.ops;
  return (
    <div>
      <ul uk-accordion="collapsible: false">
        {ops.map((i: Operator) => (
          <Operator op={i} key={i.name} />
        ))}
      </ul>
    </div>
  );
}
export default Operators;
