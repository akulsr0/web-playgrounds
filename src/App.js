import * as React from "react";
import SplitPane from "react-split-pane";
import "./styles/index.css";

import Editor from "./components/Editor";
import Viewer from "./components/Viewer";

const MIN_INNER_WIDTH = 968;

const App = () => {
  const width = window.innerWidth;

  return (
    <SplitPane
      split={width > MIN_INNER_WIDTH ? "vertical" : "horizontal"}
      defaultSize="50%"
      allowResize={false}
    >
      <Editor />
      <Viewer />
    </SplitPane>
  );
};

export default App;
