import * as React from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import type { NextPage } from "next";

import Operators from "../components/operators";
import { NewInstance } from "../components/newinstance";
import { addArticle } from "../store/actionCreators";

const Instances: NextPage = () => {
  const operators: Operator[] = useSelector(
    (state: SystemState) => state.operators,
    shallowEqual
  );

  return (
    <div>
      <h1>Instances go here</h1>
      <hr />

      <pre>{JSON.stringify(operators, null, 2)}</pre>

      <Operators ops={operators} />

      <a href="#">Some Link</a>
    </div>
  );
};

export default Instances;
