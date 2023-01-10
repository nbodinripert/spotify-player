import { useQuery } from '@apollo/client';
import { useState } from 'react';
import {
  FetchPlaylistsData,
  GET_PLAYLIST,
  transformToPlaylist,
} from '../../api/playlist.api';
import Playlist from '../../models/playlist.model';
import { addFavorite, removeFavorite } from '../../utils/storage.utils';

const useApiPlaylist = () => {
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
  //#endregion

  //#region [handle methods]
  const handleLikeClick = (trackIndex: number) => {
    if (!playlist) return;
    const { id, favorite } = playlist.tracks[trackIndex].track;
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite(playlist.tracks[trackIndex].track);
    }
    const playlistCopy = { ...playlist };
    playlistCopy.tracks[trackIndex].track.favorite = !favorite;
    setPlaylist(playlistCopy);
  };
  //#endregion

  return {
    playlist,
    loading,
    error,
    handleLikeClick,
  };
};

export default useApiPlaylist;
