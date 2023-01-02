import React from 'react';
import Playlist from '../models/playlist.model';

interface PlaylistContextState {
  playlists: Playlist[];
}

const defaultState = {
  playlists: [],
};

const PlaylistContext = React.createContext<PlaylistContextState>(defaultState);
export default PlaylistContext;
