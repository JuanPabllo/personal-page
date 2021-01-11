import React from 'react'

import { DivButton } from '../styles/pages/Button'

interface content {
  text: string
  params: string
}

const Button: React.FC<content> = ({ text, params }) => {
  return (
    <DivButton>
      <h1>{text}</h1>
      <p>{params}</p>
    </DivButton>
  )
}

export default Button
