import { gql } from '@apollo/client';

export const GET_ARTICLE_BY_SLUG = gql`
  query Post($slug: String!) {
    postSlug(slug: $slug) {
      createdAt
      content
      title
      banner
      updatedAt
      status
      scheduledAt
      publishedAt
      meta {
        author
        slug
        url
        description
        image
        imageAlt
        publishedAt
        updatedAt
        title
      }
      category {
        label
        value
        notRemovable
      }
      tags {
        value
        label
        notRemovable
      }
    }
  }
`;

export const GET_METADATA_BY_SLUG = gql`
  query Post($slug: String!) {
    postSlug(slug: $slug) {
      meta {
        author
        slug
        url
        description
        image
        imageAlt
        publishedAt
        updatedAt
        title
      }
    }
  }
`;
