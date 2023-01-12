import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as faHeartSolid,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useContext } from 'react';
import PlayerContext from '../../contexts/PlayerContext';
import Playlist from '../../models/playlist.model';
import './PlaylistTable.css';

interface PlaylistTableProps {
  bgTableBody?: string;
  bgTableHeader?: string;
  playlist: Playlist;
  onLikeClick: (index: number) => void;
}

const PlaylistTable: FC<PlaylistTableProps> = ({
  bgTableBody,
  bgTableHeader,
  playlist,
  onLikeClick,
}) => {
  //#region [contexts]
  const { currentPlaylist, currentTrackIndex, play } =
    useContext(PlayerContext);
  //endregion

  //#region [render]
  return (
    <table className="playlist-table">
      <thead>
        <tr
          style={{
            backgroundColor:
              bgTableHeader ?? 'var(--default-table-header-bg-color)',
          }}
        >
          <th className="playlist-table-col-index">#</th>
          <th>Titre</th>
          <th>Album</th>
          <th className="playlist-table-col-addedAt">Ajouté le</th>
          <th className="playlist-table-col-favorite"></th>
          <th className="playlist-table-col-duration">
            <FontAwesomeIcon icon={faClock} />
          </th>
        </tr>
      </thead>
      <tbody
        style={{
          background: bgTableBody ?? 'var(--default-table-gradient)',
        }}
      >
        {playlist.tracks.map((playlistTrack, index) => (
          <tr
            key={'playlist_tr_' + index}
            className={
              currentPlaylist?.id === playlist.id && currentTrackIndex === index
                ? 'playlist-table-current-track'
                : ''
            }
          >
            <td className="playlist-table-col-index">
              <FontAwesomeIcon
                icon={faPlay}
                onClick={() => play(playlist, index)}
              />
              <span>{index + 1}</span>
            </td>
            <td className="playlist-table-td-title">
              <img src={playlistTrack.track.imgUrl} alt="title-img" />
              <div>
                <span className="two-lines-ellipsis">
                  {playlistTrack.track.name}
                </span>
                <span className="two-lines-ellipsis">
                  {playlistTrack.track.artists
                    .map((artist) => artist.name)
                    .join(', ')}
                </span>
              </div>
            </td>
            <td className="playlist-table-td-album">
              <span className="two-lines-ellipsis">
                {playlistTrack.track.album ?? ''}
              </span>
            </td>
            <td className="playlist-table-col-addedAt">
              {new Date(playlistTrack.addedAt).toLocaleString('fr', {
                dateStyle: 'medium',
              })}
            </td>
            <td className="playlist-table-col-favorite">
              <FontAwesomeIcon
                icon={playlistTrack.track.favorite ? faHeartSolid : faHeart}
                onClick={() => onLikeClick(index)}
                className="cursor"
              />
            </td>
            <td className="playlist-table-col-duration">
              {playlistTrack.track.duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  //#endregion
};

export default PlaylistTable;
