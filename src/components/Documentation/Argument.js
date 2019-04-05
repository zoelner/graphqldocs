/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import TypeLink from "../../containers/documentation/TypeLink";
import DefaultValue from "./DefaultValue";

export default function Argument({ arg, showDefaultValue }) {
  return (
    <span className="arg">
      <span className="arg-name">{arg.name}</span>
      {": "}
      <TypeLink type={arg.type} />
      {showDefaultValue !== false && <DefaultValue field={arg} />}
    </span>
  );
}
