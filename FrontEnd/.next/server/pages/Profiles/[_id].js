module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/hwr":
/***/ (function(module, exports) {



/***/ }),

/***/ "2jVJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "2lEd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NotifBell = () => {
  return __jsx("svg", {
    height: "30px",
    width: "30px",
    viewBox: "0 0 479.619 479.619",
    fill: "currentcolor"
  }, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M475.804,336.286c-0.5-2.7-1.1-5.5-2-8.2c-8.6-24-33.2-38.4-58.3-34.1c-8.3,1.3-16.1-4.4-17.4-12.7l-12.6-80.8    c-10.5-68.5-60-124.6-126.6-143.4c-6.1-37.1-41-62.2-78.1-56.2c-36.6,6-61.7,40.2-56.4,76.9c-57.4,36.3-87.8,103.3-77.1,170.5    l13.6,86.1c1.2,8.3-4.4,16.1-12.7,17.4c-25.2,3.6-44.2,24.8-45.1,50.3c-0.3,28.3,22.4,51.4,50.7,51.7c0.2,0,0.4,0,0.5,0    c2.7,0,5.3-0.2,8-0.6l52.5-8.3c18.3,32.6,59.5,44.3,92.2,26c17.2-9.7,29.4-26.3,33.3-45.7l192.9-30.4    C461.104,390.386,480.204,364.186,475.804,336.286z M173.704,445.486c-7.2,0-14.3-2.3-20.1-6.6l47.8-7.5    C195.004,440.286,184.704,445.486,173.704,445.486z M219.704,51.386c-6.4-0.2-12.7,0-19.1,0.5c-6.7,0.6-13.3,1.7-19.9,3.1    c-1.4,0.3-2.8,0.7-4.2,1c-5.4,1.3-10.6,2.7-15.8,4.5c-0.5,0.1-1.1,0.2-1.6,0.4c3.6-12.9,14.4-22.5,27.6-24.5    c1.8-0.3,3.6-0.4,5.4-0.4c11.4,0.1,22.1,5.8,28.4,15.4H219.704z"
  }))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/* harmony default export */ __webpack_exports__["a"] = (NotifBell);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4M2n");


/***/ }),

/***/ "4M2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__("tXcZ");

// EXTERNAL MODULE: ./components/header.js + 4 modules
var header = __webpack_require__("ZHh6");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./styles/ant-picker.scss
var ant_picker = __webpack_require__("fN3F");

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/storage"
var storage_ = __webpack_require__("ha8t");

// CONCATENATED MODULE: ./components/firebase.js


var config = {
  apiKey: "AIzaSyA1dd_WkmGmn0fWh4Kq8F_gKar84u5Jfsk",
  authDomain: "solutions-eaa28.firebaseapp.com",
  databaseURL: "https://solutions-eaa28.firebaseio.com",
  projectId: "solutions-eaa28",
  storageBucket: "solutions-eaa28.appspot.com",
  messagingSenderId: "481100749596",
  appId: "1:481100749596:web:d0bd4a96f04cae23cbb8d9",
  measurementId: "G-0EBZH85FED"
};

if (!app_default.a.apps.length) {
  app_default.a.initializeApp(config);
}

var storage = app_default.a.storage();

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");
var icons_default = /*#__PURE__*/__webpack_require__.n(icons_);

// CONCATENATED MODULE: ./components/Profile_Components/Svg/HomeSvg.js

var __jsx = external_react_default.a.createElement;

const HomeSvg = () => {
  return __jsx("svg", {
    height: "10pt",
    viewBox: "0 0 512 512",
    width: "10pt",
    fill: "currentcolor",
    focusable: "false"
  }, __jsx("path", {
    d: "m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"
  }));
};

/* harmony default export */ var Svg_HomeSvg = (HomeSvg);
// CONCATENATED MODULE: ./components/Profile_Components/Svg/AboutSvg.js

var AboutSvg_jsx = external_react_default.a.createElement;

const AboutSvg = () => {
  return AboutSvg_jsx("svg", {
    height: "10pt",
    viewBox: "0 0 512 512",
    width: "10pt",
    fill: "currentcolor",
    focusable: "false"
  }, AboutSvg_jsx("path", {
    d: "m453.332031 42.667969h-112v-5.335938c0-20.585937-16.746093-37.332031-37.332031-37.332031h-96c-20.585938 0-37.332031 16.746094-37.332031 37.332031v5.335938h-112c-32.363281 0-58.667969 26.300781-58.667969 58.664062v266.667969c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-266.667969c0-32.363281-26.304688-58.664062-58.667969-58.664062zm-154.644531 42.664062h-85.355469v-42.664062h85.335938zm-138.6875 64c29.398438 0 53.332031 23.9375 53.332031 53.335938 0 29.394531-23.933593 53.332031-53.332031 53.332031s-53.332031-23.9375-53.332031-53.332031c0-29.398438 23.933593-53.335938 53.332031-53.335938zm96 197.335938c0 8.832031-7.167969 16-16 16h-160c-8.832031 0-16-7.167969-16-16v-10.667969c0-32.363281 26.304688-58.667969 58.667969-58.667969h74.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969zm176 16h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.335938h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.332031h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
  }));
};

/* harmony default export */ var Svg_AboutSvg = (AboutSvg);
// CONCATENATED MODULE: ./components/Profile_Components/Svg/CalendarSvg.js

var CalendarSvg_jsx = external_react_default.a.createElement;

const CalendarSvg_CalendarIcon = () => {
  return CalendarSvg_jsx("svg", {
    height: "10pt",
    viewBox: "0 0 512 512",
    width: "10pt",
    fill: "currentcolor",
    focusable: "false"
  }, CalendarSvg_jsx("g", null, CalendarSvg_jsx("g", null, CalendarSvg_jsx("g", null, CalendarSvg_jsx("circle", {
    cx: "386",
    cy: "210",
    r: "20"
  }), CalendarSvg_jsx("path", {
    d: "M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20     c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312     c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120     c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91     v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20     c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z"
  }), CalendarSvg_jsx("path", {
    d: "M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472     c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z"
  }), CalendarSvg_jsx("path", {
    d: "M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29     c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z"
  }), CalendarSvg_jsx("circle", {
    cx: "299",
    cy: "210",
    r: "20"
  }), CalendarSvg_jsx("circle", {
    cx: "212",
    cy: "297",
    r: "20"
  }), CalendarSvg_jsx("circle", {
    cx: "125",
    cy: "210",
    r: "20"
  }), CalendarSvg_jsx("circle", {
    cx: "125",
    cy: "297",
    r: "20"
  }), CalendarSvg_jsx("circle", {
    cx: "125",
    cy: "384",
    r: "20"
  }), CalendarSvg_jsx("circle", {
    cx: "212",
    cy: "384",
    r: "20"
  }), CalendarSvg_jsx("circle", {
    cx: "212",
    cy: "210",
    r: "20"
  })))), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null), CalendarSvg_jsx("g", null));
};

/* harmony default export */ var CalendarSvg = (CalendarSvg_CalendarIcon);
// EXTERNAL MODULE: ./pages/Profiles/Sass/fullProfile.scss
var fullProfile = __webpack_require__("pEjj");

// EXTERNAL MODULE: ./styles/LikeButton.scss
var LikeButton = __webpack_require__("M27Y");

// CONCATENATED MODULE: ./components/LikeButton.js

var LikeButton_jsx = external_react_default.a.createElement;



