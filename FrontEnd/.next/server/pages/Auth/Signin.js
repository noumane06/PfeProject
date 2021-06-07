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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Auth/Signin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Auth_Components/RightComponent.js":
/*!******************************************************!*\
  !*** ./components/Auth_Components/RightComponent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/Auth_Components/header.js");
/* harmony import */ var _SigninForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SigninForm */ "./components/Auth_Components/SigninForm.js");
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignupForm */ "./components/Auth_Components/SignupForm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const RightComponent = props => {
  return __jsx("div", {
    className: "Split RightSide"
  }, __jsx("div", {
    className: "ContentContainer"
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.title === "signin" && __jsx(_SigninForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    query: props.query
  }), props.title === "signup" && __jsx(_SignupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    query: props.query
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RightComponent);

/***/ }),

/***/ "./components/Auth_Components/SigninForm.js":
/*!**************************************************!*\
  !*** ./components/Auth_Components/SigninForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const FormComponent = props => {
  var data = {
    // type must be either 'Société' or 'Client' , if you chnage the values be sure to change it in backend too
    email: "",
    password: ""
  };
  var {
    0: userData,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);
  var {
    0: emailErr,
    1: setErrEm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var {
    0: passwordErr,
    1: setErrPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: location,
    1: setLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("/");
  const {
    0: Loggedin,
    1: setLog
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.query.ref !== undefined) {
      if (props.query.ref === "tokenexpired") {
        antd__WEBPACK_IMPORTED_MODULE_3__["message"].warning('veuillez d abord vous connecter');
      }
    }

    if (props.query.location !== undefined) {
      setLocation(props.query.location);
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/profiles/myprofile', {
      withCredentials: true
    }).then(res => {
      setLog(true);
      setTimeout(() => {
        window.location.replace("/");
      }, 5000);
    }).catch(err => {});
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/signin/", userData).then(response => {
      if (response.status === 200) {
        window.location.replace(location);
      } else {
        setErrEm(true);
        setErrPass(true);
      }
    }).catch(err => {
      console.log(err);
      setErrEm(true);
      setErrPass(true);
    });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setData(_objectSpread(_objectSpread({}, userData), {}, {
      [name]: value
    }));

    if (name === "email") {
      setErrEm(false);
    }

    if (name === "password") {
      setErrPass(false);
    }
  };

  return __jsx("div", {
    className: "FormContainer"
  }, Loggedin && __jsx("div", {
    className: "part 1"
  }, __jsx("h2", null, "Nous saluons le retour!"), __jsx("p", null, "Vous \xEAtes d\xE9j\xE0 connect\xE9 et serez bient\xF4t redirig\xE9 vers page d'accueil."), __jsx("div", {
    className: "FormFooter"
  }, "Si vous n'\xEAtes pas redirig\xE9 automatiquement suivez", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, "ce lien")))), !Loggedin && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", null, "Connectez-vous"), __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("label", null, "Email"), __jsx("br", null), __jsx("input", {
    className: emailErr ? "input error" : "input",
    style: {
      width: '80%'
    },
    type: "email",
    name: "email",
    onChange: handleChange,
    value: userData.email,
    required: true
  }), __jsx("br", null), __jsx("label", {
    className: emailErr ? "errMsg" : "hidden"
  }, "email invalide"), __jsx("br", null), __jsx("br", null), __jsx("label", null, "Mode de passe"), __jsx("br", null), __jsx("input", {
    className: passwordErr ? "input error" : "input",
    style: {
      width: '80%'
    },
    type: "password",
    name: "password",
    onChange: handleChange,
    value: userData.password,
    required: true
  }), __jsx("br", null), __jsx("label", {
    className: passwordErr ? "errMsg" : "hidden"
  }, "mot de passe incorrect"), __jsx("br", null), __jsx("br", null), __jsx("input", {
    className: "SignButton",
    type: "submit",
    value: "Se connecter"
  })), __jsx("div", {
    className: "FormFooter"
  }, __jsx("span", null, "Pas encore membre ?"), props.query.location !== undefined && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `SignUp?location=${location}`
  }, __jsx("a", null, "Inscrivez-vous")), props.query.location === undefined && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "SignUp"
  }, __jsx("a", null, "Inscrivez-vous")))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormComponent);

/***/ }),

/***/ "./components/Auth_Components/SignupForm.js":
/*!**************************************************!*\
  !*** ./components/Auth_Components/SignupForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _captcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./captcha */ "./components/Auth_Components/captcha.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase-config */ "./components/firebase-config.js");
