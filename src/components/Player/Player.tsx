import { FC } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Track from '../../models/track.model';
import './Player.css';
import usePlayer from './usePlayer';

interface PlayerProps {
  track?: Track;
}

const Player: FC<PlayerProps> = ({ track }) => {
  //#region [logic]
  const { handleNextClick, handlePrevClick } = usePlayer();
  //#endregion

  //#region [render]
  return (
    <div className="player">
      {track ? (
        <div className="player-track-info">
          <img src={track.imgUrl} alt="trackImg" />
          <div>
            <p className="player-track-name">{track.name}</p>
            <p className="player-track-artists">
              {track.artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
        </div>
      ) : null}
      <AudioPlayer
        onClickNext={handleNextClick}
        onClickPrevious={handlePrevClick}
        src={track?.url}
        showJumpControls={false}
        showSkipControls
      />
    </div>
  );
  //#endregion
};

export default Player;
