import * as React from "react";
import * as ReactDOM from "react-dom";
import { FormattedMessage } from "react-intl";

(function main() {
  const root = document.getElementById("root");
  ReactDOM.render(
    <div>
      <FormattedMessage defaultMessage="BAR_MESSAGE without braces" />
      <FormattedMessage defaultMessage={"FOO_MESSAGE with braces"} />
    </div>,
    root
  );
})();
