/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import TypeLink from "../../containers/documentation/TypeLink";
import DefaultValue from "./DefaultValue";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  argument: {
    display: "block",
    marginLeft: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
      margin: 0,
      paddingLeft: ".4rem"
    }
  }
});

function Argument({ arg, showDefaultValue, classes }) {
  return (
    <span className={classes.argument}>
      <Typography component="span" variant="subtitle2" color="primary" inline>
        {`${arg.name}: `}
      </Typography>
      <TypeLink type={arg.type} />
      {showDefaultValue !== false && <DefaultValue field={arg} />}
    </span>
  );
}

export default withStyles(styles)(Argument);
