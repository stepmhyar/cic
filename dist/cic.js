(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cic"] = factory();
	else
		root["Cic"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "tjUo");
/******/ })
/************************************************************************/
/******/ ({

/***/ "A6NB":
/***/ (function(module, exports) {

/**
 * polyfill for Function
 */

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    var args = Array.prototype.slice.call(arguments, 1);
    var fToBind = this;
    var fNOP = function () {};
    var fBound = function () {
      return fToBind.apply(this instanceof fNOP ? this : oThis, args.concat(Array.prototype.slice.call(arguments)));
    };

    if (this.prototype) {
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();
    return fBound;
  };
}
/**
 * polyfill for Object
 */

// from https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
(function () {
  var prototypeOfObject = Object.prototype;
  var call = Function.call;
  var owns = call.bind(prototypeOfObject.hasOwnProperty);
  var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
  var toStr = call.bind(prototypeOfObject.toString);

  var defineGetter;
  var defineSetter;
  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
  if (supportsAccessors) {
    /* eslint-disable no-underscore-dangle, no-restricted-properties */
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
    /* eslint-enable no-underscore-dangle, no-restricted-properties */
  }

  var isPrimitive = function isPrimitive(o) {
    return o == null || (typeof o !== 'object' && typeof o !== 'function');
  };

  if (!Object.getPrototypeOf) {
    Object.getPrototypeOf = function getPrototypeOf(object) {
      var proto = object.__proto__;
      if (proto || proto === null) {
        return proto;
      }
      if (toStr(object.constructor) === '[object Function]') {
        return object.constructor.prototype;
      }
      if (object instanceof Object) {
        return prototypeOfObject;
      }
      return null;
    };
  }

  if (!Object.keys) {
    Object.keys = (function() {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
      var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ];
      var dontEnumsLength = dontEnums.length;

      return function (obj) {
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }
        var result = [], prop, i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }
        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    }());
  }

  if (!Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
      if (object !== Object(object)) {
        throw TypeError('Object.getOwnPropertyNames called on non-object: ' + object);
      }
      return Object.keys(object);
    };
  }

  var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
    try {
      object.sentinel = 0;
      return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
    } catch (err) {
      return false;
    }
  };
  var getOwnPropertyDescriptorFallback;
  if (Object.defineProperty) {
    var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
    var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
      doesGetOwnPropertyDescriptorWork(document.createElement('div'));
    if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
      getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
    }
  }
  if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
    var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';
    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
      if (isPrimitive(object)) {
        throw new TypeError(ERR_NON_OBJECT + object);
      }
      if (getOwnPropertyDescriptorFallback) {
        try {
          return getOwnPropertyDescriptorFallback.call(Object, object, property);
        } catch (err) {

        }
      }
      var descriptor;
      if (!owns(object, property)) {
        return descriptor;
      }
      descriptor = {
        enumerable: isEnumerable(object, property),
        configurable: true
      };
      if (supportsAccessors) {
        var prototype = object.__proto__;
        var notPrototypeOfObject = object !== prototypeOfObject;
        if (notPrototypeOfObject) {
          object.__proto__ = prototypeOfObject;
        }
        var getter = lookupGetter(object, property);
        var setter = lookupSetter(object, property);
        if (notPrototypeOfObject) {
          object.__proto__ = prototype;
        }
        if (getter || setter) {
          if (getter) {
            descriptor.get = getter;
          }
          if (setter) {
            descriptor.set = setter;
          }
          return descriptor;
        }
      }
      descriptor.value = object[property];
      descriptor.writable = true;
      return descriptor;
    };
  }

  var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
    try {
      Object.defineProperty(object, 'sentinel', {});
      return 'sentinel' in object;
    } catch (exception) {
      return false;
    }
  };

  if (Object.defineProperty) {
    var definePropertyWorksOnObject = doesDefinePropertyWork({});
    var definePropertyWorksOnDom = typeof document === 'undefined' ||
      doesDefinePropertyWork(document.createElement('div'));
    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
      var definePropertyFallback = Object.defineProperty;
      var definePropertiesFallback = Object.defineProperties;
    }
  }

  if (!Object.defineProperty || definePropertyFallback) {
    var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
    var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
    var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';
    Object.defineProperty = function defineProperty(object, property, descriptor) {
      if (isPrimitive(object)) {
        throw new TypeError(ERR_NON_OBJECT_TARGET + object);
      }
      if (isPrimitive(descriptor)) {
        throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
      }
      if (definePropertyFallback) {
        try {
          return definePropertyFallback.call(Object, object, property, descriptor);
        } catch (exception) {
        }
      }
      if ('value' in descriptor) {
        if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
          var prototype = object.__proto__;
          object.__proto__ = prototypeOfObject;
          delete object[property];
          object[property] = descriptor.value;
          object.__proto__ = prototype;
        } else {
          object[property] = descriptor.value;
        }
      } else {
        var hasGetter = 'get' in descriptor;
        var hasSetter = 'set' in descriptor;
        if (!supportsAccessors && (hasGetter || hasSetter)) {
          return object;
        }
        // If we got that far then getters and setters can be defined !!
        if (hasGetter) {
          defineGetter(object, property, descriptor.get);
        }
        if (hasSetter) {
          defineSetter(object, property, descriptor.set);
        }
      }
      return object;
    };
  }

  if (!Object.defineProperties || definePropertiesFallback) {
    Object.defineProperties = function defineProperties(object, properties) {
      if (definePropertiesFallback) {
        try {
          return definePropertiesFallback.call(Object, object, properties);
        } catch (exception) {
        }
      }
      var keys = Object.keys(properties);
      for (var i = 0; i < keys.length; i++) {
        var property = keys[i];
        if (property !== '__proto__') {
          Object.defineProperty(object, property, properties[property]);
        }
      }
      return object;
    };
  }

  if (!Object.create) {
    var createEmpty;
    var supportsProto = !({ __proto__: null } instanceof Object);
    /* global ActiveXObject */
    var shouldUseActiveX = function () {
      if (!document.domain) {
        return false;
      }
      try {
        return !!new ActiveXObject('htmlfile');
      } catch (exception) {
        return false;
      }
    };

    var getEmptyViaActiveX = function () {
      var empty;
      var xDoc;
      xDoc = new ActiveXObject('htmlfile');
      var script = 'script';
      xDoc.write('<' + script + '></' + script + '>');
      xDoc.close();

      empty = xDoc.parentWindow.Object.prototype;
      xDoc = null;

      return empty;
    };

    var getEmptyViaIFrame = function () {
      var iframe = document.createElement('iframe');
      var parent = document.body || document.documentElement;
      var empty;

      iframe.style.display = 'none';
      parent.appendChild(iframe);
      // eslint-disable-next-line no-script-url
      iframe.src = 'javascript:';

      empty = iframe.contentWindow.Object.prototype;
      parent.removeChild(iframe);
      iframe = null;

      return empty;
    };

    /* global document */
    if (supportsProto || typeof document === 'undefined') {
      createEmpty = function () {
        return { __proto__: null };
      };
    } else {
      createEmpty = function () {
        var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();

        delete empty.constructor;
        delete empty.hasOwnProperty;
        delete empty.propertyIsEnumerable;
        delete empty.isPrototypeOf;
        delete empty.toLocaleString;
        delete empty.toString;
        delete empty.valueOf;

        var Empty = function Empty() { };
        Empty.prototype = empty;
        // short-circuit future calls
        createEmpty = function () {
          return new Empty();
        };
        return new Empty();
      };
    }

    Object.create = function create (prototype, properties) {
      var object;
      var Type = function () { };
      if (prototype === null) {
        object = createEmpty();
      } else {
        if (prototype !== null && isPrimitive(prototype)) {
          throw new TypeError('Object prototype may only be an Object or null');
        }
        Type.prototype = prototype;
        object = new Type();
        object.__proto__ = prototype;
      }

      if (properties !== void 0) {
        Object.defineProperties(object, properties);
      }

      return object;
    };
  }

  if (!Object.seal) {
    Object.seal = function seal(object) {
      if (Object(object) !== object) {
        throw new TypeError('Object.seal can only be called on Objects.');
      }
      return object;
    };
  }

  if (!Object.freeze) {
    Object.freeze = function freeze(object) {
      if (Object(object) !== object) {
        throw new TypeError('Object.freeze can only be called on Objects.');
      }
      return object;
    };
  }

  try {
    Object.freeze(function () { });
  } catch (exception) {
    Object.freeze = (function (freezeObject) {
      return function freeze(object) {
        if (typeof object === 'function') {
          return object;
        }
        return freezeObject(object);
      };
    })(Object.freeze);
  }

  if (!Object.preventExtensions) {
    Object.preventExtensions = function preventExtensions(object) {
      if (Object(object) !== object) {
        throw new TypeError('Object.preventExtensions can only be called on Objects.');
      }
      return object;
    };
  }

  if (!Object.isSealed) {
    Object.isSealed = function isSealed(object) {
      if (Object(object) !== object) {
        throw new TypeError('Object.isSealed can only be called on Objects.');
      }
      return false;
    };
  }

  if (!Object.isFrozen) {
    Object.isFrozen = function isFrozen(object) {
      if (Object(object) !== object) {
        throw new TypeError('Object.isFrozen can only be called on Objects.');
      }
      return false;
    };
  }

  if (!Object.isExtensible) {
    Object.isExtensible = function isExtensible(object) {
      if (Object(object) !== object) {
        throw new TypeError('Object.isExtensible can only be called on Objects.');
      }
      var name = '';
      while (owns(object, name)) {
        name += '?';
      }
      object[name] = true;
      var returnValue = owns(object, name);
      delete object[name];
      return returnValue;
    };
  }
})();

