import * as React from "react";
import {
  HTML_DEFAULT_CODE,
  CSS_DEFAULT_CODE,
  JAVASCRIPT_DEFAULT_CODE,
} from "../constants";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [htmlCode, setHTMLCode] = React.useState(HTML_DEFAULT_CODE);
  const [cssCode, setCSSCode] = React.useState(CSS_DEFAULT_CODE);
  const [javascriptCode, setJavascriptCode] = React.useState(
    JAVASCRIPT_DEFAULT_CODE
  );

  return (
    <AppContext.Provider
      value={{
        htmlCode,
        setHTMLCode,
        cssCode,
        setCSSCode,
        javascriptCode,
        setJavascriptCode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
