import React from 'react'
import { Router, Route, Link, IndexLink } from 'react-router'
class Credits extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
      		<div style={{position:'fixed',bottom:5, left: 2, fontSize:12, fontWeight:300}}>
          <div>Developed by <a target="_blank" href="http://www.roshanraj.com">Roshan</a> & <a target="_blank" href="https://www.vishalranjan.in">Vishal</a> | Designed by <a target="_blank" href="http://www.sankalpsinha.com">Sankalp</a> </div>
		     </div>

    	)
    }
};

export default Credits;
