import React from 'react'
import { Component, PropTypes } from 'react'
// import ColorsPicker from 'react-colors-picker';
import ColorPicker from 'react-color-picker'
import FontAwesome from 'react-fontawesome'

import Single from '../components/single'
import Color from '../components/color'
import SimpleDropDown from '../components/simpleDropDown'
import ActionButton from '../components/actionButton'
import Credits from '../components/credits'

class TextGenerator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      text: 'YessCSS',
      color: '#FF6500',
      fontWeight: '400',
      fontSize: '32',
      fontStyle: 'normal',
      letterSpacing: '1',
      value: 0
    }
  }

  handleChangeComplete = color => {
    console.log(color)
    this.setState({ background: color.hex })
  }

  handleChange = (type, event) => {
    console.log(type)
    switch (type) {
      case 'text':
        this.setState({ text: event.target.value })
        break
      case 'color':
        this.setState({ color: event.target.value })
        break
      case 'fontStyle':
        this.setState({ fontStyle: event.target.value })
        break
      case 'fontWeight':
        this.setState({ fontWeight: event.target.value })
        break
      case 'fontSize':
        this.setState({ fontSize: event.target.value })
        break
      case 'letterSpacing':
        this.setState({ letterSpacing: event.target.value })
        break

      default:
        break
    }
  }
  onDrag (color, c) {
    this.setState({
      color
    })
  }
  getSidePanel = () => {
    let text_style = {
      color: this.state.color,
      fontSize: this.state.fontSize,
      fontWeight: this.state.fontWeight,
      fontStyle: this.state.fontStyle,
      letterSpacing: this.state.letterSpacing,
      border: 'none'
    }
    return (
      <div className='Grid  nopadding'>
        <Single type='text' name='Text' propname='text' ivalue={this.state.text} func={this.handleChange} />
        <Color
          name='Color'
          propname='color'
          ivalue={this.state.color}
          func={this.handleChange}
          color={this.state.color}
        />
        <Single
          type='number'
          name='Font Size'
          propname='fontSize'
          ivalue={this.state.fontSize}
          func={this.handleChange}
        />
        <SimpleDropDown
          name='Font Weight'
          propname='fontWeight'
          ivalue={this.state.fontWeight}
          func={this.handleChange}
          list={['100', '200', '300', '400', '500', '600', '700']}
        />
        <SimpleDropDown
          name='Font Style'
          propname='fontStyle'
          ivalue={this.state.fontStyle}
          func={this.handleChange}
          list={['normal', 'oblique', 'italic']}
        />
        <Single
          type='number'
          name='Letter Spacing'
          propname='letterSpacing'
          ivalue={this.state.letterSpacing}
          func={this.handleChange}
        />
        <ActionButton cssStyle={text_style} name={'textGenerator'} />
      </div>
    )
  }
  render () {
    let text_style = {
      color: this.state.color,
      fontSize: this.state.fontSize,
      fontWeight: this.state.fontWeight,
      fontStyle: this.state.fontStyle,
      letterSpacing: this.state.letterSpacing,
      border: 'none'
    }
    return (
      <div className='holder '>
        <div className='subject'>
          <div className='element subject' style={text_style}>
            {this.state.text}
          </div>
          {this.state.error}
          <Credits />
        </div>
        <div className='sidebar'>{this.getSidePanel()}</div>
      </div>
    )
  }
}

export default TextGenerator
