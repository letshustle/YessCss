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

class BoxShadow extends React.Component {
    constructor(props) {
        super(props);
        var diffParam = props.ivalue.split(" ");    
        this.state = {
                xOffset: diffParam[0],
                yOffset: diffParam[1],
                blur: diffParam[2],
                spread: diffParam[3],
                color: diffParam[4]
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleChange = (type, event) => {
       
        console.log("box-shadow-handler",type);
        var valueBox = "";
        switch (type) {
            case "xOffset":
                this.setState({xOffset: event.target.value});
                valueBox = event.target.value+" "+this.state.yOffset+" "+this.state.blur+" "+this.state.spread+" "+this.state.color;
                break;
            case "yOffset":
                this.setState({yOffset: event.target.value});
                valueBox = this.state.xOffset+" "+event.target.value+" "+this.state.blur+" "+this.state.spread+" "+this.state.color;
                break;
            case "blur":
                this.setState({blur: event.target.value});
                valueBox = this.state.xOffset+" "+this.state.yOffset+" "+event.target.value+" "+this.state.spread+" "+this.state.color;
                break;
            case "spread":
                this.setState({spread: event.target.value});
                valueBox = this.state.xOffset+" "+this.state.yOffset+" "+this.state.blur+" "+event.target.value+" "+this.state.color;
                break;
            case "color":
                this.setState({color: event.target.value});
                valueBox = this.state.xOffset+" "+this.state.yOffset+" "+this.state.blur+" "+this.state.spread+" "+event.target.value;
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
            event.target.value = this.state.xOffset+" "+this.state.yOffset+" "+this.state.blur+" "+this.state.spread+" "+this.state.color;
            this.props.func(this.props.propname, event);
        }
        
    }

    render() {
        return (
            <div className="ccollapse " key={this.props.name}>
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
                   


                <Single name="X offset" propname="xOffset" ivalue={this.state.xOffset} func={this.handleChange}></Single> 
                <Single name="Y offset" propname="yOffset" ivalue={this.state.yOffset} func={this.handleChange}></Single> 
                <Single name="Blur" propname="blur" ivalue={this.state.blur} func={this.handleChange}></Single> 
                <Single name="Spread" propname="spread" ivalue={this.state.spread} func={this.handleChange}></Single>  
                <Color name="Color" propname="color"  ivalue={this.state.color} func={this.handleChange} color={this.state.color}></Color>
                



                  

                </div>
            </div>
        );
    }
};

BoxShadow.propTypes = {
    
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname:  React.PropTypes.string,
}


BoxShadow.defaultProps = {

    ivalue: "0px 0px 0px 0px #333",
}


export default BoxShadow;
