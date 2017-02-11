var exports =
webpackJsonpexports([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(88);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reactRouter = __webpack_require__(89);

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
	    moment: __webpack_require__(307),
	    React: __webpack_require__(91),
	    ReactDOM: __webpack_require__(309),
	    Router: __webpack_require__(89),

	    Registry: {
	        api: __webpack_require__(310),
	        routes: __webpack_require__(311),
	        history: _reactRouter.browserHistory,
	        mixins: {
	            ApiMixin: __webpack_require__(313)
	        },
	        ConfigStore: __webpack_require__(318)
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
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(93);


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.paramsToQueryArgs = paramsToQueryArgs;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jquery = __webpack_require__(88);

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
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(89);

	var _viewsApp = __webpack_require__(312);

	var _viewsApp2 = _interopRequireDefault(_viewsApp);

	var _viewsBoxGenerator = __webpack_require__(342);

	var _viewsBoxGenerator2 = _interopRequireDefault(_viewsBoxGenerator);

	var _viewsTextGenerator = __webpack_require__(533);

	var _viewsTextGenerator2 = _interopRequireDefault(_viewsTextGenerator);

	var _viewsButtonGenerator = __webpack_require__(534);

	var _viewsButtonGenerator2 = _interopRequireDefault(_viewsButtonGenerator);

	var _viewsAnchorGenerator = __webpack_require__(535);

	var _viewsAnchorGenerator2 = _interopRequireDefault(_viewsAnchorGenerator);

	var _viewsPeople = __webpack_require__(536);

	var _viewsPeople2 = _interopRequireDefault(_viewsPeople);

	var _viewsRouteNotFound = __webpack_require__(539);

	var _viewsRouteNotFound2 = _interopRequireDefault(_viewsRouteNotFound);

	var _utilsErrorHandler = __webpack_require__(544);

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
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _mixinsApiMixin = __webpack_require__(313);

	var _mixinsApiMixin2 = _interopRequireDefault(_mixinsApiMixin);

	var _componentsHeader = __webpack_require__(314);

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
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _api = __webpack_require__(310);

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
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(89);

	var _classnames = __webpack_require__(315);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _serverLink = __webpack_require__(316);

	var _serverLink2 = _interopRequireDefault(_serverLink);

	var _nav = __webpack_require__(317);

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
/* 315 */,
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

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
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(309);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(89);

	var _jquery = __webpack_require__(88);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _classnames = __webpack_require__(315);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storesConfigStore = __webpack_require__(318);

	var _storesConfigStore2 = _interopRequireDefault(_storesConfigStore);

	var _serverLink = __webpack_require__(316);

	var _serverLink2 = _interopRequireDefault(_serverLink);

	var _reactFontawesome = __webpack_require__(341);

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
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _momentTimezone = __webpack_require__(319);

	var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	var _reflux = __webpack_require__(322);

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
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
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
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(343);

	var _reactColor = __webpack_require__(354);

	var _reactFontawesome = __webpack_require__(341);

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
	                    { className: 'col-lg-8', style: { "border": "1px solid #cccccc", "height": "100%" } },
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
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  OnResize: __webpack_require__(344),
	  OnScroll: __webpack_require__(352),
	  OnUnload: __webpack_require__(353)
	};



/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	/*global window */

	var throttle = __webpack_require__(345);

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
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var debounce = __webpack_require__(346),
	    isFunction = __webpack_require__(347),
	    isObject = __webpack_require__(348);

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
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var isFunction = __webpack_require__(347),
	    isObject = __webpack_require__(348),
	    now = __webpack_require__(350);

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
/* 347 */
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
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var objectTypes = __webpack_require__(349);

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
/* 349 */
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
	var isNative = __webpack_require__(351);

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
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	/*global window */

	var throttle = __webpack_require__(345);

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
/* 353 */
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
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.CustomPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.CompactPicker = exports.ChromePicker = undefined;

	var _Chrome = __webpack_require__(355);

	Object.defineProperty(exports, 'ChromePicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Chrome).default;
	  }
	});

	var _Compact = __webpack_require__(508);

	Object.defineProperty(exports, 'CompactPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Compact).default;
	  }
	});

	var _Material = __webpack_require__(517);

	Object.defineProperty(exports, 'MaterialPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Material).default;
	  }
	});

	var _Photoshop = __webpack_require__(518);

	Object.defineProperty(exports, 'PhotoshopPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Photoshop).default;
	  }
	});

	var _Sketch = __webpack_require__(522);

	Object.defineProperty(exports, 'SketchPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Sketch).default;
	  }
	});

	var _Slider = __webpack_require__(525);

	Object.defineProperty(exports, 'SliderPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Slider).default;
	  }
	});

	var _Swatches = __webpack_require__(529);

	Object.defineProperty(exports, 'SwatchesPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Swatches).default;
	  }
	});

	var _ColorWrap = __webpack_require__(499);

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
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Chrome = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(488);

	var _ChromeFields = __webpack_require__(505);

	var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

	var _ChromePointer = __webpack_require__(506);

	var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

	var _ChromePointerCircle = __webpack_require__(507);

	var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
	        { style: styles.picker },
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
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSS=exports.loop=exports.hover=exports.Component=void 0;var _objectAssign=__webpack_require__(357),_objectAssign2=_interopRequireDefault(_objectAssign),_flattenNames=__webpack_require__(358),_flattenNames2=_interopRequireDefault(_flattenNames),_mergeClasses=__webpack_require__(472),_mergeClasses2=_interopRequireDefault(_mergeClasses),_autoprefix=__webpack_require__(473),_autoprefix2=_interopRequireDefault(_autoprefix),_Component2=__webpack_require__(474),_Component3=_interopRequireDefault(_Component2),_hover2=__webpack_require__(486),_hover3=_interopRequireDefault(_hover2),_loop2=__webpack_require__(487),_loop3=_interopRequireDefault(_loop2);exports.Component=_Component3["default"],exports.hover=_hover3["default"],exports.loop=_loop3["default"];var ReactCSS=exports.ReactCSS=function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];var a=(0,_flattenNames2["default"])(o),s=(0,_mergeClasses2["default"])(e,a);return(0,_autoprefix2["default"])(s)};ReactCSS.m=_objectAssign2["default"],exports["default"]=ReactCSS;

