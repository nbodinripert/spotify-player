import Artist from './artist.model';

interface Track {
  album?: string;
  artists?: Artist[];
  duration: number;
  id: string;
  imgUrl?: string;
  name: string;
  url?: string;
}

export default Track;
