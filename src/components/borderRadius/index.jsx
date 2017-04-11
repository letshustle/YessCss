import React, {propTypes} from 'react';
import {Link} from 'react-router';
import ClassNames from 'classnames';
import ServerLink from '../serverLink';
import FontAwesome from 'react-fontawesome';
import Switch from 'react-toggle-switch'
import $ from 'jquery';

import Single from '../single';
import Color from '../color';
import SingleDropDown from '../singleDropDown';

class BorderRadius extends React.Component {
    constructor(props) {
        super(props);
        var diffParam = props.ivalue.split(" ");    
        this.state = {
                borderTopLeftRadius: diffParam[0],
                borderTopRightRadius: diffParam[1],
                borderBottomLeftRadius: diffParam[2],
                borderBottomRightRadius: diffParam[2],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleChange = (type, event) => {
       
        console.log("box-change-handler",type);
        var valueBox = "";
        switch (type) {
            case "borderTopLeftRadius":
                this.setState({borderTopLeftRadius: event.target.value});
                valueBox =  event.target.value +" "+this.state.borderTopRightRadius+" "+this.state.borderBottomLeftRadius+" "+this.state.borderBottomRightRadius;
                break;
            case "borderTopRightRadius":
                this.setState({borderTopRightRadius: event.target.value});
                valueBox = this.state.borderTopLeftRadius+" "+ event.target.value+" "+this.state.borderBottomLeftRadius+" "+this.state.borderBottomRightRadius;
                break;
            case "borderBottomLeftRadius":
                this.setState({borderBottomLeftRadius: event.target.value});
                valueBox = this.state.borderTopLeftRadius+" "+this.state.borderTopRightRadius+" "+ event.target.value+" "+this.state.borderBottomRightRadius;
                break;
            case "borderBottomRightRadius":
                this.setState({borderBottomRightRadius: event.target.value});
                valueBox = this.state.borderTopLeftRadius+" "+this.state.borderTopRightRadius+" "+this.state.borderBottomLeftRadius+" "+ event.target.value;
                break;
            default:
                break;
        }
        
        this.props.func(this.props.propname, {target:{value:valueBox}});
        console.log("component value ",event.target.value);
        
    }
    _handleCollapse(){
        this.setState({isBoxShadow: (!this.state.isBoxShadow)}); 
        this.refs.collapseButton.click();
        if (this.state.isBoxShadow){
            event.target.value = "";
            this.props.func(this.props.propname, event);
        }else{
            event.target.value = this.state.borderTopLeftRadius+" "+this.state.borderTopRightRadius+" "+this.state.borderBottomLeftRadius+" "+this.state.borderBottomRightRadius;
            this.props.func(this.props.propname, event);
        }
        
    }

    render() {
        return (
            <div className="ccollapse ">
                <div className="heading">
                    <div className="title block">
                        <div className = "big">
                            <a ref="collapseButton" data-toggle="collapse" data-parent="#accordion" href={"#"+this.props.propname}>{this.props.name}</a>
                        </div>
                        <div className = "small" >
                            <Switch  onClick={() => { this._handleCollapse() }} on={this.state.isBoxShadow}/>
                        </div>
                    </div>
                </div>
                <div id={this.props.propname} className="panel-collapse collapse">
                   
                <Single  name="Top-Left"      propname="borderTopLeftRadius" ivalue={this.state.borderTopLeftRadius} func={this.handleChange}></Single>
                <Single  name="Top-Right"     propname="borderTopRightRadius" ivalue={this.state.borderTopRightRadius} func={this.handleChange}></Single>
                <Single name="Bottom-Right" propname="borderBottomRightRadius" ivalue={this.state.borderBottomRightRadius} func={this.handleChange}></Single>
                <Single name="Bottom-Left"  propname="borderBottomLeftRadius" ivalue={this.state.borderBottomLeftRadius} func={this.handleChange}></Single>  

                </div>
            </div>
        );
    }
};

BorderRadius.propTypes = {
    
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname:  React.PropTypes.string,
}


BorderRadius.defaultProps = {

    ivalue: "0px 0px 0px 0px",
}


export default BorderRadius;
