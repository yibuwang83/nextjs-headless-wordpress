import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
});
console.log(
  '🚀 ~ file: client.js ~ line 21 ~ ${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql',
  process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL
);

const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
