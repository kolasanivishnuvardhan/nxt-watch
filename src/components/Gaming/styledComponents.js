import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const FeaturesAndGamingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const GamingHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.lightTheme ? '#ebebeb' : '#424242')};
`
export const YoutubeGamingIconContainer = styled.div`
  display: flex;
  justify-context: center;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#e2e8f0' : '#181818')};
  border-radius: 50px;
`
export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  margin-left: 10px;
`
export const GamingVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
export const GaminVideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 10px;
`
export const GamingImage = styled.img`
  width: 100%;
  borer-radius: 4px;
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.lightTheme ? ' #0f0f0f' : '#ffffff')};
`
export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
  margin-top: 0px;
`
export const NoSearchResultsFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const NoResultsImage = styled.img`
  width: 40%;
`
export const NoSearchResultsFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
export const NoSearchResultsFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 218x;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`

export const RetryBtn = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  background-color: #4f46e5;
  border: solid 1px #4f46e5;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 25px 10px 25px;
  border-radius: 4px;
`
