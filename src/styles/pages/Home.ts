import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 18px;
    margin: 8px;

    font-size: 3.5rem;
    line-height: 1.5;
    font-weight: bold;
  }
  p {
    margin-bottom: 18px;
    font-size: 1.3rem;
    line-height: 1.5;
  }
`

export const Imagem = styled.img`
  border-radius: 50%;

  margin-top: 280px;
  width: 200px;
`
export const ContainerButtom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
