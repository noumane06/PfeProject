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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/AutoComplete.scss */ "./styles/AutoComplete.scss");
/* harmony import */ var _styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_AutoComplete_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ant-picker.scss */ "./styles/ant-picker.scss");
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

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/SearchCard.js":
/*!**********************************!*\
  !*** ./components/SearchCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
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
  }, ".more.jsx-372113139{font-style:italic;color:#0C72BF;}.more.jsx-372113139:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTm91bWFuZSBhZ291emlsXFxEZXNrdG9wXFxOb3JtYW5lXFxNeSBwcm9qZWN0c1xcUGZlUHJvamVjdFxcRnJvbnRFbmRcXGNvbXBvbmVudHNcXFNlYXJjaENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0M2QixBQUl1RCxBQUtRLGtCQUpaLGNBQ2xCLDRCQUltQixlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXE5vdW1hbmUgYWdvdXppbFxcRGVza3RvcFxcTm9ybWFuZVxcTXkgcHJvamVjdHNcXFBmZVByb2plY3RcXEZyb250RW5kXFxjb21wb25lbnRzXFxTZWFyY2hDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHt1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgU2VhcmNoQ2FyZCA9IChwcm9wcyk9PntcclxuXHJcbiAgICAgICAgY29uc3QgW2lzRnVsbCAsIHNldEZ1bGx0ZXh0XSA9IHVzZVN0YXRlKHByb3BzLnByb2ZpbGUgIT09ICcnID8gcHJvcHMucHJvZmlsZS5wcmVzZW50YXRpb24ubGVuZ3RoIDwgMTUwIDogJycpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9XCJcIjtcclxuICAgICAgICBpZiAocHJvcHMucHJvZmlsZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgcHJvcHMucHJvZmlsZS5wcmVzZW50YXRpb24ubGVuZ3RoID4gMTUwID8gdmFsdWUgPSBcIi4uLmVuIHZvaXIgcGx1c1wiIDogJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17cHJvcHMubG9hZGluZ30gIGFjdGl2ZT17dHJ1ZX0gYXZhdGFyPXt0cnVlfSByb3VuZD5cclxuICAgICAgICAgICB7cHJvcHMucHJvZmlsZSAhPT0gJycgJiYoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZF9IZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2ZpbGUuVXNyaW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwcm9wcy5wcm9maWxlLmNvbXBhbnluYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvcHMucHJvZmlsZS5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5wcm9maWxlLnN0YXJzLmxlbmd0aH0gSidhaW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcmRfQm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QSBwcm9wb3MgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzRnVsbCA/IHByb3BzLnByb2ZpbGUucHJlc2VudGF0aW9uLnN1YnN0cigwLCAxNTApIDogcHJvcHMucHJvZmlsZS5wcmVzZW50YXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzRnVsbCA/ICg8c3BhbiBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17KCk9PnNldEZ1bGx0ZXh0KHRydWUpfT5Wb2lyIHBsdXM8L3NwYW4+KTpcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMEM3MkJGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9yZTpob3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2ZpbGUuX2lkICE9PSB1bmRlZmluZWQgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIiBocmVmPXtgL1Byb2ZpbGVzLyR7cHJvcHMucHJvZmlsZS5faWR9YH0+Vm9pciBwcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZmlsZS5faWQgPT09IHVuZGVmaW5lZCAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+Vm9pciBwcm9maWxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ2FyZCA7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Noumane agouzil\\\\Desktop\\\\Normane\\\\My projects\\\\PfeProject\\\\FrontEnd\\\\components\\\\SearchCard.js */")), __jsx("div", {
    className: "Card_footer"
  }, props.profile._id !== undefined && __jsx("a", {
    className: "button",
    href: `/Profiles/${props.profile._id}`
  }, "Voir profile"), props.profile._id === undefined && __jsx("button", {
    className: "button"
  }, "Voir profile")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchCard);

/***/ }),

/***/ "./components/body_section1.js":
/*!*************************************!*\
  !*** ./components/body_section1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_NerdCharact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/NerdCharact */ "./components/svg/NerdCharact.js");
/* harmony import */ var _styles_bodySection1_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/bodySection1.scss */ "./styles/bodySection1.scss");
/* harmony import */ var _styles_bodySection1_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_bodySection1_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// dependecies 
 // Components and styles imports



 // ----------------------------------------------------

const Body_section1 = () => {
  return __jsx("div", {
    className: "section1_container"
  }, __jsx("div", {
    className: "Left_segment"
  }, __jsx("h1", null, "Recherchez des entreprises et organisez une r\xE9union"), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx("div", {
    className: "right_segment"
  }, __jsx(_svg_NerdCharact__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Body_section1);

/***/ }),

/***/ "./components/body_section2.js":
/*!*************************************!*\
  !*** ./components/body_section2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_bodySection2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/bodySection2.scss */ "./styles/bodySection2.scss");
/* harmony import */ var _styles_bodySection2_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_bodySection2_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchCard */ "./components/SearchCard.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const BodySection2 = props => {
  const {
    0: profile,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/profiles/hotprofiles").then(({
      data
    }) => {
      setData(data.response.profiles);
      setLoading(false);
    }).catch(err => console.log(err));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "bodySection2"
  }, __jsx("div", {
    className: "titleContainer"
  }, __jsx("h1", null, "Quelques entreprise les plus connues")), __jsx("div", {
    className: "CardsContainer"
  }, __jsx(_SearchCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Card1",
    profile: loading || profile[0] === undefined ? '' : profile[0],
    loading: loading
  }), __jsx(_SearchCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Card1 second",
    profile: loading || profile[1] === undefined ? '' : profile[1],
    loading: loading
  }), __jsx(_SearchCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Card1 third",
    profile: loading || profile[2] === undefined ? '' : profile[2],
    loading: loading
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BodySection2);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/footer.scss */ "./styles/footer.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    className: "footer"
  }, "\xA9 2020 6Solutions. Tous les droits sont r\xE9serv\xE9s.");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/header.scss */ "./styles/header.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_profile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/profile.js */ "./components/svg/profile.js");
/* harmony import */ var _svg_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/settings.js */ "./components/svg/settings.js");
/* harmony import */ var _svg_logout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/logout.js */ "./components/svg/logout.js");
/* harmony import */ var _svg_NotifBell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/NotifBell */ "./components/svg/NotifBell.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _svg_ToggleIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/ToggleIcon */ "./components/svg/ToggleIcon.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const DropdownItem = props => {
  return __jsx("div", {
    className: "menuItem",
    onClick: props.onClick
  }, __jsx("span", {
    className: "icon-button"
  }, props.lefticon), props.children);
};

const DropDown = ({
  userid,
  count
}) => {
  const handleLogout = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/signout', {
      withCredentials: true
    }).then(res => window.location.reload()).catch(err => console.log(err));
  };

  return __jsx("div", {
    className: "Dropdown"
  }, __jsx(DropdownItem, {
    lefticon: __jsx(_svg_profile_js__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, __jsx("a", {
    href: `/Profiles/` + userid,
    style: {
      textDecoration: 'none'
    }
  }, "Mon profile")), __jsx(DropdownItem, {
    lefticon: __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
      count: count
    }, __jsx(_svg_NotifBell__WEBPACK_IMPORTED_MODULE_6__["default"], null))
  }, __jsx("a", {
    href: `/Notifications/`,
    style: {
      textDecoration: 'none'
    }
  }, "Notifications")), __jsx(DropdownItem, {
    lefticon: __jsx(_svg_logout_js__WEBPACK_IMPORTED_MODULE_5__["default"], null),
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: checkStatus,
    1: setCheckStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: opened,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const count = data !== undefined && data !== null ? data.NotifView : '';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/profiles/myprofile', {
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

  return __jsx("div", {
    className: "Header_Container"
  }, __jsx("div", {
    className: "NavSwitch"
  }, __jsx("label", {
    htmlFor: "toggle",
    onClick: () => setCheckStatus(!checkStatus)
  }, " ", __jsx(_svg_ToggleIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null), " ")), __jsx("div", {
    className: "Header_Logo"
  }, __jsx("img", {
    src: "../static/Icons/LOGO2017.png",
    height: "30",
    onClick: () => window.location.assign("/"),
    style: {
      cursor: 'pointer'
    }
  })), __jsx("div", {
    className: checkStatus ? "GridNav visible" : "GridNav"
  }, __jsx("ul", null, __jsx("li", {
    className: active == "acceuil" ? "active" : "link"
  }, __jsx("a", {
    href: "/"
  }, "Acceuil")), __jsx("li", {
    className: active == "propos" ? "active" : "link"
  }, __jsx("a", {
    href: "/propos"
  }, "A propos")), __jsx("li", {
    className: active == "temoignages" ? "active" : "link"
  }, __jsx("a", {
    href: "/temoignages"
  }, "Temoignages")), __jsx("li", {
    className: active == "contact" ? "active" : "link"
  }, __jsx("a", {
    href: "/contact"
  }, "Contact")), __jsx("li", {
    className: active == "questions" ? "active" : "link"
  }, __jsx("a", {
    href: "/questions"
  }, "Questions"))), __jsx("div", {
    className: "Header_Buttons"
  }, !loading && userId === null && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    className: "Header_subscribe",
    type: "button",
    value: "S'inscrire",
    onClick: () => window.location.replace("/Auth/SignUp")
  }), __jsx("input", {
    className: "Header_signin",
    type: "button",
    value: "Se connecter",
    onClick: handleClick
  })), !loading && userId !== null && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "ProfileThumb",
    onClick: () => setOpen(!opened)
  }, __jsx("div", {
    className: "ProfileImg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
    count: count
  }, __jsx("img", {
    src: data.Usrimg
  }))), data.type == "Société" && __jsx("span", null, data.companyname), data.type == "Client" && __jsx("span", null, data.nom, " ", data.prenom)), opened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(DropDown, {
    userid: userId,
    count: count
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/svg/Bottom_left.js":
/*!***************************************!*\
  !*** ./components/svg/Bottom_left.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BottomLeft = () => {
  return __jsx("svg", {
    width: "700",
    height: "400",
    viewBox: "0 0 1603.008 883.712",
    className: "BottomLeft"
  }, __jsx("path", {
    id: "Path_101",
    "data-name": "Path 101",
    d: "M-91.6,1859.431c6.87-144.266,232.429,199.225,389.29,219.834s124.8-129.382,238.154-137.4S511.8,1920.115,751.1,2047.206s862.162,250.748,741.941,403.029-826.668,353.8-1222.828,206.095S-98.467,2003.7-91.6,1859.431Z",
    transform: "translate(94.72 -1824.154)",
    fill: "#dfeffc"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BottomLeft);

/***/ }),

