import React from 'react'

import { Consumer } from '../containers/Global'
import { formatWeather } from '../containers/Formatter'

// Icons:
// https://iconstore.co/icons/rns-weather-icons/

const Weather = ({ datetime, temperature, description, windSpeed }) => (
  <div className="Weather">
    <div className="Weather__Description">{description}</div>
    <div className="Weather__Temperature">{temperature}</div>
    <div className="Weather__Windspeed">{windSpeed}</div>
    <div className="Weather__Datetime">{datetime}</div>
  </div>
)

export default () => <Consumer>{formatWeather(Weather)}</Consumer>
