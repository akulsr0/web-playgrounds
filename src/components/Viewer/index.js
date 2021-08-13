import * as React from "react";
import { AppContext } from "../../contexts/AppContext";
import { getHTMLString } from "../../utils";

const Viewer = () => {
  const { htmlCode, cssCode, javascriptCode } = React.useContext(AppContext);

  const outputRef = React.useRef();

  React.useEffect(() => {
    const output = getHTMLString({
      html: htmlCode,
      css: cssCode,
      js: javascriptCode,
    });
    outputRef.current.srcdoc = output;
  }, [htmlCode, cssCode, javascriptCode]);

  return (
    <div style={{ height: "100%" }}>
      <iframe
        style={{ width: "100%", height: "100%" }}
        title="output"
        ref={outputRef}
      />
    </div>
  );
};

export default Viewer;
