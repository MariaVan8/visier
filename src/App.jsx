import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import resignByFamily from "./assets/images/resignation-family.png";
import performanceImg from "./assets/images/performance.png";
import orgTenure from "./assets/images/organization-tenure.png";
import resignByFamilyTmt from "./assets/images/resignation-family.png";
import driverResign from "./assets/images/drivers-resign-rate.png";
import employeeRiskOfExit from "./assets/images/risk-exit-graph.png"
import resignation250 from "./assets/images/resignation-organization-graph.png"

const data = [
  {
    img: resignByFamilyTmt,
    title: "What is the resignation rate at different performance levels?",
    subTitle: `The job family with highest resignation rate is <b> Individual Contributor </b> at <b> 18.9%. </b>`

  },
  {
    img: performanceImg,
    title: "What is the resignation rate at different performance levels?",
    subTitle: "The performance level with highest resignation rate is Low Performer at 18.4%."

  },
  {
    img: orgTenure,
    title: "What is the tenure of people who resign?",
    subTitle: "The tenure with highest average resignation rate is <b> 1 to 2 years </b> at <b> 14.77%.<b>"
  },
  {
    img: driverResign,
    title: "What employee attributes lead to a higher resignation rate?",
    subTitle: "the biggest factors leading to an increased resignation rate are <b> Employee Span of Control Range  0 </b> and <b> Employee Job Family Individual contributor 2 <b>"
  },
  {
    img: employeeRiskOfExit,
    title: "Who has the highest predicted likelihood of resigning next?",
    subTitle: "The employee with highest risk of resigning is <b> Varinia Melissa Haley </b> at <b> 45.2%.<b> The role most at risk of resigning is <b> Plant Operator. </b>"
  },
  {
    img: resignation250,
    title: "How much talent is predicted to resign in next 12 months?",
    subTitle: " <b> 539 employees <b> are predicted to resign in the next 12 months, <b>39.15%</b> of these from within the <b> Operations organization.</b>"
  },


]

function App() {
  return (
    <>
         
      <Header />
      <Sidebar />
      <Content data={data[0]}/>
      <Content data={data[1]} />
      <Content data={data[2]} />
      <Content data={data[3]} />
      <Content data={data[4]} />
      <Content data={data[5]} />
      {/* {
        data.map((info) => {
          return 
          <Content 
            img={info.img}
            title={info.title}
            subTitle={info.subTitle}
          />
        })
      } */}

      {/* <h2 className="content__title">
          What is the resignation rate for different job families?
        </h2>
        <h3 className="content__description">
          Job family with the highest resignation rate is Individual Contributor
          2 at 18.9%.
        </h3> */}
      {/* </Content> */}
      {/* //  <Content> */}
        {/* <h2 className="content__title">
          What is the resignation rate at different performance levels?
        </h2>
        <h3 className="content__description">
          Performance level with the highest resignation rate is Low Performer
          at 18.4%.
        </h3> */}
      {/* </Content> 
       <Content /> 
      <Content />  */}
    </>
  );
}

export default App;