const Likebutton = ({
  checkbox,
  handleLike
}) => {
  return LikeButton_jsx("div", {
    className: "likebutton"
  }, LikeButton_jsx("input", {
    type: "checkbox",
    className: "checkbox",
    id: "checkbox",
    checked: checkbox,
    onChange: handleLike
  }), LikeButton_jsx("label", {
    htmlFor: "checkbox"
  }, LikeButton_jsx("svg", {
    id: "heart-svg",
    viewBox: "467 392 58 57"
  }, LikeButton_jsx("g", {
    id: "Group",
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(467 392)"
  }, LikeButton_jsx("path", {
    d: "M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z",
    id: "heart",
    fill: "#AAB8C2"
  }), LikeButton_jsx("circle", {
    id: "main-circ",
    fill: "#E2264D",
    opacity: "0",
    cx: "29.5",
    cy: "29.5",
    r: "1.5"
  }), LikeButton_jsx("g", {
    id: "grp7",
    opacity: "0",
    transform: "translate(7 6)"
  }, LikeButton_jsx("circle", {
    id: "oval1",
    fill: "#9CD8C3",
    cx: "2",
    cy: "6",
    r: "2"
  }), LikeButton_jsx("circle", {
    id: "oval2",
    fill: "#8CE8C3",
    cx: "5",
    cy: "2",
    r: "2"
  })), LikeButton_jsx("g", {
    id: "grp6",
    opacity: "0",
    transform: "translate(0 28)"
  }, LikeButton_jsx("circle", {
    id: "oval1",
    fill: "#CC8EF5",
    cx: "2",
    cy: "7",
    r: "2"
  }), LikeButton_jsx("circle", {
    id: "oval2",
    fill: "#91D2FA",
    cx: "3",
    cy: "2",
    r: "2"
  })), LikeButton_jsx("g", {
    id: "grp3",
    opacity: "0",
    transform: "translate(52 28)"
  }, LikeButton_jsx("circle", {
    id: "oval2",
    fill: "#9CD8C3",
    cx: "2",
    cy: "7",
    r: "2"
  }), LikeButton_jsx("circle", {
    id: "oval1",
    fill: "#8CE8C3",
    cx: "4",
    cy: "2",
    r: "2"
  })), LikeButton_jsx("g", {
    id: "grp2",
    opacity: "0",
    transform: "translate(44 6)"
  }, LikeButton_jsx("circle", {
    id: "oval2",
    fill: "#CC8EF5",
    cx: "5",
    cy: "6",
    r: "2"
  }), LikeButton_jsx("circle", {
    id: "oval1",
    fill: "#CC8EF5",
    cx: "2",
    cy: "2",
    r: "2"
  })), LikeButton_jsx("g", {
    id: "grp5",
    opacity: "0",
    transform: "translate(14 50)"
  }, LikeButton_jsx("circle", {
    id: "oval1",
    fill: "#91D2FA",
    cx: "6",
    cy: "5",
    r: "2"
  }), LikeButton_jsx("circle", {
    id: "oval2",
    fill: "#91D2FA",
    cx: "2",
    cy: "2",
    r: "2"
  })), LikeButton_jsx("g", {
    id: "grp4",
    opacity: "0",
    transform: "translate(35 50)"
  }, LikeButton_jsx("circle", {
    id: "oval1",
    fill: "#F48EA7",
    cx: "6",
    cy: "5",
    r: "2"
  }), LikeButton_jsx("circle", {
    id: "oval2",
    fill: "#F48EA7",
    cx: "2",
    cy: "2",
    r: "2"
  })), LikeButton_jsx("g", {
    id: "grp1",
    opacity: "0",
    transform: "translate(24)"
  }, LikeButton_jsx("circle", {
    id: "oval1",
    fill: "#9FC7FA",
    cx: "2.5",
    cy: "3",
    r: "2"
  }), LikeButton_jsx("circle", {
    id: "oval2",
    fill: "#9FC7FA",
    cx: "7.5",
    cy: "2",
    r: "2"
  }))))));
};

/* harmony default export */ var components_LikeButton = (Likebutton);
// EXTERNAL MODULE: external "react-geocode"
var external_react_geocode_ = __webpack_require__("GNgB");
var external_react_geocode_default = /*#__PURE__*/__webpack_require__.n(external_react_geocode_);

// EXTERNAL MODULE: external "antd/lib/modal/Modal"
var Modal_ = __webpack_require__("mL3h");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: ./pages/Profiles/Sass/editbox.scss
var editbox = __webpack_require__("8i+9");

// EXTERNAL MODULE: ./styles/ImagePreview.scss
var ImagePreview = __webpack_require__("/hwr");

// CONCATENATED MODULE: ./components/ImagePreview.js

var ImagePreview_jsx = external_react_default.a.createElement;


const ImagePreview_ImagePreview = ({
  image,
  handleClick
}) => {
  return ImagePreview_jsx("div", {
    className: "ImagePreview"
  }, ImagePreview_jsx("svg", {
    viewBox: "0 0 24 24",
    height: "20px",
    width: "20px",
    className: "Close",
    onClick: handleClick
  }, ImagePreview_jsx("g", null, ImagePreview_jsx("path", {
    d: "M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
  }))), ImagePreview_jsx("div", {
    className: "imageContainer"
  }, ImagePreview_jsx("img", {
    src: image,
    alt: "preview",
    width: "100%"
  })));
};

/* harmony default export */ var components_ImagePreview = (ImagePreview_ImagePreview);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/Data/Fields.js
var Fields = __webpack_require__("yzYF");
var Fields_default = /*#__PURE__*/__webpack_require__.n(Fields);

// EXTERNAL MODULE: ./components/Data/Jobs.js
var Jobs = __webpack_require__("yegV");
var Jobs_default = /*#__PURE__*/__webpack_require__.n(Jobs);

// EXTERNAL MODULE: ./components/Data/Cities.js
var Cities = __webpack_require__("NfAz");
var Cities_default = /*#__PURE__*/__webpack_require__.n(Cities);

// CONCATENATED MODULE: ./components/Profile_Components/Components/EditBox.jsx

var EditBox_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import '../../../../styles/AutoComplete.scss';




 //  --------------

const EditBox = ({
  data,
  setData,
  DiplomeList,
  setDiplomeList,
  setfire
}) => {
  // States --------------------------------------------------------
  const Moments = [];

  if (data.horraire !== undefined) {
    Moments.push(external_moment_default()(data.horraire[0], 'HH:mm'), external_moment_default()(data.horraire[1], 'HH:mm'));
  }

  const {
    RangePicker
  } = external_antd_["TimePicker"];
  const {
    Option
  } = external_antd_["Select"];
  const {
    0: time,
    1: setTime
  } = Object(external_react_["useState"])(Moments);
  const Languages = ["Arabe", "Francais", "Anglais", "Spanish"];
  const lang = [];
  const children = [];
  const {
    0: changed,
    1: setchanged
  } = Object(external_react_["useState"])(false);
  const {
    0: file,
    1: setFile
  } = Object(external_react_["useState"])(data.Usrimg);
  const {
    0: visible,
    1: setvisible
  } = Object(external_react_["useState"])(false); // Mappers -------------------------------------------------------

  Languages.map(Field => {
    lang.push(EditBox_jsx(Option, {
      key: Field
    }, Field));
  });
  Fields_default.a.map(Field => {
    children.push(EditBox_jsx(Option, {
      key: Field
    }, Field));
  }); // Handlers --------------------------------------------------------

  const handleImageChange = e => {
    setchanged(true);

    if (e.target.files[0] !== undefined) {
      try {
        setfire(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        setFile(url);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  }; // ------------------------------------------------
  // When click on delete picture 


  const handleClick = () => {
    URL.revokeObjectURL(file);
    setFile(data.Usrimg);
    setchanged(false);
  }; // When diplome change value --------------------------
  // ---------------


  const dipChange = (e, index) => {
    const {
      name,
      value
    } = e.target;
    const list = [...DiplomeList];
    list[index][name] = value;
    setDiplomeList(list);
  }; // WHen add a diplomaa --------------------------------


  const handleAddClick = () => {
    setDiplomeList([...DiplomeList, {
      diplomeName: "",
      desc: ""
    }]);
  }; // handle click event of the Remove button


  const handleRemoveClick = index => {
    const list = [...DiplomeList];
    list.splice(index, 1);
    setDiplomeList(list);
  }; // Languages on change handler ----------------------------


  const handleLang = value => {
    const string = value;
    setData(_objectSpread(_objectSpread({}, data), {}, {
      languages: string
    }));
  }; // Domaine handler ----------------------------------------


  const handleTag = value => {
    const string = value;
    setData(_objectSpread(_objectSpread({}, data), {}, {
      domaine: string
    }));
  }; // When chage of time handler --------------------------------


  const handleTime = (time, timestring) => {
    const string = timestring;
    setData(_objectSpread(_objectSpread({}, data), {}, {
      horraire: string
    }));
    setTime(time);
  }; // Handler when input value change 


  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setData(_objectSpread(_objectSpread({}, data), {}, {
      [name]: value
    }));
  };

  return EditBox_jsx("div", {
    className: "EditBox"
  }, EditBox_jsx("div", {
    className: "ProfileImg"
  }, EditBox_jsx("img", {
    className: "img",
    src: file,
    onClick: () => setvisible(true)
  }), EditBox_jsx("br", null), EditBox_jsx("div", null, EditBox_jsx("label", {
    className: "custom-file-upload"
  }, EditBox_jsx("input", {
    type: "file",
    id: "img",
    name: "img",
    placeholder: "Choisissez photo",
    accept: "image/*",
    onChange: handleImageChange
  }), EditBox_jsx("i", {
    className: "fa fa-upload",
    "aria-hidden": "true"
  }), "   Ajouter photo"), changed && EditBox_jsx("label", {
    className: "Showmodal",
    onClick: handleClick
  }, EditBox_jsx("i", {
    className: "fa fa-user-times",
    style: {
      color: '#be0000'
    }
  }))), visible && EditBox_jsx(components_ImagePreview, {
    image: file,
    handleClick: () => setvisible(false)
  })), EditBox_jsx("div", {
    className: "multipleInput"
  }, EditBox_jsx("input", {
    className: "input controlled user",
    type: "text",
    placeholder: "Nom",
    name: "nom",
    value: data.nom,
    onChange: handleChange
  }), EditBox_jsx("input", {
    className: "input controlled user",
    type: "text",
    placeholder: "Prenom",
    name: "prenom",
    value: data.prenom,
    onChange: handleChange
  })), data.type === "Société" && EditBox_jsx(external_react_default.a.Fragment, null, EditBox_jsx("div", {
    className: "multipleInput"
  }, EditBox_jsx("select", {
    className: "title",
    name: "title",
    value: data.title,
    onChange: handleChange,
    required: true
  }, Jobs_default.a.map(job => EditBox_jsx("option", {
    value: job,
    key: job
  }, job))), EditBox_jsx("input", {
    className: "input",
    type: "text",
    placeholder: "Nom de soci\xE9t\xE9",
    name: "companyname",
    value: data.companyname,
    onChange: handleChange
  })), EditBox_jsx(external_antd_["Select"], {
    mode: "tags",
    style: {
      width: '100%',
      marginTop: '20px'
    },
    placeholder: "Votre domaine ",
    maxTagCount: 3,
    onChange: handleTag,
    value: data.domaine
  }, children), EditBox_jsx("label", {
    style: {
      color: '#318CE7',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "L'horraire de votre soci\xE9t\xE9 : "), EditBox_jsx(RangePicker, {
    bordered: false,
    format: "HH:mm",
    minuteStep: 30,
    value: time,
    onChange: handleTime
  }), EditBox_jsx("br", null), EditBox_jsx("br", null)), EditBox_jsx("div", {
    className: "multipleInput",
    placeholder: "Titre",
    style: {
      marginBottom: '10px'
    }
  }, EditBox_jsx("select", {
    className: "title",
    name: "city"
  }, Cities_default.a.map(citie => EditBox_jsx("option", {
    value: citie,
    key: citie
  }, citie))), EditBox_jsx("input", {
    className: "input",
    type: "text",
    placeholder: "Addresse",
    name: "addresse",
    value: data.addresse,
    onChange: handleChange
  })), EditBox_jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Presentation"), EditBox_jsx("br", null), EditBox_jsx("textarea", {
    className: "textArea",
    name: "presentation",
    placeholder: data.type !== "Société" ? "Parlez-nous de vous (optionnel)" : "Décrivez votre entreprise",
    rows: "4",
    value: data.presentation,
    onChange: handleChange
  }), EditBox_jsx("br", null), EditBox_jsx("br", null), EditBox_jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Langues parl\xE9s"), EditBox_jsx(external_antd_["Select"], {
    mode: "tags",
    style: {
      width: '100%',
      borderRadius: '10px',
      marginTop: '5px',
      backgroundColor: '#e9f1fa'
    },
    placeholder: "Ex: Francais , arabe ...",
    onChange: handleLang,
    value: data.languages,
    maxTagCount: 3
  }, lang), EditBox_jsx("br", null), EditBox_jsx("br", null), EditBox_jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Dipl\xF4me et formations"), EditBox_jsx("div", {
    className: "Diplomes"
  }, DiplomeList.map((element, index) => EditBox_jsx("div", {
    className: "container",
    key: index
  }, EditBox_jsx("input", {
    className: "input diplome",
    type: "text",
    name: "diplomeName",
    placeholder: "Votre Diplome",
    value: element.diplomeName,
    onChange: e => dipChange(e, index)
  }), EditBox_jsx("input", {
    className: index !== 0 ? "input desc2" : "input desc",
    type: "text",
    name: "desc",
    placeholder: "Br\xE8ve description",
    value: element.desc,
    onChange: e => dipChange(e, index)
  }), index !== 0 && EditBox_jsx("label", {
    className: "delete",
    onClick: () => handleRemoveClick(index)
  }, EditBox_jsx("i", {
    class: "fa fa-trash",
    "aria-hidden": "true",
    style: {
      color: '#be0000'
    }
  })))), EditBox_jsx("div", {
    className: "container "
  }, EditBox_jsx("button", {
    onClick: handleAddClick,
    className: "ajouter"
  }, "Ajouter"))));
};

