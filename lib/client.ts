import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});
