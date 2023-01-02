import { ApolloClient, InMemoryCache } from '@apollo/client';

export const API_URL = 'https://spotify-graphql.shotgun.live/api';

export const apolloClient  = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
