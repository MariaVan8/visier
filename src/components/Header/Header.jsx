import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Who is leaving?</h1>
      <h3 className="header__subtitle">
        Identify resignations for different for talent groups.
      </h3>
      <div className="header__tags">
        <a className="header__tag" href="#">
          Feb 2022
        </a>
        <a className="header__tag header__tag--color" href="#">
          Add a filter
        </a>
        <a className="header__tag" href="#">
          ..
        </a>
        <a className="header__tag" href="#">
          ...
        </a>
      </div>
    </div>
  );
}

export default Header;
