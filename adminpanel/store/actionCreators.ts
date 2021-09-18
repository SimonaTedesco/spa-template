import * as actionTypes from "./actionTypes";

export function addArticle(article: IInstance) {
  const action: InstanceAction = {
    type: actionTypes.ADD_INSTANCE,
    instance: article,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: InstanceAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
