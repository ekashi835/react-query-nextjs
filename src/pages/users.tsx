import Head from 'next/head'
import { Users } from '@/features/user/components/Users'

export default function PageUsers() {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Users />
    </>
  )
}
