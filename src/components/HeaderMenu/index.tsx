import Link from 'next/link'
import Header from '../Header'
import * as s from './styles'
import logo from '../../assets/logo.svg'

export default function HeaderMenu() {
  return (
    <s.Container>
      <Header />
      <Link href="/">
        <s.Imagem
          src="https://avatars3.githubusercontent.com/u/59495901?v=4"
          alt="Juan Pablo"
        />
      </Link>
      <s.ContainerMenu>
        <Link href="/sobre">
          <s.Menu>Sobre</s.Menu>
        </Link>
        <Link href="/blog">
          <s.Menu>Blog</s.Menu>
        </Link>
        <Link href="/contato">
          <s.Menu>Contato</s.Menu>
        </Link>
      </s.ContainerMenu>
    </s.Container>
  )
}
