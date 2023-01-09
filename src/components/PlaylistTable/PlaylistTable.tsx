import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import PlaylistTrack from '../../models/playlistTrack.model';
import { changeFavoriteTrack } from '../../utils/storage.utils';
import './PlaylistTable.css';

interface PlaylistTableProps {
  playlistTracks: PlaylistTrack[];
}

const PlaylistTable: FC<PlaylistTableProps> = ({ playlistTracks }) => {
  //#region [states]
  const [tracks, setTracks] = useState(playlistTracks);
  //#endregion

  //#region [handle methods]
  const handleLikeClick = (trackIndex: number) => {
    const tracksCopy = [...tracks];
    const { id, like } = tracksCopy[trackIndex].track;
    changeFavoriteTrack(id, like);
    tracksCopy[trackIndex].track.like = !like;
    setTracks(tracksCopy);
  };
  //#endregion

  //#region [render]
  return (
    <table className="playlist-table">
      <thead>
        <tr>
          <th className="playlist-table-col-index">#</th>
          <th>Titre</th>
          <th>Album</th>
          <th className="playlist-table-col-addedAt">Ajouté le</th>
          <th className="playlist-table-col-like"></th>
          <th className="playlist-table-col-duration">
            <FontAwesomeIcon icon={faClock} />
          </th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((playlistTrack, index) => (
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
            <td className="playlist-table-col-like">
              <FontAwesomeIcon
                icon={playlistTrack.track.like ? faHeartSolid : faHeart}
                onClick={() => handleLikeClick(index)}
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
