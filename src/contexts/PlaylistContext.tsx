import React from 'react';
import Playlist from '../models/playlist.model';

interface PlaylistContextState {
  loading: boolean;
  playlists: Playlist[];
}

const defaultState = {
  loading: false,
  playlists: [],
};

const PlaylistContext = React.createContext<PlaylistContextState>(defaultState);
export default PlaylistContext;
