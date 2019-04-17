import * as React from "react";
import { isType } from "graphql";
import TypeDoc from "../containers/documentation/TypeDoc";
import FieldDoc from "../components/Documentation/FieldDoc";
import BreadCrumbs from "../containers/documentation/BreadCrumbs";
import { DRAWER_WIDTH } from "../constants";
import withStyles from "@material-ui/core/styles/withStyles";
import Markdown from "../utils/Markdown";

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
  state = {
    readme: ""
  };

  componentDidMount() {
    this.loadReadme();
  }

  loadReadme() {
    try {
      fetch(require(`./docs/Main.md`))
        .then(response => response.text())
        .then(readme => this.setState({ readme }));
    } catch (e) {
      this.setState({ readme: undefined });
    }
  }

  render() {
    const { currentPage, classes, query } = this.props;
    const { readme } = this.state;
    let content;

    if (currentPage) {
      if (isType(currentPage.def)) {
        content = <TypeDoc type={currentPage.def} />;
      } else {
        content = <FieldDoc field={currentPage.def} />;
      }
    } else if (readme) {
      content = <Markdown>{readme}</Markdown>;
    } else {
      content = <TypeDoc type={query} />;
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
