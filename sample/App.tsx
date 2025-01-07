import React from "react";
import ReactDOM from "react-dom";
import EmailBuilderW from "../src/EmailBuilderW";

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
