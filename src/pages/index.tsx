import Head from 'next/head'

import styles from '@/pages/index.module.css'
import clsx from 'clsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        className={clsx('flex min-h-screen flex-col items-center justify-center gap-4 py-8 px-0')}
      >
        <h1 className='text-3xl font-bold underline'>Next.js + TanStack Query Tips</h1>

        <div className='flex max-w-3xl flex-wrap items-center justify-center gap-2'>
          <a
            href='https://nextjs.org/docs'
            className='w-2/3 rounded border p-6 text-left no-underline'
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='w-2/3 rounded border p-6 text-left no-underline'
          >
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className='w-2/3 rounded border p-6 text-left no-underline'
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
            className='w-2/3 rounded border p-6 text-left no-underline'
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
