import React from 'react'

import { Consumer } from '../containers/Global'
import { formatWeather } from '../containers/Formatter'
import Slider from './Slider'

const Weather = ({
  datetime,
  temperature,
  description,
  windSpeed,
  tempUnit,
  windUnit,
  toggleUnits
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
      <Slider
        left="metric"
        right="imperial"
        onClick={toggleUnits}
        initial={tempUnit === '°F'}
      />
      <div>{datetime}</div>
    </div>
  </div>
)

export default () => <Consumer>{formatWeather(Weather)}</Consumer>
