import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Content>
        <h2 className="content__title">
          What is the resignation rate for different job families?
        </h2>
      </Content>
      <Content />
      <Content />
      <Content />
    </>
  );
}

export default App;
