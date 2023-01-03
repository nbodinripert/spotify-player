import { FunctionComponent } from 'react';
import './PlaylistCard.css';

interface PlaylistCardProps {
  imgUrl: string;
  name: string;
  users: string[];
}

const PlaylistCard: FunctionComponent<PlaylistCardProps> = ({
  imgUrl,
  name,
  users,
}) => {
  return (
    <div className="playlist-card">
      <img src={imgUrl} alt="playlistCardImg" />
      <p className="playlist-card-name">{name}</p>
      <p className="playlist-card-user">Par {users.join(', ')}</p>
    </div>
  );
};

export default PlaylistCard;
