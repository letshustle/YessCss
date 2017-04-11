import React, { propTypes } from 'react';
import ClassNames from 'classnames';
import FontAwesome from 'react-fontawesome';


class Dimension extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    _handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="Grid-item single">
                <div className="text">
                    <p className="action-label">{this.props.name}</p>
                </div>
                <div className="input">
                    <input
                        placeholder="height"
                        
                        className="text-box"
                        type="text"
                        value={this.props.ivalue[0]}
                        onChange={this.props.func.bind(this, this.props.propname[0])}
                    />
                    <FontAwesome name='unlock-alt'></FontAwesome>
                    <input
                        placeholder="width"
                        
                        className="text-box"
                        type="text"
                        value={this.props.ivalue[1]}
                        onChange={this.props.func.bind(this, this.props.propname[1])}
                    />
                </div>
            </div>

        );
    }
};

Dimension.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.array,
    func: React.PropTypes.func,
    propname: React.PropTypes.array,
}

export default Dimension;
