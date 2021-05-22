import React from 'react'

import * as s from '../styles/pages/Home'
import CardPrincipal from '../components/CardPrincipal'
import HeaderMenu from '../components/HeaderMenu'

const Home: React.FC = () => {
  return (
    <s.Container>
      <HeaderMenu />

      <h1>Olá, meu nome é</h1>
      <h2>Juan Pablo</h2>
      <h3>Eu construo coisas para a web.</h3>
      <p>
        Sou um desenvolvedor Front-end autodidata, focado em React.JS e amante
        de open source.
      </p>

      {/* <CardPrincipal
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
        text="Blog"
        params="Veja artigos de tecnologia que publiquei no Dev.to"
        link="/blog"
      /> */}
    </s.Container>
  )
}

export default Home
