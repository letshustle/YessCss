var exports =
webpackJsonpexports([0],{

/***/ 0:
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
	    moment: __webpack_require__(306),
	    React: __webpack_require__(91),
	    ReactDOM: __webpack_require__(308),
	    Router: __webpack_require__(89),

	    Registry: {
	        api: __webpack_require__(309),
	        routes: __webpack_require__(310),
	        history: _reactRouter.browserHistory,
	        mixins: {
	            ApiMixin: __webpack_require__(312)
	        },
	        ConfigStore: __webpack_require__(317)
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(93);


/***/ },

/***/ 309:
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

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(89);

	var _viewsApp = __webpack_require__(311);

	var _viewsApp2 = _interopRequireDefault(_viewsApp);

	var _viewsHome = __webpack_require__(340);

	var _viewsHome2 = _interopRequireDefault(_viewsHome);

	var _viewsPeople = __webpack_require__(341);

	var _viewsPeople2 = _interopRequireDefault(_viewsPeople);

	var _viewsRegister = __webpack_require__(380);

	var _viewsRegister2 = _interopRequireDefault(_viewsRegister);

	var _viewsLogin = __webpack_require__(383);

	var _viewsLogin2 = _interopRequireDefault(_viewsLogin);

	var _viewsRouteNotFound = __webpack_require__(384);

	var _viewsRouteNotFound2 = _interopRequireDefault(_viewsRouteNotFound);

	var _utilsErrorHandler = __webpack_require__(389);

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
	    _react2['default'].createElement(_reactRouter.IndexRoute, { component: (0, _utilsErrorHandler2['default'])(_viewsRegister2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/home', component: (0, _utilsErrorHandler2['default'])(_viewsHome2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/people', component: (0, _utilsErrorHandler2['default'])(_viewsPeople2['default']) }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: (0, _utilsErrorHandler2['default'])(_viewsRouteNotFound2['default']), onEnter: appendTrailingSlash })
	);

	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _mixinsApiMixin = __webpack_require__(312);

	var _mixinsApiMixin2 = _interopRequireDefault(_mixinsApiMixin);

	var _componentsHeader = __webpack_require__(313);

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

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _api = __webpack_require__(309);

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

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(89);

	var _classnames = __webpack_require__(314);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _serverLink = __webpack_require__(315);

	var _serverLink2 = _interopRequireDefault(_serverLink);

	var _nav = __webpack_require__(316);

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
	                { className: 'container' },
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
	                        'yesscssc'
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
	/*<img className="logo" src="./images/react-starter.png" />*/

/***/ },