/**
 * polyfill for Array
 */

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    var T, k;
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.forEach called on null or undefined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (Object.prototype.toString.call(callback) != '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

// form https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every) {
  Array.prototype.every = function (callback) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.every called on null or undefined');
    }

    var O = Object(this);
    var len = O.length >>> 0;
    if (Object.prototype.toString.call(callback) != '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }
    var ctx = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in O && !callback.call(ctx, O[i], i, O)) {
        return false;
      }
    }

    return true;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
if (!Array.prototype.fill) {
  Array.prototype.fill = function (value) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.fill called on null or undefined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    var start = arguments[1];
    var relativeStart = start >> 0;
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;
    var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
    while (k < final) {
      O[k] = value;
      k++;
    }

    return O;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.filter called on null or undefined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (Object.prototype.toString.call(callback) != '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }
    var res = [];
    var ctx = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in O) {
        var val = O[i];
        if (callback.call(ctx, val, i, O)) {
          res.push(val);
        }
      }
    }
    return res;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.indexOf called on null or undefined');
    }
    var k;
    var O = Object(this);
    var len = O.length >>> 0;
    if (len === 0) {
      return -1;
    }
    var n = fromIndex | 0;
    if (n >= len) {
      return -1;
    }
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.lastIndexOf called on null or undefined');
    }
    var n, k;
    var t = Object(this);
    var len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }
    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n !== n) {
        n = 0;
      } else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }
    k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);
    for (;k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }
    var T, A, k;
    var O = Object(this);
    var len = O.length >>> 0;
    if (Object.prototype.toString.call(callback) !== '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }
    if (thisArg) {
      T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
      var kValue, mappedValue;
      if (k in O) {
        kValue = O[k];
        mappedValue = callback.call(T, kValue, k, O);
        A[ k ] = mappedValue;
      }
      k++;
    }
    return A;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (Object.prototype.toString.call(callback) !== '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callback) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.reduceRight called on null or undefined');
    }
    if (Object.prototype.toString.call(callback) !== '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = len - 1, value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k >= 0 && !(k in t)) {
        k--;
      }
      if (k < 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k >= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}

