import { FetchPlaylistsData } from '../api/playlist.api';
import { DEFAULT_IMG_URL } from '../constants/playlist.constants';
import Playlist from '../models/playlist.model';

export const transformToPlaylists = (
  response: FetchPlaylistsData,
): Playlist[] => {
  const { id, name, images } = response.playlist;
  const imgUrl = images && images.length > 0 ? images[0].url : DEFAULT_IMG_URL;
  return [
    {
      id,
      imgUrl,
      name,
      users: ['Nicolas Bodin'],
      url: `playlist/${id}`,
    },
  ];
};
