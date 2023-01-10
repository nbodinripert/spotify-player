import React from 'react';
import PlaylistTrack from '../models/playlistTrack.model';

interface PlayerContextState {
  play: (playlistTrack: PlaylistTrack) => void;
}

const defaultState = {
  play: () => {},
};

const PlayerContext = React.createContext<PlayerContextState>(defaultState);
export default PlayerContext;