// from https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
  Array.prototype.some = function (callback) {
    if (this === void 0 || this === null) {
      throw new TypeError('Array.prototype.reduceRight called on null or undefined');
    }
    if (Object.prototype.toString.call(callback) !== '[object Function]') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this);
    var len = t.length >>> 0;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && callback.call(thisArg, t[i], i, t)) {
        return true;
      }
    }
    return false;
  };
}

//----------------------------------------------------------------------
//
// CSSOM View Module
// https://dev.w3.org/csswg/cssom-view/
//
//----------------------------------------------------------------------

// Fix for IE8-'s Element.getBoundingClientRect()
(function (global) {
  if ('TextRectangle' in global && !('width' in global.TextRectangle.prototype)) {
    Object.defineProperties(global.TextRectangle.prototype, {
      'width': { get: function () { return this.right - this.left; } },
      'height': { get: function () { return this.bottom - this.top; } }
    });
  }
})(window);
/**
 * polyfill for Date
 */

// from https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/now
if (!Date.now) {
  Date.now = function now () {
    return new Date().getTime();
  };
}

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
if (!Date.prototype.toISOString) {
  (function() {
    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
    Date.prototype.toISOString = function () {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };
  }());
}
/**
 * polyfill for DOM
 */

(function (global) {
  if (!('document' in global)) {
    return;
  }
  var document = global.document;

  // IE8- document.getElementsByClassName
  if (!document.getElementsByClassName && document.querySelectorAll) {
    var getElementsByClassName = function (classNames) {
      classNames = String(classNames).replace(/^|\s+/g, '.');
      return this.querySelectorAll(classNames);
    };
    void [HTMLDocument, Element].forEach(function (o) {
      o.prototype.getElementsByClassName = getElementsByClassName;
    });
  }

  // IE CustomEvent
  if (!('CustomEvent' in global) || typeof global.CustomEvent !== 'function') {
    var CustomEvent = function (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };
    CustomEvent.prototype = global.Event.prototype;
    global.CustomEvent = CustomEvent;
  }

  // Element.matches
  // from https://developer.mozilla.org/en/docs/Web/API/Element/matches
  (function () {
    if (!('Element' in global) || Element.prototype.matches) {
      return;
    }
    var matchesVenders = ['ms', 'o', 'moz', 'webkit'];
    var matchesSelectorSuffix = 'MatchesSelector';
    for (var i = 0; i < matchesVenders.length; i++) {
      var matchesSelector = matchesVenders[i] + matchesSelectorSuffix;
      if (matchesSelector in Element.prototype) {
        Element.prototype.matches = Element.prototype[matchesSelector];
        return;
      }
    }
    if (document.querySelectorAll) {
      Element.prototype.matches = function matches (selector) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(selector);
        var i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
    }
  })();

  // Node.textContent
  if (Object.defineProperty
    && Object.getOwnPropertyDescriptor
    && Object.getOwnPropertyDescriptor(Element.prototype, 'textContent')
    && !Object.getOwnPropertyDescriptor(Element.prototype, 'textContent').get) {
    (function() {
      var innerText = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
      Object.defineProperty(Element.prototype, 'textContent', {
        get: function() {
          return innerText.get.call(this);
        },
        set: function(s) {
          return innerText.set.call(this, s);
        }
      });
    })();
  }
})(window);

