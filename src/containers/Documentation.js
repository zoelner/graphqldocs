import { connect } from "react-redux";
import Documentation from "../pages/Documentation";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../store/duck/navigation";

const getCurrentPage = navigation => navigation[navigation.length - 1];

const mapStateToProps = ({ navigation }) => ({
  currentPage: getCurrentPage(navigation)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Documentation);
