import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './PlaylistCard.css';

interface PlaylistCardProps {
  imgUrl: string;
  linkTo: string;
  name: string;
  users: string[];
}

const PlaylistCard: FunctionComponent<PlaylistCardProps> = ({
  imgUrl,
  linkTo,
  name,
  users,
}) => {
  return (
    <Link to={linkTo} className="playlist-card">
      <img src={imgUrl} alt="playlistCardImg" />
      <p className="playlist-card-name">{name}</p>
      <p className="playlist-card-user">Par {users.join(', ')}</p>
    </Link>
  );
};

export default PlaylistCard;