/**
 * polyfill for DOM Event
 */

// from https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Event/polyfill.js
(function (global) {
  if (('Event' in global) && typeof global.Event === 'function') {
    return;
  }
  var unlistenableWindowEvents = {
    click: 1,
    dblclick: 1,
    keyup: 1,
    keypress: 1,
    keydown: 1,
    mousedown: 1,
    mouseup: 1,
    mousemove: 1,
    mouseover: 1,
    mouseenter: 1,
    mouseleave: 1,
    mouseout: 1,
    storage: 1,
    storagecommit: 1,
    textinput: 1
  };
  var existingProto = (global.Event && global.Event.prototype) || null;
  global.Event = Window.prototype.Event = function Event (type, eventInitDict) {
    if (!type) {
      throw new Error('Not enough arguments');
    }
    var event;
    if ('createEvent' in document) {
      event = document.createEvent('Event');
      var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
      var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
      event.initEvent(type, bubbles, cancelable);
      return event;
    }
    event = document.createEventObject();
    event.type = type;
    event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
    event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
    return event;
  };
  if (existingProto) {
    Object.defineProperty(global.Event, 'prototype', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: existingProto
    });
  }
  if (!('createEvent' in document)) {
    var addEventListener = function (type, listener) {
      var element = this;
      if (element === global && type in unlistenableWindowEvents) {
        throw new Error('In IE8 the event: ' + type + ' is not available on the window object.');
      }
      if (!element._events) {
        element._events = {};
      }
      if (!element._events[type]) {
        element._events[type] = function (event) {
          var list = element._events[event.type].list;
          var events = list.slice();
          var index = -1;
          var length = events.length;
          var eventElement;
          event.preventDefault = function preventDefault () {
            if (event.cancelable !== false) {
              event.returnValue = false;
            }
          };
          event.stopPropagation = function stopPropagation () {
            event.cancelBubble = true;
          };
          event.stopImmediatePropagation = function stopImmediatePropagation () {
            event.cancelBubble = true;
            event.cancelImmediate = true;
          };
          event.currentTarget = element;
          event.target = event.target || event.srcElement || element;
          event.relatedTarget = event.fromElement ? (event.fromElement === event.target) ? event.toElement : event.fromElement : null;
          event.timeStamp = new Date().getTime();
          if (event.clientX) {
            event.pageX = event.clientX + document.documentElement.scrollLeft;
            event.pageY = event.clientY + document.documentElement.scrollTop;
          }
          while (++index < length && !event.cancelImmediate) {
            if (index in events) {
              eventElement = events[index];
              if (list.indexOf(eventElement) !== -1 && typeof eventElement === 'function') {
                eventElement.call(element, event);
              }
            }
          }
        };
        element._events[type].list = [];
        if (element.attachEvent) {
          element.attachEvent('on' + type, element._events[type]);
        }
      }
      element._events[type].list.push(listener);
    };

    var removeEventListener = function (type, listener) {
      var element = this;
      var index;
      if (element._events && element._events[type] && element._events[type].list) {
        index = element._events[type].list.indexOf(listener);
        if (index !== -1) {
          element._events[type].list.splice(index, 1);
          if (!element._events[type].list.length) {
            if (element.detachEvent) {
              element.detachEvent('on' + type, element._events[type]);
            }
            delete element._events[type];
          }
        }
      }
    };

    var dispatchEvent = function (event) {
      if (!arguments.length) {
        throw new Error('Not enough arguments');
      }
      if (!event || typeof event.type !== 'string') {
        throw new Error('DOM Events Exception 0');
      }
      var element = this, type = event.type;
      try {
        if (!event.bubbles) {
          event.cancelBubble = true;
          var cancelBubbleEvent = function (event) {
            event.cancelBubble = true;
            (element || window).detachEvent('on' + type, cancelBubbleEvent);
          };
          this.attachEvent('on' + type, cancelBubbleEvent);
        }
        this.fireEvent('on' + type, event);
      } catch (error) {
        event.target = element;
        do {
          event.currentTarget = element;
          if ('_events' in element && typeof element._events[type] === 'function') {
            element._events[type].call(element, event);
          }
          if (typeof element['on' + type] === 'function') {
            element['on' + type].call(element, event);
          }
          element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
        } while (element && !event.cancelBubble);
      }
      return true;
    };

    void [Window, HTMLDocument, Element].forEach(function (o) {
      o.prototype.addEventListener = addEventListener;
      o.prototype.removeEventListener = removeEventListener;
      o.prototype.dispatchEvent = dispatchEvent;
    });

    // 添加DOMContentLoaded事件
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        document.dispatchEvent(new Event('DOMContentLoaded', {
          bubbles: true
        }));
      }
    });
  }
})(window);

