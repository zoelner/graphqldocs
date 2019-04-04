import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import Header from "../containers/Header";
import Content from "../components/Content";
import MainPage from "../pages/MainPage";
import Documentation from "../containers/Documentation";

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <>
        <Header />
        <Content>
          <Component {...matchProps} />
        </Content>
        <div className="Footer" />
      </>
    )}
  />
);

export default function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <DefaultLayout exact path="/" component={MainPage} />
        <DefaultLayout path="/documentation" component={Documentation} />
      </Router>
    </Provider>
  );
}
