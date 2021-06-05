import styled from 'styled-components'

export const Card = styled.a`
  text-decoration: none;
  color: #edf2f7;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 340px;
  height: 260px;
  background: transparent;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid rgb(255, 255, 255);
  box-shadow: rgb(255 255 255 / 14%) 0px 2px 10px;

  transition: color 0.1s ease 0s, background-color 0.1s ease 0s,
    box-shadow 0.3s ease 0s;
  border-radius: 15px;
  transition: 0.7s;
  cursor: pointer;

  :hover {
    transform: translateY(-5px) translateZ(0px);
    color: #171923;
    background: #e2e8f0;
  }
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`

export const Description = styled.span`
  font-size: 18px;
  font-weight: 500;
`

export const ContainerTags = styled.div`
  position: absolute;
  bottom: 20px;
`

export const Tags = styled.span`
  font-size: 14px;
  font-weight: 500;
`
