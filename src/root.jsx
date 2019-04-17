import React from "react";

import Header from "./containers/Header";
import MainPage from "./containers/Main";
import { connect } from "react-redux";
import { Creators } from "./store/duck/schema";
import { bindActionCreators } from "redux";
import Fade from "@material-ui/core/Fade";
import Loader from "./components/Loader";

class Root extends React.Component {
  componentDidMount() {
    if (this.props.schema.data) {
      setTimeout(() => this.props.schemaRequestSuccess(), 1000);
    }
  }

  render() {
    const data = (
      <div>
        <Header />
        <MainPage />
      </div>
    );

    if (this.props.schema.isLoading) return <Loader />;

    return (
      <React.Fragment>
        {this.props.schema.data && <Fade in>{data}</Fade>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ schema }) => ({ schema });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
