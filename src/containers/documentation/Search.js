import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../../store/duck/navigation";
import Search from "../../components/Search/Search";

const mapStateToProps = ({ schema, navigation }) => ({
  schema,
  withinType: navigation[navigation.length - 1].def,
  typeMap: schema.getTypeMap(),
  suggestions: Object.keys(schema.getTypeMap())
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);