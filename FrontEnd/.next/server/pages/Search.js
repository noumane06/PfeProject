module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z4yd");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8f9s":
/***/ (function(module, exports) {



/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F2Qd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const SearchCard = props => {
  const {
    0: isFull,
    1: setFulltext
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.profile !== '' ? props.profile.presentation.length < 150 : '');
  let value = "";

  if (props.profile !== '') {
    props.profile.presentation.length > 150 ? value = "...en voir plus" : '';
  }

  return __jsx("div", {
    className: props.className
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
    loading: props.loading,
    active: true,
    avatar: true,
    round: true
  }, props.profile !== '' && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "Card_Head"
  }, __jsx("div", {
    className: "ProfileImg"
  }, __jsx("img", {
    src: props.profile.Usrimg
  })), __jsx("div", {
    className: "ProfileInfo"
  }, __jsx("h3", null, props.profile.companyname), __jsx("p", null, props.profile.city), __jsx("span", null, props.profile.stars.length, " J'aime"))), __jsx("div", {
    className: "jsx-372113139" + " " + "Card_Body"
  }, __jsx("h3", {
    className: "jsx-372113139"
  }, "A propos "), __jsx("p", {
    className: "jsx-372113139"
  }, !isFull ? props.profile.presentation.substr(0, 150) : props.profile.presentation, !isFull ? __jsx("span", {
    onClick: () => setFulltext(true),
    className: "jsx-372113139" + " " + "more"
  }, "Voir plus") : ""), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "372113139"
  }, [".more.jsx-372113139{font-style:italic;color:#0C72BF;}", ".more.jsx-372113139:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}"])), __jsx("div", {
    className: "Card_footer"
  }, props.profile._id !== undefined && __jsx("a", {
    className: "button",
    href: `/Profiles/${props.profile._id}`
  }, "Voir profile"), props.profile._id === undefined && __jsx("button", {
    className: "button"
  }, "Voir profile")))));
};

