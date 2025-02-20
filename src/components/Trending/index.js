import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import Context from '../../context'
import Features from '../Features'
import Header from '../Header'

import {
  TrendingBgContainer,
  FeaturesAndTrendingContaier,
  TrendingContainer,
  TrendingHeader,
  TrendingHeading,
  FireContainer,
  TrendingVideosContainer,
  VideoListItem,
  ProfileImageUrl,
  VideoDetailsContainer,
  VideoTitle,
  ThumbnailAndVideoDetailsContainer,
  VideoName,
  VideoViweCount,
  ViewCountYearsContainer,
  YearsAgoContainer,
  NoSearchResultsFoundContainer,
  NoResultsImage,
  NoSearchResultsFoundHeading,
  NoSearchResultsFoundDescription,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  failure: 'FAILURE',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: {}}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      console.log(modifiedData)
      this.setState({
        trendingVideos: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  getYear = publishedAt => {
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }

    return postedAt
  }

  renderSuccessView = lightTheme => {
    const {trendingVideos} = this.state
    return trendingVideos.map(eachVideo => {
      const {
        id,
        title,
        publishedAt,
        viewCount,
        profileImageUrl,
        thumbnailUrl,
        name,
      } = eachVideo
      return (
        <VideoListItem key={id}>
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <ThumbnailAndVideoDetailsContainer>
              <ProfileImageUrl src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <VideoTitle lightTheme={lightTheme}>{title}</VideoTitle>
                <VideoName>{name}</VideoName>
                <ViewCountYearsContainer>
                  <VideoViweCount>{viewCount}</VideoViweCount>

                  <YearsAgoContainer>
                    {`${formatDistanceToNowStrict(new Date(publishedAt))} ago`}
                  </YearsAgoContainer>
                </ViewCountYearsContainer>
              </VideoDetailsContainer>
            </ThumbnailAndVideoDetailsContainer>
          </Link>
        </VideoListItem>
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
      <RetryBtn onClick={this.getTrendingVideosList}>Retry</RetryBtn>
    </NoSearchResultsFoundContainer>
  )

  renderTrendingVideos = lightTheme => {
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
            <TrendingBgContainer data-testid="trending" lightTheme={lightTheme}>
              <Header />
              <FeaturesAndTrendingContaier>
                <Features />
                <TrendingContainer lightTheme={lightTheme}>
                  <TrendingHeader lightTheme={lightTheme}>
                    <FireContainer lightTheme={lightTheme}>
                      <HiFire style={{color: '#ff0000'}} />
                    </FireContainer>
                    <TrendingHeading lightTheme={lightTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeader>
                  <TrendingVideosContainer>
                    {this.renderTrendingVideos(lightTheme)}
                  </TrendingVideosContainer>
                </TrendingContainer>
              </FeaturesAndTrendingContaier>
            </TrendingBgContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
