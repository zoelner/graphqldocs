import { connect } from "react-redux";
import Main from "../pages/Main";
import { bindActionCreators } from "redux";
import { Creators as SchemaCreators } from "../store/duck/schema";

const getCurrentPage = navigation => navigation[navigation.length - 1];

const mapStateToProps = ({ schema, navigation }) => ({
  query: schema.data.getQueryType(),
  currentPage: getCurrentPage(navigation)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SchemaCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
