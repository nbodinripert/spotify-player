import { FC } from 'react';
import Track from '../../models/track.model';
import './Player.css';

interface PlayerProps {
  track?: Track;
}

const Player: FC<PlayerProps> = ({ track }) => {
  return <div className="player">Player</div>;
};

export default Player;
