import { createContext } from 'react';
import Playlist from '../models/playlist.model';

interface PlayerContextState {
  currentPlaylist?: Playlist;
  currentTrackIndex: number;
  play: (playlist: Playlist, index: number) => void;
  setCurrentTrackIndex: (index: number) => void;
  setCurrentPlaylist: (playlist: Playlist) => void;
}

const defaultState = {
  currentPlaylist: undefined,
  currentTrackIndex: -1,
  play: () => {},
  setCurrentTrackIndex: () => {},
  setCurrentPlaylist: () => {},
};

const PlayerContext = createContext<PlayerContextState>(defaultState);
export default PlayerContext;
