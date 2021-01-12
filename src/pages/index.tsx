import React from 'react'
import Header from '../components/Header'

import { Container, Imagem, ContainerButtom } from '../styles/pages/Home'
import DivButton from '../components/Button'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

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
        <DivButton
          text="Sobre mim"
          params="Descubra um pouco sobre mim."
          link="/error"
        />
        <DivButton
          text="GitHub"
          params="Veja todos os meus projetos pessoais."
          link="https://github.com/JuanPabllo"
        />
        <DivButton
          text="Artigos"
          params="Veja artigos de tecnologia que publiquei no Dev to."
          link="https://dev.to/juanpabllo"
        />
        <DivButton
          text="Instagram"
          params="Local onde você pode acompanhar meu dia a dia."
          link="https://www.instagram.com/juan_pablloreal/"
        />
        <DivButton
          text="Twitter"
          params="Aqui posto sobre tecnologia, mas nem sempre."
          link="https://twitter.com/Juan_Pabl00o"
        />
        <DivButton
          text="Recomendações"
          params="Algumas dicas, algumas não úteis."
          link="/error"
        />
      </ContainerButtom>
    </Container>
  )
}

export default Home
