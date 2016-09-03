import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, IndexLink } from 'react-router'
import jQuery from 'jquery';
import Classnames from 'classnames';
import ConfigStore from '../../stores/configStore';
import ServerLink from '../serverLink'
import FontAwesome from 'react-fontawesome';

const Nav = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    propTypes:{
        togglemenu: React.PropTypes.func
    },

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    },

    componentDidMount(){
        jQuery(ReactDOM.findDOMNode(this.refs.mainNav)).find('.dropdown-toggle').dropdown();
    },

    toggleMenu: function(){
        this.props.togglemenu()
    },

    render() {
        return (
            <ul className="nav navbar-nav navbar-right" ref="mainNav">

                <li className={Classnames({"active": this.context.router.isActive('/boxgenerator', true)})}>
                    <Link onClick={this.toggleMenu} to="/boxgenerator">Box Generator</Link>
                </li>

                <li className={Classnames({"active": this.context.router.isActive('/textgenerator', true)})}>
                    <Link onClick={this.toggleMenu} to="/textgenerator">Text Generator</Link>
                </li>

                <li className={Classnames({"active": this.context.router.isActive('/buttongenrator', true)})}>
                    <Link onClick={this.toggleMenu} to="/buttongenrator">Button Generator</Link>
                </li>

                <li className={Classnames({"active": this.context.router.isActive('/anchortaggenerator', true)})}>
                    <Link onClick={this.toggleMenu} to="/anchortaggenerator">Anchor Generator</Link>
                </li>

                <li className="">
                    <a target="_blank" href="https://github.com/letshustle/YessCss"><FontAwesome size='2x' name='github' /></a>                    
                </li>
            </ul>
        );
    }
});


export default Nav;
