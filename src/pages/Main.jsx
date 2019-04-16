import * as React from "react";
import { isType } from "graphql";
import TypeDoc from "../containers/documentation/TypeDoc";
import FieldDoc from "../components/Documentation/FieldDoc";
import BreadCrumbs from "../containers/documentation/BreadCrumbs";
import { DRAWER_WIDTH } from "../constants";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  content: {
    paddingTop: 80,
    paddingLeft: 40,
    paddingRight: 16,
    marginBottom: 100,
    [theme.breakpoints.up("sm")]: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`
    }
  },
  root: {
    display: "block"
  }
});

class Main extends React.Component {
  render() {
    const { currentPage, classes } = this.props;
    let content;

    if (currentPage) {
      if (isType(currentPage.def)) {
        content = <TypeDoc type={currentPage.def} />;
      } else {
        content = <FieldDoc field={currentPage.def} />;
      }
    } else {
      content = <span>Não há conteudo a ser exibido</span>;
    }

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <BreadCrumbs />
          <div>{content}</div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Main);
