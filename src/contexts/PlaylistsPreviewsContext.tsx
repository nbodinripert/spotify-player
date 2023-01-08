import { ApolloError } from '@apollo/client';
import React from 'react';
import PlaylistPreview from '../models/playlistPreview.model';

interface PlaylistsPreviewsContextState {
  error: ApolloError | undefined;
  loading: boolean;
  playlistsPreviews: PlaylistPreview[];
}

const defaultState = {
  error: undefined,
  loading: false,
  playlistsPreviews: [],
};

const PlaylistsPreviewsContext =
  React.createContext<PlaylistsPreviewsContextState>(defaultState);
export default PlaylistsPreviewsContext;
