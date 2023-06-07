import { Metadata, ResolvingMetadata } from 'next';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { ApolloError } from '@apollo/client';

import { apolloClient } from '@/lib/client';

import LoadingScreen from '@/components/LoadingScreen';
import Banner from '@/components/Banner';
import DateDisplay from '@/components/DateDisplay';

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
  let clean = '';

  const window = new JSDOM('').window;
  const purify = DOMPurify(window);

  if (post?.content) {
    clean = purify.sanitize(post?.content, {
      USE_PROFILES: { html: true },
      ADD_ATTR: ['target'],
    });
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className='flex flex-col items-center gap-5 mb-28'>
      {post?.banner && (
        <Banner
          src={post?.banner}
          alt={meta?.imageAlt}
          caption={post?.caption}
        />
      )}
      <div
        className={`flex flex-col text-center items-center my-8 ${
          !post?.banner ? 'mt-16' : ''
        }`}
      >
        <h1 className='font-black'>{post?.title}</h1>
        <DateDisplay dateValue={post?.publishedAt} />
      </div>
      <article
        className='min-h-[300px] mt-12 w-full prose dark:prose-invert prose-pre:whitespace-pre-wrap prose-pre:break-words prose-pre:overflow-x-hidden
        prose-p:mb-12 prose-p:text-xl prose-p:leading-[3rem]'
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    </main>
  );
}
