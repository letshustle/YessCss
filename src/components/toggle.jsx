import React from 'react'
import ClassNames from 'classnames';

const {bool, object, string, func, number, oneOfType} = React.PropTypes

const Toggle = React.createClass({
    getTitle() {
        return 'Toggle';
    },
    getInitialState () {
        return {
            toggle_status: false,
        };
    },
    propTypes: {
        status: bool,
        onTrue: func,
        onFalse: func
    },
    componentDidMount() {
        if (this.props.status){

            this.setState({toggle_status:this.props.status});
        }

    },
    onToggle: function(){

        if (this.state.toggle_status){

            if(this.props.onFalse)
            this.props.onFalse();
        }else{

            if(this.props.onTrue)
            this.props.onTrue();
        }
        this.setState({toggle_status:!this.state.toggle_status});
    },
    render () {
        return (

            <div style={{display:"inline-block"}}>
                <input onClick={this.onToggle}
                       className='tgl tgl-ios'
                       id='cb2'
                       type='checkbox'
                       checked={this.state.toggle_status}></input>
                <label className='tgl-btn' htmlFor='cb2'></label>
            </div>

        )
    }

})

export default Toggle