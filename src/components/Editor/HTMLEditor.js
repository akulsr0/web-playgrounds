import * as React from "react";
import { AppContext } from "../../contexts/AppContext";
import CodeEditor from "./CodeEditor";

const HTMLEditor = () => {
  const { htmlCode, setHTMLCode } = React.useContext(AppContext);

  return (
    <div style={{ height: "100%" }}>
      <CodeEditor
        language="html"
        options={{}}
        value={htmlCode}
        setCode={setHTMLCode}
      />
    </div>
  );
};

export default HTMLEditor;
