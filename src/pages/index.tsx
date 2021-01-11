import React from 'react'
import Head from 'next/head'

import { Container, Imagem, ContainerButtom } from '../styles/pages/Home'
import DivButton from '../components/Button'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Juan Pablo</title>
      </Head>

      <Imagem
        src="https://avatars3.githubusercontent.com/u/59495901?v=4"
        alt="Juan Pablo"
      />
      <h1>Juan Pablo</h1>
      <p>
        Estudante de ciência da computação. focado no desenvolvimento de
        front-end. Apaixonado por fazer coisas!
      </p>
      <ContainerButtom>
        <DivButton text="Face" params="Só avo" />
        <DivButton text="Twitter" params="Falo umas merdas aqui!" />
        <DivButton text="Insta" params="posto foto" />
      </ContainerButtom>
    </Container>
  )
}

export default Home
