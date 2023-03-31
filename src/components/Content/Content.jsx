import "./Content.scss";
import resignByFamily from "../../assets/images/resignation-family.png";
import { useState, useEffect } from "react";

function Content({ data, expandAll }) {
  const [expanded, setExpanded] = useState(false);
  function expandClick() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    setExpanded(expandAll);
  }, [expandAll]);

  return (
    <div className="content">
      <div
        onClick={expandClick}
        className={`content__wrapper ${
          expanded ? "content_graph-wrapper--expanded" : ""
        }`}
      >
        {/* {children} */}
        <h2 className="content__title">
          {/* What is the resignation rate for different job families? */}
          {data.title}
        </h2>
        {/* <h3 className="content__description">
          Job family with the highest resignation rate is Individual Contributor
          2 at 18.9%.
        </h3> */}
        <p dangerouslySetInnerHTML={{ __html: data.subTitle }} />

        <div className="content__expand">
          <button onClick={() => expandClick()} className="content__btn">
            Click for more details
          </button>
          <div
            className={
              "content__graph-wrapper" +
              (expanded ? " content__graph-wrapper--expanded" : "")
            }
          >
            <img
              className="content__graph-image"
              src={data.img}
              alt="Resignation rate by job family graph"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
