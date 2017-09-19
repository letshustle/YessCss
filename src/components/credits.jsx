import React from 'react'
import { Router, Route, Link, IndexLink } from 'react-router'
class Credits extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
      		<div style={{position:'fixed',bottom:5, left: 2, fontSize:12, fontWeight:300}}>
          <div style={{ fontSize: '12px',color: '#aaa',padding: '10px 20px',letterSpacing: '0.5px'}}>Developed by <a style={{color:'#2998ff',textDecoration:'none',fontWeight:400}} target="_blank" href="http://www.roshanraj.com">Roshan</a> & <a style={{color:'#2998ff',textDecoration:'none',fontWeight:400}}  target="_blank" href="https://www.vishalranjan.in">Vishal</a> | Designed by <a style={{color:'#2998ff',textDecoration:'none',fontWeight:400}} target="_blank" href="http://www.sankalpsinha.com">Sankalp</a> </div>
		     </div>

    	)
    }
};

export default Credits;
