import React from 'react'

import { Consumer } from '../containers/Global'

const Weather = ({ updateData, toggleUnits, weather, weatherFail, metric }) => (
  <div>
    <button onClick={toggleUnits}>Change unit</button>
    {JSON.stringify(weather)}

    <button onClick={updateData}>Update data</button>
  </div>
)

export default () => <Consumer>{Weather}</Consumer>
