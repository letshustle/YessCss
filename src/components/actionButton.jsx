import React, {propTypes} from 'react';
import ClassNames from 'classnames';
import Highlight from 'react-highlight';
import 'highlight.js/styles/agate.css';

class ActionButton extends React.Component {
    constructor(props) {
        super(props);       
    
    }


    shouldComponentUpdate(nextProps, nextState) {
        // if (nextState.value == this.refs.abc.value)
        //     return false;
        // else
            return true
    }

    _handleChange = (event) => {
      
        // this.props.func()
        this.setState({value:event.target.value});
    }
	handleClick = (event) => {

	    event.preventDefault()
	    this.props.func()
	    var el = event.target
	    console.log(el)
  	}
  	copyToClipboard = (e) => {
  		console.log('clicked')
        var textField = document.createElement('textarea')
        var code = JSON.stringify(this.props.boxStyle)
	    textField.innerText = code
	    document.body.appendChild(textField)
	    textField.select()
	    document.execCommand('copy')
	    alert("Code Copied")
	    textField.remove()
    }   
    render() {
        return (
      		<div>
		        <button onClick={this.handleClick} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#codeModal">View Code</button>
		        <div id="codeModal" className="modal fade" role="dialog">
		          <div className="modal-dialog">
		            <div className="modal-content">		             
		              <div className="modal-body">
		                <Highlight className='css'>
						  {JSON.stringify(this.props.boxStyle)}
						</Highlight>
		              </div>
		              <div className="modal-footer">
				        <button onClick={this.copyToClipboard} type="button" className="btn btn-default" data-dismiss="modal" >Copy to Clipboard</button>
				      </div>         
		            </div>
		          </div>
		        </div>
		     </div>

    	)
    }
};

ActionButton.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname: React.PropTypes.string,
    boxStyle: React.PropTypes.Object
}

export default ActionButton;
