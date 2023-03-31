import "../Sidebar/Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <aside className="sideNav">
        <nav className="sideNav-nav">
          <ul className="sideNav-nav__list">
            <li className="sideNav-nav__item">
              <a href="#">
                <img className="sideNav-nav__item-image" src="" alt="" />
              </a>
            </li>
            <li className="sideNav-nav__item">
              <a to="#">
                <img className="sideNav-nav__item-image" src="" alt="" />
              </a>
            </li>
            <li className="sideNav-nav__item">
              <a href="#">
                <img className="sideNav-nav__item-image" src="" alt="" />
              </a>
            </li>
            <li className="sideNav-nav__item">
              <a to="#">
                <img className="sideNav-nav__item-image" src="" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
