import React from "react";
import Argument from "./Argument";
import DefaultValue from "./DefaultValue";
import TypeLink from "../../containers/documentation/TypeLink";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    marginTop: ".25em",
    marginBottom: ".25rem"
  },
  fieldName: {
    cursor: "pointer"
  }
});

const Field = props => {
  const { type, field, onClickField, classes } = props;
  return (
    <div className={classes.root}>
      <Typography
        component="span"
        className={classes.fieldName}
        variant="subtitle2"
        color="primary"
        inline
        onClick={event => onClickField(field, type, event)}
      >
        {`${field.name}`}
      </Typography>
      {field.args &&
        field.args.length > 0 && [
          " (",
          <span key="args" className={classes.argcontainer}>
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
        <Typography color="error">{field.deprecationReason}</Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(Field);
