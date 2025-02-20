import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import Context from '../../context'
import {
  FeaturesBgContainer,
  FeaturesListContainer,
  FeaturesListItem,
  ContactUsSection,
  ContactUsHeading,
  ContactUsLogosContainer,
  ContactUsLogo,
  ContactUsDescription,
  FeaturesItemButton,
  ActiveIcon,
} from './styledComponents'

const featuresTabConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

class Features extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {lightTheme, activeTabId, changeActiveTabId} = value

          const renderFeatureItem = (id, IconComponent, text, path) => {
            const isActive = activeTabId === id

            return (
              <FeaturesListItem
                key={id}
                dark={!lightTheme}
                active={isActive}
                onClick={() => changeActiveTabId(id)}
              >
                <Link to={path} style={{textDecoration: 'none'}}>
                  <FeaturesItemButton
                    dark={!lightTheme}
                    active={isActive}
                    lightTheme={lightTheme}
                  >
                    <ActiveIcon as={IconComponent} active={isActive} />
                    {text}
                  </FeaturesItemButton>
                </Link>
              </FeaturesListItem>
            )
          }

          return (
            <FeaturesBgContainer dark={!lightTheme}>
              <FeaturesListContainer>
                {renderFeatureItem(
                  featuresTabConstants.home,
                  IoMdHome,
                  'Home',
                  '/',
                )}
                {renderFeatureItem(
                  featuresTabConstants.trending,
                  HiFire,
                  'Trending',
                  '/trending',
                )}
                {renderFeatureItem(
                  featuresTabConstants.gaming,
                  SiYoutubegaming,
                  'Gaming',
                  '/gaming',
                )}
                {renderFeatureItem(
                  featuresTabConstants.savedVideos,
                  RiMenuAddLine,
                  'Saved videos',
                  '/saved-videos',
                )}
              </FeaturesListContainer>

              <ContactUsSection>
                <ContactUsHeading dark={!lightTheme}>
                  CONTACT US
                </ContactUsHeading>
                <ContactUsLogosContainer>
                  <ContactUsLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactUsLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactUsLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactUsLogosContainer>
                <ContactUsDescription dark={!lightTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDescription>
              </ContactUsSection>
            </FeaturesBgContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Features
