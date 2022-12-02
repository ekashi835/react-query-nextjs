import '@/styles/global.css'
import type { AppProps } from 'next/app'

import { Layout } from '@/components/templates/Layout'

import { QueryClientProvider } from '@/provider/QueryClientProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === 'development') {
    // dynamic import でファイルを読み込んで MSW を有効にする
    if (typeof window !== 'undefined') {
      const { worker } = require('@/mocks/browser')
      worker.start()
    }
  }

  return (
    <QueryClientProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
