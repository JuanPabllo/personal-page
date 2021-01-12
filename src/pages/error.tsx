import React from 'react'
import Header from '../components/Header'

import { Container } from '../styles/pages/Home'

import Loading from '../assets/loading.svg'

const About: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1>Ops... Essa página está em desenvolvimento</h1>
      <Loading />
    </Container>
  )
}

export default About