/***/ },
/* 357 */
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
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenNames=void 0;var _map=__webpack_require__(359),_map2=_interopRequireDefault(_map),_isPlainObject=__webpack_require__(469),_isPlainObject2=_interopRequireDefault(_isPlainObject),_isString=__webpack_require__(471),_isString2=_interopRequireDefault(_isString),flattenNames=exports.flattenNames=function e(t){var i=[];return t.map(function(t){return Array.isArray(t)&&e(t).map(function(e){return i.push(e)}),(0,_isPlainObject2["default"])(t)&&(0,_map2["default"])(t,function(e,t){e===!0&&i.push(t),i.push(t+"-"+e)}),(0,_isString2["default"])(t)&&i.push(t),t}),i};exports["default"]=flattenNames;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(360),
	    baseIteratee = __webpack_require__(361),
	    baseMap = __webpack_require__(463),
	    isArray = __webpack_require__(426);

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
/* 360 */
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
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(362),
	    baseMatchesProperty = __webpack_require__(445),
	    identity = __webpack_require__(459),
	    isArray = __webpack_require__(426),
	    property = __webpack_require__(460);

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
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(363),
	    getMatchData = __webpack_require__(442),
	    matchesStrictComparable = __webpack_require__(444);

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
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(364),
	    baseIsEqual = __webpack_require__(405);

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
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(365),
	    stackClear = __webpack_require__(373),
	    stackDelete = __webpack_require__(374),
	    stackGet = __webpack_require__(375),
	    stackHas = __webpack_require__(376),
	    stackSet = __webpack_require__(377);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(366),
	    listCacheDelete = __webpack_require__(367),
	    listCacheGet = __webpack_require__(370),
	    listCacheHas = __webpack_require__(371),
	    listCacheSet = __webpack_require__(372);

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
/* 366 */
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
	}

	module.exports = listCacheClear;


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(368);

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
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(369);

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
/* 369 */
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
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(368);

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
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(368);

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
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(368);

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
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(365);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 374 */
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
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 375 */
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
/* 376 */
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
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(365),
	    Map = __webpack_require__(378),
	    MapCache = __webpack_require__(390);

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
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(379),
	    root = __webpack_require__(386);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(380),
	    getValue = __webpack_require__(389);

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
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(381),
	    isHostObject = __webpack_require__(383),
	    isMasked = __webpack_require__(384),
	    isObject = __webpack_require__(382),
	    toSource = __webpack_require__(388);

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
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(382);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

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
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 382 */
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
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 383 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(385);

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
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(386);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(387);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 387 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 388 */
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
/* 389 */
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
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(391),
	    mapCacheDelete = __webpack_require__(399),
	    mapCacheGet = __webpack_require__(402),
	    mapCacheHas = __webpack_require__(403),
	    mapCacheSet = __webpack_require__(404);

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
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(392),
	    ListCache = __webpack_require__(365),
	    Map = __webpack_require__(378);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(393),
	    hashDelete = __webpack_require__(395),
	    hashGet = __webpack_require__(396),
	    hashHas = __webpack_require__(397),
	    hashSet = __webpack_require__(398);

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
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(394);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(379);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 395 */
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
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(394);

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
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(394);

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
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(394);

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
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(400);

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
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(401);

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
/* 401 */
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
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(400);

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
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(400);

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
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(400);

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
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(406),
	    isObject = __webpack_require__(382),
	    isObjectLike = __webpack_require__(425);

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
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(364),
	    equalArrays = __webpack_require__(407),
	    equalByTag = __webpack_require__(412),
	    equalObjects = __webpack_require__(417),
	    getTag = __webpack_require__(432),
	    isArray = __webpack_require__(426),
	    isHostObject = __webpack_require__(383),
	    isTypedArray = __webpack_require__(438);

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
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

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
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(408),
	    arraySome = __webpack_require__(411);

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
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
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
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(390),
	    setCacheAdd = __webpack_require__(409),
	    setCacheHas = __webpack_require__(410);

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
/* 409 */
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
/* 410 */
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
/* 411 */
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
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(413),
	    Uint8Array = __webpack_require__(414),
	    eq = __webpack_require__(369),
	    equalArrays = __webpack_require__(407),
	    mapToArray = __webpack_require__(415),
	    setToArray = __webpack_require__(416);

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
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(386);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(386);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 415 */
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
/* 416 */
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
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(418);

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
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(419),
	    baseKeys = __webpack_require__(428),
	    isArrayLike = __webpack_require__(423);

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
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(420),
	    isArguments = __webpack_require__(421),
	    isArray = __webpack_require__(426),
	    isIndex = __webpack_require__(427);

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
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 420 */
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
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(422);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(423),
	    isObjectLike = __webpack_require__(425);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(381),
	    isLength = __webpack_require__(424);

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
/* 424 */
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
/* 425 */
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
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 426 */
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
/* 427 */
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
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(429),
	    nativeKeys = __webpack_require__(430);

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
/* 429 */
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
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(431);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 431 */
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
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(433),
	    Map = __webpack_require__(378),
	    Promise = __webpack_require__(434),
	    Set = __webpack_require__(435),
	    WeakMap = __webpack_require__(436),
	    baseGetTag = __webpack_require__(437),
	    toSource = __webpack_require__(388);

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

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
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
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(379),
	    root = __webpack_require__(386);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(379),
	    root = __webpack_require__(386);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(379),
	    root = __webpack_require__(386);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(379),
	    root = __webpack_require__(386);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 437 */
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
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(439),
	    baseUnary = __webpack_require__(440),
	    nodeUtil = __webpack_require__(441);

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
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(424),
	    isObjectLike = __webpack_require__(425);

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
/* 440 */
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
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(387);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(308)(module)))

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(443),
	    keys = __webpack_require__(418);

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
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(382);

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
/* 444 */
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
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(405),
	    get = __webpack_require__(446),
	    hasIn = __webpack_require__(456),
	    isKey = __webpack_require__(454),
	    isStrictComparable = __webpack_require__(443),
	    matchesStrictComparable = __webpack_require__(444),
	    toKey = __webpack_require__(455);

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
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(447);

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
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(448),
	    isKey = __webpack_require__(454),
	    toKey = __webpack_require__(455);

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
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(426),
	    stringToPath = __webpack_require__(449);

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
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(450),
	    toString = __webpack_require__(451);

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
	var stringToPath = memoize(function(string) {
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
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(390);

	/** Used as the `TypeError` message for "Functions" methods. */
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
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(452);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
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
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(413),
	    isSymbol = __webpack_require__(453);

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
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(425);

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
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(426),
	    isSymbol = __webpack_require__(453);

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
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(453);

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
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(457),
	    hasPath = __webpack_require__(458);

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
/* 457 */
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
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(448),
	    isArguments = __webpack_require__(421),
	    isArray = __webpack_require__(426),
	    isIndex = __webpack_require__(427),
	    isKey = __webpack_require__(454),
	    isLength = __webpack_require__(424),
	    toKey = __webpack_require__(455);

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

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 459 */
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
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(461),
	    basePropertyDeep = __webpack_require__(462),
	    isKey = __webpack_require__(454),
	    toKey = __webpack_require__(455);

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
/* 461 */
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
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(447);

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
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(464),
	    isArrayLike = __webpack_require__(423);

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
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(465),
	    createBaseEach = __webpack_require__(468);

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
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(466),
	    keys = __webpack_require__(418);

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
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(467);

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
/* 467 */
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
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(423);

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
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(470),
	    isHostObject = __webpack_require__(383),
	    isObjectLike = __webpack_require__(425);

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
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
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
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(431);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(426),
	    isObjectLike = __webpack_require__(425);

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
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeClasses=void 0;var _map=__webpack_require__(359),_map2=_interopRequireDefault(_map),_objectAssign=__webpack_require__(357),_objectAssign2=_interopRequireDefault(_objectAssign),mergeClasses=exports.mergeClasses=function(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],s=e["default"]&&(0,_objectAssign2["default"])({},e["default"])||{};return t.map(function(t){var r=e[t];return r&&(0,_map2["default"])(r,function(e,t){s[t]||(s[t]={}),(0,_objectAssign2["default"])(s[t],r[t])}),t}),s};exports["default"]=mergeClasses;

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.autoprefix=void 0;var _map=__webpack_require__(359),_map2=_interopRequireDefault(_map),_objectAssign=__webpack_require__(357),_objectAssign2=_interopRequireDefault(_objectAssign),transforms={borderRadius:function(e){return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},absolute:function(e){var t=e&&e.split(" ");return{position:"absolute",top:t&&t[0],right:t&&t[1],bottom:t&&t[2],left:t&&t[3]}},extend:function(e,t){var r=t[e];return r?r:{extend:e}}},autoprefix=exports.autoprefix=function(e){var t={};return(0,_map2["default"])(e,function(e,r){var o={};(0,_map2["default"])(e,function(e,t){var r=transforms[t];r?(0,_objectAssign2["default"])(o,r(e)):o[t]=e}),t[r]=o}),t};exports["default"]=autoprefix;

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSSComponent=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(91),_react2=_interopRequireDefault(_react),_inline=__webpack_require__(475),_inline2=_interopRequireDefault(_inline),_once=__webpack_require__(481),_once2=_interopRequireDefault(_once),warning=(0,_once2["default"])(function(){return console.warn("Extending ReactCSS.Component\n  is deprecated in ReactCSS 1.0.0")}),ReactCSSComponent=exports.ReactCSSComponent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"css",value:function(e){return warning(),_inline2["default"].call(this,e)}},{key:"styles",value:function(){return this.css()}}]),t}(_react2["default"].Component);ReactCSSComponent.contextTypes={mixins:_react2["default"].PropTypes.object},exports["default"]=ReactCSSComponent;

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(382),_isObject2=_interopRequireDefault(_isObject),_checkClassStructure=__webpack_require__(476),_checkClassStructure2=_interopRequireDefault(_checkClassStructure),_combine=__webpack_require__(477),_combine2=_interopRequireDefault(_combine);module.exports=function(e){var s=this,t=[];if(!this.classes)throw console.warn("Define this.classes on `"+this.constructor.name+"`");(0,_checkClassStructure2["default"])(this.classes());var r=function(e,r){s.classes()[e]?t.push(s.classes()[e]):e&&r&&r.warn===!0&&console.warn("The `"+e+"` css class does not exist on `"+s.constructor.name+"`")};r("default");for(var i in this.props){var c=this.props[i];(0,_isObject2["default"])(c)||(c===!0?(r(i),r(i+"-true")):r(c?i+"-"+c:i+"-false"))}if(this.props&&this.props.activeBounds)for(var o=0;o<this.props.activeBounds.length;o++){var n=this.props.activeBounds[o];r(n)}for(var a in e){var u=e[a];u===!0&&r(a,{warn:!0})}var l={};return this.context&&this.context.mixins&&(l=this.context.mixins),(0,_combine2["default"])(t,l)};

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkClassStructure=void 0;var _map=__webpack_require__(359),_map2=_interopRequireDefault(_map),_isObject=__webpack_require__(382),_isObject2=_interopRequireDefault(_isObject),checkClassStructure=exports.checkClassStructure=function(e){(0,_map2["default"])(e,function(t,s){e.hasOwnProperty(s)&&((0,_isObject2["default"])(t)?(0,_map2["default"])(t,function(e,u){t.hasOwnProperty(u)&&((0,_isObject2["default"])(e)||console.warn("Make sure the value of the element `"+s+"`\n                is an object of css. You passed it `"+t+"`"))}):console.warn("Make sure the value of `"+s+"` is an object of\n          html elements. You passed it `"+t+"`"))})};exports["default"]=checkClassStructure;

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.combine=void 0;var _merge=__webpack_require__(478),_merge2=_interopRequireDefault(_merge),_transformMixins=__webpack_require__(480),_transformMixins2=_interopRequireDefault(_transformMixins),combine=exports.combine=function(e,r){var i=(0,_merge2["default"])(e);return(0,_transformMixins2["default"])(i,r)};exports["default"]=combine;

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _merge=__webpack_require__(479),_merge2=_interopRequireDefault(_merge),_isObject=__webpack_require__(382),_isObject2=_interopRequireDefault(_isObject),merge=function(e){return(0,_isObject2["default"])(e)&&!Array.isArray(e)?e:1===e.length?e[0]:_merge2["default"].recursive.apply(void 0,e)};exports["default"]=merge;

