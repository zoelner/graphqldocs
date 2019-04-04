/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { GraphQLList, GraphQLNonNull } from "graphql";

export default class TypeLink extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.type !== nextProps.type;
  }

  render() {
    return renderType(this.props.type, this.props.navigationSet);
  }
}

function renderType(type, onClick) {
  if (type instanceof GraphQLNonNull) {
    return (
      <span>
        {renderType(type.ofType, onClick)}
        {"!"}
      </span>
    );
  }
  if (type instanceof GraphQLList) {
    return (
      <span>
        {"["}
        {renderType(type.ofType, onClick)}
        {"]"}
      </span>
    );
  }
  return (
    <span className="type-name" onClick={event => onClick(type, event)}>
      {type.name}
    </span>
  );
}
