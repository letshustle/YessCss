import React from 'react'
import Highlight from 'react-highlight'
import 'highlight.js/styles/agate.css'
let cssCode = 'something:wrong'
class ActionButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      copied: false
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    // if (nextState.value == this.refs.abc.value)
    //     return false;
    // else
    return true
  }

  _handleChange = event => {
    // this.props.func()
    this.setState({ value: event.target.value })
  }
  handleClick = event => {
    event.preventDefault()
    // this.props.func()
    var el = event.target
    console.log(el)
  }
  copyToClipboard = e => {
    console.log('clicked')
    var textField = document.createElement('textarea')
    // var code = JSON.stringify("width:"+this.props.cssStyle.width+";"+
    // "height:"+this.props.cssStyle.height+";"+
    // "background:"+this.props.cssStyle.background+";"+
    // "border-radius:"+this.props.cssStyle.borderRadius+";"+
    // "border:"+this.props.cssStyle.border+";"+
    // "opacity:"+this.props.cssStyle.opacity+";"+
    // "box-shadow:"+this.props.cssStyle.boxShadow+";")
    // var code = JSON.stringify(cssCode)
    var code = cssCode
    code = code.replace(/\s+/g, ' ').trim()
    console.log(code)
    textField.innerText = code // .replace (/(^")|("$)/g, '')
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    // alert("Code Copied")
    this.setState({ copied: true })
    textField.remove()
  }
  render () {
    if (this.props.name == 'boxGenerator') {
      cssCode =
        'width:' +
        this.props.cssStyle.width +
        'px;' +
        '\n' +
        'height:' +
        this.props.cssStyle.height +
        'px;' +
        '\n' +
        'background:' +
        this.props.cssStyle.background +
        ';' +
        '\n' +
        'background-Image: linear-gradient(' +
        this.props.cssStyle.backgroundImage.split(' ').join(', ') +
        ')' +
        ';' +
        '\n' +
        'border-radius:' +
        this.props.cssStyle.borderRadius +
        ';' +
        '\n' +
        'border:' +
        this.props.cssStyle.border +
        ';' +
        '\n' +
        'opacity:' +
        this.props.cssStyle.opacity +
        ';' +
        '\n' +
        'box-shadow:' +
        this.props.cssStyle.boxShadow +
        ';'
    } else if (this.props.name == 'textGenerator') {
      cssCode =
        'color:' +
        this.props.cssStyle.color +
        ';' +
        '\n' +
        'font-size:' +
        this.props.cssStyle.fontSize +
        'px;' +
        '\n' +
        'font-weight:' +
        this.props.cssStyle.fontWeight +
        ';' +
        '\n' +
        'font-style:' +
        this.props.cssStyle.fontStyle +
        ';' +
        '\n' +
        'letter-spacing:' +
        this.props.cssStyle.letterSpacing +
        'px;' +
        ';' +
        '\n' +
        'border:' +
        'none'
    } else if (this.props.name == 'buttonGenerator') {
      cssCode =
        'color:' +
        this.props.cssStyle.color +
        ';' +
        '\n' +
        'font-size:' +
        this.props.cssStyle.fontSize +
        'px;' +
        '\n' +
        'font-weight:' +
        this.props.cssStyle.fontWeight +
        ';' +
        '\n' +
        'font-style:' +
        this.props.cssStyle.fontStyle +
        ';' +
        '\n' +
        'border:' +
        this.props.cssStyle.border +
        ';' +
        '\n' +
        'font-style:' +
        this.props.cssStyle.fontStyle +
        ';' +
        '\n' +
        'background:' +
        this.props.cssStyle.background +
        ';' +
        '\n' +
        'border-radius:' +
        this.props.cssStyle.borderRadius +
        ';' +
        '\n' +
        'padding:' +
        this.props.cssStyle.padding +
        ';'
    } else if (this.props.name == 'anchorGenerator') {
      cssCode =
        'border-radius:' +
        this.props.cssStyle.borderRadius +
        ';' +
        '\n' +
        'color:' +
        this.props.cssStyle.color +
        ';' +
        '\n' +
        'background:' +
        this.props.cssStyle.background +
        ';' +
        '\n' +
        'border:' +
        this.props.cssStyle.border +
        ';' +
        '\n' +
        'font-size:' +
        this.props.cssStyle.fontSize +
        ';' +
        '\n' +
        'font-weight:' +
        this.props.cssStyle.fontWeight +
        ';' +
        '\n' +
        'font-style:' +
        this.props.cssStyle.fontStyle +
        ';'
    }
    return (
      <div>
        <div style={{ position: 'fixed', bottom: 0, width: 360, right: 0 }}>
          <button
            style={{ borderRadius: 0, background: '#2998ff' }}
            onClick={this.handleClick}
            type='button'
            className='btn btn-info btn-lg btn-block'
            data-toggle='modal'
            data-target='#codeModal'
          >
            View Code
          </button>
        </div>
        <div id='codeModal' className='modal fade' role='dialog'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-body'>
                <Highlight className='css'>{cssCode}</Highlight>
              </div>
              <div className='modal-footer' style={{ border: 'none' }}>
                <button
                  style={{ borderRadius: 5, background: '#2998ff' }}
                  onClick={this.copyToClipboard}
                  type='button'
                  className='btn btn-info btn-lg btn-block'
                >
                  {this.state.copied ? 'Copied' : 'Copy to Clipboard'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ActionButton.propTypes = {
  name: React.PropTypes.string,
  ivalue: React.PropTypes.string,
  // func: React.PropTypes.func,
  propname: React.PropTypes.string,
  // boxStyle: React.PropTypes.Object,
  cssStyle: React.PropTypes.Object
}

export default ActionButton
