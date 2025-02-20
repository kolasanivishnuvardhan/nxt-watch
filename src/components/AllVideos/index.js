import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Context from '../../context'
import {
  AllVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  VideoItem,
  Thumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoTitle,
  ViewCountPublishedContainer,
  ViewCount,
  PublishedDate,
  NoSearchResultsFoundContainer,
  NoResultsImage,
  NoSearchResultsFoundHeading,
  NoSearchResultsFoundDescription,
  RetryBtn,
  FailureViewContainer,
  VideoName,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class AllVideos extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInputValue: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: modifiedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure, videosList: []})
    }
  }

  onChangeInputSearch = event => {
    this.setState({searchInputValue: event.target.value})
  }

  onClickSearchBtn = () => {
    const {searchInputValue} = this.state
    this.setState({searchInput: searchInputValue}, this.getVideosList)
  }

  renderSearchInput = lightTheme => {
    const {searchInputValue} = this.state
    return (
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search"
          dark={!lightTheme}
          onChange={this.onChangeInputSearch}
          value={searchInputValue}
        />
        <SearchButton
          dark={!lightTheme}
          data-testid="searchButton"
          onClick={this.onClickSearchBtn}
          type="button"
        >
          <IoIosSearch />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderSuccessView = lightTheme => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return (
        <NoSearchResultsFoundContainer>
          <NoResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoSearchResultsFoundHeading lightTheme={lightTheme}>
            No Search results found
          </NoSearchResultsFoundHeading>
          <NoSearchResultsFoundDescription lightTheme={lightTheme}>
            Try different key words or remove search filter
          </NoSearchResultsFoundDescription>
          <RetryBtn onClick={this.getVideosList}>Retry</RetryBtn>
        </NoSearchResultsFoundContainer>
      )
    }

    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id}>
            <Link
              to={`/videos/${eachVideo.id}`}
              style={{textDecoration: 'none'}}
            >
              <Thumbnail src={eachVideo.thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo
                  src={eachVideo.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <VideoTitle dark={!lightTheme}>{eachVideo.title}</VideoTitle>
                  <VideoName>{eachVideo.name}</VideoName>
                  <ViewCountPublishedContainer>
                    <ViewCount>{`${eachVideo.viewCount} views`}</ViewCount>
                    <PublishedDate>
                      {`${formatDistanceToNowStrict(
                        new Date(eachVideo.publishedAt),
                      )} ago`}
                    </PublishedDate>
                  </ViewCountPublishedContainer>
                </div>
              </VideoDetailsContainer>
            </Link>
          </VideoItem>
        ))}
      </VideosList>
    )
  }

  renderFailureView = lightTheme => (
    <FailureViewContainer>
      <NoResultsImage
        src={
          lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <NoSearchResultsFoundHeading lightTheme={lightTheme}>
        Oops! Something Went Wrong
      </NoSearchResultsFoundHeading>
      <NoSearchResultsFoundDescription lightTheme={lightTheme}>
        We are having some trouble to complete your request. Please try again.
      </NoSearchResultsFoundDescription>
      <RetryBtn onClick={this.getVideosList}>Retry</RetryBtn>
    </FailureViewContainer>
  )

  renderAllVideos = lightTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView(lightTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(lightTheme)
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
            <AllVideosContainer lightTheme={lightTheme}>
              {this.renderSearchInput(lightTheme)}
              {this.renderAllVideos(lightTheme)}
            </AllVideosContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default AllVideos
