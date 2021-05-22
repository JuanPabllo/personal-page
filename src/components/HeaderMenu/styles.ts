import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;
  height: 100px;
`

export const Imagem = styled.img`
  cursor: pointer;
  border-radius: 100%;

  width: 6%;
`

export const ContainerMenu = styled.div`
  display: flex;
  gap: 16px;
`

export const Menu = styled.span`
  text-decoration: none;
  border: 2px #ccd6f6 solid;
  padding: 8px;
  border-radius: 1rem;
  color: #ccd6f6;
  :hover {
    cursor: pointer;
    color: #64ffda;
    border: 2px #64ffda solid;
  }
`
