import { ApolloError } from '@apollo/client';
import React from 'react';
import Playlist from '../models/playlist.model';

interface PlaylistContextState {
  error: ApolloError | undefined;
  loading: boolean;
  playlists: Playlist[];
}

const defaultState = {
  error: undefined,
  loading: false,
  playlists: [],
};

const PlaylistContext = React.createContext<PlaylistContextState>(defaultState);
export default PlaylistContext;
