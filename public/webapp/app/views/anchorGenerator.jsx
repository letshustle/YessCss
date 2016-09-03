import React from 'react';
import {Component, PropTypes} from 'react';
import {OnResize} from 'react-window-mixins';
import { Material } from 'react-color';
import FontAwesome from 'react-fontawesome';

const AnchorGenerator = React.createClass({
    mixins: [OnResize],


//     shadow
// border radius
// background
// foreground
// border
// pseudo (hover, focus and active) styling

    getInitialState() {
        return {
            loading: false,
            error: false,
            text:"Text",
            href:"https://google.com/",
            background: '#000',
            color:"#200",
            border:"1px solid #333",
            borderRadius:"0px 0px 0px 0px",
            fontSize:"20px"
        };
    },
    handleChangeComplete(color) {

        console.log(color)
        this.setState({ background: color.hex });
    },
    handleChange: function(type,event) {
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
            // default:
        }

    },
    getSidePanel(){
        return (
            <div className="Grid col-lg-12 nopadding">
                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="col-lg-3">
                        Text
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.text}
                            onChange={this.handleChange.bind(this,"text")}
                          />
                    </div>
                </div>
                <div className="Grid-item">
                    <div className="col-lg-3">
                        href
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.href}
                            onChange={this.handleChange.bind(this,"href")}
                          />
                    </div>
                </div>

                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="col-lg-3">
                        Font Size
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.fontSize}
                            onChange={this.handleChange.bind(this,"fontSize")}
                          />
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="col-lg-3">
                        Color
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.color}
                            onChange={this.handleChange.bind(this,"color")}
                          />
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="col-lg-3">
                        Background Color
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.background}
                            onChange={this.handleChange.bind(this,"background")}
                          />
                    </div>
                </div>


                <div className="Grid-item">
                    <div className="col-lg-3">
                        Border
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            style={{width:"200"}}
                            type="text"
                            value={this.state.border}
                            onChange={this.handleChange.bind(this,"border")}
                          />
                    </div>
                </div>
                <div className="Grid-item">
                    <div className="col-lg-3">
                        Border Radius
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            style={{width:"200"}}
                            type="text"
                            value={this.state.borderRadius}
                            onChange={this.handleChange.bind(this,"borderRadius")}
                          />
                    </div>
                </div>
                <div className="Grid-item Grid-item-bottom">…</div>
            </div>
        )
    },
    render() {
        let box_style = {

            "borderRadius":this.state.borderRadius,
            "color":this.state.color,
            "background":this.state.background,
            "border":this.state.border,
            "fontSize":this.state.fontSize
        };
        return (
            <div className="container col-lg-12" style={{"height":this.state.window.height-60}}>
                <div className="row" style={{ "height":this.state.window.height-60}}>
                    <div className="col-lg-8" style={{"border":"1px solid #cccccc", "height":"100%"}}>
                        <a target="_blank" href={this.state.href} className="element" style={box_style}>{this.state.text}</a>
                        {this.state.error}
                    </div>
                    <div className="col-lg-4 nopadding" style={{"border":"1px solid #cccccc", "height":"100%"}}>
                        {this.getSidePanel()}
                    </div>
                </div>
            </div>
        );
    }
});

export default AnchorGenerator;