/***/ "./components/svg/NerdCharact.js":
/*!***************************************!*\
  !*** ./components/svg/NerdCharact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NerdCharach = () => {
  return __jsx("svg", {
    width: "500",
    height: "500",
    viewBox: "0 0 606.815 737.496"
  }, __jsx("g", {
    id: "Layer_1",
    "data-name": "Layer 1",
    transform: "translate(0 0)"
  }, __jsx("rect", {
    id: "Rectangle_8",
    "data-name": "Rectangle 8",
    width: "590.59",
    height: "369.022",
    rx: "11.82",
    transform: "translate(16.225 110.196)",
    fill: "#4b2e4c",
    opacity: "0.08"
  }), __jsx("rect", {
    id: "Rectangle_9",
    "data-name": "Rectangle 9",
    width: "42.465",
    height: "133.673",
    rx: "15.9",
    transform: "translate(360.649 602.034)",
    fill: "#584e60"
  }), __jsx("rect", {
    id: "Rectangle_10",
    "data-name": "Rectangle 10",
    width: "47.593",
    height: "182.348",
    rx: "17.82",
    transform: "translate(358.606 477.936)",
    fill: "#584e60"
  }), __jsx("circle", {
    id: "Ellipse_1",
    "data-name": "Ellipse 1",
    cx: "17.881",
    cy: "17.881",
    r: "17.881",
    transform: "translate(334.555)",
    fill: "#ac8067"
  }), __jsx("path", {
    id: "Path_2",
    "data-name": "Path 2",
    d: "M255.919,27.053a1.99,1.99,0,0,1-1.4-.574c-3.1-3.031-4.086-7.946-4.006-11.524a16.025,16.025,0,0,1,1.6-6.677,2,2,0,1,1,3.579,1.8,11.9,11.9,0,0,0-1.175,5.034c-.094,2.818.734,6.543,2.764,8.546a2,2,0,0,1-1.4,3.432Z",
    transform: "translate(84.017 2.406)",
    fill: "#c69a83",
    opacity: "0.8"
  }), __jsx("circle", {
    id: "Ellipse_2",
    "data-name": "Ellipse 2",
    cx: "1.723",
    cy: "1.723",
    r: "1.723",
    transform: "translate(337.239 13.314)",
    fill: "#c69a83"
  }), __jsx("circle", {
    id: "Ellipse_3",
    "data-name": "Ellipse 3",
    cx: "0.668",
    cy: "0.668",
    r: "0.668",
    transform: "translate(341.179 12.392)",
    fill: "#c69a83"
  }), __jsx("circle", {
    id: "Ellipse_4",
    "data-name": "Ellipse 4",
    cx: "0.948",
    cy: "0.948",
    r: "0.948",
    transform: "translate(342.514 14.863)",
    fill: "#c69a83"
  }), __jsx("circle", {
    id: "Ellipse_5",
    "data-name": "Ellipse 5",
    cx: "1.349",
    cy: "1.349",
    r: "1.349",
    transform: "translate(339.937 17.494)",
    fill: "#c69a83"
  }), __jsx("circle", {
    id: "Ellipse_6",
    "data-name": "Ellipse 6",
    cx: "0.628",
    cy: "0.628",
    r: "0.628",
    transform: "translate(345.252 12.619)",
    fill: "#c69a83"
  }), __jsx("circle", {
    id: "Ellipse_7",
    "data-name": "Ellipse 7",
    cx: "0.454",
    cy: "0.454",
    r: "0.454",
    transform: "translate(343.062 12.005)",
    fill: "#c69a83"
  }), __jsx("circle", {
    id: "Ellipse_8",
    "data-name": "Ellipse 8",
    cx: "0.708",
    cy: "0.708",
    r: "0.708",
    transform: "translate(345.465 15.344)",
    fill: "#c69a83"
  }), __jsx("circle", {
    id: "Ellipse_9",
    "data-name": "Ellipse 9",
    cx: "0.174",
    cy: "0.174",
    r: "0.174",
    transform: "translate(341.633 10.71)",
    fill: "#c69a83"
  }), __jsx("rect", {
    id: "Rectangle_11",
    "data-name": "Rectangle 11",
    width: "590.59",
    height: "369.022",
    rx: "11.82",
    transform: "translate(0 93.718)",
    fill: "#4b2e4c"
  }), __jsx("rect", {
    id: "Rectangle_12",
    "data-name": "Rectangle 12",
    width: "200.122",
    height: "30.434",
    transform: "translate(30.981 121.24)",
    fill: "#dfeffc"
  }), __jsx("rect", {
    id: "Rectangle_13",
    "data-name": "Rectangle 13",
    width: "200.122",
    height: "12.94",
    transform: "translate(30.981 187.649)",
    fill: "#fff"
  }), __jsx("rect", {
    id: "Rectangle_14",
    "data-name": "Rectangle 14",
    width: "200.122",
    height: "12.94",
    transform: "translate(30.981 218.27)",
    fill: "#fff"
  }), __jsx("rect", {
    id: "Rectangle_15",
    "data-name": "Rectangle 15",
    width: "91.114",
    height: "12.86",
    transform: "translate(30.981 248.93)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_3",
    "data-name": "Path 3",
    d: "M35.576,327.129a14.89,14.89,0,1,1,14.9-14.89A14.89,14.89,0,0,1,35.576,327.129Zm0-23.089a8.2,8.2,0,1,0,5.815,2.392,8.213,8.213,0,0,0-5.815-2.392Z",
    transform: "translate(6.943 99.728)",
    fill: "#dfeffc"
  }), __jsx("path", {
    id: "Path_4",
    "data-name": "Path 4",
    d: "M45.17,348.556a2.671,2.671,0,0,1-2.163-4.233L53.2,330.341a2.671,2.671,0,1,1,4.327,3.125L47.333,347.528A2.671,2.671,0,0,1,45.17,348.556Zm98.311-21.446a2.671,2.671,0,0,1-1.91-.788l-6.917-7.011a2.671,2.671,0,1,1,3.792-3.752l4.767,4.821,2.671-3.525a2.672,2.672,0,0,1,4.247,3.245l-4.567,5.969a2.671,2.671,0,0,1-1.95,1.042Zm-77.145-7.732a2.671,2.671,0,0,1-2.163-4.247l10.2-14.048a2.671,2.671,0,1,1,4.313,3.138l-10.149,14.1a2.671,2.671,0,0,1-2.2,1.055ZM123.411,306.8a2.671,2.671,0,0,1-1.9-.788l-12.192-12.352a2.671,2.671,0,1,1,3.793-3.752l12.205,12.352a2.671,2.671,0,0,1-1.91,4.54Zm35.935-.494a2.671,2.671,0,0,1-2.123-4.287l10.55-13.795a2.672,2.672,0,1,1,4.247,3.245l-10.55,13.795A2.671,2.671,0,0,1,159.346,306.3ZM87.5,290.186a2.671,2.671,0,0,1-2.15-4.233L93.6,274.562a2.667,2.667,0,0,1,4.06-.307l2.31,2.35a2.671,2.671,0,1,1-3.793,3.752l-.107-.107-6.41,8.827A2.671,2.671,0,0,1,87.5,290.186ZM284.018,280.7a2.671,2.671,0,0,1-2-.908l-11.484-13.02a2.671,2.671,0,0,1,4.006-3.525l11.484,13.02a2.671,2.671,0,0,1-2,4.434Zm-102.732-3.058a2.671,2.671,0,0,1-2.123-4.287L189.7,259.566a2.672,2.672,0,1,1,4.247,3.245l-10.563,13.795A2.671,2.671,0,0,1,181.286,277.647Zm114.844-6.116a2.671,2.671,0,0,1-2.043-4.393l11.177-13.287a2.672,2.672,0,0,1,4.086,3.445l-11.177,13.287a2.671,2.671,0,0,1-2.07,1Zm109.5-7.465a2.671,2.671,0,0,1-1.87-.761L391.4,251.113a2.671,2.671,0,0,1,3.739-3.806L407.5,259.5a2.671,2.671,0,0,1-1.87,4.567Zm12.887-.254a2.671,2.671,0,0,1-1.99-4.46l11.578-12.94a2.637,2.637,0,0,1,3.873,3.579L420.4,262.931a2.671,2.671,0,0,1-1.99.881ZM260.235,253.663a2.671,2.671,0,0,1-2-.908l-11.484-13.02a2.671,2.671,0,0,1,4.006-3.525l11.484,13.02a2.671,2.671,0,0,1-2,4.434ZM203.24,249a2.663,2.663,0,0,1-2.11-4.287l10.536-13.795a2.672,2.672,0,1,1,4.247,3.245l-10.55,13.795a2.671,2.671,0,0,1-2.19,1.042Zm116.179-5.061a2.671,2.671,0,0,1-2.043-4.393l11.177-13.287a2.672,2.672,0,0,1,4.086,3.445L321.462,243.06a2.671,2.671,0,0,1-2.137.881Zm60.56-5.181a2.671,2.671,0,0,1-1.883-.775L365.73,225.807A2.672,2.672,0,0,1,369.483,222l12.366,12.179a2.671,2.671,0,0,1-1.87,4.58Zm62.47-1.9a2.671,2.671,0,0,1-1.99-4.447l11.6-12.913a2.677,2.677,0,0,1,4.006,3.552l-11.565,12.953A2.671,2.671,0,0,1,442.449,236.864Zm-206.158-10.3a2.671,2.671,0,0,1-2-.908l-6.437-7.291-.681.895a2.672,2.672,0,0,1-4.247-3.245l2.671-3.485a2.684,2.684,0,0,1,4.126-.147l8.587,9.748a2.671,2.671,0,0,1-2,4.434ZM342.508,216.3a2.671,2.671,0,0,1-2.043-4.393l6.677-7.865a2.671,2.671,0,0,1,3.913-.187l5.048,4.968a2.672,2.672,0,1,1-3.752,3.806l-2.978-2.938-4.767,5.662a2.671,2.671,0,0,1-2.07,1Zm123.978-6.263a2.664,2.664,0,0,1-1.99-4.447l11.564-12.94a2.677,2.677,0,0,1,4.006,3.552L468.5,209.141a2.671,2.671,0,0,1-2.016.895Zm24.037-26.881a2.671,2.671,0,0,1-1.99-4.447L500.1,165.755a2.682,2.682,0,1,1,4.006,3.565l-11.564,12.94a2.671,2.671,0,0,1-2.016.895Zm24.037-26.881a2.671,2.671,0,0,1-1.99-4.46l8.106-9.067a2.681,2.681,0,1,1,4.006,3.565l-8.133,9.094A2.671,2.671,0,0,1,514.56,156.273Z",
    transform: "translate(14.255 47.574)",
    fill: "#fff"
  }), __jsx("rect", {
    id: "Rectangle_16",
    "data-name": "Rectangle 16",
    width: "42.465",
    height: "133.673",
    rx: "15.9",
    transform: "translate(305.003 602.034)",
    fill: "#665c6d"
  }), __jsx("rect", {
    id: "Rectangle_17",
    "data-name": "Rectangle 17",
    width: "47.593",
    height: "182.348",
    rx: "17.82",
    transform: "translate(302.439 477.936)",
    fill: "#665c6d"
  }), __jsx("path", {
    id: "Path_5",
    "data-name": "Path 5",
    d: "M292.414,535.62h19.5a22.234,22.234,0,0,1,22.234,22.234H270.18a22.234,22.234,0,0,1,22.234-22.234Z",
    transform: "translate(90.616 179.642)",
    fill: "#4b2e4c"
  }), __jsx("path", {
    id: "Path_6",
    "data-name": "Path 6",
    d: "M234.744,535.62h19.5a22.234,22.234,0,0,1,22.234,22.234H212.51A22.234,22.234,0,0,1,234.744,535.62Z",
    transform: "translate(71.274 179.642)",
    fill: "#4b2e4c"
  }), __jsx("g", {
    id: "Group_5",
    "data-name": "Group 5",
    transform: "translate(312.548 566.192)",
    opacity: "0.27"
  }, __jsx("rect", {
    id: "Rectangle_18",
    "data-name": "Rectangle 18",
    width: "5.902",
    height: "20.071",
    rx: "2.21",
    fill: "#fff"
  }), __jsx("rect", {
    id: "Rectangle_19",
    "data-name": "Rectangle 19",
    width: "5.902",
    height: "10.723",
    rx: "2.21",
    transform: "translate(0 25.68)",
    fill: "#fff"
  })), __jsx("circle", {
    id: "Ellipse_10",
    "data-name": "Ellipse 10",
    cx: "51.266",
    cy: "51.266",
    r: "51.266",
    transform: "translate(301.518 458.626)",
    fill: "#665c6d"
  }), __jsx("path", {
    id: "Path_7",
    "data-name": "Path 7",
    d: "M356.641,306.351l-12.486,99.86-23.409-.775L310.61,294.64",
    transform: "translate(104.175 98.819)",
    fill: "#f9c9ab"
  }), __jsx("path", {
    id: "Path_8",
    "data-name": "Path 8",
    d: "M188.26,306.351l12.473,99.86,23.409-.775,10.149-110.8",
    transform: "translate(63.141 98.819)",
    fill: "#f9c9ab"
  }), __jsx("path", {
    id: "Path_9",
    "data-name": "Path 9",
    d: "M188.26,306.365l6.023,3.312a57.716,57.716,0,0,1,29.859,50.544v45.216L234.291,294.6",
    transform: "translate(63.141 98.806)",
    fill: "#e19f7f",
    opacity: "0.46"
  }), __jsx("path", {
    id: "Path_10",
    "data-name": "Path 10",
    d: "M356.5,306.365l-6.023,3.312a57.689,57.689,0,0,0-29.859,50.544v45.216L310.47,294.6",
    transform: "translate(104.129 98.806)",
    fill: "#e19f7f",
    opacity: "0.46"
  }), __jsx("path", {
    id: "Path_11",
    "data-name": "Path 11",
    d: "M410.079,356.16a839.116,839.116,0,0,1-11.217-85.972c-1.068-13.594-2.23-28.3-11.217-38.539-7.451-8.506-18.856-12.192-29.672-15.517l-24.3-7.5-34.92-27.749c0-2.2,0-4.393-.067-6.6l-4.126,3.272-4.113-3.272c0,2.2,0,4.393-.067,6.6l-34.92,27.749-24.317,7.5c-10.817,3.325-22.221,7.011-29.686,15.517-8.974,10.242-10.149,24.945-11.2,38.539A842.862,842.862,0,0,1,179.03,356.16c-.294,1.6-.441,3.592.895,4.514a4.287,4.287,0,0,0,2.123.534q23.783,1.763,47.633,1.789l.374.654c11.645,24.665,2.844,55.018,13.354,80.2,1.335,3.138,3.018,6.29,5.876,8.119a19.069,19.069,0,0,0,8.213,2.27,359.306,359.306,0,0,0,63.084,1.015c6.29-.387,13.674-.067,19.3-3.285,2.858-1.829,4.58-4.981,5.889-8.119,10.483-25.185,1.683-55.539,13.354-80.2l.387-.654q23.837,0,47.62-1.789a4.22,4.22,0,0,0,2.123-.534C410.546,359.752,410.4,357.763,410.079,356.16Z",
    transform: "translate(59.978 58.452)",
    fill: "#4f3e52"
  }), __jsx("path", {
    id: "Path_12",
    "data-name": "Path 12",
    d: "M341.159,209.1a63.711,63.711,0,0,1-94.559,5.862,63.752,63.752,0,0,0,67.6-14.209l20.164,6.183C336.605,207.681,338.9,208.388,341.159,209.1Z",
    transform: "translate(82.707 67.33)",
    fill: "#443547"
  }), __jsx("g", {
    id: "Group_6",
    "data-name": "Group 6",
    transform: "translate(400.537 262.177)",
    opacity: "0.21"
  }, __jsx("path", {
    id: "Path_13",
    "data-name": "Path 13",
    d: "M300.14,196.731a.2.2,0,1,0-.2-.2A.2.2,0,0,0,300.14,196.731Z",
    transform: "translate(-299.94 -196.33)",
    fill: "#f0cae7"
  })), __jsx("path", {
    id: "Path_14",
    "data-name": "Path 14",
    d: "M281.212,24h0A68.265,68.265,0,0,0,213,92.305h0A21.994,21.994,0,0,0,234.994,114.3h92.529A21.981,21.981,0,0,0,349.5,92.305h0A68.252,68.252,0,0,0,281.212,24Z",
    transform: "translate(71.438 8.049)",
    fill: "#ac8067"
  }), __jsx("path", {
    id: "Path_15",
    "data-name": "Path 15",
    d: "M216.61,125.653h127.5v55.232a63.752,63.752,0,0,1-63.752,63.752h0a63.752,63.752,0,0,1-63.752-63.752V125.653Z",
    transform: "translate(72.649 42.125)",
    fill: "#ac8067"
  }), __jsx("path", {
    id: "Path_16",
    "data-name": "Path 16",
    d: "M280.322,220.728h0A63.741,63.741,0,0,1,216.57,156.99v13.367a63.752,63.752,0,0,0,63.752,63.752h0a63.752,63.752,0,0,0,63.685-63.752V157a63.735,63.735,0,0,1-63.671,63.725Z",
    transform: "translate(72.635 52.653)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_11",
    "data-name": "Ellipse 11",
    cx: "19.417",
    cy: "19.417",
    r: "19.417",
    transform: "translate(272.219 130.708)",
    fill: "#f9c9ab"
  }), __jsx("path", {
    id: "Path_17",
    "data-name": "Path 17",
    d: "M240.386,125.545a19.417,19.417,0,1,1-28.31-24.985,18.976,18.976,0,0,0-2.31,9.174,19.417,19.417,0,0,0,19.376,19.457,19.19,19.19,0,0,0,11.244-3.646Z",
    transform: "translate(68.356 33.727)",
    fill: "#e19f7f",
    opacity: "0.31"
  }), __jsx("circle", {
    id: "Ellipse_12",
    "data-name": "Ellipse 12",
    cx: "10.563",
    cy: "10.563",
    r: "10.563",
    transform: "translate(281.073 139.562)",
    fill: "#dc8c72"
  }), __jsx("circle", {
    id: "Ellipse_13",
    "data-name": "Ellipse 13",
    cx: "19.417",
    cy: "19.417",
    r: "19.417",
    transform: "translate(396.571 130.708)",
    fill: "#f9c9ab"
  }), __jsx("path", {
    id: "Path_18",
    "data-name": "Path 18",
    d: "M333.5,125.545a19.417,19.417,0,1,1-28.364-24.985,18.976,18.976,0,0,0-2.31,9.174,19.417,19.417,0,0,0,19.43,19.457,19.19,19.19,0,0,0,11.244-3.646Z",
    transform: "translate(99.596 33.727)",
    fill: "#e19f7f",
    opacity: "0.31"
  }), __jsx("circle", {
    id: "Ellipse_14",
    "data-name": "Ellipse 14",
    cx: "10.563",
    cy: "10.563",
    r: "10.563",
    transform: "translate(405.424 139.562)",
    fill: "#dc8c72"
  }), __jsx("path", {
    id: "Path_19",
    "data-name": "Path 19",
    d: "M324.787,49.577A63.431,63.431,0,0,0,216.5,94.433v75.516a63.438,63.438,0,1,0,126.875,0l-.013-75.516A63.151,63.151,0,0,0,324.787,49.577ZM253.864,177.161l.214.093",
    transform: "translate(72.612 10.395)",
    fill: "#f9c9ab"
  }), __jsx("path", {
    id: "Path_20",
    "data-name": "Path 20",
    d: "M337.055,91.1v7.064c0-16.118-6.477-24.037-16.986-34.533a57.515,57.515,0,0,0-40.983-17.08c-32.049,0-57.956,24.771-57.956,56.954V96.444c0-32.183,25.947-56.954,57.956-56.954a57.515,57.515,0,0,1,40.983,17.08C330.579,67.119,337.055,75,337.055,91.1Z",
    transform: "translate(74.165 13.245)",
    fill: "#e19f7f",
    opacity: "0.69"
  }), __jsx("path", {
    id: "Path_21",
    "data-name": "Path 21",
    d: "M325.422,48.855a62.964,62.964,0,0,0-44.856-18.7c-35.027,0-64.766,28.564-64.766,63.792l1.335,75.93a63.438,63.438,0,1,0,126.875,0l1.322-75.93C345.346,76.324,336.92,60.393,325.422,48.855ZM338.536,166.61a57.966,57.966,0,1,1-115.932,0l.007-64.1c0-32.183,25.947-56.941,57.956-56.941a57.422,57.422,0,0,1,41,17.133c10.51,10.536,16.986,18.415,16.986,34.52Z",
    transform: "translate(72.377 10.115)",
    fill: "#ac8067"
  }), __jsx("path", {
    id: "Path_22",
    "data-name": "Path 22",
    d: "M336.825,87.46v7.825c0-16.118-6.477-24.037-16.986-34.533a57.422,57.422,0,0,0-40.983-17.08c-32.049,0-57.956,24.758-57.956,56.954V92.8c0-32.183,25.947-56.941,57.956-56.941a57.422,57.422,0,0,1,41,17.08C330.349,63.476,336.825,71.355,336.825,87.46Z",
    transform: "translate(74.088 12.027)",
    fill: "#a0725c"
  }), __jsx("rect", {
    id: "Rectangle_20",
    "data-name": "Rectangle 20",
    width: "8.333",
    height: "21.673",
    rx: "3.12",
    transform: "translate(349.325 154.051)",
    fill: "#d6836f",
    opacity: "0.42"
  }), __jsx("circle", {
    id: "Ellipse_15",
    "data-name": "Ellipse 15",
    cx: "17.56",
    cy: "17.56",
    r: "17.56",
    transform: "translate(359.807 123.15)",
    fill: "#fff"
  }), __jsx("circle", {
    id: "Ellipse_16",
    "data-name": "Ellipse 16",
    cx: "25.453",
    cy: "25.453",
    r: "25.453",
    transform: "translate(325.969 201.003)",
    fill: "#ac8067"
  }), __jsx("circle", {
    id: "Ellipse_17",
    "data-name": "Ellipse 17",
    cx: "25.453",
    cy: "25.453",
    r: "25.453",
    transform: "translate(304.028 192.109)",
    fill: "#ac8067"
  }), __jsx("circle", {
    id: "Ellipse_18",
    "data-name": "Ellipse 18",
    cx: "25.453",
    cy: "25.453",
    r: "25.453",
    transform: "translate(351.435 191.508)",
    fill: "#ac8067"
  }), __jsx("circle", {
    id: "Ellipse_19",
    "data-name": "Ellipse 19",
    cx: "25.453",
    cy: "25.453",
    r: "25.453",
    transform: "translate(327.771 180.331)",
    fill: "#ac8067"
  }), __jsx("path", {
    id: "Path_23",
    "data-name": "Path 23",
    d: "M320.725,154.46a68.68,68.68,0,0,0,.08-13.287h-.08V98h0a7.865,7.865,0,0,0-7.852,7.865v29.926a33.385,33.385,0,0,1-5.956,19.376,25.479,25.479,0,0,1-21.687,11.151L305.1,191.09a66.262,66.262,0,0,0,15.6-36.3h0Z",
    transform: "translate(95.663 32.868)",
    fill: "#ac8067"
  }), __jsx("ellipse", {
    id: "Ellipse_20",
    "data-name": "Ellipse 20",
    cx: "6.063",
    cy: "9.855",
    rx: "6.063",
    ry: "9.855",
    transform: "translate(371.305 131.389)",
    fill: "#4f3e52"
  }), __jsx("circle", {
    id: "Ellipse_21",
    "data-name": "Ellipse 21",
    cx: "17.56",
    cy: "17.56",
    r: "17.56",
    transform: "translate(311.426 123.15)",
    fill: "#fff"
  }), __jsx("ellipse", {
    id: "Ellipse_22",
    "data-name": "Ellipse 22",
    cx: "6.063",
    cy: "9.855",
    rx: "6.063",
    ry: "9.855",
    transform: "translate(323.311 131.389)",
    fill: "#4f3e52"
  }), __jsx("rect", {
    id: "Rectangle_21",
    "data-name": "Rectangle 21",
    width: "38.913",
    height: "10.015",
    rx: "3.75",
    transform: "translate(309.917 100.181)",
    fill: "#ac8067"
  }), __jsx("rect", {
    id: "Rectangle_22",
    "data-name": "Rectangle 22",
    width: "38.913",
    height: "10.015",
    rx: "3.75",
    transform: "translate(358.031 98.365)",
    fill: "#ac8067"
  }), __jsx("circle", {
    id: "Ellipse_23",
    "data-name": "Ellipse 23",
    cx: "2.938",
    cy: "2.938",
    r: "2.938",
    transform: "translate(331.484 135.368)",
    fill: "#fff"
  }), __jsx("circle", {
    id: "Ellipse_24",
    "data-name": "Ellipse 24",
    cx: "2.938",
    cy: "2.938",
    r: "2.938",
    transform: "translate(379.852 135.368)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_24",
    "data-name": "Path 24",
    d: "M252.489,166.305a25.733,25.733,0,0,1-22.7-12.566,33.652,33.652,0,0,1-5.088-18.108V105.852A7.865,7.865,0,0,0,216.9,98h0l-.4,30.714v12.419c.08,4.714-.08,8.627.267,12.5l.134,1.2v.681c.414,3.873.307,7.238,1.229,10.563a55.994,55.994,0,0,0,14.542,25.052Z",
    transform: "translate(72.612 32.868)",
    fill: "#ac8067"
  }), __jsx("circle", {
    id: "Ellipse_25",
    "data-name": "Ellipse 25",
    cx: "4.447",
    cy: "4.447",
    r: "4.447",
    transform: "translate(367.993 141.244)",
    fill: "#fff",
    opacity: "0.15"
  }), __jsx("circle", {
    id: "Ellipse_26",
    "data-name": "Ellipse 26",
    cx: "4.447",
    cy: "4.447",
    r: "4.447",
    transform: "translate(319.185 141.244)",
    fill: "#fff",
    opacity: "0.15"
  }), __jsx("rect", {
    id: "Rectangle_23",
    "data-name": "Rectangle 23",
    width: "51.306",
    height: "16.933",
    rx: "6.34",
    transform: "translate(327.304 24.999)",
    fill: "#4f3e52"
  }), __jsx("path", {
    id: "Path_25",
    "data-name": "Path 25",
    d: "M296.392,25.6a8.453,8.453,0,0,1-8.466,8.466h-34.36A8.466,8.466,0,0,1,245.1,25.6a7.6,7.6,0,0,1,.294-2.15,8.426,8.426,0,0,0,8.173,6.3h34.36a8.453,8.453,0,0,0,8.186-6.3,8.1,8.1,0,0,1,.28,2.15Z",
    transform: "translate(82.204 7.865)",
    fill: "#413044"
  }), __jsx("rect", {
    id: "Rectangle_24",
    "data-name": "Rectangle 24",
    width: "9.321",
    height: "4.006",
    transform: "translate(348.604 134.834)",
    fill: "#4f3e52"
  }), __jsx("g", {
    id: "Group_7",
    "data-name": "Group 7",
    transform: "translate(359.527 113.161)",
    opacity: "0.51"
  }, __jsx("path", {
    id: "Path_26",
    "data-name": "Path 26",
    d: "M305.045,84.74l-35.628,42.6a12.2,12.2,0,0,1-.187-2.123v-20.9L285.6,84.74Z",
    transform: "translate(-269.23 -84.74)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_27",
    "data-name": "Path 27",
    d: "M321.843,86.743l-41.731,49.9H279.7a11.3,11.3,0,0,1-7.558-2.871L313.15,84.74h2.23a11.4,11.4,0,0,1,6.463,2Z",
    transform: "translate(-268.254 -84.74)",
    fill: "#fff"
  })), __jsx("path", {
    id: "Path_28",
    "data-name": "Path 28",
    d: "M316.7,139.639H281.007a13.461,13.461,0,0,1-13.447-13.447V97.174A13.461,13.461,0,0,1,281.007,83.74h35.7a13.447,13.447,0,0,1,13.434,13.434v29.018A13.461,13.461,0,0,1,316.7,139.639ZM281.007,87.746a9.441,9.441,0,0,0-9.441,9.428v29.018a9.455,9.455,0,0,0,9.441,9.441h35.7a9.441,9.441,0,0,0,9.428-9.441V97.174a9.441,9.441,0,0,0-9.428-9.428Z",
    transform: "translate(89.737 28.086)",
    fill: "#4f3e52"
  }), __jsx("g", {
    id: "Group_8",
    "data-name": "Group 8",
    transform: "translate(289.78 114.443)",
    opacity: "0.51"
  }, __jsx("path", {
    id: "Path_29",
    "data-name": "Path 29",
    d: "M252.855,85.7l-35.628,42.6a12.311,12.311,0,0,1-.227-2.137v-20.9L233.4,85.7Z",
    transform: "translate(-217 -85.7)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_30",
    "data-name": "Path 30",
    d: "M269.643,87.7l-41.731,49.89h-.427a11.217,11.217,0,0,1-7.545-2.871L260.95,85.7h2.23A11.3,11.3,0,0,1,269.643,87.7Z",
    transform: "translate(-216.014 -85.7)",
    fill: "#fff"
  })), __jsx("path", {
    id: "Path_31",
    "data-name": "Path 31",
    d: "M264.732,140.589H229.024a13.447,13.447,0,0,1-13.434-13.434V98.124A13.461,13.461,0,0,1,229.024,84.69h35.708a13.461,13.461,0,0,1,13.434,13.434v29.031a13.447,13.447,0,0,1-13.434,13.434ZM229.024,88.7a9.441,9.441,0,0,0-9.428,9.428v29.031a9.441,9.441,0,0,0,9.428,9.428h35.708a9.441,9.441,0,0,0,9.428-9.428V98.124a9.441,9.441,0,0,0-9.428-9.428Z",
    transform: "translate(72.307 28.404)",
    fill: "#4f3e52"
  }), __jsx("circle", {
    id: "Ellipse_27",
    "data-name": "Ellipse 27",
    cx: "4.62",
    cy: "4.62",
    r: "4.62",
    transform: "translate(376.874 260.281)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_28",
    "data-name": "Ellipse 28",
    cx: "0.775",
    cy: "0.775",
    r: "0.775",
    transform: "translate(384.833 256.261)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_29",
    "data-name": "Ellipse 29",
    cx: "1.896",
    cy: "1.896",
    r: "1.896",
    transform: "translate(378.329 251.921)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_30",
    "data-name": "Ellipse 30",
    cx: "0.948",
    cy: "0.948",
    r: "0.948",
    transform: "translate(374.096 257.81)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_31",
    "data-name": "Ellipse 31",
    cx: "1.469",
    cy: "1.469",
    r: "1.469",
    transform: "translate(370.01 251.921)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_32",
    "data-name": "Ellipse 32",
    cx: "1.696",
    cy: "1.696",
    r: "1.696",
    transform: "translate(371.479 266.13)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_33",
    "data-name": "Ellipse 33",
    cx: "0.601",
    cy: "0.601",
    r: "0.601",
    transform: "translate(372.093 262.391)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_34",
    "data-name": "Ellipse 34",
    cx: "0.641",
    cy: "0.641",
    r: "0.641",
    transform: "translate(365.189 257.81)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_35",
    "data-name": "Ellipse 35",
    cx: "1.108",
    cy: "1.108",
    r: "1.108",
    transform: "translate(368.568 257.036)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_36",
    "data-name": "Ellipse 36",
    cx: "0.668",
    cy: "0.668",
    r: "0.668",
    transform: "translate(365.83 264.794)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_37",
    "data-name": "Ellipse 37",
    cx: "2.778",
    cy: "2.778",
    r: "2.778",
    transform: "translate(312.428 58.477)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_38",
    "data-name": "Ellipse 38",
    cx: "0.561",
    cy: "0.561",
    r: "0.561",
    transform: "translate(315.486 55.739)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_39",
    "data-name": "Ellipse 39",
    cx: "0.441",
    cy: "0.441",
    r: "0.441",
    transform: "translate(312.428 52.962)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_40",
    "data-name": "Ellipse 40",
    cx: "1.122",
    cy: "1.122",
    r: "1.122",
    transform: "translate(309.437 57.088)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_41",
    "data-name": "Ellipse 41",
    cx: "0.521",
    cy: "0.521",
    r: "0.521",
    transform: "translate(312.081 55.245)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_42",
    "data-name": "Ellipse 42",
    cx: "1.656",
    cy: "1.656",
    r: "1.656",
    transform: "translate(316.608 52.174)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_43",
    "data-name": "Ellipse 43",
    cx: "0.361",
    cy: "0.361",
    r: "0.361",
    transform: "translate(317.996 56.861)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_44",
    "data-name": "Ellipse 44",
    cx: "0.628",
    cy: "0.628",
    r: "0.628",
    transform: "translate(310.265 61.254)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_45",
    "data-name": "Ellipse 45",
    cx: "0.588",
    cy: "0.588",
    r: "0.588",
    transform: "translate(308.849 60.56)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_46",
    "data-name": "Ellipse 46",
    cx: "0.614",
    cy: "0.614",
    r: "0.614",
    transform: "translate(309.049 53.843)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_47",
    "data-name": "Ellipse 47",
    cx: "0.401",
    cy: "0.401",
    r: "0.401",
    transform: "translate(313.323 57.075)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_48",
    "data-name": "Ellipse 48",
    cx: "1.683",
    cy: "1.683",
    r: "1.683",
    transform: "translate(320.347 54.617)",
    fill: "#a0725c"
  }), __jsx("circle", {
    id: "Ellipse_49",
    "data-name": "Ellipse 49",
    cx: "19.764",
    cy: "19.764",
    r: "19.764",
    transform: "translate(417.483 494.562)",
    fill: "#f9c9ab"
  }), __jsx("circle", {
    id: "Ellipse_50",
    "data-name": "Ellipse 50",
    cx: "19.764",
    cy: "19.764",
    r: "19.764",
    transform: "translate(255.206 494.562)",
    fill: "#f9c9ab"
  }), __jsx("path", {
    id: "Path_44",
    "data-name": "Path 44",
    d: "M6.28,0h39.2a6.28,6.28,0,0,1,6.28,6.28V23.205a6.28,6.28,0,0,1-6.28,6.28H6.28A6.28,6.28,0,0,1,0,23.205V6.28A6.28,6.28,0,0,1,6.28,0Z",
    transform: "translate(369.249 319.545)",
    fill: "#8cbff2"
  }), __jsx("rect", {
    id: "Rectangle_26",
    "data-name": "Rectangle 26",
    width: "13.861",
    height: "5.288",
    rx: "1.98",
    transform: "translate(256.568 485.521)",
    fill: "#eab192"
  }), __jsx("rect", {
    id: "Rectangle_27",
    "data-name": "Rectangle 27",
    width: "13.861",
    height: "5.288",
    rx: "1.98",
    transform: "translate(253.457 476.04)",
    fill: "#eab192"
  }), __jsx("rect", {
    id: "Rectangle_28",
    "data-name": "Rectangle 28",
    width: "13.861",
    height: "5.288",
    rx: "1.98",
    transform: "translate(252.202 466.545)",
    fill: "#eab192"
  }), __jsx("rect", {
    id: "Rectangle_29",
    "data-name": "Rectangle 29",
    width: "13.22",
    height: "2.724",
    rx: "1.02",
    transform: "translate(298.794 129.399) rotate(90)",
    fill: "#fff"
  }), __jsx("rect", {
    id: "Rectangle_30",
    "data-name": "Rectangle 30",
    width: "2.724",
    height: "5.208",
    rx: "1.02",
    transform: "translate(296.056 145.598)",
    fill: "#fff"
  }), __jsx("rect", {
    id: "Rectangle_31",
    "data-name": "Rectangle 31",
    width: "11.698",
    height: "33.932",
    transform: "translate(518.976 186.087) rotate(-53.49)",
    fill: "#dfeffc"
  }), __jsx("rect", {
    id: "Rectangle_32",
    "data-name": "Rectangle 32",
    width: "11.698",
    height: "33.932",
    transform: "matrix(0.777, 0.63, -0.63, 0.777, 542.24, 174.654)",
    fill: "#dfeffc"
  }), __jsx("ellipse", {
    id: "Ellipse_51",
    "data-name": "Ellipse 51",
    cx: "2.404",
    cy: "1.562",
    rx: "2.404",
    ry: "1.562",
    transform: "translate(339.653 7.41) rotate(-35.65)",
    fill: "#fff"
  }), __jsx("ellipse", {
    id: "Ellipse_52",
    "data-name": "Ellipse 52",
    cx: "1.082",
    cy: "0.708",
    rx: "1.082",
    ry: "0.708",
    transform: "translate(345.864 4.339) rotate(-35.65)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_32",
    "data-name": "Path 32",
    d: "M266.282,412.031a7.692,7.692,0,0,1-7.692-7.692V379.1h15.37v25.239a7.692,7.692,0,0,1-7.678,7.692Zm-6.356-31.6v23.9a6.356,6.356,0,1,0,12.7,0v-23.9Z",
    transform: "translate(86.729 127.146)",
    fill: "#4f3e52"
  }), __jsx("path", {
    id: "Path_33",
    "data-name": "Path 33",
    d: "M313.223,397.176H295.716A10.55,10.55,0,0,1,285.18,386.64v-1.87h1.335v1.87a9.214,9.214,0,0,0,9.2,9.2h17.507Z",
    transform: "translate(95.646 129.048)",
    fill: "#4f3e52"
  }), __jsx("path", {
    id: "Path_34",
    "data-name": "Path 34",
    d: "M242.29,397.176H224.77V395.84h17.52a9.214,9.214,0,0,0,9.2-9.2v-1.87h1.335v1.87A10.55,10.55,0,0,1,242.29,397.176Z",
    transform: "translate(75.386 129.048)",
    fill: "#4f3e52"
  }), __jsx("rect", {
    id: "Rectangle_33",
    "data-name": "Rectangle 33",
    width: "10.83",
    height: "3.379",
    rx: "1.27",
    transform: "translate(354.533 518.038)",
    fill: "#4f3e52"
  }), __jsx("rect", {
    id: "Rectangle_34",
    "data-name": "Rectangle 34",
    width: "10.83",
    height: "3.379",
    rx: "1.27",
    transform: "translate(354.533 523.513)",
    fill: "#4f3e52"
  }), __jsx("rect", {
    id: "Rectangle_35",
    "data-name": "Rectangle 35",
    width: "10.83",
    height: "3.379",
    rx: "1.27",
    transform: "translate(354.533 528.988)",
    fill: "#4f3e52"
  }), __jsx("path", {
    id: "Path_35",
    "data-name": "Path 35",
    d: "M208.755,114.836a11.832,11.832,0,0,1,2.324-6.917c1.042-1.643-1.549-3.152-2.591-1.522a14.6,14.6,0,0,0-2.738,8.44C205.83,116.758,208.835,116.772,208.755,114.836Z",
    transform: "translate(69.006 35.449)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_36",
    "data-name": "Path 36",
    d: "M213.352,105.5a2.671,2.671,0,0,1,1.188-.855,1.5,1.5,0,1,0-.8-2.9,5.555,5.555,0,0,0-2.524,1.629,1.549,1.549,0,0,0,0,2.123,1.509,1.509,0,0,0,2.137,0Z",
    transform: "translate(70.698 34.11)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_37",
    "data-name": "Path 37",
    d: "M193.273,321.48l1.082,10.576c.254,2.537,4.273,2.564,4.006,0l-1.082-10.576C197.012,318.943,193.006,318.917,193.273,321.48Z",
    transform: "translate(64.818 107.18)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_38",
    "data-name": "Path 38",
    d: "M194.565,334.906a4.22,4.22,0,0,1,.187,1.549,2,2,0,0,0,2,2,2.057,2.057,0,0,0,2-2,8.693,8.693,0,0,0-.334-2.671,2,2,0,0,0-3.859,1.068Z",
    transform: "translate(65.236 111.474)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_39",
    "data-name": "Path 39",
    d: "M234.32,456.193v3.379a2,2,0,1,0,4.006,0v-3.379a2,2,0,1,0-4.006,0Z",
    transform: "translate(78.589 152.331)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_40",
    "data-name": "Path 40",
    d: "M240.689,61.641a25.933,25.933,0,0,1,8.974-6.851c2.337-1.082.307-4.54-2.016-3.459a28.6,28.6,0,0,0-9.788,7.478c-1.669,1.95,1.162,4.807,2.831,2.831Z",
    transform: "translate(79.604 17.147)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_41",
    "data-name": "Path 41",
    d: "M251.629,53.319l2.537-.961a2.043,2.043,0,0,0,1.469-2.457,2.016,2.016,0,0,0-2.47-1.4l-2.537.961a2.043,2.043,0,0,0-1.456,2.4,2.016,2.016,0,0,0,2.457,1.456Z",
    transform: "translate(83.554 16.242)",
    fill: "#fff"
  }), __jsx("path", {
    id: "Path_42",
    "data-name": "Path 42",
    d: "M220.2,148v12.873a2,2,0,0,0,4.006,0V148a2,2,0,1,0-4.006,0Z",
    transform: "translate(73.853 48.967)",
    fill: "#fff"
  }), __jsx("circle", {
    id: "Ellipse_53",
    "data-name": "Ellipse 53",
    cx: "2.551",
    cy: "2.551",
    r: "2.551",
    transform: "translate(293.692 216.961)",
    fill: "#fff"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NerdCharach);

/***/ }),