/***/ 315:
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

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(308);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(89);

	var _jquery = __webpack_require__(88);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _classnames = __webpack_require__(314);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storesConfigStore = __webpack_require__(317);

	var _storesConfigStore2 = _interopRequireDefault(_storesConfigStore);

	var _serverLink = __webpack_require__(315);

	var _serverLink2 = _interopRequireDefault(_serverLink);

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
	                { className: (0, _classnames2['default'])({ "active": this.context.router.isActive('/home', true) }) },
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { onClick: this.toggleMenu, to: '/home' },
	                    'Home'
	                )
	            ),
	            _react2['default'].createElement(
	                'li',
	                { className: (0, _classnames2['default'])({ "active": this.context.router.isActive('/people', true) }) },
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { onClick: this.toggleMenu, to: '/people' },
	                    'People'
	                )
	            ),
	            _react2['default'].createElement(
	                'li',
	                { className: (0, _classnames2['default'])({ "active": this.context.router.isActive('/unmapped-route', true) }) },
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { onClick: this.toggleMenu, to: '/unmapped-route' },
	                    '404'
	                )
	            )
	        );
	    }
	});

	exports['default'] = Nav;
	module.exports = exports['default'];

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _momentTimezone = __webpack_require__(318);

	var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	var _reflux = __webpack_require__(321);

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

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var HomeView = _react2['default'].createClass({
	    displayName: 'HomeView',

	    mixins: [],

	    getInitialState: function getInitialState() {
	        return {
	            loading: false,
	            error: false
	        };
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'row' },
	                _react2['default'].createElement('br', null),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'jumbotron' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'container' },
	                        _react2['default'].createElement(
	                            'h1',
	                            null,
	                            'Discover!'
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            'A simple react-starter project'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	exports['default'] = HomeView;
	module.exports = exports['default'];

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _componentsLoadingIndicator = __webpack_require__(342);

	var _componentsLoadingIndicator2 = _interopRequireDefault(_componentsLoadingIndicator);

	var _componentsLoadingError = __webpack_require__(343);

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

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(314);

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

/***/ 343:
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

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(89);

	var _servicesAuth = __webpack_require__(381);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

	var _servicesApi = __webpack_require__(382);

	var _servicesApi2 = _interopRequireDefault(_servicesApi);

	var RegisterView = _react2['default'].createClass({
		displayName: 'RegisterView',

		getInitialState: function getInitialState() {
			return {
				name: null
			};
		},
		componentWillMount: function componentWillMount() {},
		onNamechange: function onNamechange(e) {
			console.log(e.target.value);
		},
		registerUser: function registerUser(e) {
			e.preventDefault();
			var _this = this;
			var data = { name: this.refs.name.value,
				email: this.refs.email.value,
				password: this.refs.password.value };

			_servicesAuth2['default'].register(data);
		},

		render: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container' },
				_react2['default'].createElement(
					'div',
					{ className: 'col-lg-offset-4 col-lg-6' },
					_react2['default'].createElement(
						'h1',
						null,
						'Register'
					),
					_react2['default'].createElement(
						'form',
						{ onSubmit: this.registerUser },
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-12 col-sm-12 col-md-12' },
								_react2['default'].createElement(
									'div',
									{ className: 'form-group' },
									_react2['default'].createElement('input', { ref: 'name', onChange: this.onNamechange, style: { width: 318 }, className: 'form-control', type: 'text', name: 'name', placeholder: 'Your Full Name', autoComplete: 'on', autofocus: true })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-12 col-sm-12 col-md-12' },
								_react2['default'].createElement(
									'div',
									{ className: 'form-group' },
									_react2['default'].createElement('input', { ref: 'email', style: { width: 318 }, className: 'form-control', type: 'email', name: 'email', placeholder: 'Email address or phone number', autoComplete: 'on' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-12 col-sm-12 col-md-12' },
								_react2['default'].createElement(
									'div',
									{ className: 'form-group' },
									_react2['default'].createElement('input', { style: { width: 318 }, className: 'form-control', type: 'email', name: 'email', placeholder: 'Re-enter Email address or phone number', autoComplete: 'on' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-12 col-sm-12 col-md-12' },
								_react2['default'].createElement(
									'div',
									{ className: 'form-group' },
									_react2['default'].createElement('input', { ref: 'password', style: { width: 318 }, className: 'form-control', type: 'password', name: 'password', placeholder: 'Password', autoComplete: 'off' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-12 col-sm-12 col-md-12' },
								_react2['default'].createElement(
									'div',
									{ className: 'form-group' },
									_react2['default'].createElement(
										'span',
										null,
										'Bood Group'
									),
									_react2['default'].createElement(
										'select',
										{ ref: 'blood' },
										_react2['default'].createElement(
											'option',
											{ value: '0' },
											'AB+'
										),
										_react2['default'].createElement(
											'option',
											{ value: '1' },
											'B+'
										),
										_react2['default'].createElement(
											'option',
											{ value: '2' },
											'B-'
										),
										_react2['default'].createElement(
											'option',
											{ value: '4' },
											'AB-'
										),
										_react2['default'].createElement(
											'option',
											{ value: '5' },
											'A+-'
										),
										_react2['default'].createElement(
											'option',
											{ value: '6' },
											'A--'
										),
										_react2['default'].createElement(
											'option',
											{ value: '7' },
											'O+'
										),
										_react2['default'].createElement(
											'option',
											{ value: '8' },
											'O-'
										)
									),
									_react2['default'].createElement(
										'small',
										null,
										_react2['default'].createElement(
											'a',
											{ href: '#' },
											'Why are we taking blood groups?'
										)
									)
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-12 col-sm-12 col-md-12' },
								_react2['default'].createElement(
									'div',
									{ className: 'form-group' },
									_react2['default'].createElement('input', { type: 'radio', name: 'gender', defaultValue: 'male' }),
									' Male',
									_react2['default'].createElement('input', { type: 'radio', name: 'gender', defaultValue: 'female', style: { marginLeft: 20 } }),
									' Female'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-xs-12 col-sm-12 col-md-12' },
								_react2['default'].createElement(
									'button',
									{ type: 'submit', className: 'btn btn-primary', style: { width: 318 } },
									'Get Started'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'row' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-lg-12' },
								_react2['default'].createElement(
									'div',
									{ className: 'checkbox' },
									_react2['default'].createElement(
										'p',
										{ style: { fontSize: 12 } },
										'Already have an account ?'
									)
								)
							)
						)
					)
				)
			);
		}
	});

	exports['default'] = RegisterView;
	module.exports = exports['default'];

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _servicesApi = __webpack_require__(382);

	var _servicesApi2 = _interopRequireDefault(_servicesApi);

	var Auth = {
	  getUser: function getUser(data) {
	    _servicesApi2['default'].get('user');
	  },
	  register: function register(data) {
	    _servicesApi2['default'].post('api/users', {
	      data: data
	    });
	  },
	  login: function login() {},
	  logout: function logout() {},
	  storeToken: function storeToken() {},
	  postLoginOps: function postLoginOps() {}
	};

	exports['default'] = Auth;
	module.exports = exports['default'];

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var api = {};
	api.endpoint = "http://localhost:1805";
	var methods = ['get', 'put', 'post', 'delete'],
	    l = methods.length,
	    i = 0;
	for (; i < l; i++) {

	  var m = methods[i];
	  console.log(m);
	  api[m] = (function (m) {
	    return function (uri, options) {
	      if (options === undefined) options = {};

	      console.log(options);
	      options.url = api.endpoint + '/' + uri;
	      if (options.auth == true)
	        //Can set something for auth
	        if (options.token == true)
	          // Can set something for JWT token
	          return jQuery.ajax({
	            type: m,
	            url: options.url,
	            dataType: "json",
	            data: options.data ? options.data : '',
	            success: function success(data) {
	              console.log(data);
	            },
	            error: function error(xhr, responseText, data) {
	              console.log('Error ' + responseText);
	            }
	          });
	    };
	  })(m);
	}
	module.exports = api;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var LoginView = _react2["default"].createClass({
		displayName: "LoginView",

		getInitialState: function getInitialState() {
			return {};
		},
		componentWillMount: function componentWillMount() {},

		render: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "container" },
				_react2["default"].createElement(
					"div",
					{ className: "col-lg-offset-4 col-lg-6" },
					_react2["default"].createElement(
						"div",
						{ className: "col-lg-4" },
						_react2["default"].createElement(
							"h1",
							null,
							"Login"
						)
					),
					_react2["default"].createElement(
						"form",
						null,
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-xs-12 col-sm-12 col-md-12" },
								_react2["default"].createElement(
									"div",
									{ className: "form-group" },
									_react2["default"].createElement("input", { style: { width: 318 }, className: "form-control", type: "email", name: "email", "ng-model": "username", placeholder: "Email address or phone number", autoComplete: "on", autofocus: true })
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-xs-12 col-sm-12 col-md-12" },
								_react2["default"].createElement(
									"div",
									{ className: "form-group" },
									_react2["default"].createElement("input", { style: { width: 318 }, className: "form-control", type: "password", name: "password", "ng-model": "password", placeholder: "Password", autoComplete: "off" })
								),
								_react2["default"].createElement(
									"button",
									{ type: "submit", className: "btn btn-primary", style: { width: 318 } },
									"Login (Private Beta)"
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "row" },
							_react2["default"].createElement(
								"div",
								{ className: "col-lg-12" },
								_react2["default"].createElement(
									"div",
									{ className: "checkbox" },
									_react2["default"].createElement(
										"label",
										{ style: { fontSize: 12 } },
										_react2["default"].createElement("input", { type: "checkbox" }),
										"Keep me signed in"
									)
								)
							)
						)
					)
				)
			);
		}
	});

	exports["default"] = LoginView;
	module.exports = exports["default"];

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _reactDocumentTitle = __webpack_require__(385);

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

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = errorHandler;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _viewsRouteError = __webpack_require__(390);

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

/***/ 390:
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

});