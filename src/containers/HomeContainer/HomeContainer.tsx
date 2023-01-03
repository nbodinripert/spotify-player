import { useContext } from 'react';
import Carousel from '../../components/Carousel';
import Loader from '../../components/Loader/Loader';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';
import PlaylistContext from '../../contexts/PlaylistContext';
import './HomeContainer.css';

const HomeContainer = () => {
  //#region [contexts]
  const { loading, playlists } = useContext(PlaylistContext);
  //#endregion

  const items = playlists.map((playlist) => (
    <PlaylistCard
      key={'home_playlist_' + playlist.id}
      imgUrl={playlist.imgUrl}
      name={playlist.name}
      users={playlist.users}
      linkTo={playlist.url}
    />
  ));

  //#region [render]
  return (
    <div className="home-container">
      <p>Vos playlists</p>
      {loading ? <Loader /> : <Carousel items={items} />}
    </div>
  );
  //#endregion
};

export default HomeContainer;
