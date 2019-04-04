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

import Argument from "./Argument";
import TypeLink from "../../containers/TypeLink";

import DefaultValue from "./DefaultValue";

export default class TypeDoc extends React.Component {
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
    const schema = this.props.schema;
    const type = this.props.type;

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
        <div className="doc-category">
          <div className="doc-category-title">{typesTitle}</div>
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
        <div className="doc-category">
          <div className="doc-category-title">{"fields"}</div>
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
          <div className="doc-category-title">{"values"}</div>
          {values
            .filter(value => !value.isDeprecated)
            .map(value => (
              <EnumValue key={value.name} value={value} />
            ))}
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
      <div>
        <div className="doc-type-description">
          {type.description || "No Description"}
        </div>
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

function Field({ type, field, onClickField }) {
  return (
    <div className="doc-category-item">
      <span
        className="field-name"
        onClick={event => onClickField(field, type, event)}
      >
        {field.name}
      </span>
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
        <div className="field-short-description">{field.description}</div>
      )}
      {field.deprecationReason && (
        <div className="doc-deprecation"> {field.deprecationReason}</div>
      )}
    </div>
  );
}

function EnumValue({ value }) {
  return (
    <div className="doc-category-item">
      <div className="enum-value">{value.name}</div>
      <div className="doc-value-description">{value.description}</div>
      {value.deprecationReason && (
        <div className="doc-deprecation">{value.deprecationReason}</div>
      )}
    </div>
  );
}
