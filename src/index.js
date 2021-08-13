import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// AppContext
import { AppContextProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
