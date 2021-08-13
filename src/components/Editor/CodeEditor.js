import * as React from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ language, options, value, setCode }) => {
  return (
    <MonacoEditor
      height="100%"
      language={language}
      theme="vs-light"
      options={{ fontSize: 16, ...options }}
      value={value}
      onChange={(val) => setCode(val)}
    />
  );
};

export default CodeEditor;
