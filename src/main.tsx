import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { apolloClient } from './config/apollo.config';
import ApiPlaylistContainer from './containers/ApiPlaylistContainer/ApiPlaylistContainer';
import FavoritesContainer from './containers/FavoritesContainer/FavoritesContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import './index.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RootPage from './pages/RootPage/RootPage';
import './variables.css';

const router = createBrowserRouter([
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
        path: 'playlist/:playlistId',
        element: <ApiPlaylistContainer />,
      },
      {
        path: 'collection/:collectionType',
        element: <FavoritesContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
