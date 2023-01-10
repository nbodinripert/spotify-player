import { PlaylistType } from '../enums/playlistType.enum';
import PlaylistTrack from './playlistTrack.model';

interface Playlist {
  description?: string;
  duration?: string;
  id: string;
  imgUrl?: string;
  name: string;
  tracks: PlaylistTrack[];
  type: PlaylistType;
  users: string[];
  url: string;
}

export default Playlist;
