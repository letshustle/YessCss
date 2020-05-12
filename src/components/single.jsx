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
      let actionLabel = ''
      console.log(this.props.type)
        if(this.props.type == "number"){
          actionLabel = <p className="action-label">{this.props.name} <span style={{color:'#ccc'}}>(px)</span></p>
        }else {
          actionLabel = <p className="action-label">{this.props.name}</p>

        }

        return (
            <div className="Grid-item single">
                    <div className="text" style={this.props.style}>
                        {actionLabel}
                    </div>
                    <div className="input">
                        <input
                            ref = "abc"
                            className="text-box"
                            type={this.props.type}
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
    type: React.PropTypes.string
}

export default Single;
