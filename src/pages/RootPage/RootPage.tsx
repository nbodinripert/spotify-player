import { useQuery } from '@apollo/client';
import { FunctionComponent, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FetchPlaylistsData, GET_PLAYLISTS } from '../../api/playlist.api';
import Player from '../../components/Player/Player';
import Sidebar from '../../components/Sidebar/Sidebar';
import PlaylistContext from '../../contexts/PlaylistContext';
import Playlist from '../../models/playlist.model';
import { transformToPlaylists } from '../../utils/playlist.utils';
import './RootPage.css';

const RootPage: FunctionComponent = () => {
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
    <PlaylistContext.Provider value={{ loading, playlists }}>
      <div className="root-page">
        <div className="root-top-container">
          <Sidebar className="root-sidebar" />
          <Outlet />
        </div>
        <Player />
      </div>
    </PlaylistContext.Provider>
  );
  //#endregion
};

export default RootPage;
