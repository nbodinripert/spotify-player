import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import SidebarNavLink from '../SidebarNavlink/SidebarNavLink';
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
              <SidebarNavLink
                to="/"
                icon={faHome}
                title="Accueil"
                classNameTitle="navlink-home-title"
                classNameIcon="navlink-home-icon"
              />
              <SidebarNavLink
                to="collection/likes"
                icon={faHeart}
                title="Titres likés"
                classNameTitle="navlink-small-title"
                classNameIcon="navlink-small-icon"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
  //#endregion
};

export default Sidebar;
