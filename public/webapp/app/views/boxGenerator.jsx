import React from 'react';
import {Component, PropTypes} from 'react';
import {OnResize} from 'react-window-mixins';
import { Material } from 'react-color';
import FontAwesome from 'react-fontawesome';

const BoxGenerator = React.createClass({
    mixins: [OnResize],

    getInitialState() {
        return {
            loading: false,
            error: false,
            background: '#fff',
            value:0,
            width:"100",
            height:"200",
            border:"1px solid #333",
            borderRadius:"0px 0px 0px 0px",
            box:{
                width:"100",
                height:"200",
                border:"1px solid #333"
            }
        };
    },
    handleChangeComplete(color) {

        console.log(color)
        this.setState({ background: color.hex });
    },
    handleChange: function(event) {
        this.setState({
            box:{
                    height:"100",
                    width: event.target.value,
                    border:"1px solid #333"
                }
            });
    },
    getSidePanel(){
        return (
            <div className="Grid col-lg-12 nopadding">
                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="col-lg-3">
                        Size
                    </div>
                    <div className="col-lg-4 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.box.width}
                            onChange={this.handleChange}
                          />

                          <br/>Width
                    </div>
                    <div className="col-lg-1">
                        <FontAwesome size='2x' name='unlock-alt' />
                    </div>
                    <div className="col-lg-4">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.box.width}
                            onChange={this.handleChange}
                          />

                          <br/>Height
                    </div>

                </div>
                <div className="Grid-item">…</div>
                <div className="Grid-item">…</div>
                <div className="Grid-item">…</div>
                <div className="Grid-item Grid-item-bottom">…</div>
            </div>
        )
    },
    render() {
        let box_style = {
            "width":this.state.width,
            "height":this.state.height,
            "borderRadius":this.state.borderRadius
        };
        return (
            <div className="container col-lg-12" style={{"height":this.state.window.height-60}}>
                <div className="row" style={{ "height":this.state.window.height-60}}>
                    <div className="col-lg-8" style={{"border":"1px solid #cccccc", "height":"100%"}}>
                        <div className="element" style={this.state.box}></div>
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

export default BoxGenerator;
