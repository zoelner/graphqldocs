import React from "react";
import Argument from "./Argument";
import DefaultValue from "./DefaultValue";
import { Typography, withStyles } from "@material-ui/core";
import TypeLink from "../../containers/documentation/TypeLink";

const styles = theme => ({
  root: {
    marginTop: ".25em",
    marginBottom: ".25rem"
  }
});

const Field = props => {
  const { type, field, onClickField, classes } = props;
  return (
    <div className={classes.root}>
      <Typography
        component="span"
        className="field-name"
        variant="subtitle2"
        color="primary"
        inline
        onClick={event => onClickField(field, type, event)}
      >
        {`${field.name}`}
      </Typography>
      {field.args &&
        field.args.length > 0 && [
          "(",
          <span key="args">
            {field.args.map(arg => (
              <Argument key={arg.name} arg={arg} />
            ))}
          </span>,
          ")"
        ]}
      {": "}
      <TypeLink type={field.type} />
      <DefaultValue field={field} />
      {field.description && (
        <Typography color="textSecondary"> {field.description}</Typography>
      )}
      {field.deprecationReason && (
        <div className="doc-deprecation"> {field.deprecationReason}</div>
      )}
    </div>
  );
};

export default withStyles(styles)(Field);
