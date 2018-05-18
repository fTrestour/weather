import React from 'react'

import { Consumer } from '../containers/Global'
import { formatWeather } from '../containers/Formatter'

// Icons:
// https://iconstore.co/icons/rns-weather-icons/
// Codes doc : https://openweathermap.org/weather-conditions

const Weather = ({
  datetime,
  temperature,
  description,
  windSpeed,
  tempUnit,
  windUnit
}) => (
  <div className="Weather">
    <div className="Weather__Description">
      <div>{description}</div>
    </div>
    <div className="Weather__Details">
      <div>{temperature + tempUnit}</div>
      <div>{windSpeed + windUnit}</div>
    </div>
    <div className="Weather__Datetime">
      <div>{datetime}</div>
    </div>
  </div>
)

export default () => <Consumer>{formatWeather(Weather)}</Consumer>
