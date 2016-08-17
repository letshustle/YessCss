import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, IndexLink } from 'react-router'
import jQuery from 'jquery';
import Classnames from 'classnames';
import ConfigStore from '../../stores/configStore';
import ServerLink from '../serverLink'

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
               
                <li className={Classnames({"active": this.context.router.isActive('/home', true)})}>
                    <Link onClick={this.toggleMenu} to="/home">Home</Link>
                </li>

                <li className={Classnames({"active": this.context.router.isActive('/people', true)})}>
                    <Link onClick={this.toggleMenu} to="/people">People</Link>
                </li>

                <li className={Classnames({"active": this.context.router.isActive('/unmapped-route', true)})}>
                    <Link onClick={this.toggleMenu} to="/unmapped-route">404</Link>
                </li>
            </ul>
        );
    }
});


export default Nav;
