import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./components/App";
import store from "./store";
import browserHistory from './history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App history={browserHistory} />
    </Router>
  </Provider>
);