/* harmony default export */ var Components_EditBox = (EditBox);
// EXTERNAL MODULE: ./pages/Profiles/Sass/calendar.scss
var calendar = __webpack_require__("87xa");

// CONCATENATED MODULE: ./components/Profile_Components/Components/BookMeeting.jsx

var BookMeeting_jsx = external_react_default.a.createElement;

function BookMeeting_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BookMeeting_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BookMeeting_ownKeys(Object(source), true).forEach(function (key) { BookMeeting_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BookMeeting_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BookMeeting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const BusyComponent = ({
  day,
  hour,
  setTitle,
  setvisible
}) => {
  const DateDivider = (string, hour) => {
    const date = new Date(string);
    const dateNow = new Date();
    const moment1 = external_moment_default()(date);

    if (date.getDay() === 0) {
      return 1;
    }

    if (moment1.isSame(dateNow, 'year') && moment1.isSame(dateNow, 'day') && moment1.isSame(dateNow, 'month')) {
      const Hourdiff = dateNow.getHours() - parseInt(hour.split(":")[0]);
      return Hourdiff;
    }

    if (moment1.isBefore(dateNow)) {
      return 1;
    }

    return -1;
  };

  const res = DateDivider(day, hour);
  return BookMeeting_jsx(external_react_default.a.Fragment, null, res >= 0 ? BookMeeting_jsx("div", {
    className: "Busy",
    title: "Date indisponible"
  }) : BookMeeting_jsx("div", {
    onClick: setTitle === false ? null : () => {
      setTitle(hour + " | " + day);
      setvisible(true);
    },
    className: setTitle === false ? "FreeProfile" : "Free"
  }));
};

const Scheduler = (StartHour, endtHour, length) => {
  const results = [];

  for (let i = 0; i <= parseInt(length); i++) {
    const string = StartHour.format('HH:mm') + "-" + StartHour.add(30, 'minutes').format('HH:mm'); // Break betweeen meetings

    results.push(string);

    if (Math.abs(external_moment_default.a.duration(StartHour.diff(endtHour)).asMinutes()) <= 30) {
      break;
    }

    StartHour.add(15, 'minutes');
  }

  return results;
};

const DatePicker = string => {
  const day = new Date(string);
  const Days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const Months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  const DisplayString = [Days[day.getDay()], day.getDate(), Months[day.getMonth()]];
  return DisplayString;
};

const Checker = (profile, hour, day) => {
  const element = profile.Notification.filter(el => el.day == day && el.horraire == hour);

  if (element[0] !== undefined) {
    return element[0].AcceptStatus;
  } else {
    return '';
  }
};

const BookMeeting_calendar = ({
  profile,
  loc
}) => {
  //Data from database 
  const Horraire = profile.horraire;
  var Booked = profile.booked !== undefined ? profile.booked : {}; // Horraires ----------------------

  const StartHour = external_moment_default()(Horraire[0], "HH:mm");
  const endtHour = external_moment_default()(Horraire[1], "HH:mm");
  const length = (endtHour.format("HH") - StartHour.format("HH")) * 60 / 45;
  const results = Scheduler(StartHour, endtHour, length); // States -------------------

  const {
    0: BookedDisplay,
    1: setDisplay
  } = Object(external_react_["useState"])(Booked !== {} ? Booked : {
    "": ""
  });
  const {
    0: visible,
    1: setvisible
  } = Object(external_react_["useState"])(false);
  const {
    0: bookedVisible,
    1: setbookedVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])();
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])("");
  const {
    0: loading,
    1: setloading
  } = Object(external_react_["useState"])(false);
  const {
    0: week,
    1: setWeek
  } = Object(external_react_["useState"])(0); // Days ---------------------------

  const datePusher = new Date();
  const dayResult = [external_moment_default()(Date.now()).add(7 * week, 'days').format('YYYY/MM/DD')];
  datePusher.setDate(datePusher.getDate() + week * 7);

  for (let i = 0; i < 6; i++) {
    datePusher.setDate(datePusher.getDate() + 1);
    dayResult.push(external_moment_default()(datePusher).format('YYYY/MM/DD'));
  } // -------------------------------------
  // Handlers ---------------------------------


  const handleSave = async () => {
    if (Booked[title.split(" | ")[1]] !== undefined) {
      Booked[title.split(" | ")[1]].push(title.split(" | ")[0]);
    } else {
      const key = [title.split(" | ")[1]];
      const value = title.split(" | ")[0];
      Booked === {
        "": ""
      } ? Booked = {
        [key[0]]: [value]
      } : Booked = BookMeeting_objectSpread(BookMeeting_objectSpread({}, Booked), {}, {
        [key[0]]: [value]
      });
    }

    setloading(true);
    const Data = {
      booked: Booked,
      Notification: {
        Type: "Request",
        Message: message,
        horraire: title.split(" | ")[0],
        day: title.split(" | ")[1]
      }
    };
    external_axios_default.a.post('/api/profiles/bookmeeting?userid=' + profile._id, Data, {
      withCredentials: true
    }).then(data => {
      setDisplay(Booked);
      external_antd_["notification"]['success']({
        message: 'Votre demande a été envoyée avec succès',
        description: 'Nous vous informerons lorsque nous aurons une réponse'
      });
      setTimeout(() => {
        setloading(false);
        setvisible(false);
        window.location.reload();
      }, 2000);
    }).catch(err => console.log(err));
  };

  const activeDay = day => {
    if (external_moment_default()(day).diff(external_moment_default()(Date.now()), 'hours') > -24 && external_moment_default()(day).diff(external_moment_default()(Date.now()), 'hours') <= 0) {
      return true;
    } else {
      return false;
    }
  }; // -----------------------------------


  return BookMeeting_jsx(external_react_default.a.Fragment, null, BookMeeting_jsx("div", {
    className: "CalendarControllers"
  }, BookMeeting_jsx("button", {
    className: "today",
    onClick: () => setWeek(0)
  }, "Aujourd'hui"), BookMeeting_jsx("div", {
    className: "weeks"
  }, BookMeeting_jsx("button", {
    className: "nextW",
    onClick: () => setWeek(week - 1)
  }, "Semaine pr\xE9c\xE9dente"), BookMeeting_jsx("button", {
    className: "prevW",
    onClick: () => setWeek(week + 1)
  }, "Prochaine semaine"))), BookMeeting_jsx("table", {
    id: "calendar"
  }, BookMeeting_jsx(Modal_default.a, {
    title: title,
    visible: visible,
    width: "50vw",
    onCancel: () => setvisible(false),
    bodyStyle: {
      height: '100%'
    },
    footer: [BookMeeting_jsx(external_antd_["Button"], {
      disabled: false,
      key: "submit",
      type: "primary",
      loading: loading,
      style: {
        borderRadius: '10px',
        fontFamily: 'GlacialBold'
      },
      onClick: handleSave
    }, "Envoyer")]
  }, BookMeeting_jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Message"), BookMeeting_jsx("br", null), BookMeeting_jsx("textarea", {
    className: "textArea",
    placeholder: "D\xE9crivez votre objectif de la r\xE9union",
    rows: "4",
    value: message,
    onChange: e => setMessage(e.target.value)
  }), BookMeeting_jsx("br", null), BookMeeting_jsx("br", null)), BookMeeting_jsx("thead", null, BookMeeting_jsx("tr", null, BookMeeting_jsx("th", null), dayResult.map(day => BookMeeting_jsx("th", {
    key: day + Date.now(),
    style: activeDay(day) ? {
      color: '#1a73e8',
      textAlign: "center"
    } : {
      textAlign: "center"
    }
  }, DatePicker(day)[0], " ", BookMeeting_jsx("br", null), " ", DatePicker(day)[1], " ", DatePicker(day)[2], " ")))), BookMeeting_jsx("tbody", null, loc === "public" && BookMeeting_jsx(external_react_default.a.Fragment, null, results.map(hour => BookMeeting_jsx("tr", {
    key: hour + Date.now()
  }, BookMeeting_jsx("th", null, hour), dayResult.map(day => BookMeeting_jsx("td", {
    key: day + hour
  }, BookedDisplay[day] !== undefined && (BookedDisplay[day].includes(hour) ? Checker(profile, hour, day) === true ? BookMeeting_jsx("div", {
    className: "Booked"
  }, "R\xE9serv\xE9e") : Checker(profile, hour, day) === false ? BookMeeting_jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: setTitle,
    setvisible: setvisible
  }) : BookMeeting_jsx("div", {
    className: "Pending"
  }, "En attente") : BookMeeting_jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: setTitle,
    setvisible: setvisible
  })), BookedDisplay[day] === undefined && BookMeeting_jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: setTitle,
    setvisible: setvisible
  })))))), loc === "profile" && BookMeeting_jsx(external_react_default.a.Fragment, null, results.map(hour => BookMeeting_jsx("tr", {
    key: hour + Date.now()
  }, BookMeeting_jsx("th", null, hour), dayResult.map(day => BookMeeting_jsx("td", {
    key: day + hour
  }, BookedDisplay[day] !== undefined && (BookedDisplay[day].includes(hour) ? Checker(profile, hour, day) === true ? BookMeeting_jsx("div", {
    className: "Booked"
  }, "R\xE9serv\xE9e") : Checker(profile, hour, day) === false ? BookMeeting_jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: false,
    setvisible: false
  }) : BookMeeting_jsx("div", {
    className: "Pending"
  }, "En attente") : BookMeeting_jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: false,
    setvisible: false
  })), BookedDisplay[day] === undefined && BookMeeting_jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: false,
    setvisible: false
  })))))))));
};

