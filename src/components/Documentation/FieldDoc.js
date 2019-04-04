/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";

import Argument from "./Argument";
import TypeLink from "../../containers/TypeLink";

export default class FieldDoc extends React.Component {
  static propTypes = {
    field: PropTypes.object
  };

  render() {
    const field = this.props.field;

    let argsDef;
    if (field.args && field.args.length > 0) {
      argsDef = (
        <div className="doc-category">
          <div className="doc-category-title">{"arguments"}</div>
          {field.args.map(arg => (
            <div key={arg.name} className="doc-category-item">
              <div>
                <Argument arg={arg} onClickType={this.props.onClickType} />
              </div>
              <div className="doc-value-description"> {arg.description}</div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div>
        <div className="doc-type-description">
          {field.description || "No Description"}
        </div>
        {field.deprecationReason && (
          <div className="doc-deprecation">{field.deprecationReason}</div>
        )}
        <div className="doc-category">
          <div className="doc-category-title">{"type"}</div>
          <TypeLink type={field.type} />
        </div>
        {argsDef}
      </div>
    );
  }
}
