import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Features from '../Features'
import Context from '../../context'

import {
  SavedVideosBgContainer,
  FeaturesAndSavedVideosContainer,
  SavedVideosContainer,
  SavedVideosHeader,
  SavedVideosIconContainer,
  SavedVideosHeading,
  SavedVideosListItemsContainer,
  SavedListItem,
  SavedImage,
  SavedVideoDetailsContainer,
  SavedVideoTitle,
  YearsAgoContainer,
  VideoViweCount,
  ViewCountYearsContainer,
  NoResultsImage,
  NoSearchResultsFoundHeading,
  NoSearchResultsFoundDescription,
  NoSearchResultsFoundContainer,
  SavedVideosName,
} from './styledComponents'

class SavedVideos extends Component {
  getYear = publishedAt => {
    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }

    return postedAt
  }

  renderSavedVideosList = (savedVideosList, lightTheme) =>
    savedVideosList.map(eachVideo => {
      const {id, title, name, publishedAt, viewCount, thumbnailUrl} = eachVideo
      return (
        <SavedListItem key={id}>
          <SavedImage src={thumbnailUrl} alt="video thumbnail" />
          <SavedVideoDetailsContainer>
            <SavedVideoTitle lightTheme={lightTheme}>{title}</SavedVideoTitle>
            <SavedVideosName lightTheme={lightTheme}>{name}</SavedVideosName>
            <ViewCountYearsContainer>
              <VideoViweCount>{viewCount} Views</VideoViweCount>

              <YearsAgoContainer>
                {`${this.getYear(publishedAt)} ago`}
              </YearsAgoContainer>
            </ViewCountYearsContainer>
          </SavedVideoDetailsContainer>
        </SavedListItem>
      )
    })

  renderSavedVieosContainer = (savedVideosList, lightTheme) => {
    if (savedVideosList.length === 0) {
      return (
        <NoSearchResultsFoundContainer>
          <NoResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSearchResultsFoundHeading lightTheme={lightTheme}>
            No saved videos found
          </NoSearchResultsFoundHeading>
          <NoSearchResultsFoundDescription lightTheme={lightTheme}>
            You can save your videos while watching them
          </NoSearchResultsFoundDescription>
        </NoSearchResultsFoundContainer>
      )
    }
    return (
      <SavedVideosContainer>
        <SavedVideosHeader lightTheme={lightTheme}>
          <SavedVideosIconContainer lightTheme={lightTheme}>
            <HiFire style={{color: '#ff0000'}} />
          </SavedVideosIconContainer>
          <SavedVideosHeading lightTheme={lightTheme}>
            Saved Videos
          </SavedVideosHeading>
        </SavedVideosHeader>
        <SavedVideosListItemsContainer>
          {this.renderSavedVideosList(savedVideosList, lightTheme)}
        </SavedVideosListItemsContainer>
      </SavedVideosContainer>
    )
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {lightTheme, savedVideosList} = value
          console.log(savedVideosList)
          return (
            <SavedVideosBgContainer
              lightTheme={lightTheme}
              data-testid="savedVideos"
            >
              <Header />
              <FeaturesAndSavedVideosContainer>
                <Features />
                {this.renderSavedVieosContainer(savedVideosList, lightTheme)}
              </FeaturesAndSavedVideosContainer>
            </SavedVideosBgContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SavedVideos
