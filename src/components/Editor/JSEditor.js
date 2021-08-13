import * as React from "react";
import { AppContext } from "../../contexts/AppContext";
import CodeEditor from "./CodeEditor";

const JSEditor = () => {
  const { javascriptCode, setJavascriptCode } = React.useContext(AppContext);

  return (
    <div style={{ height: "100%" }}>
      <CodeEditor
        language="javascript"
        options={{}}
        value={javascriptCode}
        setCode={setJavascriptCode}
      />
    </div>
  );
};

export default JSEditor;
