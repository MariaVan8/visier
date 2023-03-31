import "../Sidebar/Sidebar.scss";
import logo from "../../assets/images/circle.svg";
import homeIcon from "../../assets/images/Home-white.svg";
import searchIcon from "../../assets/images/Search-last.svg";
import bookIcon from "../../assets/images/Book-white.svg";

const Sidebar = () => {
  return (
    <>
      <aside className="sideNav">
        <nav className="sideNav-nav">
          <ul className="sideNav-nav__list">
            <li className="sideNav-nav__item">
              <a href="#">
                <img
                  className="sideNav-nav__item-image"
                  src={logo}
                  alt="logo"
                />
              </a>
            </li>
            <li className="sideNav-nav__item">
              <a href="#">
                <img
                  className="sideNav-nav__item-image"
                  src={homeIcon}
                  alt="home icon"
                />
              </a>
            </li>
            <li className="sideNav-nav__item">
              <a to="#">
                <img
                  className="sideNav-nav__item-image"
                  src={searchIcon}
                  alt="search icon"
                />
              </a>
            </li>
            <li className="sideNav-nav__item">
              <a href="#">
                <img
                  className="sideNav-nav__item-image"
                  src={bookIcon}
                  alt="book icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
