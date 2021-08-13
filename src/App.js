import * as React from "react";
import SplitPane from "react-split-pane";
import "./styles/index.css";

import Editor from "./components/Editor";
import Viewer from "./components/Viewer";

const App = () => {
  return (
    <SplitPane split="vertical" defaultSize="50%" allowResize={false}>
      <Editor />
      <Viewer />
    </SplitPane>
  );
};

export default App;
