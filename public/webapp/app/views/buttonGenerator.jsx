import React from 'react';
import {Component, PropTypes} from 'react';
import {OnResize} from 'react-window-mixins';
import {Material} from 'react-color';
import FontAwesome from 'react-fontawesome';

const ButtonGenerator = React.createClass({
    mixins: [OnResize],

    getInitialState() {
        return {
            loading: false,
            error: false,
            text: "Click Me",
            color: "#1FB6FF",
            fontWeight: "400",
            fontSize: "32",
            fontStyle: "normal",
            value: 0
        };
    },
    handleChangeComplete(color) {

        console.log(color)
        this.setState({background: color.hex});
    },
    handleChange: function(type, event) {
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

            default:
                break;
        }

    },
    getSidePanel() {
        return (
            <div className="Grid col-lg-12 nopadding">
                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="col-lg-3">
                      Button Text
                    </div>
                    <div className="col-lg-7 center">
                        <input className="text-box" type="text" value={this.state.text} onChange={this.handleChange.bind(this, "text")}/>
                    </div>

                </div>

                <div className="Grid-item">
                    <div className="col-lg-3">
                      Text  Color
                    </div>
                    <div className="col-lg-7 center">
                        <input className="text-box" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="col-lg-3">
                        Font Size
                    </div>
                    <div className="col-lg-7 center">
                        <input className="text-box" type="number" value={this.state.fontSize} onChange={this.handleChange.bind(this, "fontSize")} name="size" min="1"/>
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="col-lg-3">
                        Font Weight
                    </div>
                    <div className="col-lg-7 center">
                        <select className="text-box" value={this.state.fontWeight} name="fontStyle" onChange={this.handleChange.bind(this, "fontWeight")}>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                        </select>
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="col-lg-3">
                        Font Style
                    </div>
                    <div className="col-lg-7 center">
                        <select className="text-box" value={this.state.fontStyle} name="fontStyle" onChange={this.handleChange.bind(this, "fontStyle")}>
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                            <option value="oblique">Oblique</option>
                        </select>
                    </div>
                </div>
                <div className="Grid-item">
                    <div className="col-lg-3">
                        Box Background
                    </div>
                    <div className="col-lg-7 center">
                        <input className="text-box" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
                    </div>
                </div>

                <div className="Grid-item">

<div className="panel-group" id="accordion">

<div className="panel panel-default">
  <div className="panel-heading">
    <h4 className="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Collapsible Group 1</a>
    </h4>
  </div>
  <div id="collapse1" className="panel-collapse collapse in">
    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  </div>
</div>

<div className="panel panel-default">
  <div className="panel-heading">
    <h4 className="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">box-shadow</a>
    </h4>
  </div>
  <div id="collapse2" className="panel-collapse collapse">
    <div className="panel-body">

        <div className="col-lg-3">
            Box Background
        </div>
        <div className="col-lg-7 center">
            <input className="text-box" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
        </div>

    </div>
  </div>
</div>
<div className="panel panel-default">
  <div className="panel-heading">
    <h4 className="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Collapsible Group 3</a>
    </h4>
  </div>
  <div id="collapse3" className="panel-collapse collapse">
    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  </div>
</div>
</div>

                </div>
                <div className="Grid-item Grid-item-bottom">…</div>
            </div>

        )
    },
    render() {
        let text_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle
        };
        let box_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle
        };
        return (
            <div className="container col-lg-12" style={{
                "height": this.state.window.height - 60
            }}>
                <div className="row" style={{
                    "height": this.state.window.height - 60
                }}>
                    <div className="col-lg-8 subject" >
                        <div className="element" style={text_style}>{this.state.text}</div>
                        {this.state.error}
                    </div>
                    <div className="col-lg-4 nopadding" style={{
                        "border": "1px solid #cccccc",
                        "height": "100%"
                    }}>
                        {this.getSidePanel()}
                    </div>
                </div>
            </div>
        );
    }
});

export default ButtonGenerator;
