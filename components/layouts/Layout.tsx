import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props{
  children: ReactNode,
  title: string
}

export const Layout: FC<Props> = ({ children, title}) => {
  return (
    <>
      <Head> 
        <title>{title}</title>
      </Head>

      <nav>
        <Navbar/>
      </nav>

      <main style={{ padding: '20px 50px'}}>
        {children}
      </main>
    </>
  )
}
