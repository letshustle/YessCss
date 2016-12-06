var exports =
webpackJsonpexports([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(92);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reactRouter = __webpack_require__(93);

	// setup CSRF tokens in jquery
	function getCookie(name) {
	    var cookieValue = null;
	    if (document.cookie && document.cookie !== '') {
	        var cookies = document.cookie.split(';');
	        for (var i = 0; i < cookies.length; i++) {
	            var cookie = _jquery2['default'].trim(cookies[i]);
	            // Does this cookie string begin with the name we want?
	            if (cookie.substring(0, name.length + 1) == name + '=') {
	                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                break;
	            }
	        }
	    }
	    return cookieValue;
	}

	var csrftoken = getCookie('csrf');

	function csrfSafeMethod(method) {
	    // these HTTP methods do not require CSRF protection
	    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
	    );
	}
	_jquery2['default'].ajaxSetup({
	    beforeSend: function beforeSend(xhr, settings) {
	        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
	            xhr.setRequestHeader('X-CSRFToken', csrftoken);
	        }
	    }
	});

	// these get exported to a global variable, which is important as its the only
	// way we can call into scoped objects
	exports['default'] = {
	    jQuery: _jquery2['default'],
	    moment: __webpack_require__(311),
	    React: __webpack_require__(866),
	    ReactDOM: __webpack_require__(313),
	    Router: __webpack_require__(93),

	    Registry: {
	        api: __webpack_require__(314),
	        routes: __webpack_require__(315),
	        history: _reactRouter.browserHistory,
	        mixins: {
	            ApiMixin: __webpack_require__(317)
	        },
	        ConfigStore: __webpack_require__(322)
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(97);


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.paramsToQueryArgs = paramsToQueryArgs;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jquery = __webpack_require__(92);

	var _jquery2 = _interopRequireDefault(_jquery);

	var Request = (function () {
	  function Request(xhr) {
	    _classCallCheck(this, Request);

	    this.xhr = xhr;
	    this.alive = true;
	  }

	  /**
	   * Converts input parameters to API-compatible query arguments
	   * @param params
	   */

	  _createClass(Request, [{
	    key: 'cancel',
	    value: function cancel() {
	      this.alive = false;
	      this.xhr.abort();
	    }
	  }]);

	  return Request;
	})();

	exports.Request = Request;

	function paramsToQueryArgs(params) {
	  return params.itemIds ? { id: params.itemIds } // items matching array of itemids
	  : params.query ? { query: params.query } // items matching search query
	  : undefined; // all items
	}

	var Client = (function () {
	  function Client(options) {
	    _classCallCheck(this, Client);

	    if (typeof options === 'undefined') {
	      options = {};
	    }
	    this.baseUrl = options.baseUrl || '/api/0';
	    this.activeRequests = {};
	  }

	  _createClass(Client, [{
	    key: 'uniqueId',
	    value: function uniqueId() {
	      var s4 = function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	      };
	      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	    }
	  }, {
	    key: 'wrapCallback',
	    value: function wrapCallback(id, func, cleanup) {
	      var _this = this;

	      /*eslint consistent-return:0*/
	      if (typeof func === 'undefined') {
	        return;
	      }

	      return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        var req = _this.activeRequests[id];
	        if (cleanup === true) {
	          delete _this.activeRequests[id];
	        }
	        if (req.alive) {
	          return func.apply(req, args);
	        }
	      };
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      for (var id in this.activeRequests) {
	        this.activeRequests[id].cancel();
	      }
	    }
	  }, {
	    key: 'request',
	    value: function request(path) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var query = _jquery2['default'].param(options.query || '', true);
	      var method = options.method || (options.data ? 'POST' : 'GET');
	      var data = options.data;
	      var id = this.uniqueId();

	      if (typeof data !== 'undefined' && method !== 'GET') {
	        data = JSON.stringify(data);
	      }

	      var fullUrl = undefined;
	      if (path.indexOf(this.baseUrl) === -1) {
	        fullUrl = this.baseUrl + path;
	      } else {
	        fullUrl = path;
	      }
	      if (query) {
	        if (fullUrl.indexOf('?') !== -1) {
	          fullUrl += '&' + query;
	        } else {
	          fullUrl += '?' + query;
	        }
	      }

	      this.activeRequests[id] = new Request(_jquery2['default'].ajax({
	        url: fullUrl,
	        method: method,
	        data: data,
	        contentType: 'application/json',
	        headers: {
	          'Accept': 'application/json; charset=utf-8'
	        },
	        success: this.wrapCallback(id, options.success),
	        error: this.wrapCallback(id, options.error),
	        complete: this.wrapCallback(id, options.complete, true)
	      }));

	      return this.activeRequests[id];
	    }
	  }, {
	    key: '_chain',
	    value: function _chain() {
	      for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        funcs[_key2] = arguments[_key2];
	      }

	      funcs = funcs.filter(function (f) {
	        return typeof f !== 'undefined' && f;
	      });
	      return function () {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }

	        funcs.forEach(function (func) {
	          func.apply(funcs, args);
	        });
	      };
	    }
	  }, {
	    key: '_wrapRequest',
	    value: function _wrapRequest(path, options, extraParams) {
	      if (typeof extraParams === 'undefined') {
	        extraParams = {};
	      }

	      options.success = this._chain(options.success, extraParams.success);
	      options.error = this._chain(options.error, extraParams.error);
	      options.complete = this._chain(options.complete, extraParams.complete);

	      return this.request(path, options);
	    }
	  }]);

	  return Client;
	})();

	exports.Client = Client;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(93);

	var _viewsApp = __webpack_require__(316);

	var _viewsApp2 = _interopRequireDefault(_viewsApp);

	var _viewsBoxGenerator = __webpack_require__(346);

	var _viewsBoxGenerator2 = _interopRequireDefault(_viewsBoxGenerator);

	var _viewsTextGenerator = __webpack_require__(617);

	var _viewsTextGenerator2 = _interopRequireDefault(_viewsTextGenerator);

	var _viewsButtonGenerator = __webpack_require__(618);

	var _viewsButtonGenerator2 = _interopRequireDefault(_viewsButtonGenerator);

	var _viewsAnchorGenerator = __webpack_require__(621);

	var _viewsAnchorGenerator2 = _interopRequireDefault(_viewsAnchorGenerator);

	var _viewsPeople = __webpack_require__(622);

	var _viewsPeople2 = _interopRequireDefault(_viewsPeople);

	var _viewsRouteNotFound = __webpack_require__(625);

	var _viewsRouteNotFound2 = _interopRequireDefault(_viewsRouteNotFound);

	var _utilsErrorHandler = __webpack_require__(630);

	var _utilsErrorHandler2 = _interopRequireDefault(_utilsErrorHandler);

	/**
	 * Adds trailing slash (/) to current URL
	 * @param nextState
	 * @param replace
	 */
	function appendTrailingSlash(nextState, replace) {
	    var lastChar = nextState.location.pathname.slice(-1);
	    if (lastChar !== '/') {
	        replace(nextState, nextState.location.pathname + '/');
	    }
	}

	var routes = _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: (0, _utilsErrorHandler2['default'])(_viewsApp2['default']) },
	    _react2['default'].createElement(_reactRouter.IndexRoute, { component: (0, _utilsErrorHandler2['default'])(_viewsBoxGenerator2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/boxgenerator', component: (0, _utilsErrorHandler2['default'])(_viewsBoxGenerator2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/textgenerator', component: (0, _utilsErrorHandler2['default'])(_viewsTextGenerator2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/buttongenrator', component: (0, _utilsErrorHandler2['default'])(_viewsButtonGenerator2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/anchortaggenerator', component: (0, _utilsErrorHandler2['default'])(_viewsAnchorGenerator2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/people', component: (0, _utilsErrorHandler2['default'])(_viewsPeople2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: (0, _utilsErrorHandler2['default'])(_viewsRouteNotFound2['default']), onEnter: appendTrailingSlash })
	);

	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _mixinsApiMixin = __webpack_require__(317);

	var _mixinsApiMixin2 = _interopRequireDefault(_mixinsApiMixin);

	var _componentsHeader = __webpack_require__(318);

	var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

	var App = _react2['default'].createClass({
	    displayName: 'App',

	    mixins: [_mixinsApiMixin2['default']],

	    getInitialState: function getInitialState() {
	        return {
	            loading: false,
	            error: false
	        };
	    },

	    componentWillMount: function componentWillMount() {
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

	    componentWillUnmount: function componentWillUnmount() {},

	    onConfigured: function onConfigured() {
	        this.setState({});
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(_componentsHeader2['default'], null),
	            _react2['default'].createElement(
	                'div',
	                { id: 'content' },
	                this.props.children
	            )
	        );
	    }
	});

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _api = __webpack_require__(314);

	var ApiMixin = {
	  componentWillMount: function componentWillMount() {
	    this.api = new _api.Client();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.api.clear();
	  }
	};

	exports['default'] = ApiMixin;
	module.exports = exports['default'];

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(93);

	var _classnames = __webpack_require__(319);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _serverLink = __webpack_require__(320);

	var _serverLink2 = _interopRequireDefault(_serverLink);

	var _nav = __webpack_require__(321);

	var _nav2 = _interopRequireDefault(_nav);

	var Header = _react2['default'].createClass({
	    displayName: 'Header',

	    mixins: [],
	    getInitialState: function getInitialState() {
	        return {
	            is_menu_open: false
	        };
	    },
	    toggleMenu: function toggleMenu() {
	        this.setState({ is_menu_open: !this.state.is_menu_open });
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'nav',
	            { id: 'site-nav-wrap', className: 'navbar navbar-default navbar-static-top' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'col-lg-12' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'navbar-header' },
	                    _react2['default'].createElement(
	                        'button',
	                        { onClick: this.toggleMenu, type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#site-nav' },
	                        _react2['default'].createElement('span', { className: 'icon-bar' }),
	                        _react2['default'].createElement('span', { className: 'icon-bar' }),
	                        _react2['default'].createElement('span', { className: 'icon-bar' })
	                    ),
	                    _react2['default'].createElement(
	                        _reactRouter.Link,
	                        { to: '/', target: '_self', className: 'navbar-brand', activeClassName: '' },
	                        _react2['default'].createElement('img', { className: 'logo', src: './images/Logo.png' })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'collapse navbar-collapse', id: 'site-nav' },
	                    _react2['default'].createElement(_nav2['default'], { togglemenu: this.toggleMenu })
	                )
	            )
	        );
	    }
	});

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 319 */,
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;

	function isLeftClickEvent(event) {
	    return event.button === 0;
	}

	function isModifiedEvent(event) {
	    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	function createLocationDescriptor(to, _ref) {
	    var query = _ref.query;
	    var hash = _ref.hash;
	    var state = _ref.state;

	    if (query || hash || state) {
	        return { pathname: to, query: query, hash: hash, state: state };
	    }

	    return to;
	}

	/**
	 * A <ServerLink> is used to create an <a> element that bypasses router.
	 * OnClick request is sent to server.
	 *
	 * For example, assuming you have the following route:
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <ServerLink to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <ServerLink ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var ServerLink = _react2['default'].createClass({
	    displayName: 'ServerLink',

	    contextTypes: {
	        router: object
	    },

	    propTypes: {
	        to: string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            className: '',
	            style: {}
	        };
	    },

	    handleClick: function handleClick(event) {
	        if (this.props.onClick) this.props.onClick(event);
	        if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
	        if (event.defaultPrevented === true) return;
	        event.preventDefault();
	        window.location.href = this.props.to;
	    },

	    render: function render() {
	        return _react2['default'].createElement('a', _extends({}, props, { href: to, onClick: this.handleClick }));
	    }

	});

	exports['default'] = ServerLink;
	module.exports = exports['default'];

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(313);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(93);

	var _jquery = __webpack_require__(92);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _classnames = __webpack_require__(319);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storesConfigStore = __webpack_require__(322);

	var _storesConfigStore2 = _interopRequireDefault(_storesConfigStore);

	var _serverLink = __webpack_require__(320);

	var _serverLink2 = _interopRequireDefault(_serverLink);

	var _reactFontawesome = __webpack_require__(345);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var Nav = _react2['default'].createClass({
	    displayName: 'Nav',

	    contextTypes: {
	        router: _react2['default'].PropTypes.object
	    },

	    propTypes: {
	        togglemenu: _react2['default'].PropTypes.func
	    },

	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return true;
	    },

	    componentDidMount: function componentDidMount() {
	        (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(this.refs.mainNav)).find('.dropdown-toggle').dropdown();
	    },

	    toggleMenu: function toggleMenu() {
	        this.props.togglemenu();
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'ul',
	            { className: 'nav navbar-nav navbar-right', ref: 'mainNav' },
	            _react2['default'].createElement(
	                'li',
	                { className: (0, _classnames2['default'])({ "active": this.context.router.isActive('/boxgenerator', true) }) },
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { onClick: this.toggleMenu, to: '/boxgenerator' },
	                    'Box Generator'
	                )
	            ),
	            _react2['default'].createElement(
	                'li',
	                { className: (0, _classnames2['default'])({ "active": this.context.router.isActive('/textgenerator', true) }) },
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { onClick: this.toggleMenu, to: '/textgenerator' },
	                    'Text Generator'
	                )
	            ),
	            _react2['default'].createElement(
	                'li',
	                { className: (0, _classnames2['default'])({ "active": this.context.router.isActive('/buttongenrator', true) }) },
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { onClick: this.toggleMenu, to: '/buttongenrator' },
	                    'Button Generator'
	                )
	            ),
	            _react2['default'].createElement(
	                'li',
	                { className: (0, _classnames2['default'])({ "active": this.context.router.isActive('/anchortaggenerator', true) }) },
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { onClick: this.toggleMenu, to: '/anchortaggenerator' },
	                    'Anchor Generator'
	                )
	            ),
	            _react2['default'].createElement(
	                'li',
	                { className: '' },
	                _react2['default'].createElement(
	                    'a',
	                    { target: '_blank', href: 'https://github.com/letshustle/YessCss' },
	                    _react2['default'].createElement(_reactFontawesome2['default'], { size: '2x', name: 'github' })
	                )
	            )
	        );
	    }
	});

	exports['default'] = Nav;
	module.exports = exports['default'];
	/*<li className="">
	   <a class="github-button" href="https://github.com/letshustle/YessCss" data-icon="octicon-star" data-style="mega" data-count-href="/letshustle/YessCss/stargazers" data-count-api="/repos/letshustle/YessCss#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star letshustle/YessCss on GitHub">Star</a>
	</li>*/

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _momentTimezone = __webpack_require__(323);

	var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	var _reflux = __webpack_require__(326);

	var _reflux2 = _interopRequireDefault(_reflux);

	var ConfigStore = _reflux2['default'].createStore({
	    init: function init() {
	        this.config = {};
	    },

	    get: function get(key) {
	        return this.config[key];
	    },

	    set: function set(key, value) {
	        this.config[key] = value;
	        var out = {};
	        out[key] = value;
	        this.trigger(out);
	    },

	    getConfig: function getConfig() {
	        return this.config;
	    },

	    loadInitialData: function loadInitialData(config) {
	        config.features = new Set(config.features || []);
	        this.config = config;

	        if (config.user) {
	            _momentTimezone2['default'].tz.setDefault(config.user.options.timezone);
	        }

	        this.trigger(config);
	    }
	});

	exports['default'] = ConfigStore;
	module.exports = exports['default'];

/***/ },
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(347);

	var _reactColor = __webpack_require__(358);

	var _reactFontawesome = __webpack_require__(345);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var BoxGenerator = _react2['default'].createClass({
	    displayName: 'BoxGenerator',

	    mixins: [_reactWindowMixins.OnResize],

	    getInitialState: function getInitialState() {
	        return {
	            loading: false,
	            error: false,
	            background: '#1FB6FF',
	            value: 0,
	            width: "200",
	            height: "200",
	            border: "1px solid #333",
	            borderRadius: "0px 0px 0px 0px"
	        };
	    },
	    handleChangeComplete: function handleChangeComplete(color) {

	        console.log(color);
	        this.setState({ background: color.hex });
	    },
	    handleChange: function handleChange(type, event) {
	        console.log(type);
	        switch (type) {
	            case "width":
	                this.setState({ width: event.target.value });
	                break;
	            case "height":
	                this.setState({ height: event.target.value });
	                break;
	            case "color":
	                this.setState({ background: event.target.value });
	                break;
	            case "border":
	                this.setState({ border: event.target.value });
	                break;
	            case "borderRadius":
	                this.setState({ borderRadius: event.target.value });
	                break;
	            // default:
	        }
	    },
	    getSidePanel: function getSidePanel() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'Grid col-lg-12 nopadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item  Grid-item-top Grid-item-dark' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Size'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-4 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.width,
	                        onChange: this.handleChange.bind(this, "width")
	                    }),
	                    _react2['default'].createElement('br', null),
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'action-label', style: { "text-align": "center" } },
	                        'Width'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-1' },
	                    _react2['default'].createElement(_reactFontawesome2['default'], { size: '1.5x', name: 'unlock-alt' })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-4' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.height,
	                        onChange: this.handleChange.bind(this, "height")
	                    }),
	                    _react2['default'].createElement('br', null),
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'action-label', style: { "text-align": "center" } },
	                        'Height'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Color'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.background,
	                        onChange: this.handleChange.bind(this, "color")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Border'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        style: { width: "200" },
	                        type: 'text',
	                        value: this.state.border,
	                        onChange: this.handleChange.bind(this, "border")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Border Radius'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        style: { width: "200" },
	                        type: 'text',
	                        value: this.state.borderRadius,
	                        onChange: this.handleChange.bind(this, "borderRadius")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item Grid-item-bottom' },
	                '…'
	            )
	        );
	    },
	    render: function render() {
	        var box_style = {
	            "width": this.state.width,
	            "height": this.state.height,
	            "borderRadius": this.state.borderRadius,
	            "background": this.state.background,
	            "border": this.state.border
	        };
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container col-lg-12', style: { "height": this.state.window.height - 60 } },
	            _react2['default'].createElement(
	                'div',
	                { className: 'row', style: { "height": this.state.window.height - 60 } },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-8 subject' },
	                    _react2['default'].createElement('div', { className: 'element', style: box_style }),
	                    this.state.error
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-4 nopadding', style: { "border": "1px solid #cccccc", "height": "100%", "background": "#F7F7F7" } },
	                    this.getSidePanel()
	                )
	            )
	        );
	    }
	});

	exports['default'] = BoxGenerator;
	module.exports = exports['default'];

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  OnResize: __webpack_require__(348),
	  OnScroll: __webpack_require__(356),
	  OnUnload: __webpack_require__(357)
	};



/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/*global window */

	var throttle = __webpack_require__(349);

	module.exports = {
	  getInitialState: function() {
	    var defaults = { window: { height: 0, width: 0 }, document: { height: 0, width: 0 } };
	    return !this.onResize ? defaults : null;
	  },

	  componentWillMount: function() {
	    if (!this.onResize) {
	      this.onResize = function() {
	        this.setState({
	          window: { height: window.innerHeight, width: window.innerWidth },
	          document: { height: document.body.clientHeight, width: document.body.clientWidth }
	        });
	      }.bind(this);
	    }

	    this.onResize();
	  },

	  componentDidMount: function() {
	    this.onResizeThrottled = throttle(this.onResize, 10);
	    window.addEventListener("resize", this.onResizeThrottled);
	  },

	  componentWillUnmount: function() {
	    window.removeEventListener("resize", this.onResizeThrottled);
	  }
	};


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var debounce = __webpack_require__(350),
	    isFunction = __webpack_require__(351),
	    isObject = __webpack_require__(352);

	/** Used as an internal `_.debounce` options object */
	var debounceOptions = {
	  'leading': false,
	  'maxWait': 0,
	  'trailing': false
	};

	/**
	 * Creates a function that, when executed, will only call the `func` function
	 * at most once per every `wait` milliseconds. Provide an options object to
	 * indicate that `func` should be invoked on the leading and/or trailing edge
	 * of the `wait` timeout. Subsequent calls to the throttled function will
	 * return the result of the last `func` call.
	 *
	 * Note: If `leading` and `trailing` options are `true` `func` will be called
	 * on the trailing edge of the timeout only if the the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * @static
	 * @memberOf _
	 * @category Functions
	 * @param {Function} func The function to throttle.
	 * @param {number} wait The number of milliseconds to throttle executions to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // avoid excessively updating the position while scrolling
	 * var throttled = _.throttle(updatePosition, 100);
	 * jQuery(window).on('scroll', throttled);
	 *
	 * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
	 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	 *   'trailing': false
	 * }));
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (!isFunction(func)) {
	    throw new TypeError;
	  }
	  if (options === false) {
	    leading = false;
	  } else if (isObject(options)) {
	    leading = 'leading' in options ? options.leading : leading;
	    trailing = 'trailing' in options ? options.trailing : trailing;
	  }
	  debounceOptions.leading = leading;
	  debounceOptions.maxWait = wait;
	  debounceOptions.trailing = trailing;

	  return debounce(func, wait, debounceOptions);
	}

	module.exports = throttle;


/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var isFunction = __webpack_require__(351),
	    isObject = __webpack_require__(352),
	    now = __webpack_require__(354);

	/* Native method shortcuts for methods with the same name as other `lodash` methods */
	var nativeMax = Math.max;

	/**
	 * Creates a function that will delay the execution of `func` until after
	 * `wait` milliseconds have elapsed since the last time it was invoked.
	 * Provide an options object to indicate that `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
	 * to the debounced function will return the result of the last `func` call.
	 *
	 * Note: If `leading` and `trailing` options are `true` `func` will be called
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * @static
	 * @memberOf _
	 * @category Functions
	 * @param {Function} func The function to debounce.
	 * @param {number} wait The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
	 * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * var lazyLayout = _.debounce(calculateLayout, 150);
	 * jQuery(window).on('resize', lazyLayout);
	 *
	 * // execute `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * });
	 *
	 * // ensure `batchLog` is executed once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * source.addEventListener('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }, false);
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (!isFunction(func)) {
	    throw new TypeError;
	  }
	  wait = nativeMax(0, wait) || 0;
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = options.leading;
	    maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
	    trailing = 'trailing' in options ? options.trailing : trailing;
	  }
	  var delayed = function() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0) {
	      if (maxTimeoutId) {
	        clearTimeout(maxTimeoutId);
	      }
	      var isCalled = trailingCall;
	      maxTimeoutId = timeoutId = trailingCall = undefined;
	      if (isCalled) {
	        lastCalled = now();
	        result = func.apply(thisArg, args);
	        if (!timeoutId && !maxTimeoutId) {
	          args = thisArg = null;
	        }
	      }
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  };

	  var maxDelayed = function() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (trailing || (maxWait !== wait)) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = null;
	      }
	    }
	  };

	  return function() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = null;
	    }
	    return result;
	  };
	}

	module.exports = debounce;


/***/ },
/* 351 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */

	/**
	 * Checks if `value` is a function.
	 *
	 * @static
	 * @memberOf _
	 * @category Objects
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 */
	function isFunction(value) {
	  return typeof value == 'function';
	}

	module.exports = isFunction;


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var objectTypes = __webpack_require__(353);

	/**
	 * Checks if `value` is the language type of Object.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Objects
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // check if the value is the ECMAScript language type of Object
	  // http://es5.github.io/#x8
	  // and avoid a V8 bug
	  // http://code.google.com/p/v8/issues/detail?id=2291
	  return !!(value && objectTypes[typeof value]);
	}

	module.exports = isObject;


/***/ },
/* 353 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */

	/** Used to determine if values are of the language type Object */
	var objectTypes = {
	  'boolean': false,
	  'function': true,
	  'object': true,
	  'number': false,
	  'string': false,
	  'undefined': false
	};

	module.exports = objectTypes;


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var isNative = __webpack_require__(355);

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Utilities
	 * @example
	 *
	 * var stamp = _.now();
	 * _.defer(function() { console.log(_.now() - stamp); });
	 * // => logs the number of milliseconds it took for the deferred function to be called
	 */
	var now = isNative(now = Date.now) && now || function() {
	  return new Date().getTime();
	};

	module.exports = now;


