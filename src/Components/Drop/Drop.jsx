import React from "react";
import { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import "./Drop.scss";

function Drop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrop = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="box">
        <h1 className="box__title">What is the Title?</h1>
        <p className="box__item" onClick={toggleDrop}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eaque ipsam odio ratione ab molestiae tempore possimus illo placeat
          corrupti praesentium animi, minima in. Ut, molestias? Nihil
          exercitationem rem ipsum.
        </p>
      </div>
      <div className="card">
        <div className={`card__wrapper ${isOpen ? "card__wrapper--open" : ""}`}>
          <img className="card__image" src={logo} />
        </div>
      </div>
    </>
  );
}

export default Drop;
