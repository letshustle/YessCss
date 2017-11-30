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

class Padding extends React.Component {
    constructor(props) {
        super(props);
        var diffParam = props.ivalue.split(" ");
        this.state = {
                paddingTop: diffParam[0],
                paddingRight: diffParam[1],
                paddingBottom: diffParam[2],
                paddingLeft: diffParam[3],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleChange = (type, event) => {

        console.log("padding-change-handler",type);
        var valueBox = "";
        switch (type) {
            case "paddingTop":
                this.setState({paddingTop: event.target.value});
                valueBox = event.target.value+"px "+this.state.paddingRight+"px "+this.state.paddingBottom+"px "+this.state.paddingLeft+"px "
                break;
            case "paddingRight":
                this.setState({paddingRight: event.target.value});
                valueBox = this.state.paddingTop+"px "+ event.target.value+"px "+this.state.paddingBottom+"px "+this.state.paddingLeft+"px "
                break;
            case "paddingBottom":
                this.setState({paddingBottom: event.target.value});
                valueBox = this.state.paddingTop+"px "+this.state.paddingRight+"px "+ event.target.value+"px "+this.state.paddingLeft+"px "
                break;
            case "paddingLeft":
                this.setState({paddingLeft: event.target.value});
                valueBox = this.state.paddingTop+"px "+this.state.paddingRight+"px "+this.state.paddingBottom+"px "+event.target.value +"px "
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
            event.target.value = this.state.paddingTop+"px "+this.state.paddingRight+"px "+this.state.paddingBottom+"px "+this.state.paddingLeft+"px "
            this.props.func(this.props.propname, event);
        }

    }

    render() {
        return (
            <div className="ccollapse">
                <div className="heading">
                    <div className="title block">
                        <div className = "big">
                            <a style={{display:'none'}} ref="collapseButton" data-toggle="collapse" data-parent="#accordion" href={"#"+this.props.propname}>{this.props.name}</a>
                            <span>{this.props.name}</span>
                        </div>
                        <div className = "small" >
                            <Switch  onClick={() => { this._handleCollapse() }} on={this.state.isBoxShadow}/>
                        </div>
                    </div>
                </div>
                <div id={this.props.propname} className="panel-collapse collapse">
                <Single type={this.props.type}  name="Padding-Top"    propname="paddingTop" ivalue={this.state.paddingTop} func={this.handleChange}></Single>
                <Single type={this.props.type} name="Padding-Right"   propname="paddingRight" ivalue={this.state.paddingRight} func={this.handleChange}></Single>
                <Single type={this.props.type} name="Padding-Bottom"  propname="paddingBottom" ivalue={this.state.paddingBottom} func={this.handleChange}></Single>
                <Single type={this.props.type}  name="Padding-Left"   propname="paddingLeft" ivalue={this.state.paddingLeft} func={this.handleChange}></Single>

                </div>
            </div>
        );
    }
};

Padding.propTypes = {

    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname:  React.PropTypes.string,
    type:  React.PropTypes.string
}


Padding.defaultProps = {

    ivalue: "0px 0px 0px 0px",
}


export default Padding;