/* harmony default export */ var BookMeeting = (BookMeeting_calendar);
// CONCATENATED MODULE: ./components/Profile_Components/Components/NavAcceuil.jsx

var NavAcceuil_jsx = external_react_default.a.createElement;

const NavAcceuil = ({
  date,
  profile
}) => {
  return NavAcceuil_jsx(external_react_default.a.Fragment, null, NavAcceuil_jsx("div", {
    className: "presentation"
  }, profile.type == "Société" && NavAcceuil_jsx("h2", null, "Presentation de l'entreprise"), profile.type == "Client" && NavAcceuil_jsx("h2", null, "Presentation du client"), NavAcceuil_jsx("p", null, profile.presentation === "" || profile.presentation === undefined ? "Cet utilisateur n'a pas fournie de données pour l'instant" : profile.presentation)), profile.type == "Société" && NavAcceuil_jsx("div", {
    className: "Horraire"
  }, NavAcceuil_jsx("h2", null, "Horraire"), NavAcceuil_jsx("div", {
    className: "TimeTable"
  }, NavAcceuil_jsx("div", {
    className: "Block"
  }, NavAcceuil_jsx("ul", null, NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""
  }, "Lundi"), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""
  }, "Mardi"), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""
  }, "Mercredi")), NavAcceuil_jsx("ul", null, NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]))), NavAcceuil_jsx("div", {
    className: "Block"
  }, NavAcceuil_jsx("ul", null, NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""
  }, "Jeudi"), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""
  }, "Vendredi"), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""
  }, "Samedi")), NavAcceuil_jsx("ul", null, NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), NavAcceuil_jsx("li", {
    className: date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]))))));
};

/* harmony default export */ var Components_NavAcceuil = (NavAcceuil);
// EXTERNAL MODULE: external "google-map-react"
var external_google_map_react_ = __webpack_require__("E/xK");
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_);

// EXTERNAL MODULE: ./pages/Profiles/Sass/map.scss
var map = __webpack_require__("Ebmi");

// CONCATENATED MODULE: ./components/Profile_Components/map/Map.js
var Map_jsx = external_react_default.a.createElement;




const Marker = props => {
  const {
    color,
    name,
    id
  } = props;
  return Map_jsx("div", null, Map_jsx("div", {
    className: "pin bounce",
    style: {
      backgroundColor: color,
      cursor: 'pointer'
    },
    title: name
  }), Map_jsx("div", {
    className: "pulse"
  }));
};

const Map = ({
  location,
  zoomLevel
}) => Map_jsx("div", {
  className: "map"
}, Map_jsx("div", {
  className: "google-map"
}, Map_jsx(external_google_map_react_default.a, {
  bootstrapURLKeys: {
    key: 'AIzaSyAjWexTkBOKquA-gxnB_TtqCO1mkX8i97c'
  },
  defaultCenter: location,
  defaultZoom: zoomLevel
}, Map_jsx(Marker, {
  lat: location.lat,
  lng: location.lng,
  name: location.address,
  color: "#2E9AFF"
}))));

/* harmony default export */ var map_Map = (Map);
// CONCATENATED MODULE: ./components/Profile_Components/Components/NavPropos.jsx

var NavPropos_jsx = external_react_default.a.createElement;


