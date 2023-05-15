'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className='flex flex-col text-justify justify-center border-y py-8 md:text-center'>
      <h5>Unable to fetch data.</h5>
      <button
        className='opacity-60 hover:italic hover:opacity-80 w-[200px] self-center'
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