/***/ },
/* 479 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(308)(module)))

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(382),_isObject2=_interopRequireDefault(_isObject),_merge=__webpack_require__(479),_merge2=_interopRequireDefault(_merge),localProps={borderRadius:function(e){if(null!==e)return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){if(null!==e)return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){if(null!==e)return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){if(null!==e)return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){if(null!==e)return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){if(null!==e)return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){if(null!==e)return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){if(null!==e)return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},Absolute:function(e){if(null!==e){var r=e.split(" ");return{position:"absolute",top:r[0],right:r[1],bottom:r[2],left:r[3]}}},Extend:function(e,r){var t=r[e];if(t)return t}},transform=function e(r,t,n){var i=(0,_merge2["default"])(t,localProps),o={};for(var u in r){var s=r[u];if((0,_isObject2["default"])(s)&&!Array.isArray(s))o[u]=e(s,t,r);else if(i[u]){var l=i[u](s,n);for(var a in l){var f=l[a];o[a]=f}}else o[u]=s}return o};module.exports=function(e,r,t){return transform(e,r,t)};

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	var before = __webpack_require__(482);

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
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(483);

	/** Used as the `TypeError` message for "Functions" methods. */
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
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(484);

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
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(485);

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
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(382),
	    isSymbol = __webpack_require__(453);

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
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hover=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(91),_react2=_interopRequireDefault(_react),hover=exports.hover=function(e){return function(t){function r(){_classCallCheck(this,r);var e=_possibleConstructorReturn(this,Object.getPrototypeOf(r).call(this));return e.handleMouseOver=function(){e.setState({hover:!0})},e.handleMouseOut=function(){e.setState({hover:!1})},e.state={hover:!1},e}return _inherits(r,t),_createClass(r,[{key:"render",value:function(){return _react2["default"].createElement("div",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},_react2["default"].createElement(e,_extends({},this.props,this.state)))}}]),r}(_react2["default"].Component)};exports["default"]=hover;

