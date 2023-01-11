import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { apolloClient } from './config/apollo.config';
import {
  BASENAME,
  COLLECTION_PATH,
  PLAYLIST_PATH,
} from './constants/url.constant';
import ApiPlaylistContainer from './containers/ApiPlaylistContainer/ApiPlaylistContainer';
import FavoritesContainer from './containers/FavoritesContainer/FavoritesContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import './index.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RootPage from './pages/RootPage/RootPage';
import './variables.css';

//#region [router]
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomeContainer />,
        },
        {
          path: PLAYLIST_PATH,
          element: <ApiPlaylistContainer />,
        },
        {
          path: COLLECTION_PATH,
          element: <FavoritesContainer />,
        },
      ],
    },
  ],
  { basename: BASENAME },
);
//#endregion

//#region [render]
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
//#endregion