/* harmony import */ var _styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/AutoComplete.scss */ "./styles/AutoComplete.scss");
/* harmony import */ var _styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Data_Cities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/Cities */ "./components/Data/Cities.js");
/* harmony import */ var _Data_Cities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Data_Cities__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Data_Jobs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Data/Jobs */ "./components/Data/Jobs.js");
/* harmony import */ var _Data_Jobs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Data_Jobs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Data_Fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Data/Fields */ "./components/Data/Fields.js");
/* harmony import */ var _Data_Fields__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Data_Fields__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/modal/Modal */ "antd/lib/modal/Modal");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./terms */ "./components/Auth_Components/terms.js");
/* harmony import */ var _privacy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy */ "./components/Auth_Components/privacy.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const FormComponent = props => {
  const {
    RangePicker
  } = antd__WEBPACK_IMPORTED_MODULE_2__["TimePicker"];
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Select"];
  const children = [];
  _Data_Fields__WEBPACK_IMPORTED_MODULE_9___default.a.map(Field => {
    children.push(__jsx(Option, {
      key: Field
    }, Field));
  });
  var data = {
    // type must be either 'Société' or 'Client' , if you chnage the values be sure to change it in backend too
    type: "Société",
    email: "",
    password: "",
    nom: "",
    prenom: "",
    companyname: "",
    title: "Directeur",
    domaine: [],
    addresse: "",
    city: "Casablanca",
    mobilephone: "",
    fixphone: "",
    gender: "male",
    horraire: []
  }; // States ---------------------------------------

  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: captchaState,
    1: setCaptcha
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: userData,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);
  const {
    0: privacy,
    1: setPrivacy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: terms,
    1: setTerms
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // errors ---------------------------------------

  const {
    0: emailErr,
    1: setErrEm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordErr,
    1: setErrPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: confirmpass,
    1: setErrConf
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: domaineErr,
    1: setErrdom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: horraireErr,
    1: setErrhor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: codeErr,
    1: setCodeErr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: phoneErr,
    1: setPhoneErr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // password confirmation

  const {
    0: Confirmation,
    1: setConf
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // phone number confirmation

  const {
    0: codeVerif,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: checkbox,
    1: setCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: location,
    1: setLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("/");
  const {
    0: Loggedin,
    1: setLog
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.query !== undefined) {
      if (props.query.ref === "tokenexpired") {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].warning('veuillez d abord vous connecter');
      }

      if (props.query.location !== undefined) {
        setLocation(props.query.location);
      }
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/profiles/myprofile', {
      withCredentials: true
    }).then(res => {
      setLog(true);
      setTimeout(() => {
        window.location.replace("/");
      }, 5000);
    }).catch(err => {});
  }, []); // ----------------------------------------------
  // methods ------------------------------------------

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setData(_objectSpread(_objectSpread({}, userData), {}, {
      [name]: value
    }));

    if (name === "email") {
      setErrEm(false);
    }

    if (name === "password") {
      setErrPass(false);
    }

    if (name === "mobilephone") {
      setPhoneErr(false);
    }
  };

  const handleConfirmation = e => {
    setConf(e.target.value);
    setErrConf(false);
  };

  const handleTime = (time, timestring) => {
    const string = timestring;
    setData(_objectSpread(_objectSpread({}, userData), {}, {
      horraire: string
    }));
    setTime(time);
    setErrhor(false);
  };

  const handleTag = value => {
    const string = value;
    setData(_objectSpread(_objectSpread({}, userData), {}, {
      domaine: string
    }));
    setErrdom(false);
  }; // Verifying email if it already exist 


  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    var i = 0;
    const body = {
      email: userData.email
    };
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/signup/verifEmail", body).then(response => {
      if (response.status === 200) {
        setLoading(false);
      } else {
        setLoading(false);
        setErrEm(true);
      }
    }).catch(err => {
      setLoading(false);
      i = 1;
      setErrEm(true);
      console.log(err);
    });

    if (userData.password.length < 8) {
      setErrPass(true);
      i = 3;
    }

    if (Confirmation !== userData.password) {
      setErrConf(true);
      i = 3;
    }

    if (i === 0) {
      setCurrent(2);
    }
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    const newphone = userData.mobilephone.replace(0, "+212");
    setLoading(true);
    var hold = false;

    if (userData.domaine.length === 0) {
      setErrdom(true);
      hold = true;
    }

    if (userData.horraire.length === 0) {
      setErrhor(true);
      hold = true;
    }

    var appVerifier = window.recaptchaVerifier;

    if (captchaState) {
      _firebase_config__WEBPACK_IMPORTED_MODULE_5__["default"].auth().signInWithPhoneNumber(newphone, appVerifier).then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        if (!hold || userData.type === "Client") {
          setLoading(false);
          setCurrent(3);
        }

        window.confirmationResult = confirmationResult; //currentComponent.setState({ submitState: true });
      }).catch(function (error) {
        if (error.code !== "auth/too-many-requests") {
          setPhoneErr(true);
          console.log(error);
        }

        setLoading(false);
        setCaptcha(false); // Error; SMS not sent

        if (error.code === "auth/too-many-requests") {
          console.log(error);
          antd__WEBPACK_IMPORTED_MODULE_2__["notification"]["error"]({
            message: 'auth / trop de requêtes',
            description: 'Nous avons bloqué toutes les demandes de cet appareil en raison d une activité inhabituelle. Réessayez plus tard.',
            duration: 10
          });
        }
      });
    }
  };

  const handler = bool => {
    setCaptcha(bool);
  };

  const handleLastSubmit = () => {
    setLoading(true);
    var code = codeVerif;
    window.confirmationResult.confirm(code).then(result => {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/signup/", userData, {
        withCredentials: true
      }).then(response => {
        if (response.status === 200) {
          window.location.replace(`/Settings?location=${location}`);
        } else {
          setCurrent(5);
        }
      }).catch(err => {
        console.log(err);
        setCurrent(5);
      });
    }).catch(err => {
      setLoading(false);
      setCodeErr(true);
      console.log(err);
    });
  }; // -----------------------------------------------------


  return __jsx("div", {
    className: "FormContainer"
  }, !Loggedin && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", null, "Inscrivez-vous"), current == 0 && __jsx("div", {
    className: "part 1"
  }, __jsx("h2", null, "Choisissez le type de votre compte"), __jsx("form", {
    onSubmit: () => setCurrent(1)
  }, __jsx("select", {
    className: "select",
    name: "type",
    value: userData.type,
    onChange: handleChange
  }, __jsx("option", {
    value: "Soci\xE9t\xE9"
  }, "Soci\xE9t\xE9"), __jsx("option", {
    value: "Client"
  }, "Client")), __jsx("div", {
    className: "buttonContainer"
  }, __jsx("input", {
    className: "SignButton next",
    type: "submit",
    value: "Suivant"
  })))), current == 1 && __jsx("div", {
    className: "part 1"
  }, __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("div", {
    className: "multipleInput"
  }, __jsx("select", {
    className: "small",
    name: "gender",
    value: userData.gender,
    onChange: handleChange
  }, __jsx("option", {
    value: "male",
    selected: true
  }, "Mr"), __jsx("option", {
    value: "female"
  }, "Mme")), __jsx("input", {
    className: "input controlled",
    type: "text",
    placeholder: "Nom",
    name: "nom",
    onChange: handleChange,
    value: userData.nom,
    required: true
  }), __jsx("input", {
    className: "input controlled",
    type: "text",
    placeholder: "Prenom",
    name: "prenom",
    onChange: handleChange,
    value: userData.prenom,
    required: true
  })), userData.type === "Société" && __jsx("div", {
    className: "multipleInput"
  }, __jsx("select", {
    className: "title",
    name: "title",
    value: userData.title,
    onChange: handleChange,
    required: true
  }, _Data_Jobs__WEBPACK_IMPORTED_MODULE_8___default.a.map(job => __jsx("option", {
    value: job,
    key: job
  }, job))), __jsx("div", {
    style: {
      width: '68%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, __jsx("input", {
    className: emailErr ? "email error" : "email",
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: handleChange,
    value: userData.email,
    required: true
  }), __jsx("label", {
    className: emailErr ? "errMsg" : "hidden"
  }, "Email already exist"))), userData.type === "Client" && __jsx("div", {
    className: "ColumnFLexContainer"
  }, __jsx("input", {
    className: emailErr ? "input error" : "input",
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: handleChange,
    value: userData.email,
    required: true
  }), __jsx("label", {
    className: emailErr ? "errMsg" : "hidden"
  }, "Email already exist")), __jsx("div", {
    className: "multipleInput"
  }, __jsx("select", {
    className: "title",
    name: "city",
    value: userData.city,
    onChange: handleChange
  }, _Data_Cities__WEBPACK_IMPORTED_MODULE_7___default.a.map(citie => __jsx("option", {
    value: citie,
    key: citie
  }, citie))), __jsx("input", {
    className: "input addresse",
    type: "text",
    placeholder: "Addresse",
    name: "addresse",
    onChange: handleChange,
    value: userData.addresse,
    required: true
  })), __jsx("div", {
    className: "ColumnFLexContainer"
  }, __jsx("input", {
    className: passwordErr ? "input error" : "input",
    type: "password",
    placeholder: "Mot de passe",
    name: "password",
    onChange: handleChange,
    value: userData.password,
    required: true
  }), __jsx("label", {
    className: passwordErr ? "errMsg" : "hidden"
  }, "mot de passe doit \xEAtre d'au moins 8 caract\xE8res")), __jsx("div", {
    className: "ColumnFLexContainer"
  }, __jsx("input", {
    className: confirmpass ? "input error" : "input",
    type: "password",
    placeholder: "Confirmez votre mot de passe",
    value: Confirmation,
    onChange: handleConfirmation,
    required: true
  }), __jsx("label", {
    className: confirmpass ? "errMsg" : "hidden"
  }, "la confirmation n'est pas la m\xEAme que le mot de passe")), __jsx("div", {
    className: "buttonContainer"
  }, !loading && __jsx("button", {
    className: "SignButton next",
    type: "submit"
  }, "Suivant"), loading && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    size: "default",
    className: "next"
  }), __jsx("input", {
    className: "Back",
    type: "button",
    value: "Precedent",
    onClick: () => setCurrent(0)
  })))), current == 2 && userData.type === "Société" && __jsx("div", {
    className: "part 1"
  }, __jsx("form", {
    onSubmit: handleSubmit2
  }, __jsx("input", {
    className: "input soc",
    type: "text",
    placeholder: "Nom de soci\xE9t\xE9",
    name: "companyname",
    value: userData.companyname,
    onChange: handleChange
  }), __jsx("div", {
    className: "ColumnFLexContainer"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    mode: "tags",
    style: {
      width: '100%'
    },
    placeholder: "Votre domaine ",
    className: domaineErr ? "error" : "",
    onChange: handleTag,
    value: userData.domaine,
    maxTagCount: 3
  }, children), __jsx("label", {
    className: domaineErr ? "errMsg" : "hidden"
  }, "Ce champ est obligatoire")), __jsx("div", {
    className: "multipleInput two"
  }, __jsx("div", {
    style: {
      width: '48%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, __jsx("input", {
    className: phoneErr ? "email error" : "email",
    type: "tel",
    name: "mobilephone",
    placeholder: "T\xE9l\xE9phone mobile | Ex:06xxxxxxxx",
    onChange: handleChange,
    value: userData.mobilephone,
    required: true
  }), __jsx("label", {
    className: phoneErr ? "errMsg" : "hidden"
  }, "Numero invalide")), __jsx("div", {
    style: {
      width: '48%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, __jsx("input", {
    className: "email",
    type: "tel",
    name: "fixphone",
    placeholder: "T\xE9l\xE9phone Fix | Ex:05xxxxxxxx",
    onChange: handleChange,
    value: userData.fixphone,
    required: true
  }))), __jsx("br", null), __jsx("label", {
    style: {
      color: '#318CE7'
    }
  }, "L'horaire de votre soci\xE9t\xE9 : "), __jsx("div", {
    className: "ColumnFLexContainer"
  }, __jsx(RangePicker, {
    className: horraireErr ? "error" : "",
    style: {
      width: '100%'
    },
    bordered: false,
    format: "HH:mm",
    minuteStep: 30,
    value: time,
    onChange: handleTime
  }), __jsx("label", {
    className: horraireErr ? "errMsg" : "hidden"
  }, "Ce champ est obligatoire")), __jsx(_captcha__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handler: handler
  }), __jsx("div", {
    className: "buttonContainer"
  }, !loading && __jsx("button", {
    className: !captchaState ? "disabeledButton next" : "SignButton next",
    type: "submit"
  }, "Suivant"), loading && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    size: "default",
    className: "next"
  }), __jsx("input", {
    className: "Back",
    type: "button",
    value: "Precedent",
    onClick: () => setCurrent(1)
  })))), current == 2 && userData.type === "Client" && __jsx("form", {
    onSubmit: handleSubmit2
  }, __jsx("div", {
    className: "ColumnFLexContainer"
  }, __jsx("input", {
    className: phoneErr ? "input error" : "input",
    type: "tel",
    name: "mobilephone",
    placeholder: "Mobile .Ex:06xxxxxxxx",
    onChange: handleChange,
    value: userData.mobilephone,
    required: true
  }), __jsx("label", {
    className: phoneErr ? "errMsg" : "hidden"
  }, "Numero invalide")), __jsx(_captcha__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handler: handler
  }), __jsx("div", {
    className: "buttonContainer"
  }, !loading && __jsx("button", {
    className: !captchaState ? "disabeledButton next" : "SignButton next",
    type: "submit"
  }, "Suivant"), loading && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    size: "default",
    className: "next"
  }), __jsx("input", {
    className: "Back",
    type: "button",
    value: "Precedent",
    onClick: () => setCurrent(1)
  }))), current == 3 && __jsx("div", {
    className: "part 1"
  }, __jsx("h3", null, "Pour votre s\xE9curit\xE9 , on veut s'assurer qu'il s'agit bien de vous . On vous a envoy\xE9 un message text avec un code de v\xE9rification a 6 chiffres . Les tarifs standards s'appliquent ."), __jsx("form", {
    onSubmit: e => e.preventDefault()
  }, __jsx("div", {
    className: "ColumnFLexContainer"
  }, __jsx("input", {
    className: codeErr ? "input error" : "input",
    type: "text",
    placeholder: "Code de verification",
    required: true,
    onChange: e => {
      setCode(e.target.value);
      ;
      setCodeErr(false);
    }
  }), __jsx("label", {
    className: codeErr ? "errMsg" : "hidden"
  }, "Code invalid")), __jsx("div", {
    className: "multipleInput two",
    style: {
      marginTop: '25px'
    }
  }, __jsx("input", {
    className: "",
    type: "checkbox",
    required: true,
    checked: checkbox,
    onChange: e => {
      setCheck(e.target.checked);
    }
  }), __jsx("label", {
    style: {
      marginLeft: '25px'
    }
  }, "La cr\xE9ation d'un compte signifie que vous \xE9tes d'accord avec nos ", __jsx("a", {
    onClick: () => setTerms(true),
    target: "_blank"
  }, "Conditions d'utilisation"), ", notre ", __jsx("a", {
    onClick: () => setPrivacy(true),
    target: "_black"
  }, "politique de confidentialit\xE9"), " et nos param\xE8tres de notification par defaut")), __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_10___default.a, {
    title: "",
    visible: terms,
    width: "90%",
    bodyStyle: {
      height: '70vh',
      overflowY: 'scroll'
    },
    onCancel: () => setTerms(false),
    footer: null
  }, __jsx(_terms__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_10___default.a, {
    title: "",
    visible: privacy,
    width: "90%",
    bodyStyle: {
      height: '70vh',
      overflowY: 'scroll'
    },
    onCancel: () => setPrivacy(false),
    footer: null
  }, __jsx(_privacy__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx("div", {
    className: "buttonContainer"
  }, !loading && __jsx("button", {
    className: codeVerif.length !== 6 || !checkbox ? "disabeledButton next" : "SignButton next",
    type: "submit",
    disabled: codeVerif.length !== 6 || !checkbox,
    onClick: handleLastSubmit
  }, "Suivant"), loading && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    size: "default",
    className: "next"
  }), __jsx("input", {
    className: "Back",
    type: "button",
    value: "Precedent",
    onClick: () => {
      setCurrent(2), setCaptcha(false);
    }
  })))), current == 5 && __jsx("div", {
    className: "part 1"
  }, __jsx("h3", null, "Smthng went wrong \uD83D\uDE12\uD83D\uDE12 ")), __jsx("div", {
    className: "FormFooter"
  }, __jsx("span", null, "D\xE9j\xE0 membre ?"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "Signin"
  }, __jsx("a", null, "Connectez-vous")))), Loggedin && __jsx("div", {
    className: "part 1"
  }, __jsx("h2", null, "Nous saluons le retour!"), __jsx("p", null, "Vous \xEAtes d\xE9j\xE0 connect\xE9 et serez bient\xF4t redirig\xE9 vers page d'accueil."), __jsx("div", {
    className: "FormFooter"
  }, "Si vous n'\xEAtes pas redirig\xE9 automatiquement suivez", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, "ce lien")))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormComponent);

/***/ }),

/***/ "./components/Auth_Components/captcha.js":
/*!***********************************************!*\
  !*** ./components/Auth_Components/captcha.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase-config */ "./components/firebase-config.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




__webpack_require__(/*! firebase/auth */ "firebase/auth");

class Captcha extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "LoadCaptcha", () => {
      _firebase_config__WEBPACK_IMPORTED_MODULE_1__["default"].auth().languageCode = 'en';
      let comp = this;
      window.recaptchaVerifier = new _firebase_config__WEBPACK_IMPORTED_MODULE_1__["default"].auth.RecaptchaVerifier('recaptcha', {
        'size': 'normal',
        'callback': function (response) {
          comp.props.handler(true);
        },
        'expired-callback': function () {
          comp.props.handler(false);
          console.log("expired");
        }
      });
      window.recaptchaVerifier.render().then(function (WidgetID) {
        window.recaptchaWidgetId = WidgetID;
      });
    });

    this.LoadCaptcha = this.LoadCaptcha.bind(this);
  }

  componentDidMount() {
    if (document.readyState === 'complete') {
      this.LoadCaptcha();
    } else {
      window.onload = this.loadRecaptcha;
    }
  }

  render() {
    return __jsx("div", {
      className: "text-center"
    }, __jsx("div", {
      id: "recaptcha"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Captcha);

/***/ }),

/***/ "./components/Auth_Components/header.js":
/*!**********************************************!*\
  !*** ./components/Auth_Components/header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const HeaderAuth = () => {
  return __jsx("div", {
    className: "HeaderContainer"
  }, __jsx("div", {
    className: "ButtonContainer",
    onClick: () => window.location.assign("/")
  }, __jsx("i", {
    className: "fa fa-arrow-left icon"
  }), __jsx("span", {
    className: "backButton"
  }, "Retour")), __jsx("span", {
    className: "Help"
  }, "Aide"));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderAuth);

/***/ }),

/***/ "./components/Auth_Components/leftImage.js":
/*!*************************************************!*\
  !*** ./components/Auth_Components/leftImage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LeftComponent = () => {
  return __jsx("div", {
    className: "Split LeftSide"
  }, __jsx("img", {
    src: "../../static/Icons/LOGO2017.png",
    height: "30",
    onClick: () => window.location.replace("/")
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftComponent);

/***/ }),

