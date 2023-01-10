import { useContext } from 'react';
import PlayerContext from '../../contexts/PlayerContext';

const usePlayer = () => {
  //#region [contexts]
  const { currentPlaylist, currentTrackIndex, play } =
    useContext(PlayerContext);
  //#endregion

  //#region [handle methods]
  const handleNextClick = () => {
    if (
      !currentPlaylist ||
      currentTrackIndex === -1 ||
      currentTrackIndex === currentPlaylist?.tracks.length - 1
    )
      return;
    play(currentPlaylist, currentTrackIndex + 1);
  };

  const handlePrevClick = () => {
    if (!currentPlaylist || currentTrackIndex === -1 || currentTrackIndex === 0)
      return;
      play(currentPlaylist, currentTrackIndex - 1);
  };
  //#endregion

  return {
    handleNextClick,
    handlePrevClick,
  };
};

export default usePlayer;
