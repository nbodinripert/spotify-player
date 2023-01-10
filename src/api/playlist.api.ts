import { gql } from '@apollo/client';
import { DEFAULT_IMG_URL } from '../constants/playlist.constants';
import { PlaylistType } from '../enums/playlistType.enum';
import Playlist from '../models/playlist.model';
import PlaylistPreview from '../models/playlistPreview.model';
import PlaylistTrack from '../models/playlistTrack.model';
import { getFavorites } from '../utils/storage.utils';
import { convertMsToHrsMins, convertMsToMinsSecs } from '../utils/time.utils';

//#region [interfaces]
interface FetchPlaylistData {
  __typename?: 'Playlist';
  id: string;
  name: string;
  images?: FetchImageData[];
  tracks?: FetchPlaylistTrackData[];
}

interface FetchImageData {
  __typename?: 'Image';
  url: string;
}

interface FetchArtistData {
  __typename?: 'Artist';
  id: string;
  name: string;
}

interface FetchAlbumData {
  __typename?: 'Album';
  id: string;
  name: string;
  images: FetchImageData[];
}

interface FetchPlaylistTrackData {
  __typename?: 'PlaylistTrack';
  added_at: string;
  track: FetchTrackData;
}

interface FetchTrackData {
  __typename?: 'Track';
  id: string;
  name: string;
  album?: FetchAlbumData;
  artists?: FetchArtistData[];
  preview_url?: string;
  duration_ms: number;
}

export interface FetchPlaylistsData {
  playlist: FetchPlaylistData;
}
//#endregion

//#region [queries]
export const GET_PLAYLISTS_PREVIEWS = gql`
  query GetPlaylists {
    playlist {
      id
      name
      images {
        url
      }
    }
  }
`;

export const GET_PLAYLIST = gql`
  query GetPlaylist {
    playlist {
      id
      name
      images {
        url
      }
      tracks {
        added_at
        track {
          id
          name
          preview_url
          duration_ms
          album {
            id
            name
            images {
              url
            }
          }
          artists {
            id
            name
          }
        }
      }
    }
  }
`;
//#endregion

//#region [transform methods]
export const transformToPlaylistsPreviews = (
  response: FetchPlaylistsData,
): PlaylistPreview[] => {
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

  const playlistTracks: PlaylistTrack[] = [];
  const favorites = getFavorites();

  const playlistImgUrl =
    images && images.length >= 0 ? images[0].url : undefined;
  let playlistDurationMs = 0;

  if (tracks && tracks.length > 0) {
    tracks.forEach((playlistTrack, index) => {
      const { added_at, track } = playlistTrack;
      const { album, artists, preview_url, duration_ms } = track;
      const imgUrl =
        album && album.images && album.images.length >= 0
          ? album.images[0].url
          : undefined;
      playlistTracks.push({
        addedAt: added_at,
        index,
        track: {
          album: album?.name,
          artists: !artists
            ? []
            : artists.map((artist) => ({
                id: artist.id,
                name: artist.name,
              })),
          duration: convertMsToMinsSecs(duration_ms),
          id: track.id,
          imgUrl,
          favorite: !!favorites[track.id],
          name: track.name,
          url: preview_url,
        },
      });
      playlistDurationMs += duration_ms;
    });
  }

  return {
    duration: convertMsToHrsMins(playlistDurationMs),
    id,
    imgUrl: playlistImgUrl,
    name,
    users: ['Nicolas Bodin'],
    description: 'Une playlist spécialement conçue pour Shotgun',
    url: `playlist/${id}`,
    tracks: playlistTracks,
    type: PlaylistType.PLAYLIST,
  } as Playlist;
};
//#endregion
