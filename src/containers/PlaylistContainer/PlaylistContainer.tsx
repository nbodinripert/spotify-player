import {
  faCircleDot,
  faCircleLeft,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaylistTable from '../../components/PlaylistTable/PlaylistTable';
import { PLAY_VISIBLE_SCROLL_TOP } from '../../constants/playlist.constants';
import Playlist from '../../models/playlist.model';
import './PlaylistContainer.css';

interface PlaylistContainerProps {
  backgroundInfo?: string;
  bgTableBody?: string;
  bgTableHeader?: string;
  playlist: Playlist;
  onLikeClick: (index: number) => void;
}

const PlaylistContainer: FC<PlaylistContainerProps> = ({
  backgroundInfo,
  bgTableBody,
  bgTableHeader,
  playlist,
  onLikeClick,
}) => {
  //#region [states]
  const [headerPlayVisible, setHeaderPlayVisible] = useState(false);
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
  const { name, imgUrl, users, tracks, duration, type, description } = playlist;
  return (
    <div className="playlist-container" onScroll={handleScrollEvent}>
      <div
        className="playlist-sticky-header"
        style={{ background: backgroundInfo ?? 'var(--default-info-gradient)' }}
      >
        {headerPlayVisible ? (
          <div className="playlist-sticky-header-play">
            <FontAwesomeIcon icon={faPlayCircle} />
            <span>{name}</span>
          </div>
        ) : (
          <div className="playlist-sticky-header-back">
            <Link to="/">
              <FontAwesomeIcon icon={faCircleLeft} />
            </Link>
          </div>
        )}
      </div>
      <div
        className="playlist-info"
        style={{ background: backgroundInfo ?? 'var(--default-info-gradient)' }}
      >
        <img src={imgUrl} alt="play" />
        <div className="playlist-info-texts">
          <p className="playlist-info-type">{type}</p>
          <p className="playlist-info-name">{name}</p>
          <p className="playlist-info-description">{description}</p>
          <p className="playlist-info-details">
            <span className="bold">{users.join(', ')}</span>
            <FontAwesomeIcon icon={faCircleDot} className="playlist-info-dot" />
            <span className="bold">{tracks.length} titre(s)</span>
            {duration ? (
              <Fragment>
                <FontAwesomeIcon
                  icon={faCircleDot}
                  className="playlist-info-dot"
                />
                <span>{duration}</span>
              </Fragment>
            ) : null}
          </p>
        </div>
      </div>
      <PlaylistTable
        playlist={playlist}
        onLikeClick={onLikeClick}
        bgTableHeader={bgTableHeader}
        bgTableBody={bgTableBody}
      />
    </div>
  );
  //#endregion
};

export default PlaylistContainer;
