import React from 'react';
import {Component, PropTypes} from 'react';

import FontAwesome from 'react-fontawesome';



import Single from '../components/single';
import Color from '../components/color';
import SimpleDropDown from '../components/simpleDropDown';
import Border from '../components/border';
import Font from '../components/font';
import BorderRadius from '../components/borderRadius';

class AnchorGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                loading: false,
                error: false,
                text:"Text",
                href:"https://google.com/",
                background: '#FFF',
                color:"#200",
                border:"1px solid #333",
                borderRadius:"0px 0px 0px 0px",
                fontSize:"20px",
                fontWeight:"100",
                fontStyle:"normal",
        };
    }

   


    handleChangeComplete = (color) => {

        console.log(color)
        this.setState({ background: color.hex });
    }
    handleChange = (type,event) => {
        console.log(type);
        switch (type) {
            case "text":
                this.setState({text: event.target.value});
                break;
            case "href":
                this.setState({href: event.target.value});
                break;
            case "background":
                this.setState({background: event.target.value});
                break;
            case "color":
                this.setState({color: event.target.value});
                break;
            case "border":
                this.setState({border: event.target.value});
                break;
            case "borderRadius":
                this.setState({borderRadius: event.target.value});
                break;
            case "fontSize":
                this.setState({fontSize: event.target.value});
                break;
            case "fontWeight":
                this.setState({fontWeight: event.target.value});
                break;
            case "fontStyle":
                this.setState({fontStyle: event.target.value});
                break;
            // default:
        }

    }
    getSidePanel = () => {
        let font = [this.state.fontSize, this.state.fontWeight, this.state.fontStyle];
        return (
            <div className="Grid  nopadding">

                <Single name="Text" propname="text" ivalue={this.state.text} func={this.handleChange}></Single>
                <Single name="href" propname="href" ivalue={this.state.href} func={this.handleChange}></Single>
                <Color name="Color" propname="color" ivalue={this.state.color} func={this.handleChange} color={this.state.color}></Color>
              
                <Font ref="font"
                           name="Font"
                           propname={["fontSize","fontWeight","fontStyle"]}
                           ivalue={font}
                           func={this.handleChange}
                           ></Font>
                <Color name="Background Color" propname="background" ivalue={this.state.background} func={this.handleChange} color={this.state.background}></Color>
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
        let box_style = {

            "borderRadius":this.state.borderRadius,
            "color":this.state.color,
            "background":this.state.background,
            "border":this.state.border,
            "fontSize":this.state.fontSize,
            "fontWeight":this.state.fontWeight,
            "fontStyle":this.state.fontStyle,
        };
        return (
            <div className="holder">
                
                    <div className="subject">
                        <a target="_blank" href={this.state.href} className="element" style={box_style}>{this.state.text}</a>
                        {this.state.error}
                    </div>
                    <div className="sidebar" style={{"border":"1px solid #cccccc", "height":"100%"}}>
                        {this.getSidePanel()}
                    </div>
                
            </div>
        );  
    }
}



export default AnchorGenerator;