/**
 * polyfill for getComputedStyle
 */

// from https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/getComputedStyle/polyfill.js
(function (global) {
  if ('getComputedStyle' in global && typeof global.getComputedStyle === 'function') {
    return;
  }
  function getPixelSize (element, style, property, fontSize) {
    var sizeWithSuffix = style[property];
    var size = parseFloat(sizeWithSuffix);
    var suffix = sizeWithSuffix.split(/\d/)[0];
    var rootSize;
    fontSize = (fontSize !== null) ? fontSize :
      (/%|em/.test(suffix) && element.parentElement) ?
        getPixelSize(element.parentElement, element.parentElement.currentStyle, 'fontSize', null) : 16;
    rootSize = property === 'fontSize' ? fontSize :
      /width/i.test(property) ? element.clientWidth : element.clientHeight;
    return (suffix ==='em') ? size * fontSize :
      (suffix === 'in') ? size * 96 :
        (suffix === 'pt') ? size * 96 / 72 :
          (suffix === '%') ? size / 100 * rootSize : size;
  }

  function setShortStyleProperty (style, property) {
    var borderSuffix = property === 'border' ? 'Width' : '';
    var t = property + 'Top' + borderSuffix;
    var r = property + 'Right' + borderSuffix;
    var b = property + 'Bottom' + borderSuffix;
    var l = property + 'Left' + borderSuffix;
    style[property] = (style[t] == style[r] == style[b] == style[l] ? [style[t]]
      : style[t] == style[b] && style[l] == style[r] ? [style[t], style[r]]
      : style[l] == style[r] ? [style[t], style[r], style[b]]
      : [style[t], style[r], style[b], style[l]]).join(' ');
  }

  function CSSStyleDeclaration (element) {
    var currentStyle = element.currentStyle || {};
    var style = this;
    var fontSize = getPixelSize(element, currentStyle, 'fontSize', null);
    for (var property in currentStyle) {
      if (/width|height|margin.|padding.|border.+W/.test(property) && style[property] !== 'auto') {
        style[property] = getPixelSize(element, currentStyle, property, fontSize) + 'px';
      } else if (property === 'styleFloat') {
        style['float'] = currentStyle[property];
      } else {
        style[property] = currentStyle[property];
      }
    }
    setShortStyleProperty(style, 'margin');
    setShortStyleProperty(style, 'padding');
    setShortStyleProperty(style, 'border');
    style.fontSize = fontSize + 'px';
    return style;
  }

  CSSStyleDeclaration.prototype = {
    constructor: CSSStyleDeclaration,
    getPropertyPriority: function () { },
    getPropertyValue: function (prop) {
      return this[prop] || '';
    },
    item: function () { },
    removeProperty: function () { },
    setProperty: function () { },
    getPropertyCSSValue: function () { }
  };
  global.getComputedStyle = function (node) {
    return new CSSStyleDeclaration(node);
  };
})(window);
/**
 * polyfill for IE8 in HTML
 * https://html.spec.whatwg.org
 */

