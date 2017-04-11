import React from 'react';
import {Component, PropTypes} from 'react';

import FontAwesome from 'react-fontawesome';


import BoxShadow from '../components/boxShadow';


import Single from '../components/single';
import Color from '../components/color';
import SimpleDropDown from '../components/simpleDropDown';
import Border from '../components/border';
import Font from '../components/font';
import BorderRadius from '../components/borderRadius';

class ButtonGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    loading: false,
                    error: false,
                    text: "Click Me",
                    color: "#1FB6FF",
                    fontWeight: "400",
                    fontSize: "32px",
                    fontStyle: "normal",
                    background:"#FFF",
                    borderRadius:"0px 0px 0px 0px",
                    border:"1px solid #333",
                    isBoxShadow: false,
                    isBorder: false,
                    value: 0
        };
    }



   
    handleChangeComplete = (color) => {

        console.log(color)
        this.setState({background: color.hex});
    }

    handleChange = (type, event) => {
        console.log(type);
        switch (type) {
            case "text":
                this.setState({text: event.target.value});
                break;
            case "color":
                this.setState({color: event.target.value});
                break;
            case "fontStyle":
                this.setState({fontStyle: event.target.value});
                break;
            case "fontWeight":
                this.setState({fontWeight: event.target.value});
                break;
            case "fontSize":
                this.setState({fontSize: event.target.value});
                break;
            case "border":
                this.setState({border: event.target.value});
                break;
            case "background":
                this.setState({background: event.target.value});
                break;
            case "borderRadius":
                this.setState({borderRadius: event.target.value});
                break;


            default:
                break;
        }

    }

  
    getSidePanel = () => {
        
        return (
            <div className="Grid  nopadding">
                
                <Single name="Text" propname="text" ivalue={this.state.text} func={this.handleChange}></Single>
                <Color name="Color" propname="color" ivalue={this.state.color} func={this.handleChange} color={this.state.color}></Color>
                <Color name="Background Color" propname="background" ivalue={this.state.background} func={this.handleChange} color={this.state.background}></Color>
                <Font ref="font"
                           name="Font"
                           propname={["fontSize","fontWeight","fontStyle"]}
                           ivalue={[this.state.fontSize, this.state.fontWeight, this.state.fontStyle]}
                           func={this.handleChange}
                           ></Font>
               
                <Border ref="border"
                           name="Border"
                           propname="border"
                           ivalue={this.state.border}
                           func={this.handleChange}
                           ></Border>
               <BorderRadius ref="borderRadius"
                           name="Border Radius"
                           propname="borderRadius"
                           ivalue={this.state.borderRadius}
                           func={this.handleChange}
                           ></BorderRadius>
               
            </div>

        )
    }
    render() {
       
        let shadow_style = (typeof this.refs.boxshadow == "undefined")?"0 0 0 #888": (this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.hlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.color);
        let text_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle,
            "border":this.state.border,
            "fontStyle": this.state.fontStyle,
            "background":this.state.background,
            "borderRadius":this.state.borderRadius
        };
        let box_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle,
            "border":this.state.border,
            "background":this.state.background,
            "boxshadow": shadow_style,
        };
        return (
            <div className="holder" >
               
                    <div className="subject" >
                        <div className="element" style={text_style}>{this.state.text}</div>
                        {this.state.error}
                    </div>
                    <div className="sidebar" style={{ "border": "1px solid #cccccc", "height": "100%", "background": "#F7F7F7" }}>
                        {this.getSidePanel()}
                    </div>
               
            </div>
        );
    }
}

export default ButtonGenerator;
