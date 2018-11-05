import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/reddit/configureStore'
import AsyncApp from './containers/reddit/AsyncApp'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}