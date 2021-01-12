import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

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
        <Link href="/about">
          <DivButton text="Sobre mim" params="Descubra um pouco sobre mim." />
        </Link>

        <DivButton
          text="GitHub"
          params="Veja todos os meus projetos pessoais."
        />
        <DivButton
          text="Artigos"
          params="Veja artigos de tecnologia que publiquei no Dev to."
        />
        <DivButton
          text="Instagram"
          params="Local onde você pode acompanhar meu dia a dia."
        />
        <DivButton
          text="Twitter"
          params="Aqui posto sobre tecnologia, mas nem sempre."
        />
        <DivButton
          text="Recomendações"
          params="Algumas dicas, algumas não úteis."
        />
      </ContainerButtom>
    </Container>
  )
}

export default Home
