import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr 3fr;
`

export const HeaderName = styled.div`
  background: #333333;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  font-size: 1.8rem;
  line-height: 1.4;
  padding: 30px;
`

export const Content = styled.div`
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.7;

  padding: 30px;
`

export const LastReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.7;

  padding: 20px;
`
