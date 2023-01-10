import { FC } from 'react';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';
import useFavorites from './useFavorites';

const FavoritesContainer: FC = () => {
  //#region [logic]
  const { favoritesPlaylist, handleLikeClick } = useFavorites();
  //#endregion

  //#region [render]
  return (
    <PlaylistContainer
      playlist={favoritesPlaylist}
      onLikeClick={handleLikeClick}
    />
  );
  //#endregion
};

export default FavoritesContainer;
