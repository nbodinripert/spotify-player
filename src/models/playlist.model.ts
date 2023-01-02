import PlaylistTrack from './playlistTrack.model';

interface Playlist {
  id: string;
  name: string;
  imagesUrls?: string[];
  tracks?: PlaylistTrack[];
}

export default Playlist;
