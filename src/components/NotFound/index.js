import Header from '../Header'
import Features from '../Features'
import Context from '../../context'
import {
  NotFoundBgContainer,
  FeaturesAndNotFoundContainer,
  NotFoundContainer,
  NotFoundImage,
  PageNotFound,
  NotFoundDescription,
} from './styledComponent'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <NotFoundBgContainer lightTheme={lightTheme}>
          <Header />
          <FeaturesAndNotFoundContainer>
            <Features />
            <NotFoundContainer>
              <NotFoundImage
                src={
                  lightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <PageNotFound lightTheme={lightTheme}>
                Page Not Found
              </PageNotFound>
              <NotFoundDescription lightTheme={lightTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </FeaturesAndNotFoundContainer>
        </NotFoundBgContainer>
      )
    }}
  </Context.Consumer>
)

export default NotFound
