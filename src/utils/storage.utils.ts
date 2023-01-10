import PlaylistTrack from '../models/playlistTrack.model';
import Track from '../models/track.model';

const FAVORITES_KEY = 'favorites';

export const getFavorites = (): Record<string, PlaylistTrack> => {
  const jsonFav = localStorage.getItem(FAVORITES_KEY);
  if (!jsonFav) return {};
  const parsedFav = JSON.parse(jsonFav) as Record<string, string>;
  const fav = {} as Record<string, PlaylistTrack>;
  Object.entries(parsedFav).forEach(([id, trackStr]) => {
    fav[id] = JSON.parse(trackStr) as PlaylistTrack;
  });
  return fav;
};

export const addFavorite = (track: Track): void => {
  const jsonFav = localStorage.getItem(FAVORITES_KEY);
  const fav = !jsonFav ? {} : JSON.parse(jsonFav);
  const playlistTrack: PlaylistTrack = {
    index: Object.keys(fav).length,
    addedAt: new Date().toISOString(),
    track: { ...track, favorite: true },
  };
  const trackStr = JSON.stringify(playlistTrack);
  fav[track.id] = trackStr;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(fav));
};

export const removeFavorite = (trackId: string): void => {
  const jsonFav = localStorage.getItem(FAVORITES_KEY);
  if (!jsonFav) return;
  const fav = JSON.parse(jsonFav);
  delete fav[trackId];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(fav));
};

export const removeFavorites = () => {
  localStorage.removeItem(FAVORITES_KEY);
};
