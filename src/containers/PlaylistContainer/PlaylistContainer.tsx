import { useQuery } from '@apollo/client';
import { FunctionComponent, useEffect, useState } from 'react';
import { FetchPlaylistsData, GET_PLAYLIST } from '../../api/playlist.api';
import Playlist from '../../models/playlist.model';
import { transformToPlaylist } from '../../utils/playlist.utils';
import OutletContainer from '../OutletContainer/OutletContainer';
import './PlaylistContainer.css';

const PlaylistContainer: FunctionComponent = () => {
  //#region [states]
  const [playlist, setPlaylist] = useState<Playlist>();
  //#endregion

  //#region [queries]
  const { loading, error } = useQuery<FetchPlaylistsData>(GET_PLAYLIST, {
    onCompleted: (response) => {
      const transformed = transformToPlaylist(response);
      setPlaylist(transformed);
    },
  });

  //#region effects
  useEffect(() => {}, []);
  //#endregion

  //#region [render]
  return (
    <OutletContainer loading={loading} error={error}>
      {playlist ? (
        <div className='playlist-container'>
        <div className="playlist-sticky-header">{playlist.name}</div>
        </div>
      ) : null}
    </OutletContainer>
  );
  //#endregion
};

export default PlaylistContainer;
