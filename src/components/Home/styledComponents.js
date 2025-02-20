// styledComponents.js
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
  width: 100%;
`

export const HomeDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
