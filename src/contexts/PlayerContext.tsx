import { createContext, Dispatch, SetStateAction } from 'react';
import Playlist from '../models/playlist.model';

interface PlayerContextState {
  currentPlaylist?: Playlist;
  currentTrackIndex: number;
  play: (playlist: Playlist, index: number) => void;
  setCurrentTrackIndex: Dispatch<SetStateAction<number>>;
  setCurrentPlaylist: Dispatch<SetStateAction<Playlist | undefined>>;
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
