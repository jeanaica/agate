'use client';

import Button from '@/components/Button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className='flex flex-col text-justify items-center justify-center min-h-[70vh] mt-16md:text-center'>
      <div className='flex flex-col justify-center border-y py-8 w-full text-center'>
        <h3>Unable to fetch data.</h3>
        <Button className='w-full md:w-1/4 mt-4' onClick={reset}>
          Try again
        </Button>
      </div>
    </main>
  );
}
