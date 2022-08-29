import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);
const browserHistory = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App history={browserHistory}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
