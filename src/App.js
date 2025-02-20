import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Context from './context'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const featuresTabConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

class App extends Component {
  state = {
    savedVideosList: [],
    lightTheme: true,
    activeTabId: featuresTabConstants.home,
  }

  changeActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  addVideoToSavedVideosList = video => {
    this.setState(prevState => {
      const isVideoSaved = prevState.savedVideosList.some(
        item => item.id === video.id,
      )

      if (isVideoSaved) {
        return {
          savedVideosList: prevState.savedVideosList.filter(
            item => item.id !== video.id,
          ),
        }
      }
      return {savedVideosList: [...prevState.savedVideosList, video]}
    })
  }

  changeLightTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  render() {
    const {savedVideosList, lightTheme, activeTabId} = this.state
    console.log(`${activeTabId}in app`)

    return (
      <Context.Provider
        value={{
          savedVideosList,
          changeLightTheme: this.changeLightTheme,
          lightTheme,
          activeTabId,
          changeActiveTabId: this.changeActiveTabId,
          addVideoToSavedVideosList: this.addVideoToSavedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
