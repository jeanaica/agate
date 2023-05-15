import { gql } from '@apollo/client';

export const GET_ARTICLES_QUERY = gql`
  query Posts {
    posts {
      title
      createdAt
      publishedAt
      meta {
        slug
        description
      }
    }
  }
`;
