import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = { index: 0 }
  }

  render() {
    return (
      <div className="Navigation">
        {this.props.location.pathname === '/weather' ? (
          <Link to="/sun">Get sunset and sunrise times</Link>
        ) : (
          <Link to="/weather">Get the weather</Link>
        )}
      </div>
    )
  }
}

export default withRouter(Navigation)
