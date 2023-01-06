import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { apolloClient } from './config/apollo.config';
import CollectionContainer from './containers/CollectionContainer/CollectionContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import PlaylistContainer from './containers/PlaylistContainer/PlaylistContainer';
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
        element: <PlaylistContainer />,
      },
      {
        path: 'collection/:collectionType',
        element: <CollectionContainer />,
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
