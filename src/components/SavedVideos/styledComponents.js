import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const FeaturesAndSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SavedVideosHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ebebeb' : '#424242')};
  padding: 20px 20px 20px 60px;
`
export const SavedVideosIconContainer = styled.div`
  border-radius: 50px;
  background-color: ${props => (props.lightTheme ? '#e2e8f0' : '#181818')};
  display: flex;
  flex-direction: center;
  align-items: center;
  padding: 20px;
`
export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  margin-left: 10px;
`
export const SavedVideosListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 20px;
`
export const SavedListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 10px;
`
export const SavedImage = styled.img`
  width: 30%;
`
export const SavedVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const SavedVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  margin-bottom: 0px;
`
export const SavedVideoChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ViewCountYearsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -20px;
  margin-bottom: 0px;
`

export const VideoViweCount = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
  margin-top: 0x;
`
export const YearsAgoBgContiner = styled.div`
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
  font-size: 18px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
export const SavedVideosName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
