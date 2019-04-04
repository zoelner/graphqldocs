import * as React from "react";
import { isType } from "graphql";
import TypeDoc from "../containers/TypeDoc";
import FieldDoc from "../components/Documentation/FieldDoc";

class Documentation extends React.Component {
  render() {
    const { currentPage } = this.props;
    let content;

    if (currentPage) {
      if (isType(currentPage.def)) {
        content = <TypeDoc type={currentPage.def} />;
      } else {
        content = <FieldDoc field={currentPage.def} />;
      }
    } else {
      content = <span>Não há conteudo a ser exibido</span>;
    }

    return <div>{content}</div>;
  }
}
export default Documentation;
