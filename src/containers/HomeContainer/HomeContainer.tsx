import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';
import PlaylistContext from '../../contexts/PlaylistContext';
import './HomeContainer.css';

const HomeContainer = () => {
  //#region [contexts]
  const { loading, playlists } = useContext(PlaylistContext);
  //#endregion

  //#region [render]
  return (
    <div className="home-container">
      <p>Vos playlists</p>
      {loading ? (
        <Loader />
      ) : (
        playlists.map((playlist) => {
          return (
            <Link key={'home_playlist_' + playlist.id} to={playlist.url}>
              <PlaylistCard
                imgUrl={playlist.imgUrl}
                name={playlist.name}
                users={playlist.users}
              />
            </Link>
          );
        })
      )}
    </div>
  );
  //#endregion
};

export default HomeContainer;