/***/ "./components/Auth_Components/privacy.js":
/*!***********************************************!*\
  !*** ./components/Auth_Components/privacy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const privacy = () => {
  return __jsx("div", {
    className: "privacy"
  }, __jsx("h1", null, "Privacy Policy"), __jsx("h2", null, "Title goes here"), __jsx("p", null, "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."));
};

/* harmony default export */ __webpack_exports__["default"] = (privacy);

/***/ }),

/***/ "./components/Auth_Components/terms.js":
/*!*********************************************!*\
  !*** ./components/Auth_Components/terms.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const terms = () => {
  return __jsx("div", {
    className: "terms"
  }, __jsx("h1", null, "Condition d'utilisation"), __jsx("h2", null, "Title goes here"), __jsx("p", null, "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."), __jsx("h2", null, "Title goes here"), __jsx("p", null, "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."), __jsx("h2", null, "Title goes here"), __jsx("p", null, "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."), __jsx("h2", null, "Title goes here"), __jsx("p", null, "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."), __jsx("h2", null, "Title goes here"), __jsx("p", null, "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit\u0161nihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur."));
};

/* harmony default export */ __webpack_exports__["default"] = (terms);

/***/ }),

/***/ "./components/Data/Cities.js":
/*!***********************************!*\
  !*** ./components/Data/Cities.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ["Casablanca", "Fes", "Tangier", "Marrakesh", "Salé", "Meknes", "Rabat", "Oujda", "Kenitra", "Agadir", "Souss Massa", "Tetouan", "Temara", "Safi", "Mohammedia", "Khouribga", "El Jadida", "Beni Mellal", "Aït Melloul", "Nador", "Dar Bouazza", "Taza", "Settat", "Berrechid", "Khemisset", "Inezgane", "Ksar El Kebir", "Larache", "Guelmim", "Khenifra", "Berkane", "Taourirt", "Bouskoura", "Fquih", "Ben Salah", "Dcheira", "El Jihadia", "Oued Zem", "Marrakesh-Safi", "Sidi Slimane", "Errachidia", "Guercif", "Oulad Teima", "Ben Guerir", "Tifelt", "Lqliaa", "Taroudant", "Sefrou", "Essaouira", "Fnideq", "Sidi Kacem", "Tiznit", "Tan-Tan", "Ouarzazate", "SoukElArbaa", "Youssoufia", "Lahraouyine", "Martil", "AinHarrouda", "Suqas-SabtAwladanNama", "Skhirat", "Ouazzane", "Benslimane", "AlHoceima", "BeniAnsar", "Mdiq", "SidiBennour", "Midelt", "Azrou", "Drargua"];

/***/ }),

/***/ "./components/Data/Fields.js":
/*!***********************************!*\
  !*** ./components/Data/Fields.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ["Agriculture", "Agroalimentaire", "Alimentation", "Animaux", "Architecture - Aménagement intérieur", "Artisanat - Métiers d'art", "Banque - Finance - Assurance", "Bâtiment - Travaux publics", "Biologie - Chimie", "Commerce - Immobilier", "Communication - Information", "Culture - Spectacle", "Défense - Sécurité - Secours", "Droit", "Edition - Imprimerie - Livre", "Electronique - Informatique", "Enseignement - Formation", "Humanitaire", "Industrie - Matériaux", "Lettres - Sciences humaines", "Mécanique - Maintenance", "Santé", "Sciences - Maths - Physique", "Secrétariat - Accueil", "Social - Services à la personne", "Soins - Esthétique - Coiffure", "Sport - Animation ", "Transport - Logistique"];

/***/ }),

/***/ "./components/Data/Jobs.js":
/*!*********************************!*\
  !*** ./components/Data/Jobs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [, "Président Directeur-Général (PDG)", "Directeur des opérations (COO)", "Directeur financier (CFO) ou contrôleur", "Directeur marketing (CMO)", "Directeur de la technologie (CTO)", "Président", "Vice président", "Assistant exécutif", "Responsable marketing", "Chef de produit", "Gestionnaire de projet", "Responsable des finances", "Directeur des Ressources Humaines", "Spécialiste en marketing", "Analyste d'affaires", "Personnel des ressources humaines", "Comptable", "Commercial", "Représentant du service à la clientèle", "assistant administratif"];

/***/ }),

/***/ "./components/firebase-config.js":
/*!***************************************!*\
  !*** ./components/firebase-config.js ***!
  \***************************************/
/*! exports provided: storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);


var config = {
  apiKey: "AIzaSyD3HWB_wyZh9VRv7crQc7Si6IRgOxQNRKg",
  authDomain: "herokuapp-a45b4.firebaseapp.com",
  projectId: "herokuapp-a45b4",
  storageBucket: "herokuapp-a45b4.appspot.com",
  messagingSenderId: "437763182769",
  appId: "1:437763182769:web:4a3b556b955759aa0c9290",
  measurementId: "G-47421CJ55W"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

var storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();


/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

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

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(router.pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(router.pathname, props.as) : resolvedHref
    };
  }, [router.pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/Auth/Sass/Auth.scss":
/*!***********************************!*\
  !*** ./pages/Auth/Sass/Auth.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Auth/Signin/index.js":
/*!************************************!*\
  !*** ./pages/Auth/Signin/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sass_Auth_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sass/Auth.scss */ "./pages/Auth/Sass/Auth.scss");
/* harmony import */ var _Sass_Auth_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sass_Auth_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Auth_Components_leftImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Auth_Components/leftImage */ "./components/Auth_Components/leftImage.js");
/* harmony import */ var _components_Auth_Components_RightComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Auth_Components/RightComponent */ "./components/Auth_Components/RightComponent.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/head */ "./components/head.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Signin = ({
  query
}) => {
  return __jsx("div", null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Connectez-vous | 6 solutions"
  }), __jsx(_components_Auth_Components_leftImage__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Auth_Components_RightComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "signin",
    query: query
  }));
};

