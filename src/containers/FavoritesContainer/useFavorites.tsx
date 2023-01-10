import { useContext, useState } from 'react';
import favoritesImg from '../../assets/like.png';
import { FAVORITES_PLAYLIST_ID } from '../../constants/playlist.constants';
import PlayerContext from '../../contexts/PlayerContext';
import { PlaylistType } from '../../enums/playlistType.enum';
import Playlist from '../../models/playlist.model';
import { getFavorites, removeFavorite } from '../../utils/storage.utils';

const useFavorites = () => {
  //#region [contexts]
  const {
    currentPlaylist,
    currentTrackIndex,
    setCurrentTrackIndex,
    setCurrentPlaylist,
  } = useContext(PlayerContext);
  //#endregion

  //#region [states]
  const [favoritesPlaylist, setFavoritesPlaylist] = useState<Playlist>({
    id: FAVORITES_PLAYLIST_ID,
    tracks: Object.values(getFavorites()),
    name: 'Titres favoris',
    url: `collection/${FAVORITES_PLAYLIST_ID}`,
    users: ['Nicolas Bodin'],
    description: 'Tous les titres que vous adorez !',
    imgUrl: favoritesImg,
    type: PlaylistType.COLLECTION,
  });
  //#endregion

  //#region [handle methods]
  const handleLikeClick = (trackIndex: number) => {
    // on récupère l'identifiant du favori qu'on vient d'enlever
    const { id } = favoritesPlaylist.tracks[trackIndex].track;

    // on met à jour le state en supprimant le favori
    const playlistCopy = { ...favoritesPlaylist };
    playlistCopy.tracks = playlistCopy.tracks.filter(
      (playlistTrack) => playlistTrack.track.id !== id,
    );
    setFavoritesPlaylist(playlistCopy);

    // si la playlist courante est celle des favoris, alors on l'actualise
    if (currentPlaylist?.id === FAVORITES_PLAYLIST_ID) {
      setCurrentPlaylist(playlistCopy);
      // si le favori qu'on vient d'enlever est la track jouée, alors on actualise l'index de la track courante
      if (currentTrackIndex === trackIndex) {
        setCurrentTrackIndex(trackIndex - 1);
      }
    }

    // on enlève le favori du local storage
    removeFavorite(id);
  };
  //#endregion

  return {
    favoritesPlaylist,
    handleLikeClick,
  };
};

export default useFavorites;
