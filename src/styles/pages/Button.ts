import styled from 'styled-components'

export const DivButton = styled.div`
  width: 320px;
  height: 150px;

  border: solid rgba(51, 51, 51, 0.1) 2px;
  border-radius: 10px;
  padding: 18px;
  margin: 12px;

  cursor: pointer;
  transition: 0.2s;

  background: ${props => props.theme.colors.background};
  box-shadow: 8px #333333;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 8px;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-left: 8px;
  }

  &:hover {
    border: solid #107fd2 2px;
    color: #107fd2;
  }
`
