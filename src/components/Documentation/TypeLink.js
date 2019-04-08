/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { GraphQLList, GraphQLNonNull } from "graphql";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  typeLink: {
    display: "inline-block",
    cursor: "pointer"
  }
});

class TypeLink extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.type !== nextProps.type;
  }

  renderType = (type, onClick) => {
    const { classes } = this.props;

    if (type instanceof GraphQLNonNull) {
      return (
        <span>
          {this.renderType(type.ofType, onClick)}
          {"!"}
        </span>
      );
    }
    if (type instanceof GraphQLList) {
      return (
        <span>
          {"["}
          {this.renderType(type.ofType, onClick)}
          {"]"}
        </span>
      );
    }
    return (
      <Typography
        component="span"
        className={classes.typeLink}
        onClick={event => onClick(type, event)}
        variant="subtitle2"
        color="secondary"
      >
        {type.name}
      </Typography>
    );
  };

  render() {
    return this.renderType(this.props.type, this.props.navigationSet);
  }
}

export default withStyles(styles)(TypeLink);
