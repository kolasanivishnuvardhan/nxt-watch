import React from 'react'

const Context = React.createContext({
  savedVideosList: [],
  activeTabId: 'HOME',
  lightTheme: true,
  changeLightTheme: () => {},
  changeActiveTabId: () => {},
  addVideoToSavedVideosList: () => {},
})

export default Context
