import type { ReactNode } from 'react'
import { QueryClientProvider as Provider, QueryClient } from '@tanstack/react-query'

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  return <Provider client={queryClient}>{children}</Provider>
}
