import Artist from './artist.model';

interface Track {
  id: string;
  name: string;
  album?: string;
  artists: Artist[];
  url: string;
  duration: number;
}

export default Track;
