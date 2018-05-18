import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Global from '../containers/Global'
import Container from './Container'
import Navigation from './Navigation'
import Weather from './Weather'
import Sun from './Sun'

const App = () => (
  <Router>
    <Global>
      <Container>
        <Route exact path="/" component={Weather} />
        <Route path="/weather" component={Weather} />
        <Route path="/sun" component={Sun} />
        <Navigation />
      </Container>
    </Global>
  </Router>
)

export default App
