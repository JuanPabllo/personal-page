import { useEffect, useState } from 'react'
import axios from 'axios'
import * as s from './styles'

export default function CardPostBlog() {
  const [post, setPost] = useState([])

  const fetchDatas = async () => {
    const response = await axios.get(
      'https://dev.to/api/articles?username=juanpabllo'
    )
    const data = await response.data
    setPost(data)
  }

  useEffect(() => {
    fetchDatas()
  }, [])

  return (
    <>
      {post?.map(item => {
        return (
          <s.Card
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <s.Container>
              <s.Title>{item.title}</s.Title>
              <s.Description>{item.description}</s.Description>
              <s.ContainerTags>
                <s.Tags>{item.tags}</s.Tags>
              </s.ContainerTags>
            </s.Container>
          </s.Card>
        )
      })}
    </>
  )
}
