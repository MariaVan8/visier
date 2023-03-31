import "./Header.scss";
import share from "../../assets/logo/share.svg";
import download from "../../assets/logo/download_icon.svg";
import arrowdown from "../../assets/logo/expand_more.svg";
import options from "../../assets/logo/options.svg";
import lightingIcon from "../../assets/images/lighting.svg";
import plusIcon from "../../assets/images/Plus.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <h1 className="header__title">Who is leaving?</h1>
          <div className="header__icon">
            <img className="header__item" src={download} />
            <img className="header__item" src={share} />
            <img className="header__item" src={options} />
          </div>
        </div>
        <h4 className="header__subtitle">
          Identify resignations for different for talent groups.
        </h4>
        <div className="wrapper">
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
          <div className="wrapper__expand">
            <p className="wrapper__text">Expand All</p>
            <img src={arrowdown} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
