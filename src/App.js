import React from "react";
import "antd/dist/antd.css"; // do not remove this
import { Provider } from "react-redux";
import { Switch } from "react-router"; // react-router v4
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "./store";

import QueuePage from "./containers/queue-path";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="*" component={QueuePage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
