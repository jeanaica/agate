import Card from '@/components/card/Card';
import LoadingScreen from '@/components/LoadingScreen';

import { apolloClient } from '@/lib/client';

import { GET_ARTICLES_QUERY } from './schema';

export const revalidate = 0;

async function Home() {
  const { loading, data } = await apolloClient.query({
    query: GET_ARTICLES_QUERY,
    fetchPolicy: 'no-cache',
    variables: { status: 'PUBLISHED' },
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ul className='flex flex-col items-center'>
      {data?.posts?.length ? (
        data?.posts?.map((post: Post) => (
          <Card
            key={post?.createdAt}
            slug={post?.meta?.slug}
            title={post?.title}
            description={post?.meta?.description}
            publishedAt={post?.publishedAt}
          />
        ))
      ) : (
        <h5>No articles to display.</h5>
      )}
    </ul>
  );
}

export default Home;