/***/ "./components/svg/NotifBell.js":
/*!*************************************!*\
  !*** ./components/svg/NotifBell.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/* harmony default export */ __webpack_exports__["default"] = (NotifBell);

/***/ }),

/***/ "./components/svg/ToggleIcon.js":
/*!**************************************!*\
  !*** ./components/svg/ToggleIcon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ToggleIcon = () => {
  return __jsx("svg", {
    height: "30px",
    viewBox: "0 0 512 512",
    width: "30px",
    fill: "#1e68b2"
  }, __jsx("path", {
    d: "m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
  }), __jsx("path", {
    d: "m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
  }), __jsx("path", {
    d: "m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleIcon);

/***/ }),

/***/ "./components/svg/Top_right.js":
/*!*************************************!*\
  !*** ./components/svg/Top_right.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const TopRight = () => {
  return __jsx("svg", {
    width: "300",
    height: "200",
    viewBox: "0 0 880.765 571.519",
    className: "topRight"
  }, __jsx("path", {
    id: "Path_43",
    "data-name": "Path 43",
    d: "M1444.961-101.553C1257.087-58.756,1328.9,17.409,1328.9,89.947s.725,58.756,116.061,98.652,244.454,7.254,345.282,60.932-29.015,132.745,58.031,153.781,232.122,51.5,290.153-69.637S2253.761,27.565,2080.4-81.243,1632.835-144.351,1444.961-101.553Z",
    transform: "translate(-1315.419 148.638)",
    fill: "#dfeffc"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TopRight);

/***/ }),

/***/ "./components/svg/logout.js":
/*!**********************************!*\
  !*** ./components/svg/logout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Logout = () => {
  return __jsx("svg", {
    viewBox: "0 0 512 512"
  }, __jsx("g", null, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M510.371,226.513c-1.088-2.603-2.645-4.971-4.629-6.955l-63.979-63.979c-8.341-8.32-21.824-8.32-30.165,0     c-8.341,8.341-8.341,21.845,0,30.165l27.584,27.584H320.013c-11.797,0-21.333,9.557-21.333,21.333s9.536,21.333,21.333,21.333     h119.168l-27.584,27.584c-8.341,8.341-8.341,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251s10.923-2.069,15.083-6.251     l63.979-63.979c1.984-1.963,3.541-4.331,4.629-6.955C512.525,237.606,512.525,231.718,510.371,226.513z"
  }), __jsx("path", {
    d: "M362.68,298.667c-11.797,0-21.333,9.557-21.333,21.333v106.667h-85.333V85.333c0-9.408-6.187-17.728-15.211-20.437     l-74.091-22.229h174.635v106.667c0,11.776,9.536,21.333,21.333,21.333s21.333-9.557,21.333-21.333v-128     C384.013,9.557,374.477,0,362.68,0H21.347c-0.768,0-1.451,0.32-2.197,0.405c-1.003,0.107-1.92,0.277-2.88,0.512     c-2.24,0.576-4.267,1.451-6.165,2.645c-0.469,0.299-1.045,0.32-1.493,0.661C8.44,4.352,8.376,4.587,8.205,4.715     C5.88,6.549,3.939,8.789,2.531,11.456c-0.299,0.576-0.363,1.195-0.597,1.792c-0.683,1.621-1.429,3.2-1.685,4.992     c-0.107,0.64,0.085,1.237,0.064,1.856c-0.021,0.427-0.299,0.811-0.299,1.237V448c0,10.176,7.189,18.923,17.152,20.907     l213.333,42.667c1.387,0.299,2.795,0.427,4.181,0.427c4.885,0,9.685-1.685,13.525-4.843c4.928-4.053,7.808-10.091,7.808-16.491     v-21.333H362.68c11.797,0,21.333-9.557,21.333-21.333V320C384.013,308.224,374.477,298.667,362.68,298.667z"
  })))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./components/svg/middle_left.js":
/*!***************************************!*\
  !*** ./components/svg/middle_left.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MiddleLeft = () => {
  return __jsx("svg", {
    className: "middleLeft",
    width: "350",
    height: "350",
    viewBox: "0 0 511 511"
  }, __jsx("circle", {
    id: "Ellipse_54",
    "data-name": "Ellipse 54",
    cx: "255.5",
    cy: "255.5",
    r: "255.5",
    fill: "#dfeffc"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MiddleLeft);

/***/ }),

/***/ "./components/svg/profile.js":
/*!***********************************!*\
  !*** ./components/svg/profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/svg/settings.js":
/*!************************************!*\
  !*** ./components/svg/settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Settings = () => {
  return __jsx("svg", {
    viewBox: "0 0 490.667 490.667"
  }, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M488.683,214.592c-1.6-12.437-8.64-23.253-19.307-29.696c-10.475-6.315-23.125-7.488-34.837-3.115    c-9.301,3.456-19.712-1.323-23.936-10.752c-4.971-11.136-11.115-21.803-18.219-31.701c-6.165-8.576-5.013-19.84,2.645-26.155    c9.493-7.787,14.784-19.307,14.549-31.595c-0.256-12.48-6.123-24-16.149-31.573c-16.299-12.352-34.091-22.635-52.885-30.549    c-11.627-4.885-24.597-4.245-35.541,1.792c-10.752,5.909-18.091,16.256-20.096,28.373c-1.643,9.856-10.901,16.235-21.44,15.36    c-11.925-1.259-24.363-1.259-36.309,0c-10.688,0.875-19.797-5.483-21.419-15.339c-2.005-12.139-9.323-22.485-20.075-28.395    c-10.987-6.037-23.915-6.699-35.563-1.813c-18.816,7.936-36.608,18.219-52.885,30.549c-10.005,7.595-15.893,19.093-16.128,31.573    c-0.256,12.288,5.056,23.829,14.549,31.659c7.68,6.315,8.811,17.536,2.645,26.133c-7.125,9.941-13.269,20.587-18.219,31.68    c-4.245,9.472-14.763,14.208-24.149,10.667c-11.477-4.288-24.085-3.115-34.603,3.2c-10.667,6.421-17.728,17.237-19.328,29.675    C0.661,224.789,0,235.136,0,245.333s0.661,20.544,1.984,30.741c1.6,12.437,8.64,23.275,19.307,29.696    c10.517,6.336,23.147,7.552,34.859,3.115c9.131-3.392,19.669,1.28,23.915,10.752c4.949,11.093,11.093,21.76,18.219,31.701    c6.165,8.576,5.013,19.819-2.667,26.155c-9.472,7.787-14.763,19.307-14.528,31.595c0.256,12.48,6.123,24,16.128,31.595    c16.256,12.309,34.048,22.592,52.885,30.549c5.163,2.176,10.581,3.243,15.979,3.243c6.763,0,13.483-1.685,19.563-5.056    c10.752-5.909,18.091-16.277,20.096-28.373c1.643-9.856,11.008-16.405,21.44-15.339c11.925,1.259,24.363,1.259,36.309,0    c10.603-1.045,19.776,5.483,21.419,15.339c2.027,12.117,9.344,22.464,20.096,28.373c10.987,6.059,23.915,6.677,35.541,1.813    c18.816-7.936,36.608-18.219,52.885-30.549c10.005-7.595,15.872-19.115,16.128-31.595c0.235-12.288-5.077-23.808-14.592-31.616    c-7.659-6.315-8.789-17.536-2.624-26.133c7.125-9.899,13.248-20.587,18.219-31.68c4.267-9.493,14.848-14.144,23.936-10.773    l0.235,0.085c11.52,4.352,24.149,3.136,34.624-3.179c10.688-6.443,17.707-17.259,19.307-29.675    c1.344-10.155,2.005-20.501,2.005-30.784S490.005,224.704,488.683,214.592z M245.333,341.333c-52.928,0-96-43.072-96-96    s43.072-96,96-96c52.928,0,96,43.072,96,96S298.261,341.333,245.333,341.333z"
  }))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_body_section1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/body_section1 */ "./components/body_section1.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_svg_Top_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/svg/Top_right */ "./components/svg/Top_right.js");
/* harmony import */ var _components_body_section2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/body_section2 */ "./components/body_section2.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_svg_middle_left__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/svg/middle_left */ "./components/svg/middle_left.js");
/* harmony import */ var _components_svg_Bottom_left__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/svg/Bottom_left */ "./components/svg/Bottom_left.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//Components and dependecies




 // Styles files 




 // -----------------------------------------------------

const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "body"
  }, __jsx("div", {
    className: "Container"
  }, __jsx(_components_svg_Top_right__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Acceuil | 6 solutions"
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    active: "acceuil"
  }), __jsx(_components_body_section1__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_svg_middle_left__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_body_section2__WEBPACK_IMPORTED_MODULE_5__["default"], null))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/AutoComplete.scss":