const NavPropos = ({
  profile,
  location
}) => {
  return NavPropos_jsx(external_react_default.a.Fragment, null, NavPropos_jsx("div", null, NavPropos_jsx("h2", null, "Information supplementaires"), NavPropos_jsx("div", {
    className: "InfoSupp"
  }, NavPropos_jsx("div", {
    className: "Block"
  }, profile.type === "Société" && NavPropos_jsx(external_react_default.a.Fragment, null, NavPropos_jsx("ul", null, NavPropos_jsx("li", {
    className: "title"
  }, "Domaine De travail : "), NavPropos_jsx("li", {
    className: "element"
  }, profile.domaine.map(el => '∙ ' + el + '\n'))), NavPropos_jsx("ul", null, NavPropos_jsx("li", {
    className: "title"
  }, "t\xE9l\xE9phone fixe : "), NavPropos_jsx("li", {
    className: "element"
  }, profile.fixphone))), NavPropos_jsx("ul", null, NavPropos_jsx("li", {
    className: "title"
  }, "t\xE9l\xE9phone portable : "), NavPropos_jsx("li", {
    className: "element"
  }, profile.mobilephone)), NavPropos_jsx("ul", null, NavPropos_jsx("li", {
    className: "title"
  }, "Langues parl\xE9s : "), NavPropos_jsx("li", {
    className: "element",
    style: {
      whiteSpace: 'pre'
    }
  }, profile.languages.map(el => '∙ ' + el + '\n'))), NavPropos_jsx("ul", null, NavPropos_jsx("li", {
    className: "title",
    style: {
      color: "#2e9aff"
    }
  }, "Diplomes")), NavPropos_jsx("hr", {
    style: {
      border: '1px solid rgb(240, 240, 240)'
    }
  }), profile.diplome.map(dom => NavPropos_jsx("ul", {
    key: Date.now() + dom.desc
  }, NavPropos_jsx("li", {
    className: "title",
    style: {
      color: '#969696'
    }
  }, dom.diplomeName), NavPropos_jsx("li", {
    className: "element"
  }, dom.desc))), NavPropos_jsx("hr", {
    style: {
      border: '1px solid rgb(240, 240, 240)'
    }
  }), NavPropos_jsx("ul", null, NavPropos_jsx("li", {
    className: "title"
  }, profile.type === "Société" ? " Siège social :" : "Addresse du client :"), NavPropos_jsx("li", {
    className: "element"
  }, profile.addresse))))), NavPropos_jsx("div", null, NavPropos_jsx("h2", null, "Localisation"), NavPropos_jsx("div", {
    className: "MapContainer"
  }, NavPropos_jsx(map_Map, {
    location: location,
    zoomLevel: 17
  }))));
};

/* harmony default export */ var Components_NavPropos = (NavPropos);
// CONCATENATED MODULE: ./components/Profile_Components/Components/ProgressBar.jsx

var ProgressBar_jsx = external_react_default.a.createElement;


const ProgressBar = ({
  percentage
}) => {
  return ProgressBar_jsx("div", {
    style: {
      marginBottom: '10%',
      marginTop: '10%',
      textAlign: 'center'
    }
  }, ProgressBar_jsx(external_antd_["Progress"], {
    type: "circle",
    strokeColor: {
      '0%': '#00308F',
      '100%': '#7CB9E8'
    },
    percent: percentage
  }), ProgressBar_jsx("h1", null, "Veuillez patienter ... "), ProgressBar_jsx("p", null, "Nous mettons \xE0 jour votre profil"));
};

/* harmony default export */ var Components_ProgressBar = (ProgressBar);
// CONCATENATED MODULE: ./components/Profile_Components/Svg/BookMetting.js

var BookMetting_jsx = external_react_default.a.createElement;

const BookMetting = () => {
  return BookMetting_jsx("svg", {
    height: "15pt",
    viewBox: "0 0 512 512",
    width: "15pt",
    fill: "currentcolor",
    focusable: "false"
  }, BookMetting_jsx("g", null, BookMetting_jsx("g", null, BookMetting_jsx("path", {
    d: "M255.501,0.499c-81.448,0-147.711,66.264-147.711,147.711c0,50.449,25.429,95.065,64.137,121.724    c-36.139,12.471-69.263,33.071-97.091,60.899C26.577,379.093,0,443.254,0,511.501h39.922    c0-118.871,96.708-215.579,215.579-215.579c81.448,0,147.711-66.264,147.711-147.712S336.949,0.499,255.501,0.499z M255.501,256    c-59.435,0-107.789-48.354-107.789-107.789S196.066,40.421,255.501,40.421S363.29,88.775,363.29,148.211S314.936,256,255.501,256z    "
  }))), BookMetting_jsx("g", null, BookMetting_jsx("g", null, BookMetting_jsx("polygon", {
    points: "428.164,387.743 428.164,303.906 388.242,303.906 388.242,387.743 304.405,387.743 304.405,427.665     388.242,427.665 388.242,511.501 428.164,511.501 428.164,427.665 512,427.665 512,387.743   "
  }))), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null), BookMetting_jsx("g", null));
};

/* harmony default export */ var Svg_BookMetting = (BookMetting);
// CONCATENATED MODULE: ./components/Profile_Components/Svg/EditSvg.js

var EditSvg_jsx = external_react_default.a.createElement;

const EditSvg = () => {
  return EditSvg_jsx("svg", {
    height: "18px",
    viewBox: "0 0 512 512",
    width: "18px",
    fill: "currentcolor",
    focusable: "false"
  }, EditSvg_jsx("g", null, EditSvg_jsx("g", null, EditSvg_jsx("polygon", {
    points: "51.2,353.28 0,512 158.72,460.8   "
  }))), EditSvg_jsx("g", null, EditSvg_jsx("g", null, EditSvg_jsx("rect", {
    x: "89.73",
    y: "169.097",
    transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -95.8575 260.3719)",
    width: "353.277",
    height: "153.599"
  }))), EditSvg_jsx("g", null, EditSvg_jsx("g", null, EditSvg_jsx("path", {
    d: "M504.32,79.36L432.64,7.68c-10.24-10.24-25.6-10.24-35.84,0l-23.04,23.04l107.52,107.52l23.04-23.04    C514.56,104.96,514.56,89.6,504.32,79.36z"
  }))), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null), EditSvg_jsx("g", null));
};

/* harmony default export */ var Svg_EditSvg = (EditSvg);
// CONCATENATED MODULE: ./components/Profile_Components/Components/ProfileHead.jsx

var ProfileHead_jsx = external_react_default.a.createElement;



const ProfileHead = ({
  profile,
  handleEdit,
  setbook,
  userid
}) => {
  return ProfileHead_jsx("div", {
    className: "ProfileHead"
  }, ProfileHead_jsx("div", {
    className: "ProfileImg"
  }, ProfileHead_jsx("img", {
    src: profile.Usrimg
  })), ProfileHead_jsx("div", {
    className: "ProfileInfo"
  }, ProfileHead_jsx("h3", null, profile.companyname === "" || profile.companyname == undefined ? profile.nom + " " + profile.prenom : profile.companyname), profile.type === "Société" && ProfileHead_jsx("p", null, ProfileHead_jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    style: {
      marginRight: '10px'
    }
  }), ProfileHead_jsx("span", null, profile.nom, " ", profile.prenom), " | ", ProfileHead_jsx("span", null, profile.title)), profile.type === "Client" && ProfileHead_jsx("p", null, ProfileHead_jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    style: {
      marginRight: '10px'
    }
  }), ProfileHead_jsx("span", null, "Client")), profile.type === "Société" && ProfileHead_jsx("span", {
    className: "Likes"
  }, ProfileHead_jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true",
    style: {
      marginRight: '5px'
    }
  }), " ", profile.stars.length, " J'aime")), userid !== profile._id && profile.type === "Société" && ProfileHead_jsx("div", {
    className: "BookMetting",
    onClick: () => setbook(true)
  }, ProfileHead_jsx(Svg_BookMetting, null), ProfileHead_jsx("span", null, "R\xE9server une r\xE9union")), userid === profile._id && ProfileHead_jsx("div", {
    className: "EditProfile",
    onClick: handleEdit
  }, ProfileHead_jsx(Svg_EditSvg, null), ProfileHead_jsx("span", null, "Editer profile")));
};

/* harmony default export */ var Components_ProfileHead = (ProfileHead);
// CONCATENATED MODULE: ./components/Profile_Components/publicProfile.js

var publicProfile_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Dependencies ------------------------




 // Components -------------------------















 // -------------------------------------

function isEmpty(obj, type) {
  if (type === "Société") {
    for (const [key, value] of Object.entries(obj)) {
      if (value == "" || value == []) {
        if (key !== "booked") {}
      }
    }
  }

  if (obj["addresse"] === "") {
    return true;
  }

  return false;
} // ----------------------------


