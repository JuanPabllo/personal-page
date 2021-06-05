import HeaderMenu from '../components/HeaderMenu'
import CardPostBlog from '../components/CardPostsBlog'
import * as s from '../styles/pages/Blog'

export default function Blog() {
  return (
    <>
      <HeaderMenu />
      <s.Container>
        <CardPostBlog />
      </s.Container>
    </>
  )
}
