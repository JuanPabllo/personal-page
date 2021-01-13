import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow-x: hidden !important;

  h1 {
    color: ${props => props.theme.colors.primary};

    font-size: 2rem;
    line-height: 1.5;
    font-weight: bold;
  }
`
