var api = {};
api.endpoint = "http://localhost:1805"
var methods = ['get', 'put', 'post', 'delete'], l = methods.length, i = 0;
for(;i<l;i++) {

    var m = methods[i];
    console.log(m)
          api[m] = (function (m) {
            return function (uri, options) {
              if(options === undefined)
                options = {};

              console.log(options);
              options.url = api.endpoint + '/' + uri;
              if(options.auth == true)
                //Can set something for auth
              if(options.token == true)
                // Can set something for JWT token
              return jQuery.ajax({
          				type: m,
          				url: options.url,
          				dataType: "json",
          				data: options.data ? options.data : '',
          				success: (data) => {
          						console.log(data)

          				},
          				error: (xhr, responseText, data) => {
          						console.log('Error ' + responseText);

          				}
          		});
            }
          })(m);
        }
module.exports = api;
