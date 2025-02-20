import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import Context from '../../context'
import Features from '../Features'
import Header from '../Header'
import {
  VideoDetailsBgContainer,
  FeaturesAndVideoDetailsContainer,
  VideoDetailsContainer,
  SuccessViewBgContainer,
  ResponsiceContainer,
  Title,
  VideoMetaContainer,
  VideoInfoBar,
  ViewsCount,
  YearsAgo,
  VideoEngagementSection,
  LikeBtn,
  Seperator,
  ChannelLogoNameContainer,
  ChannelLogo,
  ChannelNameSubscribersContainer,
  ChannelName,
  SubscribersCount,
  Description,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    activeButton: null,
  }

  componentDidMount() {
    this.getVideoDetailsList()
  }

  getVideoDetailsList = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const modifiedData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: modifiedData,
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

  onHandleBtnClick = buttonType => {
    this.setState(prevState => ({
      activeButton: prevState.activeButton === buttonType ? null : buttonType,
    }))
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
      <RetryBtn onClick={this.getVideoDetailsList}>Retry</RetryBtn>
    </NoSearchResultsFoundContainer>
  )

  renderSuccessView = () => (
    <Context.Consumer>
      {value => {
        const {lightTheme, savedVideosList, addVideoToSavedVideosList} = value
        const {videoDetails, activeButton} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          profileImageUrl,
          name,
          subscriberCount,
          description,
          id,
        } = videoDetails

        const isVideoSaved = savedVideosList.some(video => video.id === id)
        return (
          <SuccessViewBgContainer>
            <ResponsiceContainer>
              <ReactPlayer
                url={videoUrl}
                width="900px"
                height="360px"
                controls
              />
            </ResponsiceContainer>
            <Title lightTheme={lightTheme}>{title}</Title>
            <VideoMetaContainer>
              <VideoInfoBar>
                <ViewsCount>{viewCount} views</ViewsCount>
                <YearsAgo>{`${this.getYear(publishedAt)} ago`}</YearsAgo>
              </VideoInfoBar>
              <VideoEngagementSection>
                <LikeBtn
                  isActive={activeButton === 'like'}
                  onClick={() => this.onHandleBtnClick('like')}
                  aria-label="Like"
                >
                  <AiOutlineLike /> Like
                </LikeBtn>
                <LikeBtn
                  isActive={activeButton === 'dislike'}
                  onClick={() => this.onHandleBtnClick('dislike')}
                  aria-label="Dislike"
                >
                  <BiDislike /> Dislike
                </LikeBtn>

                <LikeBtn
                  isActive={isVideoSaved}
                  onClick={() => addVideoToSavedVideosList(videoDetails)}
                >
                  <CgPlayListAdd /> {isVideoSaved ? 'Saved' : 'Save'}
                </LikeBtn>
              </VideoEngagementSection>
            </VideoMetaContainer>
            <Seperator />
            <ChannelLogoNameContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <ChannelNameSubscribersContainer>
                <ChannelName lightTheme={lightTheme}>{name}</ChannelName>
                <SubscribersCount>
                  {subscriberCount} subscribers
                </SubscribersCount>
              </ChannelNameSubscribersContainer>
            </ChannelLogoNameContainer>
            <Description>{description}</Description>
          </SuccessViewBgContainer>
        )
      }}
    </Context.Consumer>
  )

  renderVideoDetails = lightTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView(lightTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.in_progress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {({lightTheme, savedVideosList, addVideoToSavedVideosList}) => (
          <VideoDetailsBgContainer lightTheme={lightTheme}>
            <Header />
            <FeaturesAndVideoDetailsContainer>
              <Features />
              <VideoDetailsContainer lightTheme={lightTheme}>
                {this.renderVideoDetails(
                  lightTheme,
                  savedVideosList,
                  addVideoToSavedVideosList,
                )}
              </VideoDetailsContainer>
            </FeaturesAndVideoDetailsContainer>
          </VideoDetailsBgContainer>
        )}
      </Context.Consumer>
    )
  }
}

export default VideoItemDetails
