import { connect } from "react-redux";
import BreadCrumbs from "../../components/Documentation/BreadCrumbs";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../../store/duck/navigation";

const mapStateToProps = ({ navigation }) => ({
  navigation
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreadCrumbs);