/***/ },
/* 487 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var loopable=function(e,t){var l={},o=function(e){var t=arguments.length<=1||void 0===arguments[1]||arguments[1];l[e]=t};return 0===e&&o("first-child"),e===t-1&&o("last-child"),(0===e||e%2===0)&&o("even"),1===Math.abs(e%2)&&o("odd"),o("nth-child",e),l};exports["default"]=loopable;

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Alpha = __webpack_require__(489);

	Object.defineProperty(exports, 'Alpha', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Alpha).default;
	  }
	});

	var _Checkboard = __webpack_require__(492);

	Object.defineProperty(exports, 'Checkboard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checkboard).default;
	  }
	});

	var _EditableInput = __webpack_require__(493);

	Object.defineProperty(exports, 'EditableInput', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_EditableInput).default;
	  }
	});

	var _Hue = __webpack_require__(494);

	Object.defineProperty(exports, 'Hue', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hue).default;
	  }
	});

	var _Saturation = __webpack_require__(495);

	Object.defineProperty(exports, 'Saturation', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Saturation).default;
	  }
	});

	var _ColorWrap = __webpack_require__(499);

	Object.defineProperty(exports, 'ColorWrap', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ColorWrap).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alpha = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _Checkboard = __webpack_require__(492);

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
	        }
	      });

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
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(491);

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(205);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Checkboard = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
	  white: '#fff',
	  grey: '#e6e6e6'
	};

	exports.default = Checkboard;

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EditableInput = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
	      if (_this.props.label !== null) {
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
	      window.removeEventListener('mousemove', _this.handleChange);
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
	          onBlur: this.handleBlur
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
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Hue = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Saturation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _throttle = __webpack_require__(496);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(497),
	    isObject = __webpack_require__(382);

	/** Used as the `TypeError` message for "Functions" methods. */
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
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(382),
	    now = __webpack_require__(498),
	    toNumber = __webpack_require__(485);

	/** Used as the `TypeError` message for "Functions" methods. */
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
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(386);

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
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColorWrap = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _merge = __webpack_require__(479);

	var _merge2 = _interopRequireDefault(_merge);

	var _debounce = __webpack_require__(497);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _color = __webpack_require__(500);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _each = __webpack_require__(501);

	var _each2 = _interopRequireDefault(_each);

	var _tinycolor = __webpack_require__(504);

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
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(502);


