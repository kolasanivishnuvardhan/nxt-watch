import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import Context from '../../context'
import {
  PremiumVideosContainer,
  PremiumContentContainer,
  CloseButtonContainer,
  CloseButton,
  Logo,
  PremiumText,
  GetItNowButton,
} from './styledComponents'

class PremiumVideos extends Component {
  state = {isVisible: true}

  onCloseBtn = () => {
    this.setState({isVisible: false})
  }

  render() {
    const {isVisible} = this.state

    if (!isVisible) {
      return null
    }

    return (
      <Context.Consumer>
        {() => (
          <PremiumVideosContainer data-testid="banner">
            <CloseButtonContainer>
              <CloseButton onClick={this.onCloseBtn} data-testid="close">
                <IoIosClose />
              </CloseButton>
            </CloseButtonContainer>
            <PremiumContentContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <PremiumText>
                Buy Nxt Watch Premium Prepaid plans with UPI
              </PremiumText>
              <GetItNowButton>GET IT NOW</GetItNowButton>
            </PremiumContentContainer>
          </PremiumVideosContainer>
        )}
      </Context.Consumer>
    )
  }
}

export default PremiumVideos