const ProfileBody = ({
  profile,
  userid
}) => {
  // States ---------------------------------------
  const name = profile.companyname === "" || profile.companyname == undefined ? profile.nom + " " + profile.prenom : profile.companyname;
  const {
    0: imageLoading,
    1: setloadimage
  } = Object(external_react_["useState"])(false);
  const {
    0: current,
    1: setCurrent
  } = Object(external_react_["useState"])('Acceuil');
  const {
    0: checkbox,
    1: setCheck
  } = Object(external_react_["useState"])(profile.stars.includes(userid));
  const {
    0: bookmetting,
    1: setbook
  } = Object(external_react_["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])(profile);
  const {
    0: location,
    1: setLocation
  } = Object(external_react_["useState"])({});
  const {
    0: filefirebase,
    1: setfire
  } = Object(external_react_["useState"])(null);
  const {
    0: percentage,
    1: setPrecentage
  } = Object(external_react_["useState"])(0);
  const {
    0: visible,
    1: setvisible
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setloading
  } = Object(external_react_["useState"])(false);
  const {
    0: DiplomeList,
    1: setDiplomeList
  } = Object(external_react_["useState"])(profile.diplome);
  const date = new Date(); // Icons -----------------------------------------

  const HomeIcon = props => publicProfile_jsx(icons_default.a, _extends({
    component: Svg_HomeSvg
  }, props));

  const AboutIcon = props => publicProfile_jsx(icons_default.a, _extends({
    component: Svg_AboutSvg
  }, props));

  const CalendarIcon = props => publicProfile_jsx(icons_default.a, _extends({
    component: CalendarSvg
  }, props));

  Object(external_react_["useEffect"])(() => {
    const adr = profile.addresse + " , " + profile.city;
    external_react_geocode_default.a.setApiKey("AIzaSyChI3vJkg_P6JFZKVg9at3FtUZjxxI2lP8");
    external_react_geocode_default.a.fromAddress(adr).then(response => {
      const {
        lat,
        lng
      } = response.results[0].geometry.location;
      const loc = {
        address: profile.addresse,
        lat: lat,
        lng: lng
      };
      setLocation(loc);
    }, error => {
      console.error(error);
    });
  }, []); // Firebase url upload function 

  const firebaseUrl = file => {
    return new Promise((resolve, reject) => {
      let currentImageName = "firebase-image-" + Date.now();
      let uploadImage = storage.ref(`images/${currentImageName}`).put(file);
      uploadImage.on('state_changed', snapshot => {
        var per = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        setPrecentage(per);
      }, error => {
        reject(error);
      }, () => {
        storage.ref('images').child(currentImageName).getDownloadURL().then(url => {
          const imageData = [url, currentImageName];
          resolve(imageData);
        });
      });
    });
  }; // Handlers -------------------------------------


  const handleLike = async () => {
    var stars = profile.stars;

    if (!checkbox) {
      await stars.push(userid);
    } else {
      await stars.splice(stars.indexOf(userid), 1);
    }

    setCheck(!checkbox);
    const Url = '/api/profiles/like?userid=' + profile._id;
    external_axios_default.a.post(Url, {
      "stars": stars
    }, {
      withCredentials: true
    }).then(res => {}).catch(err => console.log(err));
  };

  const handleClick = e => {
    setCurrent(e.key);
  };

  const handleBack = () => {
    window.location.assign(`/Search?companyname=${profile.companyname}&domaine=&city=&page=1`);
  };

  const handleEdit = () => {
    setvisible(true);
  };

  const handleSave = async () => {
    let OldData = data;
    OldData["diplome"] = DiplomeList;
    setData(OldData);

    if (isEmpty(data, profile.type)) {
      external_antd_["message"].error("Un ou plusieurs champs sont vides");
    } else {
      setloading(true);

      if (filefirebase !== null) {
        setloadimage(true);
        const imgData = await firebaseUrl(filefirebase);
        setData(data.Usrimg = imgData[0]);
      }

      const url = "/api/profiles/update?userid=" + userid;
      external_axios_default.a.post(url, data, {
        withCredentials: true
      }).then(response => {
        if (response.status === 200) {
          setloading(false);
          setvisible(false);
          external_antd_["message"].success("Mise à jour réussie");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          external_antd_["message"].error("Une erreur s'est produite, veuillez réessayer plus tard");
        }
      }).catch(err => {
        external_antd_["message"].error("Une erreur s'est produite, veuillez réessayer plus tard");
        console.log(err);
      });
    }
  }; // ----------------------- Returner ----------------------------------------


  return publicProfile_jsx("div", {
    className: "Profile"
  }, publicProfile_jsx(head["a" /* default */], {
    title: name + " | 6Solutions"
  }), publicProfile_jsx("div", {
    className: "ButtonContainer",
    onClick: handleBack
  }, publicProfile_jsx("i", {
    className: "fa fa-arrow-left icon"
  }), publicProfile_jsx("span", {
    className: "backButton"
  }, "Retour")), publicProfile_jsx(Components_ProfileHead, {
    profile: profile,
    handleEdit: handleEdit,
    setbook: setbook,
    userid: userid
  }), publicProfile_jsx("div", {
    className: "ProfileBody"
  }, publicProfile_jsx(Modal_default.a, {
    style: {
      top: '9%'
    },
    title: "Selectionnez la cellule correspondante a votre r\xE9union",
    visible: bookmetting,
    width: "90%",
    bodyStyle: {
      height: '70vh',
      overflowY: 'scroll'
    },
    onCancel: () => setbook(false),
    footer: null
  }, publicProfile_jsx(BookMeeting, {
    profile: profile,
    loc: "public"
  })), publicProfile_jsx(Modal_default.a, {
    title: "Editez votre profile",
    className: "EditModal",
    visible: visible,
    bodyStyle: {
      height: '50vh',
      overflowY: 'scroll'
    },
    onCancel: () => setvisible(false),
    footer: [publicProfile_jsx(external_antd_["Button"], {
      disabled: false,
      key: "submit",
      type: "primary",
      loading: loading,
      style: {
        borderRadius: '10px',
        fontFamily: 'GlacialBold'
      },
      onClick: handleSave
    }, "Termin\xE9 !")]
  }, !imageLoading && publicProfile_jsx(Components_EditBox, {
    data: data,
    setData: setData,
    setDiplomeList: setDiplomeList,
    DiplomeList: DiplomeList,
    setfire: setfire
  }), imageLoading && publicProfile_jsx(Components_ProgressBar, {
    percentage: percentage
  })), publicProfile_jsx(external_antd_["Menu"], {
    onClick: handleClick,
    selectedKeys: current,
    mode: "horizontal",
    style: {
      marginTop: '3%'
    }
  }, publicProfile_jsx(external_antd_["Menu"].Item, {
    key: "Acceuil",
    icon: publicProfile_jsx(HomeIcon, null)
  }, "Acceuil"), publicProfile_jsx(external_antd_["Menu"].Item, {
    key: "propos",
    icon: publicProfile_jsx(AboutIcon, null)
  }, "A propos"), userid === profile._id && profile.type === "Société" && publicProfile_jsx(external_antd_["Menu"].Item, {
    key: "Calendar",
    icon: publicProfile_jsx(CalendarIcon, null)
  }, "Calendrier")), publicProfile_jsx("div", {
    className: "MenuContent"
  }, current === "Acceuil" && publicProfile_jsx(external_react_default.a.Fragment, null, publicProfile_jsx(Components_NavAcceuil, {
    date: date,
    profile: profile
  })), current === "propos" && publicProfile_jsx(external_react_default.a.Fragment, null, publicProfile_jsx(Components_NavPropos, {
    profile: profile,
    location: location
  })), current === "Calendar" && publicProfile_jsx("div", {
    style: {
      marginTop: '30px'
    }
  }, publicProfile_jsx(BookMeeting, {
    profile: profile,
    loc: "profile"
  }))), publicProfile_jsx("div", {
    className: "MenuFooter"
  }, userid !== profile._id && profile.type === "Société" && publicProfile_jsx("div", {
    className: "like"
  }, publicProfile_jsx(components_LikeButton, {
    checkbox: checkbox,
    handleLike: handleLike
  }), publicProfile_jsx("label", {
    htmlFor: "checkbox",
    className: checkbox ? "active" : ""
  }, "J'aime")), publicProfile_jsx("div", {
    className: "share"
  }, publicProfile_jsx("i", {
    className: "fa fa-share-alt",
    "aria-hidden": "true",
    style: {
      marginRight: '5px'
    }
  }), "Partager"))));
};

/* harmony default export */ var publicProfile = (ProfileBody);
// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__("aIN1");

// CONCATENATED MODULE: ./pages/Profiles/[_id].jsx

var _id_jsx = external_react_default.a.createElement;








const Profile = props => {
  const {
    0: userid,
    1: setData
  } = Object(external_react_["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    if (props.statusCode === 401) {
      const location = "/Auth/Signin/?ref=tokenexpired&location=" + window.location.href;
      window.location.replace(location);
    } else {
      props.statusCode !== 404 ? setData(props.data.AuthId.userId) : "";
      setLoading(false);
    }
  }, []);

  if (props.statusCode === 404) {
    return _id_jsx(error_default.a, {
      statusCode: props.statusCode
    });
  }

  if (loading) {
    return _id_jsx(external_react_default.a.Fragment, null, _id_jsx(head["a" /* default */], {
      title: "Loading"
    }), _id_jsx("div", {
      style: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-50px',
        marginLeft: '-50px'
      }
    }, _id_jsx(external_antd_["Spin"], {
      size: "large"
    })));
  } else {
    return _id_jsx(external_react_default.a.Fragment, null, _id_jsx("div", {
      className: "body"
    }, _id_jsx("div", {
      className: "ContentInside"
    }, _id_jsx(header["a" /* default */], null), props.data === undefined ? _id_jsx(head["a" /* default */], {
      title: "Loading"
    }) : '', _id_jsx("div", {
      style: {
        marginTop: '8%'
      }
    }, props.data !== undefined && _id_jsx(publicProfile, {
      profile: props.data.profile,
      userid: userid
    })))), _id_jsx(footer["a" /* default */], null));
  }
};

