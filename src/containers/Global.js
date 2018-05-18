import React, { Component, createContext } from 'react'

import { getBigCityWeather } from '../apis/OpenWeatherMap'

const defaultContext = {
  weather: {},
  weatherFail: false
}

const Context = createContext(defaultContext)
export const Consumer = Context.Consumer

class Global extends Component {
  constructor(props) {
    super(props)
    this.state = defaultContext
  }

  componentDidMount() {
    getBigCityWeather('Paris')
      .then(({ data }) => this.setState({ weather: data }))
      .catch(error => {
        this.setState({ weatherFail: true })
        console.error(error)
      })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="Global">{this.props.children}</div>
      </Context.Provider>
    )
  }
}

export default Global
