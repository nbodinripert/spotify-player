import { gql } from '@apollo/client';

interface FetchPlaylistData {
  __typename?: 'Playlist';
  id: string;
  name: string;
  images: FetchImageData[];
}

interface FetchImageData {
  __typename?: 'Image';
  id: string;
  url: string;
}

export interface FetchPlaylistsData {
  playlist: FetchPlaylistData;
}

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