/***/ },
/* 355 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */

	/** Used for native method references */
	var objectProto = Object.prototype;

	/** Used to resolve the internal [[Class]] of values */
	var toString = objectProto.toString;

	/** Used to detect if a method is native */
	var reNative = RegExp('^' +
	  String(toString)
	    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	    .replace(/toString| for [^\]]+/g, '.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
	 */
	function isNative(value) {
	  return typeof value == 'function' && reNative.test(value);
	}

	module.exports = isNative;


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	/*global window */

	var throttle = __webpack_require__(349);

	module.exports = {
	  getInitialState: function() {
	    return !this.onScroll ? { scroll: { x: 0, y: 0 } } : null;
	  },

	  componentDidMount: function() {
	    if (!this.onScroll) {
	      this.onScroll = function() {
	        this.setState({ scroll: { x: window.pageXOffset, y: window.pageYOffset } });
	      }.bind(this);
	    }

	    this.onScroll();
	    this.onScrollThrottled = throttle(this.onScroll, 10);
	    window.addEventListener("scroll", this.onScrollThrottled);
	  },

	  componentWillUnmount: function() {
	    window.removeEventListener("scroll", this.onScrollThrottled);
	  }
	};


/***/ },
/* 357 */
/***/ function(module, exports) {

	/*global window */

	module.exports = {
	  componentDidMount: function() {
	    if (this.onUnload) {
	      window.addEventListener("unload", this.onUnload);
	    }
	    if (this.onBeforeUnload) {
	      window.addEventListener("beforeunload", this.onBeforeUnload);
	    }
	  },

	  componentWillUnmount: function() {
	    if (this.onUnload) {
	      window.removeEventListener("unload", this.onUnload);
	    }
	    if (this.onBeforeUnload) {
	      window.removeEventListener("beforeunload", this.onBeforeUnload);
	    }
	  }
	};


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.CustomPicker = exports.TwitterPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.HuePicker = exports.GithubPicker = exports.CompactPicker = exports.ChromePicker = exports.CirclePicker = exports.BlockPicker = exports.AlphaPicker = undefined;

	var _Alpha = __webpack_require__(359);

	Object.defineProperty(exports, 'AlphaPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Alpha).default;
	  }
	});

	var _Block = __webpack_require__(577);

	Object.defineProperty(exports, 'BlockPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Block).default;
	  }
	});

	var _Circle = __webpack_require__(579);

	Object.defineProperty(exports, 'CirclePicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Circle).default;
	  }
	});

	var _Chrome = __webpack_require__(582);

	Object.defineProperty(exports, 'ChromePicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Chrome).default;
	  }
	});

	var _Compact = __webpack_require__(586);

	Object.defineProperty(exports, 'CompactPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Compact).default;
	  }
	});

	var _Github = __webpack_require__(595);

	Object.defineProperty(exports, 'GithubPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Github).default;
	  }
	});

	var _Hue = __webpack_require__(597);

	Object.defineProperty(exports, 'HuePicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hue).default;
	  }
	});

	var _Material = __webpack_require__(599);

	Object.defineProperty(exports, 'MaterialPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Material).default;
	  }
	});

	var _Photoshop = __webpack_require__(600);

	Object.defineProperty(exports, 'PhotoshopPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Photoshop).default;
	  }
	});

	var _Sketch = __webpack_require__(606);

	Object.defineProperty(exports, 'SketchPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Sketch).default;
	  }
	});

	var _Slider = __webpack_require__(609);

	Object.defineProperty(exports, 'SliderPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Slider).default;
	  }
	});

	var _Swatches = __webpack_require__(613);

	Object.defineProperty(exports, 'SwatchesPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Swatches).default;
	  }
	});

	var _Twitter = __webpack_require__(616);

	Object.defineProperty(exports, 'TwitterPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Twitter).default;
	  }
	});

	var _ColorWrap = __webpack_require__(570);

	Object.defineProperty(exports, 'CustomPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ColorWrap).default;
	  }
	});

	var _Chrome2 = _interopRequireDefault(_Chrome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Chrome2.default;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AlphaPicker = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(558);

	var _AlphaPointer = __webpack_require__(576);

	var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AlphaPicker = exports.AlphaPicker = function AlphaPicker(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      alpha: {
	        position: 'relative',
	        width: props.width,
	        height: props.height
	      },
	      Alpha: {
	        radius: '2px'
	      }
	    }
	  });

	  var handleChange = function handleChange(data, e) {
	    props.onChange && props.onChange(data, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.alpha, className: 'alpha-picker' },
	    _react2.default.createElement(_common.Alpha, _extends({
	      style: props.style
	    }, styles.Alpha, props, {
	      pointer: _AlphaPointer2.default,
	      onChange: handleChange
	    }))
	  );
	};

	AlphaPicker.defaultProps = {
	  width: '316px',
	  height: '16px'
	};

	exports.default = (0, _common.ColorWrap)(AlphaPicker);

/***/ },
/* 360 */
[867, 361],
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var _assign = __webpack_require__(362);

	var ReactChildren = __webpack_require__(363);
	var ReactComponent = __webpack_require__(375);
	var ReactPureComponent = __webpack_require__(378);
	var ReactClass = __webpack_require__(379);
	var ReactDOMFactories = __webpack_require__(384);
	var ReactElement = __webpack_require__(367);
	var ReactPropTypes = __webpack_require__(390);
	var ReactVersion = __webpack_require__(391);

	var onlyChild = __webpack_require__(392);
	var warning = __webpack_require__(369);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(385);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;

/***/ },
/* 362 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(364);
	var ReactElement = __webpack_require__(367);

	var emptyFunction = __webpack_require__(370);
	var traverseAllChildren = __webpack_require__(372);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(365);

	var invariant = __webpack_require__(366);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;

/***/ },
/* 365 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _assign = __webpack_require__(362);

	var ReactCurrentOwner = __webpack_require__(368);

	var warning = __webpack_require__(369);
	var canDefineProperty = __webpack_require__(371);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	    var shadowChildren = Array.isArray(props.children) ? props.children.slice(0) : props.children;

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      Object.defineProperty(element, '_shadowChildren', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: shadowChildren
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._shadowChildren = shadowChildren;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;

	module.exports = ReactElement;

/***/ },
/* 368 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(370);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;

/***/ },
/* 370 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(365);

	var ReactCurrentOwner = __webpack_require__(368);
	var ReactElement = __webpack_require__(367);

	var getIteratorFn = __webpack_require__(373);
	var invariant = __webpack_require__(366);
	var KeyEscapeUtils = __webpack_require__(374);
	var warning = __webpack_require__(369);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (({"__DEV__":true}).NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (({"__DEV__":true}).NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;

/***/ },
/* 373 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 374 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(365);

	var ReactNoopUpdateQueue = __webpack_require__(376);

	var canDefineProperty = __webpack_require__(371);
	var emptyObject = __webpack_require__(377);
	var invariant = __webpack_require__(366);
	var warning = __webpack_require__(369);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(369);

	function warnNoop(publicInstance, callerName) {
	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPureComponent
	 */

	'use strict';

	var _assign = __webpack_require__(362);

	var ReactComponent = __webpack_require__(375);
	var ReactNoopUpdateQueue = __webpack_require__(376);

	var emptyObject = __webpack_require__(377);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(365),
	    _assign = __webpack_require__(362);

	var ReactComponent = __webpack_require__(375);
	var ReactElement = __webpack_require__(367);
	var ReactPropTypeLocations = __webpack_require__(380);
	var ReactPropTypeLocationNames = __webpack_require__(382);
	var ReactNoopUpdateQueue = __webpack_require__(376);

	var emptyObject = __webpack_require__(377);
	var invariant = __webpack_require__(366);
	var keyMirror = __webpack_require__(381);
	var keyOf = __webpack_require__(383);
	var warning = __webpack_require__(369);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (({"__DEV__":true}).NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (({"__DEV__":true}).NODE_ENV !== 'production') {
	        ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (({"__DEV__":true}).NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(381);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(366);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;

/***/ },
/* 383 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */

	'use strict';

	var ReactElement = __webpack_require__(367);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (({"__DEV__":true}).NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(385);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(368);
	var ReactComponentTreeHook = __webpack_require__(386);
	var ReactElement = __webpack_require__(367);
	var ReactPropTypeLocations = __webpack_require__(380);

	var checkReactTypeSpec = __webpack_require__(387);

	var canDefineProperty = __webpack_require__(371);
	var getIteratorFn = __webpack_require__(373);
	var warning = __webpack_require__(369);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(365);

	var ReactCurrentOwner = __webpack_require__(368);

	var invariant = __webpack_require__(366);
	var warning = __webpack_require__(369);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var itemMap;
	var rootIDSet;

	var itemByKey;
	var rootByKey;

	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}

	var unmountedIDs = [];

	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}

	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}

	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}

	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };

	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}

	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}

	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}

	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}

	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}

	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },


	  getRegisteredIDs: getRegisteredIDs,

	  getRootIDs: getRootIDs
	};

	module.exports = ReactComponentTreeHook;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule checkReactTypeSpec
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(365);

	var ReactPropTypeLocationNames = __webpack_require__(382);
	var ReactPropTypesSecret = __webpack_require__(389);

	var invariant = __webpack_require__(366);
	var warning = __webpack_require__(369);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && ({"__DEV__":true}) && ({"__DEV__":true}).NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(386);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (({"__DEV__":true}).NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(386);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(388)))

/***/ },
/* 388 */,
/* 389 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypesSecret
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(367);
	var ReactPropTypeLocationNames = __webpack_require__(382);
	var ReactPropTypesSecret = __webpack_require__(389);

	var emptyFunction = __webpack_require__(370);
	var getIteratorFn = __webpack_require__(373);
	var warning = __webpack_require__(369);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (({"__DEV__":true}).NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (({"__DEV__":true}).NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in the next major version. You may be ' + 'seeing this warning due to a third-party PropTypes library. ' + 'See https://fb.me/react-warning-dont-call-proptypes for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    ({"__DEV__":true}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 391 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '15.3.2';

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(365);

	var ReactElement = __webpack_require__(367);

	var invariant = __webpack_require__(366);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? ({"__DEV__":true}).NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSS=exports.loop=exports.hover=exports.Component=void 0;var _objectAssign=__webpack_require__(394),_objectAssign2=_interopRequireDefault(_objectAssign),_flattenNames=__webpack_require__(395),_flattenNames2=_interopRequireDefault(_flattenNames),_mergeClasses=__webpack_require__(512),_mergeClasses2=_interopRequireDefault(_mergeClasses),_autoprefix=__webpack_require__(543),_autoprefix2=_interopRequireDefault(_autoprefix),_Component2=__webpack_require__(544),_Component3=_interopRequireDefault(_Component2),_hover2=__webpack_require__(556),_hover3=_interopRequireDefault(_hover2),_loop2=__webpack_require__(557),_loop3=_interopRequireDefault(_loop2);exports.Component=_Component3["default"],exports.hover=_hover3["default"],exports.loop=_loop3["default"];var ReactCSS=exports.ReactCSS=function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;t>r;r++)o[r-1]=arguments[r];var a=(0,_flattenNames2["default"])(o),s=(0,_mergeClasses2["default"])(e,a);return(0,_autoprefix2["default"])(s)};ReactCSS.m=_objectAssign2["default"],exports["default"]=ReactCSS;

/***/ },
/* 394 */
362,
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenNames=void 0;var _map=__webpack_require__(396),_map2=_interopRequireDefault(_map),_isPlainObject=__webpack_require__(509),_isPlainObject2=_interopRequireDefault(_isPlainObject),_isString=__webpack_require__(511),_isString2=_interopRequireDefault(_isString),flattenNames=exports.flattenNames=function e(t){var i=[];return t.map(function(t){return Array.isArray(t)&&e(t).map(function(e){return i.push(e)}),(0,_isPlainObject2["default"])(t)&&(0,_map2["default"])(t,function(e,t){e===!0&&i.push(t),i.push(t+"-"+e)}),(0,_isString2["default"])(t)&&i.push(t),t}),i};exports["default"]=flattenNames;

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(397),
	    baseIteratee = __webpack_require__(398),
	    baseMap = __webpack_require__(503),
	    isArray = __webpack_require__(461);

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = map;


/***/ },
/* 397 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(399),
	    baseMatchesProperty = __webpack_require__(484),
	    identity = __webpack_require__(499),
	    isArray = __webpack_require__(461),
	    property = __webpack_require__(500);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(400),
	    getMatchData = __webpack_require__(481),
	    matchesStrictComparable = __webpack_require__(483);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(401),
	    baseIsEqual = __webpack_require__(441);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(402),
	    stackClear = __webpack_require__(410),
	    stackDelete = __webpack_require__(411),
	    stackGet = __webpack_require__(412),
	    stackHas = __webpack_require__(413),
	    stackSet = __webpack_require__(414);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(403),
	    listCacheDelete = __webpack_require__(404),
	    listCacheGet = __webpack_require__(407),
	    listCacheHas = __webpack_require__(408),
	    listCacheSet = __webpack_require__(409);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 403 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(405);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(406);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 406 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(405);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(405);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(405);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(402);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 411 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 412 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 413 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(402),
	    Map = __webpack_require__(415),
	    MapCache = __webpack_require__(426);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(416),
	    root = __webpack_require__(422);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(417),
	    getValue = __webpack_require__(425);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(418),
	    isMasked = __webpack_require__(420),
	    isObject = __webpack_require__(419),
	    toSource = __webpack_require__(424);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(419);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 419 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(421);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(422);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(423);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 423 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 424 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 425 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(427),
	    mapCacheDelete = __webpack_require__(435),
	    mapCacheGet = __webpack_require__(438),
	    mapCacheHas = __webpack_require__(439),
	    mapCacheSet = __webpack_require__(440);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(428),
	    ListCache = __webpack_require__(402),
	    Map = __webpack_require__(415);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(429),
	    hashDelete = __webpack_require__(431),
	    hashGet = __webpack_require__(432),
	    hashHas = __webpack_require__(433),
	    hashSet = __webpack_require__(434);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(430);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(416);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 431 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(430);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(430);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(430);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(436);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(437);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 437 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(436);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(436);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(436);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(442),
	    isObject = __webpack_require__(419),
	    isObjectLike = __webpack_require__(460);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(401),
	    equalArrays = __webpack_require__(443),
	    equalByTag = __webpack_require__(449),
	    equalObjects = __webpack_require__(454),
	    getTag = __webpack_require__(475),
	    isArray = __webpack_require__(461),
	    isBuffer = __webpack_require__(462),
	    isTypedArray = __webpack_require__(465);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(444),
	    arraySome = __webpack_require__(447),
	    cacheHas = __webpack_require__(448);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(426),
	    setCacheAdd = __webpack_require__(445),
	    setCacheHas = __webpack_require__(446);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 445 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 446 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 447 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 448 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(450),
	    Uint8Array = __webpack_require__(451),
	    eq = __webpack_require__(406),
	    equalArrays = __webpack_require__(443),
	    mapToArray = __webpack_require__(452),
	    setToArray = __webpack_require__(453);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(422);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(422);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 452 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 453 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(455);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(456),
	    baseKeys = __webpack_require__(470),
	    isArrayLike = __webpack_require__(474);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(457),
	    isArguments = __webpack_require__(458),
	    isArray = __webpack_require__(461),
	    isBuffer = __webpack_require__(462),
	    isIndex = __webpack_require__(464),
	    isTypedArray = __webpack_require__(465);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 457 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(459),
	    isObjectLike = __webpack_require__(460);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(460);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && objectToString.call(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 460 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 461 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(422),
	    stubFalse = __webpack_require__(463);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(312)(module)))

/***/ },
/* 463 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 464 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(466),
	    baseUnary = __webpack_require__(468),
	    nodeUtil = __webpack_require__(469);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(467),
	    isObjectLike = __webpack_require__(460);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 467 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 468 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(423);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(312)(module)))

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(471),
	    nativeKeys = __webpack_require__(472);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 471 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(473);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 473 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(418),
	    isLength = __webpack_require__(467);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(476),
	    Map = __webpack_require__(415),
	    Promise = __webpack_require__(477),
	    Set = __webpack_require__(478),
	    WeakMap = __webpack_require__(479),
	    baseGetTag = __webpack_require__(480),
	    toSource = __webpack_require__(424);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(416),
	    root = __webpack_require__(422);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(416),
	    root = __webpack_require__(422);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(416),
	    root = __webpack_require__(422);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(416),
	    root = __webpack_require__(422);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 480 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(482),
	    keys = __webpack_require__(455);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(419);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 483 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(441),
	    get = __webpack_require__(485),
	    hasIn = __webpack_require__(496),
	    isKey = __webpack_require__(494),
	    isStrictComparable = __webpack_require__(482),
	    matchesStrictComparable = __webpack_require__(483),
	    toKey = __webpack_require__(495);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(486);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(487),
	    isKey = __webpack_require__(494),
	    toKey = __webpack_require__(495);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(461),
	    stringToPath = __webpack_require__(488);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(489),
	    toString = __webpack_require__(491);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(490);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(426);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(492);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(450),
	    arrayMap = __webpack_require__(397),
	    isArray = __webpack_require__(461),
	    isSymbol = __webpack_require__(493);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(460);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(461),
	    isSymbol = __webpack_require__(493);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(493);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(497),
	    hasPath = __webpack_require__(498);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 497 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(487),
	    isArguments = __webpack_require__(458),
	    isArray = __webpack_require__(461),
	    isIndex = __webpack_require__(464),
	    isKey = __webpack_require__(494),
	    isLength = __webpack_require__(467),
	    toKey = __webpack_require__(495);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 499 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(501),
	    basePropertyDeep = __webpack_require__(502),
	    isKey = __webpack_require__(494),
	    toKey = __webpack_require__(495);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 501 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(486);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(504),
	    isArrayLike = __webpack_require__(474);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(505),
	    createBaseEach = __webpack_require__(508);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(506),
	    keys = __webpack_require__(455);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(507);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 507 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(474);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(510),
	    isObjectLike = __webpack_require__(460);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(473);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(461),
	    isObjectLike = __webpack_require__(460);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeClasses=void 0;var _map=__webpack_require__(396),_map2=_interopRequireDefault(_map),_cloneDeep=__webpack_require__(513),_cloneDeep2=_interopRequireDefault(_cloneDeep),_objectAssign=__webpack_require__(394),_objectAssign2=_interopRequireDefault(_objectAssign),mergeClasses=exports.mergeClasses=function(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],r=e["default"]&&(0,_cloneDeep2["default"])(e["default"])||{};return t.map(function(t){var s=e[t];return s&&(0,_map2["default"])(s,function(e,t){r[t]||(r[t]={}),(0,_objectAssign2["default"])(r[t],s[t])}),t}),r};exports["default"]=mergeClasses;

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(514);

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}

	module.exports = cloneDeep;


/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(401),
	    arrayEach = __webpack_require__(515),
	    assignValue = __webpack_require__(516),
	    baseAssign = __webpack_require__(519),
	    cloneBuffer = __webpack_require__(521),
	    copyArray = __webpack_require__(522),
	    copySymbols = __webpack_require__(523),
	    getAllKeys = __webpack_require__(526),
	    getTag = __webpack_require__(475),
	    initCloneArray = __webpack_require__(529),
	    initCloneByTag = __webpack_require__(530),
	    initCloneObject = __webpack_require__(541),
	    isArray = __webpack_require__(461),
	    isBuffer = __webpack_require__(462),
	    isObject = __webpack_require__(419),
	    keys = __webpack_require__(455);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  var props = isArr ? undefined : (isFull ? getAllKeys : keys)(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 515 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(517),
	    eq = __webpack_require__(406);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(518);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(416);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(520),
	    keys = __webpack_require__(455);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(516),
	    baseAssignValue = __webpack_require__(517);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(422);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(312)(module)))

/***/ },
/* 522 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(520),
	    getSymbols = __webpack_require__(524);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(473),
	    stubArray = __webpack_require__(525);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	module.exports = getSymbols;


/***/ },
/* 525 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(527),
	    getSymbols = __webpack_require__(524),
	    keys = __webpack_require__(455);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(528),
	    isArray = __webpack_require__(461);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 528 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 529 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(531),
	    cloneDataView = __webpack_require__(532),
	    cloneMap = __webpack_require__(533),
	    cloneRegExp = __webpack_require__(536),
	    cloneSet = __webpack_require__(537),
	    cloneSymbol = __webpack_require__(539),
	    cloneTypedArray = __webpack_require__(540);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(451);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(531);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(534),
	    arrayReduce = __webpack_require__(535),
	    mapToArray = __webpack_require__(452);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 534 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 535 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 536 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(538),
	    arrayReduce = __webpack_require__(535),
	    setToArray = __webpack_require__(453);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 538 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(450);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(531);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(542),
	    getPrototype = __webpack_require__(510),
	    isPrototype = __webpack_require__(471);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(419);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.autoprefix=void 0;var _map=__webpack_require__(396),_map2=_interopRequireDefault(_map),_objectAssign=__webpack_require__(394),_objectAssign2=_interopRequireDefault(_objectAssign),transforms={borderRadius:function(e){return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},absolute:function(e){var t=e&&e.split(" ");return{position:"absolute",top:t&&t[0],right:t&&t[1],bottom:t&&t[2],left:t&&t[3]}},extend:function(e,t){var r=t[e];return r?r:{extend:e}}},autoprefix=exports.autoprefix=function(e){var t={};return(0,_map2["default"])(e,function(e,r){var o={};(0,_map2["default"])(e,function(e,t){var r=transforms[t];r?(0,_objectAssign2["default"])(o,r(e)):o[t]=e}),t[r]=o}),t};exports["default"]=autoprefix;

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSSComponent=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(360),_react2=_interopRequireDefault(_react),_inline=__webpack_require__(545),_inline2=_interopRequireDefault(_inline),_once=__webpack_require__(551),_once2=_interopRequireDefault(_once),warning=(0,_once2["default"])(function(){return console.warn("Extending ReactCSS.Component\n  is deprecated in ReactCSS 1.0.0")}),ReactCSSComponent=exports.ReactCSSComponent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"css",value:function(e){return warning(),_inline2["default"].call(this,e)}},{key:"styles",value:function(){return this.css()}}]),t}(_react2["default"].Component);ReactCSSComponent.contextTypes={mixins:_react2["default"].PropTypes.object},exports["default"]=ReactCSSComponent;

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(419),_isObject2=_interopRequireDefault(_isObject),_checkClassStructure=__webpack_require__(546),_checkClassStructure2=_interopRequireDefault(_checkClassStructure),_combine=__webpack_require__(547),_combine2=_interopRequireDefault(_combine);module.exports=function(e){var s=this,t=[];if(!this.classes)throw console.warn("Define this.classes on `"+this.constructor.name+"`");(0,_checkClassStructure2["default"])(this.classes());var r=function(e,r){s.classes()[e]?t.push(s.classes()[e]):e&&r&&r.warn===!0&&console.warn("The `"+e+"` css class does not exist on `"+s.constructor.name+"`")};r("default");for(var i in this.props){var c=this.props[i];(0,_isObject2["default"])(c)||(c===!0?(r(i),r(i+"-true")):r(c?i+"-"+c:i+"-false"))}if(this.props&&this.props.activeBounds)for(var o=0;o<this.props.activeBounds.length;o++){var n=this.props.activeBounds[o];r(n)}for(var a in e){var u=e[a];u===!0&&r(a,{warn:!0})}var l={};return this.context&&this.context.mixins&&(l=this.context.mixins),(0,_combine2["default"])(t,l)};

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkClassStructure=void 0;var _map=__webpack_require__(396),_map2=_interopRequireDefault(_map),_isObject=__webpack_require__(419),_isObject2=_interopRequireDefault(_isObject),checkClassStructure=exports.checkClassStructure=function(e){(0,_map2["default"])(e,function(t,s){e.hasOwnProperty(s)&&((0,_isObject2["default"])(t)?(0,_map2["default"])(t,function(e,u){t.hasOwnProperty(u)&&((0,_isObject2["default"])(e)||console.warn("Make sure the value of the element `"+s+"`\n                is an object of css. You passed it `"+t+"`"))}):console.warn("Make sure the value of `"+s+"` is an object of\n          html elements. You passed it `"+t+"`"))})};exports["default"]=checkClassStructure;

/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.combine=void 0;var _merge=__webpack_require__(548),_merge2=_interopRequireDefault(_merge),_transformMixins=__webpack_require__(550),_transformMixins2=_interopRequireDefault(_transformMixins),combine=exports.combine=function(e,r){var i=(0,_merge2["default"])(e);return(0,_transformMixins2["default"])(i,r)};exports["default"]=combine;

/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _merge=__webpack_require__(549),_merge2=_interopRequireDefault(_merge),_isObject=__webpack_require__(419),_isObject2=_interopRequireDefault(_isObject),merge=function(e){return(0,_isObject2["default"])(e)&&!Array.isArray(e)?e:1===e.length?e[0]:_merge2["default"].recursive.apply(void 0,e)};exports["default"]=merge;

/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * @name JavaScript/NodeJS Merge v1.2.0
	 * @author yeikos
	 * @repository https://github.com/yeikos/js.merge

	 * Copyright 2014 yeikos - MIT license
	 * https://raw.github.com/yeikos/js.merge/master/LICENSE
	 */

	;(function(isNode) {

		/**
		 * Merge one or more objects 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		var Public = function(clone) {

			return merge(clone === true, false, arguments);

		}, publicName = 'merge';

		/**
		 * Merge two or more objects recursively 
		 * @param bool? clone
		 * @param mixed,... arguments
		 * @return object
		 */

		Public.recursive = function(clone) {

			return merge(clone === true, true, arguments);

		};

		/**
		 * Clone the input removing any reference
		 * @param mixed input
		 * @return mixed
		 */

		Public.clone = function(input) {

			var output = input,
				type = typeOf(input),
				index, size;

			if (type === 'array') {

				output = [];
				size = input.length;

				for (index=0;index<size;++index)

					output[index] = Public.clone(input[index]);

			} else if (type === 'object') {

				output = {};

				for (index in input)

					output[index] = Public.clone(input[index]);

			}

			return output;

		};

		/**
		 * Merge two objects recursively
		 * @param mixed input
		 * @param mixed extend
		 * @return mixed
		 */

		function merge_recursive(base, extend) {

			if (typeOf(base) !== 'object')

				return extend;

			for (var key in extend) {

				if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

					base[key] = merge_recursive(base[key], extend[key]);

				} else {

					base[key] = extend[key];

				}

			}

			return base;

		}

		/**
		 * Merge two or more objects
		 * @param bool clone
		 * @param bool recursive
		 * @param array argv
		 * @return object
		 */

		function merge(clone, recursive, argv) {

			var result = argv[0],
				size = argv.length;

			if (clone || typeOf(result) !== 'object')

				result = {};

			for (var index=0;index<size;++index) {

				var item = argv[index],

					type = typeOf(item);

				if (type !== 'object') continue;

				for (var key in item) {

					var sitem = clone ? Public.clone(item[key]) : item[key];

					if (recursive) {

						result[key] = merge_recursive(result[key], sitem);

					} else {

						result[key] = sitem;

					}

				}

			}

			return result;

		}

		/**
		 * Get type of variable
		 * @param mixed input
		 * @return string
		 *
		 * @see http://jsperf.com/typeofvar
		 */

		function typeOf(input) {

			return ({}).toString.call(input).slice(8, -1).toLowerCase();

		}

		if (isNode) {

			module.exports = Public;

		} else {

			window[publicName] = Public;

		}

	})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(312)(module)))

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(419),_isObject2=_interopRequireDefault(_isObject),_merge=__webpack_require__(549),_merge2=_interopRequireDefault(_merge),localProps={borderRadius:function(e){return null!==e?{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}:void 0},boxShadow:function(e){return null!==e?{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}:void 0},userSelect:function(e){return null!==e?{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}:void 0},flex:function(e){return null!==e?{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}:void 0},flexBasis:function(e){return null!==e?{WebkitFlexBasis:e,flexBasis:e}:void 0},justifyContent:function(e){return null!==e?{WebkitJustifyContent:e,justifyContent:e}:void 0},transition:function(e){return null!==e?{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}:void 0},transform:function(e){return null!==e?{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}:void 0},Absolute:function(e){if(null!==e){var r=e.split(" ");return{position:"absolute",top:r[0],right:r[1],bottom:r[2],left:r[3]}}},Extend:function(e,r){var t=r[e];return t?t:void 0}},transform=function e(r,t,o){var n=(0,_merge2["default"])(t,localProps),i={};for(var u in r){var s=r[u];if((0,_isObject2["default"])(s)&&!Array.isArray(s))i[u]=e(s,t,r);else if(n[u]){var l=n[u](s,o);for(var a in l){var f=l[a];i[a]=f}}else i[u]=s}return i};module.exports=function(e,r,t){return transform(e,r,t)};

