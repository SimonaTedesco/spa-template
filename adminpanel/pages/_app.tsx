import type { AppProps } from "next/app";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import UIKit from "../components/uikit";
import reducer from "../store/reducer";

// Global scss
import "../styles/master.scss";

const store: Store<SystemState, InstanceAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

//const rootElement = document.getElementById("root")
//render(
//    <App />
//  rootElement
//)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UIKit>
        <Component {...pageProps} />
      </UIKit>
    </Provider>
  );
}
export default MyApp;
