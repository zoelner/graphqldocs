/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  GraphQLEnumType
} from "graphql";

import TypeLink from "../../containers/documentation/TypeLink";
import Field from "./Field";
import EnumValue from "./EnumValue";

import { Typography, Divider, withStyles } from "@material-ui/core";

const style = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  },
  category: {
    padding: `${theme.spacing.unit * 1.5}px 0`
  },
  title: {
    textTransform: "capitalize"
  }
});

class TypeDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDeprecated: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.type !== nextProps.type ||
      this.props.schema !== nextProps.schema ||
      this.state.showDeprecated !== nextState.showDeprecated
    );
  }

  render() {
    const { schema, type, classes } = this.props;

    let typesTitle;
    let types;
    if (type instanceof GraphQLUnionType) {
      typesTitle = "possible types";
      types = schema.getPossibleTypes(type);
    } else if (type instanceof GraphQLInterfaceType) {
      typesTitle = "implementations";
      types = schema.getPossibleTypes(type);
    } else if (type instanceof GraphQLObjectType) {
      typesTitle = "implements";
      types = type.getInterfaces();
    }

    let typesDef;
    if (types && types.length > 0) {
      typesDef = (
        <div className={classes.category}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {typesTitle}
          </Typography>
          {types.map(subtype => (
            <div key={subtype.name} className="doc-category-item">
              <TypeLink type={subtype} />
            </div>
          ))}
        </div>
      );
    }

    // InputObject and Object
    let fieldsDef;
    let deprecatedFieldsDef;
    if (type.getFields) {
      const fieldMap = type.getFields();
      const fields = Object.keys(fieldMap).map(name => fieldMap[name]);
      fieldsDef = (
        <div className={classes.category}>
          <Typography variant="h6" gutterBottom>
            {"Fields"}
          </Typography>
          <Divider />
          <div>
            {fields
              .filter(field => !field.isDeprecated)
              .map(field => (
                <Field
                  key={field.name}
                  type={type}
                  field={field}
                  onClickField={this.props.navigationSet}
                />
              ))}
          </div>
        </div>
      );

      const deprecatedFields = fields.filter(field => field.isDeprecated);
      if (deprecatedFields.length > 0) {
        deprecatedFieldsDef = (
          <div className="doc-category">
            <div className="doc-category-title">{"deprecated fields"}</div>
            {!this.state.showDeprecated ? (
              <button className="show-btn" onClick={this.handleShowDeprecated}>
                {"Show deprecated fields..."}
              </button>
            ) : (
              deprecatedFields.map(field => (
                <Field
                  key={field.name}
                  type={type}
                  field={field}
                  onClickField={this.props.navigationSet}
                />
              ))
            )}
          </div>
        );
      }
    }

    let valuesDef;
    let deprecatedValuesDef;
    if (type instanceof GraphQLEnumType) {
      const values = type.getValues();
      valuesDef = (
        <div className="doc-category">
          <Typography variant="h6" gutterBottom>
            {"Values"}
          </Typography>
          <Divider />
          <div>
            {values
              .filter(value => !value.isDeprecated)
              .map(value => (
                <EnumValue key={value.name} value={value} />
              ))}
          </div>
        </div>
      );

      const deprecatedValues = values.filter(value => value.isDeprecated);
      if (deprecatedValues.length > 0) {
        deprecatedValuesDef = (
          <div className="doc-category">
            <div className="doc-category-title">{"deprecated values"}</div>
            {!this.state.showDeprecated ? (
              <button className="show-btn" onClick={this.handleShowDeprecated}>
                {"Show deprecated values..."}
              </button>
            ) : (
              deprecatedValues.map(value => (
                <EnumValue key={value.name} value={value} />
              ))
            )}
          </div>
        );
      }
    }

    return (
      <div className={classes.root}>
        <Typography variant="body1" gutterBottom>
          {type.description || "No Description"}
        </Typography>
        {type instanceof GraphQLObjectType && typesDef}
        {fieldsDef}
        {deprecatedFieldsDef}
        {valuesDef}
        {deprecatedValuesDef}
        {!(type instanceof GraphQLObjectType) && typesDef}
      </div>
    );
  }

  handleShowDeprecated = () => this.setState({ showDeprecated: true });
}

export default withStyles(style)(TypeDoc);
