import "../Sidebar/Sidebar/scss";
import { Link } from "react-router-dom";

const Sidebar = () => {


    return (

        <>

            <aside className="sideNav">
                <nav className="sideNav-nav">
                    <ul className="sideNav-nav__list">
                        <li className="sideNav-nav__item">
                            <Link to="/" > 
                                <img className="sideNav-nav__item-image" src="" alt=""/> 
                            </Link>
                        </li>
                        <li className="sideNav-nav__item">
                        <Link to="/" > 
                                <img className="sideNav-nav__item-image" src="" alt=""/> 
                            </Link>
                        </li>
                        <li className="sideNav-nav__item">
                        <Link to="/" > 
                                <img className="sideNav-nav__item-image" src="" alt=""/> 
                            </Link>
                        </li>
                        <li className="sideNav-nav__item">
                        <Link to="/" > 
                                <img className="sideNav-nav__item-image" src="" alt=""/> 
                        </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

        </>

    );


}

export default Sidebar;