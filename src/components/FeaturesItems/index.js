// FeaturesItems.js
import {Component} from 'react'
import Context from '../../context'
import PremiumVideos from '../PremiumVideos'
import AllVideos from '../AllVideos'
import {FeaturesItemBgContainer} from './styledComponents'

class FeaturesItems extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <FeaturesItemBgContainer dark={!lightTheme}>
              <PremiumVideos />
              <AllVideos />
            </FeaturesItemBgContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default FeaturesItems
