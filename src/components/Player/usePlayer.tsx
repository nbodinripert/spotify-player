import { useContext } from 'react';
import PlayerContext from '../../contexts/PlayerContext';

const usePlayer = () => {
  //#region [contexts]
  const { currentPlaylist, currentTrackIndex, setCurrentTrackIndex } =
    useContext(PlayerContext);
  //#endregion

  //#region [handle methods]
  const handleNextClick = () => {
    if (!currentPlaylist || currentTrackIndex === -1) return;
    if (currentTrackIndex === currentPlaylist?.tracks.length - 1) return;
    setCurrentTrackIndex((currIndex) => currIndex + 1);
  };

  const handlePrevClick = () => {
    if (!currentPlaylist || currentTrackIndex === -1 || currentTrackIndex === 0)
      return;
    setCurrentTrackIndex((currIndex) => currIndex - 1);
  };
  //#endregion

  return {
    handleNextClick,
    handlePrevClick,
  };
};

export default usePlayer;
