// styledComponents.js
import styled from 'styled-components'

export const FeaturesBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 10px;
  height: 90vh;
  margin-top: 0px;
  justify-content: space-between;
  background-color: ${props => (props.dark ? '#313131' : '#ffffff')};
`

export const FeaturesListContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
  margin-top: 5px;
`

export const FeaturesListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  background-color: ${props => (props.active ? '  #909090' : 'transparent')};
  margin-bottom: 5px;
  box-sizing: border-box;
`

export const IconSize = styled.div`
  height: 25px;
  width: 25px;
  margin: 5px 30px 5px 5px;
`

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`

export const ContactUsLogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ContactUsLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`

export const FeaturesItemButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  font-size: 18px;
  font-family: 'Roboto';
  cursor: pointer;
  padding: 10px;
`
export const ActiveIcon = styled.div`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  color: ${props => (props.active ? 'red' : 'inherit')};
`
