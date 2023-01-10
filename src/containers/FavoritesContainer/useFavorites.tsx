import { useMemo, useState } from 'react';
import { PlaylistType } from '../../enums/playlistType.enum';
import Playlist from '../../models/playlist.model';
import PlaylistTrack from '../../models/playlistTrack.model';
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from '../../utils/storage.utils';
import favoritesImg from '../../assets/like.png';

const useFavorites = () => {
  //#region [states]
  const [favoritesObj, setFavoritesObj] = useState<
    Record<string, PlaylistTrack>
  >(getFavorites());
  //#endregion

  //#region [memos]
  const favoritesPlaylist = useMemo(() => {
    return {
      id: 'favorites',
      tracks: Object.values(favoritesObj),
      name: 'Titres favoris',
      url: 'collections/favorites',
      users: ['Nicolas Bodin'],
      description: 'Tous les titres que vous adorez !',
      imgUrl: favoritesImg,
      type: PlaylistType.COLLECTION,
    } as Playlist;
  }, [favoritesObj]);
  //#endregion

  //#region [handle methods]
  const handleLikeClick = (trackIndex: number) => {
    const { id, favorite } = favoritesPlaylist.tracks[trackIndex].track;
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite(favoritesPlaylist.tracks[trackIndex].track);
    }

    const favoritesObjCopy = { ...favoritesObj };
    delete favoritesObjCopy[id];
    setFavoritesObj(favoritesObjCopy);
  };
  //#endregion

  return {
    favoritesPlaylist,
    handleLikeClick,
  };
};

export default useFavorites;