Signin.getInitialProps = ({
  query
}) => {
  return {
    props: [{
      test: "this is a test"
    }],
    query: query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./styles/AutoComplete.scss":
/*!**********************************!*\
  !*** ./styles/AutoComplete.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/modal/Modal":
/*!***************************************!*\
  !*** external "antd/lib/modal/Modal" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/Modal");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhfQ29tcG9uZW50cy9SaWdodENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhfQ29tcG9uZW50cy9TaWduaW5Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0aF9Db21wb25lbnRzL1NpZ251cEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoX0NvbXBvbmVudHMvY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhfQ29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoX0NvbXBvbmVudHMvbGVmdEltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0aF9Db21wb25lbnRzL3ByaXZhY3kuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoX0NvbXBvbmVudHMvdGVybXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRhL0NpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGEvRmllbGRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0YS9Kb2JzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmlyZWJhc2UtY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXV0aC9TaWduaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21vZGFsL01vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2Uvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiXSwibmFtZXMiOlsiUmlnaHRDb21wb25lbnQiLCJwcm9wcyIsInRpdGxlIiwicXVlcnkiLCJGb3JtQ29tcG9uZW50IiwiZGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyRGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsImVtYWlsRXJyIiwic2V0RXJyRW0iLCJwYXNzd29yZEVyciIsInNldEVyclBhc3MiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwiTG9nZ2VkaW4iLCJzZXRMb2ciLCJ1c2VFZmZlY3QiLCJyZWYiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwid2FybmluZyIsImF4aW9zIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJyZXBsYWNlIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsIlJhbmdlUGlja2VyIiwiVGltZVBpY2tlciIsIk9wdGlvbiIsIlNlbGVjdCIsImNoaWxkcmVuIiwiRmllbGRzIiwibWFwIiwiRmllbGQiLCJwdXNoIiwidHlwZSIsIm5vbSIsInByZW5vbSIsImNvbXBhbnluYW1lIiwiZG9tYWluZSIsImFkZHJlc3NlIiwiY2l0eSIsIm1vYmlsZXBob25lIiwiZml4cGhvbmUiLCJnZW5kZXIiLCJob3JyYWlyZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2FwdGNoYVN0YXRlIiwic2V0Q2FwdGNoYSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicHJpdmFjeSIsInNldFByaXZhY3kiLCJ0ZXJtcyIsInNldFRlcm1zIiwiY29uZmlybXBhc3MiLCJzZXRFcnJDb25mIiwiZG9tYWluZUVyciIsInNldEVycmRvbSIsImhvcnJhaXJlRXJyIiwic2V0RXJyaG9yIiwiY29kZUVyciIsInNldENvZGVFcnIiLCJwaG9uZUVyciIsInNldFBob25lRXJyIiwiQ29uZmlybWF0aW9uIiwic2V0Q29uZiIsImNvZGVWZXJpZiIsInNldENvZGUiLCJjaGVja2JveCIsInNldENoZWNrIiwidGltZSIsInNldFRpbWUiLCJoYW5kbGVDb25maXJtYXRpb24iLCJoYW5kbGVUaW1lIiwidGltZXN0cmluZyIsInN0cmluZyIsImhhbmRsZVRhZyIsImkiLCJib2R5IiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0MiIsIm5ld3Bob25lIiwiaG9sZCIsImFwcFZlcmlmaWVyIiwicmVjYXB0Y2hhVmVyaWZpZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJjb25maXJtYXRpb25SZXN1bHQiLCJlcnJvciIsImNvZGUiLCJub3RpZmljYXRpb24iLCJkZXNjcmlwdGlvbiIsImR1cmF0aW9uIiwiaGFuZGxlciIsImJvb2wiLCJoYW5kbGVMYXN0U3VibWl0IiwiY29uZmlybSIsInJlc3VsdCIsIkpvYnMiLCJqb2IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIkNpdGllcyIsImNpdGllIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJjaGVja2VkIiwibWFyZ2luTGVmdCIsImhlaWdodCIsIm92ZXJmbG93WSIsInJlcXVpcmUiLCJDYXB0Y2hhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImxhbmd1YWdlQ29kZSIsImNvbXAiLCJSZWNhcHRjaGFWZXJpZmllciIsInJlbmRlciIsIldpZGdldElEIiwicmVjYXB0Y2hhV2lkZ2V0SWQiLCJMb2FkQ2FwdGNoYSIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsIm9ubG9hZCIsImxvYWRSZWNhcHRjaGEiLCJIZWFkZXJBdXRoIiwiYXNzaWduIiwiTGVmdENvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJzdG9yYWdlIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiZGVmYXVsdEtleXdvcmRzIiwiZGVmYXVsdE9HVVJMIiwiZGVmYXVsdE9HSW1hZ2UiLCJIZWFkIiwia2V5d29yZHMiLCJ1cmwiLCJvZ0ltYWdlIiwicHJvcFR5cGVzIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImhyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJoYXNXYXJuZWQiLCJwIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwicHJvY2VzcyIsIndhcm4iLCJQcm9wVHlwZXMiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsInJvdXRlIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJvcHRpb25zIiwicHJlcGFyZVVybEFzIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsImtleSIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiU2lnbmluIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7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QUFLLEVBQUcsQ0FBQztBQUFDNFgsVUFBSSxFQUFHO0FBQVIsS0FBRCxDQUFUO0FBQXVDMVgsU0FBSyxFQUFHQTtBQUEvQyxHQUFQO0FBQ0QsQ0FGRDs7QUFHZXlYLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvQXV0aC9TaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0F1dGgvU2lnbmluL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBIZWFkZXJBdXRoIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IFNpZ25pbkZvcm1Db21wb25lbnQgZnJvbSAnLi9TaWduaW5Gb3JtJztcclxuaW1wb3J0IFNpZ251cEZvcm1Db21wb25lbnQgZnJvbSAnLi9TaWdudXBGb3JtJztcclxuY29uc3QgUmlnaHRDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTcGxpdCBSaWdodFNpZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQXV0aC8+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGUgPT09XCJzaWduaW5cIiAmJihcclxuICAgICAgICAgICAgICAgICAgICA8U2lnbmluRm9ybUNvbXBvbmVudCBxdWVyeT17cHJvcHMucXVlcnl9Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGUgPT09IFwic2lnbnVwXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWdudXBGb3JtQ29tcG9uZW50IHF1ZXJ5PXtwcm9wcy5xdWVyeX0vPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJpZ2h0Q29tcG9uZW50OyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgRm9ybUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAvLyB0eXBlIG11c3QgYmUgZWl0aGVyICdTb2Npw6l0w6knIG9yICdDbGllbnQnICwgaWYgeW91IGNobmFnZSB0aGUgdmFsdWVzIGJlIHN1cmUgdG8gY2hhbmdlIGl0IGluIGJhY2tlbmQgdG9vXHJcbiAgICAgIGVtYWlsIDogXCJcIixcclxuICAgICAgcGFzc3dvcmQgOiBcIlwiXHJcbiAgICB9O1xyXG4gICAgdmFyIFt1c2VyRGF0YSAsIHNldERhdGFdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgICB2YXIgW2VtYWlsRXJyICwgc2V0RXJyRW1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdmFyIFtwYXNzd29yZEVyciwgc2V0RXJyUGFzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbG9jYXRpb24gLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIi9cIik7XHJcbiAgICBjb25zdCBbTG9nZ2VkaW4gLCBzZXRMb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGlmIChwcm9wcy5xdWVyeS5yZWYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5xdWVyeS5yZWYgPT09IFwidG9rZW5leHBpcmVkXCIpIHtcclxuICAgICAgICAgIG1lc3NhZ2Uud2FybmluZygndmV1aWxsZXogZCBhYm9yZCB2b3VzIGNvbm5lY3RlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAocHJvcHMucXVlcnkubG9jYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNldExvY2F0aW9uKHByb3BzLnF1ZXJ5LmxvY2F0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBheGlvcy5nZXQoJy9hcGkvcHJvZmlsZXMvbXlwcm9maWxlJyx7d2l0aENyZWRlbnRpYWxzIDogdHJ1ZX0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+eyAgICAgIFxyXG4gICAgICAgICAgICAgIHNldExvZyh0cnVlKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKVxyXG4gICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHt9KTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKSA7XHJcbiAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL3NpZ25pbi9cIiwgdXNlckRhdGEpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGxvY2F0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyRW0odHJ1ZSk7XHJcbiAgICAgICAgICBzZXRFcnJQYXNzKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRFcnJFbSh0cnVlKTtcclxuICAgICAgICBzZXRFcnJQYXNzKHRydWUpO1xyXG4gICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KT0+e1xyXG4gICAgICBjb25zdCAgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lIDtcclxuICAgICAgY29uc3QgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlIDtcclxuICAgICAgc2V0RGF0YSh7Li4udXNlckRhdGEgLFtuYW1lXSA6IHZhbHVlfSk7XHJcbiAgICAgIGlmIChuYW1lID09PSBcImVtYWlsXCIpIHtcclxuICAgICAgICBzZXRFcnJFbShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5hbWUgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICAgIHNldEVyclBhc3MoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge0xvZ2dlZGluICAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydCAxXCI+XHJcbiAgICAgICAgICAgICAgPGgyPk5vdXMgc2FsdW9ucyBsZSByZXRvdXIhPC9oMj5cclxuICAgICAgICAgICAgICA8cD5Wb3VzIMOqdGVzIGTDqWrDoCBjb25uZWN0w6kgZXQgc2VyZXogYmllbnTDtHQgcmVkaXJpZ8OpIHZlcnMgcGFnZSBkJ2FjY3VlaWwuPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybUZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgU2kgdm91cyBuJ8OqdGVzIHBhcyByZWRpcmlnw6kgYXV0b21hdGlxdWVtZW50IHN1aXZlejxMaW5rIGhyZWY9XCIvXCI+PGE+Y2UgbGllbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshTG9nZ2VkaW4gICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPkNvbm5lY3Rlei12b3VzPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtlbWFpbEVyciA/IFwiaW5wdXQgZXJyb3JcIiA6IFwiaW5wdXRcIn0gc3R5bGU9e3t3aWR0aCA6ICc4MCUnfX0gdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3VzZXJEYXRhLmVtYWlsfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17ZW1haWxFcnIgPyBcImVyck1zZ1wiIDogXCJoaWRkZW5cIn0+ZW1haWwgaW52YWxpZGU8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Nb2RlIGRlIHBhc3NlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtwYXNzd29yZEVyciA/IFwiaW5wdXQgZXJyb3JcIiA6IFwiaW5wdXRcIn0gc3R5bGU9e3t3aWR0aCA6ICc4MCUnfX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3VzZXJEYXRhLnBhc3N3b3JkfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3Bhc3N3b3JkRXJyID8gXCJlcnJNc2dcIiA6IFwiaGlkZGVuXCJ9Pm1vdCBkZSBwYXNzZSBpbmNvcnJlY3Q8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJTaWduQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2UgY29ubmVjdGVyXCIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvcm1Gb290ZXJcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5QYXMgZW5jb3JlIG1lbWJyZSA/PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5xdWVyeS5sb2NhdGlvbiAhPT0gdW5kZWZpbmVkICYmKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YFNpZ25VcD9sb2NhdGlvbj0ke2xvY2F0aW9ufWB9PjxhPkluc2NyaXZlei12b3VzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtwcm9wcy5xdWVyeS5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkICYmKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlNpZ25VcFwiPjxhPkluc2NyaXZlei12b3VzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29tcG9uZW50OyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHttZXNzYWdlICwgU2VsZWN0ICxUaW1lUGlja2VyICwgU3Bpbiwgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxyXG5pbXBvcnQgQ2FwdGNoYSBmcm9tICcuL2NhcHRjaGEnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UtY29uZmlnJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvQXV0b0NvbXBsZXRlLnNjc3MnO1xyXG5pbXBvcnQgQ2l0aWVzIGZyb20gJy4uL0RhdGEvQ2l0aWVzJztcclxuaW1wb3J0IEpvYnMgZnJvbSAnLi4vRGF0YS9Kb2JzJztcclxuaW1wb3J0IEZpZWxkcyBmcm9tICcuLi9EYXRhL0ZpZWxkcyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdhbnRkL2xpYi9tb2RhbC9Nb2RhbCc7XHJcbmltcG9ydCBUZXJtcyBmcm9tICcuL3Rlcm1zJztcclxuaW1wb3J0IFByaXZhY3kgZnJvbSAnLi9wcml2YWN5JztcclxuY29uc3QgRm9ybUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBSYW5nZVBpY2tlciB9ID0gVGltZVBpY2tlcjtcclxuICAgIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgRmllbGRzLm1hcChGaWVsZCA9PntcclxuICAgICAgICBjaGlsZHJlbi5wdXNoKDxPcHRpb24ga2V5PXtGaWVsZH0+e0ZpZWxkfTwvT3B0aW9uPik7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgLy8gdHlwZSBtdXN0IGJlIGVpdGhlciAnU29jacOpdMOpJyBvciAnQ2xpZW50JyAsIGlmIHlvdSBjaG5hZ2UgdGhlIHZhbHVlcyBiZSBzdXJlIHRvIGNoYW5nZSBpdCBpbiBiYWNrZW5kIHRvb1xyXG4gICAgICB0eXBlOiBcIlNvY2nDqXTDqVwiLFxyXG4gICAgICBlbWFpbCA6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkIDogXCJcIixcclxuICAgICAgbm9tIDogXCJcIixcclxuICAgICAgcHJlbm9tIDogXCJcIixcclxuICAgICAgY29tcGFueW5hbWU6IFwiXCIsXHJcbiAgICAgIHRpdGxlOiBcIkRpcmVjdGV1clwiLFxyXG4gICAgICBkb21haW5lOiBbXSxcclxuICAgICAgYWRkcmVzc2U6IFwiXCIsXHJcbiAgICAgIGNpdHk6IFwiQ2FzYWJsYW5jYVwiLFxyXG4gICAgICBtb2JpbGVwaG9uZTogXCJcIixcclxuICAgICAgZml4cGhvbmU6IFwiXCIsXHJcbiAgICAgIGdlbmRlcjogXCJtYWxlXCIsXHJcbiAgICAgIGhvcnJhaXJlOiBbXSxcclxuICAgIH07XHJcblxyXG4gICAgXHJcbiAgICAvLyBTdGF0ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdCAgW2xvYWRpbmcgLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0ICBbY2FwdGNoYVN0YXRlICwgc2V0Q2FwdGNoYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCAgW2N1cnJlbnQsc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0ICBbdXNlckRhdGEgLCBzZXREYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gICAgY29uc3QgIFtwcml2YWN5LHNldFByaXZhY3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgIFt0ZXJtcyxzZXRUZXJtc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBlcnJvcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuICAgIGNvbnN0ICBbZW1haWxFcnIgLCBzZXRFcnJFbV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0ICBbcGFzc3dvcmRFcnIsIHNldEVyclBhc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgIFtjb25maXJtcGFzcyAsIHNldEVyckNvbmZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgIFtkb21haW5lRXJyICwgc2V0RXJyZG9tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0ICBbaG9ycmFpcmVFcnIgLCBzZXRFcnJob3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgIFtjb2RlRXJyICwgc2V0Q29kZUVycl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCAgW3Bob25lRXJyICwgc2V0UGhvbmVFcnJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gcGFzc3dvcmQgY29uZmlybWF0aW9uXHJcbiAgICBjb25zdCAgW0NvbmZpcm1hdGlvbixzZXRDb25mXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgLy8gcGhvbmUgbnVtYmVyIGNvbmZpcm1hdGlvblxyXG4gICAgY29uc3QgIFtjb2RlVmVyaWYgLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgIFtjaGVja2JveCxzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCAgW3RpbWUgLCBzZXRUaW1lXSA9dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvY2F0aW9uICwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoXCIvXCIpO1xyXG4gICAgY29uc3QgW0xvZ2dlZGluICwgc2V0TG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBpZiAocHJvcHMucXVlcnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChwcm9wcy5xdWVyeS5yZWYgPT09IFwidG9rZW5leHBpcmVkXCIpIHtcclxuICAgICAgICAgIG1lc3NhZ2Uud2FybmluZygndmV1aWxsZXogZCBhYm9yZCB2b3VzIGNvbm5lY3RlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMucXVlcnkubG9jYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgc2V0TG9jYXRpb24ocHJvcHMucXVlcnkubG9jYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBheGlvcy5nZXQoJy9hcGkvcHJvZmlsZXMvbXlwcm9maWxlJyx7d2l0aENyZWRlbnRpYWxzIDogdHJ1ZX0pXHJcbiAgICAgIC50aGVuKHJlcyA9PnsgICAgICBcclxuICAgICAgICAgICAgc2V0TG9nKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIilcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7fSk7XHJcbiAgICB9LFtdKVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpPT57XHJcbiAgICAgICAgY29uc3QgIG5hbWUgPSBldmVudC50YXJnZXQubmFtZSA7XHJcbiAgICAgICAgY29uc3QgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlIDtcclxuICAgICAgICBzZXREYXRhKHsuLi51c2VyRGF0YSAsW25hbWVdIDogdmFsdWV9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgICAgICBzZXRFcnJFbShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcInBhc3N3b3JkXCIpIHtcclxuICAgICAgICAgIHNldEVyclBhc3MoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJtb2JpbGVwaG9uZVwiKSB7XHJcbiAgICAgICAgICBzZXRQaG9uZUVycihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDb25maXJtYXRpb24gPSAoZSk9PntcclxuICAgICAgICBzZXRDb25mKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRFcnJDb25mKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUaW1lID0odGltZSx0aW1lc3RyaW5nKT0+e1xyXG4gICAgICBjb25zdCBzdHJpbmcgPSB0aW1lc3RyaW5nIDtcclxuICAgICAgc2V0RGF0YSh7Li4udXNlckRhdGEgLCBob3JyYWlyZSA6IHN0cmluZ30pXHJcbiAgICAgIHNldFRpbWUodGltZSk7XHJcbiAgICAgIHNldEVycmhvcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVGFnID0odmFsdWUpPT57XHJcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlIDtcclxuICAgICAgc2V0RGF0YSh7Li4udXNlckRhdGEgLCBkb21haW5lIDogc3RyaW5nfSk7IFxyXG4gICAgICBzZXRFcnJkb20oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeWluZyBlbWFpbCBpZiBpdCBhbHJlYWR5IGV4aXN0IFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKT0+e1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBpID0gMCA7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7ZW1haWwgOiB1c2VyRGF0YS5lbWFpbH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3NpZ251cC92ZXJpZkVtYWlsXCIsIGJvZHkpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRFcnJFbSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIGkgPSAxIDtcclxuICAgICAgICBzZXRFcnJFbSh0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTsgXHJcbiAgICAgIFxyXG4gICAgICBpZiAodXNlckRhdGEucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgIHNldEVyclBhc3ModHJ1ZSk7XHJcbiAgICAgICAgaSA9IDM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKENvbmZpcm1hdGlvbiAhPT0gdXNlckRhdGEucGFzc3dvcmQpIHtcclxuICAgICAgICBzZXRFcnJDb25mKHRydWUpO1xyXG4gICAgICAgIGkgPSAzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGkgPT09IDApXHJcbiAgICAgIHtcclxuICAgICAgICBzZXRDdXJyZW50KDIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0MiA9IChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXdwaG9uZSA9IHVzZXJEYXRhLm1vYmlsZXBob25lLnJlcGxhY2UoMCxcIisyMTJcIik7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB2YXIgaG9sZCA9IGZhbHNlIDtcclxuICAgICAgICBpZiAodXNlckRhdGEuZG9tYWluZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHNldEVycmRvbSh0cnVlKTtcclxuICAgICAgICAgIGhvbGQgPSB0cnVlIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhLmhvcnJhaXJlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0RXJyaG9yKHRydWUpO1xyXG4gICAgICAgICAgaG9sZCA9IHRydWUgOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFwcFZlcmlmaWVyID0gd2luZG93LnJlY2FwdGNoYVZlcmlmaWVyO1xyXG4gICAgICAgIGlmIChjYXB0Y2hhU3RhdGUpIHtcclxuICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUGhvbmVOdW1iZXIobmV3cGhvbmUsIGFwcFZlcmlmaWVyKVxyXG4gICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjb25maXJtYXRpb25SZXN1bHQpIHtcclxuICAgICAgICAgICAgIC8vIFNNUyBzZW50LiBQcm9tcHQgdXNlciB0byB0eXBlIHRoZSBjb2RlIGZyb20gdGhlIG1lc3NhZ2UsIHRoZW4gc2lnbiB0aGVcclxuICAgICAgICAgICAgIC8vIHVzZXIgaW4gd2l0aCBjb25maXJtYXRpb25SZXN1bHQuY29uZmlybShjb2RlKS5cclxuICAgICAgICAgICAgICBpZiAoIWhvbGQgfHwgdXNlckRhdGEudHlwZSA9PT0gXCJDbGllbnRcIikge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50KDMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHdpbmRvdy5jb25maXJtYXRpb25SZXN1bHQgPSBjb25maXJtYXRpb25SZXN1bHQ7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIC8vY3VycmVudENvbXBvbmVudC5zZXRTdGF0ZSh7IHN1Ym1pdFN0YXRlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPT0gXCJhdXRoL3Rvby1tYW55LXJlcXVlc3RzXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldFBob25lRXJyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICBzZXRDYXB0Y2hhKGZhbHNlKTtcclxuICAgICAgICAgICAgICAvLyBFcnJvcjsgU01TIG5vdCBzZW50XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFwiYXV0aC90b28tbWFueS1yZXF1ZXN0c1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25bXCJlcnJvclwiXSh7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiAnYXV0aCAvIHRyb3AgZGUgcmVxdcOqdGVzJyxcclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiAnTm91cyBhdm9ucyBibG9xdcOpIHRvdXRlcyBsZXMgZGVtYW5kZXMgZGUgY2V0IGFwcGFyZWlsIGVuIHJhaXNvbiBkIHVuZSBhY3Rpdml0w6kgaW5oYWJpdHVlbGxlLiBSw6llc3NheWV6IHBsdXMgdGFyZC4nLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbiA6IDEwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlciA9IChib29sKSA9PntcclxuICAgICAgc2V0Q2FwdGNoYShib29sKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUxhc3RTdWJtaXQgPSgpPT4ge1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHZhciBjb2RlID0gY29kZVZlcmlmIDsgXHJcbiAgICAgIHdpbmRvdy5jb25maXJtYXRpb25SZXN1bHQuY29uZmlybShjb2RlKS50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvc2lnbnVwL1wiLCB1c2VyRGF0YSx7d2l0aENyZWRlbnRpYWxzIDogdHJ1ZX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL1NldHRpbmdzP2xvY2F0aW9uPSR7bG9jYXRpb259YCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50KDUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0Q3VycmVudCg1KTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKSA7XHJcbiAgICAgICAgICBzZXRDb2RlRXJyKHRydWUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvcm1Db250YWluZXJcIj5cclxuICAgICAgICAgIHshTG9nZ2VkaW4gJiYoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDE+SW5zY3JpdmV6LXZvdXM8L2gxPlxyXG4gICAgICAgICAgICB7LyogVHlwZSBkdSBjb21wdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL31cclxuICAgICAgICAgICAge2N1cnJlbnQgPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0IDFcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5DaG9pc2lzc2V6IGxlIHR5cGUgZGUgdm90cmUgY29tcHRlPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiBzZXRDdXJyZW50KDEpfT5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3RcIiBuYW1lPVwidHlwZVwiIHZhbHVlPXt1c2VyRGF0YS50eXBlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU29jacOpdMOpXCI+U29jacOpdMOpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNsaWVudFwiPkNsaWVudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlNpZ25CdXR0b24gbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VpdmFudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBCYXNpYyBJbmZvcm1hdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL31cclxuICAgICAgICAgICAge2N1cnJlbnQgPT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0IDFcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aXBsZUlucHV0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBHZW5kZXIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzbWFsbFwiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT17dXNlckRhdGEuZ2VuZGVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWxlXCIgIHNlbGVjdGVkPk1yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZW1hbGVcIiA+TW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOb20gZXQgcHJlbm9tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBjb250cm9sbGVkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbVwiIG5hbWU9XCJub21cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dXNlckRhdGEubm9tfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGNvbnRyb2xsZWRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJlbm9tXCIgbmFtZT1cInByZW5vbVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt1c2VyRGF0YS5wcmVub219IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW1haWwgYW5kIHRpdGxlIGZvciBjb21wYW5pZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEudHlwZSA9PT0gXCJTb2Npw6l0w6lcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlwbGVJbnB1dFwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUaXRsZSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e3VzZXJEYXRhLnRpdGxlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtKb2JzLm1hcChqb2I9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17am9ifSBrZXk9e2pvYn0+e2pvYn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEVtYWlsICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGggOiAnNjglJyAsIGRpc3BsYXkgOiAnZmxleCcgLCBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtlbWFpbEVyciA/IFwiZW1haWwgZXJyb3JcIiA6IFwiZW1haWxcIn0gIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dXNlckRhdGEuZW1haWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtlbWFpbEVyciA/IFwiZXJyTXNnXCIgOiBcImhpZGRlblwifT5FbWFpbCBhbHJlYWR5IGV4aXN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRW1haWwgZm9yIGNsaWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEudHlwZSA9PT0gXCJDbGllbnRcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb2x1bW5GTGV4Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtlbWFpbEVyciA/IFwiaW5wdXQgZXJyb3JcIiA6IFwiaW5wdXRcIn0gIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dXNlckRhdGEuZW1haWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2VtYWlsRXJyID8gXCJlcnJNc2dcIiA6IFwiaGlkZGVuXCJ9PkVtYWlsIGFscmVhZHkgZXhpc3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bHRpcGxlSW5wdXRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQ2l0eSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ0aXRsZVwiIG5hbWU9XCJjaXR5XCIgdmFsdWU9e3VzZXJEYXRhLmNpdHl9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q2l0aWVzLm1hcChjaXRpZSA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NpdGllfSBrZXk9e2NpdGllfT57Y2l0aWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBhZGRyZXNzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGFkZHJlc3NlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NlXCIgIG5hbWU9XCJhZGRyZXNzZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt1c2VyRGF0YS5hZGRyZXNzZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBhc3N3b3JkICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbHVtbkZMZXhDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtwYXNzd29yZEVyciA/IFwiaW5wdXQgZXJyb3JcIiA6IFwiaW5wdXRcIn0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJNb3QgZGUgcGFzc2VcIiAgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3VzZXJEYXRhLnBhc3N3b3JkfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cGFzc3dvcmRFcnIgPyBcImVyck1zZ1wiIDogXCJoaWRkZW5cIn0+bW90IGRlIHBhc3NlIGRvaXQgw6p0cmUgZCdhdSBtb2lucyA4IGNhcmFjdMOocmVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb25maXJhbXRpb24gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbHVtbkZMZXhDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NvbmZpcm1wYXNzID8gXCJpbnB1dCBlcnJvclwiIDogXCJpbnB1dFwifSB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm1leiB2b3RyZSBtb3QgZGUgcGFzc2VcIiB2YWx1ZT17Q29uZmlybWF0aW9ufSBvbkNoYW5nZT17aGFuZGxlQ29uZmlybWF0aW9ufSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y29uZmlybXBhc3MgPyBcImVyck1zZ1wiIDogXCJoaWRkZW5cIn0+bGEgY29uZmlybWF0aW9uIG4nZXN0IHBhcyBsYSBtw6ptZSBxdWUgbGUgbW90IGRlIHBhc3NlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJTaWduQnV0dG9uIG5leHRcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdWl2YW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgKX0gXHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgKDxTcGluIHNpemU9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPVwibmV4dFwiLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUHJlY2VkZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnQoMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuICAgICAgICAgICAge2N1cnJlbnQgPT0gMiAmJiB1c2VyRGF0YS50eXBlID09PSBcIlNvY2nDqXTDqVwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnQgMVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdDJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTm9tIGRlIHNvY2lldGUgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IHNvY1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb20gZGUgc29jacOpdMOpXCIgbmFtZT1cImNvbXBhbnluYW1lXCIgdmFsdWU9e3VzZXJEYXRhLmNvbXBhbnluYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29sdW1uRkxleENvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBEb21haW5lICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBtb2RlPVwidGFnc1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gcGxhY2Vob2xkZXI9XCJWb3RyZSBkb21haW5lIFwiIGNsYXNzTmFtZT17ZG9tYWluZUVyciA/IFwiZXJyb3JcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID17aGFuZGxlVGFnfSB2YWx1ZT17dXNlckRhdGEuZG9tYWluZX0gbWF4VGFnQ291bnQ9ezN9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2RvbWFpbmVFcnIgPyBcImVyck1zZ1wiIDogXCJoaWRkZW5cIn0+Q2UgY2hhbXAgZXN0IG9ibGlnYXRvaXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlwbGVJbnB1dCB0d29cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiBQaG9uZSBudW1iZXIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aCA6ICc0OCUnICwgZGlzcGxheSA6ICdmbGV4JyAsIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3Bob25lRXJyID8gXCJlbWFpbCBlcnJvclwiIDogXCJlbWFpbFwifSB0eXBlPVwidGVsXCIgbmFtZT1cIm1vYmlsZXBob25lXCIgcGxhY2Vob2xkZXI9XCJUw6lsw6lwaG9uZSBtb2JpbGUgfCBFeDowNnh4eHh4eHh4XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3VzZXJEYXRhLm1vYmlsZXBob25lfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cGhvbmVFcnIgPyBcImVyck1zZ1wiIDogXCJoaWRkZW5cIn0gPk51bWVybyBpbnZhbGlkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGggOiAnNDglJyAsIGRpc3BsYXkgOiAnZmxleCcgLCBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZW1haWxcIiB0eXBlPVwidGVsXCIgbmFtZT1cImZpeHBob25lXCIgcGxhY2Vob2xkZXI9XCJUw6lsw6lwaG9uZSBGaXggfCBFeDowNXh4eHh4eHh4XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3VzZXJEYXRhLmZpeHBob25lfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj48YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIEhvcnJhaXJlICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tjb2xvciA6ICcjMzE4Q0U3J319PkwnaG9yYWlyZSBkZSB2b3RyZSBzb2Npw6l0w6kgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbHVtbkZMZXhDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VQaWNrZXIgY2xhc3NOYW1lPXtob3JyYWlyZUVyciA/IFwiZXJyb3JcIiA6IFwiXCJ9IHN0eWxlPXt7d2lkdGggOiAnMTAwJSd9fSBib3JkZXJlZD17ZmFsc2V9IGZvcm1hdD0nSEg6bW0nICBtaW51dGVTdGVwPXszMH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGltZX0gb25DaGFuZ2U9e2hhbmRsZVRpbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtob3JyYWlyZUVyciA/IFwiZXJyTXNnXCIgOiBcImhpZGRlblwifT5DZSBjaGFtcCBlc3Qgb2JsaWdhdG9pcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiBDYXB0Y2hhICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Q2FwdGNoYSBoYW5kbGVyPXtoYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJihcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXshY2FwdGNoYVN0YXRlID8gIFwiZGlzYWJlbGVkQnV0dG9uIG5leHRcIjpcIlNpZ25CdXR0b24gbmV4dFwiIH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3VpdmFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmICg8U3BpbiBzaXplPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT1cIm5leHRcIi8+KX1cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlByZWNlZGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50KDEpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y3VycmVudCA9PSAyICYmIHVzZXJEYXRhLnR5cGUgPT09IFwiQ2xpZW50XCIgJiYoXHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdDJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb2x1bW5GTGV4Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3Bob25lRXJyID8gXCJpbnB1dCBlcnJvclwiIDogXCJpbnB1dFwifSB0eXBlPVwidGVsXCIgbmFtZT1cIm1vYmlsZXBob25lXCIgcGxhY2Vob2xkZXI9XCJNb2JpbGUgLkV4OjA2eHh4eHh4eHhcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dXNlckRhdGEubW9iaWxlcGhvbmV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cGhvbmVFcnIgPyBcImVyck1zZ1wiIDogXCJoaWRkZW5cIn0gPk51bWVybyBpbnZhbGlkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBDYXB0Y2hhICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICA8Q2FwdGNoYSBoYW5kbGVyPXtoYW5kbGVyfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJihcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXshY2FwdGNoYVN0YXRlID8gIFwiZGlzYWJlbGVkQnV0dG9uIG5leHRcIjpcIlNpZ25CdXR0b24gbmV4dFwiIH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3VpdmFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmICg8U3BpbiBzaXplPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT1cIm5leHRcIi8+KX1cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlByZWNlZGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50KDEpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjdXJyZW50ID09IDMgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydCAxXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+UG91ciB2b3RyZSBzw6ljdXJpdMOpICwgb24gdmV1dCBzJ2Fzc3VyZXIgcXUnaWwgcydhZ2l0IGJpZW4gZGUgdm91cyAuIE9uIHZvdXMgYSBlbnZvecOpIHVuIG1lc3NhZ2UgdGV4dCBhdmVjIFxyXG4gICAgICAgICAgICAgICAgICAgIHVuIGNvZGUgZGUgdsOpcmlmaWNhdGlvbiBhIDYgY2hpZmZyZXMgLiBMZXMgdGFyaWZzIHN0YW5kYXJkcyBzJ2FwcGxpcXVlbnQgLjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogQ29kZSB2ZXJpZmljYXRpb24gaW5wdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbHVtbkZMZXhDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NvZGVFcnIgPyBcImlucHV0IGVycm9yXCIgOiBcImlucHV0XCJ9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDb2RlIGRlIHZlcmlmaWNhdGlvblwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSk9PiB7c2V0Q29kZShlLnRhcmdldC52YWx1ZSk7O3NldENvZGVFcnIoZmFsc2UpO319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NvZGVFcnIgPyBcImVyck1zZ1wiIDogXCJoaWRkZW5cIn0+Q29kZSBpbnZhbGlkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIENoZWNrQm94IGlucHV0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlwbGVJbnB1dCB0d29cIiBzdHlsZT17e21hcmdpblRvcCA6ICcyNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJcIiB0eXBlPVwiY2hlY2tib3hcIiByZXF1aXJlZCAgY2hlY2tlZD17Y2hlY2tib3h9IG9uQ2hhbmdlPXsoZSk9PiB7c2V0Q2hlY2soZS50YXJnZXQuY2hlY2tlZCl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7bWFyZ2luTGVmdCA6ICcyNXB4J319PkxhIGNyw6lhdGlvbiBkJ3VuIGNvbXB0ZSBzaWduaWZpZSBxdWUgdm91cyDDqXRlcyBkJ2FjY29yZCBhdmVjIG5vcyA8YSBvbkNsaWNrPXsoKT0+c2V0VGVybXModHJ1ZSl9IHRhcmdldD1cIl9ibGFua1wiPkNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAsIG5vdHJlIDxhIG9uQ2xpY2s9eygpPT5zZXRQcml2YWN5KHRydWUpfSB0YXJnZXQ9XCJfYmxhY2tcIj5wb2xpdGlxdWUgZGUgY29uZmlkZW50aWFsaXTDqTwvYT4gZXQgbm9zIHBhcmFtw6h0cmVzIGRlIG5vdGlmaWNhdGlvbiBwYXIgZGVmYXV0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICB7LyogUHJpdmFjeSAqL31cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsICB0aXRsZT1cIlwiIHZpc2libGU9e3Rlcm1zfSB3aWR0aD1cIjkwJVwiIGJvZHlTdHlsZT17e2hlaWdodDogJzcwdmgnICwgb3ZlcmZsb3dZIDogJ3Njcm9sbCd9fSBvbkNhbmNlbD17KCk9PnNldFRlcm1zKGZhbHNlKX0gZm9vdGVyPXtudWxsfT48VGVybXMvPjwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbCAgdGl0bGU9XCJcIiB2aXNpYmxlPXtwcml2YWN5fSB3aWR0aD1cIjkwJVwiIGJvZHlTdHlsZT17e2hlaWdodDogJzcwdmgnICwgb3ZlcmZsb3dZIDogJ3Njcm9sbCd9fSBvbkNhbmNlbD17KCk9PnNldFByaXZhY3koZmFsc2UpfSBmb290ZXI9e251bGx9PjxQcml2YWN5Lz48L01vZGFsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfSAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJihcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29kZVZlcmlmLmxlbmd0aCAhPT0gNiB8fCAhY2hlY2tib3ggPyAgXCJkaXNhYmVsZWRCdXR0b24gbmV4dFwiOlwiU2lnbkJ1dHRvbiBuZXh0XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y29kZVZlcmlmLmxlbmd0aCAhPT0gNiB8fCAhY2hlY2tib3h9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYXN0U3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgID5TdWl2YW50PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gXHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgKDxTcGluIHNpemU9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPVwibmV4dFwiLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUHJlY2VkZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRDdXJyZW50KDIpLHNldENhcHRjaGEoZmFsc2UpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2N1cnJlbnQgPT0gNSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0IDFcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5TbXRobmcgd2VudCB3cm9uZyDwn5iS8J+YkiA8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RMOpasOgIG1lbWJyZSA/PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJTaWduaW5cIj48YT5Db25uZWN0ZXotdm91czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7TG9nZ2VkaW4gICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0IDFcIj5cclxuICAgICAgICAgICAgICA8aDI+Tm91cyBzYWx1b25zIGxlIHJldG91ciE8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPlZvdXMgw6p0ZXMgZMOpasOgIGNvbm5lY3TDqSBldCBzZXJleiBiaWVudMO0dCByZWRpcmlnw6kgdmVycyBwYWdlIGQnYWNjdWVpbC48L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtRm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTaSB2b3VzIG4nw6p0ZXMgcGFzIHJlZGlyaWfDqSBhdXRvbWF0aXF1ZW1lbnQgc3VpdmV6PExpbmsgaHJlZj1cIi9cIj48YT5jZSBsaWVuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbXBvbmVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UtY29uZmlnJztcclxucmVxdWlyZSgnZmlyZWJhc2UvYXV0aCcpXHJcbmNsYXNzIENhcHRjaGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5Mb2FkQ2FwdGNoYSA9IHRoaXMuTG9hZENhcHRjaGEuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTG9hZENhcHRjaGEoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cub25sb2FkID0gdGhpcy5sb2FkUmVjYXB0Y2hhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIExvYWRDYXB0Y2hhID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5sYW5ndWFnZUNvZGUgPSAnZW4nO1xyXG4gICAgICAgIGxldCBjb21wID0gdGhpcyA7XHJcbiAgICAgICAgd2luZG93LnJlY2FwdGNoYVZlcmlmaWVyID0gbmV3IGZpcmViYXNlLmF1dGguUmVjYXB0Y2hhVmVyaWZpZXIoJ3JlY2FwdGNoYScsIHtcclxuICAgICAgICAgICAgJ3NpemUnOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgJ2NhbGxiYWNrJzogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wLnByb3BzLmhhbmRsZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdleHBpcmVkLWNhbGxiYWNrJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29tcC5wcm9wcy5oYW5kbGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhwaXJlZFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnJlY2FwdGNoYVZlcmlmaWVyLnJlbmRlcigpLnRoZW4oZnVuY3Rpb24gKFdpZGdldElEKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZWNhcHRjaGFXaWRnZXRJZCA9IFdpZGdldElEIDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVjYXB0Y2hhXCJcclxuICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDYXB0Y2hhOyIsImNvbnN0IEhlYWRlckF1dGggPSAoKSA9PiB7XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvbkNvbnRhaW5lclwiIG9uQ2xpY2s9eygpPT53aW5kb3cubG9jYXRpb24uYXNzaWduKFwiL1wiKX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0IGljb25cIj48L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCI+UmV0b3VyPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkhlbHBcIj5BaWRlPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQXV0aDsiLCJcclxuY29uc3QgTGVmdENvbXBvbmVudCA9ICgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNwbGl0IExlZnRTaWRlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9zdGF0aWMvSWNvbnMvTE9HTzIwMTcucG5nXCIgaGVpZ2h0PVwiMzBcIiBvbkNsaWNrPXsoKT0+d2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpfSAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExlZnRDb21wb25lbnQgOyIsImNvbnN0IHByaXZhY3kgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpdmFjeVwiPlxyXG4gICAgICAgICAgICA8aDE+UHJpdmFjeSBQb2xpY3k8L2gxPlxyXG4gICAgICAgICAgICA8aDI+VGl0bGUgZ29lcyBoZXJlPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFZlcnVtIGFkIGlzdGFtIG9tbmVtIG9yYXRpb25lbSBicmV2aXMgZXN0IGRlZmVuc2lvLiBOYW0gcXVvYWQgYWV0YXMgTS5cclxuICAgICAgICAgICAgQ2FlbGkgZGFyZSBwb3R1aXQgaXN0aSBzdXNwaWNpb25pIGxvY3VtLCBmdWl0IHByaW11bSBpcHNpdXMgcHVkb3JlLFxyXG4gICAgICAgICAgICBkZWluZGUgZXRpYW0gcGF0cmlzIGRpbGlnZW50aWEgZGlzY2lwbGluYXF1ZSBtdW5pdGEuIFF1aSB1dCBodWljXHJcbiAgICAgICAgICAgIHZpcmlsZW0gdG9nYW0gZGVkaXTFoW5paGlsIGRpY2FtIGhvYyBsb2NvIGRlIG1lOyB0YW50dW0gc2l0LCBxdWFudHVtXHJcbiAgICAgICAgICAgIHZvcyBleGlzdGltYXRpczsgaG9jIGRpY2FtLCBodW5jIGEgcGF0cmUgY29udGludW8gYWQgbWUgZXNzZSBkZWR1Y3R1bTtcclxuICAgICAgICAgICAgbmVtbyBodW5jIE0uIENhZWxpdW0gaW4gaWxsbyBhZXRhdGlzIGZsb3JlIHZpZGl0IG5pc2kgYXV0IGN1bSBwYXRyZVxyXG4gICAgICAgICAgICBhdXQgbWVjdW0gYXV0IGluIE0uIENyYXNzaSBjYXN0aXNzaW1hIGRvbW8sIGN1bSBhcnRpYnVzIGhvbmVzdGlzc2ltaXNcclxuICAgICAgICAgICAgZXJ1ZGlyZXR1ci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHByaXZhY3kgOyIsImNvbnN0IHRlcm1zID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXNcIj5cclxuICAgICAgICA8aDE+Q29uZGl0aW9uIGQndXRpbGlzYXRpb248L2gxPlxyXG4gICAgICAgIDxoMj5UaXRsZSBnb2VzIGhlcmU8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVmVydW0gYWQgaXN0YW0gb21uZW0gb3JhdGlvbmVtIGJyZXZpcyBlc3QgZGVmZW5zaW8uIE5hbSBxdW9hZCBhZXRhcyBNLlxyXG4gICAgICAgICAgQ2FlbGkgZGFyZSBwb3R1aXQgaXN0aSBzdXNwaWNpb25pIGxvY3VtLCBmdWl0IHByaW11bSBpcHNpdXMgcHVkb3JlLFxyXG4gICAgICAgICAgZGVpbmRlIGV0aWFtIHBhdHJpcyBkaWxpZ2VudGlhIGRpc2NpcGxpbmFxdWUgbXVuaXRhLiBRdWkgdXQgaHVpY1xyXG4gICAgICAgICAgdmlyaWxlbSB0b2dhbSBkZWRpdMWhbmloaWwgZGljYW0gaG9jIGxvY28gZGUgbWU7IHRhbnR1bSBzaXQsIHF1YW50dW1cclxuICAgICAgICAgIHZvcyBleGlzdGltYXRpczsgaG9jIGRpY2FtLCBodW5jIGEgcGF0cmUgY29udGludW8gYWQgbWUgZXNzZSBkZWR1Y3R1bTtcclxuICAgICAgICAgIG5lbW8gaHVuYyBNLiBDYWVsaXVtIGluIGlsbG8gYWV0YXRpcyBmbG9yZSB2aWRpdCBuaXNpIGF1dCBjdW0gcGF0cmVcclxuICAgICAgICAgIGF1dCBtZWN1bSBhdXQgaW4gTS4gQ3Jhc3NpIGNhc3Rpc3NpbWEgZG9tbywgY3VtIGFydGlidXMgaG9uZXN0aXNzaW1pc1xyXG4gICAgICAgICAgZXJ1ZGlyZXR1ci5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgyPlRpdGxlIGdvZXMgaGVyZTwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBWZXJ1bSBhZCBpc3RhbSBvbW5lbSBvcmF0aW9uZW0gYnJldmlzIGVzdCBkZWZlbnNpby4gTmFtIHF1b2FkIGFldGFzIE0uXHJcbiAgICAgICAgICBDYWVsaSBkYXJlIHBvdHVpdCBpc3RpIHN1c3BpY2lvbmkgbG9jdW0sIGZ1aXQgcHJpbXVtIGlwc2l1cyBwdWRvcmUsXHJcbiAgICAgICAgICBkZWluZGUgZXRpYW0gcGF0cmlzIGRpbGlnZW50aWEgZGlzY2lwbGluYXF1ZSBtdW5pdGEuIFF1aSB1dCBodWljXHJcbiAgICAgICAgICB2aXJpbGVtIHRvZ2FtIGRlZGl0xaFuaWhpbCBkaWNhbSBob2MgbG9jbyBkZSBtZTsgdGFudHVtIHNpdCwgcXVhbnR1bVxyXG4gICAgICAgICAgdm9zIGV4aXN0aW1hdGlzOyBob2MgZGljYW0sIGh1bmMgYSBwYXRyZSBjb250aW51byBhZCBtZSBlc3NlIGRlZHVjdHVtO1xyXG4gICAgICAgICAgbmVtbyBodW5jIE0uIENhZWxpdW0gaW4gaWxsbyBhZXRhdGlzIGZsb3JlIHZpZGl0IG5pc2kgYXV0IGN1bSBwYXRyZVxyXG4gICAgICAgICAgYXV0IG1lY3VtIGF1dCBpbiBNLiBDcmFzc2kgY2FzdGlzc2ltYSBkb21vLCBjdW0gYXJ0aWJ1cyBob25lc3Rpc3NpbWlzXHJcbiAgICAgICAgICBlcnVkaXJldHVyLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aDI+VGl0bGUgZ29lcyBoZXJlPC9oMj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFZlcnVtIGFkIGlzdGFtIG9tbmVtIG9yYXRpb25lbSBicmV2aXMgZXN0IGRlZmVuc2lvLiBOYW0gcXVvYWQgYWV0YXMgTS5cclxuICAgICAgICAgIENhZWxpIGRhcmUgcG90dWl0IGlzdGkgc3VzcGljaW9uaSBsb2N1bSwgZnVpdCBwcmltdW0gaXBzaXVzIHB1ZG9yZSxcclxuICAgICAgICAgIGRlaW5kZSBldGlhbSBwYXRyaXMgZGlsaWdlbnRpYSBkaXNjaXBsaW5hcXVlIG11bml0YS4gUXVpIHV0IGh1aWNcclxuICAgICAgICAgIHZpcmlsZW0gdG9nYW0gZGVkaXTFoW5paGlsIGRpY2FtIGhvYyBsb2NvIGRlIG1lOyB0YW50dW0gc2l0LCBxdWFudHVtXHJcbiAgICAgICAgICB2b3MgZXhpc3RpbWF0aXM7IGhvYyBkaWNhbSwgaHVuYyBhIHBhdHJlIGNvbnRpbnVvIGFkIG1lIGVzc2UgZGVkdWN0dW07XHJcbiAgICAgICAgICBuZW1vIGh1bmMgTS4gQ2FlbGl1bSBpbiBpbGxvIGFldGF0aXMgZmxvcmUgdmlkaXQgbmlzaSBhdXQgY3VtIHBhdHJlXHJcbiAgICAgICAgICBhdXQgbWVjdW0gYXV0IGluIE0uIENyYXNzaSBjYXN0aXNzaW1hIGRvbW8sIGN1bSBhcnRpYnVzIGhvbmVzdGlzc2ltaXNcclxuICAgICAgICAgIGVydWRpcmV0dXIuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxoMj5UaXRsZSBnb2VzIGhlcmU8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVmVydW0gYWQgaXN0YW0gb21uZW0gb3JhdGlvbmVtIGJyZXZpcyBlc3QgZGVmZW5zaW8uIE5hbSBxdW9hZCBhZXRhcyBNLlxyXG4gICAgICAgICAgQ2FlbGkgZGFyZSBwb3R1aXQgaXN0aSBzdXNwaWNpb25pIGxvY3VtLCBmdWl0IHByaW11bSBpcHNpdXMgcHVkb3JlLFxyXG4gICAgICAgICAgZGVpbmRlIGV0aWFtIHBhdHJpcyBkaWxpZ2VudGlhIGRpc2NpcGxpbmFxdWUgbXVuaXRhLiBRdWkgdXQgaHVpY1xyXG4gICAgICAgICAgdmlyaWxlbSB0b2dhbSBkZWRpdMWhbmloaWwgZGljYW0gaG9jIGxvY28gZGUgbWU7IHRhbnR1bSBzaXQsIHF1YW50dW1cclxuICAgICAgICAgIHZvcyBleGlzdGltYXRpczsgaG9jIGRpY2FtLCBodW5jIGEgcGF0cmUgY29udGludW8gYWQgbWUgZXNzZSBkZWR1Y3R1bTtcclxuICAgICAgICAgIG5lbW8gaHVuYyBNLiBDYWVsaXVtIGluIGlsbG8gYWV0YXRpcyBmbG9yZSB2aWRpdCBuaXNpIGF1dCBjdW0gcGF0cmVcclxuICAgICAgICAgIGF1dCBtZWN1bSBhdXQgaW4gTS4gQ3Jhc3NpIGNhc3Rpc3NpbWEgZG9tbywgY3VtIGFydGlidXMgaG9uZXN0aXNzaW1pc1xyXG4gICAgICAgICAgZXJ1ZGlyZXR1ci5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgyPlRpdGxlIGdvZXMgaGVyZTwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBWZXJ1bSBhZCBpc3RhbSBvbW5lbSBvcmF0aW9uZW0gYnJldmlzIGVzdCBkZWZlbnNpby4gTmFtIHF1b2FkIGFldGFzIE0uXHJcbiAgICAgICAgICBDYWVsaSBkYXJlIHBvdHVpdCBpc3RpIHN1c3BpY2lvbmkgbG9jdW0sIGZ1aXQgcHJpbXVtIGlwc2l1cyBwdWRvcmUsXHJcbiAgICAgICAgICBkZWluZGUgZXRpYW0gcGF0cmlzIGRpbGlnZW50aWEgZGlzY2lwbGluYXF1ZSBtdW5pdGEuIFF1aSB1dCBodWljXHJcbiAgICAgICAgICB2aXJpbGVtIHRvZ2FtIGRlZGl0xaFuaWhpbCBkaWNhbSBob2MgbG9jbyBkZSBtZTsgdGFudHVtIHNpdCwgcXVhbnR1bVxyXG4gICAgICAgICAgdm9zIGV4aXN0aW1hdGlzOyBob2MgZGljYW0sIGh1bmMgYSBwYXRyZSBjb250aW51byBhZCBtZSBlc3NlIGRlZHVjdHVtO1xyXG4gICAgICAgICAgbmVtbyBodW5jIE0uIENhZWxpdW0gaW4gaWxsbyBhZXRhdGlzIGZsb3JlIHZpZGl0IG5pc2kgYXV0IGN1bSBwYXRyZVxyXG4gICAgICAgICAgYXV0IG1lY3VtIGF1dCBpbiBNLiBDcmFzc2kgY2FzdGlzc2ltYSBkb21vLCBjdW0gYXJ0aWJ1cyBob25lc3Rpc3NpbWlzXHJcbiAgICAgICAgICBlcnVkaXJldHVyLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRlcm1zIDsiLCJtb2R1bGUuZXhwb3J0cyA9IFtcIkNhc2FibGFuY2FcIlxyXG4sXCJGZXNcIlxyXG4sXCJUYW5naWVyXCJcclxuLFwiTWFycmFrZXNoXCJcclxuLFwiU2Fsw6lcIlxyXG4sXCJNZWtuZXNcIlxyXG4sXCJSYWJhdFwiXHJcbixcIk91amRhXCJcclxuLFwiS2VuaXRyYVwiXHJcbixcIkFnYWRpclwiXHJcbixcIlNvdXNzIE1hc3NhXCJcclxuLFwiVGV0b3VhblwiXHJcbixcIlRlbWFyYVwiXHJcbixcIlNhZmlcIlxyXG4sXCJNb2hhbW1lZGlhXCJcclxuLFwiS2hvdXJpYmdhXCJcclxuLFwiRWwgSmFkaWRhXCJcclxuLFwiQmVuaSBNZWxsYWxcIlxyXG4sXCJBw690IE1lbGxvdWxcIlxyXG4sXCJOYWRvclwiXHJcbixcIkRhciBCb3VhenphXCJcclxuLFwiVGF6YVwiXHJcbixcIlNldHRhdFwiXHJcbixcIkJlcnJlY2hpZFwiXHJcbixcIktoZW1pc3NldFwiXHJcbixcIkluZXpnYW5lXCJcclxuLFwiS3NhciBFbCBLZWJpclwiXHJcbixcIkxhcmFjaGVcIlxyXG4sXCJHdWVsbWltXCJcclxuLFwiS2hlbmlmcmFcIlxyXG4sXCJCZXJrYW5lXCJcclxuLFwiVGFvdXJpcnRcIlxyXG4sXCJCb3Vza291cmFcIlxyXG4sXCJGcXVpaFwiXHJcbixcIkJlbiBTYWxhaFwiXHJcbixcIkRjaGVpcmFcIlxyXG4sXCJFbCBKaWhhZGlhXCJcclxuLFwiT3VlZCBaZW1cIlxyXG4sXCJNYXJyYWtlc2gtU2FmaVwiXHJcbixcIlNpZGkgU2xpbWFuZVwiXHJcbixcIkVycmFjaGlkaWFcIlxyXG4sXCJHdWVyY2lmXCJcclxuLFwiT3VsYWQgVGVpbWFcIlxyXG4sXCJCZW4gR3VlcmlyXCJcclxuLFwiVGlmZWx0XCJcclxuLFwiTHFsaWFhXCJcclxuLFwiVGFyb3VkYW50XCJcclxuLFwiU2Vmcm91XCJcclxuLFwiRXNzYW91aXJhXCJcclxuLFwiRm5pZGVxXCJcclxuLFwiU2lkaSBLYWNlbVwiXHJcbixcIlRpem5pdFwiXHJcbixcIlRhbi1UYW5cIlxyXG4sXCJPdWFyemF6YXRlXCJcclxuLFwiU291a0VsQXJiYWFcIlxyXG4sXCJZb3Vzc291ZmlhXCJcclxuLFwiTGFocmFvdXlpbmVcIlxyXG4sXCJNYXJ0aWxcIlxyXG4sXCJBaW5IYXJyb3VkYVwiXHJcbixcIlN1cWFzLVNhYnRBd2xhZGFuTmFtYVwiXHJcbixcIlNraGlyYXRcIlxyXG4sXCJPdWF6emFuZVwiXHJcbixcIkJlbnNsaW1hbmVcIlxyXG4sXCJBbEhvY2VpbWFcIlxyXG4sXCJCZW5pQW5zYXJcIlxyXG4sXCJNZGlxXCJcclxuLFwiU2lkaUJlbm5vdXJcIlxyXG4sXCJNaWRlbHRcIlxyXG4sXCJBenJvdVwiXHJcbixcIkRyYXJndWFcIl0iLCJtb2R1bGUuZXhwb3J0cyA9IFtcIkFncmljdWx0dXJlXCJcclxuLFwiQWdyb2FsaW1lbnRhaXJlXCJcclxuLFwiQWxpbWVudGF0aW9uXCJcclxuLFwiQW5pbWF1eFwiXHJcbixcIkFyY2hpdGVjdHVyZSAtIEFtw6luYWdlbWVudCBpbnTDqXJpZXVyXCJcclxuLFwiQXJ0aXNhbmF0IC0gTcOpdGllcnMgZCdhcnRcIlxyXG4sXCJCYW5xdWUgLSBGaW5hbmNlIC0gQXNzdXJhbmNlXCJcclxuLFwiQsOidGltZW50IC0gVHJhdmF1eCBwdWJsaWNzXCJcclxuLFwiQmlvbG9naWUgLSBDaGltaWVcIlxyXG4sXCJDb21tZXJjZSAtIEltbW9iaWxpZXJcIlxyXG4sXCJDb21tdW5pY2F0aW9uIC0gSW5mb3JtYXRpb25cIlxyXG4sXCJDdWx0dXJlIC0gU3BlY3RhY2xlXCJcclxuLFwiRMOpZmVuc2UgLSBTw6ljdXJpdMOpIC0gU2Vjb3Vyc1wiXHJcbixcIkRyb2l0XCJcclxuLFwiRWRpdGlvbiAtIEltcHJpbWVyaWUgLSBMaXZyZVwiXHJcbixcIkVsZWN0cm9uaXF1ZSAtIEluZm9ybWF0aXF1ZVwiXHJcbixcIkVuc2VpZ25lbWVudCAtIEZvcm1hdGlvblwiXHJcbixcIkh1bWFuaXRhaXJlXCJcclxuLFwiSW5kdXN0cmllIC0gTWF0w6lyaWF1eFwiXHJcbixcIkxldHRyZXMgLSBTY2llbmNlcyBodW1haW5lc1wiXHJcbixcIk3DqWNhbmlxdWUgLSBNYWludGVuYW5jZVwiXHJcbixcIlNhbnTDqVwiXHJcbixcIlNjaWVuY2VzIC0gTWF0aHMgLSBQaHlzaXF1ZVwiXHJcbixcIlNlY3LDqXRhcmlhdCAtIEFjY3VlaWxcIlxyXG4sXCJTb2NpYWwgLSBTZXJ2aWNlcyDDoCBsYSBwZXJzb25uZVwiXHJcbixcIlNvaW5zIC0gRXN0aMOpdGlxdWUgLSBDb2lmZnVyZVwiXHJcbixcIlNwb3J0IC0gQW5pbWF0aW9uIFwiXHJcbixcIlRyYW5zcG9ydCAtIExvZ2lzdGlxdWVcIlxyXG5dOyIsIm1vZHVsZS5leHBvcnRzPSBbXHJcbixcIlByw6lzaWRlbnQgRGlyZWN0ZXVyLUfDqW7DqXJhbCAoUERHKVwiXHJcbixcIkRpcmVjdGV1ciBkZXMgb3DDqXJhdGlvbnMgKENPTylcIlxyXG4sXCJEaXJlY3RldXIgZmluYW5jaWVyIChDRk8pIG91IGNvbnRyw7RsZXVyXCJcclxuLFwiRGlyZWN0ZXVyIG1hcmtldGluZyAoQ01PKVwiXHJcbixcIkRpcmVjdGV1ciBkZSBsYSB0ZWNobm9sb2dpZSAoQ1RPKVwiXHJcbixcIlByw6lzaWRlbnRcIlxyXG4sXCJWaWNlIHByw6lzaWRlbnRcIlxyXG4sXCJBc3Npc3RhbnQgZXjDqWN1dGlmXCJcclxuLFwiUmVzcG9uc2FibGUgbWFya2V0aW5nXCJcclxuLFwiQ2hlZiBkZSBwcm9kdWl0XCJcclxuLFwiR2VzdGlvbm5haXJlIGRlIHByb2pldFwiXHJcbixcIlJlc3BvbnNhYmxlIGRlcyBmaW5hbmNlc1wiXHJcbixcIkRpcmVjdGV1ciBkZXMgUmVzc291cmNlcyBIdW1haW5lc1wiXHJcbixcIlNww6ljaWFsaXN0ZSBlbiBtYXJrZXRpbmdcIlxyXG4sXCJBbmFseXN0ZSBkJ2FmZmFpcmVzXCJcclxuLFwiUGVyc29ubmVsIGRlcyByZXNzb3VyY2VzIGh1bWFpbmVzXCJcclxuLFwiQ29tcHRhYmxlXCJcclxuLFwiQ29tbWVyY2lhbFwiXHJcbixcIlJlcHLDqXNlbnRhbnQgZHUgc2VydmljZSDDoCBsYSBjbGllbnTDqGxlXCJcclxuLFwiYXNzaXN0YW50IGFkbWluaXN0cmF0aWZcIl0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG52YXIgY29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEM0hXQl93eVpoOVZSdjdjclFjN1NpNklSZ094UU5SS2dcIixcclxuICBhdXRoRG9tYWluOiBcImhlcm9rdWFwcC1hNDViNC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiaGVyb2t1YXBwLWE0NWI0XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJoZXJva3VhcHAtYTQ1YjQuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0Mzc3NjMxODI3NjlcIixcclxuICBhcHBJZDogXCIxOjQzNzc2MzE4Mjc2OTp3ZWI6NGEzYjU1NmI5NTU3NTlhYTBjOTI5MFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy00NzQyMUNKNTVXXCJcclxufTtcclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufVxyXG5cclxudmFyIHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbmV4cG9ydCB7IHN0b3JhZ2UsIGZpcmViYXNlIGFzIGRlZmF1bHQgfTtcclxuIiwiaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XG5jb25zdCBkZWZhdWx0S2V5d29yZHMgPSAnJztcbmNvbnN0IGRlZmF1bHRPR1VSTCA9ICcnO1xuY29uc3QgZGVmYXVsdE9HSW1hZ2UgPSAnJztcblxuY29uc3QgSGVhZCA9IChwcm9wcykgPT4gKFxuICA8TmV4dEhlYWQ+XG4gICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICA8dGl0bGU+e3Byb3BzLnRpdGxlIHx8IFwiXCJ9PC90aXRsZT5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDxtZXRhXG4gICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgIC8+XG4gICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17cHJvcHMua2V5d29yZHMgfHwgZGVmYXVsdEtleXdvcmRzfSAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJpY29uXCJcbiAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28uaWNvXCJcbiAgICAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJpY29uXCJcbiAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28uaWNvXCJcbiAgICAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAvPlxuICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28uaWNvXCIgLz5cbiAgICA8bGlua1xuICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgaHJlZj1cIi9zdGF0aWMvSWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxuICAgIC8+XG4gICAgPGxpbmtcbiAgICAgIHJlbD1cIm1hc2staWNvblwiXG4gICAgICBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28ucG5nXCJcbiAgICAgIGNvbG9yPVwiIzAwMDAwMFwiXG4gICAgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlIHx8IFwiXCJ9IC8+XG4gICAgPG1ldGFcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgIC8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MzBcIiAvPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2EwNzZkMDUzOTkuanNcIiAvPlxuICA8L05leHRIZWFkPlxuKTtcblxuSGVhZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGtleXdvcmRzOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBvZ0ltYWdlOiBzdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWQ7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucywgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UsIGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgZnJvbSB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgcGFnZSAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZnVuY3Rpb24gaXNMb2NhbCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgaWYgKFxuICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICBlLm1ldGFLZXkgfHxcbiAgICAgIGUuY3RybEtleSB8fFxuICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtyb3V0ZXIucGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKG9wdGlvbnMuX05fWCwgb3B0aW9ucy5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Q6IChzdGF0dXNPclVybDogc3RyaW5nIHwgbnVtYmVyLCB1cmw/OiBzdHJpbmcpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0ICcuLi9TYXNzL0F1dGguc2NzcydcclxuaW1wb3J0IExlZnRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BdXRoX0NvbXBvbmVudHMvbGVmdEltYWdlJ1xyXG5pbXBvcnQgUmlnaHRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BdXRoX0NvbXBvbmVudHMvUmlnaHRDb21wb25lbnQnXHJcbmltcG9ydCBIZWFkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZCdcclxuY29uc3QgU2lnbmluID0gKHtxdWVyeX0pPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkIHRpdGxlPVwiQ29ubmVjdGV6LXZvdXMgfCA2IHNvbHV0aW9uc1wiIC8+XHJcbiAgICAgICAgPExlZnRDb21wb25lbnQgLz5cclxuICAgICAgICA8UmlnaHRDb21wb25lbnQgdGl0bGU9XCJzaWduaW5cIiBxdWVyeT17cXVlcnl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5TaWduaW4uZ2V0SW5pdGlhbFByb3BzID0gICh7IHF1ZXJ5IH0pID0+IHtcclxuICByZXR1cm4ge3Byb3BzIDogW3t0ZXN0IDogXCJ0aGlzIGlzIGEgdGVzdFwifV0gLCBxdWVyeSA6IHF1ZXJ5fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25pbiA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tb2RhbC9Nb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==