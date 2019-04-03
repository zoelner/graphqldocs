import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { DRAWER_WIDTH } from "../../constants";

const styles = theme => ({
  content: {
    paddingTop: 80,
    paddingLeft: 16,
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

const Content = ({ children, classes }) => (
  <div className={classes.root}>
    <div className={classes.content}>{children}</div>
  </div>
);

export default withStyles(styles)(Content);
