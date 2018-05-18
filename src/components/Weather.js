import React from 'react'

import { Consumer } from '../containers/Global'
import { formatWeather } from '../containers/Formatter'

const Weather = ({ datetime, temperature, description, windSpeed }) => (
  <div>{[datetime, temperature, description, windSpeed]}</div>
)

export default () => <Consumer>{formatWeather(Weather)}</Consumer>
