import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { FetchPlaylistsData, GET_PLAYLISTS, transformToPlaylists } from '../../api/playlist.api';
import PlaylistContext from '../../contexts/PlaylistContext';
import Playlist from '../../models/playlist.model';
import './RootPage.css';

const RootPage = () => {
  //#region [states]
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  //#endregion

  //#region [queries]
  const { loading, error } = useQuery<FetchPlaylistsData>(GET_PLAYLISTS, {
    onCompleted: (response) => {
        const transformed = transformToPlaylists(response);
        setPlaylists(transformed);
    },
  });
  //#endregion

  //#region [render]
  return (
    <PlaylistContext.Provider value={{ playlists }}>
      RootPage
    </PlaylistContext.Provider>
  );
  //#endregion
};

export default RootPage;
