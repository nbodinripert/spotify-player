import PlaylistTrack from './playlistTrack.model';

interface Playlist {
  id: string;
  imgUrl: string;
  name: string;
  tracks?: PlaylistTrack[];
  users: string[];
  url: string;
}

export default Playlist;
