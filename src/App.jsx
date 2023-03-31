import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <>
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
