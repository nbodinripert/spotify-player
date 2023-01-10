import { useQuery } from '@apollo/client';
import { useState } from 'react';
import {
  FetchPlaylistsData,
  GET_PLAYLISTS_PREVIEWS,
  transformToPlaylistsPreviews,
} from '../../api/playlist.api';
import PlaylistPreview from '../../models/playlistPreview.model';

const useRoot = () => {
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

  return { error, loading, playlistsPreviews };
};

export default useRoot;
