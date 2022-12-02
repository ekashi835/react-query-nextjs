import Head from 'next/head'

import { Home } from '@/features/home/components'

export default function PageHome() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </>
  )
}
