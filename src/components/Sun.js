import React from 'react'

import { Consumer } from '../containers/Global'
import { formatSun } from '../containers/Formatter'

const Sun = ({ sunrise, sunset, time, date }) => (
  <div className="Sun">
    <div className="Sun__Details">
      <div className="Sun__Details__Sunrise">{sunrise}</div>
      <div className="Sun__Details__Time">{time}</div>
      <div className="Sun__Details__Sunset">{sunset}</div>
    </div>
    <div className="Sun__Date">
      <div>{date}</div>
    </div>
  </div>
)

export default () => <Consumer>{formatSun(Sun)}</Consumer>
