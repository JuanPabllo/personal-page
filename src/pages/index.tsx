import React from 'react'
import Header from '../components/Header'

import { Container, Imagem, ContainerButtom } from '../styles/pages/Home'
import CardPrincipal from '../components/CardPrincipal'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Imagem
        src="https://avatars3.githubusercontent.com/u/59495901?v=4"
        alt="Juan Pablo"
      />
      <p>
        Meu nome é Juan Pablo, sou um desenvolvedor Front-end e um amante de
        open source
      </p>

      <ContainerButtom>
        <CardPrincipal
          text="Sobre mim"
          params="Descubra um pouco sobre mim."
          link="/404"
        />
        <CardPrincipal
          text="GitHub"
          params="Veja todos os meus projetos pessoais."
          link="https://github.com/JuanPabllo"
        />
        <CardPrincipal
          text="Artigos"
          params="Veja artigos de tecnologia que publiquei no Dev to."
          link="https://dev.to/juanpabllo"
        />
        <CardPrincipal
          text="Instagram"
          params="Local onde você pode acompanhar meu dia a dia."
          link="https://www.instagram.com/juan_pablloreal/"
        />
        <CardPrincipal
          text="Twitter"
          params="Aqui posto sobre tecnologia, mas nem sempre."
          link="https://twitter.com/Juan_Pabl00o"
        />
        <CardPrincipal
          text="Recomendações"
          params="Algumas dicas, algumas não úteis."
          link="/404"
        />
      </ContainerButtom>
    </Container>
  )
}

export default Home
