import * as React from "react";

import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import type { NextPage } from "next";
import Link from "next/link";

import Operators from "../components/operators";
import { NewInstance } from "../components/newinstance";
import { addArticle } from "../store/actionCreators";

const Instances: NextPage = () => {
  const operators: Operator[] = useSelector(
    (state: SystemState) => state.operators,
    shallowEqual
  );


// <pre>{JSON.stringify(operators, null, 2)}</pre>


  return (
    <div>
      <h1>Operators</h1>
      
      <Operators ops={operators} />

      <Link href="/">
        <a>Home!</a>
      </Link>

    </div>
  );
};

export default Instances;
