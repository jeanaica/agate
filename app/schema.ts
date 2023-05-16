import { gql } from '@apollo/client';

export const GET_ARTICLES_QUERY = gql`
  query Posts($status: String) {
    posts(status: $status) {
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
