import styled from 'styled-components'

export const VideoDetailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const FeaturesAndVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  margin-top: 0px;
  padding: 20px;
`
export const SuccessViewBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ResponsiceContainer = styled.div`
  width: 100%;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  margin-top: 5px;
`
export const VideoMetaContainer = styled.div`
  display: flex;
  flex-direcion: row;
  justify-content: space-between;
  width: 100%;
`

export const VideoInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ViewsCount = styled.p`
  font-family: 'Roboto';
  font-sze: 18px;
  color: #64748b;
`
export const YearsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const YearsAgo = styled.p`
  list-style-type: disc;
  color: #64748b;
  font-family: Roboto;
  font-size: 16px;
  margin-left: 15px;
`

export const VideoEngagementSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LikeBtn = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-family: 'Roboto';
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const Seperator = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #94a3b8;
  border-color: #94a3b8;
  border-style: solid;
  outline: none;
`
export const ChannelLogoNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`
export const ChannelLogo = styled.img`
  width: 5%;
`
export const ChannelNameSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 15px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.lightTheme ? '#606060' : ' #f1f1f1')};
`
export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-top: 2px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-left: 58px;
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
