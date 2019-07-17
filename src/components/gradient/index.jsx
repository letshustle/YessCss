import React, { propTypes } from 'react'
import { Link } from 'react-router'
import ClassNames from 'classnames'
import ServerLink from '../serverLink'
import FontAwesome from 'react-fontawesome'
import Switch from 'react-toggle-switch'
import $ from 'jquery'

import Single from '../single'
import Color from '../color'
import SingleDropDown from '../singleDropDown'

class Gradient extends React.Component {
  constructor (props) {
    super(props)
    var diffParam = props.ivalue.split(' ')
    this.state = {
      angle: diffParam[0],
      color1: diffParam[1],
      color2: diffParam[2]
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  handleChange = (type, event) => {
    console.log('box-change-handler', type)
    var valueBox = ''
    switch (type) {
      case 'angle':
        this.setState({ angle: event.target.value })
        valueBox = event.target.value + ' ' + this.state.color1 + ' ' + this.state.color2
        break
      case 'color1':
        this.setState({ color1: event.target.value })
        valueBox = this.state.angle + ' ' + event.target.value + ' ' + this.state.color2
        break
      case 'color2':
        this.setState({ color2: event.target.value })
        valueBox = valueBox = this.state.angle + ' ' + this.state.color1 + ' ' + event.target.value
        break
      default:
        break
    }

    this.props.func(this.props.propname, { target: { value: valueBox } })
    console.log('component value ', event.target.value)
  }
  _handleCollapse () {
    this.setState({ isGradient: !this.state.isGradient })
    this.refs.collapseButton.click()
    if (this.state.isGradient) {
      event.target.value = ''
      this.props.func(this.props.propname, event)
    } else {
      event.target.value = this.state.angle + ' ' + this.state.color1 + ' ' + this.state.color2
      this.props.func(this.props.propname, event)
    }
  }

  render () {
    return (
      <div className='ccollapse'>
        <div className='heading'>
          <div className='title block'>
            <div className='big'>
              <a
                style={{ display: 'none' }}
                ref='collapseButton'
                data-toggle='collapse'
                data-parent='#accordion'
                href={'#' + this.props.propname}
              >
                {this.props.name}
              </a>
              <span>{this.props.name}</span>
            </div>
            <div className='small'>
              <Switch
                onClick={() => {
                  this._handleCollapse()
                }}
                on={this.state.isGradient}
              />
            </div>
          </div>
        </div>
        <div id={this.props.propname} className='panel-collapse collapse'>
          <Single
            type={this.props.type}
            name='Angle'
            propname='angle'
            ivalue={this.state.angle}
            func={this.handleChange}
          />
          <Single
            type={this.props.type}
            name='First Color'
            propname='color1'
            ivalue={this.state.color1}
            func={this.handleChange}
          />
          <Single
            type={this.props.type}
            name='Second Color'
            propname='color2'
            ivalue={this.state.color2}
            func={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

Gradient.propTypes = {
  name: React.PropTypes.string,
  ivalue: React.PropTypes.string,
  func: React.PropTypes.func,
  propname: React.PropTypes.string,
  type: React.PropTypes.string
}

Gradient.defaultProps = {
  ivalue: '0deg #fff #000'
}

export default Gradient