/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	var before = __webpack_require__(552);

	/**
	 * Creates a function that is restricted to invoking `func` once. Repeat calls
	 * to the function return the value of the first invocation. The `func` is
	 * invoked with the `this` binding and arguments of the created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var initialize = _.once(createApplication);
	 * initialize();
	 * initialize();
	 * // => `createApplication` is invoked once
	 */
	function once(func) {
	  return before(2, func);
	}

	module.exports = once;


/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(553);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that invokes `func`, with the `this` binding and arguments
	 * of the created function, while it's called less than `n` times. Subsequent
	 * calls to the created function return the result of the last `func` invocation.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {number} n The number of calls at which `func` is no longer invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * jQuery(element).on('click', _.before(5, addContactToList));
	 * // => Allows adding up to 4 contacts to the list.
	 */
	function before(n, func) {
	  var result;
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n > 0) {
	      result = func.apply(this, arguments);
	    }
	    if (n <= 1) {
	      func = undefined;
	    }
	    return result;
	  };
	}

	module.exports = before;


/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(554);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(555);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(419),
	    isSymbol = __webpack_require__(493);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hover=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(360),_react2=_interopRequireDefault(_react),hover=exports.hover=function(e){return function(t){function r(){_classCallCheck(this,r);var e=_possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));return e.handleMouseOver=function(){e.setState({hover:!0})},e.handleMouseOut=function(){e.setState({hover:!1})},e.state={hover:!1},e}return _inherits(r,t),_createClass(r,[{key:"render",value:function(){return _react2["default"].createElement("div",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},_react2["default"].createElement(e,_extends({},this.props,this.state)))}}]),r}(_react2["default"].Component)};exports["default"]=hover;

