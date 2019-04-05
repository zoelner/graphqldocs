import { connect } from "react-redux";
import TypeLink from "../../components/Documentation/TypeLink";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../../store/duck/navigation";

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(TypeLink);
