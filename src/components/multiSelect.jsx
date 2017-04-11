import React, {propTypes} from 'react';
import ClassNames from 'classnames';
// import Slider from 'react-toolbox/lib/slider';

class MultiSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: "",
                value: 0,
                
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

   
    render() {
        return (
            <div className="">
                {/*<Slider value={this.state.slider1} onChange={this.handleChange.bind(this, 'slider1')} />*/}
            </div>
        );
    }
};

MultiSelect.propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
}

export default MultiSelect;
