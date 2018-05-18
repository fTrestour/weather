import React from 'react'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: props.initial || false
    }
  }

  onClick() {
    this.setState(
      oldState => ({
        checked: !oldState.checked
      }),
      this.props.onClick()
    )
  }

  render() {
    return (
      <div className="Slider">
        <div>{this.props.left}</div>
        <span
          className={this.state.checked ? 'right' : ''}
          onClick={this.onClick.bind(this)}
        />
        <div>{this.props.right}</div>
      </div>
    )
  }
}
