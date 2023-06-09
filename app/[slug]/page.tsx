import { Metadata, ResolvingMetadata } from 'next';
import { ApolloError } from '@apollo/client';

import { apolloClient } from '@/lib/client';

import LoadingScreen from '@/components/LoadingScreen';
import Banner from '@/components/Banner';
import Article from '@/components/Article';
import Title from '@/components/Title';

import formatDate from '@/utils/formatDate';

import { openGraph, sharedMetadata, twitter } from '../shared-metadata';
import { GET_ARTICLE_BY_SLUG } from './schema';

export const revalidate = 0;

type Props = {
  params: { slug: string };
};

type Data = {
  loading?: boolean;
  post?: Post;
  meta?: Meta;
  error?: ApolloError;
};

async function getData(slug: string): Promise<Data> {
  try {
    const { data, loading, error } = await apolloClient.query({
      query: GET_ARTICLE_BY_SLUG,
      variables: {
        slug,
      },
    });

    const meta = data?.postSlug?.meta;
    const post = { ...data?.postSlug };

    // Remove the meta field from the copy
    delete post?.meta;

    return {
      loading,
      meta,
      post,
      error,
    };
  } catch (err: any) {
    return {
      error: err,
    };
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const { meta, post } = await getData(params.slug);
  const keywords = meta?.keywords || [];

  return {
    title: post?.title,
    description: meta?.description,
    keywords: [...sharedMetadata.keywords, ...keywords],
    openGraph: {
      ...openGraph,
      type: 'article',
      images: [
        {
          url: meta?.image || '',
          alt: meta?.imageAlt,
        },
        {
          url: 'https://www.lifeinpeach.com/logo.png',
          alt: 'Life in Peach - The Sweet, The Tangy, and The Unexpected',
          width: 800,
          height: 600,
        },
      ],
      title: meta?.title,
      description: meta?.description,
      authors: 'Jeanaica Suplido-Alinsub',
      publishedTime: formatDate(meta?.publishedAt),
      modifiedTime: formatDate(meta?.updatedAt),
      tags: meta?.keywords,
    },
    twitter: {
      ...twitter,
      title: meta?.title,
      description: meta?.description,
      images: [
        {
          url: meta?.image || '',
          alt: meta?.imageAlt,
        },
        {
          url: 'https://lifeinpeach.com/logo.png',
          alt: 'Life in Peach - The Sweet, The Tangy, and The Unexpected',
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { loading, meta, post, error } = await getData(params.slug);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    throw new Error(error.message);
  }

  return (
    <section className='flex flex-col items-center gap-5 mb-28'>
      {post?.banner && (
        <Banner
          src={post?.banner}
          alt={meta?.imageAlt}
          caption={post?.caption}
        />
      )}
      <Title
        hasBanner={!!post?.banner}
        title={post?.title}
        datePublished={post?.publishedAt}
      />
      <Article content={post?.content} />
    </section>
  );
}
