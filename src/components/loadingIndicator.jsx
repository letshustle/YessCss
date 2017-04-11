import React from 'react';
import classNames from 'classnames';


const LoadingIndicator = React.createClass({
    propTypes: {
        mini: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            mini: false
        };
    },

    shouldComponentUpdate() {
        return false;
    },

    render() {
        let classes = {
            loading: true,
            mini: this.props.mini
        };
        return (
            <div className={classNames(this.props.className, classes)}>
                <div className="loading-indicator"></div>
                <div className="loading-message">{this.props.children}</div>
            </div>
        );
    }
});


export default LoadingIndicator;

