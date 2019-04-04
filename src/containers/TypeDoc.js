import { connect } from "react-redux";
import TypeDoc from "../components/Documentation/TypeDoc";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../store/duck/navigation";

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(TypeDoc);
