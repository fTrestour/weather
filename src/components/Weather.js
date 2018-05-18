import React from 'react'

import { Consumer } from '../containers/Global'

const Weather = ({ weather, weatherFail }) => (
  <div>
    <code>{JSON.stringify(weather)}</code>
  </div>
)

export default () => <Consumer>{Weather}</Consumer>
