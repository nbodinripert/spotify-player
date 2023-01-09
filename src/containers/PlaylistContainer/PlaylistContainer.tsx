import { useQuery } from '@apollo/client';
import {
  faCircleDot,
  faCircleLeft,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FetchPlaylistsData,
  GET_PLAYLIST,
  transformToPlaylist,
} from '../../api/playlist.api';
import PlaylistTable from '../../components/PlaylistTable/PlaylistTable';
import Playlist from '../../models/playlist.model';
import OutletContainer from '../OutletContainer/OutletContainer';
import './PlaylistContainer.css';

const PLAY_VISIBLE_SCROLL_TOP = 189;

const PlaylistContainer: FC = () => {
  //#region [states]
  const [playlist, setPlaylist] = useState<Playlist>();
  const [headerPlayVisible, setHeaderPlayVisible] = useState(false);
  //#endregion

  //#region [queries]
  const { loading, error } = useQuery<FetchPlaylistsData>(GET_PLAYLIST, {
    onCompleted: (response) => {
      const transformed = transformToPlaylist(response);
      setPlaylist(transformed);
    },
  });
  //#endregion

  //#region [handle methods]
  const handleScrollEvent = (evt: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (
      !headerPlayVisible &&
      evt.currentTarget.scrollTop > PLAY_VISIBLE_SCROLL_TOP
    )
      setHeaderPlayVisible(true);

    if (
      headerPlayVisible &&
      evt.currentTarget.scrollTop <= PLAY_VISIBLE_SCROLL_TOP
    )
      setHeaderPlayVisible(false);
  };
  //#endregion

  //#region [render]
  return (
    <OutletContainer loading={loading} error={error}>
      {playlist ? (
        <div className="playlist-container" onScroll={handleScrollEvent}>
          <div className="playlist-sticky-header">
            {headerPlayVisible ? (
              <div className="playlist-sticky-header-play">
                <FontAwesomeIcon icon={faPlayCircle} />
                <span>{playlist.name}</span>
              </div>
            ) : (
              <div className="playlist-sticky-header-back">
                <Link to="/">
                  <FontAwesomeIcon icon={faCircleLeft} />
                </Link>
              </div>
            )}
          </div>
          <div className="playlist-info">
            <img src={playlist.imgUrl} alt="play" />
            <div className="playlist-info-texts">
              <p className="playlist-info-type">Playlist</p>
              <p className="playlist-info-name">{playlist.name}</p>
              <p className="playlist-info-details">
                <span className="bold">{playlist.users.join(', ')}</span>
                <FontAwesomeIcon
                  icon={faCircleDot}
                  className="playlist-info-dot"
                />
                <span className="bold">{playlist.tracks.length} titre(s)</span>
                <FontAwesomeIcon
                  icon={faCircleDot}
                  className="playlist-info-dot"
                />
                <span>{playlist.duration}</span>
              </p>
            </div>
          </div>
          <PlaylistTable playlistTracks={playlist.tracks} />
        </div>
      ) : null}
    </OutletContainer>
  );
  //#endregion
};

export default PlaylistContainer;
