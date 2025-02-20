import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const FeaturesAndTrendingContaier = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#0f0f0f')};
`
export const TrendingHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ebebeb' : '#424242')};
  padding: 20px 20px 20px 60px;
`
export const FireContainer = styled.div`
  border-radius: 50px;
  background-color: ${props => (props.lightTheme ? '#e2e8f0' : '#181818')};
  display: flex;
  flex-direction: center;
  align-items: center;
  padding: 20px;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  margin-left: 10px;
`
export const TrendingVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`
export const VideoListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px;
`
export const ProfileImageUrl = styled.img`
  width: 50%;
`

export const ThumbnailAndVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : ' #ffffff')};
`
export const VideoName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
`
export const ViewCountYearsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoViweCount = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
`
export const YearsAgoBgContiner = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const YearsAgoContainer = styled.p`
  list-style-type: disc;
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
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
