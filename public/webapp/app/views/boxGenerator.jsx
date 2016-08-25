import React from 'react';
import {Component, PropTypes} from 'react';
import {OnResize} from 'react-window-mixins';
import { Material } from 'react-color';


const BoxGenerator = React.createClass({
    mixins: [OnResize],

    getInitialState() {
        return {
            loading: false,
            error: false,
            background: '#fff',
            value:0,
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
    render() {
        return (
            <div className="container col-lg-12" style={{"height":this.state.window.height-60}}>
                <div className="row" style={{ "height":this.state.window.height-60}}>
                    <div className="col-lg-8" style={{"border":"1px solid #333", "height":"100%"}}>
                        <div className="element" style={this.state.box}></div>
                        {this.state.error}
                    </div>
                    <div className="col-lg-4" style={{"border":"1px solid #333", "height":"100%"}}>
                        <input
                            type="text"
                            value={this.state.box.width}
                            onChange={this.handleChange}
                          />
                    </div>
                </div>
            </div>
        );
    }
});

export default BoxGenerator;
