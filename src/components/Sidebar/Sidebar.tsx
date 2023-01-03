import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ className }) => {
  //#region [render]
  return (
    <div className={className}>
      <div className="sidebar">
        <Link to="/">
          <p className="sidebar-logo">
            <img src={logo} alt="logo" />
            <span>Spotigun</span>
          </p>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <FontAwesomeIcon icon={faHome} className="sidebar-link-icon" />
                <span>Accueil</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
  //#endregion
};

export default Sidebar;
