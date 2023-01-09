import { useQuery } from '@apollo/client';
import { faCircleDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useState } from 'react';
import {
  FetchPlaylistsData,
  GET_PLAYLIST,
  transformToPlaylist,
} from '../../api/playlist.api';
import play from '../../assets/play.png';
import Playlist from '../../models/playlist.model';
import OutletContainer from '../OutletContainer/OutletContainer';
import './PlaylistContainer.css';

const PlaylistContainer: FunctionComponent = () => {
  //#region [states]
  const [playlist, setPlaylist] = useState<Playlist>();
  //#endregion

  //#region [queries]
  const { loading, error } = useQuery<FetchPlaylistsData>(GET_PLAYLIST, {
    onCompleted: (response) => {
      const transformed = transformToPlaylist(response);
      setPlaylist(transformed);
    },
  });

  //#region [render]
  return (
    <OutletContainer loading={loading} error={error}>
      {playlist ? (
        <div className="playlist-container">
          <div className="playlist-sticky-header">
            <img src={play} alt="play" />
            <span>{playlist.name}</span>
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
          <div className="playlist-table-wrapper">
            <table className="playlist-table">
              <thead>
                <tr>
                  <th className="playlist-table-col-index">#</th>
                  <th>Titre</th>
                  <th>Album</th>
                  <th className="playlist-table-col-addedAt">Ajouté le</th>
                  <th className="playlist-table-col-like">Like</th>
                  <th className="playlist-table-col-duration">
                    <FontAwesomeIcon icon={faClock} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {playlist.tracks.map((playlistTrack, index) => (
                  <tr key={'playlist_tr_' + index}>
                    <td className="playlist-table-col-index">{index + 1}</td>
                    <td className="playlist-table-td-title">
                      <img src={playlistTrack.track.imgUrl} alt="title-img" />
                      <span>{playlistTrack.track.name}</span>
                    </td>
                    <td>{playlistTrack.track.album ?? ''}</td>
                    <td className="playlist-table-col-addedAt">
                      {playlistTrack.addedAt}
                    </td>
                    <td className="playlist-table-col-like"></td>
                    <td className="playlist-table-col-duration">
                      {playlistTrack.track.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </OutletContainer>
  );
  //#endregion
};

export default PlaylistContainer;
