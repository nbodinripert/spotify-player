import { FC } from 'react';
import OutletContainer from '../OutletContainer/OutletContainer';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';
import useApiPlaylist from './useApiPlaylist';

const ApiPlaylistContainer: FC = () => {
  //#region [logic]
  const { playlist, loading, error, handleLikeClick } = useApiPlaylist();
  //#endregion

  //#region [render]
  return (
    <OutletContainer loading={loading} error={error}>
      {playlist ? (
        <PlaylistContainer playlist={playlist} onLikeClick={handleLikeClick} />
      ) : null}
    </OutletContainer>
  );
  //#endregion
};

export default ApiPlaylistContainer;
