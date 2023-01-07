import { gql } from '@apollo/client';

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
export const GET_PLAYLISTS = gql`
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
