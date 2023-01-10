import Artist from './artist.model';

interface Track {
  album?: string;
  artists: Artist[];
  duration: string;
  id: string;
  imgUrl?: string;
  favorite: boolean;
  name: string;
  url?: string;
}

export default Track;
