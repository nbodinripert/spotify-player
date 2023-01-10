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
      backgroundInfo="var(--favorites-info-gradient)"
      bgTableBody="var(--favorites-table-gradient)"
      bgTableHeader="var(--favorites-table-header-bg-color)"
    />
  );
  //#endregion
};

export default FavoritesContainer;
