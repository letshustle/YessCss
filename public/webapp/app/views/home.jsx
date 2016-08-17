import React from 'react';
import {Component, PropTypes} from 'react';

const HomeView = React.createClass({
    mixins: [],

    getInitialState() {
        return {
            loading: false,
            error: false
        };
    },

    render() {
        return (
            <div className="container">
                <div className="row">
                    <br />
                    <div className="jumbotron">
                        <div className="container">
                            <h1>Discover!</h1>
                            <p>
                                A simple react-starter project
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default HomeView;
