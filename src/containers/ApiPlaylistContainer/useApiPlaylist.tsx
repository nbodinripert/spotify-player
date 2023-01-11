import { useQuery } from '@apollo/client';
import { useContext, useState } from 'react';
import {
  FetchPlaylistsData,
  GET_PLAYLIST,
  transformToPlaylist,
} from '../../api/playlist.api';
import { FAVORITES_PLAYLIST_ID } from '../../constants/playlist.constant';
import PlayerContext from '../../contexts/PlayerContext';
import Playlist from '../../models/playlist.model';
import { addFavorite, removeFavorite } from '../../utils/storage.utils';

const useApiPlaylist = () => {
  //#region [contexts]
  const {
    currentPlaylist,
    currentTrackIndex,
    setCurrentTrackIndex,
    setCurrentPlaylist,
  } = useContext(PlayerContext);
  //#endregion

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

    // on met à jour le state
    const playlistCopy = { ...playlist };
    playlistCopy.tracks[trackIndex].track.favorite = !favorite;
    setPlaylist(playlistCopy);

    if (favorite) {
      // on supprime le favori du local storage
      removeFavorite(id);
      // si la playlist courante est celle des favoris, alors on l'actualise
      if (currentPlaylist?.id === FAVORITES_PLAYLIST_ID) {
        setCurrentPlaylist(playlistCopy);
        // si le favori qu'on vient d'enlever est la track jouée, alors on actualise l'index de la track courante
        if (currentTrackIndex === trackIndex) {
          setCurrentTrackIndex(trackIndex - 1);
        }
      }
    } else {
      // on ajoute le favori au local storage
      addFavorite(playlist.tracks[trackIndex].track);
    }
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
