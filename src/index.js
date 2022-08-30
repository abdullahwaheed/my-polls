import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import browserHistory from './history';

const store = createStore(reducer, middleware);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App history={browserHistory}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
