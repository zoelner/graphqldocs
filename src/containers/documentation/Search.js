import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../../store/duck/navigation";
import Search from "../../components/Search/Search";

const mapStateToProps = ({ schema, navigation }) => ({
  schema: schema.data,
  navigation
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
