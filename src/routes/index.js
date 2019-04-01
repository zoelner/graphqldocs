import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Route
          exact
          path="/"
          render={function() {
            return <h1> Initial Page </h1>;
          }}
        />
      </Router>
    </Provider>
  );
}
