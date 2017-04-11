import React, {propTypes} from 'react';
import {Link} from 'react-router';
import ClassNames from 'classnames';
import ServerLink from '../serverLink';
import FontAwesome from 'react-fontawesome';
import Switch from 'react-toggle-switch'
import $ from 'jquery';

import Single from '../single';
import Color from '../color';
import SimpleDropDown from '../simpleDropDown';

class Font extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

                isBoxShadow: false,    
                fontSize: props.ivalue[0],
                fontWeight: props.ivalue[1],
                fontStyle: props.ivalue[2],     
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleChange = (type, event) => {
       
        console.log("font-change-handler",type);
        
        this.props.func(type, {target:{value:event.target.value}});
        console.log("component value ",event.target.value);
        
    }
    _handleCollapse(){
        this.setState({isBoxShadow: (!this.state.isBoxShadow)}); 
        this.refs.collapseButton.click();
        if (this.state.isBoxShadow){
           console.log("-----"); 
            // this.props.func("fontSize", {target:{value:"10px"}});
            // this.props.func("fontWeight", {target:{value:"100"}});
            // this.props.func("fontStyle", {target:{value:"normal"}});
        }else{
            // this.props.func("fontStyle", {target:{value:this.state.fontStyle}});
            // this.props.func("fontWeight", {target:{value:this.state.fontWeight}});
            // this.props.func("fontSize", {target:{value:this.state.fontSize}});
            console.log("fdassfa");
        }
        
    }

    render() {
        return (
            <div className="ccollapse ">
                <div className="heading">
                    <div className="title block">
                        <div className = "big">
                            <a ref="collapseButton" data-toggle="collapse" data-parent="#accordion" href={"#"+this.props.name}>{this.props.name}</a>
                        </div>
                        <div className = "small" >
                            <Switch  onClick={() => { this._handleCollapse() }} on={this.state.isBoxShadow}/>
                        </div>
                    </div>
                </div>
                <div id={this.props.name} className="panel-collapse collapse">
         

                <Single name="Font Size" propname={this.props.propname[0]} ivalue={this.props.ivalue[0]} func={this.handleChange}></Single>
                <SimpleDropDown name="Font Weight"
                                propname={this.props.propname[1]}
                                ivalue={this.props.ivalue[1]}
                                func={this.handleChange}
                                list={["100","200","300","400","500","600"]}></SimpleDropDown> 
            
                <SimpleDropDown name="Font Style"
                                propname={this.props.propname[2]}
                                ivalue={this.props.ivalue[2]}
                                func={this.handleChange}
                                list={["normal","bold","italic"]}></SimpleDropDown> 

                  

                </div>
            </div>
        );
    }
};

Font.propTypes = {
    
    name: React.PropTypes.string,
    ivalue: React.PropTypes.array,
    func: React.PropTypes.func,
    propname:  React.PropTypes.array,
}


Font.defaultProps = {

    ivalue: ["10px","100","normal"],
}


export default Font;
