import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import PlaylistTrack from '../../models/playlistTrack.model';
import './PlaylistTable.css';

interface PlaylistTableProps {
  bgTableBody?: string;
  bgTableHeader?: string;
  tracks: PlaylistTrack[];
  onLikeClick: (index: number) => void;
}

const PlaylistTable: FC<PlaylistTableProps> = ({
  bgTableBody,
  bgTableHeader,
  tracks,
  onLikeClick,
}) => {
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
        {tracks.map((playlistTrack, index) => (
          <tr key={'playlist_tr_' + index}>
            <td className="playlist-table-col-index">{index + 1}</td>
            <td className="playlist-table-td-title">
              <img src={playlistTrack.track.imgUrl} alt="title-img" />
              <div>
                <span>{playlistTrack.track.name}</span>
                <span>
                  {playlistTrack.track.artists
                    .map((artist) => artist.name)
                    .join(', ')}
                </span>
              </div>
            </td>
            <td>{playlistTrack.track.album ?? ''}</td>
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
