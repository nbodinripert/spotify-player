import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import PlaylistContext from '../../contexts/PlaylistContext';
import SidebarNavLink from '../SidebarNavlink/SidebarNavLink';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ className }) => {
  //#region [contexts]
  const { loading, playlists } = useContext(PlaylistContext);
  //#endregion

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
        <nav className="sidebar-nav-top">
          <ul>
            <li>
              <SidebarNavLink
                to="/"
                icon={faHome}
                title="Accueil"
                classNameTitle="navlink-home-title"
                classNameIcon="navlink-home-icon"
              />
            </li>
            <li>
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
        <hr />
        {loading ? (
          <span>...</span>
        ) : (
          <nav className=''>
            <ul>
              {playlists.map((playlist) => (
                <li key={'navlink_playlist_' + playlist.id}>
                  <SidebarNavLink
                    to={playlist.url}
                    title={playlist.name}
                    classNameTitle="navlink-playlist-title"
                    classNameIcon="navlink-playlist-icon"
                  />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
  //#endregion
};

export default Sidebar;
