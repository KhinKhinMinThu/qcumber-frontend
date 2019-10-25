import React from "react";
// import "antd/dist/antd.css";

// change my-theme.less under antd/dist and
// run lessc --js my-theme.less  ../../../src/customized-antd.css in terminal
import "./customized-antd.css";
import { Provider } from "react-redux";
import { Switch } from "react-router"; // react-router v4
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "./store";

import PrivatePath from "./containers/private-path";
import PublicPath from "./containers/public-path";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <PrivatePath exact path="/qc/:pathname" />
            <PublicPath exact path="/:pathname" />
            <PublicPath path="*" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