// document.head
document.head = document.head || document.getElementsByTagName('head')[0];

// HTML Tag shiv
void [
  'abbr', 'article', 'aside', 'audio', 'bdi', 'canvas', 'data', 'datalist',
  'details', 'dialog', 'figcaption', 'figure', 'footer', 'header', 'hgroup',
  'main', 'mark', 'meter', 'nav', 'output', 'picture', 'progress', 'section',
  'summary', 'template', 'time', 'video'
].forEach(function (tag) {
  document.createElement(tag);
});
/**
 * polyfill for String
 */

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return String(this).replace(/^\s+/, '').replace(/\s+$/, '');
  };
}
/**
 * Polyfill for Viewport
 */

(function (global) {
  if ('innerWidth' in global && 'innerHeight' in global && 'pageXOffset' in global && 'pageYOffset' in global) {
    return;
  }
  var doc = global.document;
  var docEl = doc.documentElement;
  var body = doc.body || doc.createElement('body');

  function scrollX () {
    return (docEl.scrollLeft || body.scrollLeft || 0) - (docEl.clientLeft || body.clientLeft || 0);
  }

  function scrollY () {
    return (docEl.scrollTop || body.scrollTop || 0) - (docEl.clientTop || body.clientTop || 0);
  }

  Object.defineProperties(global, {
    innerWidth: {
      get: function () {
        return docEl.clientWidth;
      }
    },
    innerHeight: {
      get: function () {
        return docEl.clientHeight;
      }
    },
    pageXOffset: {
      get: scrollX
    },
    pageYOffset: {
      get: scrollY
    },
    scrollX: {
      get: scrollX
    },
    scrollY: {
      get: scrollY
    }
  });
})(window);

