import React, {propTypes} from 'react';
import ClassNames from 'classnames';
// import Slider from 'react-toolbox/lib/slider';

class Single extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //         name: "",
        //         value: props.ivalue,
        // };
    
    }


    shouldComponentUpdate(nextProps, nextState) {
        // if (nextState.value == this.refs.abc.value)
        //     return false;
        // else
            return true
    }

    _handleChange = (event) => {
      
        // this.props.func()
        this.setState({value:event.target.value});
    }
   
    render() {
        return (
            <div className="Grid-item single">
                    <div className="text">
                        <p className="action-label">{this.props.name}</p>
                    </div>
                    <div className="input">
                        <input
                            ref = "abc"
                            className="text-box"
                            type="text"
                            value={this.props.ivalue}
                            onChange={this.props.func.bind(this,this.props.propname)}
                            />
                    </div>
                </div>
            
        );
    }
};

Single.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname: React.PropTypes.string,
}

export default Single;
