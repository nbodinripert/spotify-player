import { useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import {
  FetchPlaylistsData,
  GET_PLAYLISTS_PREVIEWS,
  transformToPlaylistsPreviews,
} from '../../api/playlist.api';
import Playlist from '../../models/playlist.model';
import PlaylistPreview from '../../models/playlistPreview.model';
import Track from '../../models/track.model';

const useRoot = () => {
  //#region [states]
  const [playlistsPreviews, setPlaylistsPreviews] = useState<PlaylistPreview[]>(
    [],
  );
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>();
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(-1);
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

  //#region [handle methods]
  const play = (playlist: Playlist, index: number) => {
    if (!currentPlaylist || currentPlaylist.id !== playlist.id) {
      setCurrentPlaylist(playlist);
    }
    setCurrentTrackIndex(index);
  };
  //#endregion

  //#region [memos]
  const currentTrack = useMemo<Track | undefined>(() => {
    return currentPlaylist && currentTrackIndex >= 0
      ? currentPlaylist.tracks[currentTrackIndex].track
      : undefined;
  }, [currentPlaylist, currentTrackIndex]);
  //#endregion

  return {
    error,
    loading,
    playlistsPreviews,
    currentPlaylist,
    currentTrackIndex,
    currentTrack,
    play,
    setCurrentTrackIndex,
    setCurrentPlaylist,
  };
};

export default useRoot;