/* harmony default export */ __webpack_exports__["a"] = (SearchCard);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "I2Is":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZJTA");
/* harmony import */ var _styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fN3F");
/* harmony import */ var _styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const SearchBar = ({
  searchItem
}) => {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"];
  const {
    0: nameOptions,
    1: setOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: Names,
    1: setNames
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: CityOptions,
    1: setCityOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: DomaineOptions,
    1: setDomaineOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: nameText,
    1: setNametext
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: domaineText,
    1: setdomainetext
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: cityText,
    1: setcitytext
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const checker = array => {
    var els = [];
    array.map(element => element.domaine.map(dom => {
      els.includes(dom) ? 'null' : els.push(dom);
    }));
    return els;
  };

  const onSearchName = searchText => {
    setNametext(searchText);
    const Url = '/api/profiles/search?companyname=' + nameText + '&domaine=' + domaineText + '&city=' + cityText + '&page=1';
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(Url).then(({
      data
    }) => {
      if (data !== undefined) {
        setNames(data.profile);

        if (Names.length !== 0) {
          setOptions(!searchText ? [] : Names);
        }
      }
    }).catch(err => console.log(err));
  };

  const onSearchCities = searchText => {
    setcitytext(searchText);
    const Url = '/api/profiles/search?companyname=' + nameText + '&domaine=' + domaineText + '&city=' + cityText + '&page=1';
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(Url).then(({
      data
    }) => {
      if (data !== undefined) {
        setNames(data.profile);

        if (Names.length !== 0) {
          setCityOptions(!searchText ? [] : Names.filter(em => em.city.includes(searchText.toLowerCase())));
        }
      }
    }).catch(err => console.log(err));
  };

  const onSelectName = data => {
    setNametext(data);
  };

  const onSelectDomaine = data => {
    setdomainetext(data);
  };

  const onSelectCity = data => {
    setcitytext(data);
  };

  const onSearchDomaine = searchText => {
    setdomainetext(searchText);
    const Url = '/api/profiles/search?companyname=' + nameText + '&domaine=' + domaineText + '&city=' + cityText + '&page=1';
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(Url).then(({
      data
    }) => {
      if (data !== undefined) {
        setNames(data.profile);

        if (Names.length !== 0) {
          setDomaineOptions(!searchText ? [] : checker(Names));
        }
      }
    }).catch(err => console.log(err));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (searchItem !== undefined) {
      setNametext(searchItem.companyname);
      setdomainetext(searchItem.domaine);
      setcitytext(searchItem.city);
    }
  }, []);
  return __jsx("div", {
    className: "search_Container"
  }, __jsx("div", {
    className: "inputContainer"
  }, __jsx("i", {
    "aria-hidden": true,
    className: "fa fa-id-card icon"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
    className: "searchInput",
    onSelect: onSelectName,
    onSearch: onSearchName,
    value: nameText,
    placeholder: "Soci\xE9t\xE9/Personne"
  }, nameOptions.map(name => __jsx(Option, {
    key: name.companyname,
    value: name.companyname
  }, name.companyname)))), __jsx("div", {
    className: "inputContainer"
  }, __jsx("i", {
    "aria-hidden": true,
    className: "fa fa-globe icon"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
    className: "searchInput",
    value: domaineText,
    onSelect: onSelectDomaine,
    onSearch: onSearchDomaine,
    placeholder: "Domaine"
  }, DomaineOptions.map(domaine => __jsx(Option, {
    key: domaine,
    value: domaine
  }, domaine)))), __jsx("div", {
    className: "inputContainer"
  }, __jsx("i", {
    "aria-hidden": true,
    className: "fa fa-map-marker icon"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
    className: "searchInput",
    onSelect: onSelectCity,
    onSearch: onSearchCities,
    placeholder: "Ville",
    value: cityText
  }, CityOptions.map(element => __jsx(Option, {
    key: element.city,
    value: element.city
  }, element.city)))), __jsx("a", {
    className: "searchButton",
    type: "button",
    href: '/Search?companyname=' + nameText + '&domaine=' + domaineText + '&city=' + cityText + '&page=1'
  }, __jsx("i", {
    "aria-hidden": true,
    className: "fa fa-search"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "Np8q":
/***/ (function(module, exports) {



/***/ }),

/***/ "Z4yd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZHh6");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tXcZ");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("aIN1");
/* harmony import */ var _Scss_search_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Np8q");
/* harmony import */ var _Scss_search_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Scss_search_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SearchCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("F2Qd");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("I2Is");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // ------------------------------------------------


 //--------------------------------------------------

const Search = ({
  qu
}) => {
  const {
    0: profiles,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: nodata,
    1: setnodata
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const Url = '/api/profiles/search?companyname=' + qu.companyname + '&domaine=' + qu.domaine + '&city=' + qu.city + '&page=' + qu.page;
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(Url).then(res => {
      setProfile(res.data);

      if (res.data === "") {
        setnodata(true);
      }

      setLoading(false);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const handleCLick = async () => {
    setLoading(true);

    if (+qu.page < Math.round(profiles.count / 9) && +qu.page !== 0) {
      var newPage = +qu.page + 1;
      await router.push('/Search?companyname=' + qu.companyname + '&domaine=' + qu.domaine + '&city=' + qu.city + '&page=' + newPage);
    }

    const Url = '/api/profiles/search?companyname=' + qu.companyname + '&domaine=' + qu.domaine + '&city=' + qu.city + '&page=' + qu.page;
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(Url).then(res => {
      setProfile(res.data);

      if (res.data === "") {
        setnodata(true);
      }

      setLoading(false);
    }).catch(err => {
      console.log(err);
    });
  };

  const handleBack = () => {
    setLoading(true);
    var newPage = +qu.page - 1;
    router.push('/Search?companyname=' + qu.companyname + '&domaine=' + qu.domaine + '&city=' + qu.city + '&page=' + newPage);
    const Url = '/api/profiles/search?companyname=' + qu.companyname + '&domaine=' + qu.domaine + '&city=' + qu.city + '&page=' + qu.page;
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(Url).then(res => {
      setProfile(res.data);

      if (res.data === "") {
        setnodata(true);
      }

      setLoading(false);
    }).catch(err => {
      console.log(err);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "body"
  }, __jsx("div", {
    className: "ContentInside"
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Resulat de recherche | 6 solutions"
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx("div", {
    className: "searchPage"
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    searchItem: qu
  })), __jsx("div", {
    className: "loader"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Skeleton"], {
    loading: loading,
    active: true,
    avatar: true,
    round: true,
    className: "sk"
  }, profiles !== undefined && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, profiles.profile !== undefined && __jsx("div", {
    className: "CardContainer"
  }, profiles.profile.map(profile => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_SearchCard__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    key: profile._id,
    className: "SearchCard1",
    profile: profile
  })))), nodata && __jsx("div", {
    className: "Noresults"
  }, __jsx("img", {
    src: "/static/Assets/No_comments.png",
    height: "300"
  }), __jsx("h2", null, "Aucun r\xE9sultat trouv\xE9"), __jsx("p", null, "Il semble que nous ne trouvons aucun r\xE9sultat bas\xE9 sur la recherche.")), __jsx("div", {
    className: "pagination"
  }, __jsx("button", {
    className: qu.page <= 1 || profiles.count === undefined ? "disabled test" : "backPage test",
    onClick: handleBack
  }, "Pr\xE9c\xE9dent"), profiles.count !== undefined && __jsx("span", {
    className: "pageNumber test "
  }, qu.page, " sur ", Math.round(profiles.count / 9) !== 0 ? Math.round(profiles.count / 9) : 1), profiles.count === undefined && __jsx("span", {
    className: "pageNumber test "
  }, "-"), __jsx("button", {
    className: qu.page >= Math.round(profiles.count / 9) || profiles.count === undefined ? "disabled test " : "nextPage test ",
    onClick: handleCLick
  }, "Suivant"))))))), !loading && __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
};

Search.getInitialProps = async ({
  query
}) => {
  return {
    props: "",
    qu: query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

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
    lefticon: header_jsx(settings, null)
  }, header_jsx("a", {
    href: `/accountsett/`,
    style: {
      textDecoration: 'none'
    }
  }, "Paremetres")), header_jsx(DropdownItem, {
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
  const count = data !== undefined ? data.NotifView : '';
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

/***/ "ZJTA":
/***/ (function(module, exports) {



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

/***/ "fN3F":
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });