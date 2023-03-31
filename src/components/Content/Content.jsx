import "./Content.scss";
import resignByFamily from "../../assets/images/resignation-family.png";
import { useState } from "react";

function Content({ children }) {
  const [expanded, setExpanded] = useState(false);
  function expandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className="content">
      <div className="content__wrapper">
        {children}
        <div className="content__expand">
          <button onClick={() => expandClick()} className="content__btn">
            Expand
          </button>
          <div
            className={
              "content__graph-wrapper" +
              (expanded ? " content__graph-wrapper--expanded" : "")
            }
          >
            <img
              className="content__graph-image"
              src={resignByFamily}
              alt="Resignation rate by job family graph"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
