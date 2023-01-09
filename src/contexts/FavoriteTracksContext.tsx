import React from 'react';

interface FavoriteTracksContextState {
  favoriteIds: string[];
}

const defaultState = {
  favoriteIds: [],
};

const FavoriteTracksContext =
  React.createContext<FavoriteTracksContextState>(defaultState);
export default FavoriteTracksContext;
