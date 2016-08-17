import React from 'react';
import { browserHistory } from 'react-router';
import Auth from '../services/auth';
import api from '../services/api';

const RegisterView = React.createClass({
	getInitialState() {
	    return {
				name: null
	    };
	},
	componentWillMount() {

	},
	onNamechange(e) {
		console.log(e.target.value)

	},
	registerUser(e) {
		e.preventDefault();
		var _this = this;
		var data = {name: this.refs.name.value,
					 			email: this.refs.email.value,
					 			password: this.refs.password.value};

		Auth.register(data);

	},

	render() {
		return (
			<div className="container">
			    <div className="col-lg-offset-4 col-lg-6">
			            <h1>Register</h1>
				        <form onSubmit={this.registerUser}>
					        <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					              <input ref="name" onChange={this.onNamechange} style={{width: 318}} className="form-control" type="text" name="name" placeholder="Your Full Name" autoComplete="on" autofocus />
					            </div>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					              <input ref="email" style={{width: 318}} className="form-control" type="email" name="email" placeholder="Email address or phone number" autoComplete="on"  />
					            </div>
					          </div>
					        </div>
							<div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					              <input style={{width: 318}} className="form-control" type="email" name="email" placeholder="Re-enter Email address or phone number" autoComplete="on"  />
					            </div>
					          </div>
					        </div>
					         <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					              <input ref="password" style={{width: 318}} className="form-control" type="password" name="password" placeholder="Password" autoComplete="off" />
					            </div>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					                <span>Bood Group</span>
					                <select ref="blood">
													  <option value="0">AB+</option>
													  <option value="1">B+</option>
													  <option value="2">B-</option>
													  <option value="4">AB-</option>
													  <option value="5">A+-</option>
													  <option value="6">A--</option>
													  <option value="7">O+</option>
													  <option value="8">O-</option>
												</select>
									<small><a href="#">Why are we taking blood groups?</a></small>
					            </div>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					                <input type="radio" name="gender" defaultValue="male" /> Male
        							<input type="radio" name="gender" defaultValue="female" style={{marginLeft:20}} /> Female
					            </div>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <button type="submit" className="btn btn-primary" style={{width: 318}}>Get Started</button>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-lg-12">
					            <div className="checkbox">
					                <p style={{fontSize: 12}}>Already have an account ?</p>
					            </div>
					          </div>
					        </div>
	      				</form>
			    </div>
      		</div>

		);
	}
});

export default RegisterView;
