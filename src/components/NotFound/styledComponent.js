import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const FeaturesAndNotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NotFoundImage = styled.img`
  width: 40%;
`
export const PageNotFound = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.lightTheme ? '#000000' : '#94a3b8')};
`
