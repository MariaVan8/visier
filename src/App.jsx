import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (

    <>
      
      <Header />
      <Sidebar />
      <Content>
        <h2 className="content__title">
          What is the resignation rate for different job families?
        </h2>
        <h3 className="content__description">
          Job family with highest resignation rate is Individual Contributor 2
          at 18.9%.
        </h3>
      </Content>
      <Content />
      <Content />
      <Content />
    </>
  );
}

export default App;
import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
// import resignByFamily from "./assets/images/resignation-family.png";

function App() {
  return (
    <>
      <Header />
      <Content />
      {/* <h2 className="content__title">
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
      <Content />
      <Content />
    </>
  );
}

export default App;
