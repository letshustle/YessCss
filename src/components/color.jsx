import React, {propTypes} from 'react';
import ClassNames from 'classnames';
import ColorPicker from 'rc-color-picker';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: "",
                value: props.ivalue,
        };
    
    }


    shouldComponentUpdate(nextProps, nextState) {
      return true
    }

    _handleChange = (event) => {
      
        // this.props.func()
        this.setState({value:event.target.value});
    }

    changeHandler = (colors) => {
      
        this.props.func(this.props.propname, {target:{value:colors.color}})
    }

    closeHandler = (colors) => {
        
    }

   
    render() {
        return (
            <div className="Grid-item single">
                    <div className="text">
                        <p className="action-label">{this.props.name}</p>
                    </div>
                    <div className="input dual">
                       
                                <ColorPicker
                                    color={this.props.ivalue}
                                    alpha={100}
                                    onChange={this.changeHandler}
                                    placement="topRight"
                                    >
                                        <div className="react-custom-trigger color" style={{background:this.props.color}}>
                                        </div>
                                </ColorPicker>
                             
                        <input
                            
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

Color.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname: React.PropTypes.string,
    color: React.PropTypes.string
}

export default Color;
