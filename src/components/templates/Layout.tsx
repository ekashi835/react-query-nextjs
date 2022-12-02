import type { ReactNode } from 'react'
import { Navi } from '@/components/organisms/Navi'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'mx-auto w-full'}>
      <Navi />
      {children}
    </div>
  )
}
