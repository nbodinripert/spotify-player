import { useContext } from 'react';
import Card from '../../components/Card/Card';
import Carousel from '../../components/Carousel/Carousel';
import PlaylistContext from '../../contexts/PlaylistContext';
import OutletContainer from '../OutletContainer/OutletContainer';
import './HomeContainer.css';

const HomeContainer = () => {
  //#region [contexts]
  const { error, loading, playlists } = useContext(PlaylistContext);
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
    <OutletContainer loading={loading} error={error}>
      <Carousel title="Vos playlists" items={playlistsItems} />
    </OutletContainer>
  );
  //#endregion
};

export default HomeContainer;
