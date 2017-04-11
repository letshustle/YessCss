import React, {propTypes} from 'react';
import ClassNames from 'classnames';
// import Slider from 'react-toolbox/lib/slider';

class SingleDropDown extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
                name: "",
                value: props.ivalue,
                menuList:props.list
        };
    
    }


    shouldComponentUpdate(nextProps, nextState) {
      return true
    }

    _handleChange = (event) => {
      
        // this.props.func()
        this.setState({value:event.target.value});
    }
    _menuHandler = (svalue) => { 
        console.log("New value is "+svalue);
        this.setState({value:svalue});
    }
    render() {
        return (
            <div className="Grid-item single">
                    <div className="text">
                        <p className="action-label">{this.props.name}</p>
                    </div>
                    <div className="input">

                            <div style={{display:"flex", flex:1}}>
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                      <div className="bt-text">  {this.props.ivalue} </div> 
                                      
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.menuList.map((v, i) => {
                                                console.log(v)
                                            return(<li key={i} onClick={()=>{ this.props.func(this.props.propname,{target:{value:v}}) }}>
                                                            <a href="#">{v}</a>
                                                        </li>)
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                    </div>
                </div>
            
        );
    }
};

SingleDropDown.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname: React.PropTypes.string,
    list: React.PropTypes.array
}

export default SingleDropDown;
