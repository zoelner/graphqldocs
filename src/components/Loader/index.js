import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GraphQLLogo from "../../assets/GraphQL_Logo.svg";
import ReactLoading from "react-loading";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  img: {
    width: "5rem",
    height: "5rem",
    paddingRight: theme.spacing.unit * 2
  },
  title: {
    fontSize: "2rem",
    fontFamily: "'Rubik', sans-serif;",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing.unit * 2
    }
  }
});

function Loader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img alt="Logo GraphQL" src={GraphQLLogo} className={classes.img} />
        <h1 className={classes.title}>GraphQL Documentation </h1>
      </div>
      <ReactLoading type="bars" color={grey[400]} />
    </div>
  );
}

export default withStyles(styles)(Loader);
