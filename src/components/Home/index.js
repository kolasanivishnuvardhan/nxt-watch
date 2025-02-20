import {Component} from 'react'
import Header from '../Header'
import Features from '../Features'
import FeaturesItems from '../FeaturesItems'
import Context from '../../context'
import {HomeContainer, HomeDetailsContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <HomeContainer data-testid="home" lightTheme={lightTheme}>
              <Header />
              <HomeDetailsContainer>
                <Features />
                <FeaturesItems />
              </HomeDetailsContainer>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
