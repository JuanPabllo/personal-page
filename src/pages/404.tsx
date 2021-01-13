import React from 'react'
import Header from '../components/Header'

import { Container } from '../styles/pages/404'

import Loading from '../assets/loading.svg'
import Back from '../components/back/Back'

const About: React.FC = () => {
  return (
    <Container>
      <Header />
      <Back />
      <h1>Ops... Essa página não existe ou está em desenvolvimento!</h1>
      <Loading />
    </Container>
  )
}

export default About
