import React from 'react'

import { Consumer } from '../containers/Global'

const Sun = ({ toggleUnits, weather, weatherFail, metric, loading }) => (
  <div>
    {loading
      ? null
      : [
          new Date(weather.sys.sunrise * 1000).toLocaleDateString(),
          new Date(weather.sys.sunset * 1000).toLocaleDateString()
        ]}
  </div>
)

export default () => <Consumer>{Sun}</Consumer>
