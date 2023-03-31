import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { useState } from "react";
// import resignByFamily from "./assets/images/resignation-family.png";

function App() {
  const [expandAll, setExpandAll] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function expandAllClick() {
    console.log("EXPANDING ALL");
    setExpandAll(!expandAll);
    setExpanded(!expanded);
  }

  function expandClick() {
    setExpanded(!expanded);
  }

  return (
    <>
      <Header expandAllClick={expandAllClick} />
      <Sidebar />
      <Content expandAll={expandAll} />
      <Content expandAll={expandAll} />
      <Content expandAll={expandAll} />
    </>
  );
}

export default App;