/***/ },
/* 557 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var loopable=function(e,t){var l={},o=function(e){var t=arguments.length<=1||void 0===arguments[1]?!0:arguments[1];l[e]=t};return 0===e&&o("first-child"),e===t-1&&o("last-child"),(0===e||e%2===0)&&o("even"),1===Math.abs(e%2)&&o("odd"),o("nth-child",e),l};exports["default"]=loopable;

/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Alpha = __webpack_require__(559);

	Object.defineProperty(exports, 'Alpha', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Alpha).default;
	  }
	});

	var _Checkboard = __webpack_require__(563);

	Object.defineProperty(exports, 'Checkboard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checkboard).default;
	  }
	});

	var _EditableInput = __webpack_require__(564);

	Object.defineProperty(exports, 'EditableInput', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_EditableInput).default;
	  }
	});

	var _Hue = __webpack_require__(565);

	Object.defineProperty(exports, 'Hue', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hue).default;
	  }
	});

	var _Saturation = __webpack_require__(566);

	Object.defineProperty(exports, 'Saturation', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Saturation).default;
	  }
	});

	var _ColorWrap = __webpack_require__(570);

	Object.defineProperty(exports, 'ColorWrap', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ColorWrap).default;
	  }
	});

	var _Swatch = __webpack_require__(575);

	Object.defineProperty(exports, 'Swatch', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Swatch).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alpha = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _Checkboard = __webpack_require__(563);

	var _Checkboard2 = _interopRequireDefault(_Checkboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Alpha = exports.Alpha = function (_React$Component) {
	  _inherits(Alpha, _React$Component);

	  function Alpha() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Alpha);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Alpha)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (e, skip) {
	      !skip && e.preventDefault();
	      var container = _this.refs.container;
	      var containerWidth = container.clientWidth;
	      var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
	      var inIFrame = window.self !== window.top || window.document !== container.ownerDocument;
	      var left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset));

	      var a = void 0;
	      if (left < 0) {
	        a = 0;
	      } else if (left > containerWidth) {
	        a = 1;
	      } else {
	        a = Math.round(left * 100 / containerWidth) / 100;
	      }

	      if (_this.props.a !== a) {
	        _this.props.onChange({
	          h: _this.props.hsl.h,
	          s: _this.props.hsl.s,
	          l: _this.props.hsl.l,
	          a: a,
	          source: 'rgb'
	        });
	      }
	    }, _this.handleMouseDown = function (e) {
	      _this.handleChange(e, true);
	      window.addEventListener('mousemove', _this.handleChange);
	      window.addEventListener('mouseup', _this.handleMouseUp);
	    }, _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    }, _this.unbindEventListeners = function () {
	      window.removeEventListener('mousemove', _this.handleChange);
	      window.removeEventListener('mouseup', _this.handleMouseUp);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Alpha, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var rgb = this.props.rgb;
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          alpha: {
	            absolute: '0px 0px 0px 0px',
	            borderRadius: this.props.radius
	          },
	          checkboard: {
	            absolute: '0px 0px 0px 0px',
	            overflow: 'hidden'
	          },
	          gradient: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
	            boxShadow: this.props.shadow,
	            borderRadius: this.props.radius
	          },
	          container: {
	            position: 'relative',
	            height: '100%',
	            margin: '0 3px'
	          },
	          pointer: {
	            position: 'absolute',
	            left: rgb.a * 100 + '%'
	          },
	          slider: {
	            width: '4px',
	            borderRadius: '1px',
	            height: '8px',
	            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
	            background: '#fff',
	            marginTop: '1px',
	            transform: 'translateX(-2px)'
	          }
	        },
	        'overwrite': _extends({}, this.props.style)
	      }, 'overwrite');

	      var pointer = this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.alpha },
	        _react2.default.createElement(
	          'div',
	          { style: styles.checkboard },
	          _react2.default.createElement(_Checkboard2.default, null)
	        ),
	        _react2.default.createElement('div', { style: styles.gradient }),
	        _react2.default.createElement(
	          'div',
	          {
	            style: styles.container,
	            ref: 'container',
	            onMouseDown: this.handleMouseDown,
	            onTouchMove: this.handleChange,
	            onTouchStart: this.handleChange
	          },
	          _react2.default.createElement(
	            'div',
	            { style: styles.pointer, ref: 'pointer' },
	            pointer
	          )
	        )
	      );
	    }
	  }]);

	  return Alpha;
	}(_react2.default.Component);

	exports.default = Alpha;

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(561);

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(562);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 562 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Checkboard = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var checkboardCache = {};

	function renderCheckboard(c1, c2, size) {
	  if (typeof document === 'undefined') return null; // Dont Render On Server
	  var canvas = document.createElement('canvas');
	  canvas.width = canvas.height = size * 2;
	  var ctx = canvas.getContext('2d');
	  if (!ctx) return null; // If no context can be found, return early.
	  ctx.fillStyle = c1;
	  ctx.fillRect(0, 0, canvas.width, canvas.height);
	  ctx.fillStyle = c2;
	  ctx.fillRect(0, 0, size, size);
	  ctx.translate(size, size);
	  ctx.fillRect(0, 0, size, size);
	  return canvas.toDataURL();
	}

	function getCheckboard(c1, c2, size) {
	  var key = c1 + ',' + c2 + ', ' + size;
	  var checkboard = renderCheckboard(c1, c2, size);

	  if (checkboardCache[key]) {
	    return checkboardCache[key];
	  }
	  checkboardCache[key] = checkboard;
	  return checkboard;
	}

	var Checkboard = exports.Checkboard = function (_React$Component) {
	  _inherits(Checkboard, _React$Component);

	  function Checkboard() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Checkboard);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Checkboard)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Checkboard, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          grid: {
	            absolute: '0px 0px 0px 0px',
	            background: 'url(' + getCheckboard(this.props.white, this.props.grey, this.props.size) + ') center left'
	          }
	        }
	      });

	      return _react2.default.createElement('div', { style: styles.grid, ref: 'grid' });
	    }
	  }]);

	  return Checkboard;
	}(_react2.default.Component);

	Checkboard.defaultProps = {
	  size: 8,
	  white: 'transparent',
	  grey: 'rgba(0,0,0,.08)'
	};

	exports.default = Checkboard;

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EditableInput = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditableInput = exports.EditableInput = function (_React$Component) {
	  _inherits(EditableInput, _React$Component);

	  function EditableInput(props) {
	    _classCallCheck(this, EditableInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditableInput).call(this));

	    _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

	    _this.handleBlur = function () {
	      if (_this.state.blurValue) {
	        _this.setState({ value: _this.state.blurValue, blurValue: null });
	      }
	    };

	    _this.handleChange = function (e) {
	      if (!!_this.props.label) {
	        _this.props.onChange(_defineProperty({}, _this.props.label, e.target.value));
	      } else {
	        _this.props.onChange(e.target.value);
	      }

	      _this.setState({ value: e.target.value });
	    };

	    _this.handleKeyDown = function (e) {
	      var number = Number(e.target.value);
	      if (number) {
	        var amount = _this.props.arrowOffset || 1;

	        // Up
	        if (e.keyCode === 38) {
	          if (_this.props.label !== null) {
	            _this.props.onChange(_defineProperty({}, _this.props.label, number + amount));
	          } else {
	            _this.props.onChange(number + amount);
	          }

	          _this.setState({ value: number + amount });
	        }

	        // Down
	        if (e.keyCode === 40) {
	          if (_this.props.label !== null) {
	            _this.props.onChange(_defineProperty({}, _this.props.label, number - amount));
	          } else {
	            _this.props.onChange(number - amount);
	          }

	          _this.setState({ value: number - amount });
	        }
	      }
	    };

	    _this.handleDrag = function (e) {
	      if (_this.props.dragLabel) {
	        var newValue = Math.round(_this.props.value + e.movementX);
	        if (newValue >= 0 && newValue <= _this.props.dragMax) {
	          _this.props.onChange(_defineProperty({}, _this.props.label, newValue));
	        }
	      }
	    };

	    _this.handleMouseDown = function (e) {
	      if (_this.props.dragLabel) {
	        e.preventDefault();
	        _this.handleDrag(e);
	        window.addEventListener('mousemove', _this.handleDrag);
	        window.addEventListener('mouseup', _this.handleMouseUp);
	      }
	    };

	    _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    };

	    _this.unbindEventListeners = function () {
	      window.removeEventListener('mousemove', _this.handleDrag);
	      window.removeEventListener('mouseup', _this.handleMouseUp);
	    };

	    _this.state = {
	      value: String(props.value).toUpperCase(),
	      blurValue: String(props.value).toUpperCase()
	    };
	    return _this;
	  }

	  _createClass(EditableInput, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var input = this.refs.input;
	      if (nextProps.value !== this.state.value) {
	        if (input === document.activeElement) {
	          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
	        } else {
	          this.setState({ value: String(nextProps.value).toUpperCase() });
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          wrap: {
	            position: 'relative'
	          }
	        },
	        'user-override': {
	          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
	          input: this.props.style && this.props.style.input ? this.props.style.input : {},
	          label: this.props.style && this.props.style.label ? this.props.style.label : {}
	        },
	        'dragLabel-true': {
	          label: {
	            cursor: 'ew-resize'
	          }
	        }
	      }, {
	        'user-override': true
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrap, ref: 'container' },
	        _react2.default.createElement('input', {
	          style: styles.input,
	          ref: 'input',
	          value: this.state.value,
	          onKeyDown: this.handleKeyDown,
	          onChange: this.handleChange,
	          onBlur: this.handleBlur,
	          placeholder: this.props.placeholder
	        }),
	        this.props.label ? _react2.default.createElement(
	          'span',
	          { style: styles.label, ref: 'label', onMouseDown: this.handleMouseDown },
	          this.props.label
	        ) : null
	      );
	    }
	  }]);

	  return EditableInput;
	}(_react2.default.Component);

	exports.default = EditableInput;

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Hue = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hue = exports.Hue = function (_React$Component) {
	  _inherits(Hue, _React$Component);

	  function Hue() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Hue);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Hue)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (e, skip) {
	      !skip && e.preventDefault();
	      var container = _this.refs.container;
	      var containerWidth = container.clientWidth;
	      var containerHeight = container.clientHeight;
	      var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
	      var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
	      var inIFrame = window.self !== window.top || window.document !== container.ownerDocument;
	      var left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset));
	      var top = y - (container.getBoundingClientRect().top + (inIFrame ? 0 : window.pageYOffset));

	      if (_this.props.direction === 'vertical') {
	        var h = void 0;
	        if (top < 0) {
	          h = 359;
	        } else if (top > containerHeight) {
	          h = 0;
	        } else {
	          var percent = -(top * 100 / containerHeight) + 100;
	          h = 360 * percent / 100;
	        }

	        if (_this.props.hsl.h !== h) {
	          _this.props.onChange({
	            h: h,
	            s: _this.props.hsl.s,
	            l: _this.props.hsl.l,
	            a: _this.props.hsl.a,
	            source: 'rgb'
	          });
	        }
	      } else {
	        var _h = void 0;
	        if (left < 0) {
	          _h = 0;
	        } else if (left > containerWidth) {
	          _h = 359;
	        } else {
	          var _percent = left * 100 / containerWidth;
	          _h = 360 * _percent / 100;
	        }

	        if (_this.props.hsl.h !== _h) {
	          _this.props.onChange({
	            h: _h,
	            s: _this.props.hsl.s,
	            l: _this.props.hsl.l,
	            a: _this.props.hsl.a,
	            source: 'rgb'
	          });
	        }
	      }
	    }, _this.handleMouseDown = function (e) {
	      _this.handleChange(e, true);
	      window.addEventListener('mousemove', _this.handleChange);
	      window.addEventListener('mouseup', _this.handleMouseUp);
	    }, _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Hue, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'unbindEventListeners',
	    value: function unbindEventListeners() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          hue: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
	            borderRadius: this.props.radius,
	            boxShadow: this.props.shadow
	          },
	          container: {
	            margin: '0 2px',
	            position: 'relative',
	            height: '100%'
	          },
	          pointer: {
	            position: 'absolute',
	            left: this.props.hsl.h * 100 / 360 + '%'
	          },
	          slider: {
	            marginTop: '1px',
	            width: '4px',
	            borderRadius: '1px',
	            height: '8px',
	            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
	            background: '#fff',
	            transform: 'translateX(-2px)'
	          }
	        },
	        'direction-vertical': {
	          hue: {
	            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
	          },
	          pointer: {
	            left: '0px',
	            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.hue },
	        _react2.default.createElement(
	          'div',
	          {
	            style: styles.container,
	            ref: 'container',
	            onMouseDown: this.handleMouseDown,
	            onTouchMove: this.handleChange,
	            onTouchStart: this.handleChange
	          },
	          _react2.default.createElement(
	            'div',
	            { style: styles.pointer, ref: 'pointer' },
	            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
	          )
	        )
	      );
	    }
	  }]);

	  return Hue;
	}(_react2.default.Component);

	exports.default = Hue;

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Saturation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _throttle = __webpack_require__(567);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Saturation = exports.Saturation = function (_React$Component) {
	  _inherits(Saturation, _React$Component);

	  function Saturation(props) {
	    _classCallCheck(this, Saturation);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Saturation).call(this, props));

	    _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

	    _this.handleChange = function (e, skip) {
	      !skip && e.preventDefault();
	      var container = _this.refs.container;
	      var containerWidth = container.clientWidth;
	      var containerHeight = container.clientHeight;
	      var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
	      var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
	      var inIFrame = window.self !== window.top || window.document !== container.ownerDocument;
	      var left = x - (container.getBoundingClientRect().left + (inIFrame ? 0 : window.pageXOffset));
	      var top = y - (container.getBoundingClientRect().top + (inIFrame ? 0 : window.pageYOffset));

	      if (left < 0) {
	        left = 0;
	      } else if (left > containerWidth) {
	        left = containerWidth;
	      } else if (top < 0) {
	        top = 0;
	      } else if (top > containerHeight) {
	        top = containerHeight;
	      }

	      var saturation = left * 100 / containerWidth;
	      var bright = -(top * 100 / containerHeight) + 100;

	      _this.throttle(_this.props.onChange, {
	        h: _this.props.hsl.h,
	        s: saturation,
	        v: bright,
	        a: _this.props.hsl.a,
	        source: 'rgb'
	      });
	    };

	    _this.handleMouseDown = function (e) {
	      _this.handleChange(e, true);
	      window.addEventListener('mousemove', _this.handleChange);
	      window.addEventListener('mouseup', _this.handleMouseUp);
	    };

	    _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    };

	    _this.throttle = (0, _throttle2.default)(function (fn, data) {
	      fn(data);
	    }, 50);
	    return _this;
	  }

	  _createClass(Saturation, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'unbindEventListeners',
	    value: function unbindEventListeners() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          color: {
	            absolute: '0px 0px 0px 0px',
	            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
	            borderRadius: this.props.radius
	          },
	          white: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))'
	          },
	          black: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
	            boxShadow: this.props.shadow
	          },
	          pointer: {
	            position: 'absolute',
	            top: -(this.props.hsv.v * 100) + 100 + '%',
	            left: this.props.hsv.s * 100 + '%',
	            cursor: 'default'
	          },
	          circle: {
	            width: '4px',
	            height: '4px',
	            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
	            borderRadius: '50%',
	            cursor: 'hand',
	            transform: 'translate(-2px, -2px)'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        {
	          style: styles.color,
	          ref: 'container',
	          onMouseDown: this.handleMouseDown,
	          onTouchMove: this.handleChange,
	          onTouchStart: this.handleChange
	        },
	        _react2.default.createElement(
	          'div',
	          { style: styles.white },
	          _react2.default.createElement('div', { style: styles.black }),
	          _react2.default.createElement(
	            'div',
	            { style: styles.pointer, ref: 'pointer' },
	            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
	          )
	        )
	      );
	    }
	  }]);

	  return Saturation;
	}(_react2.default.Component);

	exports.default = Saturation;

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(568),
	    isObject = __webpack_require__(419);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(419),
	    now = __webpack_require__(569),
	    toNumber = __webpack_require__(555);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(422);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColorWrap = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _merge = __webpack_require__(549);

	var _merge2 = _interopRequireDefault(_merge);

	var _debounce = __webpack_require__(568);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
	  var ColorPicker = function (_React$Component) {
	    _inherits(ColorPicker, _React$Component);

	    function ColorPicker(props) {
	      _classCallCheck(this, ColorPicker);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPicker).call(this));

	      _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

	      _this.handleChange = function (data) {
	        var isValidColor = _color2.default.simpleCheckForValidColor(data);
	        if (isValidColor) {
	          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
	          _this.setState(colors);
	          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors);
	          _this.props.onChange && _this.props.onChange(colors);
	        }
	      };

	      _this.state = (0, _merge2.default)(_color2.default.toState(props.color, 0), {
	        visible: props.display
	      });

	      _this.debounce = (0, _debounce2.default)(function (fn, data) {
	        fn(data);
	      }, 100);
	      return _this;
	    }

	    _createClass(ColorPicker, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        this.setState((0, _merge2.default)(_color2.default.toState(nextProps.color, this.state.oldHue), {
	          visible: nextProps.display
	        }));
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, { onChange: this.handleChange }));
	      }
	    }]);

	    return ColorPicker;
	  }(_react2.default.Component);

	  ColorPicker.defaultProps = {
	    color: {
	      h: 250,
	      s: 0.50,
	      l: 0.20,
	      a: 1
	    }
	  };

	  return ColorPicker;
	};

	exports.default = ColorWrap;

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _each = __webpack_require__(572);

	var _each2 = _interopRequireDefault(_each);

	var _tinycolor = __webpack_require__(574);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
	    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
	    var checked = 0;
	    var passed = 0;
	    (0, _each2.default)(keysToCheck, function (letter) {
	      if (data[letter]) {
	        checked++;
	        if (!isNaN(data[letter])) {
	          passed++;
	        }
	      }
	    });
	    return checked === passed ? data : false;
	  },
	  toState: function toState(data, oldHue) {
	    var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
	    var hsl = color.toHsl();
	    var hsv = color.toHsv();
	    if (hsl.s === 0) {
	      hsl.h = oldHue || 0;
	      hsv.h = oldHue || 0;
	    }

	    return {
	      hsl: hsl,
	      hex: '#' + color.toHex(),
	      rgb: color.toRgb(),
	      hsv: hsv,
	      oldHue: data.h || oldHue || hsl.h,
	      source: data.source
	    };
	  },
	  isValidHex: function isValidHex(hex) {
	    return (0, _tinycolor2.default)(hex).isValid();
	  }
	};

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(573);


/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(515),
	    baseEach = __webpack_require__(504),
	    baseIteratee = __webpack_require__(398),
	    isArray = __webpack_require__(461);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = forEach;


/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// jscs: disable

	// TinyColor v1.1.2
	// https://github.com/bgrins/TinyColor
	// Brian Grinstead, MIT License

	(function() {

	var trimLeft = /^[\s,#]+/;
	var trimRight = /\s+$/;
	var tinyCounter = 0;
	var math = Math;
	var mathRound = math.round;
	var mathMin = math.min;
	var mathMax = math.max;
	var mathRandom = math.random;

	function tinycolor(color, opts) {

			color = (color) ? color : '';
			opts = opts || { };

			// If input is already a tinycolor, return itself
			if (color instanceof tinycolor) {
				 return color;
			}
			// If we are called as a function, call using new instead
			if (!(this instanceof tinycolor)) {
					return new tinycolor(color, opts);
			}

			var rgb = inputToRGB(color);
			this._originalInput = color,
			this._r = rgb.r,
			this._g = rgb.g,
			this._b = rgb.b,
			this._a = rgb.a,
			this._roundA = mathRound(100*this._a) / 100,
			this._format = opts.format || rgb.format;
			this._gradientType = opts.gradientType;

			// Don't let the range of [0,255] come back in [0,1].
			// Potentially lose a little bit of precision here, but will fix issues where
			// .5 gets interpreted as half of the total, instead of half of 1
			// If it was supposed to be 128, this was already taken care of by `inputToRgb`
			if (this._r < 1) { this._r = mathRound(this._r); }
			if (this._g < 1) { this._g = mathRound(this._g); }
			if (this._b < 1) { this._b = mathRound(this._b); }

			this._ok = rgb.ok;
			this._tc_id = tinyCounter++;
	}

	tinycolor.prototype = {
			isDark: function() {
					return this.getBrightness() < 128;
			},
			isLight: function() {
					return !this.isDark();
			},
			isValid: function() {
					return this._ok;
			},
			getOriginalInput: function() {
				return this._originalInput;
			},
			getFormat: function() {
					return this._format;
			},
			getAlpha: function() {
					return this._a;
			},
			getBrightness: function() {
					//http://www.w3.org/TR/AERT#color-contrast
					var rgb = this.toRgb();
					return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
			},
			getLuminance: function() {
					//http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
					var rgb = this.toRgb();
					var RsRGB, GsRGB, BsRGB, R, G, B;
					RsRGB = rgb.r/255;
					GsRGB = rgb.g/255;
					BsRGB = rgb.b/255;

					if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
					if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
					if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
					return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
			},
			setAlpha: function(value) {
					this._a = boundAlpha(value);
					this._roundA = mathRound(100*this._a) / 100;
					return this;
			},
			toHsv: function() {
					var hsv = rgbToHsv(this._r, this._g, this._b);
					return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
			},
			toHsvString: function() {
					var hsv = rgbToHsv(this._r, this._g, this._b);
					var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
					return (this._a == 1) ?
						"hsv("	+ h + ", " + s + "%, " + v + "%)" :
						"hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
			},
			toHsl: function() {
					var hsl = rgbToHsl(this._r, this._g, this._b);
					return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
			},
			toHslString: function() {
					var hsl = rgbToHsl(this._r, this._g, this._b);
					var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
					return (this._a == 1) ?
						"hsl("	+ h + ", " + s + "%, " + l + "%)" :
						"hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
			},
			toHex: function(allow3Char) {
					return rgbToHex(this._r, this._g, this._b, allow3Char);
			},
			toHexString: function(allow3Char) {
					return '#' + this.toHex(allow3Char);
			},
			toHex8: function() {
					return rgbaToHex(this._r, this._g, this._b, this._a);
			},
			toHex8String: function() {
					return '#' + this.toHex8();
			},
			toRgb: function() {
					return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
			},
			toRgbString: function() {
					return (this._a == 1) ?
						"rgb("	+ mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
						"rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
			},
			toPercentageRgb: function() {
					return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
			},
			toPercentageRgbString: function() {
					return (this._a == 1) ?
						"rgb("	+ mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
						"rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
			},
			toName: function() {
					if (this._a === 0) {
							return "transparent";
					}

					if (this._a < 1) {
							return false;
					}

					return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
			},
			toFilter: function(secondColor) {
					var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
					var secondHex8String = hex8String;
					var gradientType = this._gradientType ? "GradientType = 1, " : "";

					if (secondColor) {
							var s = tinycolor(secondColor);
							secondHex8String = s.toHex8String();
					}

					return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
			},
			toString: function(format) {
					var formatSet = !!format;
					format = format || this._format;

					var formattedString = false;
					var hasAlpha = this._a < 1 && this._a >= 0;
					var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

					if (needsAlphaFormat) {
							// Special case for "transparent", all other non-alpha formats
							// will return rgba when there is transparency.
							if (format === "name" && this._a === 0) {
									return this.toName();
							}
							return this.toRgbString();
					}
					if (format === "rgb") {
							formattedString = this.toRgbString();
					}
					if (format === "prgb") {
							formattedString = this.toPercentageRgbString();
					}
					if (format === "hex" || format === "hex6") {
							formattedString = this.toHexString();
					}
					if (format === "hex3") {
							formattedString = this.toHexString(true);
					}
					if (format === "hex8") {
							formattedString = this.toHex8String();
					}
					if (format === "name") {
							formattedString = this.toName();
					}
					if (format === "hsl") {
							formattedString = this.toHslString();
					}
					if (format === "hsv") {
							formattedString = this.toHsvString();
					}

					return formattedString || this.toHexString();
			},

			_applyModification: function(fn, args) {
					var color = fn.apply(null, [this].concat([].slice.call(args)));
					this._r = color._r;
					this._g = color._g;
					this._b = color._b;
					this.setAlpha(color._a);
					return this;
			},
			lighten: function() {
					return this._applyModification(lighten, arguments);
			},
			brighten: function() {
					return this._applyModification(brighten, arguments);
			},
			darken: function() {
					return this._applyModification(darken, arguments);
			},
			desaturate: function() {
					return this._applyModification(desaturate, arguments);
			},
			saturate: function() {
					return this._applyModification(saturate, arguments);
			},
			greyscale: function() {
					return this._applyModification(greyscale, arguments);
			},
			spin: function() {
					return this._applyModification(spin, arguments);
			},

			_applyCombination: function(fn, args) {
					return fn.apply(null, [this].concat([].slice.call(args)));
			},
			analogous: function() {
					return this._applyCombination(analogous, arguments);
			},
			complement: function() {
					return this._applyCombination(complement, arguments);
			},
			monochromatic: function() {
					return this._applyCombination(monochromatic, arguments);
			},
			splitcomplement: function() {
					return this._applyCombination(splitcomplement, arguments);
			},
			triad: function() {
					return this._applyCombination(triad, arguments);
			},
			tetrad: function() {
					return this._applyCombination(tetrad, arguments);
			}
	};

	// If input is an object, force 1 into "1.0" to handle ratios properly
	// String input requires "1.0" as input, so 1 will be treated as 1
	tinycolor.fromRatio = function(color, opts) {
			if (typeof color == "object") {
					var newColor = {};
					for (var i in color) {
							if (color.hasOwnProperty(i)) {
									if (i === "a") {
											newColor[i] = color[i];
									}
									else {
											newColor[i] = convertToPercentage(color[i]);
									}
							}
					}
					color = newColor;
			}

			return tinycolor(color, opts);
	};

	// Given a string or object, convert that input to RGB
	// Possible string inputs:
	//
	//		 "red"
	//		 "#f00" or "f00"
	//		 "#ff0000" or "ff0000"
	//		 "#ff000000" or "ff000000"
	//		 "rgb 255 0 0" or "rgb (255, 0, 0)"
	//		 "rgb 1.0 0 0" or "rgb (1, 0, 0)"
	//		 "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
	//		 "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
	//		 "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
	//		 "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
	//		 "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
	//
	function inputToRGB(color) {

			var rgb = { r: 0, g: 0, b: 0 };
			var a = 1;
			var ok = false;
			var format = false;

			if (typeof color == "string") {
					color = stringInputToObject(color);
			}

			if (typeof color == "object") {
					if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
							rgb = rgbToRgb(color.r, color.g, color.b);
							ok = true;
							format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
					}
					else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
							color.s = convertToPercentage(color.s, 1);
							color.v = convertToPercentage(color.v, 1);
							rgb = hsvToRgb(color.h, color.s, color.v);
							ok = true;
							format = "hsv";
					}
					else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
							color.s = convertToPercentage(color.s);
							color.l = convertToPercentage(color.l);
							rgb = hslToRgb(color.h, color.s, color.l);
							ok = true;
							format = "hsl";
					}

					if (color.hasOwnProperty("a")) {
							a = color.a;
					}
			}

			a = boundAlpha(a);

			return {
					ok: ok,
					format: color.format || format,
					r: mathMin(255, mathMax(rgb.r, 0)),
					g: mathMin(255, mathMax(rgb.g, 0)),
					b: mathMin(255, mathMax(rgb.b, 0)),
					a: a
			};
	}


	// Conversion Functions
	// --------------------

	// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
	// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

	// `rgbToRgb`
	// Handle bounds / percentage checking to conform to CSS color spec
	// <http://www.w3.org/TR/css3-color/>
	// *Assumes:* r, g, b in [0, 255] or [0, 1]
	// *Returns:* { r, g, b } in [0, 255]
	function rgbToRgb(r, g, b){
			return {
					r: bound01(r, 255) * 255,
					g: bound01(g, 255) * 255,
					b: bound01(b, 255) * 255
			};
	}

	// `rgbToHsl`
	// Converts an RGB color value to HSL.
	// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
	// *Returns:* { h, s, l } in [0,1]
	function rgbToHsl(r, g, b) {

			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);

			var max = mathMax(r, g, b), min = mathMin(r, g, b);
			var h, s, l = (max + min) / 2;

			if(max == min) {
					h = s = 0; // achromatic
			}
			else {
					var d = max - min;
					s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
					switch(max) {
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
					}

					h /= 6;
			}

			return { h: h, s: s, l: l };
	}

	// `hslToRgb`
	// Converts an HSL color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	function hslToRgb(h, s, l) {
			var r, g, b;

			h = bound01(h, 360);
			s = bound01(s, 100);
			l = bound01(l, 100);

			function hue2rgb(p, q, t) {
					if(t < 0) t += 1;
					if(t > 1) t -= 1;
					if(t < 1/6) return p + (q - p) * 6 * t;
					if(t < 1/2) return q;
					if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
					return p;
			}

			if(s === 0) {
					r = g = b = l; // achromatic
			}
			else {
					var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
					var p = 2 * l - q;
					r = hue2rgb(p, q, h + 1/3);
					g = hue2rgb(p, q, h);
					b = hue2rgb(p, q, h - 1/3);
			}

			return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHsv`
	// Converts an RGB color value to HSV
	// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
	// *Returns:* { h, s, v } in [0,1]
	function rgbToHsv(r, g, b) {

			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);

			var max = mathMax(r, g, b), min = mathMin(r, g, b);
			var h, s, v = max;

			var d = max - min;
			s = max === 0 ? 0 : d / max;

			if(max == min) {
					h = 0; // achromatic
			}
			else {
					switch(max) {
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
					}
					h /= 6;
			}
			return { h: h, s: s, v: v };
	}

	// `hsvToRgb`
	// Converts an HSV color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	 function hsvToRgb(h, s, v) {

			h = bound01(h, 360) * 6;
			s = bound01(s, 100);
			v = bound01(v, 100);

			var i = math.floor(h),
					f = h - i,
					p = v * (1 - s),
					q = v * (1 - f * s),
					t = v * (1 - (1 - f) * s),
					mod = i % 6,
					r = [v, q, p, p, t, v][mod],
					g = [t, v, v, q, p, p][mod],
					b = [p, p, t, v, v, q][mod];

			return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHex`
	// Converts an RGB color to hex
	// Assumes r, g, and b are contained in the set [0, 255]
	// Returns a 3 or 6 character hex
	function rgbToHex(r, g, b, allow3Char) {

			var hex = [
					pad2(mathRound(r).toString(16)),
					pad2(mathRound(g).toString(16)),
					pad2(mathRound(b).toString(16))
			];

			// Return a 3 character hex if possible
			if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
					return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
			}

			return hex.join("");
	}
			// `rgbaToHex`
			// Converts an RGBA color plus alpha transparency to hex
			// Assumes r, g, b and a are contained in the set [0, 255]
			// Returns an 8 character hex
			function rgbaToHex(r, g, b, a) {

					var hex = [
							pad2(convertDecimalToHex(a)),
							pad2(mathRound(r).toString(16)),
							pad2(mathRound(g).toString(16)),
							pad2(mathRound(b).toString(16))
					];

					return hex.join("");
			}

	// `equals`
	// Can be called with any tinycolor input
	tinycolor.equals = function (color1, color2) {
			if (!color1 || !color2) { return false; }
			return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
	};
	tinycolor.random = function() {
			return tinycolor.fromRatio({
					r: mathRandom(),
					g: mathRandom(),
					b: mathRandom()
			});
	};


	// Modification Functions
	// ----------------------
	// Thanks to less.js for some of the basics here
	// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

	function desaturate(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.s -= amount / 100;
			hsl.s = clamp01(hsl.s);
			return tinycolor(hsl);
	}

	function saturate(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.s += amount / 100;
			hsl.s = clamp01(hsl.s);
			return tinycolor(hsl);
	}

	function greyscale(color) {
			return tinycolor(color).desaturate(100);
	}

	function lighten (color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.l += amount / 100;
			hsl.l = clamp01(hsl.l);
			return tinycolor(hsl);
	}

	function brighten(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var rgb = tinycolor(color).toRgb();
			rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
			rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
			rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
			return tinycolor(rgb);
	}

	function darken (color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.l -= amount / 100;
			hsl.l = clamp01(hsl.l);
			return tinycolor(hsl);
	}

	// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	// Values outside of this range will be wrapped into this range.
	function spin(color, amount) {
			var hsl = tinycolor(color).toHsl();
			var hue = (mathRound(hsl.h) + amount) % 360;
			hsl.h = hue < 0 ? 360 + hue : hue;
			return tinycolor(hsl);
	}

	// Combination Functions
	// ---------------------
	// Thanks to jQuery xColor for some of the ideas behind these
	// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

	function complement(color) {
			var hsl = tinycolor(color).toHsl();
			hsl.h = (hsl.h + 180) % 360;
			return tinycolor(hsl);
	}

	function triad(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
			];
	}

	function tetrad(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
			];
	}

	function splitcomplement(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
					tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
			];
	}

	function analogous(color, results, slices) {
			results = results || 6;
			slices = slices || 30;

			var hsl = tinycolor(color).toHsl();
			var part = 360 / slices;
			var ret = [tinycolor(color)];

			for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
					hsl.h = (hsl.h + part) % 360;
					ret.push(tinycolor(hsl));
			}
			return ret;
	}

	function monochromatic(color, results) {
			results = results || 6;
			var hsv = tinycolor(color).toHsv();
			var h = hsv.h, s = hsv.s, v = hsv.v;
			var ret = [];
			var modification = 1 / results;

			while (results--) {
					ret.push(tinycolor({ h: h, s: s, v: v}));
					v = (v + modification) % 1;
			}

			return ret;
	}

	// Utility Functions
	// ---------------------

	tinycolor.mix = function(color1, color2, amount) {
			amount = (amount === 0) ? 0 : (amount || 50);

			var rgb1 = tinycolor(color1).toRgb();
			var rgb2 = tinycolor(color2).toRgb();

			var p = amount / 100;
			var w = p * 2 - 1;
			var a = rgb2.a - rgb1.a;

			var w1;

			if (w * a == -1) {
					w1 = w;
			} else {
					w1 = (w + a) / (1 + w * a);
			}

			w1 = (w1 + 1) / 2;

			var w2 = 1 - w1;

			var rgba = {
					r: rgb2.r * w1 + rgb1.r * w2,
					g: rgb2.g * w1 + rgb1.g * w2,
					b: rgb2.b * w1 + rgb1.b * w2,
					a: rgb2.a * p	+ rgb1.a * (1 - p)
			};

			return tinycolor(rgba);
	};


	// Readability Functions
	// ---------------------
	// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

	// `contrast`
	// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
	tinycolor.readability = function(color1, color2) {
			var c1 = tinycolor(color1);
			var c2 = tinycolor(color2);
			return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
	};

	// `isReadable`
	// Ensure that foreground and background color combinations meet WCAG2 guidelines.
	// The third argument is an optional Object.
	//			the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
	//			the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
	// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

	// *Example*
	//		tinycolor.isReadable("#000", "#111") => false
	//		tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false

	tinycolor.isReadable = function(color1, color2, wcag2) {
			var readability = tinycolor.readability(color1, color2);
			var wcag2Parms, out;

			out = false;

			wcag2Parms = validateWCAG2Parms(wcag2);
			switch (wcag2Parms.level + wcag2Parms.size) {
					case "AAsmall":
					case "AAAlarge":
							out = readability >= 4.5;
							break;
					case "AAlarge":
							out = readability >= 3;
							break;
					case "AAAsmall":
							out = readability >= 7;
							break;
			}
			return out;

	};

	// `mostReadable`
	// Given a base color and a list of possible foreground or background
	// colors for that base, returns the most readable color.
	// Optionally returns Black or White if the most readable color is unreadable.
	// *Example*
	//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
	//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();	// "#ffffff"
	//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
	//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


	tinycolor.mostReadable = function(baseColor, colorList, args) {
			var bestColor = null;
			var bestScore = 0;
			var readability;
			var includeFallbackColors, level, size ;
			args = args || {};
			includeFallbackColors = args.includeFallbackColors ;
			level = args.level;
			size = args.size;

			for (var i= 0; i < colorList.length ; i++) {
					readability = tinycolor.readability(baseColor, colorList[i]);
					if (readability > bestScore) {
							bestScore = readability;
							bestColor = tinycolor(colorList[i]);
					}
			}

			if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
					return bestColor;
			}
			else {
					args.includeFallbackColors=false;
					return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
			}
	};


	// Big List of Colors
	// ------------------
	// <http://www.w3.org/TR/css3-color/#svg-color>
	var names = tinycolor.names = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "0ff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000",
			blanchedalmond: "ffebcd",
			blue: "00f",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			burntsienna: "ea7e5d",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "0ff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgreen: "006400",
			darkgrey: "a9a9a9",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkslategrey: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dimgrey: "696969",
			dodgerblue: "1e90ff",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "f0f",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			green: "008000",
			greenyellow: "adff2f",
			grey: "808080",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgray: "d3d3d3",
			lightgreen: "90ee90",
			lightgrey: "d3d3d3",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslategray: "789",
			lightslategrey: "789",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "0f0",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "f0f",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370db",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "db7093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			rebeccapurple: "663399",
			red: "f00",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			slategrey: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			wheat: "f5deb3",
			white: "fff",
			whitesmoke: "f5f5f5",
			yellow: "ff0",
			yellowgreen: "9acd32"
	};

	// Make it easy to access colors via `hexNames[hex]`
	var hexNames = tinycolor.hexNames = flip(names);


	// Utilities
	// ---------

	// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
	function flip(o) {
			var flipped = { };
			for (var i in o) {
					if (o.hasOwnProperty(i)) {
							flipped[o[i]] = i;
					}
			}
			return flipped;
	}

	// Return a valid alpha value [0,1] with all invalid values being set to 1
	function boundAlpha(a) {
			a = parseFloat(a);

			if (isNaN(a) || a < 0 || a > 1) {
					a = 1;
			}

			return a;
	}

	// Take input from [0, n] and return it as [0, 1]
	function bound01(n, max) {
			if (isOnePointZero(n)) { n = "100%"; }

			var processPercent = isPercentage(n);
			n = mathMin(max, mathMax(0, parseFloat(n)));

			// Automatically convert percentage into number
			if (processPercent) {
					n = parseInt(n * max, 10) / 100;
			}

			// Handle floating point rounding errors
			if ((math.abs(n - max) < 0.000001)) {
					return 1;
			}

			// Convert into [0, 1] range if it isn't already
			return (n % max) / parseFloat(max);
	}

	// Force a number between 0 and 1
	function clamp01(val) {
			return mathMin(1, mathMax(0, val));
	}

	// Parse a base-16 hex value into a base-10 integer
	function parseIntFromHex(val) {
			return parseInt(val, 16);
	}

	// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
	// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
	function isOnePointZero(n) {
			return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
	}

	// Check to see if string passed in is a percentage
	function isPercentage(n) {
			return typeof n === "string" && n.indexOf('%') != -1;
	}

	// Force a hex value to have 2 characters
	function pad2(c) {
			return c.length == 1 ? '0' + c : '' + c;
	}

	// Replace a decimal with it's percentage value
	function convertToPercentage(n, multiplier) {
			multiplier = multiplier || 100;
			if (n <= 1) {
					n = (n * multiplier) + "%";
			}

			return n;
	}

	// Converts a decimal to a hex value
	function convertDecimalToHex(d) {
			return Math.round(parseFloat(d) * 255).toString(16);
	}
	// Converts a hex value to a decimal
	function convertHexToDecimal(h) {
			return (parseIntFromHex(h) / 255);
	}

	var matchers = (function() {

			// <http://www.w3.org/TR/css3-values/#integers>
			var CSS_INTEGER = "[-\\+]?\\d+%?";

			// <http://www.w3.org/TR/css3-values/#number-value>
			var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

			// Allow positive/negative integer/number.	Don't capture the either/or, just the entire outcome.
			var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

			// Actual matching.
			// Parentheses and commas are optional, but not required.
			// Whitespace can take the place of commas or opening paren
			var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
			var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

			return {
					rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
					rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
					hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
					hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
					hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
					hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
					hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
					hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
					hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			};
	})();

	// `stringInputToObject`
	// Permissive string parsing.	Take in a number of formats, and output an object
	// based on detected format.	Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
	function stringInputToObject(color) {

			color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
			var named = false;
			if (names[color]) {
					color = names[color];
					named = true;
			}
			else if (color == 'transparent') {
					return { r: 0, g: 0, b: 0, a: 0, format: "name" };
			}

			// Try to match string input using regular expressions.
			// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
			// Just return an object and let the conversion functions handle that.
			// This way the result will be the same whether the tinycolor is initialized with string or object.
			var match;
			if ((match = matchers.rgb.exec(color))) {
					return { r: match[1], g: match[2], b: match[3] };
			}
			if ((match = matchers.rgba.exec(color))) {
					return { r: match[1], g: match[2], b: match[3], a: match[4] };
			}
			if ((match = matchers.hsl.exec(color))) {
					return { h: match[1], s: match[2], l: match[3] };
			}
			if ((match = matchers.hsla.exec(color))) {
					return { h: match[1], s: match[2], l: match[3], a: match[4] };
			}
			if ((match = matchers.hsv.exec(color))) {
					return { h: match[1], s: match[2], v: match[3] };
			}
			if ((match = matchers.hsva.exec(color))) {
					return { h: match[1], s: match[2], v: match[3], a: match[4] };
			}
			if ((match = matchers.hex8.exec(color))) {
					return {
							a: convertHexToDecimal(match[1]),
							r: parseIntFromHex(match[2]),
							g: parseIntFromHex(match[3]),
							b: parseIntFromHex(match[4]),
							format: named ? "name" : "hex8"
					};
			}
			if ((match = matchers.hex6.exec(color))) {
					return {
							r: parseIntFromHex(match[1]),
							g: parseIntFromHex(match[2]),
							b: parseIntFromHex(match[3]),
							format: named ? "name" : "hex"
					};
			}
			if ((match = matchers.hex3.exec(color))) {
					return {
							r: parseIntFromHex(match[1] + '' + match[1]),
							g: parseIntFromHex(match[2] + '' + match[2]),
							b: parseIntFromHex(match[3] + '' + match[3]),
							format: named ? "name" : "hex"
					};
			}

			return false;
	}

	function validateWCAG2Parms(parms) {
			// return valid WCAG2 parms for isReadable.
			// If input parms are invalid, return {"level":"AA", "size":"small"}
			var level, size;
			parms = parms || {"level":"AA", "size":"small"};
			level = (parms.level || "AA").toUpperCase();
			size = (parms.size || "small").toLowerCase();
			if (level !== "AA" && level !== "AAA") {
					level = "AA";
			}
			if (size !== "small" && size !== "large") {
					size = "small";
			}
			return {"level":level, "size":size};
	}
	// Node: Export function
	if (typeof module !== "undefined" && module.exports) {
			module.exports = tinycolor;
	}
	// AMD/requirejs: Define the module
	else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// Browser: Expose to window
	else {
			window.tinycolor = tinycolor;
	}

	})();


/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Swatch = undefined;

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Swatch = exports.Swatch = function Swatch(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatch: {
	        background: props.color,
	        height: '100%',
	        width: '100%',
	        cursor: 'pointer'
	      }
	    },
	    'custom': {
	      swatch: props.style
	    }
	  }, 'custom');

	  var handleClick = function handleClick(e) {
	    props.onClick && props.onClick(props.color, e);
	  };

	  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
	};

	exports.default = Swatch;

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AlphaPointer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AlphaPointer = exports.AlphaPointer = function (_React$Component) {
	  _inherits(AlphaPointer, _React$Component);

	  function AlphaPointer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, AlphaPointer);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AlphaPointer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AlphaPointer, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: '18px',
	            height: '18px',
	            borderRadius: '50%',
	            transform: 'translate(-9px, -1px)',
	            backgroundColor: 'rgb(248, 248, 248)',
	            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	          }
	        }
	      });

	      return _react2.default.createElement('div', { style: styles.picker });
	    }
	  }]);

	  return AlphaPointer;
	}(_react2.default.Component);

	exports.default = AlphaPointer;

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Block = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	var _BlockSwatches = __webpack_require__(578);

	var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Block = exports.Block = function (_React$Component) {
	  _inherits(Block, _React$Component);

	  function Block() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Block);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Block)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
	      _color2.default.isValidHex(hex) && _this.props.onChange({
	        hex: hex,
	        source: 'hex'
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Block, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          card: {
	            width: this.props.width,
	            background: '#fff',
	            boxShadow: '0 1px rgba(0,0,0,.1)',
	            borderRadius: '6px',
	            position: 'relative'
	          },
	          head: {
	            height: '110px',
	            background: this.props.hex,
	            borderRadius: '6px 6px 0 0',
	            display: 'flex',
	            alignItems: 'center',
	            justifyContent: 'center'
	          },
	          body: {
	            padding: '10px'
	          },
	          label: {
	            fontSize: '18px',
	            color: '#fff'
	          },
	          triangle: {
	            width: '0px',
	            height: '0px',
	            borderStyle: 'solid',
	            borderWidth: '0 10px 10px 10px',
	            borderColor: 'transparent transparent ' + this.props.hex + ' transparent',
	            position: 'absolute',
	            top: '-10px',
	            left: '50%',
	            marginLeft: '-10px'
	          },
	          input: {
	            width: '100%',
	            fontSize: '12px',
	            color: '#666',
	            border: '0px',
	            outline: 'none',
	            height: '22px',
	            boxShadow: 'inset 0 0 0 1px #ddd',
	            borderRadius: '4px',
	            padding: '0 7px',
	            boxSizing: 'border-box'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.card, className: 'block-picker' },
	        _react2.default.createElement('div', { style: styles.triangle }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.head },
	          _react2.default.createElement(
	            'div',
	            { style: styles.label },
	            this.props.hex
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.body },
	          _react2.default.createElement(_BlockSwatches2.default, { colors: this.props.colors, onClick: this.handleChange }),
	          _react2.default.createElement(_common.EditableInput, {
	            placeholder: 'Hex Code',
	            style: { input: styles.input },
	            value: '',
	            onChange: this.handleChange
	          })
	        )
	      );
	    }
	  }]);

	  return Block;
	}(_react2.default.Component);

	Block.defaultProps = {
	  width: '170px',
	  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']
	};

	exports.default = (0, _common.ColorWrap)(Block);

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BlockSwatches = undefined;

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BlockSwatches = exports.BlockSwatches = function BlockSwatches(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatches: {
	        marginRight: '-10px'
	      },
	      swatch: {
	        width: '22px',
	        height: '22px',
	        float: 'left',
	        marginRight: '10px',
	        marginBottom: '10px',
	        borderRadius: '4px'
	      },
	      clear: {
	        clear: 'both'
	      }
	    }
	  });

	  var handleClick = function handleClick(color, e) {
	    props.onClick && props.onClick(color, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.swatches },
	    (0, _map2.default)(props.colors, function (c) {
	      return _react2.default.createElement(_common.Swatch, { color: c, key: c, style: styles.swatch, onClick: handleClick });
	    }),
	    _react2.default.createElement('div', { style: styles.clear })
	  );
	};

	exports.default = BlockSwatches;

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Circle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _materialColors = __webpack_require__(580);

	var _materialColors2 = _interopRequireDefault(_materialColors);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	var _CircleSwatch = __webpack_require__(581);

	var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Circle = exports.Circle = function (_React$Component) {
	  _inherits(Circle, _React$Component);

	  function Circle() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Circle);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Circle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
	      _this.props.onChange({ hex: hex, source: 'hex' });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Circle, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          card: {
	            width: this.props.width,
	            display: 'flex',
	            flexWrap: 'wrap',
	            margin: '0 -14px -14px 0'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.card, className: 'circle-picker' },
	        (0, _map2.default)(this.props.colors, function (c) {
	          return _react2.default.createElement(_CircleSwatch2.default, {
	            color: c,
	            key: c,
	            onClick: _this2.handleChange,
	            active: _this2.props.hex === c.toLowerCase()
	          });
	        })
	      );
	    }
	  }]);

	  return Circle;
	}(_react2.default.Component);

	Circle.defaultProps = {
	  width: '252px',
	  colors: [_materialColors2.default.red['500'], _materialColors2.default.pink['500'], _materialColors2.default.purple['500'], _materialColors2.default.deepPurple['500'], _materialColors2.default.indigo['500'], _materialColors2.default.blue['500'], _materialColors2.default.lightBlue['500'], _materialColors2.default.cyan['500'], _materialColors2.default.teal['500'], _materialColors2.default.green['500'], _materialColors2.default.lightGreen['500'], _materialColors2.default.lime['500'], _materialColors2.default.yellow['500'], _materialColors2.default.amber['500'], _materialColors2.default.orange['500'], _materialColors2.default.deepOrange['500'], _materialColors2.default.brown['500'], _materialColors2.default.blueGrey['500']]
	};

	exports.default = (0, _common.ColorWrap)(Circle);

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.materialColors = factory();
	  }
	})(this, function() {
	  return {"red":{"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"},"pink":{"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"},"purple":{"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"},"deepPurple":{"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"},"indigo":{"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"},"blue":{"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"},"lightBlue":{"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"},"cyan":{"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"},"teal":{"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"},"green":{"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"},"lightGreen":{"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"},"lime":{"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"},"yellow":{"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"},"amber":{"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"},"orange":{"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"},"deepOrange":{"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"},"brown":{"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"},"blueGrey":{"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"},"darkText":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"},"lightText":{"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"},"darkIcons":{"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"},"lightIcons":{"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"},"white":"#ffffff","black":"#000000"};
	});


/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CircleSwatch = undefined;

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CircleSwatch = exports.CircleSwatch = function CircleSwatch(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatch: {
	        width: '28px',
	        height: '28px',
	        margin: '0 14px 14px 0',
	        transform: 'scale(1)',
	        transition: '100ms transform ease'
	      },
	      Swatch: {
	        borderRadius: '50%',
	        background: 'transparent',
	        boxShadow: 'inset 0 0 0 14px ' + props.color,
	        transition: '100ms box-shadow ease'
	      }
	    },
	    'hover': {
	      swatch: {
	        transform: 'scale(1.2)'
	      }
	    },
	    'active': {
	      Swatch: {
	        boxShadow: 'inset 0 0 0 3px ' + props.color
	      }
	    }
	  }, props);

	  var handleClick = function handleClick(color, e) {
	    props.onClick && props.onClick(color, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.swatch },
	    _react2.default.createElement(_common.Swatch, { style: styles.Swatch, color: props.color, onClick: handleClick })
	  );
	};

	exports.default = (0, _reactcss.hover)(CircleSwatch);

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Chrome = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(558);

	var _ChromeFields = __webpack_require__(583);

	var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

	var _ChromePointer = __webpack_require__(584);

	var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

	var _ChromePointerCircle = __webpack_require__(585);

	var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chrome = exports.Chrome = function (_React$Component) {
	  _inherits(Chrome, _React$Component);

	  function Chrome() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Chrome);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Chrome)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      _this.props.onChange(data);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Chrome, [{
	    key: 'render',
	    value: function render() {
	      var rgb = this.props.rgb;
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            background: '#fff',
	            borderRadius: '2px',
	            boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
	            boxSizing: 'initial',
	            width: '225px',
	            fontFamily: 'Menlo'
	          },
	          saturation: {
	            width: '100%',
	            paddingBottom: '55%',
	            position: 'relative',
	            borderRadius: '2px 2px 0 0',
	            overflow: 'hidden'
	          },
	          Saturation: {
	            radius: '2px 2px 0 0'
	          },
	          body: {
	            padding: '16px 16px 12px'
	          },
	          controls: {
	            display: 'flex'
	          },
	          color: {
	            width: '32px'
	          },
	          swatch: {
	            marginTop: '6px',
	            width: '16px',
	            height: '16px',
	            borderRadius: '8px',
	            position: 'relative',
	            overflow: 'hidden'
	          },
	          active: {
	            absolute: '0px 0px 0px 0px',
	            borderRadius: '8px',
	            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
	            background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
	            zIndex: '2'
	          },
	          toggles: {
	            flex: '1'
	          },
	          hue: {
	            height: '10px',
	            position: 'relative',
	            marginBottom: '8px'
	          },
	          Hue: {
	            radius: '2px'
	          },
	          alpha: {
	            height: '10px',
	            position: 'relative'
	          },
	          Alpha: {
	            radius: '2px'
	          }
	        },
	        'disableAlpha': {
	          color: {
	            width: '22px'
	          },
	          alpha: {
	            display: 'none'
	          },
	          hue: {
	            marginBottom: '0px'
	          },
	          swatch: {
	            width: '10px',
	            height: '10px',
	            marginTop: '0px'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.picker, className: 'chrome-picker' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.saturation },
	          _react2.default.createElement(_common.Saturation, _extends({
	            style: styles.Saturation
	          }, this.props, {
	            pointer: _ChromePointerCircle2.default,
	            onChange: this.handleChange
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.body },
	          _react2.default.createElement(
	            'div',
	            { style: styles.controls, className: 'flexbox-fix' },
	            _react2.default.createElement(
	              'div',
	              { style: styles.color },
	              _react2.default.createElement(
	                'div',
	                { style: styles.swatch },
	                _react2.default.createElement('div', { style: styles.active }),
	                _react2.default.createElement(_common.Checkboard, null)
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.toggles },
	              _react2.default.createElement(
	                'div',
	                { style: styles.hue },
	                _react2.default.createElement(_common.Hue, _extends({
	                  style: styles.Hue
	                }, this.props, {
	                  pointer: _ChromePointer2.default,
	                  onChange: this.handleChange
	                }))
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.alpha },
	                _react2.default.createElement(_common.Alpha, _extends({
	                  style: styles.Alpha
	                }, this.props, {
	                  pointer: _ChromePointer2.default,
	                  onChange: this.handleChange
	                }))
	              )
	            )
	          ),
	          _react2.default.createElement(_ChromeFields2.default, _extends({}, this.props, {
	            onChange: this.handleChange,
	            disableAlpha: this.props.disableAlpha
	          }))
	        )
	      );
	    }
	  }]);

	  return Chrome;
	}(_react2.default.Component);

	exports.default = (0, _common.ColorWrap)(Chrome);

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/* eslint react/no-did-mount-set-state: 0 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromeFields = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChromeFields = exports.ChromeFields = function (_React$Component) {
	  _inherits(ChromeFields, _React$Component);

	  function ChromeFields() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, ChromeFields);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChromeFields)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      view: ''
	    }, _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      _this.props.onChange(data);
	    }, _this.toggleViews = function () {
	      if (_this.state.view === 'hex') {
	        _this.setState({ view: 'rgb' });
	      } else if (_this.state.view === 'rgb') {
	        _this.setState({ view: 'hsl' });
	      } else if (_this.state.view === 'hsl') {
	        if (_this.props.hsl.a === 1) {
	          _this.setState({ view: 'hex' });
	        } else {
	          _this.setState({ view: 'rgb' });
	        }
	      }
	    }, _this.handleChange = function (data) {
	      if (data.hex) {
	        _color2.default.isValidHex(data.hex) && _this.props.onChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b) {
	        _this.props.onChange({
	          r: data.r || _this.props.rgb.r,
	          g: data.g || _this.props.rgb.g,
	          b: data.b || _this.props.rgb.b,
	          source: 'rgb'
	        });
	      } else if (data.a) {
	        if (data.a < 0) {
	          data.a = 0;
	        } else if (data.a > 1) {
	          data.a = 1;
	        }

	        _this.props.onChange({
	          h: _this.props.hsl.h,
	          s: _this.props.hsl.s,
	          l: _this.props.hsl.l,
	          a: Math.round(data.a * 100) / 100,
	          source: 'rgb'
	        });
	      } else if (data.h || data.s || data.l) {
	        _this.props.onChange({
	          h: data.h || _this.props.hsl.h,
	          s: data.s && data.s.replace('%', '') || _this.props.hsl.s,
	          l: data.l && data.l.replace('%', '') || _this.props.hsl.l,
	          source: 'hsl'
	        });
	      }
	    }, _this.showHighlight = function (e) {
	      e.target.style.background = '#eee';
	    }, _this.hideHighlight = function (e) {
	      e.target.style.background = 'transparent';
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ChromeFields, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
	        this.setState({ view: 'hex' });
	      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
	        this.setState({ view: 'rgb' });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
	        this.setState({ view: 'rgb' });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          wrap: {
	            paddingTop: '16px',
	            display: 'flex'
	          },
	          fields: {
	            flex: '1',
	            display: 'flex',
	            marginLeft: '-6px'
	          },
	          field: {
	            paddingLeft: '6px',
	            width: '100%'
	          },
	          alpha: {
	            paddingLeft: '6px',
	            width: '100%'
	          },
	          toggle: {
	            width: '32px',
	            textAlign: 'right',
	            position: 'relative'
	          },
	          icon: {
	            marginRight: '-4px',
	            marginTop: '12px',
	            cursor: 'pointer',
	            position: 'relative'
	          },
	          iconHighlight: {
	            position: 'absolute',
	            width: '24px',
	            height: '28px',
	            background: '#eee',
	            borderRadius: '4px',
	            top: '10px',
	            left: '12px',
	            display: 'none'
	          },
	          input: {
	            fontSize: '11px',
	            color: '#333',
	            width: '100%',
	            borderRadius: '2px',
	            border: 'none',
	            boxShadow: 'inset 0 0 0 1px #dadada',
	            height: '21px',
	            textAlign: 'center'
	          },
	          label: {
	            textTransform: 'uppercase',
	            fontSize: '11px',
	            lineHeight: '11px',
	            color: '#969696',
	            textAlign: 'center',
	            display: 'block',
	            marginTop: '12px'
	          },
	          svg: {
	            width: '24px',
	            height: '24px',
	            border: '1px transparent solid',
	            borderRadius: '5px'
	          }
	        },
	        'disableAlpha': {
	          alpha: {
	            display: 'none'
	          }
	        }
	      }, this.props, this.state);

	      var fields = void 0;
	      if (this.state.view === 'hex') {
	        fields = _react2.default.createElement(
	          'div',
	          { style: styles.fields, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'hex', value: this.props.hex,
	              onChange: this.handleChange
	            })
	          )
	        );
	      } else if (this.state.view === 'rgb') {
	        fields = _react2.default.createElement(
	          'div',
	          { style: styles.fields, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'r',
	              value: this.props.rgb.r,
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'g',
	              value: this.props.rgb.g,
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'b',
	              value: this.props.rgb.b,
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.alpha },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'a',
	              value: this.props.rgb.a,
	              arrowOffset: 0.01,
	              onChange: this.handleChange
	            })
	          )
	        );
	      } else if (this.state.view === 'hsl') {
	        fields = _react2.default.createElement(
	          'div',
	          { style: styles.fields, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'h',
	              value: Math.round(this.props.hsl.h),
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 's',
	              value: Math.round(this.props.hsl.s * 100) + '%',
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'l',
	              value: Math.round(this.props.hsl.l * 100) + '%',
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.alpha },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'a',
	              value: this.props.hsl.a,
	              arrowOffset: 0.01,
	              onChange: this.handleChange
	            })
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrap, className: 'flexbox-fix' },
	        fields,
	        _react2.default.createElement(
	          'div',
	          { style: styles.toggle },
	          _react2.default.createElement(
	            'div',
	            { style: styles.icon, onClick: this.toggleViews, ref: 'icon' },
	            _react2.default.createElement(
	              'svg',
	              {
	                style: styles.svg,
	                viewBox: '0 0 24 24',
	                onMouseOver: this.showHighlight,
	                onMouseEnter: this.showHighlight,
	                onMouseOut: this.hideHighlight
	              },
	              _react2.default.createElement('path', {
	                ref: 'iconUp',
	                fill: '#333',
	                d: 'M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z'
	              }),
	              _react2.default.createElement('path', {
	                ref: 'iconDown',
	                fill: '#333',
	                d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z'
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ChromeFields;
	}(_react2.default.Component);

	exports.default = ChromeFields;

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromePointer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChromePointer = exports.ChromePointer = function (_React$Component) {
	  _inherits(ChromePointer, _React$Component);

	  function ChromePointer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, ChromePointer);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChromePointer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ChromePointer, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: '12px',
	            height: '12px',
	            borderRadius: '6px',
	            transform: 'translate(-6px, -1px)',
	            backgroundColor: 'rgb(248, 248, 248)',
	            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	          }
	        }
	      });

	      return _react2.default.createElement('div', { style: styles.picker });
	    }
	  }]);

	  return ChromePointer;
	}(_react2.default.Component);

	exports.default = ChromePointer;

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromePointerCircle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChromePointerCircle = exports.ChromePointerCircle = function (_React$Component) {
	  _inherits(ChromePointerCircle, _React$Component);

	  function ChromePointerCircle() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, ChromePointerCircle);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ChromePointerCircle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ChromePointerCircle, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: '12px',
	            height: '12px',
	            borderRadius: '6px',
	            boxShadow: 'inset 0 0 0 1px #fff',
	            transform: 'translate(-6px, -6px)'
	          }
	        }
	      });

	      return _react2.default.createElement('div', { style: styles.picker });
	    }
	  }]);

	  return ChromePointerCircle;
	}(_react2.default.Component);

	exports.default = ChromePointerCircle;

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Compact = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _reactMaterialDesign = __webpack_require__(587);

	var _common = __webpack_require__(558);

	var _CompactColor = __webpack_require__(593);

	var _CompactColor2 = _interopRequireDefault(_CompactColor);

	var _CompactFields = __webpack_require__(594);

	var _CompactFields2 = _interopRequireDefault(_CompactFields);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Compact = exports.Compact = function (_React$Component) {
	  _inherits(Compact, _React$Component);

	  function Compact() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Compact);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Compact)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      if (data.hex) {
	        _color2.default.isValidHex(data.hex) && _this.props.onChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else {
	        _this.props.onChange(data);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Compact, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          Compact: {
	            background: '#f6f6f6',
	            radius: '4px'
	          },
	          compact: {
	            paddingTop: '5px',
	            paddingLeft: '5px',
	            boxSizing: 'initial',
	            width: '240px'
	          },

	          clear: {
	            clear: 'both'
	          }
	        }
	      });

	      var colors = (0, _map2.default)(this.props.colors, function (c) {
	        return _react2.default.createElement(_CompactColor2.default, {
	          key: c,
	          color: c,
	          active: c.toLowerCase() === _this2.props.hex,
	          onClick: _this2.handleChange
	        });
	      });

	      return _react2.default.createElement(
	        _reactMaterialDesign.Raised,
	        { style: styles.Compact },
	        _react2.default.createElement(
	          'div',
	          { style: styles.compact, className: 'compact-picker' },
	          _react2.default.createElement(
	            'div',
	            { ref: 'colors' },
	            colors,
	            _react2.default.createElement('div', { style: styles.clear })
	          ),
	          _react2.default.createElement(_CompactFields2.default, _extends({}, this.props, { onChange: this.handleChange }))
	        )
	      );
	    }
	  }]);

	  return Compact;
	}(_react2.default.Component);

	Compact.defaultProps = {
	  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
	};

	exports.default = (0, _common.ColorWrap)(Compact);

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true,
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libComponentsRaised = __webpack_require__(588);

	var _libComponentsRaised2 = _interopRequireDefault(_libComponentsRaised);

	var _libComponentsTile = __webpack_require__(589);

	var _libComponentsTile2 = _interopRequireDefault(_libComponentsTile);

	var _libComponentsTabs = __webpack_require__(590);

	var _libComponentsTabs2 = _interopRequireDefault(_libComponentsTabs);

	exports.Raised = _libComponentsRaised2['default'];
	exports.Tile = _libComponentsTile2['default'];
	exports.Tabs = _libComponentsTabs2['default'];


/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Raised = function (_React$Component) {
	  _inherits(Raised, _React$Component);

	  function Raised() {
	    _classCallCheck(this, Raised);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Raised).apply(this, arguments));
	  }

	  _createClass(Raised, [{
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          wrap: {
	            position: 'relative'
	          },
	          content: {
	            position: 'relative'
	          },
	          bg: {
	            absolute: '0px 0px 0px 0px',
	            boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
	            borderRadius: this.props.radius,
	            background: this.props.background
	          }
	        },
	        'zDepth-0': {
	          bg: {
	            boxShadow: 'none'
	          }
	        },

	        'zDepth-1': {
	          bg: {
	            boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
	          }
	        },
	        'zDepth-2': {
	          bg: {
	            boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
	          }
	        },
	        'zDepth-3': {
	          bg: {
	            boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
	          }
	        },
	        'zDepth-4': {
	          bg: {
	            boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
	          }
	        },
	        'zDepth-5': {
	          bg: {
	            boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
	          }
	        },
	        'square': {
	          bg: {
	            borderRadius: '0'
	          }
	        },
	        'circle': {
	          bg: {
	            borderRadius: '50%'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrap },
	        _react2.default.createElement('div', { style: styles.bg }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.content },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Raised;
	}(_react2.default.Component);

	Raised.propTypes = {
	  background: _react2.default.PropTypes.string,
	  zDepth: _react2.default.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
	  radius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
	};

	Raised.defaultProps = {
	  background: '#fff',
	  zDepth: '1',
	  radius: '2px'
	};

	exports.default = Raised;

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tile = function (_React$Component) {
	  _inherits(Tile, _React$Component);

	  function Tile() {
	    _classCallCheck(this, Tile);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tile).apply(this, arguments));
	  }

	  _createClass(Tile, [{
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          tile: {
	            fontSize: '16px',
	            padding: '16px',
	            display: 'flex',
	            justifyContent: 'space-between',
	            color: this.props.color
	          },
	          primary: {
	            display: 'flex',
	            width: '100%'
	          },
	          sidebar: {
	            minWidth: '56px',
	            maxWidth: '56px',
	            flexBasis: '56px' },
	          // 72 minus 16
	          content: {
	            background: 'none',
	            flex: '1',
	            overflow: 'auto'
	          },
	          secondary: {
	            flexBasis: '42',
	            textAlign: 'center'
	          },
	          sidebarIcon: {
	            marginTop: '-12px',
	            marginLeft: '-12px',
	            marginBottom: '-12px'
	          }
	        },
	        'divider': {
	          tile: {
	            boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)'
	          }
	        },
	        'condensed': {
	          tile: {
	            paddingBottom: '0px',
	            paddingTop: '0px',
	            paddingRight: '0px'
	          },
	          sidebar: {
	            minWidth: '28px',
	            maxWidth: '28px',
	            flexBasis: '28px'
	          }
	        }
	      }, {
	        'clickable': this.props.onClick
	      }, this.props);

	      var _props$children = _slicedToArray(this.props.children, 2);

	      var sidebar = _props$children[0];
	      var content = _props$children[1];


	      return _react2.default.createElement(
	        'div',
	        { style: styles.tile, className: 'flexbox-fix' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.primary, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.sidebar, key: "sidebar-#{ sidebar }" },
	            sidebar
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.content, key: "content-#{ content }" },
	            content
	          )
	        )
	      );
	    }
	  }]);

	  return Tile;
	}(_react2.default.Component);

	;

	exports.default = Tile;

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _isString = __webpack_require__(511);

	var _isString2 = _interopRequireDefault(_isString);

	var _Tab = __webpack_require__(591);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _Link = __webpack_require__(592);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// var Ink = require('./Ink');

	// var context = {
	//   primaryColor: '#2196F3',
	//   accentColor: '#E91E63',
	//   theme: 'light'
	// }

	var Tabs = function (_React$Component) {
	  _inherits(Tabs, _React$Component);

	  function Tabs(props) {
	    _classCallCheck(this, Tabs);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this));

	    var selectedTab;
	    if (props.selectedTab < (props.tabs && props.tabs.length)) {
	      selectedTab = props.selectedTab;
	    } else {
	      selectedTab = 0;
	    }

	    _this.state = {
	      selectedTab: selectedTab
	    };

	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.slide = _this.slide.bind(_this);
	    return _this;
	  }

	  _createClass(Tabs, [{
	    key: 'handleClick',
	    value: function handleClick(tab) {
	      if (this.props.onChange) {
	        this.props.onChange(tab);
	      }

	      this.setState({
	        selectedTab: tab
	      });
	    }
	  }, {
	    key: 'slide',
	    value: function slide() {
	      if (this.props.tabs.length) {
	        var containerNode = this.refs.tabs.getDOMNode();
	        var containerLeft = containerNode.scrollLeft;
	        var containerRight = containerNode.offsetWidth + containerNode.scrollLeft;

	        var selectedNode = this.refs['tab-' + this.state.selectedTab] && this.refs['tab-' + this.state.selectedTab].getDOMNode();
	        var selectedLeft = selectedNode && selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft;
	        var selectedRight = selectedNode && selectedLeft + selectedNode.offsetWidth;

	        // scroll right if tab is off screen
	        if (selectedRight > containerRight) {
	          containerNode.scrollLeft += selectedRight - containerRight;
	        }

	        // scroll left if tab is off screen
	        if (selectedLeft < containerLeft) {
	          containerNode.scrollLeft -= containerLeft - selectedLeft;
	        }

	        // slide the indicator
	        var indicator = this.refs.indicator;
	        indicator.style.left = selectedLeft + 'px';
	        indicator.style.width = selectedNode.offsetWidth + 'px';
	        indicator.style.height = '2px';
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.slide();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selectedTab !== this.state.selectedTab) {
	        this.setState({ selectedTab: nextProps.selectedTab });
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextState.selectedTab >= (nextProps.tabs && nextProps.tabs.length)) {
	        nextState.selectedTab = nextProps.tabs.length - 1;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.slide();
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          tabs: {
	            position: 'relative',
	            background: this.props.background
	          },
	          tabWrap: {
	            display: 'flex'
	          },
	          tab: {
	            justifyContent: 'flex-start',
	            minWidth: '68px',
	            maxWidth: '240px'
	          },
	          Tab: {
	            color: this.props.color,
	            inactive: this.props.inactive,
	            capitalize: this.props.capitalize
	          },
	          indicator: {
	            height: '0',
	            position: 'absolute',
	            bottom: '0',
	            left: '0',
	            background: this.props.color,
	            transition: 'all 200ms linear'
	          }
	        },
	        'scrollable': {
	          tabs: {
	            overflowX: 'scroll'
	          },
	          tabWrap: {
	            paddingLeft: '60px',
	            justifyContent: 'flex-start',
	            width: '400%'
	          },
	          tab: {
	            width: 'auto'
	          }
	        },
	        'align-justify': {
	          tabWrap: {
	            justifyContent: 'space-between'
	          },
	          tab: {
	            width: 100 / this.props.tabs.length + '%'
	          }
	        },
	        'align-left': {
	          tabWrap: {
	            paddingLeft: '60px',
	            justifyContent: 'flex-start'
	          },
	          tab: {
	            width: 'auto'
	          }
	        },
	        'align-center': {
	          tabWrap: {
	            justifyContent: 'center'
	          },
	          tab: {
	            width: 'auto'
	          }
	        }
	      }, {
	        'scrollable': this.props.width / this.props.tabs.length < 72
	      }, this.props, this.state);

	      var tabs = [];
	      for (var i = 0; i < this.props.tabs.length; i++) {
	        var tab = this.props.tabs[i];

	        var label;
	        var callback;
	        var callbackValue;
	        var newTab;
	        if ((0, _isString2.default)(tab)) {
	          label = tab;
	          callback = null;
	        } else {
	          label = tab.label;
	          callback = tab.onClick;
	          callbackValue = tab.callbackValue;
	          newTab = tab.newTab;
	        }

	        tabs.push(_react2.default.createElement(
	          'div',
	          { style: styles.tab, ref: 'tab-' + i, key: i },
	          _react2.default.createElement(
	            _Link2.default,
	            { onClick: callback, callbackValue: callbackValue, newTab: newTab },
	            _react2.default.createElement(
	              _Tab2.default,
	              { style: styles.Tab, tab: i, selected: this.state.selectedTab === i, selectable: tab.selectable, onClick: this.handleClick },
	              label
	            )
	          )
	        ));
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: styles.tabs, ref: 'tabs' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.tabWrap, className: 'flexbox-fix' },
	          tabs
	        ),
	        _react2.default.createElement('div', { style: styles.indicator, ref: 'indicator' })
	      );
	    }
	  }]);

	  return Tabs;
	}(_react2.default.Component);

	Tabs.defaultProps = {
	  selectedTab: 0,
	  background: 'transparent',
	  color: '#fff'
	};

	exports.default = Tabs;

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tab = function (_React$Component) {
	  _inherits(Tab, _React$Component);

	  function Tab() {
	    _classCallCheck(this, Tab);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(Tab, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      if (this.props.selectable !== false) {
	        this.props.onClick(this.props.tab);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          tab: {
	            color: this.props.inactive || this.props.color,
	            cursor: 'pointer',
	            paddingLeft: '12px',
	            paddingRight: '12px',
	            height: '48px',
	            lineHeight: '48px',
	            textAlign: 'center',
	            fontSize: '14px',
	            textTransform: this.props.capitalize === false ? '' : 'uppercase',
	            fontWeight: '500',
	            whiteSpace: 'nowrap',
	            opacity: '.47',
	            transition: 'opacity 100ms linear'
	          }
	        },
	        'selected': {
	          tab: {
	            color: this.props.color,
	            opacity: '.87'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.tab, onClick: this.handleClick },
	        this.props.children
	      );
	    }
	  }]);

	  return Tab;
	}(_react2.default.Component);

	Tab.propTypes = {
	  selected: _react2.default.PropTypes.bool
	};

	Tab.defaultProps = {
	  selected: false,
	  color: '#fff'
	};

	exports.default = Tab;

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _isString = __webpack_require__(511);

	var _isString2 = _interopRequireDefault(_isString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = function (_React$Component) {
	  _inherits(Link, _React$Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(Link, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      if (this.props.onClick) {
	        this.props.onClick(e, this.props.callbackValue);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var a;
	      if ((0, _isString2.default)(this.props.onClick)) {
	        a = _react2.default.createElement(
	          'a',
	          { style: { textDecoration: 'none' }, href: this.props.onClick, target: this.props.newTab && '_blank' },
	          this.props.children
	        );
	      } else {
	        a = _react2.default.createElement(
	          'a',
	          { style: { textDecoration: 'none' }, onClick: this.handleClick },
	          this.props.children
	        );
	      }

	      return a;
	    }
	  }]);

	  return Link;
	}(_react2.default.Component);

	// Link.propTypes =
	//   onClick: React.PropTypes.oneOfType(
	//     React.PropTypes.string,
	//     React.PropTypes.func
	//   );

	Link.defaultProps = {
	  newTab: false
	};

	exports.default = Link;

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CompactColor = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CompactColor = exports.CompactColor = function (_React$Component) {
	  _inherits(CompactColor, _React$Component);

	  function CompactColor() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompactColor);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CompactColor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function () {
	      _this.props.onClick({ hex: _this.props.color });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(CompactColor, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          color: {
	            background: this.props.color,
	            width: '15px',
	            height: '15px',
	            float: 'left',
	            marginRight: '5px',
	            marginBottom: '5px',
	            position: 'relative',
	            cursor: 'pointer'
	          },
	          dot: {
	            absolute: '5px 5px 5px 5px',
	            background: '#fff',
	            borderRadius: '50%',
	            opacity: '0'
	          }
	        },
	        'active': {
	          dot: {
	            opacity: '1'
	          }
	        },
	        'color-#FFFFFF': {
	          color: {
	            boxShadow: 'inset 0 0 0 1px #ddd'
	          },
	          dot: {
	            background: '#000'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.color, ref: 'color', onClick: this.handleClick },
	        _react2.default.createElement('div', { style: styles.dot })
	      );
	    }
	  }]);

	  return CompactColor;
	}(_react2.default.Component);

	exports.default = CompactColor;

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CompactColor = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CompactColor = exports.CompactColor = function (_React$Component) {
	  _inherits(CompactColor, _React$Component);

	  function CompactColor() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompactColor);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CompactColor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      if (data.r || data.g || data.b) {
	        _this.props.onChange({
	          r: data.r || _this.props.rgb.r,
	          g: data.g || _this.props.rgb.g,
	          b: data.b || _this.props.rgb.b,
	          source: 'rgb'
	        });
	      } else {
	        _this.props.onChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(CompactColor, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          fields: {
	            display: 'flex',
	            paddingBottom: '6px',
	            paddingRight: '5px',
	            position: 'relative'
	          },
	          active: {
	            position: 'absolute',
	            top: '6px',
	            left: '5px',
	            height: '9px',
	            width: '9px',
	            background: this.props.hex
	          },
	          HEXwrap: {
	            flex: '6',
	            position: 'relative'
	          },
	          HEXinput: {
	            width: '80%',
	            padding: '0px',
	            paddingLeft: '20%',
	            border: 'none',
	            outline: 'none',
	            background: 'none',
	            fontSize: '12px',
	            color: '#333',
	            height: '16px'
	          },
	          HEXlabel: {
	            display: 'none'
	          },
	          RGBwrap: {
	            flex: '3',
	            position: 'relative'
	          },
	          RGBinput: {
	            width: '70%',
	            padding: '0px',
	            paddingLeft: '30%',
	            border: 'none',
	            outline: 'none',
	            background: 'none',
	            fontSize: '12px',
	            color: '#333',
	            height: '16px'
	          },
	          RGBlabel: {
	            position: 'absolute',
	            top: '3px',
	            left: '0px',
	            lineHeight: '16px',
	            textTransform: 'uppercase',
	            fontSize: '12px',
	            color: '#999'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.fields, className: 'flexbox-fix' },
	        _react2.default.createElement('div', { style: styles.active }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
	          label: 'hex',
	          value: this.props.hex,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'r',
	          value: this.props.rgb.r,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'g',
	          value: this.props.rgb.g,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'b',
	          value: this.props.rgb.b,
	          onChange: this.handleChange
	        })
	      );
	    }
	  }]);

	  return CompactColor;
	}(_react2.default.Component);

	exports.default = CompactColor;

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Github = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	var _GithubSwatch = __webpack_require__(596);

	var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Github = exports.Github = function (_React$Component) {
	  _inherits(Github, _React$Component);

	  function Github() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Github);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Github)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
	      _this.props.onChange({ hex: hex, source: 'hex' });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Github, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          card: {
	            width: this.props.width,
	            background: '#fff',
	            border: '1px solid rgba(0,0,0,0.2)',
	            boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
	            borderRadius: '4px',
	            position: 'relative',
	            padding: '5px',
	            display: 'flex',
	            flexWrap: 'wrap'
	          },
	          triangle: {
	            position: 'absolute',
	            border: '7px solid transparent',
	            borderBottomColor: '#fff',
	            top: '-14px',
	            left: '10px'
	          },
	          triangleShadow: {
	            position: 'absolute',
	            border: '8px solid transparent',
	            borderBottomColor: 'rgba(0,0,0,0.15)',
	            top: '-16px',
	            left: '9px'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.card, className: 'github-picker' },
	        _react2.default.createElement('div', { style: styles.triangleShadow }),
	        _react2.default.createElement('div', { style: styles.triangle }),
	        (0, _map2.default)(this.props.colors, function (c) {
	          return _react2.default.createElement(_GithubSwatch2.default, { color: c, key: c, onClick: _this2.handleChange });
	        })
	      );
	    }
	  }]);

	  return Github;
	}(_react2.default.Component);

	Github.defaultProps = {
	  width: '200px',
	  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB']
	};

	exports.default = (0, _common.ColorWrap)(Github);

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GithubSwatch = undefined;

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GithubSwatch = exports.GithubSwatch = function GithubSwatch(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatch: {
	        width: '25px',
	        height: '25px'
	      }
	    },
	    'hover': {
	      swatch: {
	        position: 'relative',
	        zIndex: '2',
	        outline: '2px solid #fff',
	        boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
	      }
	    }
	  }, props);

	  var handleClick = function handleClick(color, e) {
	    props.onClick && props.onClick(color, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.swatch },
	    _react2.default.createElement(_common.Swatch, { color: props.color, onClick: handleClick })
	  );
	};

	exports.default = (0, _reactcss.hover)(GithubSwatch);

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HuePicker = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(558);

	var _HuePointer = __webpack_require__(598);

	var _HuePointer2 = _interopRequireDefault(_HuePointer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HuePicker = exports.HuePicker = function HuePicker(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      hue: {
	        position: 'relative',
	        width: props.width,
	        height: props.height
	      },
	      Hue: {
	        radius: '2px'
	      }
	    }
	  });

	  var handleChange = function handleChange(data, e) {
	    props.onChange && props.onChange(data, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.hue, className: 'hue-picker' },
	    _react2.default.createElement(_common.Hue, _extends({}, styles.Hue, props, {
	      pointer: _HuePointer2.default,
	      onChange: handleChange
	    }))
	  );
	};

	HuePicker.defaultProps = {
	  width: '316px',
	  height: '16px'
	};

	exports.default = (0, _common.ColorWrap)(HuePicker);

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderPointer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SliderPointer = exports.SliderPointer = function (_React$Component) {
	  _inherits(SliderPointer, _React$Component);

	  function SliderPointer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, SliderPointer);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SliderPointer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SliderPointer, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: '18px',
	            height: '18px',
	            borderRadius: '50%',
	            transform: 'translate(-9px, -1px)',
	            backgroundColor: 'rgb(248, 248, 248)',
	            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	          }
	        }
	      });

	      return _react2.default.createElement('div', { style: styles.picker });
	    }
	  }]);

	  return SliderPointer;
	}(_react2.default.Component);

	exports.default = SliderPointer;

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Material = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _reactMaterialDesign = __webpack_require__(587);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Material = exports.Material = function (_React$Component) {
	  _inherits(Material, _React$Component);

	  function Material() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Material);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Material)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      if (data.hex) {
	        _color2.default.isValidHex(data.hex) && _this.props.onChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b) {
	        _this.props.onChange({
	          r: data.r || _this.props.rgb.r,
	          g: data.g || _this.props.rgb.g,
	          b: data.b || _this.props.rgb.b,
	          source: 'rgb'
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Material, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          material: {
	            width: '98px',
	            height: '98px',
	            padding: '16px',
	            fontFamily: 'Roboto'
	          },
	          HEXwrap: {
	            position: 'relative'
	          },
	          HEXinput: {
	            width: '100%',
	            marginTop: '12px',
	            fontSize: '15px',
	            color: '#333',
	            padding: '0px',
	            border: '0px',
	            borderBottom: '2px solid ' + this.props.hex,
	            outline: 'none',
	            height: '30px'
	          },
	          HEXlabel: {
	            position: 'absolute',
	            top: '0px',
	            left: '0px',
	            fontSize: '11px',
	            color: '#999999',
	            textTransform: 'capitalize'
	          },
	          Hex: {
	            style: {}
	          },
	          RGBwrap: {
	            position: 'relative'
	          },
	          RGBinput: {
	            width: '100%',
	            marginTop: '12px',
	            fontSize: '15px',
	            color: '#333',
	            padding: '0px',
	            border: '0px',
	            borderBottom: '1px solid #eee',
	            outline: 'none',
	            height: '30px'
	          },
	          RGBlabel: {
	            position: 'absolute',
	            top: '0px',
	            left: '0px',
	            fontSize: '11px',
	            color: '#999999',
	            textTransform: 'capitalize'
	          },
	          split: {
	            display: 'flex',
	            marginRight: '-10px',
	            paddingTop: '11px'
	          },
	          third: {
	            flex: '1',
	            paddingRight: '10px'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        _reactMaterialDesign.Raised,
	        null,
	        _react2.default.createElement(
	          'div',
	          { style: styles.material, className: 'material-picker' },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
	            label: 'hex',
	            value: this.props.hex,
	            onChange: this.handleChange
	          }),
	          _react2.default.createElement(
	            'div',
	            { style: styles.split, className: 'flexbox-fix' },
	            _react2.default.createElement(
	              'div',
	              { style: styles.third },
	              _react2.default.createElement(_common.EditableInput, {
	                style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	                label: 'r', value: this.props.rgb.r,
	                onChange: this.handleChange
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.third },
	              _react2.default.createElement(_common.EditableInput, {
	                style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	                label: 'g',
	                value: this.props.rgb.g,
	                onChange: this.handleChange
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.third },
	              _react2.default.createElement(_common.EditableInput, {
	                style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	                label: 'b',
	                value: this.props.rgb.b,
	                onChange: this.handleChange
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Material;
	}(_react2.default.Component);

	exports.default = (0, _common.ColorWrap)(Material);

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Photoshop = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	var _PhotoshopFields = __webpack_require__(601);

	var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

	var _PhotoshopPointerCircle = __webpack_require__(602);

	var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

	var _PhotoshopPointer = __webpack_require__(603);

	var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

	var _PhotoshopButton = __webpack_require__(604);

	var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);

	var _PhotoshopPreviews = __webpack_require__(605);

	var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Photoshop = exports.Photoshop = function (_React$Component) {
	  _inherits(Photoshop, _React$Component);

	  function Photoshop(props) {
	    _classCallCheck(this, Photoshop);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Photoshop).call(this));

	    _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]);

	    _this.handleChange = function (data) {
	      _this.props.onChange(data);
	    };

	    _this.handleAccept = function () {
	      _this.props.onAccept && _this.props.onAccept();
	    };

	    _this.handleCancel = function () {
	      _this.props.onCancel && _this.props.onCancel();
	    };

	    _this.state = {
	      currentColor: props.hex
	    };
	    return _this;
	  }

	  _createClass(Photoshop, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            background: '#DCDCDC',
	            borderRadius: '4px',
	            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
	            boxSizing: 'initial',
	            width: '513px'
	          },
	          head: {
	            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
	            borderBottom: '1px solid #B1B1B1',
	            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
	            height: '23px',
	            lineHeight: '24px',
	            borderRadius: '4px 4px 0 0',
	            fontSize: '13px',
	            color: '#4D4D4D',
	            textAlign: 'center'
	          },
	          body: {
	            padding: '15px 15px 0',
	            display: 'flex'
	          },
	          saturation: {
	            width: '256px',
	            height: '256px',
	            position: 'relative',
	            border: '2px solid #B3B3B3',
	            borderBottom: '2px solid #F0F0F0',
	            overflow: 'hidden'
	          },
	          hue: {
	            position: 'relative',
	            height: '256px',
	            width: '19px',
	            marginLeft: '10px',
	            border: '2px solid #B3B3B3',
	            borderBottom: '2px solid #F0F0F0'
	          },
	          controls: {
	            width: '180px',
	            marginLeft: '10px'
	          },
	          top: {
	            display: 'flex'
	          },
	          previews: {
	            width: '60px'
	          },
	          actions: {
	            flex: '1',
	            marginLeft: '20px'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.picker, className: 'photoshop-picker' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.head },
	          this.props.header
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.body, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.saturation },
	            _react2.default.createElement(_common.Saturation, _extends({}, this.props, {
	              pointer: _PhotoshopPointerCircle2.default,
	              onChange: this.handleChange
	            }))
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.hue },
	            _react2.default.createElement(_common.Hue, _extends({
	              direction: 'vertical'
	            }, this.props, {
	              pointer: _PhotoshopPointer2.default,
	              onChange: this.handleChange
	            }))
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.controls },
	            _react2.default.createElement(
	              'div',
	              { style: styles.top, className: 'flexbox-fix' },
	              _react2.default.createElement(
	                'div',
	                { style: styles.previews },
	                _react2.default.createElement(_PhotoshopPreviews2.default, {
	                  rgb: this.props.rgb,
	                  currentColor: this.state.currentColor
	                })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.actions },
	                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.handleAccept, active: true }),
	                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.handleCancel }),
	                _react2.default.createElement(_PhotoshopFields2.default, this.props)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Photoshop;
	}(_react2.default.Component);

	Photoshop.defaultProps = {
	  header: 'Color Picker'
	};

	exports.default = (0, _common.ColorWrap)(Photoshop);

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPicker = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PhotoshopPicker = exports.PhotoshopPicker = function (_React$Component) {
	  _inherits(PhotoshopPicker, _React$Component);

	  function PhotoshopPicker() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, PhotoshopPicker);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PhotoshopPicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      if (data['#']) {
	        _color2.default.isValidHex(data['#']) && _this.props.onChange({
	          hex: data['#'],
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b) {
	        _this.props.onChange({
	          r: data.r || _this.props.rgb.r,
	          g: data.g || _this.props.rgb.g,
	          b: data.b || _this.props.rgb.b,
	          source: 'rgb'
	        });
	      } else if (data.h || data.s || data.v) {
	        _this.props.onChange({
	          h: data.h || _this.props.hsv.h,
	          s: data.s || _this.props.hsv.s,
	          v: data.v || _this.props.hsv.v,
	          source: 'hsv'
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PhotoshopPicker, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          fields: {
	            paddingTop: '5px',
	            paddingBottom: '9px',
	            width: '80px',
	            position: 'relative'
	          },
	          divider: {
	            height: '5px'
	          },
	          RGBwrap: {
	            position: 'relative'
	          },
	          RGBinput: {
	            marginLeft: '40%',
	            width: '40%',
	            height: '18px',
	            border: '1px solid #888888',
	            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
	            marginBottom: '5px',
	            fontSize: '13px',
	            paddingLeft: '3px',
	            marginRight: '10px'
	          },
	          RGBlabel: {
	            left: '0px',
	            width: '34px',
	            textTransform: 'uppercase',
	            fontSize: '13px',
	            height: '18px',
	            lineHeight: '22px',
	            position: 'absolute'
	          },
	          HEXwrap: {
	            position: 'relative'
	          },
	          HEXinput: {
	            marginLeft: '20%',
	            width: '80%',
	            height: '18px',
	            border: '1px solid #888888',
	            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
	            marginBottom: '6px',
	            fontSize: '13px',
	            paddingLeft: '3px'
	          },
	          HEXlabel: {
	            position: 'absolute',
	            top: '0px',
	            left: '0px',
	            width: '14px',
	            textTransform: 'uppercase',
	            fontSize: '13px',
	            height: '18px',
	            lineHeight: '22px'
	          },
	          fieldSymbols: {
	            position: 'absolute',
	            top: '5px',
	            right: '-7px',
	            fontSize: '13px'
	          },
	          symbol: {
	            height: '20px',
	            lineHeight: '22px',
	            paddingBottom: '7px'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.fields },
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'h',
	          value: Math.round(this.props.hsv.h),
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 's',
	          value: Math.round(this.props.hsv.s * 100),
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'v',
	          value: Math.round(this.props.hsv.v * 100),
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement('div', { style: styles.divider }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'r',
	          value: this.props.rgb.r,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'g',
	          value: this.props.rgb.g,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	          label: 'b',
	          value: this.props.rgb.b,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement('div', { style: styles.divider }),
	        _react2.default.createElement(_common.EditableInput, {
	          style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
	          label: '#',
	          value: this.props.hex.replace('#', ''),
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.fieldSymbols },
	          _react2.default.createElement(
	            'div',
	            { style: styles.symbol },
	            '°'
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.symbol },
	            '%'
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.symbol },
	            '%'
	          )
	        )
	      );
	    }
	  }]);

	  return PhotoshopPicker;
	}(_react2.default.Component);

	exports.default = PhotoshopPicker;

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPointerCircle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function (_React$Component) {
	  _inherits(PhotoshopPointerCircle, _React$Component);

	  function PhotoshopPointerCircle() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, PhotoshopPointerCircle);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PhotoshopPointerCircle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PhotoshopPointerCircle, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: '12px',
	            height: '12px',
	            borderRadius: '6px',
	            boxShadow: 'inset 0 0 0 1px #fff',
	            transform: 'translate(-6px, -6px)'
	          }
	        },
	        'black-outline': {
	          picker: {
	            boxShadow: 'inset 0 0 0 1px #000'
	          }
	        }
	      }, {
	        'black-outline': this.props.hsl.l > 0.5
	      });

	      return _react2.default.createElement('div', { style: styles.picker });
	    }
	  }]);

	  return PhotoshopPointerCircle;
	}(_react2.default.Component);

	exports.default = PhotoshopPointerCircle;

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPointerCircle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function (_React$Component) {
	  _inherits(PhotoshopPointerCircle, _React$Component);

	  function PhotoshopPointerCircle() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, PhotoshopPointerCircle);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PhotoshopPointerCircle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PhotoshopPointerCircle, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          triangle: {
	            width: 0,
	            height: 0,
	            borderStyle: 'solid',
	            borderWidth: '4px 0 4px 6px',
	            borderColor: 'transparent transparent transparent #fff',
	            position: 'absolute',
	            top: '1px',
	            left: '1px'
	          },
	          triangleBorder: {
	            width: 0,
	            height: 0,
	            borderStyle: 'solid',
	            borderWidth: '5px 0 5px 8px',
	            borderColor: 'transparent transparent transparent #555'
	          },

	          left: {
	            Extend: 'triangleBorder',
	            transform: 'translate(-13px, -4px)'
	          },
	          leftInside: {
	            Extend: 'triangle',
	            transform: 'translate(-8px, -5px)'
	          },

	          right: {
	            Extend: 'triangleBorder',
	            transform: 'translate(20px, -14px) rotate(180deg)'
	          },
	          rightInside: {
	            Extend: 'triangle',
	            transform: 'translate(-8px, -5px)'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.pointer },
	        _react2.default.createElement(
	          'div',
	          { style: styles.left },
	          _react2.default.createElement('div', { style: styles.leftInside })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.right },
	          _react2.default.createElement('div', { style: styles.rightInside })
	        )
	      );
	    }
	  }]);

	  return PhotoshopPointerCircle;
	}(_react2.default.Component);

	exports.default = PhotoshopPointerCircle;

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopBotton = undefined;

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      button: {
	        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
	        border: '1px solid #878787',
	        borderRadius: '2px',
	        height: '20px',
	        boxShadow: '0 1px 0 0 #EAEAEA',
	        fontSize: '14px',
	        color: '#000',
	        lineHeight: '20px',
	        textAlign: 'center',
	        marginBottom: '10px',
	        cursor: 'pointer'
	      }
	    },
	    'active': {
	      button: {
	        boxShadow: '0 0 0 1px #878787'
	      }
	    }
	  }, props);

	  var handleClick = function handleClick(e) {
	    props.onClick && props.onClick(e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.button, onClick: handleClick },
	    props.label || props.children
	  );
	};

	exports.default = PhotoshopBotton;

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPreviews = undefined;

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(props) {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatches: {
	        border: '1px solid #B3B3B3',
	        borderBottom: '1px solid #F0F0F0',
	        marginBottom: '2px',
	        marginTop: '1px'
	      },
	      new: {
	        height: '34px',
	        background: 'rgb(' + props.rgb.r + ',' + props.rgb.g + ', ' + props.rgb.b + ')',
	        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
	      },
	      current: {
	        height: '34px',
	        background: props.currentColor,
	        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
	      },
	      label: {
	        fontSize: '14px',
	        color: '#000',
	        textAlign: 'center'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: styles.label },
	      'new'
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatches },
	      _react2.default.createElement('div', { style: styles.new }),
	      _react2.default.createElement('div', { style: styles.current })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.label },
	      'current'
	    )
	  );
	};

	exports.default = PhotoshopPreviews;

/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sketch = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	var _SketchFields = __webpack_require__(607);

	var _SketchFields2 = _interopRequireDefault(_SketchFields);

	var _SketchPresetColors = __webpack_require__(608);

	var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sketch = exports.Sketch = function (_React$Component) {
	  _inherits(Sketch, _React$Component);

	  function Sketch() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Sketch);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Sketch)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      _this.props.onChange(data);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Sketch, [{
	    key: 'render',
	    value: function render() {
	      var rgb = this.props.rgb;
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: this.props.width,
	            padding: '10px 10px 0',
	            boxSizing: 'initial',
	            background: '#fff',
	            borderRadius: '4px',
	            boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
	          },
	          saturation: {
	            width: '100%',
	            paddingBottom: '75%',
	            position: 'relative',
	            overflow: 'hidden'
	          },
	          Saturation: {
	            radius: '3px',
	            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	          },
	          controls: {
	            display: 'flex'
	          },
	          sliders: {
	            padding: '4px 0',
	            flex: '1'
	          },
	          color: {
	            width: '24px',
	            height: '24px',
	            position: 'relative',
	            marginTop: '4px',
	            marginLeft: '4px',
	            borderRadius: '3px'
	          },
	          activeColor: {
	            absolute: '0px 0px 0px 0px',
	            borderRadius: '2px',
	            background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
	            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	          },
	          hue: {
	            position: 'relative',
	            height: '10px',
	            overflow: 'hidden'
	          },
	          Hue: {
	            radius: '2px',
	            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	          },

	          alpha: {
	            position: 'relative',
	            height: '10px',
	            marginTop: '4px',
	            overflow: 'hidden'
	          },
	          Alpha: {
	            radius: '2px',
	            shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	          }
	        },
	        'disableAlpha': {
	          color: {
	            height: '10px'
	          },
	          hue: {
	            height: '10px'
	          },
	          alpha: {
	            display: 'none'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.picker, className: 'sketch-picker' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.saturation },
	          _react2.default.createElement(_common.Saturation, _extends({
	            style: styles.Saturation
	          }, this.props, {
	            onChange: this.handleChange
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.controls, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.sliders },
	            _react2.default.createElement(
	              'div',
	              { style: styles.hue },
	              _react2.default.createElement(_common.Hue, _extends({ style: styles.Hue }, this.props, { onChange: this.handleChange }))
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.alpha },
	              _react2.default.createElement(_common.Alpha, _extends({ style: styles.Alpha }, this.props, { onChange: this.handleChange }))
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.color },
	            _react2.default.createElement(_common.Checkboard, null),
	            _react2.default.createElement('div', { style: styles.activeColor })
	          )
	        ),
	        _react2.default.createElement(_SketchFields2.default, _extends({}, this.props, {
	          onChange: this.handleChange,
	          disableAlpha: this.props.disableAlpha
	        })),
	        _react2.default.createElement(_SketchPresetColors2.default, { colors: this.props.presetColors, onClick: this.handleChange })
	      );
	    }
	  }]);

	  return Sketch;
	}(_react2.default.Component);

	Sketch.defaultProps = {
	  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
	  width: 200
	};

	exports.default = (0, _common.ColorWrap)(Sketch);

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ShetchFields = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShetchFields = exports.ShetchFields = function (_React$Component) {
	  _inherits(ShetchFields, _React$Component);

	  function ShetchFields() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, ShetchFields);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ShetchFields)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      if (data.hex) {
	        _color2.default.isValidHex(data.hex) && _this.props.onChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b) {
	        _this.props.onChange({
	          r: data.r || _this.props.rgb.r,
	          g: data.g || _this.props.rgb.g,
	          b: data.b || _this.props.rgb.b,
	          a: _this.props.rgb.a,
	          source: 'rgb'
	        });
	      } else if (data.a) {
	        if (data.a < 0) {
	          data.a = 0;
	        } else if (data.a > 100) {
	          data.a = 100;
	        }

	        data.a = data.a / 100;
	        _this.props.onChange({
	          h: _this.props.hsl.h,
	          s: _this.props.hsl.s,
	          l: _this.props.hsl.l,
	          a: data.a,
	          source: 'rgb'
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ShetchFields, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          fields: {
	            display: 'flex',
	            paddingTop: '4px'
	          },
	          single: {
	            flex: '1',
	            paddingLeft: '6px'
	          },
	          alpha: {
	            flex: '1',
	            paddingLeft: '6px'
	          },
	          double: {
	            flex: '2'
	          },
	          input: {
	            width: '80%',
	            padding: '4px 10% 3px',
	            border: 'none',
	            boxShadow: 'inset 0 0 0 1px #ccc',
	            fontSize: '11px'
	          },
	          label: {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '11px',
	            color: '#222',
	            paddingTop: '3px',
	            paddingBottom: '4px',
	            textTransform: 'capitalize'
	          }
	        },
	        'disableAlpha': {
	          alpha: {
	            display: 'none'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.fields, className: 'flexbox-fix' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.double },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { input: styles.input, label: styles.label },
	            label: 'hex',
	            value: this.props.hex.replace('#', ''),
	            onChange: this.handleChange
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.single },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { input: styles.input, label: styles.label },
	            label: 'r',
	            value: this.props.rgb.r,
	            onChange: this.handleChange,
	            dragLabel: 'true',
	            dragMax: '255'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.single },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { input: styles.input, label: styles.label },
	            label: 'g',
	            value: this.props.rgb.g,
	            onChange: this.handleChange,
	            dragLabel: 'true',
	            dragMax: '255'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.single },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { input: styles.input, label: styles.label },
	            label: 'b',
	            value: this.props.rgb.b,
	            onChange: this.handleChange,
	            dragLabel: 'true',
	            dragMax: '255'
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.alpha },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { input: styles.input, label: styles.label },
	            label: 'a',
	            value: Math.round(this.props.rgb.a * 100),
	            onChange: this.handleChange,
	            dragLabel: 'true',
	            dragMax: '100'
	          })
	        )
	      );
	    }
	  }]);

	  return ShetchFields;
	}(_react2.default.Component);

	exports.default = ShetchFields;

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SketchPresetColors = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SketchPresetColors = exports.SketchPresetColors = function (_React$Component) {
	  _inherits(SketchPresetColors, _React$Component);

	  function SketchPresetColors() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, SketchPresetColors);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SketchPresetColors)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function (hex) {
	      _this.props.onClick({
	        hex: hex,
	        source: 'hex'
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SketchPresetColors, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          colors: {
	            margin: '0 -10px',
	            padding: '10px 0 0 10px',
	            borderTop: '1px solid #eee',
	            display: 'flex',
	            flexWrap: 'wrap'
	          },
	          swatchWrap: {
	            width: '16px',
	            height: '16px',
	            margin: '0 10px 10px 0'
	          },
	          swatch: {
	            borderRadius: '3px',
	            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
	          }
	        },
	        'no-presets': {
	          colors: {
	            display: 'none'
	          }
	        }
	      }, {
	        'no-presets': !this.props.colors || !this.props.colors.length
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.colors, className: 'flexbox-fix' },
	        (0, _map2.default)(this.props.colors, function (c) {
	          return _react2.default.createElement(
	            'div',
	            { style: styles.swatchWrap, key: c },
	            _react2.default.createElement(_common.Swatch, {
	              color: c,
	              style: styles.swatch,
	              onClick: _this2.handleClick
	            })
	          );
	        })
	      );
	    }
	  }]);

	  return SketchPresetColors;
	}(_react2.default.Component);

	exports.default = SketchPresetColors;

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Slider = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	var _SliderSwatches = __webpack_require__(610);

	var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

	var _SliderPointer = __webpack_require__(612);

	var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Slider = exports.Slider = function (_React$Component) {
	  _inherits(Slider, _React$Component);

	  function Slider() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Slider);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Slider)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      _this.props.onChange(data);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Slider, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          slider: {},
	          hue: {
	            height: '12px',
	            position: 'relative'
	          },
	          Hue: {
	            radius: '2px'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.slider, className: 'slider-picker' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.hue },
	          _react2.default.createElement(_common.Hue, _extends({
	            style: styles.Hue
	          }, this.props, {
	            pointer: _SliderPointer2.default,
	            onChange: this.handleChange
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.swatches },
	          _react2.default.createElement(_SliderSwatches2.default, _extends({}, this.props, { onClick: this.handleChange }))
	        )
	      );
	    }
	  }]);

	  return Slider;
	}(_react2.default.Component);

	exports.default = (0, _common.ColorWrap)(Slider);

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderSwatches = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _SliderSwatch = __webpack_require__(611);

	var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SliderSwatches = exports.SliderSwatches = function (_React$Component) {
	  _inherits(SliderSwatches, _React$Component);

	  function SliderSwatches() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, SliderSwatches);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SliderSwatches)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function (data) {
	      _this.props.onClick(data);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SliderSwatches, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          swatches: {
	            marginTop: '20px'
	          },
	          swatch: {
	            boxSizing: 'border-box',
	            width: '20%',
	            paddingRight: '1px',
	            float: 'left'
	          },
	          clear: {
	            clear: 'both'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.swatches },
	        _react2.default.createElement(
	          'div',
	          { style: styles.swatch },
	          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, {
	            offset: '.80',
	            active: Math.round(this.props.hsl.l * 100) / 100 === 0.80 && Math.round(this.props.hsl.s * 100) / 100 === 0.50,
	            onClick: this.handleClick,
	            first: true
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.swatch },
	          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, {
	            offset: '.65',
	            active: Math.round(this.props.hsl.l * 100) / 100 === 0.65 && Math.round(this.props.hsl.s * 100) / 100 === 0.50,
	            onClick: this.handleClick
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.swatch },
	          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, {
	            offset: '.50',
	            active: Math.round(this.props.hsl.l * 100) / 100 === 0.50 && Math.round(this.props.hsl.s * 100) / 100 === 0.50,
	            onClick: this.handleClick
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.swatch },
	          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, {
	            offset: '.35',
	            active: Math.round(this.props.hsl.l * 100) / 100 === 0.35 && Math.round(this.props.hsl.s * 100) / 100 === 0.50,
	            onClick: this.handleClick
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.swatch },
	          _react2.default.createElement(_SliderSwatch2.default, _extends({}, this.props, {
	            offset: '.20',
	            active: Math.round(this.props.hsl.l * 100) / 100 === 0.20 && Math.round(this.props.hsl.s * 100) / 100 === 0.50,
	            onClick: this.handleClick,
	            last: true
	          }))
	        ),
	        _react2.default.createElement('div', { style: styles.clear })
	      );
	    }
	  }]);

	  return SliderSwatches;
	}(_react2.default.Component);

	exports.default = SliderSwatches;

/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderSwatch = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SliderSwatch = exports.SliderSwatch = function (_React$Component) {
	  _inherits(SliderSwatch, _React$Component);

	  function SliderSwatch() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, SliderSwatch);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SliderSwatch)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function () {
	      _this.props.onClick({
	        h: _this.props.hsl.h,
	        s: 0.5,
	        l: _this.props.offset,
	        source: 'hsl'
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SliderSwatch, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          swatch: {
	            height: '12px',
	            background: 'hsl(' + this.props.hsl.h + ', 50%, ' + this.props.offset * 100 + '%)',
	            cursor: 'pointer'
	          }
	        },
	        'first': {
	          swatch: {
	            borderRadius: '2px 0 0 2px'
	          }
	        },
	        'last': {
	          swatch: {
	            borderRadius: '0 2px 2px 0'
	          }
	        },
	        'active': {
	          swatch: {
	            transform: 'scaleY(1.8)',
	            borderRadius: '3.6px/2px'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement('div', { style: styles.swatch, ref: 'swatch', onClick: this.handleClick });
	    }
	  }]);

	  return SliderSwatch;
	}(_react2.default.Component);

	exports.default = SliderSwatch;

/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderPointer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SliderPointer = exports.SliderPointer = function (_React$Component) {
	  _inherits(SliderPointer, _React$Component);

	  function SliderPointer() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, SliderPointer);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SliderPointer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SliderPointer, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: '14px',
	            height: '14px',
	            borderRadius: '6px',
	            transform: 'translate(-7px, -1px)',
	            backgroundColor: 'rgb(248, 248, 248)',
	            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	          }
	        }
	      });

	      return _react2.default.createElement('div', { style: styles.picker });
	    }
	  }]);

	  return SliderPointer;
	}(_react2.default.Component);

	exports.default = SliderPointer;

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Swatches = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _materialColors = __webpack_require__(580);

	var _materialColors2 = _interopRequireDefault(_materialColors);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	var _reactMaterialDesign = __webpack_require__(587);

	var _SwatchesGroup = __webpack_require__(614);

	var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Swatches = exports.Swatches = function (_React$Component) {
	  _inherits(Swatches, _React$Component);

	  function Swatches() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Swatches);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Swatches)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
	      _color2.default.isValidHex(data) && _this.props.onChange({
	        hex: data,
	        source: 'hex'
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Swatches, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            width: this.props.width,
	            height: this.props.height
	          },
	          overflow: {
	            height: this.props.height,
	            overflowY: 'scroll'
	          },
	          body: {
	            padding: '16px 0 6px 16px'
	          },

	          clear: {
	            clear: 'both'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.picker, className: 'swatches-picker' },
	        _react2.default.createElement(
	          _reactMaterialDesign.Raised,
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: styles.overflow },
	            _react2.default.createElement(
	              'div',
	              { style: styles.body, ref: 'body' },
	              (0, _map2.default)(this.props.colors, function (group) {
	                return _react2.default.createElement(_SwatchesGroup2.default, {
	                  key: group.toString(),
	                  group: group,
	                  active: _this2.props.hex,
	                  onClick: _this2.handleChange
	                });
	              }),
	              _react2.default.createElement('div', { style: styles.clear })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Swatches;
	}(_react2.default.Component);

	/* eslint max-len: 0*/


	Swatches.defaultProps = {
	  width: 320,
	  height: 240,
	  colors: [[_materialColors2.default.red['900'], _materialColors2.default.red['700'], _materialColors2.default.red['500'], _materialColors2.default.red['300'], _materialColors2.default.red['100']], [_materialColors2.default.pink['900'], _materialColors2.default.pink['700'], _materialColors2.default.pink['500'], _materialColors2.default.pink['300'], _materialColors2.default.pink['100']], [_materialColors2.default.purple['900'], _materialColors2.default.purple['700'], _materialColors2.default.purple['500'], _materialColors2.default.purple['300'], _materialColors2.default.purple['100']], [_materialColors2.default.deepPurple['900'], _materialColors2.default.deepPurple['700'], _materialColors2.default.deepPurple['500'], _materialColors2.default.deepPurple['300'], _materialColors2.default.deepPurple['100']], [_materialColors2.default.indigo['900'], _materialColors2.default.indigo['700'], _materialColors2.default.indigo['500'], _materialColors2.default.indigo['300'], _materialColors2.default.indigo['100']], [_materialColors2.default.blue['900'], _materialColors2.default.blue['700'], _materialColors2.default.blue['500'], _materialColors2.default.blue['300'], _materialColors2.default.blue['100']], [_materialColors2.default.lightBlue['900'], _materialColors2.default.lightBlue['700'], _materialColors2.default.lightBlue['500'], _materialColors2.default.lightBlue['300'], _materialColors2.default.lightBlue['100']], [_materialColors2.default.cyan['900'], _materialColors2.default.cyan['700'], _materialColors2.default.cyan['500'], _materialColors2.default.cyan['300'], _materialColors2.default.cyan['100']], [_materialColors2.default.teal['900'], _materialColors2.default.teal['700'], _materialColors2.default.teal['500'], _materialColors2.default.teal['300'], _materialColors2.default.teal['100']], ['#194D33', _materialColors2.default.green['700'], _materialColors2.default.green['500'], _materialColors2.default.green['300'], _materialColors2.default.green['100']], [_materialColors2.default.lightGreen['900'], _materialColors2.default.lightGreen['700'], _materialColors2.default.lightGreen['500'], _materialColors2.default.lightGreen['300'], _materialColors2.default.lightGreen['100']], [_materialColors2.default.lime['900'], _materialColors2.default.lime['700'], _materialColors2.default.lime['500'], _materialColors2.default.lime['300'], _materialColors2.default.lime['100']], [_materialColors2.default.yellow['900'], _materialColors2.default.yellow['700'], _materialColors2.default.yellow['500'], _materialColors2.default.yellow['300'], _materialColors2.default.yellow['100']], [_materialColors2.default.amber['900'], _materialColors2.default.amber['700'], _materialColors2.default.amber['500'], _materialColors2.default.amber['300'], _materialColors2.default.amber['100']], [_materialColors2.default.orange['900'], _materialColors2.default.orange['700'], _materialColors2.default.orange['500'], _materialColors2.default.orange['300'], _materialColors2.default.orange['100']], [_materialColors2.default.deepOrange['900'], _materialColors2.default.deepOrange['700'], _materialColors2.default.deepOrange['500'], _materialColors2.default.deepOrange['300'], _materialColors2.default.deepOrange['100']], [_materialColors2.default.brown['900'], _materialColors2.default.brown['700'], _materialColors2.default.brown['500'], _materialColors2.default.brown['300'], _materialColors2.default.brown['100']], [_materialColors2.default.blueGrey['900'], _materialColors2.default.blueGrey['700'], _materialColors2.default.blueGrey['500'], _materialColors2.default.blueGrey['300'], _materialColors2.default.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']]
	};

	exports.default = (0, _common.ColorWrap)(Swatches);

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SwatchesGroup = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _SwatchesColor = __webpack_require__(615);

	var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SwatchesGroup = exports.SwatchesGroup = function (_React$Component) {
	  _inherits(SwatchesGroup, _React$Component);

	  function SwatchesGroup() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, SwatchesGroup);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SwatchesGroup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function (data) {
	      _this.props.onClick(data);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SwatchesGroup, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          group: {
	            paddingBottom: '10px',
	            width: '40px',
	            float: 'left',
	            marginRight: '10px'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.group, ref: 'group' },
	        (0, _map2.default)(this.props.group, function (color, i) {
	          return _react2.default.createElement(_SwatchesColor2.default, {
	            key: color,
	            color: color,
	            active: color.toLowerCase() === _this2.props.active,
	            first: i === 0,
	            last: i === _this2.props.group.length - 1,
	            onClick: _this2.handleClick
	          });
	        })
	      );
	    }
	  }]);

	  return SwatchesGroup;
	}(_react2.default.Component);

	exports.default = SwatchesGroup;

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SwatchesColor = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SwatchesColor = exports.SwatchesColor = function (_React$Component) {
	  _inherits(SwatchesColor, _React$Component);

	  function SwatchesColor() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, SwatchesColor);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SwatchesColor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleClick = function () {
	      _this.props.onClick(_this.props.color);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SwatchesColor, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          color: {
	            width: '40px',
	            height: '24px',
	            cursor: 'pointer',
	            background: this.props.color,
	            marginBottom: '1px'
	          },
	          check: {
	            fill: '#fff',
	            marginLeft: '8px',
	            display: 'none'
	          }
	        },
	        'first': {
	          color: {
	            overflow: 'hidden',
	            borderRadius: '2px 2px 0 0'
	          }
	        },
	        'last': {
	          color: {
	            overflow: 'hidden',
	            borderRadius: '0 0 2px 2px'
	          }
	        },
	        'active': {
	          check: {
	            display: 'block'
	          }
	        },
	        'color-#FFFFFF': {
	          color: {
	            boxShadow: 'inset 0 0 0 1px #eee'
	          },
	          check: {
	            fill: '#333'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.color, ref: 'color', onClick: this.handleClick },
	        _react2.default.createElement(
	          'div',
	          { style: styles.check },
	          _react2.default.createElement(
	            'svg',
	            { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
	            _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
	          )
	        )
	      );
	    }
	  }]);

	  return SwatchesColor;
	}(_react2.default.Component);

	exports.default = SwatchesColor;

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Twitter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(360);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(393);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(396);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(571);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(560);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(558);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Twitter = exports.Twitter = function (_React$Component) {
	  _inherits(Twitter, _React$Component);

	  function Twitter() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _classCallCheck(this, Twitter);

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Twitter)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (hex) {
	      _color2.default.isValidHex(hex) && _this.props.onChange({
	        hex: hex,
	        source: 'hex'
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Twitter, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          card: {
	            width: this.props.width,
	            background: '#fff',
	            border: '0 solid rgba(0,0,0,0.25)',
	            boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
	            borderRadius: '4px',
	            position: 'relative'
	          },
	          body: {
	            padding: '15px 9px 9px 15px'
	          },
	          label: {
	            fontSize: '18px',
	            color: '#fff'
	          },
	          triangle: {
	            width: '0px',
	            height: '0px',
	            borderStyle: 'solid',
	            borderWidth: '0 9px 10px 9px',
	            borderColor: 'transparent transparent #fff transparent',
	            position: 'absolute',
	            top: '-10px',
	            left: '12px'
	          },
	          triangleShadow: {
	            width: '0px',
	            height: '0px',
	            borderStyle: 'solid',
	            borderWidth: '0 9px 10px 9px',
	            borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
	            position: 'absolute',
	            top: '-11px',
	            left: '12px'
	          },
	          hash: {
	            background: '#F0F0F0',
	            height: '30px',
	            width: '30px',
	            borderRadius: '4px 0 0 4px',
	            float: 'left',
	            color: '#98A1A4',
	            display: 'flex',
	            alignItems: 'center',
	            justifyContent: 'center'
	          },
	          input: {
	            width: '100px',
	            fontSize: '14px',
	            color: '#666',
	            border: '0px',
	            outline: 'none',
	            height: '28px',
	            boxShadow: 'inset 0 0 0 1px #F0F0F0',
	            borderRadius: '0 4px 4px 0',
	            float: 'left',
	            paddingLeft: '8px'
	          },
	          swatch: {
	            width: '30px',
	            height: '30px',
	            float: 'left',
	            borderRadius: '4px',
	            margin: '0 6px 6px 0'
	          },
	          clear: {
	            clear: 'both'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.card, className: 'twitter-picker' },
	        _react2.default.createElement('div', { style: styles.triangleShadow }),
	        _react2.default.createElement('div', { style: styles.triangle }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.body },
	          (0, _map2.default)(this.props.colors, function (c, i) {
	            return _react2.default.createElement(_common.Swatch, { key: i, color: c, hex: c, style: styles.swatch, onClick: _this2.handleChange });
	          }),
	          _react2.default.createElement(
	            'div',
	            { style: styles.hash },
	            '#'
	          ),
	          _react2.default.createElement(_common.EditableInput, {
	            placeholder: 'ff691f',
	            style: { input: styles.input },
	            value: '',
	            onChange: this.handleChange
	          }),
	          _react2.default.createElement('div', { style: styles.clear })
	        )
	      );
	    }
	  }]);

	  return Twitter;
	}(_react2.default.Component);

	Twitter.defaultProps = {
	  width: '276px',
	  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']
	};

	exports.default = (0, _common.ColorWrap)(Twitter);

