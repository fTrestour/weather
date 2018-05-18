import React, { Component, createContext } from 'react'

import { getBigCityWeather } from '../apis/OpenWeatherMap'

const defaultContext = {
  weather: {},
  loading: true,
  weatherFail: false,
  metric: true
}

const Context = createContext(defaultContext)
export const Consumer = Context.Consumer

class Global extends Component {
  constructor(props) {
    super(props)
    this.state = defaultContext
  }

  updateData() {
    this.setState({ loading: true }, () =>
      getBigCityWeather('Paris', this.state.metric)
        .then(({ data }) => this.setState({ weather: data, loading: false }))
        .catch(error => {
          this.setState({ weatherFail: true })
          console.error(error)
        })
    )
  }

  componentDidMount() {
    this.updateData()
  }

  toggleUnits() {
    // To make sure "change units" button spam works
    // a functional setState is better
    // When the state is mutatated, data is fetched again
    this.setState(oldState => ({ metric: !oldState.metric }), this.updateData)
  }

  render() {
    return (
      <Context.Provider
        value={{
          updateData: this.updateData.bind(this),
          toggleUnits: this.toggleUnits.bind(this),
          ...this.state
        }}>
        <div className="Global">{this.props.children}</div>
      </Context.Provider>
    )
  }
}

export default Global