/***/ }),

/***/ "tjUo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("A6NB");

var Connection = __webpack_require__("tuwQ");

module.exports = {
  createConnection: function createConnection() {
    var noneStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return new Connection(noneStr);
  }
};

/***/ }),

/***/ "tuwQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function isString(input) {
  return Object.prototype.toString.call(input) == '[object String]';
}

function log(msg, noneStr) {// console && console.log && console.log(noneStr + ' ::: ' + (isString(msg) ?
  //   msg :
  //   JSON.stringify(msg)));
}

function log2(msg, noneStr) {
  console && console.log && console.log(noneStr + ' ::: ' + (isString(msg) ? msg : JSON.stringify(msg)));
}

function addMsgListener(msgType, callback) {
  if ('addEventListener' in document) {
    window.addEventListener(msgType, callback, false);
  } else if ('attachEvent' in document) {
    window.attachEvent("on".concat(msgType), callback);
  }
}

function removeMsgListener(msgType, callback) {
  if ('addEventListener' in document) {
    window.removeEventListener(msgType, callback, false);
  } else if ('attachEvent' in document) {
    window.dettachEvent("on".concat(msgType), callback);
  }
}

function postMessage(target, msg) {
  target.postMessage(JSON.stringify(msg), '*');
}

function clear(timeoutId, noneStr) {
  log("clear timeoutId = ".concat(timeoutId), noneStr);
  window.clearTimeout(timeoutId);
}

var lastConnectTime = 0;

function Connection(noneStr) {
  this.connected = false;
  this.destroyed = false;
  this._noneStr = noneStr;
  this._disconnectListeners = [];
  this._connectListeners = [];
  this._messageListeners = [];
  this._connecting = false;
  this._cicId = null;
  this._source = null;
  this._timeoutId = null;
  this.__onMessage = this._onMessage.bind(this);
  this.__onBeforeUnload = this._onBeforeUnload.bind(this);
  addMsgListener('message', this.__onMessage);
  addMsgListener('beforeunload', this.__onBeforeUnload);
}

Connection.prototype._onMessage = function (evt) {
  var _this = this;

  if (!evt.data) {
    return;
  }

  var evtData = JSON.parse(evt.data);
  log(evtData, this._noneStr);

  if (!evtData.cicId) {
    return;
  }

  var source = evt.source;
  var cicId = evtData.cicId,
      msgType = evtData.msgType,
      data = evtData.data;

  if (msgType == 'ping') {
    if (this._cicId || this._connecting || this.connected) {
      return;
    }

    log('收到ping信号', this._noneStr);
    this._cicId = cicId;
    this._connecting = true;
    this._source = source;
    postMessage(source, {
      cicId: cicId,
      msgType: 'pong'
    });
  } else if (msgType == 'pong' && this._connecting && !this.connected && this._cicId == cicId) {
    this._connecting = false;
    this.connected = true;
    log('收到pong信号', this._noneStr);
    clear(this._timeoutId, this._noneStr);
    this._timeoutId = null;
    postMessage(this._source, {
      cicId: cicId,
      msgType: 'pong_confirm'
    });
    setTimeout(function () {
      _newArrowCheck(this, _this);

      this._connectListeners.forEach(function (fn) {
        fn();
      });
    }.bind(this), 0);
  } else if (msgType == 'pong_confirm' && this._connecting && cicId == this._cicId) {
    log('收到pong_confirm信号', this._noneStr);
    this.connected = true;
    this._connecting = false;
    setTimeout(function () {
      _newArrowCheck(this, _this);

      this._connectListeners.forEach(function (fn) {
        fn();
      });
    }.bind(this), 0);
  } else if (msgType == 'disconnect' && cicId == this._cicId) {
    log('收到disconnect信号', this._noneStr);
    clear(this._timeoutId, this._noneStr);
    this.connected = false;
    this._connecting = false;

    this._disconnectListeners.forEach(function (fn) {
      fn();
    });
  } else if (msgType == 'message' && this.connected && cicId == this._cicId) {
    log('收到message信号', this._noneStr);

    this._messageListeners.forEach(function (fn) {
      fn(data);
    });
  }
};

