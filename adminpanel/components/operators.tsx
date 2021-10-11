import * as React from "react";

import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { NewInstance } from "../components/newinstance";
import { addArticle } from "../store/actionCreators";

function Instance(prop: { instance: IInstance }) {
  const i = prop.instance;
  return (
    <div className="Instance uk-flex-inline">
      <div className="uk-card uk-card-default uk-card-body cardOverwrite" uk-grid>
        <b>{i.client}</b>
        <ul class="uk-iconnav iconTopOverwrite">
          <li><a href="" uk-icon="icon: trash"></a></li>
        </ul>
        <br />
        <a href="" className="uk-icon-button iconOverwrite" uk-icon="link"></a>
        <a href="" className="uk-icon-button iconOverwrite" uk-icon="settings"></a>
        <a href="" className="uk-icon-button iconOverwrite" uk-icon="tag"></a>
        <br />
        Agents: {i.max_agents} <br />
        Expires: 2021-03-23 <br /> State:{" "}
        <span className="uk-label uk-label-success">ON</span><br />
        Sold:{" "}
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
        reseller: token,
      };
      dispatch(addArticle(newInst));
    },
    [dispatch]
  );

  return (
    <li>
      <a className="uk-accordion-title operatorInstance" href="#">
        {prop.op.name} ({prop.op.token})
      </a>
      <div className="uk-accordion-content">
        <div className="uk-child-width-expand@s uk-child-width-1-4@s uk-grid-match" uk-grid>
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
    <div className="Operators">
      <ul uk-accordion="collapsible: true">
        {ops.map((i: Operator) => (
          <Operator op={i} key={i.name} />
        ))}
      </ul>
    </div>
  );
}
export default Operators;
