import Head from 'next/head'
import clsx from 'clsx'

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
