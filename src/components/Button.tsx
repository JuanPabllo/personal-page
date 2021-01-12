import React from 'react'
import Link from 'next/link'

import { DivButton } from '../styles/pages/Button'

interface content {
  text: string
  params: string
  link?: string
}

const Button: React.FC<content> = ({ text, params, link = '/' }) => {
  return (
    <Link href={link} scroll={false}>
      <DivButton>
        <h3>{text}</h3>
        <p>{params}</p>
      </DivButton>
    </Link>
  )
}

export default Button