/*!**********************************!*\
  !*** ./styles/AutoComplete.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/ant-picker.scss":
/*!********************************!*\
  !*** ./styles/ant-picker.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/bodySection1.scss":
/*!**********************************!*\
  !*** ./styles/bodySection1.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/bodySection2.scss":
/*!**********************************!*\
  !*** ./styles/bodySection2.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/footer.scss":
/*!****************************!*\
  !*** ./styles/footer.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header.scss":
/*!****************************!*\
  !*** ./styles/header.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYm9keV9zZWN0aW9uMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvZHlfc2VjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3ZnL0JvdHRvbV9sZWZ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3ZnL05lcmRDaGFyYWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3ZnL05vdGlmQmVsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N2Zy9Ub2dnbGVJY29uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3ZnL1RvcF9yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N2Zy9sb2dvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdmcvbWlkZGxlX2xlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdmcvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N2Zy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwic2VhcmNoSXRlbSIsIk9wdGlvbiIsIkF1dG9Db21wbGV0ZSIsIm5hbWVPcHRpb25zIiwic2V0T3B0aW9ucyIsInVzZVN0YXRlIiwiTmFtZXMiLCJzZXROYW1lcyIsIkNpdHlPcHRpb25zIiwic2V0Q2l0eU9wdGlvbnMiLCJEb21haW5lT3B0aW9ucyIsInNldERvbWFpbmVPcHRpb25zIiwibmFtZVRleHQiLCJzZXROYW1ldGV4dCIsImRvbWFpbmVUZXh0Iiwic2V0ZG9tYWluZXRleHQiLCJjaXR5VGV4dCIsInNldGNpdHl0ZXh0IiwiY2hlY2tlciIsImFycmF5IiwiZWxzIiwibWFwIiwiZWxlbWVudCIsImRvbWFpbmUiLCJkb20iLCJpbmNsdWRlcyIsInB1c2giLCJvblNlYXJjaE5hbWUiLCJzZWFyY2hUZXh0IiwiVXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInVuZGVmaW5lZCIsInByb2ZpbGUiLCJsZW5ndGgiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJvblNlYXJjaENpdGllcyIsImZpbHRlciIsImVtIiwiY2l0eSIsInRvTG93ZXJDYXNlIiwib25TZWxlY3ROYW1lIiwib25TZWxlY3REb21haW5lIiwib25TZWxlY3RDaXR5Iiwib25TZWFyY2hEb21haW5lIiwidXNlRWZmZWN0IiwiY29tcGFueW5hbWUiLCJuYW1lIiwiU2VhcmNoQ2FyZCIsInByb3BzIiwiaXNGdWxsIiwic2V0RnVsbHRleHQiLCJwcmVzZW50YXRpb24iLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJVc3JpbWciLCJzdGFycyIsInN1YnN0ciIsIl9pZCIsIkJvZHlfc2VjdGlvbjEiLCJCb2R5U2VjdGlvbjIiLCJzZXREYXRhIiwic2V0TG9hZGluZyIsInJlc3BvbnNlIiwicHJvZmlsZXMiLCJGb290ZXIiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJkZWZhdWx0S2V5d29yZHMiLCJkZWZhdWx0T0dVUkwiLCJkZWZhdWx0T0dJbWFnZSIsIkhlYWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ1cmwiLCJvZ0ltYWdlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiRHJvcGRvd25JdGVtIiwib25DbGljayIsImxlZnRpY29uIiwiY2hpbGRyZW4iLCJEcm9wRG93biIsInVzZXJpZCIsImNvdW50IiwiaGFuZGxlTG9nb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwicmVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0ZXh0RGVjb3JhdGlvbiIsIkhlYWRlciIsImFjdGl2ZSIsInNldFVzZXJJRCIsInVzZXJJZCIsInNldFRva2VuIiwiY2hlY2tTdGF0dXMiLCJzZXRDaGVja1N0YXR1cyIsIm9wZW5lZCIsInNldE9wZW4iLCJOb3RpZlZpZXciLCJlcnJvciIsImhhbmRsZUNsaWNrIiwicmVwbGFjZSIsImFzc2lnbiIsImN1cnNvciIsInR5cGUiLCJub20iLCJwcmVub20iLCJCb3R0b21MZWZ0IiwiTmVyZENoYXJhY2giLCJOb3RpZkJlbGwiLCJUb2dnbGVJY29uIiwiVG9wUmlnaHQiLCJMb2dvdXQiLCJNaWRkbGVMZWZ0IiwiUHJvZmlsZSIsIlNldHRpbmdzIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QSxFQU1BLGdCQU5BLEVBUUEsZ0JBUkEsRUFVQSxnQkFWQSxFQVlBLGdCQVpBLEVBY0EsZ0JBZEEsRUFnQkEsZ0JBaEJBLEVBa0JBLGdCQWxCQSxFQW9CQSxnQkFwQkEsRUFzQkEsZ0JBdEJBLEVBd0JBLGdCQXhCQSxFQTBCQSxnQkExQkEsRUE0QkEsZ0JBNUJBLEVBOEJBLGdCQTlCQSxFQWdDQSxnQkFoQ0EsRUFrQ0EsZ0JBbENBLENBREM7QUF3Q0EsQ0F6Q0Q7O0FBMENlQSx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBRWpCLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLGlFQUFELE9BREYsRUFFRSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFDO0FBQVosSUFGRixFQUdFLE1BQUMsMERBQUQ7QUFBUSxVQUFNLEVBQUM7QUFBZixJQUhGLEVBSUUsTUFBQyxpRUFBRCxPQUpGLEVBS0UsTUFBQyxtRUFBRCxPQUxGLEVBTUUsTUFBQyxpRUFBRCxPQU5GLENBREYsQ0FERixFQVdFLE1BQUMsMERBQUQsT0FYRixDQURGO0FBZ0JDLENBbEJIOztBQW1CZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBBdXRvQ29tcGxldGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BdXRvQ29tcGxldGUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2FudC1waWNrZXIuc2Nzcyc7XHJcbmNvbnN0IFNlYXJjaEJhciA9ICh7c2VhcmNoSXRlbX0pPT57XHJcblxyXG4gICAgY29uc3QgeyBPcHRpb24gfSA9IEF1dG9Db21wbGV0ZTtcclxuICAgIGNvbnN0IFtuYW1lT3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbTmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtDaXR5T3B0aW9ucywgc2V0Q2l0eU9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW0RvbWFpbmVPcHRpb25zLCBzZXREb21haW5lT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmFtZVRleHQgLCBzZXROYW1ldGV4dF09IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RvbWFpbmVUZXh0ICwgc2V0ZG9tYWluZXRleHRdPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjaXR5VGV4dCAsIHNldGNpdHl0ZXh0XT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBjaGVja2VyID0gIChhcnJheSk9PntcclxuICAgICAgICB2YXIgZWxzID0gW10gOyBcclxuICAgICAgICAgYXJyYXkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5kb21haW5lLm1hcChkb20gPT4ge1xyXG4gICAgICAgICAgZWxzLmluY2x1ZGVzKGRvbSkgPyAnbnVsbCcgOiBlbHMucHVzaChkb20pXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgcmV0dXJuIGVscyA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2hOYW1lID0gc2VhcmNoVGV4dCA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIHNldE5hbWV0ZXh0KHNlYXJjaFRleHQpO1xyXG4gICAgICAgIGNvbnN0IFVybCA9ICcvYXBpL3Byb2ZpbGVzL3NlYXJjaD9jb21wYW55bmFtZT0nK25hbWVUZXh0KycmZG9tYWluZT0nK2RvbWFpbmVUZXh0KycmY2l0eT0nK2NpdHlUZXh0KycmcGFnZT0xJyA7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFVybCkudGhlbigoe2RhdGF9KSA9PntcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TmFtZXMoZGF0YS5wcm9maWxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChOYW1lcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucyghc2VhcmNoVGV4dCA/IFtdIDogTmFtZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2hDaXRpZXMgPSBzZWFyY2hUZXh0ID0+IHtcclxuICAgICAgICBzZXRjaXR5dGV4dChzZWFyY2hUZXh0KVxyXG4gICAgICAgIGNvbnN0IFVybCA9ICcvYXBpL3Byb2ZpbGVzL3NlYXJjaD9jb21wYW55bmFtZT0nK25hbWVUZXh0KycmZG9tYWluZT0nK2RvbWFpbmVUZXh0KycmY2l0eT0nK2NpdHlUZXh0KycmcGFnZT0xJyA7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFVybCkudGhlbigoe2RhdGF9KSA9PntcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TmFtZXMoZGF0YS5wcm9maWxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChOYW1lcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0Q2l0eU9wdGlvbnMoIXNlYXJjaFRleHQgPyBbXSA6IE5hbWVzLmZpbHRlcihlbSA9PiBlbS5jaXR5LmluY2x1ZGVzKHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSApKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfTtcclxuICAgICAgXHJcbiAgICBjb25zdCBvblNlbGVjdE5hbWUgPSBkYXRhID0+IHtcclxuICAgICAgICBzZXROYW1ldGV4dChkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25TZWxlY3REb21haW5lID0gZGF0YSA9PiB7XHJcbiAgICAgICBzZXRkb21haW5ldGV4dChkYXRhKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvblNlbGVjdENpdHkgPSBkYXRhID0+IHtcclxuICAgICAgICBzZXRjaXR5dGV4dChkYXRhKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvblNlYXJjaERvbWFpbmUgPSBzZWFyY2hUZXh0ID0+IHtcclxuICAgICAgICBzZXRkb21haW5ldGV4dChzZWFyY2hUZXh0KVxyXG4gICAgICAgIGNvbnN0IFVybCA9ICcvYXBpL3Byb2ZpbGVzL3NlYXJjaD9jb21wYW55bmFtZT0nK25hbWVUZXh0KycmZG9tYWluZT0nK2RvbWFpbmVUZXh0KycmY2l0eT0nK2NpdHlUZXh0KycmcGFnZT0xJyA7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFVybCkudGhlbigoe2RhdGF9KSA9PntcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TmFtZXMoZGF0YS5wcm9maWxlKTtcclxuICAgICAgICAgICAgICAgIGlmIChOYW1lcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0RG9tYWluZU9wdGlvbnMoIXNlYXJjaFRleHQgPyBbXSA6IGNoZWNrZXIoTmFtZXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKHNlYXJjaEl0ZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXROYW1ldGV4dChzZWFyY2hJdGVtLmNvbXBhbnluYW1lKTtcclxuICAgICAgICAgICAgc2V0ZG9tYWluZXRleHQoc2VhcmNoSXRlbS5kb21haW5lKTtcclxuICAgICAgICAgICAgc2V0Y2l0eXRleHQoc2VhcmNoSXRlbS5jaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuIGNsYXNzTmFtZT1cImZhIGZhLWlkLWNhcmQgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNoTmFtZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lVGV4dH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29jacOpdMOpL1BlcnNvbm5lXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAge25hbWVPcHRpb25zLm1hcChuYW1lID0+KFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtuYW1lLmNvbXBhbnluYW1lfSB2YWx1ZT17bmFtZS5jb21wYW55bmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWUuY29tcGFueW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW4gY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmUgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlIGNsYXNzTmFtZT1cInNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgICAgdmFsdWU9e2RvbWFpbmVUZXh0fVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0RG9tYWluZX0gb25TZWFyY2g9e29uU2VhcmNoRG9tYWluZX0gcGxhY2Vob2xkZXI9XCJEb21haW5lXCI+XHJcbiAgICAgICAgICAgICAgICB7RG9tYWluZU9wdGlvbnMubWFwKGRvbWFpbmUgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2RvbWFpbmV9IHZhbHVlPXtkb21haW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkb21haW5lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3RDaXR5fVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNoQ2l0aWVzfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWaWxsZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eVRleHR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Q2l0eU9wdGlvbnMubWFwKGVsZW1lbnQgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2VsZW1lbnQuY2l0eX0gdmFsdWU9e2VsZW1lbnQuY2l0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5jaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlYXJjaEJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBocmVmPXsnL1NlYXJjaD9jb21wYW55bmFtZT0nK25hbWVUZXh0KycmZG9tYWluZT0nK2RvbWFpbmVUZXh0KycmY2l0eT0nK2NpdHlUZXh0KycmcGFnZT0xJyB9PlxyXG4gICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhciA7IiwiaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHt1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgU2VhcmNoQ2FyZCA9IChwcm9wcyk9PntcclxuXHJcbiAgICAgICAgY29uc3QgW2lzRnVsbCAsIHNldEZ1bGx0ZXh0XSA9IHVzZVN0YXRlKHByb3BzLnByb2ZpbGUgIT09ICcnID8gcHJvcHMucHJvZmlsZS5wcmVzZW50YXRpb24ubGVuZ3RoIDwgMTUwIDogJycpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9XCJcIjtcclxuICAgICAgICBpZiAocHJvcHMucHJvZmlsZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgcHJvcHMucHJvZmlsZS5wcmVzZW50YXRpb24ubGVuZ3RoID4gMTUwID8gdmFsdWUgPSBcIi4uLmVuIHZvaXIgcGx1c1wiIDogJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17cHJvcHMubG9hZGluZ30gIGFjdGl2ZT17dHJ1ZX0gYXZhdGFyPXt0cnVlfSByb3VuZD5cclxuICAgICAgICAgICB7cHJvcHMucHJvZmlsZSAhPT0gJycgJiYoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZF9IZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2ZpbGUuVXNyaW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwcm9wcy5wcm9maWxlLmNvbXBhbnluYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvcHMucHJvZmlsZS5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5wcm9maWxlLnN0YXJzLmxlbmd0aH0gSidhaW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcmRfQm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QSBwcm9wb3MgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzRnVsbCA/IHByb3BzLnByb2ZpbGUucHJlc2VudGF0aW9uLnN1YnN0cigwLCAxNTApIDogcHJvcHMucHJvZmlsZS5wcmVzZW50YXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzRnVsbCA/ICg8c3BhbiBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17KCk9PnNldEZ1bGx0ZXh0KHRydWUpfT5Wb2lyIHBsdXM8L3NwYW4+KTpcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMEM3MkJGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9yZTpob3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZF9mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnByb2ZpbGUuX2lkICE9PSB1bmRlZmluZWQgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIiBocmVmPXtgL1Byb2ZpbGVzLyR7cHJvcHMucHJvZmlsZS5faWR9YH0+Vm9pciBwcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZmlsZS5faWQgPT09IHVuZGVmaW5lZCAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+Vm9pciBwcm9maWxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ2FyZCA7IiwiLy8gZGVwZW5kZWNpZXMgXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBvbmVudHMgYW5kIHN0eWxlcyBpbXBvcnRzXHJcblxyXG5pbXBvcnQgQ2hhcmFjaCBmcm9tICcuL3N2Zy9OZXJkQ2hhcmFjdCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2JvZHlTZWN0aW9uMS5zY3NzJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL1NlYXJjaEJhcic7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IEJvZHlfc2VjdGlvbjEgPSAoKT0+e1xyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjFfY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMZWZ0X3NlZ21lbnRcIj5cclxuICAgICAgICAgIDxoMT5SZWNoZXJjaGV6IGRlcyBlbnRyZXByaXNlcyBldCBvcmdhbmlzZXogdW5lIHLDqXVuaW9uPC9oMT5cclxuICAgICAgICAgIDxTZWFyY2hCYXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfc2VnbWVudFwiPlxyXG4gICAgICAgICAgPENoYXJhY2ggLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5X3NlY3Rpb24xIDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9ib2R5U2VjdGlvbjIuc2NzcydcclxuaW1wb3J0IFNlYXJjaENhcmQgZnJvbSAnLi9TZWFyY2hDYXJkJztcclxuaW1wb3J0IHt1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnIDtcclxuY29uc3QgQm9keVNlY3Rpb24yID0gKHByb3BzKT0+e1xyXG4gICAgXHJcbiAgY29uc3QgW3Byb2ZpbGUgLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZyAsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9wcm9maWxlcy9ob3Rwcm9maWxlc1wiKVxyXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+e1xyXG4gICAgICAgICAgc2V0RGF0YShkYXRhLnJlc3BvbnNlLnByb2ZpbGVzKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfSxbXSlcclxuXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5U2VjdGlvbjJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPlF1ZWxxdWVzIGVudHJlcHJpc2UgbGVzIHBsdXMgY29ubnVlczwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZHNDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFNlYXJjaENhcmQgY2xhc3NOYW1lPVwiQ2FyZDFcIiBwcm9maWxlPXtsb2FkaW5nIHx8IHByb2ZpbGVbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogcHJvZmlsZVswXX0gbG9hZGluZz17bG9hZGluZ30vPlxyXG4gICAgICAgICAgICA8U2VhcmNoQ2FyZCBjbGFzc05hbWU9XCJDYXJkMSBzZWNvbmRcIiBwcm9maWxlPXtsb2FkaW5nIHx8IHByb2ZpbGVbMV09PT0gdW5kZWZpbmVkICA/ICcnIDpwcm9maWxlWzFdfSBsb2FkaW5nPXtsb2FkaW5nfS8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hDYXJkIGNsYXNzTmFtZT1cIkNhcmQxIHRoaXJkXCIgcHJvZmlsZT17bG9hZGluZyAgfHwgcHJvZmlsZVsyXT09PSB1bmRlZmluZWQgID8gJycgOnByb2ZpbGVbMl19IGxvYWRpbmc9e2xvYWRpbmd9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keVNlY3Rpb24yIDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9mb290ZXIuc2Nzcyc7XHJcbmNvbnN0IEZvb3RlciA9ICgpID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgwqkgMjAyMCA2U29sdXRpb25zLiBUb3VzIGxlcyBkcm9pdHMgc29udCByw6lzZXJ2w6lzLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciA7IiwiaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gJyc7XG5jb25zdCBkZWZhdWx0S2V5d29yZHMgPSAnJztcbmNvbnN0IGRlZmF1bHRPR1VSTCA9ICcnO1xuY29uc3QgZGVmYXVsdE9HSW1hZ2UgPSAnJztcblxuY29uc3QgSGVhZCA9IChwcm9wcykgPT4gKFxuICA8TmV4dEhlYWQ+XG4gICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICA8dGl0bGU+e3Byb3BzLnRpdGxlIHx8IFwiXCJ9PC90aXRsZT5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDxtZXRhXG4gICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgIC8+XG4gICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17cHJvcHMua2V5d29yZHMgfHwgZGVmYXVsdEtleXdvcmRzfSAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJpY29uXCJcbiAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28uaWNvXCJcbiAgICAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJpY29uXCJcbiAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28uaWNvXCJcbiAgICAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAvPlxuICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28uaWNvXCIgLz5cbiAgICA8bGlua1xuICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgaHJlZj1cIi9zdGF0aWMvSWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxuICAgIC8+XG4gICAgPGxpbmtcbiAgICAgIHJlbD1cIm1hc2staWNvblwiXG4gICAgICBocmVmPVwiL3N0YXRpYy9JY29ucy9maXJlX2xvZ28ucG5nXCJcbiAgICAgIGNvbG9yPVwiIzAwMDAwMFwiXG4gICAgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlIHx8IFwiXCJ9IC8+XG4gICAgPG1ldGFcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgIC8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MzBcIiAvPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2EwNzZkMDUzOTkuanNcIiAvPlxuICA8L05leHRIZWFkPlxuKTtcblxuSGVhZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGtleXdvcmRzOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBvZ0ltYWdlOiBzdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWQ7XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9oZWFkZXIuc2Nzcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFByb2ZpbGVJY29uIGZyb20gJy4vc3ZnL3Byb2ZpbGUuanMnIDtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICcuL3N2Zy9zZXR0aW5ncy5qcycgO1xyXG5pbXBvcnQgTG9nb3V0SWNvbiBmcm9tICcuL3N2Zy9sb2dvdXQuanMnIDtcclxuaW1wb3J0IE5vdGlmQmVsbCBmcm9tICcuL3N2Zy9Ob3RpZkJlbGwnO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgVG9nZ2xlSWNvbiBmcm9tICcuL3N2Zy9Ub2dnbGVJY29uJztcclxuXHJcblxyXG5jb25zdCBEcm9wZG93bkl0ZW0gPSAocHJvcHMpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51SXRlbVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiPntwcm9wcy5sZWZ0aWNvbn08L3NwYW4+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5jb25zdCBEcm9wRG93biA9ICh7dXNlcmlkICwgY291bnR9KSA9PntcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PntcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvc2lnbm91dCcse3dpdGhDcmVkZW50aWFscyA6IHRydWV9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gbGVmdGljb249ezxQcm9maWxlSWNvbi8+fT48YSBocmVmPXtgL1Byb2ZpbGVzL2ArdXNlcmlkfSBzdHlsZT17e3RleHREZWNvcmF0aW9uIDogJ25vbmUnfX0+TW9uIHByb2ZpbGU8L2E+PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gbGVmdGljb249ezxCYWRnZSBjb3VudD17Y291bnR9PjxOb3RpZkJlbGwgLz48L0JhZGdlPn0+PGEgaHJlZj17YC9Ob3RpZmljYXRpb25zL2B9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT5Ob3RpZmljYXRpb25zPC9hPjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICB7LyogPERyb3Bkb3duSXRlbSBsZWZ0aWNvbj17PFNldHRpbmdzSWNvbi8+fT48YSBocmVmPXtgL2FjY291bnRzZXR0L2B9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT5QYXJlbWV0cmVzPC9hPjwvRHJvcGRvd25JdGVtPiAqL31cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBsZWZ0aWNvbj17PExvZ291dEljb24vPn0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5TZSBkw6ljb25uZWN0ZXI8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gQ29tcG9uZW5ldCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBIZWFkZXIgPSAoe2FjdGl2ZSAsIHNldFVzZXJJRH0pPT5cclxue1xyXG4gICAgY29uc3QgW3VzZXJJZCAsIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcgLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2NoZWNrU3RhdHVzLHNldENoZWNrU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuZWQgLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkYXRhICwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgY291bnQgPSBkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSE9PSBudWxsID8gZGF0YS5Ob3RpZlZpZXcgOiAnJyA7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvcHJvZmlsZXMvbXlwcm9maWxlJyx7d2l0aENyZWRlbnRpYWxzIDogdHJ1ZX0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+eyAgICAgIFxyXG4gICAgICAgICAgICBzZXREYXRhKHJlcy5kYXRhLnByb2ZpbGUpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHNldFVzZXJJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VySUQocmVzLmRhdGEucHJvZmlsZS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRva2VuKHJlcy5kYXRhLnByb2ZpbGUuX2lkKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFRva2VuKG51bGwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB9KTtcclxuICAgIH0sW10pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL0F1dGgvU2lnbmluXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlcl9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOYXZTd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlXCIgb25DbGljaz17KCk9PnNldENoZWNrU3RhdHVzKCFjaGVja1N0YXR1cyl9PiA8VG9nZ2xlSWNvbi8+IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlcl9Mb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9JY29ucy9MT0dPMjAxNy5wbmdcIiBoZWlnaHQ9XCIzMFwiIG9uQ2xpY2s9eygpPT53aW5kb3cubG9jYXRpb24uYXNzaWduKFwiL1wiKX0gc3R5bGU9e3tjdXJzb3IgOiAncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NoZWNrU3RhdHVzID8gXCJHcmlkTmF2IHZpc2libGVcIiA6IFwiR3JpZE5hdlwiIH0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlPT1cImFjY2V1aWxcIj9cImFjdGl2ZVwiOlwibGlua1wifT48YSBocmVmPVwiL1wiPkFjY2V1aWw8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmU9PVwicHJvcG9zXCI/XCJhY3RpdmVcIjpcImxpbmtcIn0+PGEgaHJlZj1cIi9wcm9wb3NcIj5BIHByb3BvczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZT09XCJ0ZW1vaWduYWdlc1wiP1wiYWN0aXZlXCI6XCJsaW5rXCJ9PjxhIGhyZWY9XCIvdGVtb2lnbmFnZXNcIj5UZW1vaWduYWdlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZT09XCJjb250YWN0XCI/XCJhY3RpdmVcIjpcImxpbmtcIn0+PGEgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZT09XCJxdWVzdGlvbnNcIj9cImFjdGl2ZVwiOlwibGlua1wifT48YSBocmVmPVwiL3F1ZXN0aW9uc1wiPlF1ZXN0aW9uczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyX0J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiB1c2VySWQgPT09IG51bGwgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiSGVhZGVyX3N1YnNjcmliZVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlMnaW5zY3JpcmVcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9BdXRoL1NpZ25VcFwiKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJIZWFkZXJfc2lnbmluXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU2UgY29ubmVjdGVyXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIHVzZXJJZCAhPT0gbnVsbCAmJihcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlVGh1bWJcIiBvbkNsaWNrPXsoKT0+c2V0T3Blbighb3BlbmVkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVJbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgY291bnQ9e2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuVXNyaW1nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50eXBlID09IFwiU29jacOpdMOpXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEuY29tcGFueW5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEudHlwZSA9PSBcIkNsaWVudFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhLm5vbX0ge2RhdGEucHJlbm9tfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wZW5lZCAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd24gdXNlcmlkPXt1c2VySWR9IGNvdW50PXtjb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIEhlYWRlciA7IiwiY29uc3QgQm90dG9tTGVmdCA9ICgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCI3MDBcIlxyXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNjAzLjAwOCA4ODMuNzEyXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJCb3R0b21MZWZ0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBpZD1cIlBhdGhfMTAxXCJcclxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTAxXCJcclxuICAgICAgICAgIGQ9XCJNLTkxLjYsMTg1OS40MzFjNi44Ny0xNDQuMjY2LDIzMi40MjksMTk5LjIyNSwzODkuMjksMjE5LjgzNHMxMjQuOC0xMjkuMzgyLDIzOC4xNTQtMTM3LjRTNTExLjgsMTkyMC4xMTUsNzUxLjEsMjA0Ny4yMDZzODYyLjE2MiwyNTAuNzQ4LDc0MS45NDEsNDAzLjAyOS04MjYuNjY4LDM1My44LTEyMjIuODI4LDIwNi4wOTVTLTk4LjQ2NywyMDAzLjctOTEuNiwxODU5LjQzMVpcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk0LjcyIC0xODI0LjE1NClcIlxyXG4gICAgICAgICAgZmlsbD1cIiNkZmVmZmNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCb3R0b21MZWZ0IDsiLCJjb25zdCBOZXJkQ2hhcmFjaCA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjUwMFwiIHZpZXdCb3g9XCIwIDAgNjA2LjgxNSA3MzcuNDk2XCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfMVwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfOFwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA4XCIgd2lkdGg9XCI1OTAuNTlcIiBoZWlnaHQ9XCIzNjkuMDIyXCIgcng9XCIxMS44MlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNi4yMjUgMTEwLjE5NilcIiBmaWxsPVwiIzRiMmU0Y1wiIG9wYWNpdHk9XCIwLjA4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzlcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgOVwiIHdpZHRoPVwiNDIuNDY1XCIgaGVpZ2h0PVwiMTMzLjY3M1wiIHJ4PVwiMTUuOVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNjAuNjQ5IDYwMi4wMzQpXCIgZmlsbD1cIiM1ODRlNjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMTBcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTBcIiB3aWR0aD1cIjQ3LjU5M1wiIGhlaWdodD1cIjE4Mi4zNDhcIiByeD1cIjE3LjgyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM1OC42MDYgNDc3LjkzNilcIiBmaWxsPVwiIzU4NGU2MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8xXCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAxXCIgY3g9XCIxNy44ODFcIiBjeT1cIjE3Ljg4MVwiIHI9XCIxNy44ODFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzM0LjU1NSlcIiBmaWxsPVwiI2FjODA2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMlwiIGRhdGEtbmFtZT1cIlBhdGggMlwiIGQ9XCJNMjU1LjkxOSwyNy4wNTNhMS45OSwxLjk5LDAsMCwxLTEuNC0uNTc0Yy0zLjEtMy4wMzEtNC4wODYtNy45NDYtNC4wMDYtMTEuNTI0YTE2LjAyNSwxNi4wMjUsMCwwLDEsMS42LTYuNjc3LDIsMiwwLDEsMSwzLjU3OSwxLjgsMTEuOSwxMS45LDAsMCwwLTEuMTc1LDUuMDM0Yy0uMDk0LDIuODE4LjczNCw2LjU0MywyLjc2NCw4LjU0NmEyLDIsMCwwLDEtMS40LDMuNDMyWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4NC4wMTcgMi40MDYpXCIgZmlsbD1cIiNjNjlhODNcIiBvcGFjaXR5PVwiMC44XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzJcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDJcIiBjeD1cIjEuNzIzXCIgY3k9XCIxLjcyM1wiIHI9XCIxLjcyM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMzcuMjM5IDEzLjMxNClcIiBmaWxsPVwiI2M2OWE4M1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8zXCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAzXCIgY3g9XCIwLjY2OFwiIGN5PVwiMC42NjhcIiByPVwiMC42NjhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzQxLjE3OSAxMi4zOTIpXCIgZmlsbD1cIiNjNjlhODNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfNFwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNFwiIGN4PVwiMC45NDhcIiBjeT1cIjAuOTQ4XCIgcj1cIjAuOTQ4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM0Mi41MTQgMTQuODYzKVwiIGZpbGw9XCIjYzY5YTgzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzVcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDVcIiBjeD1cIjEuMzQ5XCIgY3k9XCIxLjM0OVwiIHI9XCIxLjM0OVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMzkuOTM3IDE3LjQ5NClcIiBmaWxsPVwiI2M2OWE4M1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV82XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA2XCIgY3g9XCIwLjYyOFwiIGN5PVwiMC42MjhcIiByPVwiMC42MjhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzQ1LjI1MiAxMi42MTkpXCIgZmlsbD1cIiNjNjlhODNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfN1wiIGRhdGEtbmFtZT1cIkVsbGlwc2UgN1wiIGN4PVwiMC40NTRcIiBjeT1cIjAuNDU0XCIgcj1cIjAuNDU0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM0My4wNjIgMTIuMDA1KVwiIGZpbGw9XCIjYzY5YTgzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzhcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDhcIiBjeD1cIjAuNzA4XCIgY3k9XCIwLjcwOFwiIHI9XCIwLjcwOFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNDUuNDY1IDE1LjM0NClcIiBmaWxsPVwiI2M2OWE4M1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV85XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA5XCIgY3g9XCIwLjE3NFwiIGN5PVwiMC4xNzRcIiByPVwiMC4xNzRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzQxLjYzMyAxMC43MSlcIiBmaWxsPVwiI2M2OWE4M1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8xMVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMVwiIHdpZHRoPVwiNTkwLjU5XCIgaGVpZ2h0PVwiMzY5LjAyMlwiIHJ4PVwiMTEuODJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCA5My43MTgpXCIgZmlsbD1cIiM0YjJlNGNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMTJcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTJcIiB3aWR0aD1cIjIwMC4xMjJcIiBoZWlnaHQ9XCIzMC40MzRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAuOTgxIDEyMS4yNClcIiBmaWxsPVwiI2RmZWZmY1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8xM1wiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxM1wiIHdpZHRoPVwiMjAwLjEyMlwiIGhlaWdodD1cIjEyLjk0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwLjk4MSAxODcuNjQ5KVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzE0XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDE0XCIgd2lkdGg9XCIyMDAuMTIyXCIgaGVpZ2h0PVwiMTIuOTRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAuOTgxIDIxOC4yNylcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8xNVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxNVwiIHdpZHRoPVwiOTEuMTE0XCIgaGVpZ2h0PVwiMTIuODZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAuOTgxIDI0OC45MylcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfM1wiIGRhdGEtbmFtZT1cIlBhdGggM1wiIGQ9XCJNMzUuNTc2LDMyNy4xMjlhMTQuODksMTQuODksMCwxLDEsMTQuOS0xNC44OUExNC44OSwxNC44OSwwLDAsMSwzNS41NzYsMzI3LjEyOVptMC0yMy4wODlhOC4yLDguMiwwLDEsMCw1LjgxNSwyLjM5Miw4LjIxMyw4LjIxMywwLDAsMC01LjgxNS0yLjM5MlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNi45NDMgOTkuNzI4KVwiIGZpbGw9XCIjZGZlZmZjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF80XCIgZGF0YS1uYW1lPVwiUGF0aCA0XCIgZD1cIk00NS4xNywzNDguNTU2YTIuNjcxLDIuNjcxLDAsMCwxLTIuMTYzLTQuMjMzTDUzLjIsMzMwLjM0MWEyLjY3MSwyLjY3MSwwLDEsMSw0LjMyNywzLjEyNUw0Ny4zMzMsMzQ3LjUyOEEyLjY3MSwyLjY3MSwwLDAsMSw0NS4xNywzNDguNTU2Wm05OC4zMTEtMjEuNDQ2YTIuNjcxLDIuNjcxLDAsMCwxLTEuOTEtLjc4OGwtNi45MTctNy4wMTFhMi42NzEsMi42NzEsMCwxLDEsMy43OTItMy43NTJsNC43NjcsNC44MjEsMi42NzEtMy41MjVhMi42NzIsMi42NzIsMCwwLDEsNC4yNDcsMy4yNDVsLTQuNTY3LDUuOTY5YTIuNjcxLDIuNjcxLDAsMCwxLTEuOTUsMS4wNDJabS03Ny4xNDUtNy43MzJhMi42NzEsMi42NzEsMCwwLDEtMi4xNjMtNC4yNDdsMTAuMi0xNC4wNDhhMi42NzEsMi42NzEsMCwxLDEsNC4zMTMsMy4xMzhsLTEwLjE0OSwxNC4xYTIuNjcxLDIuNjcxLDAsMCwxLTIuMiwxLjA1NVpNMTIzLjQxMSwzMDYuOGEyLjY3MSwyLjY3MSwwLDAsMS0xLjktLjc4OGwtMTIuMTkyLTEyLjM1MmEyLjY3MSwyLjY3MSwwLDEsMSwzLjc5My0zLjc1MmwxMi4yMDUsMTIuMzUyYTIuNjcxLDIuNjcxLDAsMCwxLTEuOTEsNC41NFptMzUuOTM1LS40OTRhMi42NzEsMi42NzEsMCwwLDEtMi4xMjMtNC4yODdsMTAuNTUtMTMuNzk1YTIuNjcyLDIuNjcyLDAsMSwxLDQuMjQ3LDMuMjQ1bC0xMC41NSwxMy43OTVBMi42NzEsMi42NzEsMCwwLDEsMTU5LjM0NiwzMDYuM1pNODcuNSwyOTAuMTg2YTIuNjcxLDIuNjcxLDAsMCwxLTIuMTUtNC4yMzNMOTMuNiwyNzQuNTYyYTIuNjY3LDIuNjY3LDAsMCwxLDQuMDYtLjMwN2wyLjMxLDIuMzVhMi42NzEsMi42NzEsMCwxLDEtMy43OTMsMy43NTJsLS4xMDctLjEwNy02LjQxLDguODI3QTIuNjcxLDIuNjcxLDAsMCwxLDg3LjUsMjkwLjE4NlpNMjg0LjAxOCwyODAuN2EyLjY3MSwyLjY3MSwwLDAsMS0yLS45MDhsLTExLjQ4NC0xMy4wMmEyLjY3MSwyLjY3MSwwLDAsMSw0LjAwNi0zLjUyNWwxMS40ODQsMTMuMDJhMi42NzEsMi42NzEsMCwwLDEtMiw0LjQzNFptLTEwMi43MzItMy4wNThhMi42NzEsMi42NzEsMCwwLDEtMi4xMjMtNC4yODdMMTg5LjcsMjU5LjU2NmEyLjY3MiwyLjY3MiwwLDEsMSw0LjI0NywzLjI0NWwtMTAuNTYzLDEzLjc5NUEyLjY3MSwyLjY3MSwwLDAsMSwxODEuMjg2LDI3Ny42NDdabTExNC44NDQtNi4xMTZhMi42NzEsMi42NzEsMCwwLDEtMi4wNDMtNC4zOTNsMTEuMTc3LTEzLjI4N2EyLjY3MiwyLjY3MiwwLDAsMSw0LjA4NiwzLjQ0NWwtMTEuMTc3LDEzLjI4N2EyLjY3MSwyLjY3MSwwLDAsMS0yLjA3LDFabTEwOS41LTcuNDY1YTIuNjcxLDIuNjcxLDAsMCwxLTEuODctLjc2MUwzOTEuNCwyNTEuMTEzYTIuNjcxLDIuNjcxLDAsMCwxLDMuNzM5LTMuODA2TDQwNy41LDI1OS41YTIuNjcxLDIuNjcxLDAsMCwxLTEuODcsNC41NjdabTEyLjg4Ny0uMjU0YTIuNjcxLDIuNjcxLDAsMCwxLTEuOTktNC40NmwxMS41NzgtMTIuOTRhMi42MzcsMi42MzcsMCwwLDEsMy44NzMsMy41NzlMNDIwLjQsMjYyLjkzMWEyLjY3MSwyLjY3MSwwLDAsMS0xLjk5Ljg4MVpNMjYwLjIzNSwyNTMuNjYzYTIuNjcxLDIuNjcxLDAsMCwxLTItLjkwOGwtMTEuNDg0LTEzLjAyYTIuNjcxLDIuNjcxLDAsMCwxLDQuMDA2LTMuNTI1bDExLjQ4NCwxMy4wMmEyLjY3MSwyLjY3MSwwLDAsMS0yLDQuNDM0Wk0yMDMuMjQsMjQ5YTIuNjYzLDIuNjYzLDAsMCwxLTIuMTEtNC4yODdsMTAuNTM2LTEzLjc5NWEyLjY3MiwyLjY3MiwwLDEsMSw0LjI0NywzLjI0NWwtMTAuNTUsMTMuNzk1YTIuNjcxLDIuNjcxLDAsMCwxLTIuMTksMS4wNDJabTExNi4xNzktNS4wNjFhMi42NzEsMi42NzEsMCwwLDEtMi4wNDMtNC4zOTNsMTEuMTc3LTEzLjI4N2EyLjY3MiwyLjY3MiwwLDAsMSw0LjA4NiwzLjQ0NUwzMjEuNDYyLDI0My4wNmEyLjY3MSwyLjY3MSwwLDAsMS0yLjEzNy44ODFabTYwLjU2LTUuMTgxYTIuNjcxLDIuNjcxLDAsMCwxLTEuODgzLS43NzVMMzY1LjczLDIyNS44MDdBMi42NzIsMi42NzIsMCwwLDEsMzY5LjQ4MywyMjJsMTIuMzY2LDEyLjE3OWEyLjY3MSwyLjY3MSwwLDAsMS0xLjg3LDQuNThabTYyLjQ3LTEuOWEyLjY3MSwyLjY3MSwwLDAsMS0xLjk5LTQuNDQ3bDExLjYtMTIuOTEzYTIuNjc3LDIuNjc3LDAsMCwxLDQuMDA2LDMuNTUybC0xMS41NjUsMTIuOTUzQTIuNjcxLDIuNjcxLDAsMCwxLDQ0Mi40NDksMjM2Ljg2NFptLTIwNi4xNTgtMTAuM2EyLjY3MSwyLjY3MSwwLDAsMS0yLS45MDhsLTYuNDM3LTcuMjkxLS42ODEuODk1YTIuNjcyLDIuNjcyLDAsMCwxLTQuMjQ3LTMuMjQ1bDIuNjcxLTMuNDg1YTIuNjg0LDIuNjg0LDAsMCwxLDQuMTI2LS4xNDdsOC41ODcsOS43NDhhMi42NzEsMi42NzEsMCwwLDEtMiw0LjQzNFpNMzQyLjUwOCwyMTYuM2EyLjY3MSwyLjY3MSwwLDAsMS0yLjA0My00LjM5M2w2LjY3Ny03Ljg2NWEyLjY3MSwyLjY3MSwwLDAsMSwzLjkxMy0uMTg3bDUuMDQ4LDQuOTY4YTIuNjcyLDIuNjcyLDAsMSwxLTMuNzUyLDMuODA2bC0yLjk3OC0yLjkzOC00Ljc2Nyw1LjY2MmEyLjY3MSwyLjY3MSwwLDAsMS0yLjA3LDFabTEyMy45NzgtNi4yNjNhMi42NjQsMi42NjQsMCwwLDEtMS45OS00LjQ0N2wxMS41NjQtMTIuOTRhMi42NzcsMi42NzcsMCwwLDEsNC4wMDYsMy41NTJMNDY4LjUsMjA5LjE0MWEyLjY3MSwyLjY3MSwwLDAsMS0yLjAxNi44OTVabTI0LjAzNy0yNi44ODFhMi42NzEsMi42NzEsMCwwLDEtMS45OS00LjQ0N0w1MDAuMSwxNjUuNzU1YTIuNjgyLDIuNjgyLDAsMSwxLDQuMDA2LDMuNTY1bC0xMS41NjQsMTIuOTRhMi42NzEsMi42NzEsMCwwLDEtMi4wMTYuODk1Wm0yNC4wMzctMjYuODgxYTIuNjcxLDIuNjcxLDAsMCwxLTEuOTktNC40Nmw4LjEwNi05LjA2N2EyLjY4MSwyLjY4MSwwLDEsMSw0LjAwNiwzLjU2NWwtOC4xMzMsOS4wOTRBMi42NzEsMi42NzEsMCwwLDEsNTE0LjU2LDE1Ni4yNzNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0LjI1NSA0Ny41NzQpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMTZcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTZcIiB3aWR0aD1cIjQyLjQ2NVwiIGhlaWdodD1cIjEzMy42NzNcIiByeD1cIjE1LjlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzA1LjAwMyA2MDIuMDM0KVwiIGZpbGw9XCIjNjY1YzZkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzE3XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDE3XCIgd2lkdGg9XCI0Ny41OTNcIiBoZWlnaHQ9XCIxODIuMzQ4XCIgcng9XCIxNy44MlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDIuNDM5IDQ3Ny45MzYpXCIgZmlsbD1cIiM2NjVjNmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzVcIiBkYXRhLW5hbWU9XCJQYXRoIDVcIiBkPVwiTTI5Mi40MTQsNTM1LjYyaDE5LjVhMjIuMjM0LDIyLjIzNCwwLDAsMSwyMi4yMzQsMjIuMjM0SDI3MC4xOGEyMi4yMzQsMjIuMjM0LDAsMCwxLDIyLjIzNC0yMi4yMzRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkwLjYxNiAxNzkuNjQyKVwiIGZpbGw9XCIjNGIyZTRjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF82XCIgZGF0YS1uYW1lPVwiUGF0aCA2XCIgZD1cIk0yMzQuNzQ0LDUzNS42MmgxOS41YTIyLjIzNCwyMi4yMzQsMCwwLDEsMjIuMjM0LDIyLjIzNEgyMTIuNTFBMjIuMjM0LDIyLjIzNCwwLDAsMSwyMzQuNzQ0LDUzNS42MlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzEuMjc0IDE3OS42NDIpXCIgZmlsbD1cIiM0YjJlNGNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF81XCIgZGF0YS1uYW1lPVwiR3JvdXAgNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTIuNTQ4IDU2Ni4xOTIpXCIgb3BhY2l0eT1cIjAuMjdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8xOFwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxOFwiIHdpZHRoPVwiNS45MDJcIiBoZWlnaHQ9XCIyMC4wNzFcIiByeD1cIjIuMjFcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMTlcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTlcIiB3aWR0aD1cIjUuOTAyXCIgaGVpZ2h0PVwiMTAuNzIzXCIgcng9XCIyLjIxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMjUuNjgpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMTBcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDEwXCIgY3g9XCI1MS4yNjZcIiBjeT1cIjUxLjI2NlwiIHI9XCI1MS4yNjZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxLjUxOCA0NTguNjI2KVwiIGZpbGw9XCIjNjY1YzZkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF83XCIgZGF0YS1uYW1lPVwiUGF0aCA3XCIgZD1cIk0zNTYuNjQxLDMwNi4zNTFsLTEyLjQ4Niw5OS44Ni0yMy40MDktLjc3NUwzMTAuNjEsMjk0LjY0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNC4xNzUgOTguODE5KVwiIGZpbGw9XCIjZjljOWFiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF84XCIgZGF0YS1uYW1lPVwiUGF0aCA4XCIgZD1cIk0xODguMjYsMzA2LjM1MWwxMi40NzMsOTkuODYsMjMuNDA5LS43NzUsMTAuMTQ5LTExMC44XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYzLjE0MSA5OC44MTkpXCIgZmlsbD1cIiNmOWM5YWJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzlcIiBkYXRhLW5hbWU9XCJQYXRoIDlcIiBkPVwiTTE4OC4yNiwzMDYuMzY1bDYuMDIzLDMuMzEyYTU3LjcxNiw1Ny43MTYsMCwwLDEsMjkuODU5LDUwLjU0NHY0NS4yMTZMMjM0LjI5MSwyOTQuNlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2My4xNDEgOTguODA2KVwiIGZpbGw9XCIjZTE5ZjdmXCIgb3BhY2l0eT1cIjAuNDZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzEwXCIgZGF0YS1uYW1lPVwiUGF0aCAxMFwiIGQ9XCJNMzU2LjUsMzA2LjM2NWwtNi4wMjMsMy4zMTJhNTcuNjg5LDU3LjY4OSwwLDAsMC0yOS44NTksNTAuNTQ0djQ1LjIxNkwzMTAuNDcsMjk0LjZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA0LjEyOSA5OC44MDYpXCIgZmlsbD1cIiNlMTlmN2ZcIiBvcGFjaXR5PVwiMC40NlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMTFcIiBkYXRhLW5hbWU9XCJQYXRoIDExXCIgZD1cIk00MTAuMDc5LDM1Ni4xNmE4MzkuMTE2LDgzOS4xMTYsMCwwLDEtMTEuMjE3LTg1Ljk3MmMtMS4wNjgtMTMuNTk0LTIuMjMtMjguMy0xMS4yMTctMzguNTM5LTcuNDUxLTguNTA2LTE4Ljg1Ni0xMi4xOTItMjkuNjcyLTE1LjUxN2wtMjQuMy03LjUtMzQuOTItMjcuNzQ5YzAtMi4yLDAtNC4zOTMtLjA2Ny02LjZsLTQuMTI2LDMuMjcyLTQuMTEzLTMuMjcyYzAsMi4yLDAsNC4zOTMtLjA2Nyw2LjZsLTM0LjkyLDI3Ljc0OS0yNC4zMTcsNy41Yy0xMC44MTcsMy4zMjUtMjIuMjIxLDcuMDExLTI5LjY4NiwxNS41MTctOC45NzQsMTAuMjQyLTEwLjE0OSwyNC45NDUtMTEuMiwzOC41MzlBODQyLjg2Miw4NDIuODYyLDAsMCwxLDE3OS4wMywzNTYuMTZjLS4yOTQsMS42LS40NDEsMy41OTIuODk1LDQuNTE0YTQuMjg3LDQuMjg3LDAsMCwwLDIuMTIzLjUzNHEyMy43ODMsMS43NjMsNDcuNjMzLDEuNzg5bC4zNzQuNjU0YzExLjY0NSwyNC42NjUsMi44NDQsNTUuMDE4LDEzLjM1NCw4MC4yLDEuMzM1LDMuMTM4LDMuMDE4LDYuMjksNS44NzYsOC4xMTlhMTkuMDY5LDE5LjA2OSwwLDAsMCw4LjIxMywyLjI3LDM1OS4zMDYsMzU5LjMwNiwwLDAsMCw2My4wODQsMS4wMTVjNi4yOS0uMzg3LDEzLjY3NC0uMDY3LDE5LjMtMy4yODUsMi44NTgtMS44MjksNC41OC00Ljk4MSw1Ljg4OS04LjExOSwxMC40ODMtMjUuMTg1LDEuNjgzLTU1LjUzOSwxMy4zNTQtODAuMmwuMzg3LS42NTRxMjMuODM3LDAsNDcuNjItMS43ODlhNC4yMiw0LjIyLDAsMCwwLDIuMTIzLS41MzRDNDEwLjU0NiwzNTkuNzUyLDQxMC40LDM1Ny43NjMsNDEwLjA3OSwzNTYuMTZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU5Ljk3OCA1OC40NTIpXCIgZmlsbD1cIiM0ZjNlNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzEyXCIgZGF0YS1uYW1lPVwiUGF0aCAxMlwiIGQ9XCJNMzQxLjE1OSwyMDkuMWE2My43MTEsNjMuNzExLDAsMCwxLTk0LjU1OSw1Ljg2Miw2My43NTIsNjMuNzUyLDAsMCwwLDY3LjYtMTQuMjA5bDIwLjE2NCw2LjE4M0MzMzYuNjA1LDIwNy42ODEsMzM4LjksMjA4LjM4OCwzNDEuMTU5LDIwOS4xWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4Mi43MDcgNjcuMzMpXCIgZmlsbD1cIiM0NDM1NDdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF82XCIgZGF0YS1uYW1lPVwiR3JvdXAgNlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MDAuNTM3IDI2Mi4xNzcpXCIgb3BhY2l0eT1cIjAuMjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMTNcIiBkYXRhLW5hbWU9XCJQYXRoIDEzXCIgZD1cIk0zMDAuMTQsMTk2LjczMWEuMi4yLDAsMSwwLS4yLS4yQS4yLjIsMCwwLDAsMzAwLjE0LDE5Ni43MzFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTkuOTQgLTE5Ni4zMylcIiBmaWxsPVwiI2YwY2FlN1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMTRcIiBkYXRhLW5hbWU9XCJQYXRoIDE0XCIgZD1cIk0yODEuMjEyLDI0aDBBNjguMjY1LDY4LjI2NSwwLDAsMCwyMTMsOTIuMzA1aDBBMjEuOTk0LDIxLjk5NCwwLDAsMCwyMzQuOTk0LDExNC4zaDkyLjUyOUEyMS45ODEsMjEuOTgxLDAsMCwwLDM0OS41LDkyLjMwNWgwQTY4LjI1Miw2OC4yNTIsMCwwLDAsMjgxLjIxMiwyNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzEuNDM4IDguMDQ5KVwiIGZpbGw9XCIjYWM4MDY3XCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF8xNVwiIGRhdGEtbmFtZT1cIlBhdGggMTVcIiBkPVwiTTIxNi42MSwxMjUuNjUzaDEyNy41djU1LjIzMmE2My43NTIsNjMuNzUyLDAsMCwxLTYzLjc1Miw2My43NTJoMGE2My43NTIsNjMuNzUyLDAsMCwxLTYzLjc1Mi02My43NTJWMTI1LjY1M1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzIuNjQ5IDQyLjEyNSlcIiBmaWxsPVwiI2FjODA2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMTZcIiBkYXRhLW5hbWU9XCJQYXRoIDE2XCIgZD1cIk0yODAuMzIyLDIyMC43MjhoMEE2My43NDEsNjMuNzQxLDAsMCwxLDIxNi41NywxNTYuOTl2MTMuMzY3YTYzLjc1Miw2My43NTIsMCwwLDAsNjMuNzUyLDYzLjc1MmgwYTYzLjc1Miw2My43NTIsMCwwLDAsNjMuNjg1LTYzLjc1MlYxNTdhNjMuNzM1LDYzLjczNSwwLDAsMS02My42NzEsNjMuNzI1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3Mi42MzUgNTIuNjUzKVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzExXCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAxMVwiIGN4PVwiMTkuNDE3XCIgY3k9XCIxOS40MTdcIiByPVwiMTkuNDE3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI3Mi4yMTkgMTMwLjcwOClcIiBmaWxsPVwiI2Y5YzlhYlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMTdcIiBkYXRhLW5hbWU9XCJQYXRoIDE3XCIgZD1cIk0yNDAuMzg2LDEyNS41NDVhMTkuNDE3LDE5LjQxNywwLDEsMS0yOC4zMS0yNC45ODUsMTguOTc2LDE4Ljk3NiwwLDAsMC0yLjMxLDkuMTc0LDE5LjQxNywxOS40MTcsMCwwLDAsMTkuMzc2LDE5LjQ1NywxOS4xOSwxOS4xOSwwLDAsMCwxMS4yNDQtMy42NDZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDY4LjM1NiAzMy43MjcpXCIgZmlsbD1cIiNlMTlmN2ZcIiBvcGFjaXR5PVwiMC4zMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8xMlwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMTJcIiBjeD1cIjEwLjU2M1wiIGN5PVwiMTAuNTYzXCIgcj1cIjEwLjU2M1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyODEuMDczIDEzOS41NjIpXCIgZmlsbD1cIiNkYzhjNzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMTNcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDEzXCIgY3g9XCIxOS40MTdcIiBjeT1cIjE5LjQxN1wiIHI9XCIxOS40MTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzk2LjU3MSAxMzAuNzA4KVwiIGZpbGw9XCIjZjljOWFiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF8xOFwiIGRhdGEtbmFtZT1cIlBhdGggMThcIiBkPVwiTTMzMy41LDEyNS41NDVhMTkuNDE3LDE5LjQxNywwLDEsMS0yOC4zNjQtMjQuOTg1LDE4Ljk3NiwxOC45NzYsMCwwLDAtMi4zMSw5LjE3NCwxOS40MTcsMTkuNDE3LDAsMCwwLDE5LjQzLDE5LjQ1NywxOS4xOSwxOS4xOSwwLDAsMCwxMS4yNDQtMy42NDZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk5LjU5NiAzMy43MjcpXCIgZmlsbD1cIiNlMTlmN2ZcIiBvcGFjaXR5PVwiMC4zMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8xNFwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMTRcIiBjeD1cIjEwLjU2M1wiIGN5PVwiMTAuNTYzXCIgcj1cIjEwLjU2M1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MDUuNDI0IDEzOS41NjIpXCIgZmlsbD1cIiNkYzhjNzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzE5XCIgZGF0YS1uYW1lPVwiUGF0aCAxOVwiIGQ9XCJNMzI0Ljc4Nyw0OS41NzdBNjMuNDMxLDYzLjQzMSwwLDAsMCwyMTYuNSw5NC40MzN2NzUuNTE2YTYzLjQzOCw2My40MzgsMCwxLDAsMTI2Ljg3NSwwbC0uMDEzLTc1LjUxNkE2My4xNTEsNjMuMTUxLDAsMCwwLDMyNC43ODcsNDkuNTc3Wk0yNTMuODY0LDE3Ny4xNjFsLjIxNC4wOTNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzIuNjEyIDEwLjM5NSlcIiBmaWxsPVwiI2Y5YzlhYlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMjBcIiBkYXRhLW5hbWU9XCJQYXRoIDIwXCIgZD1cIk0zMzcuMDU1LDkxLjF2Ny4wNjRjMC0xNi4xMTgtNi40NzctMjQuMDM3LTE2Ljk4Ni0zNC41MzNhNTcuNTE1LDU3LjUxNSwwLDAsMC00MC45ODMtMTcuMDhjLTMyLjA0OSwwLTU3Ljk1NiwyNC43NzEtNTcuOTU2LDU2Ljk1NFY5Ni40NDRjMC0zMi4xODMsMjUuOTQ3LTU2Ljk1NCw1Ny45NTYtNTYuOTU0YTU3LjUxNSw1Ny41MTUsMCwwLDEsNDAuOTgzLDE3LjA4QzMzMC41NzksNjcuMTE5LDMzNy4wNTUsNzUsMzM3LjA1NSw5MS4xWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3NC4xNjUgMTMuMjQ1KVwiIGZpbGw9XCIjZTE5ZjdmXCIgb3BhY2l0eT1cIjAuNjlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzIxXCIgZGF0YS1uYW1lPVwiUGF0aCAyMVwiIGQ9XCJNMzI1LjQyMiw0OC44NTVhNjIuOTY0LDYyLjk2NCwwLDAsMC00NC44NTYtMTguN2MtMzUuMDI3LDAtNjQuNzY2LDI4LjU2NC02NC43NjYsNjMuNzkybDEuMzM1LDc1LjkzYTYzLjQzOCw2My40MzgsMCwxLDAsMTI2Ljg3NSwwbDEuMzIyLTc1LjkzQzM0NS4zNDYsNzYuMzI0LDMzNi45Miw2MC4zOTMsMzI1LjQyMiw0OC44NTVaTTMzOC41MzYsMTY2LjYxYTU3Ljk2Niw1Ny45NjYsMCwxLDEtMTE1LjkzMiwwbC4wMDctNjQuMWMwLTMyLjE4MywyNS45NDctNTYuOTQxLDU3Ljk1Ni01Ni45NDFhNTcuNDIyLDU3LjQyMiwwLDAsMSw0MSwxNy4xMzNjMTAuNTEsMTAuNTM2LDE2Ljk4NiwxOC40MTUsMTYuOTg2LDM0LjUyWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3Mi4zNzcgMTAuMTE1KVwiIGZpbGw9XCIjYWM4MDY3XCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF8yMlwiIGRhdGEtbmFtZT1cIlBhdGggMjJcIiBkPVwiTTMzNi44MjUsODcuNDZ2Ny44MjVjMC0xNi4xMTgtNi40NzctMjQuMDM3LTE2Ljk4Ni0zNC41MzNhNTcuNDIyLDU3LjQyMiwwLDAsMC00MC45ODMtMTcuMDhjLTMyLjA0OSwwLTU3Ljk1NiwyNC43NTgtNTcuOTU2LDU2Ljk1NFY5Mi44YzAtMzIuMTgzLDI1Ljk0Ny01Ni45NDEsNTcuOTU2LTU2Ljk0MWE1Ny40MjIsNTcuNDIyLDAsMCwxLDQxLDE3LjA4QzMzMC4zNDksNjMuNDc2LDMzNi44MjUsNzEuMzU1LDMzNi44MjUsODcuNDZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDc0LjA4OCAxMi4wMjcpXCIgZmlsbD1cIiNhMDcyNWNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMjBcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMjBcIiB3aWR0aD1cIjguMzMzXCIgaGVpZ2h0PVwiMjEuNjczXCIgcng9XCIzLjEyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM0OS4zMjUgMTU0LjA1MSlcIiBmaWxsPVwiI2Q2ODM2ZlwiIG9wYWNpdHk9XCIwLjQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzE1XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAxNVwiIGN4PVwiMTcuNTZcIiBjeT1cIjE3LjU2XCIgcj1cIjE3LjU2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM1OS44MDcgMTIzLjE1KVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzE2XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAxNlwiIGN4PVwiMjUuNDUzXCIgY3k9XCIyNS40NTNcIiByPVwiMjUuNDUzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyNS45NjkgMjAxLjAwMylcIiBmaWxsPVwiI2FjODA2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8xN1wiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMTdcIiBjeD1cIjI1LjQ1M1wiIGN5PVwiMjUuNDUzXCIgcj1cIjI1LjQ1M1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDQuMDI4IDE5Mi4xMDkpXCIgZmlsbD1cIiNhYzgwNjdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMThcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDE4XCIgY3g9XCIyNS40NTNcIiBjeT1cIjI1LjQ1M1wiIHI9XCIyNS40NTNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzUxLjQzNSAxOTEuNTA4KVwiIGZpbGw9XCIjYWM4MDY3XCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzE5XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAxOVwiIGN4PVwiMjUuNDUzXCIgY3k9XCIyNS40NTNcIiByPVwiMjUuNDUzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyNy43NzEgMTgwLjMzMSlcIiBmaWxsPVwiI2FjODA2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMjNcIiBkYXRhLW5hbWU9XCJQYXRoIDIzXCIgZD1cIk0zMjAuNzI1LDE1NC40NmE2OC42OCw2OC42OCwwLDAsMCwuMDgtMTMuMjg3aC0uMDhWOThoMGE3Ljg2NSw3Ljg2NSwwLDAsMC03Ljg1Miw3Ljg2NXYyOS45MjZhMzMuMzg1LDMzLjM4NSwwLDAsMS01Ljk1NiwxOS4zNzYsMjUuNDc5LDI1LjQ3OSwwLDAsMS0yMS42ODcsMTEuMTUxTDMwNS4xLDE5MS4wOWE2Ni4yNjIsNjYuMjYyLDAsMCwwLDE1LjYtMzYuM2gwWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NS42NjMgMzIuODY4KVwiIGZpbGw9XCIjYWM4MDY3XCIgLz5cclxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPVwiRWxsaXBzZV8yMFwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjBcIiBjeD1cIjYuMDYzXCIgY3k9XCI5Ljg1NVwiIHJ4PVwiNi4wNjNcIiByeT1cIjkuODU1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3MS4zMDUgMTMxLjM4OSlcIiBmaWxsPVwiIzRmM2U1MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8yMVwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjFcIiBjeD1cIjE3LjU2XCIgY3k9XCIxNy41NlwiIHI9XCIxNy41NlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTEuNDI2IDEyMy4xNSlcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD1cIkVsbGlwc2VfMjJcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDIyXCIgY3g9XCI2LjA2M1wiIGN5PVwiOS44NTVcIiByeD1cIjYuMDYzXCIgcnk9XCI5Ljg1NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMjMuMzExIDEzMS4zODkpXCIgZmlsbD1cIiM0ZjNlNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMjFcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMjFcIiB3aWR0aD1cIjM4LjkxM1wiIGhlaWdodD1cIjEwLjAxNVwiIHJ4PVwiMy43NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDkuOTE3IDEwMC4xODEpXCIgZmlsbD1cIiNhYzgwNjdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMjJcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMjJcIiB3aWR0aD1cIjM4LjkxM1wiIGhlaWdodD1cIjEwLjAxNVwiIHJ4PVwiMy43NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNTguMDMxIDk4LjM2NSlcIiBmaWxsPVwiI2FjODA2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8yM1wiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjNcIiBjeD1cIjIuOTM4XCIgY3k9XCIyLjkzOFwiIHI9XCIyLjkzOFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMzEuNDg0IDEzNS4zNjgpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMjRcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDI0XCIgY3g9XCIyLjkzOFwiIGN5PVwiMi45MzhcIiByPVwiMi45MzhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc5Ljg1MiAxMzUuMzY4KVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF8yNFwiIGRhdGEtbmFtZT1cIlBhdGggMjRcIiBkPVwiTTI1Mi40ODksMTY2LjMwNWEyNS43MzMsMjUuNzMzLDAsMCwxLTIyLjctMTIuNTY2LDMzLjY1MiwzMy42NTIsMCwwLDEtNS4wODgtMTguMTA4VjEwNS44NTJBNy44NjUsNy44NjUsMCwwLDAsMjE2LjksOThoMGwtLjQsMzAuNzE0djEyLjQxOWMuMDgsNC43MTQtLjA4LDguNjI3LjI2NywxMi41bC4xMzQsMS4ydi42ODFjLjQxNCwzLjg3My4zMDcsNy4yMzgsMS4yMjksMTAuNTYzYTU1Ljk5NCw1NS45OTQsMCwwLDAsMTQuNTQyLDI1LjA1MlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzIuNjEyIDMyLjg2OClcIiBmaWxsPVwiI2FjODA2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8yNVwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjVcIiBjeD1cIjQuNDQ3XCIgY3k9XCI0LjQ0N1wiIHI9XCI0LjQ0N1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNjcuOTkzIDE0MS4yNDQpXCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMC4xNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8yNlwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjZcIiBjeD1cIjQuNDQ3XCIgY3k9XCI0LjQ0N1wiIHI9XCI0LjQ0N1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTkuMTg1IDE0MS4yNDQpXCIgZmlsbD1cIiNmZmZcIiBvcGFjaXR5PVwiMC4xNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8yM1wiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAyM1wiIHdpZHRoPVwiNTEuMzA2XCIgaGVpZ2h0PVwiMTYuOTMzXCIgcng9XCI2LjM0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyNy4zMDQgMjQuOTk5KVwiIGZpbGw9XCIjNGYzZTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF8yNVwiIGRhdGEtbmFtZT1cIlBhdGggMjVcIiBkPVwiTTI5Ni4zOTIsMjUuNmE4LjQ1Myw4LjQ1MywwLDAsMS04LjQ2Niw4LjQ2NmgtMzQuMzZBOC40NjYsOC40NjYsMCwwLDEsMjQ1LjEsMjUuNmE3LjYsNy42LDAsMCwxLC4yOTQtMi4xNSw4LjQyNiw4LjQyNiwwLDAsMCw4LjE3Myw2LjNoMzQuMzZhOC40NTMsOC40NTMsMCwwLDAsOC4xODYtNi4zLDguMSw4LjEsMCwwLDEsLjI4LDIuMTVaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgyLjIwNCA3Ljg2NSlcIiBmaWxsPVwiIzQxMzA0NFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8yNFwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAyNFwiIHdpZHRoPVwiOS4zMjFcIiBoZWlnaHQ9XCI0LjAwNlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNDguNjA0IDEzNC44MzQpXCIgZmlsbD1cIiM0ZjNlNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF83XCIgZGF0YS1uYW1lPVwiR3JvdXAgN1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNTkuNTI3IDExMy4xNjEpXCIgb3BhY2l0eT1cIjAuNTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMjZcIiBkYXRhLW5hbWU9XCJQYXRoIDI2XCIgZD1cIk0zMDUuMDQ1LDg0Ljc0bC0zNS42MjgsNDIuNmExMi4yLDEyLjIsMCwwLDEtLjE4Ny0yLjEyM3YtMjAuOUwyODUuNiw4NC43NFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI2OS4yMyAtODQuNzQpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF8yN1wiIGRhdGEtbmFtZT1cIlBhdGggMjdcIiBkPVwiTTMyMS44NDMsODYuNzQzbC00MS43MzEsNDkuOUgyNzkuN2ExMS4zLDExLjMsMCwwLDEtNy41NTgtMi44NzFMMzEzLjE1LDg0Ljc0aDIuMjNhMTEuNCwxMS40LDAsMCwxLDYuNDYzLDJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNjguMjU0IC04NC43NClcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMjhcIiBkYXRhLW5hbWU9XCJQYXRoIDI4XCIgZD1cIk0zMTYuNywxMzkuNjM5SDI4MS4wMDdhMTMuNDYxLDEzLjQ2MSwwLDAsMS0xMy40NDctMTMuNDQ3Vjk3LjE3NEExMy40NjEsMTMuNDYxLDAsMCwxLDI4MS4wMDcsODMuNzRoMzUuN2ExMy40NDcsMTMuNDQ3LDAsMCwxLDEzLjQzNCwxMy40MzR2MjkuMDE4QTEzLjQ2MSwxMy40NjEsMCwwLDEsMzE2LjcsMTM5LjYzOVpNMjgxLjAwNyw4Ny43NDZhOS40NDEsOS40NDEsMCwwLDAtOS40NDEsOS40Mjh2MjkuMDE4YTkuNDU1LDkuNDU1LDAsMCwwLDkuNDQxLDkuNDQxaDM1LjdhOS40NDEsOS40NDEsMCwwLDAsOS40MjgtOS40NDFWOTcuMTc0YTkuNDQxLDkuNDQxLDAsMCwwLTkuNDI4LTkuNDI4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4OS43MzcgMjguMDg2KVwiIGZpbGw9XCIjNGYzZTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiR3JvdXBfOFwiIGRhdGEtbmFtZT1cIkdyb3VwIDhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjg5Ljc4IDExNC40NDMpXCIgb3BhY2l0eT1cIjAuNTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMjlcIiBkYXRhLW5hbWU9XCJQYXRoIDI5XCIgZD1cIk0yNTIuODU1LDg1LjdsLTM1LjYyOCw0Mi42YTEyLjMxMSwxMi4zMTEsMCwwLDEtLjIyNy0yLjEzN3YtMjAuOUwyMzMuNCw4NS43WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjE3IC04NS43KVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMzBcIiBkYXRhLW5hbWU9XCJQYXRoIDMwXCIgZD1cIk0yNjkuNjQzLDg3LjdsLTQxLjczMSw0OS44OWgtLjQyN2ExMS4yMTcsMTEuMjE3LDAsMCwxLTcuNTQ1LTIuODcxTDI2MC45NSw4NS43aDIuMjNBMTEuMywxMS4zLDAsMCwxLDI2OS42NDMsODcuN1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIxNi4wMTQgLTg1LjcpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzMxXCIgZGF0YS1uYW1lPVwiUGF0aCAzMVwiIGQ9XCJNMjY0LjczMiwxNDAuNTg5SDIyOS4wMjRhMTMuNDQ3LDEzLjQ0NywwLDAsMS0xMy40MzQtMTMuNDM0Vjk4LjEyNEExMy40NjEsMTMuNDYxLDAsMCwxLDIyOS4wMjQsODQuNjloMzUuNzA4YTEzLjQ2MSwxMy40NjEsMCwwLDEsMTMuNDM0LDEzLjQzNHYyOS4wMzFhMTMuNDQ3LDEzLjQ0NywwLDAsMS0xMy40MzQsMTMuNDM0Wk0yMjkuMDI0LDg4LjdhOS40NDEsOS40NDEsMCwwLDAtOS40MjgsOS40Mjh2MjkuMDMxYTkuNDQxLDkuNDQxLDAsMCwwLDkuNDI4LDkuNDI4aDM1LjcwOGE5LjQ0MSw5LjQ0MSwwLDAsMCw5LjQyOC05LjQyOFY5OC4xMjRhOS40NDEsOS40NDEsMCwwLDAtOS40MjgtOS40MjhaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcyLjMwNyAyOC40MDQpXCIgZmlsbD1cIiM0ZjNlNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMjdcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDI3XCIgY3g9XCI0LjYyXCIgY3k9XCI0LjYyXCIgcj1cIjQuNjJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc2Ljg3NCAyNjAuMjgxKVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzI4XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAyOFwiIGN4PVwiMC43NzVcIiBjeT1cIjAuNzc1XCIgcj1cIjAuNzc1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4NC44MzMgMjU2LjI2MSlcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8yOVwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMjlcIiBjeD1cIjEuODk2XCIgY3k9XCIxLjg5NlwiIHI9XCIxLjg5NlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNzguMzI5IDI1MS45MjEpXCIgZmlsbD1cIiNhMDcyNWNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMzBcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDMwXCIgY3g9XCIwLjk0OFwiIGN5PVwiMC45NDhcIiByPVwiMC45NDhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc0LjA5NiAyNTcuODEpXCIgZmlsbD1cIiNhMDcyNWNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMzFcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDMxXCIgY3g9XCIxLjQ2OVwiIGN5PVwiMS40NjlcIiByPVwiMS40NjlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzcwLjAxIDI1MS45MjEpXCIgZmlsbD1cIiNhMDcyNWNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMzJcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDMyXCIgY3g9XCIxLjY5NlwiIGN5PVwiMS42OTZcIiByPVwiMS42OTZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzcxLjQ3OSAyNjYuMTMpXCIgZmlsbD1cIiNhMDcyNWNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfMzNcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDMzXCIgY3g9XCIwLjYwMVwiIGN5PVwiMC42MDFcIiByPVwiMC42MDFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzcyLjA5MyAyNjIuMzkxKVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzM0XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAzNFwiIGN4PVwiMC42NDFcIiBjeT1cIjAuNjQxXCIgcj1cIjAuNjQxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2NS4xODkgMjU3LjgxKVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzM1XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSAzNVwiIGN4PVwiMS4xMDhcIiBjeT1cIjEuMTA4XCIgcj1cIjEuMTA4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2OC41NjggMjU3LjAzNilcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8zNlwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMzZcIiBjeD1cIjAuNjY4XCIgY3k9XCIwLjY2OFwiIHI9XCIwLjY2OFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNjUuODMgMjY0Ljc5NClcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8zN1wiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMzdcIiBjeD1cIjIuNzc4XCIgY3k9XCIyLjc3OFwiIHI9XCIyLjc3OFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTIuNDI4IDU4LjQ3NylcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8zOFwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMzhcIiBjeD1cIjAuNTYxXCIgY3k9XCIwLjU2MVwiIHI9XCIwLjU2MVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTUuNDg2IDU1LjczOSlcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV8zOVwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgMzlcIiBjeD1cIjAuNDQxXCIgY3k9XCIwLjQ0MVwiIHI9XCIwLjQ0MVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTIuNDI4IDUyLjk2MilcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV80MFwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNDBcIiBjeD1cIjEuMTIyXCIgY3k9XCIxLjEyMlwiIHI9XCIxLjEyMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDkuNDM3IDU3LjA4OClcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV80MVwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNDFcIiBjeD1cIjAuNTIxXCIgY3k9XCIwLjUyMVwiIHI9XCIwLjUyMVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTIuMDgxIDU1LjI0NSlcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV80MlwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNDJcIiBjeD1cIjEuNjU2XCIgY3k9XCIxLjY1NlwiIHI9XCIxLjY1NlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTYuNjA4IDUyLjE3NClcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV80M1wiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNDNcIiBjeD1cIjAuMzYxXCIgY3k9XCIwLjM2MVwiIHI9XCIwLjM2MVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTcuOTk2IDU2Ljg2MSlcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV80NFwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNDRcIiBjeD1cIjAuNjI4XCIgY3k9XCIwLjYyOFwiIHI9XCIwLjYyOFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMTAuMjY1IDYxLjI1NClcIiBmaWxsPVwiI2EwNzI1Y1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV80NVwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNDVcIiBjeD1cIjAuNTg4XCIgY3k9XCIwLjU4OFwiIHI9XCIwLjU4OFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDguODQ5IDYwLjU2KVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzQ2XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA0NlwiIGN4PVwiMC42MTRcIiBjeT1cIjAuNjE0XCIgcj1cIjAuNjE0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwOS4wNDkgNTMuODQzKVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzQ3XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA0N1wiIGN4PVwiMC40MDFcIiBjeT1cIjAuNDAxXCIgcj1cIjAuNDAxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxMy4zMjMgNTcuMDc1KVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzQ4XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA0OFwiIGN4PVwiMS42ODNcIiBjeT1cIjEuNjgzXCIgcj1cIjEuNjgzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyMC4zNDcgNTQuNjE3KVwiIGZpbGw9XCIjYTA3MjVjXCIgLz5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzQ5XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA0OVwiIGN4PVwiMTkuNzY0XCIgY3k9XCIxOS43NjRcIiByPVwiMTkuNzY0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQxNy40ODMgNDk0LjU2MilcIiBmaWxsPVwiI2Y5YzlhYlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwiRWxsaXBzZV81MFwiIGRhdGEtbmFtZT1cIkVsbGlwc2UgNTBcIiBjeD1cIjE5Ljc2NFwiIGN5PVwiMTkuNzY0XCIgcj1cIjE5Ljc2NFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNTUuMjA2IDQ5NC41NjIpXCIgZmlsbD1cIiNmOWM5YWJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzQ0XCIgZGF0YS1uYW1lPVwiUGF0aCA0NFwiIGQ9XCJNNi4yOCwwaDM5LjJhNi4yOCw2LjI4LDAsMCwxLDYuMjgsNi4yOFYyMy4yMDVhNi4yOCw2LjI4LDAsMCwxLTYuMjgsNi4yOEg2LjI4QTYuMjgsNi4yOCwwLDAsMSwwLDIzLjIwNVY2LjI4QTYuMjgsNi4yOCwwLDAsMSw2LjI4LDBaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2OS4yNDkgMzE5LjU0NSlcIiBmaWxsPVwiIzhjYmZmMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8yNlwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAyNlwiIHdpZHRoPVwiMTMuODYxXCIgaGVpZ2h0PVwiNS4yODhcIiByeD1cIjEuOThcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjU2LjU2OCA0ODUuNTIxKVwiIGZpbGw9XCIjZWFiMTkyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzI3XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDI3XCIgd2lkdGg9XCIxMy44NjFcIiBoZWlnaHQ9XCI1LjI4OFwiIHJ4PVwiMS45OFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNTMuNDU3IDQ3Ni4wNClcIiBmaWxsPVwiI2VhYjE5MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8yOFwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAyOFwiIHdpZHRoPVwiMTMuODYxXCIgaGVpZ2h0PVwiNS4yODhcIiByeD1cIjEuOThcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjUyLjIwMiA0NjYuNTQ1KVwiIGZpbGw9XCIjZWFiMTkyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzI5XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDI5XCIgd2lkdGg9XCIxMy4yMlwiIGhlaWdodD1cIjIuNzI0XCIgcng9XCIxLjAyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI5OC43OTQgMTI5LjM5OSkgcm90YXRlKDkwKVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzMwXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDMwXCIgd2lkdGg9XCIyLjcyNFwiIGhlaWdodD1cIjUuMjA4XCIgcng9XCIxLjAyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI5Ni4wNTYgMTQ1LjU5OClcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8zMVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAzMVwiIHdpZHRoPVwiMTEuNjk4XCIgaGVpZ2h0PVwiMzMuOTMyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUxOC45NzYgMTg2LjA4Nykgcm90YXRlKC01My40OSlcIiBmaWxsPVwiI2RmZWZmY1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8zMlwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAzMlwiIHdpZHRoPVwiMTEuNjk4XCIgaGVpZ2h0PVwiMzMuOTMyXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzc3LCAwLjYzLCAtMC42MywgMC43NzcsIDU0Mi4yNCwgMTc0LjY1NClcIiBmaWxsPVwiI2RmZWZmY1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD1cIkVsbGlwc2VfNTFcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDUxXCIgY3g9XCIyLjQwNFwiIGN5PVwiMS41NjJcIiByeD1cIjIuNDA0XCIgcnk9XCIxLjU2MlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMzkuNjUzIDcuNDEpIHJvdGF0ZSgtMzUuNjUpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9XCJFbGxpcHNlXzUyXCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA1MlwiIGN4PVwiMS4wODJcIiBjeT1cIjAuNzA4XCIgcng9XCIxLjA4MlwiIHJ5PVwiMC43MDhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzQ1Ljg2NCA0LjMzOSkgcm90YXRlKC0zNS42NSlcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMzJcIiBkYXRhLW5hbWU9XCJQYXRoIDMyXCIgZD1cIk0yNjYuMjgyLDQxMi4wMzFhNy42OTIsNy42OTIsMCwwLDEtNy42OTItNy42OTJWMzc5LjFoMTUuMzd2MjUuMjM5YTcuNjkyLDcuNjkyLDAsMCwxLTcuNjc4LDcuNjkyWm0tNi4zNTYtMzEuNnYyMy45YTYuMzU2LDYuMzU2LDAsMSwwLDEyLjcsMHYtMjMuOVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODYuNzI5IDEyNy4xNDYpXCIgZmlsbD1cIiM0ZjNlNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzMzXCIgZGF0YS1uYW1lPVwiUGF0aCAzM1wiIGQ9XCJNMzEzLjIyMywzOTcuMTc2SDI5NS43MTZBMTAuNTUsMTAuNTUsMCwwLDEsMjg1LjE4LDM4Ni42NHYtMS44N2gxLjMzNXYxLjg3YTkuMjE0LDkuMjE0LDAsMCwwLDkuMiw5LjJoMTcuNTA3WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NS42NDYgMTI5LjA0OClcIiBmaWxsPVwiIzRmM2U1MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMzRcIiBkYXRhLW5hbWU9XCJQYXRoIDM0XCIgZD1cIk0yNDIuMjksMzk3LjE3NkgyMjQuNzdWMzk1Ljg0aDE3LjUyYTkuMjE0LDkuMjE0LDAsMCwwLDkuMi05LjJ2LTEuODdoMS4zMzV2MS44N0ExMC41NSwxMC41NSwwLDAsMSwyNDIuMjksMzk3LjE3NlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzUuMzg2IDEyOS4wNDgpXCIgZmlsbD1cIiM0ZjNlNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfMzNcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMzNcIiB3aWR0aD1cIjEwLjgzXCIgaGVpZ2h0PVwiMy4zNzlcIiByeD1cIjEuMjdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzU0LjUzMyA1MTguMDM4KVwiIGZpbGw9XCIjNGYzZTUyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzM0XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDM0XCIgd2lkdGg9XCIxMC44M1wiIGhlaWdodD1cIjMuMzc5XCIgcng9XCIxLjI3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM1NC41MzMgNTIzLjUxMylcIiBmaWxsPVwiIzRmM2U1MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZV8zNVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAzNVwiIHdpZHRoPVwiMTAuODNcIiBoZWlnaHQ9XCIzLjM3OVwiIHJ4PVwiMS4yN1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNTQuNTMzIDUyOC45ODgpXCIgZmlsbD1cIiM0ZjNlNTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzM1XCIgZGF0YS1uYW1lPVwiUGF0aCAzNVwiIGQ9XCJNMjA4Ljc1NSwxMTQuODM2YTExLjgzMiwxMS44MzIsMCwwLDEsMi4zMjQtNi45MTdjMS4wNDItMS42NDMtMS41NDktMy4xNTItMi41OTEtMS41MjJhMTQuNiwxNC42LDAsMCwwLTIuNzM4LDguNDRDMjA1LjgzLDExNi43NTgsMjA4LjgzNSwxMTYuNzcyLDIwOC43NTUsMTE0LjgzNlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjkuMDA2IDM1LjQ0OSlcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMzZcIiBkYXRhLW5hbWU9XCJQYXRoIDM2XCIgZD1cIk0yMTMuMzUyLDEwNS41YTIuNjcxLDIuNjcxLDAsMCwxLDEuMTg4LS44NTUsMS41LDEuNSwwLDEsMC0uOC0yLjksNS41NTUsNS41NTUsMCwwLDAtMi41MjQsMS42MjksMS41NDksMS41NDksMCwwLDAsMCwyLjEyMywxLjUwOSwxLjUwOSwwLDAsMCwyLjEzNywwWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MC42OTggMzQuMTEpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzM3XCIgZGF0YS1uYW1lPVwiUGF0aCAzN1wiIGQ9XCJNMTkzLjI3MywzMjEuNDhsMS4wODIsMTAuNTc2Yy4yNTQsMi41MzcsNC4yNzMsMi41NjQsNC4wMDYsMGwtMS4wODItMTAuNTc2QzE5Ny4wMTIsMzE4Ljk0MywxOTMuMDA2LDMxOC45MTcsMTkzLjI3MywzMjEuNDhaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDY0LjgxOCAxMDcuMTgpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzM4XCIgZGF0YS1uYW1lPVwiUGF0aCAzOFwiIGQ9XCJNMTk0LjU2NSwzMzQuOTA2YTQuMjIsNC4yMiwwLDAsMSwuMTg3LDEuNTQ5LDIsMiwwLDAsMCwyLDIsMi4wNTcsMi4wNTcsMCwwLDAsMi0yLDguNjkzLDguNjkzLDAsMCwwLS4zMzQtMi42NzEsMiwyLDAsMCwwLTMuODU5LDEuMDY4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2NS4yMzYgMTExLjQ3NClcIiBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIlBhdGhfMzlcIiBkYXRhLW5hbWU9XCJQYXRoIDM5XCIgZD1cIk0yMzQuMzIsNDU2LjE5M3YzLjM3OWEyLDIsMCwxLDAsNC4wMDYsMHYtMy4zNzlhMiwyLDAsMSwwLTQuMDA2LDBaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDc4LjU4OSAxNTIuMzMxKVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF80MFwiIGRhdGEtbmFtZT1cIlBhdGggNDBcIiBkPVwiTTI0MC42ODksNjEuNjQxYTI1LjkzMywyNS45MzMsMCwwLDEsOC45NzQtNi44NTFjMi4zMzctMS4wODIuMzA3LTQuNTQtMi4wMTYtMy40NTlhMjguNiwyOC42LDAsMCwwLTkuNzg4LDcuNDc4Yy0xLjY2OSwxLjk1LDEuMTYyLDQuODA3LDIuODMxLDIuODMxWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3OS42MDQgMTcuMTQ3KVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiUGF0aF80MVwiIGRhdGEtbmFtZT1cIlBhdGggNDFcIiBkPVwiTTI1MS42MjksNTMuMzE5bDIuNTM3LS45NjFhMi4wNDMsMi4wNDMsMCwwLDAsMS40NjktMi40NTcsMi4wMTYsMi4wMTYsMCwwLDAtMi40Ny0xLjRsLTIuNTM3Ljk2MWEyLjA0MywyLjA0MywwLDAsMC0xLjQ1NiwyLjQsMi4wMTYsMi4wMTYsMCwwLDAsMi40NTcsMS40NTZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgzLjU1NCAxNi4yNDIpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJQYXRoXzQyXCIgZGF0YS1uYW1lPVwiUGF0aCA0MlwiIGQ9XCJNMjIwLjIsMTQ4djEyLjg3M2EyLDIsMCwwLDAsNC4wMDYsMFYxNDhhMiwyLDAsMSwwLTQuMDA2LDBaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDczLjg1MyA0OC45NjcpXCIgZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIkVsbGlwc2VfNTNcIiBkYXRhLW5hbWU9XCJFbGxpcHNlIDUzXCIgY3g9XCIyLjU1MVwiIGN5PVwiMi41NTFcIiByPVwiMi41NTFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjkzLjY5MiAyMTYuOTYxKVwiIGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXJkQ2hhcmFjaCA7IiwiY29uc3QgTm90aWZCZWxsID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3ZnICBoZWlnaHQ9XCIzMHB4XCIgd2lkdGg9XCIzMHB4XCIgdmlld0JveD1cIjAgMCA0NzkuNjE5IDQ3OS42MTlcIiBmaWxsPVwiY3VycmVudGNvbG9yXCI+XHJcbjxnPlxyXG5cdDxnPlxyXG5cdFx0PHBhdGggZD1cIk00NzUuODA0LDMzNi4yODZjLTAuNS0yLjctMS4xLTUuNS0yLTguMmMtOC42LTI0LTMzLjItMzguNC01OC4zLTM0LjFjLTguMywxLjMtMTYuMS00LjQtMTcuNC0xMi43bC0xMi42LTgwLjggICAgYy0xMC41LTY4LjUtNjAtMTI0LjYtMTI2LjYtMTQzLjRjLTYuMS0zNy4xLTQxLTYyLjItNzguMS01Ni4yYy0zNi42LDYtNjEuNyw0MC4yLTU2LjQsNzYuOWMtNTcuNCwzNi4zLTg3LjgsMTAzLjMtNzcuMSwxNzAuNSAgICBsMTMuNiw4Ni4xYzEuMiw4LjMtNC40LDE2LjEtMTIuNywxNy40Yy0yNS4yLDMuNi00NC4yLDI0LjgtNDUuMSw1MC4zYy0wLjMsMjguMywyMi40LDUxLjQsNTAuNyw1MS43YzAuMiwwLDAuNCwwLDAuNSwwICAgIGMyLjcsMCw1LjMtMC4yLDgtMC42bDUyLjUtOC4zYzE4LjMsMzIuNiw1OS41LDQ0LjMsOTIuMiwyNmMxNy4yLTkuNywyOS40LTI2LjMsMzMuMy00NS43bDE5Mi45LTMwLjQgICAgQzQ2MS4xMDQsMzkwLjM4Niw0ODAuMjA0LDM2NC4xODYsNDc1LjgwNCwzMzYuMjg2eiBNMTczLjcwNCw0NDUuNDg2Yy03LjIsMC0xNC4zLTIuMy0yMC4xLTYuNmw0Ny44LTcuNSAgICBDMTk1LjAwNCw0NDAuMjg2LDE4NC43MDQsNDQ1LjQ4NiwxNzMuNzA0LDQ0NS40ODZ6IE0yMTkuNzA0LDUxLjM4NmMtNi40LTAuMi0xMi43LDAtMTkuMSwwLjVjLTYuNywwLjYtMTMuMywxLjctMTkuOSwzLjEgICAgYy0xLjQsMC4zLTIuOCwwLjctNC4yLDFjLTUuNCwxLjMtMTAuNiwyLjctMTUuOCw0LjVjLTAuNSwwLjEtMS4xLDAuMi0xLjYsMC40YzMuNi0xMi45LDE0LjQtMjIuNSwyNy42LTI0LjUgICAgYzEuOC0wLjMsMy42LTAuNCw1LjQtMC40YzExLjQsMC4xLDIyLjEsNS44LDI4LjQsMTUuNEgyMTkuNzA0elwiLz5cclxuXHQ8L2c+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPC9zdmc+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZCZWxsIDsiLCJjb25zdCBUb2dnbGVJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICB3aWR0aD1cIjMwcHhcIlxyXG4gICAgICBmaWxsPVwiIzFlNjhiMlwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJtNDY0Ljg4MyA2NC4yNjdoLTQxNy43NjZjLTI1Ljk4IDAtNDcuMTE3IDIxLjEzNi00Ny4xMTcgNDcuMTQ5IDAgMjUuOTggMjEuMTM3IDQ3LjExNyA0Ny4xMTcgNDcuMTE3aDQxNy43NjZjMjUuOTggMCA0Ny4xMTctMjEuMTM3IDQ3LjExNy00Ny4xMTcgMC0yNi4wMTMtMjEuMTM3LTQ3LjE0OS00Ny4xMTctNDcuMTQ5elwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJtNDY0Ljg4MyAyMDguODY3aC00MTcuNzY2Yy0yNS45OCAwLTQ3LjExNyAyMS4xMzYtNDcuMTE3IDQ3LjE0OSAwIDI1Ljk4IDIxLjEzNyA0Ny4xMTcgNDcuMTE3IDQ3LjExN2g0MTcuNzY2YzI1Ljk4IDAgNDcuMTE3LTIxLjEzNyA0Ny4xMTctNDcuMTE3IDAtMjYuMDEzLTIxLjEzNy00Ny4xNDktNDcuMTE3LTQ3LjE0OXpcIiAvPlxyXG4gICAgICA8cGF0aCBkPVwibTQ2NC44ODMgMzUzLjQ2N2gtNDE3Ljc2NmMtMjUuOTggMC00Ny4xMTcgMjEuMTM3LTQ3LjExNyA0Ny4xNDkgMCAyNS45OCAyMS4xMzcgNDcuMTE3IDQ3LjExNyA0Ny4xMTdoNDE3Ljc2NmMyNS45OCAwIDQ3LjExNy0yMS4xMzcgNDcuMTE3LTQ3LjExNyAwLTI2LjAxMi0yMS4xMzctNDcuMTQ5LTQ3LjExNy00Ny4xNDl6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUljb247XHJcbiIsIlxyXG5cclxuXHJcbmNvbnN0IFRvcFJpZ2h0ID0gKCk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjAwXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDg4MC43NjUgNTcxLjUxOVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidG9wUmlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGlkPVwiUGF0aF80M1wiXHJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDQzXCJcclxuICAgICAgICAgIGQ9XCJNMTQ0NC45NjEtMTAxLjU1M0MxMjU3LjA4Ny01OC43NTYsMTMyOC45LDE3LjQwOSwxMzI4LjksODkuOTQ3cy43MjUsNTguNzU2LDExNi4wNjEsOTguNjUyLDI0NC40NTQsNy4yNTQsMzQ1LjI4Miw2MC45MzItMjkuMDE1LDEzMi43NDUsNTguMDMxLDE1My43ODEsMjMyLjEyMiw1MS41LDI5MC4xNTMtNjkuNjM3UzIyNTMuNzYxLDI3LjU2NSwyMDgwLjQtODEuMjQzLDE2MzIuODM1LTE0NC4zNTEsMTQ0NC45NjEtMTAxLjU1M1pcIlxyXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzE1LjQxOSAxNDguNjM4KVwiXHJcbiAgICAgICAgICBmaWxsPVwiI2RmZWZmY1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BSaWdodCA7IiwiY29uc3QgTG9nb3V0ID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiID5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8Zz5cclxuXHRcdFx0PHBhdGggZD1cIk01MTAuMzcxLDIyNi41MTNjLTEuMDg4LTIuNjAzLTIuNjQ1LTQuOTcxLTQuNjI5LTYuOTU1bC02My45NzktNjMuOTc5Yy04LjM0MS04LjMyLTIxLjgyNC04LjMyLTMwLjE2NSwwICAgICBjLTguMzQxLDguMzQxLTguMzQxLDIxLjg0NSwwLDMwLjE2NWwyNy41ODQsMjcuNTg0SDMyMC4wMTNjLTExLjc5NywwLTIxLjMzMyw5LjU1Ny0yMS4zMzMsMjEuMzMzczkuNTM2LDIxLjMzMywyMS4zMzMsMjEuMzMzICAgICBoMTE5LjE2OGwtMjcuNTg0LDI3LjU4NGMtOC4zNDEsOC4zNDEtOC4zNDEsMjEuODQ1LDAsMzAuMTY1YzQuMTYsNC4xODEsOS42MjEsNi4yNTEsMTUuMDgzLDYuMjUxczEwLjkyMy0yLjA2OSwxNS4wODMtNi4yNTEgICAgIGw2My45NzktNjMuOTc5YzEuOTg0LTEuOTYzLDMuNTQxLTQuMzMxLDQuNjI5LTYuOTU1QzUxMi41MjUsMjM3LjYwNiw1MTIuNTI1LDIzMS43MTgsNTEwLjM3MSwyMjYuNTEzelwiLz5cclxuXHRcdFx0PHBhdGggZD1cIk0zNjIuNjgsMjk4LjY2N2MtMTEuNzk3LDAtMjEuMzMzLDkuNTU3LTIxLjMzMywyMS4zMzN2MTA2LjY2N2gtODUuMzMzVjg1LjMzM2MwLTkuNDA4LTYuMTg3LTE3LjcyOC0xNS4yMTEtMjAuNDM3ICAgICBsLTc0LjA5MS0yMi4yMjloMTc0LjYzNXYxMDYuNjY3YzAsMTEuNzc2LDkuNTM2LDIxLjMzMywyMS4zMzMsMjEuMzMzczIxLjMzMy05LjU1NywyMS4zMzMtMjEuMzMzdi0xMjggICAgIEMzODQuMDEzLDkuNTU3LDM3NC40NzcsMCwzNjIuNjgsMEgyMS4zNDdjLTAuNzY4LDAtMS40NTEsMC4zMi0yLjE5NywwLjQwNWMtMS4wMDMsMC4xMDctMS45MiwwLjI3Ny0yLjg4LDAuNTEyICAgICBjLTIuMjQsMC41NzYtNC4yNjcsMS40NTEtNi4xNjUsMi42NDVjLTAuNDY5LDAuMjk5LTEuMDQ1LDAuMzItMS40OTMsMC42NjFDOC40NCw0LjM1Miw4LjM3Niw0LjU4Nyw4LjIwNSw0LjcxNSAgICAgQzUuODgsNi41NDksMy45MzksOC43ODksMi41MzEsMTEuNDU2Yy0wLjI5OSwwLjU3Ni0wLjM2MywxLjE5NS0wLjU5NywxLjc5MmMtMC42ODMsMS42MjEtMS40MjksMy4yLTEuNjg1LDQuOTkyICAgICBjLTAuMTA3LDAuNjQsMC4wODUsMS4yMzcsMC4wNjQsMS44NTZjLTAuMDIxLDAuNDI3LTAuMjk5LDAuODExLTAuMjk5LDEuMjM3VjQ0OGMwLDEwLjE3Niw3LjE4OSwxOC45MjMsMTcuMTUyLDIwLjkwNyAgICAgbDIxMy4zMzMsNDIuNjY3YzEuMzg3LDAuMjk5LDIuNzk1LDAuNDI3LDQuMTgxLDAuNDI3YzQuODg1LDAsOS42ODUtMS42ODUsMTMuNTI1LTQuODQzYzQuOTI4LTQuMDUzLDcuODA4LTEwLjA5MSw3LjgwOC0xNi40OTEgICAgIHYtMjEuMzMzSDM2Mi42OGMxMS43OTcsMCwyMS4zMzMtOS41NTcsMjEuMzMzLTIxLjMzM1YzMjBDMzg0LjAxMywzMDguMjI0LDM3NC40NzcsMjk4LjY2NywzNjIuNjgsMjk4LjY2N3pcIi8+XHJcblx0XHQ8L2c+XHJcblx0PC9nPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPlxyXG5cdClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQgOyIsImNvbnN0IE1pZGRsZUxlZnQgPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJtaWRkbGVMZWZ0XCIgd2lkdGg9XCIzNTBcIiBoZWlnaHQ9XCIzNTBcIiB2aWV3Qm94PVwiMCAwIDUxMSA1MTFcIj5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJFbGxpcHNlXzU0XCIgZGF0YS1uYW1lPVwiRWxsaXBzZSA1NFwiIGN4PVwiMjU1LjVcIiBjeT1cIjI1NS41XCIgcj1cIjI1NS41XCIgZmlsbD1cIiNkZmVmZmNcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1pZGRsZUxlZnQgOyIsImNvbnN0IFByb2ZpbGUgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG48c3ZnIHZpZXdCb3g9XCIwIDAgNDE2IDQxNlwiIGFyaWEtaGlkZGVuID0gXCJ0cnVlXCIgPlxyXG4gICAgPGc+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIwOFwiIGN5PVwiOTZcIiByPVwiOTZcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM5NC40LDI5MS44NzJjLTEwOC05MC42NTYtMjY0LjgzMi05MC42NTYtMzcyLjgzMiwwQzE4LjA0OCwyOTQuODQ4LDE2LDI5OS4yLDE2LDMwMy44NGMwLDE1LjQ1NiwwLDUyLjgzMiwwLDgwLjE5MiAgICAgQzE2LDQwMS42OTYsMzAuMzM2LDQxNiw0OCw0MTZoMzIwYzE3LjY2NCwwLDMyLTE0LjMwNCwzMi0zMS45Njh2LTczLjkyQzQwMCwyOTkuMiwzOTcuOTUyLDI5NC44NDgsMzk0LjQsMjkxLjg3MnpcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbjwvc3ZnPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSA7IiwiY29uc3QgU2V0dGluZ3MgPSAoKT0+e1xyXG5cdHJldHVybihcclxuPHN2ZyB2aWV3Qm94PVwiMCAwIDQ5MC42NjcgNDkwLjY2N1wiID5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8cGF0aCBkPVwiTTQ4OC42ODMsMjE0LjU5MmMtMS42LTEyLjQzNy04LjY0LTIzLjI1My0xOS4zMDctMjkuNjk2Yy0xMC40NzUtNi4zMTUtMjMuMTI1LTcuNDg4LTM0LjgzNy0zLjExNSAgICBjLTkuMzAxLDMuNDU2LTE5LjcxMi0xLjMyMy0yMy45MzYtMTAuNzUyYy00Ljk3MS0xMS4xMzYtMTEuMTE1LTIxLjgwMy0xOC4yMTktMzEuNzAxYy02LjE2NS04LjU3Ni01LjAxMy0xOS44NCwyLjY0NS0yNi4xNTUgICAgYzkuNDkzLTcuNzg3LDE0Ljc4NC0xOS4zMDcsMTQuNTQ5LTMxLjU5NWMtMC4yNTYtMTIuNDgtNi4xMjMtMjQtMTYuMTQ5LTMxLjU3M2MtMTYuMjk5LTEyLjM1Mi0zNC4wOTEtMjIuNjM1LTUyLjg4NS0zMC41NDkgICAgYy0xMS42MjctNC44ODUtMjQuNTk3LTQuMjQ1LTM1LjU0MSwxLjc5MmMtMTAuNzUyLDUuOTA5LTE4LjA5MSwxNi4yNTYtMjAuMDk2LDI4LjM3M2MtMS42NDMsOS44NTYtMTAuOTAxLDE2LjIzNS0yMS40NCwxNS4zNiAgICBjLTExLjkyNS0xLjI1OS0yNC4zNjMtMS4yNTktMzYuMzA5LDBjLTEwLjY4OCwwLjg3NS0xOS43OTctNS40ODMtMjEuNDE5LTE1LjMzOWMtMi4wMDUtMTIuMTM5LTkuMzIzLTIyLjQ4NS0yMC4wNzUtMjguMzk1ICAgIGMtMTAuOTg3LTYuMDM3LTIzLjkxNS02LjY5OS0zNS41NjMtMS44MTNjLTE4LjgxNiw3LjkzNi0zNi42MDgsMTguMjE5LTUyLjg4NSwzMC41NDljLTEwLjAwNSw3LjU5NS0xNS44OTMsMTkuMDkzLTE2LjEyOCwzMS41NzMgICAgYy0wLjI1NiwxMi4yODgsNS4wNTYsMjMuODI5LDE0LjU0OSwzMS42NTljNy42OCw2LjMxNSw4LjgxMSwxNy41MzYsMi42NDUsMjYuMTMzYy03LjEyNSw5Ljk0MS0xMy4yNjksMjAuNTg3LTE4LjIxOSwzMS42OCAgICBjLTQuMjQ1LDkuNDcyLTE0Ljc2MywxNC4yMDgtMjQuMTQ5LDEwLjY2N2MtMTEuNDc3LTQuMjg4LTI0LjA4NS0zLjExNS0zNC42MDMsMy4yYy0xMC42NjcsNi40MjEtMTcuNzI4LDE3LjIzNy0xOS4zMjgsMjkuNjc1ICAgIEMwLjY2MSwyMjQuNzg5LDAsMjM1LjEzNiwwLDI0NS4zMzNzMC42NjEsMjAuNTQ0LDEuOTg0LDMwLjc0MWMxLjYsMTIuNDM3LDguNjQsMjMuMjc1LDE5LjMwNywyOS42OTYgICAgYzEwLjUxNyw2LjMzNiwyMy4xNDcsNy41NTIsMzQuODU5LDMuMTE1YzkuMTMxLTMuMzkyLDE5LjY2OSwxLjI4LDIzLjkxNSwxMC43NTJjNC45NDksMTEuMDkzLDExLjA5MywyMS43NiwxOC4yMTksMzEuNzAxICAgIGM2LjE2NSw4LjU3Niw1LjAxMywxOS44MTktMi42NjcsMjYuMTU1Yy05LjQ3Miw3Ljc4Ny0xNC43NjMsMTkuMzA3LTE0LjUyOCwzMS41OTVjMC4yNTYsMTIuNDgsNi4xMjMsMjQsMTYuMTI4LDMxLjU5NSAgICBjMTYuMjU2LDEyLjMwOSwzNC4wNDgsMjIuNTkyLDUyLjg4NSwzMC41NDljNS4xNjMsMi4xNzYsMTAuNTgxLDMuMjQzLDE1Ljk3OSwzLjI0M2M2Ljc2MywwLDEzLjQ4My0xLjY4NSwxOS41NjMtNS4wNTYgICAgYzEwLjc1Mi01LjkwOSwxOC4wOTEtMTYuMjc3LDIwLjA5Ni0yOC4zNzNjMS42NDMtOS44NTYsMTEuMDA4LTE2LjQwNSwyMS40NC0xNS4zMzljMTEuOTI1LDEuMjU5LDI0LjM2MywxLjI1OSwzNi4zMDksMCAgICBjMTAuNjAzLTEuMDQ1LDE5Ljc3Niw1LjQ4MywyMS40MTksMTUuMzM5YzIuMDI3LDEyLjExNyw5LjM0NCwyMi40NjQsMjAuMDk2LDI4LjM3M2MxMC45ODcsNi4wNTksMjMuOTE1LDYuNjc3LDM1LjU0MSwxLjgxMyAgICBjMTguODE2LTcuOTM2LDM2LjYwOC0xOC4yMTksNTIuODg1LTMwLjU0OWMxMC4wMDUtNy41OTUsMTUuODcyLTE5LjExNSwxNi4xMjgtMzEuNTk1YzAuMjM1LTEyLjI4OC01LjA3Ny0yMy44MDgtMTQuNTkyLTMxLjYxNiAgICBjLTcuNjU5LTYuMzE1LTguNzg5LTE3LjUzNi0yLjYyNC0yNi4xMzNjNy4xMjUtOS44OTksMTMuMjQ4LTIwLjU4NywxOC4yMTktMzEuNjhjNC4yNjctOS40OTMsMTQuODQ4LTE0LjE0NCwyMy45MzYtMTAuNzczICAgIGwwLjIzNSwwLjA4NWMxMS41Miw0LjM1MiwyNC4xNDksMy4xMzYsMzQuNjI0LTMuMTc5YzEwLjY4OC02LjQ0MywxNy43MDctMTcuMjU5LDE5LjMwNy0yOS42NzUgICAgYzEuMzQ0LTEwLjE1NSwyLjAwNS0yMC41MDEsMi4wMDUtMzAuNzg0UzQ5MC4wMDUsMjI0LjcwNCw0ODguNjgzLDIxNC41OTJ6IE0yNDUuMzMzLDM0MS4zMzNjLTUyLjkyOCwwLTk2LTQzLjA3Mi05Ni05NiAgICBzNDMuMDcyLTk2LDk2LTk2YzUyLjkyOCwwLDk2LDQzLjA3Miw5Niw5NlMyOTguMjYxLDM0MS4zMzMsMjQ1LjMzMywzNDEuMzMzelwiLz5cclxuXHQ8L2c+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPC9zdmc+XHJcblx0KVxyXG5cdFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzIDsiLCJcblxuLy9Db21wb25lbnRzIGFuZCBkZXBlbmRlY2llc1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgQm9keV9zZWN0aW9uMSBmcm9tICcuLi9jb21wb25lbnRzL2JvZHlfc2VjdGlvbjEnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCBUb3BSaWdodCBmcm9tICcuLi9jb21wb25lbnRzL3N2Zy9Ub3BfcmlnaHQnO1xuaW1wb3J0IEJvZHlTZWN0aW9uMiBmcm9tICcuLi9jb21wb25lbnRzL2JvZHlfc2VjdGlvbjInO1xuXG4vLyBTdHlsZXMgZmlsZXMgXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBNaWRkbGVMZWZ0IGZyb20gJy4uL2NvbXBvbmVudHMvc3ZnL21pZGRsZV9sZWZ0JztcbmltcG9ydCBCb3R0b21MZWZ0IGZyb20gJy4uL2NvbXBvbmVudHMvc3ZnL0JvdHRvbV9sZWZ0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFpbmVyXCI+XG4gICAgICAgICAgPFRvcFJpZ2h0IC8+XG4gICAgICAgICAgPEhlYWQgdGl0bGU9XCJBY2NldWlsIHwgNiBzb2x1dGlvbnNcIiAvPlxuICAgICAgICAgIDxIZWFkZXIgYWN0aXZlPVwiYWNjZXVpbFwiLz5cbiAgICAgICAgICA8Qm9keV9zZWN0aW9uMSAvPlxuICAgICAgICAgIDxNaWRkbGVMZWZ0IC8+XG4gICAgICAgICAgPEJvZHlTZWN0aW9uMiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICAgICAgXG4gICAgKVxuICB9O1xuZXhwb3J0IGRlZmF1bHQgSG9tZSA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=