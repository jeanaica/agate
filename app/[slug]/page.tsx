import { Metadata, ResolvingMetadata } from 'next';

import { apolloClient } from '@/lib/client';

import LoadingScreen from '@/components/loading/LoadingScreen';
import Banner from '@/components/banner/Banner';

import formatDate from '@/utils/formatDate';

import { openGraph, twitter } from '../shared-metadata';
import { GET_ARTICLE_BY_SLUG } from './schema';
import { ApolloError } from '@apollo/client';

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const { meta, post } = await getData(params.slug);

  return {
    title: post?.title,
    description: meta?.description,
    keywords: meta?.keywords,
    openGraph: {
      ...openGraph,
      type: 'article',
      images: {
        url: meta?.image || '',
        alt: meta?.imageAlt,
      },
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
      images: {
        url: meta?.image || '',
        alt: meta?.imageAlt,
      },
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
    <main className='flex min-h-screen flex-col items-center gap-5'>
      <Banner src={post?.banner} alt={meta?.imageAlt} />
      <div className='flex flex-col items-center my-8'>
        <h1 className='font-black'>{post?.title}</h1>
        <span className='text-sm'>{formatDate(post?.publishedAt)}</span>
      </div>
      <div
        className='min-h-[500px]'
        dangerouslySetInnerHTML={{ __html: post?.content || '' }}
      />
    </main>
  );
}
