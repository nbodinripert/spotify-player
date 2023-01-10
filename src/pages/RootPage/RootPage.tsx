import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Player from '../../components/Player/Player';
import Sidebar from '../../components/Sidebar/Sidebar';
import PlaylistsPreviewsContext from '../../contexts/PlaylistsPreviewsContext';
import './RootPage.css';
import useRoot from './useRoot';

const RootPage: FC = () => {
  //#region [logic]
  const { error, loading, playlistsPreviews } = useRoot();
  //#endregion

  //#region [render]
  return (
    <PlaylistsPreviewsContext.Provider
      value={{ error, loading, playlistsPreviews }}
    >
      <div className="root-page">
        <div className="root-top-container">
          <Sidebar className="root-sidebar" />
          <Outlet />
        </div>
        <Player />
      </div>
    </PlaylistsPreviewsContext.Provider>
  );
  //#endregion
};

export default RootPage;
