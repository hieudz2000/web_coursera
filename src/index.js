import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import ChangeRouter from "./component/changeRouter";
import myReducers from "./redux/reducers";
const store = createStore(
  myReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChangeRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
