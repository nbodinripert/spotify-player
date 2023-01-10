import { useQuery } from '@apollo/client';
import { useRef, useState } from 'react';
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
  const [currentTrack, setCurrentTrack] = useState<Track>();
  //#endregion

  //#region refs
  const currentPlaylist = useRef<Playlist | undefined>();
  const currentTrackIndex = useRef<number>(-1);
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

  //#region [methods]
  const setCurrentTrackIndex = (index: number) => {
    currentTrackIndex.current = index;
  };

  const setCurrentPlaylist = (playlist: Playlist) => {
    currentPlaylist.current = playlist;
  };

  const play = (playlist: Playlist, index: number) => {
    currentPlaylist.current = playlist;
    currentTrackIndex.current = index;
    setCurrentTrack(playlist.tracks[index].track);
  };
  //#endregion

  return {
    error,
    loading,
    playlistsPreviews,
    currentPlaylist: currentPlaylist?.current,
    currentTrackIndex: currentTrackIndex.current,
    currentTrack,
    play,
    setCurrentTrackIndex,
    setCurrentPlaylist,
  };
};

export default useRoot;