const getServerSideProps = async ctx => {
  try {
    const cookie = ctx.req.headers.cookie;
    const url = "http://localhost:3000/api/profiles/profile?userid=" + ctx.query._id;
    const res = await fetch(url, {
      headers: {
        cookie
      }
    });
    const statusCode = res.status;
    const data = await res.json();

    if (statusCode !== 200) {
      throw statusCode;
    }

    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.log(error);
    ctx.res.statusCode = error;
    return {
      props: {
        statusCode: error
      }
    };
  }
};
/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "87xa":
/***/ (function(module, exports) {



/***/ }),

/***/ "8f9s":
/***/ (function(module, exports) {



/***/ }),

/***/ "8i+9":
/***/ (function(module, exports) {



/***/ }),

/***/ "E/xK":
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "Ebmi":
/***/ (function(module, exports) {



/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "GNgB":
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "M27Y":
/***/ (function(module, exports) {



/***/ }),

/***/ "NfAz":
/***/ (function(module, exports) {

module.exports = ["Casablanca", "Fes", "Tangier", "Marrakesh", "Salé", "Meknes", "Rabat", "Oujda", "Kenitra", "Agadir", "Souss Massa", "Tetouan", "Temara", "Safi", "Mohammedia", "Khouribga", "El Jadida", "Beni Mellal", "Aït Melloul", "Nador", "Dar Bouazza", "Taza", "Settat", "Berrechid", "Khemisset", "Inezgane", "Ksar El Kebir", "Larache", "Guelmim", "Khenifra", "Berkane", "Taourirt", "Bouskoura", "Fquih", "Ben Salah", "Dcheira", "El Jihadia", "Oued Zem", "Marrakesh-Safi", "Sidi Slimane", "Errachidia", "Guercif", "Oulad Teima", "Ben Guerir", "Tifelt", "Lqliaa", "Taroudant", "Sefrou", "Essaouira", "Fnideq", "Sidi Kacem", "Tiznit", "Tan-Tan", "Ouarzazate", "SoukElArbaa", "Youssoufia", "Lahraouyine", "Martil", "AinHarrouda", "Suqas-SabtAwladanNama", "Skhirat", "Ouazzane", "Benslimane", "AlHoceima", "BeniAnsar", "Mdiq", "SidiBennour", "Midelt", "Azrou", "Drargua"];

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/header.scss
var header = __webpack_require__("8f9s");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/svg/profile.js

var __jsx = external_react_default.a.createElement;

const Profile = () => {
  return __jsx("svg", {
    viewBox: "0 0 416 416",
    "aria-hidden": "true"
  }, __jsx("g", null, __jsx("g", null, __jsx("g", null, __jsx("circle", {
    cx: "208",
    cy: "96",
    r: "96"
  }), __jsx("path", {
    d: "M394.4,291.872c-108-90.656-264.832-90.656-372.832,0C18.048,294.848,16,299.2,16,303.84c0,15.456,0,52.832,0,80.192     C16,401.696,30.336,416,48,416h320c17.664,0,32-14.304,32-31.968v-73.92C400,299.2,397.952,294.848,394.4,291.872z"
  })))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/* harmony default export */ var profile = (Profile);
// CONCATENATED MODULE: ./components/svg/settings.js

var settings_jsx = external_react_default.a.createElement;

const Settings = () => {
  return settings_jsx("svg", {
    viewBox: "0 0 490.667 490.667"
  }, settings_jsx("g", null, settings_jsx("g", null, settings_jsx("path", {
    d: "M488.683,214.592c-1.6-12.437-8.64-23.253-19.307-29.696c-10.475-6.315-23.125-7.488-34.837-3.115    c-9.301,3.456-19.712-1.323-23.936-10.752c-4.971-11.136-11.115-21.803-18.219-31.701c-6.165-8.576-5.013-19.84,2.645-26.155    c9.493-7.787,14.784-19.307,14.549-31.595c-0.256-12.48-6.123-24-16.149-31.573c-16.299-12.352-34.091-22.635-52.885-30.549    c-11.627-4.885-24.597-4.245-35.541,1.792c-10.752,5.909-18.091,16.256-20.096,28.373c-1.643,9.856-10.901,16.235-21.44,15.36    c-11.925-1.259-24.363-1.259-36.309,0c-10.688,0.875-19.797-5.483-21.419-15.339c-2.005-12.139-9.323-22.485-20.075-28.395    c-10.987-6.037-23.915-6.699-35.563-1.813c-18.816,7.936-36.608,18.219-52.885,30.549c-10.005,7.595-15.893,19.093-16.128,31.573    c-0.256,12.288,5.056,23.829,14.549,31.659c7.68,6.315,8.811,17.536,2.645,26.133c-7.125,9.941-13.269,20.587-18.219,31.68    c-4.245,9.472-14.763,14.208-24.149,10.667c-11.477-4.288-24.085-3.115-34.603,3.2c-10.667,6.421-17.728,17.237-19.328,29.675    C0.661,224.789,0,235.136,0,245.333s0.661,20.544,1.984,30.741c1.6,12.437,8.64,23.275,19.307,29.696    c10.517,6.336,23.147,7.552,34.859,3.115c9.131-3.392,19.669,1.28,23.915,10.752c4.949,11.093,11.093,21.76,18.219,31.701    c6.165,8.576,5.013,19.819-2.667,26.155c-9.472,7.787-14.763,19.307-14.528,31.595c0.256,12.48,6.123,24,16.128,31.595    c16.256,12.309,34.048,22.592,52.885,30.549c5.163,2.176,10.581,3.243,15.979,3.243c6.763,0,13.483-1.685,19.563-5.056    c10.752-5.909,18.091-16.277,20.096-28.373c1.643-9.856,11.008-16.405,21.44-15.339c11.925,1.259,24.363,1.259,36.309,0    c10.603-1.045,19.776,5.483,21.419,15.339c2.027,12.117,9.344,22.464,20.096,28.373c10.987,6.059,23.915,6.677,35.541,1.813    c18.816-7.936,36.608-18.219,52.885-30.549c10.005-7.595,15.872-19.115,16.128-31.595c0.235-12.288-5.077-23.808-14.592-31.616    c-7.659-6.315-8.789-17.536-2.624-26.133c7.125-9.899,13.248-20.587,18.219-31.68c4.267-9.493,14.848-14.144,23.936-10.773    l0.235,0.085c11.52,4.352,24.149,3.136,34.624-3.179c10.688-6.443,17.707-17.259,19.307-29.675    c1.344-10.155,2.005-20.501,2.005-30.784S490.005,224.704,488.683,214.592z M245.333,341.333c-52.928,0-96-43.072-96-96    s43.072-96,96-96c52.928,0,96,43.072,96,96S298.261,341.333,245.333,341.333z"
  }))), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null), settings_jsx("g", null));
};

/* harmony default export */ var settings = (Settings);
// CONCATENATED MODULE: ./components/svg/logout.js

var logout_jsx = external_react_default.a.createElement;

const Logout = () => {
  return logout_jsx("svg", {
    viewBox: "0 0 512 512"
  }, logout_jsx("g", null, logout_jsx("g", null, logout_jsx("g", null, logout_jsx("path", {
    d: "M510.371,226.513c-1.088-2.603-2.645-4.971-4.629-6.955l-63.979-63.979c-8.341-8.32-21.824-8.32-30.165,0     c-8.341,8.341-8.341,21.845,0,30.165l27.584,27.584H320.013c-11.797,0-21.333,9.557-21.333,21.333s9.536,21.333,21.333,21.333     h119.168l-27.584,27.584c-8.341,8.341-8.341,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251s10.923-2.069,15.083-6.251     l63.979-63.979c1.984-1.963,3.541-4.331,4.629-6.955C512.525,237.606,512.525,231.718,510.371,226.513z"
  }), logout_jsx("path", {
    d: "M362.68,298.667c-11.797,0-21.333,9.557-21.333,21.333v106.667h-85.333V85.333c0-9.408-6.187-17.728-15.211-20.437     l-74.091-22.229h174.635v106.667c0,11.776,9.536,21.333,21.333,21.333s21.333-9.557,21.333-21.333v-128     C384.013,9.557,374.477,0,362.68,0H21.347c-0.768,0-1.451,0.32-2.197,0.405c-1.003,0.107-1.92,0.277-2.88,0.512     c-2.24,0.576-4.267,1.451-6.165,2.645c-0.469,0.299-1.045,0.32-1.493,0.661C8.44,4.352,8.376,4.587,8.205,4.715     C5.88,6.549,3.939,8.789,2.531,11.456c-0.299,0.576-0.363,1.195-0.597,1.792c-0.683,1.621-1.429,3.2-1.685,4.992     c-0.107,0.64,0.085,1.237,0.064,1.856c-0.021,0.427-0.299,0.811-0.299,1.237V448c0,10.176,7.189,18.923,17.152,20.907     l213.333,42.667c1.387,0.299,2.795,0.427,4.181,0.427c4.885,0,9.685-1.685,13.525-4.843c4.928-4.053,7.808-10.091,7.808-16.491     v-21.333H362.68c11.797,0,21.333-9.557,21.333-21.333V320C384.013,308.224,374.477,298.667,362.68,298.667z"
  })))), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null), logout_jsx("g", null));
};

/* harmony default export */ var logout = (Logout);
// EXTERNAL MODULE: ./components/svg/NotifBell.js
var NotifBell = __webpack_require__("2lEd");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/svg/ToggleIcon.js

var ToggleIcon_jsx = external_react_default.a.createElement;

const ToggleIcon = () => {
  return ToggleIcon_jsx("svg", {
    height: "30px",
    viewBox: "0 0 512 512",
    width: "30px",
    fill: "#1e68b2"
  }, ToggleIcon_jsx("path", {
    d: "m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
  }), ToggleIcon_jsx("path", {
    d: "m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
  }), ToggleIcon_jsx("path", {
    d: "m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"
  }));
};

/* harmony default export */ var svg_ToggleIcon = (ToggleIcon);
// CONCATENATED MODULE: ./components/header.js

var header_jsx = external_react_default.a.createElement;










const DropdownItem = props => {
  return header_jsx("div", {
    className: "menuItem",
    onClick: props.onClick
  }, header_jsx("span", {
    className: "icon-button"
  }, props.lefticon), props.children);
};

const DropDown = ({
  userid,
  count
}) => {
  const handleLogout = () => {
    external_axios_default.a.get('/api/signout', {
      withCredentials: true
    }).then(res => window.location.reload()).catch(err => console.log(err));
  };

  return header_jsx("div", {
    className: "Dropdown"
  }, header_jsx(DropdownItem, {
    lefticon: header_jsx(profile, null)
  }, header_jsx("a", {
    href: `/Profiles/` + userid,
    style: {
      textDecoration: 'none'
    }
  }, "Mon profile")), header_jsx(DropdownItem, {
    lefticon: header_jsx(external_antd_["Badge"], {
      count: count
    }, header_jsx(NotifBell["a" /* default */], null))
  }, header_jsx("a", {
    href: `/Notifications/`,
    style: {
      textDecoration: 'none'
    }
  }, "Notifications")), header_jsx(DropdownItem, {
    lefticon: header_jsx(logout, null),
    onClick: handleLogout
  }, "Se d\xE9connecter"));
}; // Componenet  -------------------------------------------------------------


const Header = ({
  active,
  setUserID
}) => {
  const {
    0: userId,
    1: setToken
  } = Object(external_react_["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: checkStatus,
    1: setCheckStatus
  } = Object(external_react_["useState"])(false);
  const {
    0: opened,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])();
  const count = data !== undefined && data !== null ? data.NotifView : '';
  Object(external_react_["useEffect"])(() => {
    external_axios_default.a.get('/api/profiles/myprofile', {
      withCredentials: true
    }).then(res => {
      setData(res.data.profile);
      setLoading(false);

      if (setUserID !== undefined) {
        setUserID(res.data.profile._id);
      }

      setToken(res.data.profile._id);
    }).catch(err => {
      setLoading(false);
      setToken(null);
      console.error(err);
    });
  }, []);

  const handleClick = () => {
    window.location.replace("/Auth/Signin");
  };

  return header_jsx("div", {
    className: "Header_Container"
  }, header_jsx("div", {
    className: "NavSwitch"
  }, header_jsx("label", {
    htmlFor: "toggle",
    onClick: () => setCheckStatus(!checkStatus)
  }, " ", header_jsx(svg_ToggleIcon, null), " ")), header_jsx("div", {
    className: "Header_Logo"
  }, header_jsx("img", {
    src: "../static/Icons/LOGO2017.png",
    height: "30",
    onClick: () => window.location.assign("/"),
    style: {
      cursor: 'pointer'
    }
  })), header_jsx("div", {
    className: checkStatus ? "GridNav visible" : "GridNav"
  }, header_jsx("ul", null, header_jsx("li", {
    className: active == "acceuil" ? "active" : "link"
  }, header_jsx("a", {
    href: "/"
  }, "Acceuil")), header_jsx("li", {
    className: active == "propos" ? "active" : "link"
  }, header_jsx("a", {
    href: "/propos"
  }, "A propos")), header_jsx("li", {
    className: active == "temoignages" ? "active" : "link"
  }, header_jsx("a", {
    href: "/temoignages"
  }, "Temoignages")), header_jsx("li", {
    className: active == "contact" ? "active" : "link"
  }, header_jsx("a", {
    href: "/contact"
  }, "Contact")), header_jsx("li", {
    className: active == "questions" ? "active" : "link"
  }, header_jsx("a", {
    href: "/questions"
  }, "Questions"))), header_jsx("div", {
    className: "Header_Buttons"
  }, !loading && userId === null && header_jsx(external_react_default.a.Fragment, null, header_jsx("input", {
    className: "Header_subscribe",
    type: "button",
    value: "S'inscrire",
    onClick: () => window.location.replace("/Auth/SignUp")
  }), header_jsx("input", {
    className: "Header_signin",
    type: "button",
    value: "Se connecter",
    onClick: handleClick
  })), !loading && userId !== null && header_jsx(external_react_default.a.Fragment, null, header_jsx("div", {
    className: "ProfileThumb",
    onClick: () => setOpen(!opened)
  }, header_jsx("div", {
    className: "ProfileImg"
  }, header_jsx(external_antd_["Badge"], {
    count: count
  }, header_jsx("img", {
    src: data.Usrimg
  }))), data.type == "Société" && header_jsx("span", null, data.companyname), data.type == "Client" && header_jsx("span", null, data.nom, " ", data.prenom)), opened && header_jsx(external_react_default.a.Fragment, null, header_jsx(DropDown, {
    userid: userId,
    count: count
  }))))));
};

/* harmony default export */ var components_header = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2jVJ");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    className: "footer"
  }, "\xA9 2020 6Solutions. Tous les droits sont r\xE9serv\xE9s.");
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "fN3F":
/***/ (function(module, exports) {



/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "mL3h":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/Modal");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "pEjj":
/***/ (function(module, exports) {



/***/ }),

/***/ "tXcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const defaultDescription = '';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, props.title || ""), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "keywords",
  content: props.keywords || defaultKeywords
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/static/Icons/fire_logo.ico"
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/static/Icons/fire_logo.ico"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/static/Icons/fire_logo.ico"
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/static/Icons/apple-touch-icon.png"
}), __jsx("link", {
  rel: "mask-icon",
  href: "/static/Icons/fire_logo.png",
  color: "#000000"
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  property: "og:title",
  content: props.title || ""
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image"
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200"
}), __jsx("meta", {
  property: "og:image:height",
  content: "630"
}), __jsx("script", {
  src: "https://kit.fontawesome.com/a076d05399.js"
}));

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yegV":
/***/ (function(module, exports) {

module.exports = [, "Président Directeur-Général (PDG)", "Directeur des opérations (COO)", "Directeur financier (CFO) ou contrôleur", "Directeur marketing (CMO)", "Directeur de la technologie (CTO)", "Président", "Vice président", "Assistant exécutif", "Responsable marketing", "Chef de produit", "Gestionnaire de projet", "Responsable des finances", "Directeur des Ressources Humaines", "Spécialiste en marketing", "Analyste d'affaires", "Personnel des ressources humaines", "Comptable", "Commercial", "Représentant du service à la clientèle", "assistant administratif"];

/***/ }),

/***/ "yzYF":
/***/ (function(module, exports) {

module.exports = ["Agriculture", "Agroalimentaire", "Alimentation", "Animaux", "Architecture - Aménagement intérieur", "Artisanat - Métiers d'art", "Banque - Finance - Assurance", "Bâtiment - Travaux publics", "Biologie - Chimie", "Commerce - Immobilier", "Communication - Information", "Culture - Spectacle", "Défense - Sécurité - Secours", "Droit", "Edition - Imprimerie - Livre", "Electronique - Informatique", "Enseignement - Formation", "Humanitaire", "Industrie - Matériaux", "Lettres - Sciences humaines", "Mécanique - Maintenance", "Santé", "Sciences - Maths - Physique", "Secrétariat - Accueil", "Social - Services à la personne", "Soins - Esthétique - Coiffure", "Sport - Animation ", "Transport - Logistique"];

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });