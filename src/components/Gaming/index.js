import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Features from '../Features'
import Context from '../../context'
import {
  GamingBgContainer,
  FeaturesAndGamingContainer,
  GamingContainer,
  GamingHeader,
  YoutubeGamingIconContainer,
  GamingHeading,
  GamingVideosContainer,
  GaminVideoListItem,
  GamingImage,
  GameTitle,
  GameViewCount,
  NoResultsImage,
  NoSearchResultsFoundHeading,
  NoSearchResultsFoundDescription,
  RetryBtn,
  NoSearchResultsFoundContainer,
} from './styledComponents'

const apiStatusConstants = {
  failure: 'FAILURE',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const modifiedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = lightTheme => {
    const {gamingVideos} = this.state
    console.log(gamingVideos)
    return gamingVideos.map(eachVideo => {
      const {id, title, thumbnailUrl, viewCount} = eachVideo
      return (
        <GaminVideoListItem key={id}>
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <GamingImage src={thumbnailUrl} alt="video thumbnail" />
            <GameTitle lightTheme={lightTheme}>{title}</GameTitle>
            <GameViewCount>{viewCount} Watching Worldwide</GameViewCount>
          </Link>
        </GaminVideoListItem>
      )
    })
  }

  renderFailureView = lightTheme => (
    <NoSearchResultsFoundContainer>
      <NoResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="failure view"
      />
      <NoSearchResultsFoundHeading lightTheme={lightTheme}>
        Oops! Something Went Wrong
      </NoSearchResultsFoundHeading>
      <NoSearchResultsFoundDescription lightTheme={lightTheme}>
        We are having some trouble to complete your request. Please try again.
      </NoSearchResultsFoundDescription>
      <RetryBtn onClick={this.getGamingVideos}>Retry</RetryBtn>
    </NoSearchResultsFoundContainer>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderGamingVideos = lightTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView(lightTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView(lightTheme)
      case apiStatusConstants.in_progress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <GamingBgContainer data-testid="gaming" lightTheme={lightTheme}>
              <Header />
              <FeaturesAndGamingContainer>
                <Features />
                <GamingContainer>
                  <GamingHeader lightTheme={lightTheme}>
                    <YoutubeGamingIconContainer lightTheme={lightTheme}>
                      <SiYoutubegaming style={{color: ' #ff0000'}} />
                    </YoutubeGamingIconContainer>
                    <GamingHeading lightTheme={lightTheme}>
                      Gaming
                    </GamingHeading>
                  </GamingHeader>
                  <GamingVideosContainer>
                    {this.renderGamingVideos(lightTheme)}
                  </GamingVideosContainer>
                </GamingContainer>
              </FeaturesAndGamingContainer>
            </GamingBgContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
