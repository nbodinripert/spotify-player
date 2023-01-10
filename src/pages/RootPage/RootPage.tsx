import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Player from '../../components/Player/Player';
import Sidebar from '../../components/Sidebar/Sidebar';
import PlayerContext from '../../contexts/PlayerContext';
import PlaylistsPreviewsContext from '../../contexts/PlaylistsPreviewsContext';
import './RootPage.css';
import useRoot from './useRoot';

const RootPage: FC = () => {
  //#region [logic]
  const {
    error,
    loading,
    playlistsPreviews,
    currentPlaylist,
    currentTrackIndex,
    currentTrack,
    play,
    setCurrentTrackIndex,
    setCurrentPlaylist,
  } = useRoot();
  //#endregion

  //#region [render]
  return (
    <PlayerContext.Provider
      value={{
        currentPlaylist,
        currentTrackIndex,
        play,
        setCurrentTrackIndex,
        setCurrentPlaylist,
      }}
    >
      <PlaylistsPreviewsContext.Provider
        value={{ error, loading, playlistsPreviews }}
      >
        <div className="root-page">
          <div className="root-top-container">
            <Sidebar className="root-sidebar" />
            <Outlet />
          </div>
          <Player track={currentTrack} />
        </div>
      </PlaylistsPreviewsContext.Provider>
    </PlayerContext.Provider>
  );
  //#endregion
};

export default RootPage;
