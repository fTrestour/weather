import React from 'react'

import { Consumer } from '../containers/Global'
import { formatContainer } from '../containers/Formatter'

const Container = ({ updateData, toggleUnits, weatherGroup, children }) => (
  <div className="Screen">
    <div className={`Container Container--${weatherGroup}`}>{children}</div>
  </div>
)

export default ({ children }) => (
  <Consumer>{formatContainer(Container, children)}</Consumer>
)
