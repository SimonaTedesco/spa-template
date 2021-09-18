import * as actionTypes from "./actionTypes";

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
        },
      ],
    },
  ],
};

const reducer = (
  state: SystemState = initialState,
  action: InstanceAction
): SystemState => {
  switch (action.type) {
    case actionTypes.ADD_INSTANCE:
      return {
        ...state,
        //operators.instance: state.articles.concat(action.instance),
      };
  }
  return state;
};

export default reducer;
