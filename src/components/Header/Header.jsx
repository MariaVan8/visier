import "./Header.scss";
import lightingIcon from "../../assets/images/lighting.svg";
import plusIcon from "../../assets/images/Plus.svg";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Who is leaving?</h1>
      <h4 className="header__subtitle">
        Identify resignations for different for talent groups.
      </h4>
      <div className="header__tags">
        <a className="header__tag" href="#">
          Feb 2022
        </a>
        <a className="header__tag header__tag--color" href="#">
          <img src={plusIcon} alt="" /> Add a filter
        </a>
        <a className="header__tag" href="#">
          <img
            src={lightingIcon}
            className="header__lighting-icon"
            alt="icon"
          />
        </a>
        <a className="header__tag header__tag--dots" href="#">
          ...
        </a>
      </div>
    </div>
  );
}

export default Header;
