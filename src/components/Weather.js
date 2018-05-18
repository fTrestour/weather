import React from 'react'

import { Consumer } from '../containers/Global'

const Weather = ({
  updateData,
  toggleUnits,
  weather,
  weatherFail,
  metric,
  loading
}) => (
  <div>
    <button onClick={toggleUnits}>Change unit</button>
    {loading ? null : weather.main.temp}

    <button onClick={updateData}>Update data</button>
  </div>
)

export default () => <Consumer>{Weather}</Consumer>
