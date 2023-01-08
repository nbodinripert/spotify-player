import { useContext } from 'react';
import Card from '../../components/Card/Card';
import Carousel from '../../components/Carousel/Carousel';
import PlaylistsPreviewsContext from '../../contexts/PlaylistsPreviewsContext';
import OutletContainer from '../OutletContainer/OutletContainer';
import './HomeContainer.css';

const HomeContainer = () => {
  //#region [contexts]
  const { error, loading, playlistsPreviews } = useContext(
    PlaylistsPreviewsContext,
  );
  //#endregion

  //#region [render]
  const playlistsItems = playlistsPreviews.map((playlist) => (
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
      <div className="home-container">
        <Carousel title="Vos playlists" items={playlistsItems} />
      </div>
    </OutletContainer>
  );
  //#endregion
};

export default HomeContainer;
