export const Home = () => {
  return (
    <main className="min-h-screen py-8 px-0 flex flex-col  gap-4 justify-center items-center">
      <h1 className="text-3xl font-bold underline">
        Next.js + TanStack Query Tips
      </h1>

      <div className="flex items-center justify-center flex-wrap max-w-3xl gap-2">
        <a
          href="https://nextjs.org/docs"
          className="p-6 text-left no-underline border rounded w-2/3"
        >
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="p-6 text-left no-underline border rounded w-2/3"
        >
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className="p-6 text-left no-underline border rounded w-2/3"
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 text-left no-underline border rounded w-2/3"
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
};
