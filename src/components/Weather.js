import React from 'react'

import { Consumer } from '../containers/Global'

const Weather = ({ toggleUnits, weather, weatherFail, metric, loading }) => (
  <div>
    {loading
      ? null
      : [
          new Date(weather.dt * 1000).toLocaleDateString(),
          weather.main.temp,
          weather.weather[0].description,
          weather.wind.speed
        ]}
  </div>
)

export default () => <Consumer>{Weather}</Consumer>