Connection.prototype.onConnect = function (fn) {
  if (this.destroyed) {
    throw new Error('当前Connection已销毁');
  }

  this._connectListeners.push(fn);

  if (this.connected) {
    fn();
  }
};

Connection.prototype.offConnect = function (fn) {
  this._connectListeners = this._connectListeners.filter(function (f) {
    return f != fn;
  });
};

Connection.prototype.onDisconnect = function (fn) {
  if (this.destroyed) {
    throw new Error('当前Connection已销毁');
  }

  this._disconnectListeners.push(fn);
};

Connection.prototype.offDisconnect = function (fn) {
  this._disconnectListeners = this._disconnectListeners.filter(function (f) {
    return f != fn;
  });
};

Connection.prototype.onMessage = function (fn) {
  if (this.destroyed) {
    throw new Error('当前Connection已销毁');
  }

  this._messageListeners.push(fn);
};

Connection.prototype.offMessage = function (fn) {
  this._messageListeners = this._messageListeners.filter(function (f) {
    return f != fn;
  });
};

Connection.prototype._onBeforeUnload = function () {
  log('beforeunload', this._noneStr);
  this.destroy();
};

Connection.prototype.disconnect = function () {
  clear(this._timeoutId, this._noneStr);
  this._timeoutId = null;

  if (this._source) {
    postMessage(this._source, {
      cicId: this._cicId,
      msgType: 'disconnect'
    });
    this.connected = false;
    this._connecting = false;
  }
};

Connection.prototype.destroy = function () {
  this.disconnect();
  this.destroyed = true;
  this._disconnectListeners.length = 0;
  this._connectListeners.length = 0;
  this._messageListeners.length = 0;
  this._cicId = null;
  this._source = null;
  this._timeoutId = null;
  removeMsgListener('message', this.__onMessage);
  removeMsgListener('beforeunload', this.__onBeforeUnload);
};

Connection.prototype.connect = function (domWindow) {
  var _this2 = this;

  log('----- duration = ' + (Date.now() - lastConnectTime), this._noneStr);

  if (!domWindow) {
    throw new Error('connect方法需要传入参数domWindow');
  }

  if (this.connected) {
    log2('---> 当前Connection对象已建立连接', this._noneStr);
    return;
  }

  if (this._connecting) {
    log2('---> 当前Connection对象正在建立连接中');
    return;
  }

  lastConnectTime = Date.now();

  if (domWindow.postMessage) {
    this._source = domWindow;
  } else if (domWindow.contentWindow.postMessage) {
    this._source = domWindow.contentWindow;
  }

  if (!this._source) {
    throw new Error('参数对象 domWindow 不可用，postMessage方法不存在');
  }

  this._cicId = 'cic_' + Date.now();
  this._connecting = true;
  log('发送ping命令', this._noneStr);
  postMessage(this._source, {
    cicId: this._cicId,
    msgType: 'ping'
  });
  clear(this._timeoutId, this._noneStr);
  this._timeoutId = window.setTimeout(function () {
    _newArrowCheck(this, _this2);

    log2('正在尝试建立连接, this._cicId = ', this._noneStr);
    this._connecting = false;
    this.connect(domWindow);
  }.bind(this), 2000);
  log("<<< created this._timeoutId = ".concat(this._timeoutId), this._noneStr);
};

Connection.prototype.sendMsg = function (data) {
  if (!this.connected) {
    throw new Error('连接尚未建立，请添加 onConnect 回调，确定建立连接后才可发送消息');
  }

  postMessage(this._source, {
    cicId: this._cicId,
    msgType: 'message',
    data: data
  });
};

module.exports = Connection;

/***/ })

/******/ });
});