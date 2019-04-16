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
    alignItems: "center"
  },
  img: {
    paddingRight: theme.spacing.unit * 2
  },
  title: {
    fontFamily: "'Rubik', sans-serif;"
  }
});

function Loader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img
          height={96}
          width={96}
          alt="Logo GraphQL"
          src={GraphQLLogo}
          className={classes.img}
        />
        <h1 className={classes.title}>GraphQL Documentation </h1>
      </div>
      <ReactLoading type="bars" color={grey[400]} />
    </div>
  );
}

export default withStyles(styles)(Loader);
