import api from '../services/api';
const Auth = {
      getUser(data) {
        api.get('user')
      },
      register(data) {
        api.post('api/users',{
    			data:data
    		})
      },
      login() {

      },
      logout() {

      },
      storeToken() {

      },
      postLoginOps() {

      }
};

export default Auth;
