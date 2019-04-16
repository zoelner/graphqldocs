import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  breadcrumbs: {
    padding: `${theme.spacing.unit}px 0`
  }
});

const BreadCumbs = props => {
  const { classes, navigation, navigationRemove } = props;

  return (
    <Breadcrumbs
      aria-label="Breadcrumb"
      maxItems={3}
      itemsAfterCollapse={2}
      className={classes.breadcrumbs}
    >
      {navigation.map((nav, index) => (
        <Link
          color="inherit"
          key={nav.name}
          onClick={navigationRemove.bind(this, index)}
          href="#"
        >
          {nav.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default withStyles(styles)(BreadCumbs);
