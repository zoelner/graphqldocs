/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Argument from "./Argument";
import TypeLink from "../../containers/documentation/TypeLink";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography, Divider } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  },
  category: {
    padding: `${theme.spacing.unit * 1.5}px 0`
  },

  categoryItem: {
    "& span:first-child": {
      margin: 0,
      padding: 0
    }
  }
});

class FieldDoc extends React.Component {
  render() {
    const { field, classes } = this.props;

    let argsDef;
    if (field.args && field.args.length > 0) {
      argsDef = (
        <div className={classes.category}>
          <Typography variant="h6" gutterBottom>
            {"Arguments"}
          </Typography>
          <Divider />
          <div>
            {field.args.map(arg => (
              <div key={arg.name} className={classes.categoryItem}>
                <Argument arg={arg} />
                <Typography color="textSecondary">
                  {" "}
                  {arg.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Typography variant="body1" gutterBottom>
            {field.description || "No Description"}
          </Typography>
        </div>
        {field.deprecationReason && (
          <div className="doc-deprecation">{field.deprecationReason}</div>
        )}
        <div className={classes.category}>
          <Typography variant="h6" gutterBottom>
            {"Type"}
          </Typography>
          <Divider />
          <TypeLink type={field.type} />
        </div>
        {argsDef}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FieldDoc);
