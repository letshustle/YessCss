/**
 * issue if slider is moved then it gets locked
 */
import React, { propTypes } from 'react';
import ClassNames from 'classnames';
// import Slider from 'react-toolbox/lib/slider';
// import ReactSlider  from 'react-slider';
import ReactBootstrapSlider from 'react-bootstrap-slider';

class Three extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: props.ivalue,
            currentValue: 20,
            max: 100,
            min: 50,
            step: 0.1,
        };

    }


    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    _changeValue = (event) => {

        // this.props.func()
        //this.setState({value:event.target.value});
    }

    render() {
        return (
            <div className="Grid-item three">

                <div className="text">
                    <p className="action-label">{this.props.name}</p>
                </div>
                <div className="slider-panel ">

                    <ReactBootstrapSlider
                        value={this.props.currentValue}
                        change={(event)=>{this.props.func(this.props.propname,event)}}
                        slideStop={this._changeValue}
                        step={this.state.step}
                        max={this.props.max}
                        min={this.props.min}
                        orientation="horizontal"
                        reversed={false}
                         />
                </div>

                <div className="input">
                    <input

                        className="text-box"
                        type="text"
                        value={this.props.currentValue}
                        onChange={this.props.func.bind(this, this.props.propname)}
                    />
                </div>


            </div>

        );
    }
};

Three.propTypes = {
    name: React.PropTypes.string,
    currentValue: React.PropTypes.number,
    func: React.PropTypes.func,
    propname: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
}

export default Three;
