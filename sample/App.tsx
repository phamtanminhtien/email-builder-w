import React from "react";
import ReactDOM from "react-dom";
import EmailBuilderW from "../src/EmailBuilderW";
import { useDocument } from "../src/documents/editor/EditorContext";

const App = () => {
  return (
    <EmailBuilderW
      config={{
        tools: { editor: true, html: false, json: false, preview: true },
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
