import React from 'react';


const LoginView = React.createClass({
	getInitialState() {
	    return {

	    };
	},
	componentWillMount() {

	},

	render() {
		return (
			<div className="container">			       
			    <div className="col-lg-offset-4 col-lg-6">			          
			        <div className="col-lg-4">
			            <h1>Login</h1>			            
			        </div>
				        <form>
					        <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					              <input style={{width: 318}} className="form-control" type="email" name="email" ng-model="username" placeholder="Email address or phone number" autoComplete="on" autofocus />
					            </div>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-xs-12 col-sm-12 col-md-12">
					            <div className="form-group">
					              <input style={{width: 318}} className="form-control" type="password" name="password" ng-model="password" placeholder="Password" autoComplete="off" />
					            </div>                        
					            <button type="submit" className="btn btn-primary" style={{width: 318}}>Login (Private Beta)</button>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-lg-12">
					            <div className="checkbox">
					              <label style={{fontSize: 12}}>
					                <input type="checkbox" />Keep me signed in</label>
					            </div>
					          </div>
					        </div>
	      				</form>
			    </div>				 
      		</div>

		);
	}
});

export default LoginView;