/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(503),
	    baseEach = __webpack_require__(464),
	    baseIteratee = __webpack_require__(361),
	    isArray = __webpack_require__(426);

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
	 * _([1, 2]).forEach(function(value) {
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
/* 503 */
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
/* 504 */
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
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/* eslint react/no-did-mount-set-state: 0 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromeFields = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(500);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

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
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromePointer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromePointerCircle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Compact = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(359);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(500);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _reactMaterialDesign = __webpack_require__(509);

	var _common = __webpack_require__(488);

	var _CompactColor = __webpack_require__(515);

	var _CompactColor2 = _interopRequireDefault(_CompactColor);

	var _CompactFields = __webpack_require__(516);

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
	          { style: styles.compact },
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
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true,
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libComponentsRaised = __webpack_require__(510);

	var _libComponentsRaised2 = _interopRequireDefault(_libComponentsRaised);

	var _libComponentsTile = __webpack_require__(511);

	var _libComponentsTile2 = _interopRequireDefault(_libComponentsTile);

	var _libComponentsTabs = __webpack_require__(512);

	var _libComponentsTabs2 = _interopRequireDefault(_libComponentsTabs);

	exports.Raised = _libComponentsRaised2['default'];
	exports.Tile = _libComponentsTile2['default'];
	exports.Tabs = _libComponentsTabs2['default'];


/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

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
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

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
	          content: {
	            background: 'none',
	            flex: '1',
	            overflow: 'scroll'
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
	            paddingTop: '0px'
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
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _isString = __webpack_require__(471);

	var _isString2 = _interopRequireDefault(_isString);

	var _Tab = __webpack_require__(513);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _Link = __webpack_require__(514);

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
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

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
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _isString = __webpack_require__(471);

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
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CompactColor = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CompactColor = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

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
	          hex: data,
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
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Material = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(500);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _reactMaterialDesign = __webpack_require__(509);

	var _common = __webpack_require__(488);

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
	          { style: styles.material },
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
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Photoshop = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

	var _PhotoshopFields = __webpack_require__(519);

	var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

	var _PhotoshopPointerCircle = __webpack_require__(520);

	var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

	var _PhotoshopPointer = __webpack_require__(521);

	var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

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
	          Hue: {
	            direction: 'vertical'
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
	          swatches: {
	            border: '1px solid #B3B3B3',
	            borderBottom: '1px solid #F0F0F0',
	            marginBottom: '2px',
	            marginTop: '1px'
	          },
	          new: {
	            height: '34px',
	            background: 'rgb(' + this.props.rgb.r + ',' + this.props.rgb.g + ', ' + this.props.rgb.b + ')',
	            boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
	          },
	          current: {
	            height: '34px',
	            background: this.state.currentColor,
	            boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
	          },
	          label: {
	            fontSize: '14px',
	            color: '#000',
	            textAlign: 'center'
	          },
	          actions: {
	            flex: '1',
	            marginLeft: '20px'
	          },
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
	            marginBottom: '10px'
	          },
	          acceptButton: {
	            backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
	            border: '1px solid #878787',
	            borderRadius: '2px',
	            height: '20px',
	            fontSize: '14px',
	            color: '#000',
	            lineHeight: '20px',
	            textAlign: 'center',
	            marginBottom: '10px',
	            boxShadow: '0 0 0 1px #878787'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.picker },
	        this.props.header ? _react2.default.createElement(
	          'div',
	          { style: styles.head },
	          this.props.header
	        ) : null,
	        _react2.default.createElement(
	          'div',
	          { style: styles.body, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.saturation },
	            _react2.default.createElement(_common.Saturation, _extends({
	              style: styles.Saturation
	            }, this.props, {
	              pointer: _PhotoshopPointerCircle2.default,
	              onChange: this.handleChange
	            }))
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.hue },
	            _react2.default.createElement(_common.Hue, _extends({}, styles.Hue, this.props, {
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
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.actions },
	                _react2.default.createElement(
	                  'div',
	                  { style: styles.acceptButton, ref: 'accept', onClick: this.handleAccept },
	                  'OK'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { style: styles.button, ref: 'cancel', onClick: this.handleCancel },
	                  'Cancel'
	                ),
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
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPicker = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(500);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

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
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPointerCircle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPointerCircle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sketch = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

	var _SketchFields = __webpack_require__(523);

	var _SketchFields2 = _interopRequireDefault(_SketchFields);

	var _SketchPresetColors = __webpack_require__(524);

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
	        { style: styles.picker },
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
	        _react2.default.createElement(
	          'div',
	          { style: styles.fields },
	          _react2.default.createElement(_SketchFields2.default, _extends({}, this.props, {
	            onChange: this.handleChange,
	            disableAlpha: this.props.disableAlpha
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.presets },
	          _react2.default.createElement(_SketchPresetColors2.default, { colors: this.props.presetColors, onClick: this.handleChange })
	        )
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
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ShetchFields = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(500);

	var _color2 = _interopRequireDefault(_color);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

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
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SketchPresetColors = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(359);

	var _map2 = _interopRequireDefault(_map);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

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
	            marginRight: '-10px',
	            marginLeft: '-10px',
	            paddingLeft: '10px',
	            paddingTop: '10px',
	            borderTop: '1px solid #eee'
	          },
	          li: {
	            borderRadius: '3px',
	            overflow: 'hidden',
	            position: 'relative',
	            display: 'inline-block',
	            margin: '0 10px 10px 0',
	            verticalAlign: 'top',
	            cursor: 'pointer'
	          },
	          square: {
	            borderRadius: '3px',
	            width: '16px',
	            height: '16px',
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
	        { style: styles.colors },
	        (0, _map2.default)(this.props.colors, function (c) {
	          return _react2.default.createElement(
	            'div',
	            { key: c, style: styles.li, ref: c, onClick: _this2.handleClick.bind(null, c) },
	            _react2.default.createElement(
	              'div',
	              { style: { background: c } },
	              _react2.default.createElement('div', { style: styles.square })
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return SketchPresetColors;
	}(_react2.default.Component);

	exports.default = SketchPresetColors;

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Slider = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

	var _SliderSwatches = __webpack_require__(526);

	var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

	var _SliderPointer = __webpack_require__(528);

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
	        { style: styles.slider },
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
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderSwatches = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _SliderSwatch = __webpack_require__(527);

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
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderSwatch = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderPointer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Swatches = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(359);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(500);

	var _color2 = _interopRequireDefault(_color);

	var _materialColors = __webpack_require__(530);

	var _materialColors2 = _interopRequireDefault(_materialColors);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _common = __webpack_require__(488);

	var _reactMaterialDesign = __webpack_require__(509);

	var _SwatchesGroup = __webpack_require__(531);

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
	        { style: styles.picker },
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
/* 530 */
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
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SwatchesGroup = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(359);

	var _map2 = _interopRequireDefault(_map);

	var _reactAddonsShallowCompare = __webpack_require__(490);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _SwatchesColor = __webpack_require__(532);

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
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SwatchesColor = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(356);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _reactAddonsShallowCompare = __webpack_require__(490);

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
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(343);

	var _reactColor = __webpack_require__(354);

	var _reactFontawesome = __webpack_require__(341);

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
	                                { style: { "backgroundColor": this.state.color, "width": 40 }, className: 'btn', type: 'button' },
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
	                        'Size'
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
	                        'Weight'
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
	                        'Style'
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
	                    { className: 'col-lg-8', style: {
	                            "border": "1px solid #cccccc",
	                            "height": "100%"
	                        } },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'element', style: text_style },
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
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(343);

	var _reactColor = __webpack_require__(354);

	var _reactFontawesome = __webpack_require__(341);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

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
	                    'Button Text'
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
	                    'Text  Color'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.color, onChange: this.handleChange.bind(this, "color") })
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Font Size'
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
	                    'Font Weight'
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
	                    'Font Style'
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
	                { className: 'Grid-item' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-3' },
	                    'Box Background'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-7 center' },
	                    _react2['default'].createElement('input', { className: 'text-box', type: 'text', value: this.state.color, onChange: this.handleChange.bind(this, "color") })
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
	            "fontStyle": this.state.fontStyle
	        };
	        var box_style = {
	            "color": this.state.color,
	            "fontSize": this.state.fontSize,
	            "fontWeight": this.state.fontWeight,
	            "fontStyle": this.state.fontStyle
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
	                    { className: 'col-lg-8', style: {
	                            "border": "1px solid #cccccc",
	                            "height": "100%"
	                        } },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'element', style: text_style },
	                        this.state.text
	                    ),
	                    this.state.error
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'col-lg-4 nopadding', style: {
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
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactWindowMixins = __webpack_require__(343);

	var _reactColor = __webpack_require__(354);

	var _reactFontawesome = __webpack_require__(341);

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
	                    { className: 'col-lg-8', style: { "border": "1px solid #cccccc", "height": "100%" } },
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
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _componentsLoadingIndicator = __webpack_require__(537);

	var _componentsLoadingIndicator2 = _interopRequireDefault(_componentsLoadingIndicator);

	var _componentsLoadingError = __webpack_require__(538);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(315);

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
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

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
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactDocumentTitle = __webpack_require__(540);

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
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = errorHandler;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _viewsRouteError = __webpack_require__(545);

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
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(88);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _react = __webpack_require__(91);

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