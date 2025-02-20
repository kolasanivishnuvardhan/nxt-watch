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
