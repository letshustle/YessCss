import $ from 'jquery';
import React from 'react';

const RouteError = React.createClass({
  componentWillMount() {

  },

  componentWillUnmount() {

  },

  render() {
    return (
      <div className="alert alert-block alert-error">

        <div style={{fontSize: 24, marginBottom: 10}}>
          <span className="icon-exclamation" style={{fontSize: 20, marginRight: 10}} />
          <span>Oops! Something went wrong</span>
        </div>
        <p>It looks like you've hit an issue in application. Don't worry
          though! We monitor and it's likely we're already
          looking into this!</p>
      </div>
    );
  },
});

export default RouteError;