/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(347);

	var _reactColor = __webpack_require__(358);

	var _reactFontawesome = __webpack_require__(345);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var TextGenerator = _react2['default'].createClass({
	    displayName: 'TextGenerator',

	    mixins: [_reactWindowMixins.OnResize],

	    getInitialState: function getInitialState() {
	        return {
	            loading: false,
	            error: false,
	            text: "YessCSS",
	            color: "#1FB6FF",
	            fontWeight: "400",
	            fontSize: "32",
	            fontStyle: "normal",
	            value: 0
	        };
	    },
	    handleChangeComplete: function handleChangeComplete(color) {

	        console.log(color);
	        this.setState({ background: color.hex });
	    },
	    handleChange: function handleChange(type, event) {
	        console.log(type);
	        switch (type) {
	            case "text":
	                this.setState({ text: event.target.value });
	                break;
	            case "color":
	                this.setState({ color: event.target.value });
	                break;
	            case "fontStyle":
	                this.setState({ fontStyle: event.target.value });
	                break;
	            case "fontWeight":
	                this.setState({ fontWeight: event.target.value });
	                break;
	            case "fontSize":
	                this.setState({ fontSize: event.target.value });
	                break;

	            default:
	                break;
	        }
	    },
	    getSidePanel: function getSidePanel() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'Grid col-lg-12 nopadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item  Grid-item-top Grid-item-dark' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Text'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.text, onChange: this.handleChange.bind(this, "text") })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Color'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'entry form-group col-sm-7' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'input-group' },
	                        _react2['default'].createElement(
	                            'span',
	                            { className: 'input-group-btn' },
	                            _react2['default'].createElement(
	                                'button',
	                                { style: { "background-color": this.state.color }, className: 'btn', type: 'button' },
	                                _react2['default'].createElement('span', { className: 'glyphicon glyphicon-no' })
	                            )
	                        ),
	                        _react2['default'].createElement('input', { className: 'form-control', type: 'text', value: this.state.color, onChange: this.handleChange.bind(this, "color") })
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Font Size'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'number', value: this.state.fontSize, onChange: this.handleChange.bind(this, "fontSize"), name: 'size', min: '1' })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Font Weight'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement(
	                        'select',
	                        { className: 'text-box', value: this.state.fontWeight, name: 'fontStyle', onChange: this.handleChange.bind(this, "fontWeight") },
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '100' },
	                            '100'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '200' },
	                            '200'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '300' },
	                            '300'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '400' },
	                            '400'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '500' },
	                            '500'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '600' },
	                            '600'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '700' },
	                            '700'
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'action-label' },
	                        'Font Style'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement(
	                        'select',
	                        { className: 'text-box', value: this.state.fontStyle, name: 'fontStyle', onChange: this.handleChange.bind(this, "fontStyle") },
	                        _react2['default'].createElement(
	                            'option',
	                            { value: 'normal' },
	                            'Normal'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: 'italic' },
	                            'Italic'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: 'oblique' },
	                            'Oblique'
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item Grid-item-bottom' },
	                '…'
	            )
	        );
	    },
	    render: function render() {
	        var text_style = {
	            "color": this.state.color,
	            "fontSize": this.state.fontSize,
	            "fontWeight": this.state.fontWeight,
	            "fontStyle": this.state.fontStyle,
	            "border": "none"
	        };
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container col-lg-12', style: {
	                    "height": this.state.window.height - 60
	                } },
	            _react2['default'].createElement(
	                'div',
	                { className: 'row', style: {
	                        "height": this.state.window.height - 60
	                    } },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-8' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'element subject', style: text_style },
	                        this.state.text
	                    ),
	                    this.state.error
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-4 nopadding', style: {
	                            "border": "1px solid #cccccc",
	                            "height": "100%",
	                            "background": "#F7F7F7"
	                        } },
	                    this.getSidePanel()
	                )
	            )
	        );
	    }
	});

	exports['default'] = TextGenerator;
	module.exports = exports['default'];

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(347);

	var _reactColor = __webpack_require__(358);

	var _reactFontawesome = __webpack_require__(345);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var _reactToggleSwitch = __webpack_require__(619);

	var _reactToggleSwitch2 = _interopRequireDefault(_reactToggleSwitch);

	var _componentsBoxShadow = __webpack_require__(620);

	var _componentsBoxShadow2 = _interopRequireDefault(_componentsBoxShadow);

	var ButtonGenerator = _react2['default'].createClass({
	    displayName: 'ButtonGenerator',

	    mixins: [_reactWindowMixins.OnResize],

	    getInitialState: function getInitialState() {
	        return {
	            loading: false,
	            error: false,
	            text: "Click Me",
	            color: "#1FB6FF",
	            fontWeight: "400",
	            fontSize: "32",
	            fontStyle: "normal",
	            isBoxShadow: false,
	            isBorder: false,
	            value: 0
	        };
	    },
	    handleChangeComplete: function handleChangeComplete(color) {

	        console.log(color);
	        this.setState({ background: color.hex });
	    },
	    handleChange: function handleChange(type, event) {
	        console.log(type);
	        switch (type) {
	            case "text":
	                this.setState({ text: event.target.value });
	                break;
	            case "color":
	                this.setState({ color: event.target.value });
	                break;
	            case "fontStyle":
	                this.setState({ fontStyle: event.target.value });
	                break;
	            case "fontWeight":
	                this.setState({ fontWeight: event.target.value });
	                break;
	            case "fontSize":
	                this.setState({ fontSize: event.target.value });
	                break;

	            default:
	                break;
	        }
	    },

	    getBorder: function getBorder() {
	        var _this = this;

	        return _react2['default'].createElement(
	            'div',
	            { className: 'panel panel-default' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'panel-heading' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-title block' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'big' },
	                        _react2['default'].createElement(
	                            'a',
	                            { 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapse2' },
	                            'Box shadow'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'small' },
	                        _react2['default'].createElement(_reactToggleSwitch2['default'], { onClick: function () {
	                                _this.setState({ isBorder: !_this.state.isBorder });
	                            }, on: this.state.isBorder })
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { id: 'collapse2', className: 'panel-collapse collapse in' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-3' },
	                        'box-shadow'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-7 center' },
	                        _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.color, onChange: this.handleChange.bind(this, "color") })
	                    )
	                )
	            )
	        );
	    },
	    getSidePanel: function getSidePanel() {

	        return _react2['default'].createElement(
	            'div',
	            { className: 'Grid col-sm-12 nopadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item  Grid-item-top Grid-item-dark' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-3' },
	                    'Button Text'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.text, onChange: this.handleChange.bind(this, "text") })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-3' },
	                    'Text  Color'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.color, onChange: this.handleChange.bind(this, "color") })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-3' },
	                    'Font Size'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'number', value: this.state.fontSize, onChange: this.handleChange.bind(this, "fontSize"), name: 'size', min: '1' })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-3' },
	                    'Font Weight'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-7 center' },
	                    _react2['default'].createElement(
	                        'select',
	                        { className: 'text-box', value: this.state.fontWeight, name: 'fontStyle', onChange: this.handleChange.bind(this, "fontWeight") },
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '100' },
	                            '100'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '200' },
	                            '200'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '300' },
	                            '300'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '400' },
	                            '400'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '500' },
	                            '500'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '600' },
	                            '600'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: '700' },
	                            '700'
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-3' },
	                    'Font Style'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-7 center' },
	                    _react2['default'].createElement(
	                        'select',
	                        { className: 'text-box', value: this.state.fontStyle, name: 'fontStyle', onChange: this.handleChange.bind(this, "fontStyle") },
	                        _react2['default'].createElement(
	                            'option',
	                            { value: 'normal' },
	                            'Normal'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: 'italic' },
	                            'Italic'
	                        ),
	                        _react2['default'].createElement(
	                            'option',
	                            { value: 'oblique' },
	                            'Oblique'
	                        )
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-3' },
	                    'Box Background'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.color, onChange: this.handleChange.bind(this, "color") })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-group', id: 'accordion' },
	                    _react2['default'].createElement(_componentsBoxShadow2['default'], { ref: 'boxshadow' }),
	                    this.getBorder()
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item Grid-item-bottom' },
	                '…'
	            )
	        );
	    },
	    render: function render() {
	        debugger;
	        var shadow_style = typeof this.refs.boxshadow == "undefined" ? "0 0 0 #888" : this.refs.boxshadow.vlength + "  " + this.refs.boxshadow.hlength + "  " + this.refs.boxshadow.vlength + "  " + this.refs.boxshadow.vlength + "  " + this.refs.boxshadow.color;
	        var text_style = {
	            "color": this.state.color,
	            "fontSize": this.state.fontSize,
	            "fontWeight": this.state.fontWeight,
	            "fontStyle": this.state.fontStyle
	        };
	        var box_style = {
	            "color": this.state.color,
	            "fontSize": this.state.fontSize,
	            "fontWeight": this.state.fontWeight,
	            "fontStyle": this.state.fontStyle,
	            "boxshadow": shadow_style
	        };
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container col-sm-12', style: {
	                    "height": this.state.window.height - 60
	                } },
	            _react2['default'].createElement(
	                'div',
	                { className: 'row', style: {
	                        "height": this.state.window.height - 60
	                    } },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-8 subject' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'element', style: text_style },
	                        this.state.text
	                    ),
	                    this.state.error
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-sm-4 nopadding', style: {
	                            "border": "1px solid #cccccc",
	                            "height": "100%"
	                        } },
	                    this.getSidePanel()
	                )
	            )
	        );
	    }
	});

	exports['default'] = ButtonGenerator;
	module.exports = exports['default'];

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var Switch = (function (_React$Component) {
	  _inherits(Switch, _React$Component);

	  _createClass(Switch, null, [{
	    key: 'propTypes',
	    value: {
	      on: _react2['default'].PropTypes.bool,
	      onClick: _react2['default'].PropTypes.func,
	      enabled: _react2['default'].PropTypes.bool,
	      className: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      on: false,
	      onClick: function onClick() {},
	      enabled: true,
	      className: ''
	    },
	    enumerable: true
	  }]);

	  function Switch(props) {
	    var _this = this;

	    _classCallCheck(this, Switch);

	    _get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).call(this, props);

	    this.handleClick = function (e) {
	      e.preventDefault();
	      if (_this.props.enabled) {
	        _this.props.onClick();
	        _this.setState({ on: !_this.state.on });
	      }
	    };

	    this.state = { on: this.props.on };
	  }

	  _createClass(Switch, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({ on: nextProps.on });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = ['switch', this.props.className, this.state.on ? 'on ' : '', this.props.enabled ? '' : 'disabled '].join(' ');
	      return _react2['default'].createElement(
	        'div',
	        { className: className, onClick: this.handleClick },
	        _react2['default'].createElement('div', { className: 'switch-toggle', children: this.props.children })
	      );
	    }
	  }]);

	  return Switch;
	})(_react2['default'].Component);

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(93);

	var _classnames = __webpack_require__(319);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _serverLink = __webpack_require__(320);

	var _serverLink2 = _interopRequireDefault(_serverLink);

	var _reactFontawesome = __webpack_require__(345);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var _reactToggleSwitch = __webpack_require__(619);

	var _reactToggleSwitch2 = _interopRequireDefault(_reactToggleSwitch);

	var BoxShadow = _react2['default'].createClass({
	    displayName: 'BoxShadow',

	    mixins: [],
	    contextTypes: {
	        router: _react2['default'].PropTypes.object
	    },

	    propTypes: {
	        handleChange: _react2['default'].PropTypes.func
	    },

	    getInitialState: function getInitialState() {
	        return {
	            isBoxShadow: false,
	            vlength: 0,
	            hlength: 0,
	            blurRadius: 5,
	            spreadRadius: 5,
	            color: "#888"
	        };
	    },

	    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	        return true;
	    },

	    componentDidMount: function componentDidMount() {},

	    handleChange: function handleChange(type, event) {
	        console.log(type);
	        switch (type) {
	            case "vlength":
	                this.setState({ vlength: event.target.value });
	                break;
	            case "hlength":
	                this.setState({ hlength: event.target.value });
	                break;
	            case "blurRadius":
	                this.setState({ blurRadius: event.target.value });
	                break;
	            case "spreadRadius":
	                this.setState({ spreadRadius: event.target.value });
	                break;
	            case "color":
	                this.setState({ color: event.target.value });
	                break;
	            default:
	                break;
	        }
	    },

	    render: function render() {
	        var _this = this;

	        return _react2['default'].createElement(
	            'div',
	            { className: 'panel panel-default' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'panel-heading' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-title block' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'big' },
	                        _react2['default'].createElement(
	                            'a',
	                            { 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapse1' },
	                            'Box shadow'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'small' },
	                        _react2['default'].createElement(_reactToggleSwitch2['default'], { onClick: function () {
	                                _this.setState({ isBoxShadow: !_this.state.isBoxShadow });
	                            }, on: this.state.isBoxShadow })
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { id: 'collapse1', className: 'panel-collapse collapse in' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-5' },
	                        'Horizontal length'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-7 center' },
	                        _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.hlength, onChange: this.handleChange.bind(this, "hlength") })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-5' },
	                        'Verticle Length'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-7 center' },
	                        _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.vlength, onChange: this.handleChange.bind(this, "vlength") })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-5' },
	                        'Blur Radius'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-7 center' },
	                        _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.blurRadius, onChange: this.handleChange.bind(this, "blurRadius") })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-5' },
	                        'Spread Radius'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-7 center' },
	                        _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.spreadRadius, onChange: this.handleChange.bind(this, "spreadRadius") })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-5' },
	                        'Color'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'col-sm-7 center' },
	                        _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.color, onChange: this.handleChange.bind(this, "color") })
	                    )
	                )
	            )
	        );
	    }
	});

	exports['default'] = BoxShadow;
	module.exports = exports['default'];

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(347);

	var _reactColor = __webpack_require__(358);

	var _reactFontawesome = __webpack_require__(345);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	var AnchorGenerator = _react2['default'].createClass({
	    displayName: 'AnchorGenerator',

	    mixins: [_reactWindowMixins.OnResize],

	    //     shadow
	    // border radius
	    // background
	    // foreground
	    // border
	    // pseudo (hover, focus and active) styling

	    getInitialState: function getInitialState() {
	        return {
	            loading: false,
	            error: false,
	            text: "Text",
	            href: "https://google.com/",
	            background: '#000',
	            color: "#200",
	            border: "1px solid #333",
	            borderRadius: "0px 0px 0px 0px",
	            fontSize: "20px"
	        };
	    },
	    handleChangeComplete: function handleChangeComplete(color) {

	        console.log(color);
	        this.setState({ background: color.hex });
	    },
	    handleChange: function handleChange(type, event) {
	        console.log(type);
	        switch (type) {
	            case "text":
	                this.setState({ text: event.target.value });
	                break;
	            case "href":
	                this.setState({ href: event.target.value });
	                break;
	            case "background":
	                this.setState({ background: event.target.value });
	                break;
	            case "color":
	                this.setState({ color: event.target.value });
	                break;
	            case "border":
	                this.setState({ border: event.target.value });
	                break;
	            case "borderRadius":
	                this.setState({ borderRadius: event.target.value });
	                break;
	            case "fontSize":
	                this.setState({ fontSize: event.target.value });
	                break;
	            // default:
	        }
	    },
	    getSidePanel: function getSidePanel() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'Grid col-lg-12 nopadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item  Grid-item-top Grid-item-dark' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Text'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.text,
	                        onChange: this.handleChange.bind(this, "text")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'href'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.href,
	                        onChange: this.handleChange.bind(this, "href")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item  Grid-item-top Grid-item-dark' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Font Size'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.fontSize,
	                        onChange: this.handleChange.bind(this, "fontSize")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Color'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.color,
	                        onChange: this.handleChange.bind(this, "color")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Background Color'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        type: 'text',
	                        value: this.state.background,
	                        onChange: this.handleChange.bind(this, "background")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Border'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        style: { width: "200" },
	                        type: 'text',
	                        value: this.state.border,
	                        onChange: this.handleChange.bind(this, "border")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Border Radius'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', {
	                        className: 'text-box',
	                        style: { width: "200" },
	                        type: 'text',
	                        value: this.state.borderRadius,
	                        onChange: this.handleChange.bind(this, "borderRadius")
	                    })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item Grid-item-bottom' },
	                '…'
	            )
	        );
	    },
	    render: function render() {
	        var box_style = {

	            "borderRadius": this.state.borderRadius,
	            "color": this.state.color,
	            "background": this.state.background,
	            "border": this.state.border,
	            "fontSize": this.state.fontSize
	        };
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container col-lg-12', style: { "height": this.state.window.height - 60 } },
	            _react2['default'].createElement(
	                'div',
	                { className: 'row', style: { "height": this.state.window.height - 60 } },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-8 subject' },
	                    _react2['default'].createElement(
	                        'a',
	                        { target: '_blank', href: this.state.href, className: 'element', style: box_style },
	                        this.state.text
	                    ),
	                    this.state.error
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-4 nopadding', style: { "border": "1px solid #cccccc", "height": "100%" } },
	                    this.getSidePanel()
	                )
	            )
	        );
	    }
	});

	exports['default'] = AnchorGenerator;
	module.exports = exports['default'];

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _componentsLoadingIndicator = __webpack_require__(623);

	var _componentsLoadingIndicator2 = _interopRequireDefault(_componentsLoadingIndicator);

	var _componentsLoadingError = __webpack_require__(624);

	var _componentsLoadingError2 = _interopRequireDefault(_componentsLoadingError);

	var PeopleView = _react2['default'].createClass({
	    displayName: 'PeopleView',

	    getInitialState: function getInitialState() {
	        return {
	            people: null,
	            loading: false,
	            error: false
	        };
	    },

	    /**
	     * When component is about to mount, call ajax for data
	     */
	    componentWillMount: function componentWillMount() {
	        this.fetchData();
	    },

	    /**
	     * Get list of persons from some api through ajax call
	     */
	    fetchData: function fetchData() {
	        if (this.state.loading) {
	            // this is already called and is-in-progress.
	            return;
	        }
	        this.setState({
	            loading: true
	        });

	        var _this = this;

	        jQuery.ajax({
	            type: 'GET',
	            url: "https://randomuser.me/api/?results=50",
	            dataType: "json",
	            cache: false,
	            success: function success(data) {
	                // When we have data, just set in component's state, render will automatically triggered
	                console.log(data);
	                _this.setState({
	                    people: data.results,
	                    loading: false,
	                    error: false
	                });
	            },
	            error: function error(xhr, responseText, data) {
	                console.log('Error' + responseText);
	                _this.setState({
	                    people: null,
	                    loading: false,
	                    error: true
	                });
	            }
	        });
	    },

	    /**
	     * Calling refresh will trigger ajax call to fetch data
	     */
	    refresh: function refresh() {
	        this.fetchData();
	    },

	    getPeopleFragment: function getPeopleFragment() {
	        var fragmentElem = null;
	        var _this = this;

	        function toTitleCase(str) {
	            // Util function
	            return str.replace(/\w\S*/g, function (txt) {
	                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	            });
	        }

	        if (this.state.people == null) {
	            fragmentElem = _react2['default'].createElement(
	                'div',
	                { className: 'col-sm-12' },
	                _react2['default'].createElement(
	                    'h4',
	                    null,
	                    'Sorry, could not find any people. Why dont you try after sometime?'
	                ),
	                _react2['default'].createElement(
	                    'a',
	                    { href: '#', onClick: this.refresh },
	                    'Try again'
	                )
	            );
	        } else {
	            fragmentElem = _react2['default'].createElement(
	                'div',
	                { className: 'col-sm-12' },
	                this.state.people.map(function (person, i) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { className: 'col-md-3 col-sm-4', key: i },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'thumbnail' },
	                            _react2['default'].createElement('img', { src: person.picture.large, style: { minHeight: "200px", width: "100%", display: "block" } }),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'caption' },
	                                _react2['default'].createElement(
	                                    'h4',
	                                    null,
	                                    toTitleCase(person.name.first),
	                                    ' ',
	                                    toTitleCase(person.name.last)
	                                ),
	                                _react2['default'].createElement(
	                                    'p',
	                                    null,
	                                    _react2['default'].createElement(
	                                        'a',
	                                        { href: '#', 'class': 'btn btn-default', role: 'button' },
	                                        'Follow'
	                                    )
	                                )
	                            )
	                        )
	                    );
	                })
	            );
	        }
	        return fragmentElem;
	    },

	    render: function render() {
	        var elem = "";
	        if (this.state.loading) {
	            elem = _react2['default'].createElement(_componentsLoadingIndicator2['default'], null);
	        } else if (this.state.error) {
	            elem = _react2['default'].createElement(_componentsLoadingError2['default'], { onRetry: this.fetchData });
	        } else {
	            elem = this.getPeopleFragment();
	        }

	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'row' },
	                _react2['default'].createElement(
	                    'h3',
	                    null,
	                    'People'
	                ),
	                _react2['default'].createElement('br', null),
	                elem
	            )
	        );
	    }
	});

	exports['default'] = PeopleView;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(92)))

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(319);

	var _classnames2 = _interopRequireDefault(_classnames);

	var LoadingIndicator = _react2['default'].createClass({
	    displayName: 'LoadingIndicator',

	    propTypes: {
	        mini: _react2['default'].PropTypes.bool
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            mini: false
	        };
	    },

	    shouldComponentUpdate: function shouldComponentUpdate() {
	        return false;
	    },

	    render: function render() {
	        var classes = {
	            loading: true,
	            mini: this.props.mini
	        };
	        return _react2['default'].createElement(
	            'div',
	            { className: (0, _classnames2['default'])(this.props.className, classes) },
	            _react2['default'].createElement('div', { className: 'loading-indicator' }),
	            _react2['default'].createElement(
	                'div',
	                { className: 'loading-message' },
	                this.props.children
	            )
	        );
	    }
	});

	exports['default'] = LoadingIndicator;
	module.exports = exports['default'];

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var LoadingError = _react2['default'].createClass({
	  displayName: 'LoadingError',

	  propTypes: {
	    onRetry: _react2['default'].PropTypes.func,
	    message: _react2['default'].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      message: 'There was an error loading data.'
	    };
	  },

	  shouldComponentUpdate: function shouldComponentUpdate() {
	    return false;
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'alert alert-error alert-block' },
	      _react2['default'].createElement(
	        'p',
	        null,
	        this.props.message,
	        this.props.onRetry && _react2['default'].createElement(
	          'a',
	          { onClick: this.props.onRetry, className: 'btn btn-default btn-sm',
	            style: { marginLeft: 5 } },
	          'Retry'
	        )
	      )
	    );
	  }
	});

	exports['default'] = LoadingError;
	module.exports = exports['default'];

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _reactDocumentTitle = __webpack_require__(626);

	var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

	var RouteNotFound = _react2['default'].createClass({
	  displayName: 'RouteNotFound',

	  getTitle: function getTitle() {
	    return 'Page Not Found';
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      _reactDocumentTitle2['default'],
	      { title: this.getTitle() },
	      _react2['default'].createElement(
	        'div',
	        { className: 'app' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'content' },
	            _react2['default'].createElement(
	              'section',
	              { className: 'body' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'alert alert-block alert-error' },
	                _react2['default'].createElement(
	                  'div',
	                  { style: { fontSize: 24, marginBottom: 10 } },
	                  _react2['default'].createElement('span', { className: 'icon-exclamation', style: { fontSize: 20, marginRight: 10 } }),
	                  _react2['default'].createElement(
	                    'span',
	                    null,
	                    'Page Not Found'
	                  )
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  'The page you are looking for was not found.'
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  'You may wish to try the following:'
	                ),
	                _react2['default'].createElement(
	                  'ul',
	                  null,
	                  _react2['default'].createElement(
	                    'li',
	                    null,
	                    'If you entered the address manually, double check the path. Did you forget a trailing slash?'
	                  ),
	                  _react2['default'].createElement(
	                    'li',
	                    null,
	                    'If you followed a link here, try hitting back and reloading the page. It\'s possible the resource was moved out from under you.'
	                  )
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  'Not sure what to do? ',
	                  _react2['default'].createElement(
	                    'a',
	                    { href: '/' },
	                    'Return to HOME'
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	exports['default'] = RouteNotFound;
	module.exports = exports['default'];

/***/ },
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = errorHandler;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var _viewsRouteError = __webpack_require__(631);

	var _viewsRouteError2 = _interopRequireDefault(_viewsRouteError);

	function errorHandler(Component) {
	  var originalRender = Component.prototype.render;

	  Component.prototype.render = function tryRender() {
	    try {
	      return originalRender.apply(this, arguments);
	    } catch (err) {
	      console.error(err);
	      return _react2['default'].createElement(_viewsRouteError2['default'], { error: err, component: this });
	    }
	  };

	  return Component;
	}

	module.exports = exports['default'];

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(92);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _react = __webpack_require__(866);

	var _react2 = _interopRequireDefault(_react);

	var RouteError = _react2['default'].createClass({
	  displayName: 'RouteError',

	  componentWillMount: function componentWillMount() {},

	  componentWillUnmount: function componentWillUnmount() {},

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'alert alert-block alert-error' },
	      _react2['default'].createElement(
	        'div',
	        { style: { fontSize: 24, marginBottom: 10 } },
	        _react2['default'].createElement('span', { className: 'icon-exclamation', style: { fontSize: 20, marginRight: 10 } }),
	        _react2['default'].createElement(
	          'span',
	          null,
	          'Oops! Something went wrong'
	        )
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'It looks like you\'ve hit an issue in application. Don\'t worry though! We monitor and it\'s likely we\'re already looking into this!'
	      )
	    );
	  }
	});

	exports['default'] = RouteError;
	module.exports = exports['default'];

/***/ }
]);