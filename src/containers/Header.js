import { connect } from "react-redux";
import Header from "../components/Header/Header";

const mapStateToProps = ({ schema }) => ({
  query: schema.getQueryType(),
  mutation: schema.getMutationType && schema.getMutationType(),
  subscriptionType: schema.getSubscriptionType && schema.getSubscriptionType()
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
