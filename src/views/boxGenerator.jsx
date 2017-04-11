import React from 'react';
import { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import Single from '../components/single';
import Dimension from '../components/dimension';

import SingleDropDown from '../components/singleDropDown';
import Three from '../components/three';
import Color from '../components/color';
import BoxShadow from '../components/boxShadow';
import Border from '../components/border';
import BorderRadius from '../components/borderRadius';
// import Slider from 'material-ui/Slider';

class BoxGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            background: '#1FB6FF',
            value: 0,
            width: "200px",
            height: "200px",
            border: "1px solid #333",
            borderRadius: "0px 0px 0px 0px",
            boxShadow:"0px 0px 0px 0px #333",
            opacity: 1,
            testList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        };
    }

    handleChangeComplete = (color) => {

        console.log(color)
        this.setState({ background: color.hex });
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    handleChange = (type, event) => {
        console.log(type, event.target.value);
        switch (type) {
            case "width":
                this.setState({ width: event.target.value });
                break;
            case "height":
                this.setState({ height: event.target.value });
                break;
            case "color":
                this.setState({ background: event.target.value });
                break;
            case "border":

                this.setState({ border: event.target.value });
                break;
            case "borderRadius":
                this.setState({ borderRadius: event.target.value });
                break;
            case "background":
                this.setState({ background: event.target.value });
                break;
            case "opacity":
                this.setState({ opacity: event.target.value });
                break;
            case "boxShadow":
                this.setState({ boxShadow: event.target.value });
                break;
            // default:
        }

    }
    getSidePanel = () => {
        return (
            <div className="Grid  nopadding">
                
                <Dimension name="Dimension" propname={["height","width"]} ivalue={[this.state.height,this.state.width]} func={this.handleChange}></Dimension>
                <Color name="Color" propname="background" ivalue={this.state.background} func={this.handleChange} color={this.state.background}></Color>
                <Three name="Opacity"    
                        propname="opacity" 
                        func={this.handleChange} 
                        currentValue={this.state.opacity}
                        min={0}
                        max={1}></Three>
              
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
                <BoxShadow ref="boxShadow"
                           name="Box Shadow"
                           propname="boxShadow"
                           ivalue={this.state.boxShadow}
                           func={this.handleChange}
                           ></BoxShadow>

                
            </div>
        )
    }
    
    render() {
        let box_style = {
            "width": this.state.width,
            "height": this.state.height,
            "borderRadius": this.state.borderRadius,
            "background": this.state.background,
            "border": this.state.border,
            "opacity": this.state.opacity,
            "boxShadow":this.state.boxShadow,
        };
        return (
            <div className="holder" >

                <div className="subject">
                    <div className="element" style={box_style}></div>
                    {this.state.error}
                </div>
                         
                <div className="sidebar" style={{ "border": "1px solid #cccccc", "height": "100%", "background": "#F7F7F7" }}>
                    {this.getSidePanel()}
                </div>

            </div>
        );
    }
}

export default BoxGenerator;
