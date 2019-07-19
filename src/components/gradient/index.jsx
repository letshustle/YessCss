import React, { propTypes } from 'react'
import { Link } from 'react-router'
import ClassNames from 'classnames'
import ServerLink from '../serverLink'
import Switch from 'react-toggle-switch'
import Color from '../color'
import $ from 'jquery'
import Arrow from '../arrow'
import Single from '../single'
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
    var valueBox = ''
    switch (type) {
      case 'right':
        this.setState({ angle: '90deg' })
        valueBox = '90deg' + ' ' + this.state.color1 + ' ' + this.state.color2
        break
      case 'down':
        this.setState({ angle: '180deg' })
        valueBox = '180deg' + ' ' + this.state.color1 + ' ' + this.state.color2
        break
      case 'left':
        this.setState({ angle: '270deg' })
        valueBox = '270deg' + ' ' + this.state.color1 + ' ' + this.state.color2
        break
      case 'up':
        this.setState({ angle: '0deg' })
        valueBox = '0deg' + ' ' + this.state.color1 + ' ' + this.state.color2
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

  checkActive (direction) {
    let directions = {
      up: '0deg',
      right: '90deg',
      left: '270deg',
      down: '180deg'
    }
    if (this.state.angle == directions[direction]) {
      return ' active'
    } else {
      return ''
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
          <div className='Grid-item single'>
            <div className='text'>Orientation</div>
            <Arrow
              className={'arrows' + this.checkActive('up')}
              direction='up'
              customClickEvent={this.handleChange.bind(this)}
            />
            <Arrow
              className={'arrows' + this.checkActive('right')}
              direction='right'
              customClickEvent={this.handleChange.bind(this)}
            />
            <Arrow
              className={'arrows' + this.checkActive('down')}
              direction='down'
              customClickEvent={this.handleChange.bind(this)}
            />
            <Arrow
              className={'arrows' + this.checkActive('left')}
              direction='left'
              customClickEvent={this.handleChange.bind(this)}
            />
          </div>
          <Color
            name='Color'
            propname='color1'
            ivalue={this.state.color1}
            func={this.handleChange}
            color={this.state.color1}
          />
          <Color
            name='Color'
            propname='color2'
            ivalue={this.state.color2}
            func={this.handleChange}
            color={this.state.color2}
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
