import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Logo from '../assets/lighthouse.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>

      <Logo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Juan Pablo.</p>
    </Container>
  )
}

export default Home
