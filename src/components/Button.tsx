import React from 'react'

import { Container, DivButton } from '../styles/pages/Button'

interface content {
  text: string
  params: string
}

const Button: React.FC<content> = ({ text, params }) => {
  return (
    <Container>
      <DivButton>
        <h1>{text}</h1>
        <p>{params}</p>
      </DivButton>
    </Container>
  )
}

export default Button
