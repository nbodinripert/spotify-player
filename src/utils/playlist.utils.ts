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

export const transformToPlaylist = (response: FetchPlaylistsData): Playlist => {
  const { id, name, images, tracks } = response.playlist;
  const playlistImgUrl =
    images && images.length >= 0 ? images[0].url : undefined;
  const playlistTracks =
    tracks && tracks.length > 0
      ? tracks.map((playlistTrack) => {
          const { added_at, track } = playlistTrack;
          const { id, name, album, artists, preview_url, duration_ms } = track;
          const imgUrl =
            album && album.images && album.images.length >= 0
              ? album.images[0].url
              : undefined;
          return {
            addedAt: added_at,
            track: {
              album: album?.name,
              artists: artists?.map((artist) => ({
                id: artist.id,
                name: artist.name,
              })),
              duration: duration_ms,
              id,
              imgUrl,
              name,
              url: preview_url,
            },
          };
        })
      : [];

  return {
    id,
    imgUrl: playlistImgUrl,
    name,
    users: ['Nicolas Bodin'],
    description: 'Une playlist spécialement conçue pour Shotgun',
    url: `playlist/${id}`,
    tracks: playlistTracks,
  };
};
