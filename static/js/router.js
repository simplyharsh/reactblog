// based on krasimirtsonev.com

var Router = {
  routes: [],
  mode: null,
  root: '/',
  config: function(options) {
    this.mode = options && options.mode && options.mode == 'history'
      && !!(history.pushState) ? 'history' : 'hash';
    this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
    return this;
  },
  get_current_url: function() {
    var fragment = '';
    if(this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      var match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : '';
    }
    return this.clearSlashes(fragment);
  },
  clearSlashes: function(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
  },
  add: function(re, handler) {
    if(typeof re == 'function') {
      handler = re;
      re = '';
    }
    this.routes.push({ re: re, handler: handler});
    return this;
  },
  remove: function(param) {
    for(var i=0, r; i<this.routes.length, r = this.routes[i]; i++) {
      if(r.handler === param || r.re.toString() === param.toString()) {
        this.routes.splice(i, 1);
        return this;
      }
    }
    return this;
  },
  flush: function() {
    this.routes = [];
    this.mode = null;
    this.root = '/';
    return this;
  },
  handle: function(f) {
    var fragment = f || this.get_current_url();
    for(var i=0; i<this.routes.length; i++) {
      var match = fragment.match(this.routes[i].re);
      if(match) {
        match.shift();
        this.routes[i].handler.apply({}, match);
        return this;
      }
    }
    return this;
  },
  listen: function() {
    var sui = this;
    var current = sui.get_current_url();
    var fn = function() {
      if(current !== sui.get_current_url()) {
        current = sui.get_current_url();
        sui.handle(current);
      }
    }
    clearInterval(this.interval);
    this.interval = setInterval(fn, 50);
    return this;
  },
  redirect: function(path, replace) {
    var sui = this;
    if(replace != true) {
      replace = false;
    }

    path = path ? path : '';
    if(this.mode === 'history') {
      if (replace) {
        history.replaceState(null, null, this.root + this.clearSlashes(path));
      } else {
        history.pushState(null, null, this.root + this.clearSlashes(path));
      }
    } else {
      window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
    }
    return this;
  }
}
