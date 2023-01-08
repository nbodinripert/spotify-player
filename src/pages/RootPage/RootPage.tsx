import { useQuery } from '@apollo/client';
import { FunctionComponent, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  FetchPlaylistsData,
  GET_PLAYLISTS_PREVIEWS,
  transformToPlaylistsPreviews,
} from '../../api/playlist.api';
import Player from '../../components/Player/Player';
import Sidebar from '../../components/Sidebar/Sidebar';
import PlaylistsPreviewsContext from '../../contexts/PlaylistsPreviewsContext';
import PlaylistPreview from '../../models/playlistPreview.model';
import './RootPage.css';

const RootPage: FunctionComponent = () => {
  //#region [states]
  const [playlistsPreviews, setPlaylistsPreviews] = useState<PlaylistPreview[]>(
    [],
  );
  //#endregion

  //#region [queries]
  const { loading, error } = useQuery<FetchPlaylistsData>(
    GET_PLAYLISTS_PREVIEWS,
    {
      onCompleted: (response) => {
        const transformed = transformToPlaylistsPreviews(response);
        setPlaylistsPreviews(transformed);
      },
    },
  );
  //#endregion

  //#region [render]
  return (
    <PlaylistsPreviewsContext.Provider
      value={{ error, loading, playlistsPreviews }}
    >
      <div className="root-page">
        <div className="root-top-container">
          <Sidebar className="root-sidebar" />
          <Outlet />
        </div>
        <Player />
      </div>
    </PlaylistsPreviewsContext.Provider>
  );
  //#endregion
};

export default RootPage;
