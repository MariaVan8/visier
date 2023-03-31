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
      {/* <h2 className=" expandAll={expandAll}__title">
          What is the resignation rate for different job families?
        </h2>
        <h3 className="content__description">
          Job family with the highest resignation rate is Individual Contributor
          2 at 18.9%.
        </h3> */}
      {/* </Content> */}
      {/* <Content>
        <h2 className="content__title">
          What is the resignation rate at different performance levels?
        </h2>
        <h3 className="content__description">
          Performance level with the highest resignation rate is Low Performer
          at 18.4%.
        </h3>
      </Content> */}
      <Content expandAll={expandAll} />
      <Content expandAll={expandAll} />
    </>
  );
}

export default App;
