import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
