import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import PlaylistsPreviewsContext from '../../contexts/PlaylistsPreviewsContext';
import SidebarNavLink from '../SidebarNavlink/SidebarNavLink';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  //#region [contexts]
  const { loading, playlistsPreviews } = useContext(PlaylistsPreviewsContext);
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
                classNameTitle="navlink-top-title"
                classNameIcon="navlink-top-icon"
              />
            </li>
            <li>
              <SidebarNavLink
                to="collection/favorites"
                icon={faHeart}
                title="Titres favoris"
                classNameTitle="navlink-top-title"
                classNameIcon="navlink-top-icon"
              />
            </li>
          </ul>
        </nav>
        <hr />
        {loading ? (
          <span>...</span>
        ) : (
          <nav className="">
            <ul>
              {playlistsPreviews.map((playlist) => (
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
