const FAVORITES_KEY = 'favorites';

export const getFavoriteTracks = (): Record<string, boolean> => {
  const jsonFav = localStorage.getItem(FAVORITES_KEY);
  return !jsonFav ? {} : (JSON.parse(jsonFav) as Record<string, boolean>);
};

export const changeFavoriteTrack = (id: string, like: boolean) => {
  const jsonFav = localStorage.getItem(FAVORITES_KEY);
  const fav = !jsonFav ? {} : JSON.parse(jsonFav);
  fav[id] = like;
  console.log(fav);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(fav));
};
