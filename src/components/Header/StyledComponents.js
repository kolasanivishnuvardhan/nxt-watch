import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#313131')};
`

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
`

export const Logo = styled.img`
  width: 50%;
  cursor: pointer;
  padding-left: 20px;
`

export const NavDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20%;
  align-items: center;
`

export const ThemeButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const LightDarkIcon = styled.div`
  width: 10%;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`

export const ProfileImg = styled.img`
  width: 15%;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  border-style: solid;
  border-width: 1.5px;
  padding: 5px 15px 5px 15px;
  color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  border-color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
`
export const ConfirmLogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
  width: 100%;
  border-radius: 8px;
`

export const ConfirmLogoutDescription = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.lightTheme ? '#00306e' : '#ffffff')};
`
export const CancelAndConfirmBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CancelBtn = styled.button`
  outline: none;
  cursor: pointer;
  color: #64748b;
  border: solid 1px #64748b;
  padding: 5px 10px 5px 10px;
  background-color: transparent;
  margin-right: 10px;
  font-family: 'Roboto';
  font-size: 18px;
`
export const ConfirmBtn = styled.button`
  outline: none;
  cursor: pointer;
  color: #ffffff;
  border: solid 1px #64748b;
  padding: 5px 10px 5px 10px;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 18px;
`
