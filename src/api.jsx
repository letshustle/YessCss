import $ from 'jquery';

export class Request {
  constructor(xhr) {
    this.xhr = xhr;
    this.alive = true;
  }

  cancel() {
    this.alive = false;
    this.xhr.abort();
  }
}

/**
 * Converts input parameters to API-compatible query arguments
 * @param params
 */
export function paramsToQueryArgs(params) {
  return params.itemIds
      ? {id: params.itemIds}    // items matching array of itemids
      : params.query
        ? {query: params.query} // items matching search query
        : undefined;            // all items
}

export class Client {
  constructor(options) {
    if (typeof options === 'undefined') {
      options = {};
    }
    this.baseUrl = options.baseUrl || '/api/0';
    this.activeRequests = {};
  }

  uniqueId() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
                 .toString(16)
                 .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  }

  wrapCallback(id, func, cleanup) {
    /*eslint consistent-return:0*/
    if (typeof func === 'undefined') {
      return;
    }

    return (...args) => {
      let req = this.activeRequests[id];
      if (cleanup === true) {
        delete this.activeRequests[id];
      }
      if (req.alive) {
        return func.apply(req, args);
      }
    };
  }

  clear() {
    for (let id in this.activeRequests) {
      this.activeRequests[id].cancel();
    }
  }

  request(path, options = {}) {
    let query = $.param(options.query || '', true);
    let method = options.method || (options.data ? 'POST' : 'GET');
    let data = options.data;
    let id = this.uniqueId();

    if (typeof data !== 'undefined' && method !== 'GET') {
      data = JSON.stringify(data);
    }

    let fullUrl;
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

    this.activeRequests[id] = new Request($.ajax({
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

  _chain(...funcs) {
    funcs = funcs.filter((f) => typeof f !== 'undefined' && f);
    return (...args) => {
      funcs.forEach((func) => {
        func.apply(funcs, args);
      });
    };
  }

  _wrapRequest(path, options, extraParams) {
    if (typeof extraParams === 'undefined') {
      extraParams = {};
    }

    options.success = this._chain(options.success, extraParams.success);
    options.error = this._chain(options.error, extraParams.error);
    options.complete = this._chain(options.complete, extraParams.complete);

    return this.request(path, options);
  }
}
