import { useContext } from 'react';
import Carousel from '../../components/Carousel';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import PlaylistContext from '../../contexts/PlaylistContext';
import './HomeContainer.css';

const HomeContainer = () => {
  //#region [contexts]
  const { loading, playlists } = useContext(PlaylistContext);
  //#endregion

  //#region [render]
  const playlistsItems = playlists.map((playlist) => (
    <Card
      key={'home_playlist_' + playlist.id}
      imgUrl={playlist.imgUrl}
      title={playlist.name}
      details={`Par ${playlist.users.join(', ')}`}
      linkTo={playlist.url}
    />
  ));

  return (
    <div className="home-container">
      <p>Vos playlists</p>
      {loading ? <Loader /> : <Carousel items={playlistsItems} />}
    </div>
  );
  //#endregion
};

export default HomeContainer;
