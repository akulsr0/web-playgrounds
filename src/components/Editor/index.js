import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { EditorStyles as Styles } from "../../styles";

import HTMLEditor from "./HTMLEditor";
import CSSEditor from "./CSSEditor";
import JSEditor from "./JSEditor";

const Editor = () => {
  return (
    <div style={Styles.wrapper}>
      <Tabs style={Styles.tabs}>
        <TabList style={Styles.tablist}>
          <Tab style={Styles.tab}>HTML</Tab>
          <Tab style={Styles.tab}>CSS</Tab>
          <Tab style={Styles.tab}>Javascript</Tab>
        </TabList>

        <TabPanel style={Styles.tabPanel}>
          <HTMLEditor />
        </TabPanel>
        <TabPanel style={Styles.tabPanel}>
          <CSSEditor />
        </TabPanel>
        <TabPanel style={Styles.tabPanel}>
          <JSEditor />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Editor;
