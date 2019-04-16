import React from "react";
import Typography from "@material-ui/core/Typography";

const EnumValue = ({ value }) => {
  return (
    <div>
      <Typography component="span" variant="subtitle2" color="primary" inline>
        {value.name}
      </Typography>
      <Typography color="textSecondary"> {value.description}</Typography>
      {value.deprecationReason && (
        <Typography color="error">{value.deprecationReason}</Typography>
      )}
    </div>
  );
};

export default EnumValue;
