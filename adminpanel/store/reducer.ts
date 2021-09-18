import * as actionTypes from "./actionTypes";
import { createAction, createReducer } from "@reduxjs/toolkit";
import produce from "immer";

const initialState: SystemState = {
  operators: [
    {
      token: "tok",
      name: "nam",
      instances: [
        {
          client: "gino",
          cluster: "ams",
          max_agents: 23,
          reseller: "nam",
        },
      ],
    },
  ],
};

function findOperatorPosition(opName: string, operators: Operator[]) {
  var pos = 0;
  for (let op of operators) {
    if (op.name == opName) {
      return pos;
    }
    pos++;
  }
  return -1;
}

function findInstancePosition(instance: string, instances: IInstance[]) {
  var pos = 0;
  for (let op of instances) {
    if (op.client == instance) {
      return pos;
    }
    pos++;
  }
  return -1;
}

const reducer = (
  state: SystemState = initialState,
  action: InstanceAction
): SystemState => {
  console.log("Action", action);
  switch (action.type) {
    case actionTypes.ADD_INSTANCE:
      // If this instance exists, we edit it.
      // If it does not, we add it.
      const opPos = findOperatorPosition(
        action.instance.reseller,
        state.operators
      );
      if (opPos > -1) {
        const myInstances = state.operators[opPos].instances;
        const instPos = findInstancePosition(
          action.instance.client,
          myInstances
        );

        if (instPos == -1) {
          return produce(state, (s) => {
            s.operators[opPos].instances = myInstances.concat(action.instance);
          });
        } else {
          return produce(state, (s) => {
            s.operators[opPos].instances[instPos] = action.instance;
          });
        }
      }
      return state;
  }
  return state;
};

export default reducer;
