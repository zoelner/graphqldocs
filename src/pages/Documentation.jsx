import * as React from "react";
import { isType } from "graphql";
import TypeDoc from "../containers/documentation/TypeDoc";
import FieldDoc from "../components/Documentation/FieldDoc";
import BreadCrumbs from "../containers/documentation/BreadCrumbs";

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

    return (
      <React.Fragment>
        <BreadCrumbs />
        <div>{content}</div>
      </React.Fragment>
    );
  }
}
export default Documentation;
