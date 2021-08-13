import * as React from "react";
import { AppContext } from "../../contexts/AppContext";
import CodeEditor from "./CodeEditor";

const CSSEditor = () => {
  const { cssCode, setCSSCode } = React.useContext(AppContext);

  return (
    <div style={{ height: "100%" }}>
      <CodeEditor
        language="css"
        options={{}}
        value={cssCode}
        setCode={setCSSCode}
      />
    </div>
  );
};

export default CSSEditor;
