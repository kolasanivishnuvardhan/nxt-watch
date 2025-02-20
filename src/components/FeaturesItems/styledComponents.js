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
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
  margin-bottom: 5px;
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

export const ContactUsHeading = styled.h1`
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

export const FeaturesItemButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#0f0f0f')};
`

export const FeaturesItemBgContainer = styled.div`
  width: 80%;
  min-height: 90vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
