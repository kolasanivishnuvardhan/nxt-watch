import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import {IoMoonSharp, IoSunnyOutline} from 'react-icons/io5'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import Context from '../../context'
import {
  NavContainer,
  NavContent,
  Logo,
  NavDetailsContainer,
  ThemeButton,
  LightDarkIcon,
  ProfileImg,
  LogoutButton,
  ConfirmLogoutContainer,
  ConfirmLogoutDescription,
  CancelAndConfirmBtnContainer,
  CancelBtn,
  ConfirmBtn,
} from './StyledComponents'

class Header extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {lightTheme, changeLightTheme} = value

          const toggleLightDarkTheme = () => {
            changeLightTheme()
          }

          const onClickLogoutBtn = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <NavContainer lightTheme={lightTheme}>
              <NavContent>
                <Link to="/">
                  <Logo
                    src={
                      lightTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <NavDetailsContainer>
                  <ThemeButton
                    onClick={toggleLightDarkTheme}
                    data-testid="theme"
                  >
                    <LightDarkIcon lightTheme={lightTheme}>
                      {lightTheme ? <IoMoonSharp /> : <IoSunnyOutline />}
                    </LightDarkIcon>
                  </ThemeButton>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    overlayStyle={{
                      backgroundColor: lightTheme
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(0, 0, 0, 0.8)',
                    }}
                    trigger={
                      <LogoutButton lightTheme={lightTheme}>
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <>
                        <ConfirmLogoutContainer lightTheme={lightTheme}>
                          <ConfirmLogoutDescription lightTheme={lightTheme}>
                            Are you sure, you want to logout?
                          </ConfirmLogoutDescription>
                          <CancelAndConfirmBtnContainer>
                            <CancelBtn type="button" onClick={() => close()}>
                              Cancel
                            </CancelBtn>
                            <ConfirmBtn
                              type="button"
                              onClick={onClickLogoutBtn}
                            >
                              Confirm
                            </ConfirmBtn>
                          </CancelAndConfirmBtnContainer>
                        </ConfirmLogoutContainer>
                      </>
                    )}
                  </Popup>
                </NavDetailsContainer>
              </NavContent>
            </NavContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Header)
