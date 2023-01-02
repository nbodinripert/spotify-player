import { gql } from '@apollo/client';
import Playlist from '../models/playlist.model';

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

export const transformToPlaylists = (
  response: FetchPlaylistsData,
): Playlist[] => {
  const { id, name, images } = response.playlist;
  let imagesUrls;
  if (images && images.length > 0) {
    imagesUrls = images.map((img) => img.url);
  }
  return [
    {
      id,
      name,
      imagesUrls: imagesUrls,
    },
  ];
};
