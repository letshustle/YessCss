import React from 'react';
import ApiMixin from '../mixins/apiMixin';
import Header from '../components/header';

const App = React.createClass({
    mixins: [
        ApiMixin
    ],

    getInitialState() {
        return {
            loading: false,
            error: false
        };
    },

    componentWillMount() {
        //this.api.request('/some/api', {
        //  query: {
        //    'd': '1'
        //  },
        //  success: (data) => {
        //    //SomeStore.load(data);
        //    this.setState({
        //      loading: false,
        //    });
        //  },
        //  error: () => {
        //    this.setState({
        //      loading: false,
        //      error: true
        //    });
        //  }
        //});
    },

    componentWillUnmount() {

    },

    onConfigured() {
        this.setState({});
    },

    render() {
        return (
            <div className="workspace">
                <Header/>
                {this.props.children}
            </div>
        );
    }
});

export default App;
