'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className='flex flex-col text-justify items-center justify-center min-h-[70vh] mt-16md:text-center'>
      <div className='border-y py-8 w-full text-center'>
        <h5>Unable to fetch article.</h5>
        <button
          className='opacity-60 hover:italic hover:opacity-80 w-[200px] self-center'
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
