// styledComponents.js
import styled from 'styled-components'

export const PremiumVideosContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  position: relative;
`

export const PremiumContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const CloseButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`

export const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
  font-size: 24px;
  color: #475569;
  cursor: pointer;
  border: none;
`

export const Logo = styled.img`
  width: 40%;
`

export const PremiumText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #0f0f0f;
`

export const GetItNowButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: solid 1px #0f0f0f;
  padding: 5px;
  font-family: 'Roboto';
  font-size: 18px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #0f0f0f;
    color: white;
  }
`

export const AllVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#181818')};
`

export const BgAllVideosDark = styled.div`
  background-color: #0f0f0f;
`

export const BgAllVideosLight = styled.div`
  background-color: #f8fafc;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SearchInput = styled.input`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  border: solid 1px #616e7c;
  color: #909090;
  outline: none;
  width: 33%;
  padding: 10px;
  border-radius: 2px;
  font-family: 'Roboto';
  margin-left: 47px;
`

export const SearchButton = styled.button`
  padding: 9.4px 25px;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.dark ? '#212121' : '#ebebeb')};
  border-color: #616e7c;
  color: ${props => (props.dark ? '#616e7c' : '#000000')};
`

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 32%;
  margin: 5px;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  margin-top: -10px;
`

export const ChannelLogo = styled.img`
  width: 15%;
`

export const VideoTitle = styled.p`
  width: 100%;
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const VideoName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #94a3b8;
`

export const ViewCountPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: -10px;
  padding-left: 0px;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #94a3b8;
  list-style-type: none;
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #94a3b8;
  margin-left: 20px;
  list-style-type: disc;
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
export const FailureViewContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content-center;
  align-items:center;
  wisth:100%;
`
