module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "5619":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_img_magnifier_vue_vue_type_style_index_0_id_14107ad6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5bfa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_img_magnifier_vue_vue_type_style_index_0_id_14107ad6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_img_magnifier_vue_vue_type_style_index_0_id_14107ad6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_img_magnifier_vue_vue_type_style_index_0_id_14107ad6_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5bfa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"f1b4c448-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/img-magnifier/src/img-magnifier.vue?vue&type=template&id=14107ad6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"imgMagnifier",staticClass:"img-magnifier"},[_c('div',{ref:"imgWrap",on:{"mouseover":_vm.showMagnifier,"mousemove":_vm.moveMagnifyingArea,"mouseout":_vm.hideMagnifier}},[_c('img',{ref:"smallImg",attrs:{"src":_vm.smallSrc,"width":_vm.configs.smallImgWidth,"height":_vm.configs.smallImgHeight}}),_c('transition',{attrs:{"css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowMagnifier),expression:"isShowMagnifier"}],ref:"mask",staticClass:"mask",style:(_vm.maskStyle)})])],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowMagnifier),expression:"isShowMagnifier"}],ref:"magnifierArea",staticClass:"magnifier-area"},[_c('img',{staticClass:"magnifier-area-img magnifier-area-img-hook ",attrs:{"src":_vm.magnifierSrc,"width":_vm.configs.magnifierWidth,"height":_vm.configs.magnifierHeight}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/img-magnifier/src/img-magnifier.vue?vue&type=template&id=14107ad6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/img-magnifier/src/img-magnifier.vue?vue&type=script&lang=js&
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
/* harmony default export */ var img_magnifiervue_type_script_lang_js_ = ({
  name: 'img-magnifier',
  props: {
    smallSrc: {
      type: String
    },
    magnifierSrc: {
      type: String
    },
    maskStyle: {
      type: Object,
      required: true
    },
    configs: {
      type: Object,
      required: true
    },
    maskTransEnter: {
      type: Object
    },
    maskTransLeave: {
      type: Object
    }
  },
  data: function data() {
    return {
      scaleX: null,
      scaleY: null,
      isShowMagnifier: false,
      imgMagnifier: null,
      mask: null,
      magnifierArea: null,
      magnifierAreaImg: null,
      isFirstShow: true
    };
  },
  methods: {
    initView: function initView() {
      // 将值重置
      this.isFirstShow = true; // 设置放大视图显示的位置

      var magnifierArea = this.$refs.magnifierArea;

      if (['absolute', 'fixed'].indexOf(this.configs.magnifierPosWay) !== -1) {
        magnifierArea.style.position = this.configs.magnifierPosWay;
        magnifierArea.style.left = this.configs.magnifierPosLeft;
        magnifierArea.style.top = this.configs.magnifierPosTop;
      } // 计算缩放比


      this.scaleX = this.configs.magnifierWidth / this.configs.smallImgWidth;
      this.scaleY = this.configs.magnifierHeight / this.configs.smallImgHeight; // 保存  dom对象

      this.imgMagnifier = this.$refs.imgMagnifier;
      this.mask = this.$refs.mask;
      this.magnifierArea = magnifierArea;
      this.magnifierAreaImg = magnifierArea.getElementsByClassName('magnifier-area-img-hook')[0];
    },
    showMagnifier: function showMagnifier() {
      var _this = this;

      this.isShowMagnifier = true; // 仅在首次显示时设置放大镜的显示区域大小

      if (this.isFirstShow) {
        this.isFirstShow = false;
        this.$nextTick(function () {
          var maskWidth = _this.mask.offsetWidth;
          var maskHeight = _this.mask.offsetHeight;
          _this.magnifierArea.style.width = maskWidth * _this.scaleX + 'px';
          _this.magnifierArea.style.height = maskHeight * _this.scaleY + 'px';
        });
      }
    },
    moveMagnifyingArea: function moveMagnifyingArea(e) {
      var rect = this.imgMagnifier.getBoundingClientRect();
      var maskWidth = this.mask.offsetWidth;
      var maskHeight = this.mask.offsetHeight; // 根据鼠标位置相对 .img-magnifier 的位置

      var mounseX = Math.round(e.clientX - rect.left);
      var mounseY = Math.round(e.clientY - rect.top);
      var maskX = Math.round(mounseX - maskWidth / 2);
      var maskY = Math.round(mounseY - maskHeight / 2); // 考虑边界修正 mask 的位置

      if (maskX < 0) {
        maskX = 0;
      } else if (maskX + maskWidth > this.configs.smallImgWidth) {
        maskX = this.configs.smallImgWidth - maskWidth;
      }

      if (maskY < 0) {
        maskY = 0;
      } else if (maskY + maskHeight > this.configs.smallImgHeight) {
        maskY = this.configs.smallImgHeight - maskHeight;
      } // 设置遮罩的移动


      this.mask.style.webkitTransform = "translate3d(".concat(maskX, "px,").concat(maskY, "px,0)");
      this.mask.style.transform = "translate3d(".concat(maskX, "px,").concat(maskY, "px,0)"); // 设置大图的移动位置

      var magnifierX = -1 * maskX * this.scaleX;
      var magnifierY = -1 * maskY * this.scaleY;
      this.magnifierAreaImg.style.webkitTransform = "translate3d(".concat(magnifierX, "px,").concat(magnifierY, "px,0)");
      this.magnifierAreaImg.style.transform = "translate3d(".concat(magnifierX, "px,").concat(magnifierY, "px,0)");
    },
    hideMagnifier: function hideMagnifier() {
      this.isShowMagnifier = false;
    },
    beforeEnter: function beforeEnter(el) {
      if (!this.maskTransEnter) {
        return;
      }

      for (var key in this.maskTransEnter) {
        el.style[key] = this.maskTransEnter[key];
      }
    },
    enter: function enter(el, done) {
      var _this2 = this;

      if (!this.maskTransEnter) {
        done();
        return;
      } // 强制页面重绘

      /* eslint-disable no-unused-vars */


      var rf = el.offsetHeight;
      this.$nextTick(function () {
        for (var key in _this2.maskStyle) {
          el.style[key] = _this2.maskStyle[key];
        }

        el.addEventListener('transitioned', done);
      });
    },
    leave: function leave(el, done) {
      if (!this.maskTransLeave) {
        done();
        return;
      }

      for (var key in this.maskTransLeave) {
        el.style[key] = this.maskTransLeave[key];
      }

      el.addEventListener('transitioned', done);
    }
  },
  mounted: function mounted() {
    this.initView();
  }
});
// CONCATENATED MODULE: ./packages/img-magnifier/src/img-magnifier.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_img_magnifiervue_type_script_lang_js_ = (img_magnifiervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/img-magnifier/src/img-magnifier.vue?vue&type=style&index=0&id=14107ad6&lang=stylus&scoped=true&
var img_magnifiervue_type_style_index_0_id_14107ad6_lang_stylus_scoped_true_ = __webpack_require__("5619");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/img-magnifier/src/img-magnifier.vue






/* normalize component */

var component = normalizeComponent(
  src_img_magnifiervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "14107ad6",
  null
  
)

component.options.__file = "img-magnifier.vue"
/* harmony default export */ var img_magnifier = (component.exports);
// CONCATENATED MODULE: ./packages/img-magnifier/index.js

// sumFunction 插件对应组件的名字


img_magnifier.install = function (Vue) {
  return Vue.component(img_magnifier.name, img_magnifier);
};

/* harmony default export */ var packages_img_magnifier = (img_magnifier);
// CONCATENATED MODULE: ./packages/index.js

// 导入颜色选择器组件

var components = [packages_img_magnifier];

var install = function install(Vue) {
  if (install.installed) return;
  components.map(function (component) {
    return Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  install: install,
  imgMagnifier: packages_img_magnifier
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });