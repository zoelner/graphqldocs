import React from "react";
import { Typography } from "@material-ui/core";

const EnumValue = ({ value }) => {
  return (
    <div className="doc-category-item">
      <div className="enum-value">{value.name}</div>
      <Typography color="textSecondary"> {value.description}</Typography>
      {value.deprecationReason && (
        <div className="doc-deprecation">{value.deprecationReason}</div>
      )}
    </div>
  );
};

export default EnumValue;
