import React from 'react';
import {Component, PropTypes} from 'react';
// import ColorsPicker from 'react-colors-picker';
import ColorPicker from 'react-color-picker'
import FontAwesome from 'react-fontawesome';


import 'react-virtualized/styles.css';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';
// You can import any component you want as a named export from 'react-virtualized', eg
import { Column, Table } from 'react-virtualized';

// But if you only use a few react-virtualized components,
// And you're concerned about increasing your application's bundle size,
// You can directly import only the components you need, like so:
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                   hasNextPage:true,
                    /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
                    isNextPageLoading:false,
                    /** List of items loaded so far */
                    list:{},
                    menuList:["dotted","dashed","solid","double","groove","ridge","inset","outset","hidden"]
        };
    }


    handleChangeComplete = (color) => {

        console.log(color)
        this.setState({background: color.hex});
    }

    handleChange = (type, event) => {
        console.log(type);
        switch (type) {
            case "text":
                this.setState({text: event.target.value});
                break;
            case "color":
                this.setState({color: event.target.value});
                break;
            case "fontStyle":
                this.setState({fontStyle: event.target.value});
                break;
            case "fontWeight":
                this.setState({fontWeight: event.target.value});
                break;
            case "fontSize":
                this.setState({fontSize: event.target.value});
                break;

            default:
                break;
        }

    }
    _menuHandler = (value) => { 
        console.log("New value is "+value);
    }
    // Render a list item or a loading indicator.
    rowRenderer = ({ index, key, style }) => {
        let content

        if (!isRowLoaded({ index })) {
        content = 'Loading...'
        } else {
        content = list.getIn([index, 'name'])
        }

        return (
        <div
            key={key}
            style={style}
        >
            {content}
        </div>
        )
    }
    
    render() {
        let text_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle,
            "border": "none"
        };
        return (
            <div className="holder ">
                {/*<InfiniteLoader
                isRowLoaded={false}
                loadMoreRows={true}
                rowCount={90}
                >
                {({ onRowsRendered, registerChild }) => (
                    <List
                    ref={registerChild}
                    onRowsRendered={onRowsRendered}
                    rowRenderer={() => {this.rowRenderer()}}
                    />
                )}
                </InfiniteLoader>*/}
                <div style={{display:"block"}}>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            {
                                this.state.menuList.map((v, i) => {
                                    console.log(v)
                                return(<li key={i} onClick={()=>{this._menuHandler(v)}}>
                                                <a href="#">{v}</a> <div style={{borderTopStyle:v}}> </div>
                                            </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default Test;
