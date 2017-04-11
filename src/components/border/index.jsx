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

class Border extends React.Component {
    constructor(props) {
        super(props);
        var diffParam = props.ivalue.split(" ");    
        this.state = {
                borderWidth: diffParam[0],
                borderType: diffParam[1],
                borderColor: diffParam[2],
               
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleChange = (type, event) => {
       
        console.log("box-change-handler",type);
        var valueBox = "";
        switch (type) {
            case "borderColor":
                this.setState({borderColor: event.target.value});
                valueBox = this.state.borderWidth+" "+this.state.borderType+" "+event.target.value;
                break;
            case "borderType":
                this.setState({borderType: event.target.value});
                valueBox = this.state.borderWidth+" "+event.target.value+" "+this.state.borderColor;
                break;
            case "borderWidth":
                this.setState({borderWidth: event.target.value});
                valueBox = event.target.value+" "+this.state.borderType+" "+this.state.borderColor;
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
            event.target.value = this.state.borderWidth+" "+this.state.borderType+" "+this.state.borderColor;
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
                   



                <Color name="Color" propname="borderColor"  ivalue={this.state.borderColor} func={this.handleChange} color={this.state.borderColor}></Color>
                <SingleDropDown name="Type" propname="borderType" ivalue={this.state.borderType} func={this.handleChange}></SingleDropDown>            
                <Single name="Width" propname="borderWidth" ivalue={this.state.borderWidth} func={this.handleChange}></Single>  



                  

                </div>
            </div>
        );
    }
};

Border.propTypes = {
    
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname:  React.PropTypes.string,
}


Border.defaultProps = {

    ivalue: "1px solid #000",
}


export default Border;
