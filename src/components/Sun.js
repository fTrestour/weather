import React from 'react'

import { Consumer } from '../containers/Global'
import { formatSun } from '../containers/Formatter'

const Sun = ({ sunrise, sunset }) => (
  <div className="Sun">{[sunrise, sunset]}</div>
)

export default () => <Consumer>{formatSun(Sun)}</Consumer>
