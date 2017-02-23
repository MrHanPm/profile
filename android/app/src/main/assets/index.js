// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	var _filters = __webpack_require__(19);

	var filters = _interopRequireWildcard(_filters);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// register global utility filters.
	// import Vue from 'vue'
	Object.keys(filters).forEach(function (key) {
	  Vue.filter(key, filters[key]);
	});

	new Vue(Vue.util.extend({ el: '#root' }, _App2.default));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\fe\\www\\profile\\src\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MessagesView = __webpack_require__(3);

	var _MessagesView2 = _interopRequireDefault(_MessagesView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'app',
	  components: {
	    MessagesView: _MessagesView2.default
	  }
	}; //
	//
	//
	//
	//
	//

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\fe\\www\\profile\\src\\views\\MessagesView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "message-wrapper": {
	    "height": 100,
	    "backgroundColor": "#edf2fa"
	  },
	  "clear": {
	    "position": "absolute",
	    "right": 0,
	    "top": 0,
	    "height": 88
	  },
	  "clear-text": {
	    "width": 120,
	    "lineHeight": 88,
	    "color": "#666666",
	    "fontSize": 28,
	    "textAlign": "center"
	  },
	  "messages-list": {
	    "paddingLeft": 30,
	    "backgroundColor": "#ffffff"
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _appHeader = __webpack_require__(6);

	var _appHeader2 = _interopRequireDefault(_appHeader);

	var _message = __webpack_require__(10);

	var _message2 = _interopRequireDefault(_message);

	var _appFooter = __webpack_require__(14);

	var _appFooter2 = _interopRequireDefault(_appFooter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { AppHeader: _appHeader2.default, Message: _message2.default, AppFooter: _appFooter2.default },
	  data: function data() {
	    return {
	      loading: true,
	      messages: [{
	        "type": 0,
	        "add_time": "2017-02-21 14:57:13",
	        "content": "亲爱的用户：您已成功下单，订单834295967053250560，请您在15分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 11
	      }, {
	        "type": 1,
	        "add_time": "2017-02-22 15:57:13",
	        "content": "亲爱的用户：您已成功下单，订单334295967053250560，请您在5分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 12
	      }, {
	        "type": 0,
	        "add_time": "2017-02-23 16:57:13",
	        "content": "亲爱的用户：您已成功下单，订单134295967053250560，请您在2分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 13
	      }, {
	        "type": 0,
	        "add_time": "2017-02-21 14:57:13",
	        "content": "亲爱的用户：您已成功下单，订单834295967053250560，请您在15分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 14
	      }, {
	        "type": 1,
	        "add_time": "2017-02-22 15:57:13",
	        "content": "亲爱的用户：您已成功下单，订单334295967053250560，请您在5分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 15
	      }, {
	        "type": 0,
	        "add_time": "2017-02-23 16:57:13",
	        "content": "亲爱的用户：您已成功下单，订单134295967053250560，请您在2分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 16
	      }, {
	        "type": 0,
	        "add_time": "2017-02-21 14:57:13",
	        "content": "亲爱的用户：您已成功下单，订单834295967053250560，请您在15分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 17
	      }, {
	        "type": 1,
	        "add_time": "2017-02-22 15:57:13",
	        "content": "亲爱的用户：您已成功下单，订单334295967053250560，请您在5分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 18
	      }, {
	        "type": 1,
	        "add_time": "2017-02-23 16:57:13",
	        "content": "亲爱的用户：您已成功下单，订单134295967053250560，请您在2分钟内完成支付，否则订单将自动取消。感谢您的支持。",
	        "id": 19
	      }]
	    };
	  },

	  methods: {
	    clear: function clear() {
	      this.messages = [];
	    },
	    fetch: function fetch() {
	      return '222';
	    },
	    readed: function readed(i) {
	      this.messages[i].type = 1;
	    },
	    removeMessage: function removeMessage(i) {
	      this.messages.splice(i, 1);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(7)
	)

	/* script */
	__vue_exports__ = __webpack_require__(8)

	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\fe\\www\\profile\\src\\components\\app-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "header": {
	    "position": "relative",
	    "height": 88,
	    "paddingLeft": 120,
	    "paddingRight": 120,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#e3eaf7"
	  },
	  "back": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "width": 120
	  },
	  "back-text": {
	    "paddingLeft": 36,
	    "lineHeight": 88,
	    "fontSize": 28,
	    "color": "#666666"
	  },
	  "title": {
	    "flex": 1,
	    "lineHeight": 88,
	    "color": "#333333",
	    "fontSize": 32,
	    "textAlign": "center"
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'app-header',
	  props: ['title']
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["header"]
	  }, [_vm._m(0), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["back"]
	  }, [_c('text', {
	    staticClass: ["back-text"]
	  }, [_vm._v("返回")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(11)
	)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\fe\\www\\profile\\src\\components\\message.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "message": {
	    "position": "relative",
	    "paddingLeft": 90,
	    "paddingTop": 20,
	    "paddingBottom": 30,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#e3eaf7",
	    "backgroundColor": "#ffffff"
	  },
	  "icon": {
	    "position": "absolute",
	    "left": 0,
	    "top": 30,
	    "width": 60,
	    "height": 60,
	    "color": "#ffffff",
	    "borderRadius": 50,
	    "backgroundColor": "#89B8F5"
	  },
	  "point": {
	    "position": "absolute",
	    "left": 42,
	    "top": 26,
	    "width": 16,
	    "height": 16,
	    "borderRadius": 50,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#ffffff",
	    "backgroundColor": "#DA242A"
	  },
	  "content": {
	    "fontSize": 28,
	    "lineHeight": 46,
	    "paddingRight": 80,
	    "wordBreak": "break-all",
	    "wordWrap": "break-word"
	  },
	  "date": {
	    "marginTop": 20,
	    "fontSize": 24,
	    "lineHeight": 30,
	    "color": "#8794AD"
	  },
	  "remove": {
	    "position": "absolute",
	    "width": 48,
	    "height": 48,
	    "right": 28,
	    "bottom": 18,
	    "backgroundColor": "#cccccc"
	  },
	  "remove-text": {
	    "fontSize": 24,
	    "width": 48,
	    "height": 48,
	    "lineHeight": 48,
	    "textAlign": "center",
	    "color": "#cccccc"
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    message: {
	      type: Object,
	      required: true
	    },
	    index: {
	      type: Number,
	      required: true
	    }
	  },
	  methods: {
	    remove: function remove() {
	      this.$emit('remove', this.index);
	    }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["message"]
	  }, [_c('div', {
	    staticClass: ["icon"]
	  }), (_vm.message.type == 0) ? _c('div', {
	    staticClass: ["point"]
	  }) : _vm._e(), _c('text', {
	    staticClass: ["content"]
	  }, [_vm._v(_vm._s(_vm.message.content))]), _c('text', {
	    staticClass: ["date"]
	  }, [_vm._v(_vm._s(_vm.message.add_time))]), _c('div', {
	    staticClass: ["remove"],
	    on: {
	      "click": _vm.remove
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(15)
	)

	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\fe\\www\\profile\\src\\components\\app-footer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "footer": {
	    "marginTop": 30,
	    "marginBottom": 30,
	    "height": 24
	  },
	  "footer-text": {
	    "fontSize": 24,
	    "lineHeight": 24,
	    "color": "#2571E5",
	    "textAlign": "center"
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["footer"]
	  }, [_c('text', {
	    staticClass: ["footer-text"]
	  }, [_vm._v("客服电话：400-800-1616")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["message-wrapper"]
	  }, [_c('app-header', {
	    attrs: {
	      "title": "我的消息"
	    }
	  }), _c('div', {
	    staticClass: ["clear"],
	    on: {
	      "click": _vm.clear
	    }
	  }, [_c('text', {
	    staticClass: ["clear-text"]
	  }, [_vm._v("清空")])]), _c('list', {
	    staticClass: ["messages-list"],
	    attrs: {
	      "loadmoreoffset": "10"
	    },
	    on: {
	      "loadmore": _vm.fetch
	    }
	  }, _vm._l((_vm.messages), function(message, index) {
	    return _c('cell', {
	      key: message.id,
	      staticClass: ["message-cell"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      },
	      on: {
	        "click": function($event) {
	          _vm.readed(index)
	        }
	      }
	    }, [_c('message', {
	      attrs: {
	        "message": message,
	        "index": index
	      },
	      on: {
	        "remove": _vm.removeMessage
	      }
	    })], 1)
	  })), _c('app-footer')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('messages-view', {
	    staticStyle: {
	      flex: "1"
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.host = host;
	exports.https = https;
	exports.timeAgo = timeAgo;
	exports.unescape = unescape;
	function host(url) {
	  if (!url) return '';
	  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
	  var parts = host.split('.').slice(-3);
	  if (parts[0] === 'www') parts.shift();
	  return parts.join('.');
	}

	function https(url) {
	  // ios替换http为https
	  if (WXEnvironment.platform === 'iOS' && typeof url === 'string') {
	    return url.replace(/^http\:/, 'https:');
	  }
	  return '';
	}

	function timeAgo(time) {
	  // 时间筛选
	  var between = Date.now() / 1000 - Number(time);
	  if (between < 3600) {
	    // 分钟
	    return pluralize(~~(between / 60), ' minute');
	  } else if (between < 86400) {
	    // 小时
	    return pluralize(~~(between / 3600), ' hour');
	  } else {
	    // 天
	    return pluralize(~~(between / 86400), ' day');
	  }
	}

	function pluralize(time, label) {
	  if (time === 1) {
	    return time + label;
	  }
	  return time + label + 's';
	}

	function unescape(text) {
	  var res = text || '';
	  [['<p>', '\n'], ['&amp;', '&'], ['&amp;', '&'], ['&apos;', '\''], ['&#x27;', '\''], ['&#x2F;', '/'], ['&#39;', '\''], ['&#47;', '/'], ['&lt;', '<'], ['&gt;', '>'], ['&nbsp;', ' '], ['&quot;', '"']].forEach(function (pair) {
	    res = res.replace(new RegExp(pair[0], 'ig'), pair[1]);
	  });
	  return res;
	}

/***/ }
/******/ ]);