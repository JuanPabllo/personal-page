import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Logo from '../assets/welcome.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Juan Pablo</title>
      </Head>

      <Logo />
      <h1>Em breve novidades!</h1>
      <p>Site pessoal feito por Juan Pablo.</p>
    </Container>
  )
}

export default Home
