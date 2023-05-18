import Card from '@/components/card/Card';
import LoadingScreen from '@/components/loading/LoadingScreen';

import { apolloClient } from '@/lib/client';

import formatDate from '@/utils/formatDate';

import { GET_ARTICLES_QUERY } from './schema';

export const revalidate = 0;

async function Home() {
  return (
    <main className='flex flex-col items-center'>
      {<h5>No articles to display.</h5>}
    </main>
  );
}

export default Home;
