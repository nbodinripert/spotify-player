import { useContext } from 'react';
import PlayerContext from '../../contexts/PlayerContext';

const usePlayer = () => {
  //#region [contexts]
  const { currentPlaylist, currentTrackIndex, play } =
    useContext(PlayerContext);
  //#endregion

  //#region [handle methods]
  const playNextTrack = () => {
    if (
      !currentPlaylist ||
      currentTrackIndex === -1 ||
      currentTrackIndex === currentPlaylist?.tracks.length - 1
    )
      return;
    play(currentPlaylist, currentTrackIndex + 1);
  };

  const playPrevTrack = () => {
    if (!currentPlaylist || currentTrackIndex === -1 || currentTrackIndex === 0)
      return;
    play(currentPlaylist, currentTrackIndex - 1);
  };
  //#endregion

  return {
    playNextTrack,
    playPrevTrack,
  };
};

export default usePlayer;
