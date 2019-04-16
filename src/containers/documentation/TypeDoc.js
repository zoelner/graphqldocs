import { connect } from "react-redux";
import TypeDoc from "../../components/Documentation/TypeDoc";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../../store/duck/navigation";

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

const mapStateToProps = ({ schema }) => ({ schema: schema.data });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeDoc);
