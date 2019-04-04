import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { bindActionCreators } from "redux";
import { Creators as NavigationCreators } from "../store/duck/navigation";

const getTitle = navigation =>
  navigation.length ? navigation[navigation.length - 1].name : undefined;

const mapStateToProps = ({ schema, navigation }) => ({
  query: schema.getQueryType(),
  mutation: schema.getMutationType && schema.getMutationType(),
  subscriptionType: schema.getSubscriptionType && schema.getSubscriptionType(),
  title: getTitle(navigation)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(NavigationCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
