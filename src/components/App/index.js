import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Weather from '../Weather'
import Sun from '../Sun'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Weather} />
      <Route exact path="/weather" component={Weather} />
      <Route path="/sun" component={Sun} />
    </div>
  </Router>
)

export default App
