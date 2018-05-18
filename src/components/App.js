import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Global from '../containers/Global'
import Weather from './Weather'
import Sun from './Sun'

const App = () => (
  <Router>
    <Global>
      <Route exact path="/" component={Weather} />
      <Route exact path="/weather" component={Weather} />
      <Route path="/sun" component={Sun} />
    </Global>
  </Router>
)

export default App
