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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Profiles/[_id].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

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

/***/ "./components/ImagePreview.js":
/*!************************************!*\
  !*** ./components/ImagePreview.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ImagePreview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ImagePreview.scss */ "./styles/ImagePreview.scss");
/* harmony import */ var _styles_ImagePreview_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ImagePreview_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ImagePreview = ({
  image,
  handleClick
}) => {
  return __jsx("div", {
    className: "ImagePreview"
  }, __jsx("svg", {
    viewBox: "0 0 24 24",
    height: "20px",
    width: "20px",
    className: "Close",
    onClick: handleClick
  }, __jsx("g", null, __jsx("path", {
    d: "M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
  }))), __jsx("div", {
    className: "imageContainer"
  }, __jsx("img", {
    src: image,
    alt: "preview",
    width: "100%"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);

/***/ }),

/***/ "./components/LikeButton.js":
/*!**********************************!*\
  !*** ./components/LikeButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_LikeButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/LikeButton.scss */ "./styles/LikeButton.scss");
/* harmony import */ var _styles_LikeButton_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_LikeButton_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Likebutton = ({
  checkbox,
  handleLike
}) => {
  return __jsx("div", {
    className: "likebutton"
  }, __jsx("input", {
    type: "checkbox",
    className: "checkbox",
    id: "checkbox",
    checked: checkbox,
    onChange: handleLike
  }), __jsx("label", {
    htmlFor: "checkbox"
  }, __jsx("svg", {
    id: "heart-svg",
    viewBox: "467 392 58 57"
  }, __jsx("g", {
    id: "Group",
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(467 392)"
  }, __jsx("path", {
    d: "M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z",
    id: "heart",
    fill: "#AAB8C2"
  }), __jsx("circle", {
    id: "main-circ",
    fill: "#E2264D",
    opacity: "0",
    cx: "29.5",
    cy: "29.5",
    r: "1.5"
  }), __jsx("g", {
    id: "grp7",
    opacity: "0",
    transform: "translate(7 6)"
  }, __jsx("circle", {
    id: "oval1",
    fill: "#9CD8C3",
    cx: "2",
    cy: "6",
    r: "2"
  }), __jsx("circle", {
    id: "oval2",
    fill: "#8CE8C3",
    cx: "5",
    cy: "2",
    r: "2"
  })), __jsx("g", {
    id: "grp6",
    opacity: "0",
    transform: "translate(0 28)"
  }, __jsx("circle", {
    id: "oval1",
    fill: "#CC8EF5",
    cx: "2",
    cy: "7",
    r: "2"
  }), __jsx("circle", {
    id: "oval2",
    fill: "#91D2FA",
    cx: "3",
    cy: "2",
    r: "2"
  })), __jsx("g", {
    id: "grp3",
    opacity: "0",
    transform: "translate(52 28)"
  }, __jsx("circle", {
    id: "oval2",
    fill: "#9CD8C3",
    cx: "2",
    cy: "7",
    r: "2"
  }), __jsx("circle", {
    id: "oval1",
    fill: "#8CE8C3",
    cx: "4",
    cy: "2",
    r: "2"
  })), __jsx("g", {
    id: "grp2",
    opacity: "0",
    transform: "translate(44 6)"
  }, __jsx("circle", {
    id: "oval2",
    fill: "#CC8EF5",
    cx: "5",
    cy: "6",
    r: "2"
  }), __jsx("circle", {
    id: "oval1",
    fill: "#CC8EF5",
    cx: "2",
    cy: "2",
    r: "2"
  })), __jsx("g", {
    id: "grp5",
    opacity: "0",
    transform: "translate(14 50)"
  }, __jsx("circle", {
    id: "oval1",
    fill: "#91D2FA",
    cx: "6",
    cy: "5",
    r: "2"
  }), __jsx("circle", {
    id: "oval2",
    fill: "#91D2FA",
    cx: "2",
    cy: "2",
    r: "2"
  })), __jsx("g", {
    id: "grp4",
    opacity: "0",
    transform: "translate(35 50)"
  }, __jsx("circle", {
    id: "oval1",
    fill: "#F48EA7",
    cx: "6",
    cy: "5",
    r: "2"
  }), __jsx("circle", {
    id: "oval2",
    fill: "#F48EA7",
    cx: "2",
    cy: "2",
    r: "2"
  })), __jsx("g", {
    id: "grp1",
    opacity: "0",
    transform: "translate(24)"
  }, __jsx("circle", {
    id: "oval1",
    fill: "#9FC7FA",
    cx: "2.5",
    cy: "3",
    r: "2"
  }), __jsx("circle", {
    id: "oval2",
    fill: "#9FC7FA",
    cx: "7.5",
    cy: "2",
    r: "2"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Likebutton);

/***/ }),

/***/ "./components/Profile_Components/Components/BookMeeting.jsx":
/*!******************************************************************!*\
  !*** ./components/Profile_Components/Components/BookMeeting.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal/Modal */ "antd/lib/modal/Modal");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_Profiles_Sass_calendar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/Profiles/Sass/calendar.scss */ "./pages/Profiles/Sass/calendar.scss");
/* harmony import */ var _pages_Profiles_Sass_calendar_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_Profiles_Sass_calendar_scss__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const BusyComponent = ({
  day,
  hour,
  setTitle,
  setvisible
}) => {
  const DateDivider = (string, hour) => {
    const date = new Date(string);
    const dateNow = new Date();
    const moment1 = moment__WEBPACK_IMPORTED_MODULE_2___default()(date);

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, res >= 0 ? __jsx("div", {
    className: "Busy",
    title: "Date indisponible"
  }) : __jsx("div", {
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

    if (Math.abs(moment__WEBPACK_IMPORTED_MODULE_2___default.a.duration(StartHour.diff(endtHour)).asMinutes()) <= 30) {
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

const calendar = ({
  profile,
  loc
}) => {
  //Data from database 
  const Horraire = profile.horraire;
  var Booked = profile.booked !== undefined ? profile.booked : {}; // Horraires ----------------------

  const StartHour = moment__WEBPACK_IMPORTED_MODULE_2___default()(Horraire[0], "HH:mm");
  const endtHour = moment__WEBPACK_IMPORTED_MODULE_2___default()(Horraire[1], "HH:mm");
  const length = (endtHour.format("HH") - StartHour.format("HH")) * 60 / 45;
  const results = Scheduler(StartHour, endtHour, length); // States -------------------

  const {
    0: BookedDisplay,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Booked !== {} ? Booked : {
    "": ""
  });
  const {
    0: visible,
    1: setvisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: bookedVisible,
    1: setbookedVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: loading,
    1: setloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: week,
    1: setWeek
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // Days ---------------------------

  const datePusher = new Date();
  const dayResult = [moment__WEBPACK_IMPORTED_MODULE_2___default()(Date.now()).add(7 * week, 'days').format('YYYY/MM/DD')];
  datePusher.setDate(datePusher.getDate() + week * 7);

  for (let i = 0; i < 6; i++) {
    datePusher.setDate(datePusher.getDate() + 1);
    dayResult.push(moment__WEBPACK_IMPORTED_MODULE_2___default()(datePusher).format('YYYY/MM/DD'));
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
      } : Booked = _objectSpread(_objectSpread({}, Booked), {}, {
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
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/profiles/bookmeeting?userid=' + profile._id, Data, {
      withCredentials: true
    }).then(data => {
      setDisplay(Booked);
      antd__WEBPACK_IMPORTED_MODULE_3__["notification"]['success']({
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
    if (moment__WEBPACK_IMPORTED_MODULE_2___default()(day).diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(Date.now()), 'hours') > -24 && moment__WEBPACK_IMPORTED_MODULE_2___default()(day).diff(moment__WEBPACK_IMPORTED_MODULE_2___default()(Date.now()), 'hours') <= 0) {
      return true;
    } else {
      return false;
    }
  }; // -----------------------------------


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "CalendarControllers"
  }, __jsx("button", {
    className: "today",
    onClick: () => setWeek(0)
  }, "Aujourd'hui"), __jsx("div", {
    className: "weeks"
  }, __jsx("button", {
    className: "nextW",
    onClick: () => setWeek(week - 1)
  }, "Semaine pr\xE9c\xE9dente"), __jsx("button", {
    className: "prevW",
    onClick: () => setWeek(week + 1)
  }, "Prochaine semaine"))), __jsx("table", {
    id: "calendar"
  }, __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: title,
    visible: visible,
    width: "50vw",
    onCancel: () => setvisible(false),
    bodyStyle: {
      height: '100%'
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
  }, __jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Message"), __jsx("br", null), __jsx("textarea", {
    className: "textArea",
    placeholder: "D\xE9crivez votre objectif de la r\xE9union",
    rows: "4",
    value: message,
    onChange: e => setMessage(e.target.value)
  }), __jsx("br", null), __jsx("br", null)), __jsx("thead", null, __jsx("tr", null, __jsx("th", null), dayResult.map(day => __jsx("th", {
    key: day + Date.now(),
    style: activeDay(day) ? {
      color: '#1a73e8',
      textAlign: "center"
    } : {
      textAlign: "center"
    }
  }, DatePicker(day)[0], " ", __jsx("br", null), " ", DatePicker(day)[1], " ", DatePicker(day)[2], " ")))), __jsx("tbody", null, loc === "public" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, results.map(hour => __jsx("tr", {
    key: hour + Date.now()
  }, __jsx("th", null, hour), dayResult.map(day => __jsx("td", {
    key: day + hour
  }, BookedDisplay[day] !== undefined && (BookedDisplay[day].includes(hour) ? Checker(profile, hour, day) === true ? __jsx("div", {
    className: "Booked"
  }, "R\xE9serv\xE9e") : Checker(profile, hour, day) === false ? __jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: setTitle,
    setvisible: setvisible
  }) : __jsx("div", {
    className: "Pending"
  }, "En attente") : __jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: setTitle,
    setvisible: setvisible
  })), BookedDisplay[day] === undefined && __jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: setTitle,
    setvisible: setvisible
  })))))), loc === "profile" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, results.map(hour => __jsx("tr", {
    key: hour + Date.now()
  }, __jsx("th", null, hour), dayResult.map(day => __jsx("td", {
    key: day + hour
  }, BookedDisplay[day] !== undefined && (BookedDisplay[day].includes(hour) ? Checker(profile, hour, day) === true ? __jsx("div", {
    className: "Booked"
  }, "R\xE9serv\xE9e") : Checker(profile, hour, day) === false ? __jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: false,
    setvisible: false
  }) : __jsx("div", {
    className: "Pending"
  }, "En attente") : __jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: false,
    setvisible: false
  })), BookedDisplay[day] === undefined && __jsx(BusyComponent, {
    day: day,
    hour: hour.toString(),
    setTitle: false,
    setvisible: false
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (calendar);

/***/ }),

/***/ "./components/Profile_Components/Components/EditBox.jsx":
/*!**************************************************************!*\
  !*** ./components/Profile_Components/Components/EditBox.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Profiles_Sass_editbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/Profiles/Sass/editbox.scss */ "./pages/Profiles/Sass/editbox.scss");
/* harmony import */ var _pages_Profiles_Sass_editbox_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_Profiles_Sass_editbox_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ImagePreview */ "./components/ImagePreview.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Data_Fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Data/Fields */ "./components/Data/Fields.js");
/* harmony import */ var _Data_Fields__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Data_Fields__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Data_Jobs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Data/Jobs */ "./components/Data/Jobs.js");
/* harmony import */ var _Data_Jobs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Data_Jobs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Data_Cities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Data/Cities */ "./components/Data/Cities.js");
/* harmony import */ var _Data_Cities__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Data_Cities__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
    Moments.push(moment__WEBPACK_IMPORTED_MODULE_4___default()(data.horraire[0], 'HH:mm'), moment__WEBPACK_IMPORTED_MODULE_4___default()(data.horraire[1], 'HH:mm'));
  }

  const {
    RangePicker
  } = antd__WEBPACK_IMPORTED_MODULE_2__["TimePicker"];
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Select"];
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Moments);
  const Languages = ["Arabe", "Francais", "Anglais", "Spanish"];
  const lang = [];
  const children = [];
  const {
    0: changed,
    1: setchanged
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: file,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.Usrimg);
  const {
    0: visible,
    1: setvisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Mappers -------------------------------------------------------

  Languages.map(Field => {
    lang.push(__jsx(Option, {
      key: Field
    }, Field));
  });
  _Data_Fields__WEBPACK_IMPORTED_MODULE_5___default.a.map(Field => {
    children.push(__jsx(Option, {
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

  return __jsx("div", {
    className: "EditBox"
  }, __jsx("div", {
    className: "ProfileImg"
  }, __jsx("img", {
    className: "img",
    src: file,
    onClick: () => setvisible(true)
  }), __jsx("br", null), __jsx("div", null, __jsx("label", {
    className: "custom-file-upload"
  }, __jsx("input", {
    type: "file",
    id: "img",
    name: "img",
    placeholder: "Choisissez photo",
    accept: "image/*",
    onChange: handleImageChange
  }), __jsx("i", {
    className: "fa fa-upload",
    "aria-hidden": "true"
  }), "   Ajouter photo"), changed && __jsx("label", {
    className: "Showmodal",
    onClick: handleClick
  }, __jsx("i", {
    className: "fa fa-user-times",
    style: {
      color: '#be0000'
    }
  }))), visible && __jsx(_ImagePreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: file,
    handleClick: () => setvisible(false)
  })), __jsx("div", {
    className: "multipleInput"
  }, __jsx("input", {
    className: "input controlled user",
    type: "text",
    placeholder: "Nom",
    name: "nom",
    value: data.nom,
    onChange: handleChange
  }), __jsx("input", {
    className: "input controlled user",
    type: "text",
    placeholder: "Prenom",
    name: "prenom",
    value: data.prenom,
    onChange: handleChange
  })), data.type === "Société" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "multipleInput"
  }, __jsx("select", {
    className: "title",
    name: "title",
    value: data.title,
    onChange: handleChange,
    required: true
  }, _Data_Jobs__WEBPACK_IMPORTED_MODULE_6___default.a.map(job => __jsx("option", {
    value: job,
    key: job
  }, job))), __jsx("input", {
    className: "input",
    type: "text",
    placeholder: "Nom de soci\xE9t\xE9",
    name: "companyname",
    value: data.companyname,
    onChange: handleChange
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    mode: "tags",
    style: {
      width: '100%',
      marginTop: '20px'
    },
    placeholder: "Votre domaine ",
    maxTagCount: 3,
    onChange: handleTag,
    value: data.domaine
  }, children), __jsx("label", {
    style: {
      color: '#318CE7',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "L'horraire de votre soci\xE9t\xE9 : "), __jsx(RangePicker, {
    bordered: false,
    format: "HH:mm",
    minuteStep: 30,
    value: time,
    onChange: handleTime
  }), __jsx("br", null), __jsx("br", null)), __jsx("div", {
    className: "multipleInput",
    placeholder: "Titre",
    style: {
      marginBottom: '10px'
    }
  }, __jsx("select", {
    className: "title",
    name: "city"
  }, _Data_Cities__WEBPACK_IMPORTED_MODULE_7___default.a.map(citie => __jsx("option", {
    value: citie,
    key: citie
  }, citie))), __jsx("input", {
    className: "input",
    type: "text",
    placeholder: "Addresse",
    name: "addresse",
    value: data.addresse,
    onChange: handleChange
  })), __jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Presentation"), __jsx("br", null), __jsx("textarea", {
    className: "textArea",
    name: "presentation",
    placeholder: data.type !== "Société" ? "Parlez-nous de vous (optionnel)" : "Décrivez votre entreprise",
    rows: "4",
    value: data.presentation,
    onChange: handleChange
  }), __jsx("br", null), __jsx("br", null), __jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Langues parl\xE9s"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
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
  }, lang), __jsx("br", null), __jsx("br", null), __jsx("label", {
    style: {
      color: '#2a2a2a',
      fontFamily: 'GlacialBold',
      fontSize: '16px'
    }
  }, "Dipl\xF4me et formations"), __jsx("div", {
    className: "Diplomes"
  }, DiplomeList.map((element, index) => __jsx("div", {
    className: "container",
    key: index
  }, __jsx("input", {
    className: "input diplome",
    type: "text",
    name: "diplomeName",
    placeholder: "Votre Diplome",
    value: element.diplomeName,
    onChange: e => dipChange(e, index)
  }), __jsx("input", {
    className: index !== 0 ? "input desc2" : "input desc",
    type: "text",
    name: "desc",
    placeholder: "Br\xE8ve description",
    value: element.desc,
    onChange: e => dipChange(e, index)
  }), index !== 0 && __jsx("label", {
    className: "delete",
    onClick: () => handleRemoveClick(index)
  }, __jsx("i", {
    class: "fa fa-trash",
    "aria-hidden": "true",
    style: {
      color: '#be0000'
    }
  })))), __jsx("div", {
    className: "container "
  }, __jsx("button", {
    onClick: handleAddClick,
    className: "ajouter"
  }, "Ajouter"))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditBox);

/***/ }),

/***/ "./components/Profile_Components/Components/NavAcceuil.jsx":
/*!*****************************************************************!*\
  !*** ./components/Profile_Components/Components/NavAcceuil.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NavAcceuil = ({
  date,
  profile
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "presentation"
  }, profile.type == "Société" && __jsx("h2", null, "Presentation de l'entreprise"), profile.type == "Client" && __jsx("h2", null, "Presentation du client"), __jsx("p", null, profile.presentation === "" || profile.presentation === undefined ? "Cet utilisateur n'a pas fournie de données pour l'instant" : profile.presentation)), profile.type == "Société" && __jsx("div", {
    className: "Horraire"
  }, __jsx("h2", null, "Horraire"), __jsx("div", {
    className: "TimeTable"
  }, __jsx("div", {
    className: "Block"
  }, __jsx("ul", null, __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""
  }, "Lundi"), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""
  }, "Mardi"), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""
  }, "Mercredi")), __jsx("ul", null, __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Mon" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Tue" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Wed" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]))), __jsx("div", {
    className: "Block"
  }, __jsx("ul", null, __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""
  }, "Jeudi"), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""
  }, "Vendredi"), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""
  }, "Samedi")), __jsx("ul", null, __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Thu" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Fri" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]), __jsx("li", {
    className: date.toDateString().split(" ")[0] === "Sat" ? "Today" : ""
  }, profile.horraire[0], " - ", profile.horraire[1]))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavAcceuil);

/***/ }),

/***/ "./components/Profile_Components/Components/NavPropos.jsx":
/*!****************************************************************!*\
  !*** ./components/Profile_Components/Components/NavPropos.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/Map */ "./components/Profile_Components/map/Map.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavPropos = ({
  profile,
  location
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", null, __jsx("h2", null, "Information supplementaires"), __jsx("div", {
    className: "InfoSupp"
  }, __jsx("div", {
    className: "Block"
  }, profile.type === "Société" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", null, __jsx("li", {
    className: "title"
  }, "Domaine De travail : "), __jsx("li", {
    className: "element"
  }, profile.domaine.map(el => '∙ ' + el + '\n'))), __jsx("ul", null, __jsx("li", {
    className: "title"
  }, "t\xE9l\xE9phone fixe : "), __jsx("li", {
    className: "element"
  }, profile.fixphone))), __jsx("ul", null, __jsx("li", {
    className: "title"
  }, "t\xE9l\xE9phone portable : "), __jsx("li", {
    className: "element"
  }, profile.mobilephone)), __jsx("ul", null, __jsx("li", {
    className: "title"
  }, "Langues parl\xE9s : "), __jsx("li", {
    className: "element",
    style: {
      whiteSpace: 'pre'
    }
  }, profile.languages.map(el => '∙ ' + el + '\n'))), __jsx("ul", null, __jsx("li", {
    className: "title",
    style: {
      color: "#2e9aff"
    }
  }, "Diplomes")), __jsx("hr", {
    style: {
      border: '1px solid rgb(240, 240, 240)'
    }
  }), profile.diplome.map(dom => __jsx("ul", {
    key: Date.now() + dom.desc
  }, __jsx("li", {
    className: "title",
    style: {
      color: '#969696'
    }
  }, dom.diplomeName), __jsx("li", {
    className: "element"
  }, dom.desc))), __jsx("hr", {
    style: {
      border: '1px solid rgb(240, 240, 240)'
    }
  }), __jsx("ul", null, __jsx("li", {
    className: "title"
  }, profile.type === "Société" ? " Siège social :" : "Addresse du client :"), __jsx("li", {
    className: "element"
  }, profile.addresse))))), __jsx("div", null, __jsx("h2", null, "Localisation"), __jsx("div", {
    className: "MapContainer"
  }, __jsx(_map_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
    location: location,
    zoomLevel: 17
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavPropos);

/***/ }),

/***/ "./components/Profile_Components/Components/ProfileHead.jsx":
/*!******************************************************************!*\
  !*** ./components/Profile_Components/Components/ProfileHead.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Svg_BookMetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Svg/BookMetting */ "./components/Profile_Components/Svg/BookMetting.js");
/* harmony import */ var _Svg_EditSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Svg/EditSvg */ "./components/Profile_Components/Svg/EditSvg.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProfileHead = ({
  profile,
  handleEdit,
  setbook,
  userid
}) => {
  return __jsx("div", {
    className: "ProfileHead"
  }, __jsx("div", {
    className: "ProfileImg"
  }, __jsx("img", {
    src: profile.Usrimg
  })), __jsx("div", {
    className: "ProfileInfo"
  }, __jsx("h3", null, profile.companyname === "" || profile.companyname == undefined ? profile.nom + " " + profile.prenom : profile.companyname), profile.type === "Société" && __jsx("p", null, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    style: {
      marginRight: '10px'
    }
  }), __jsx("span", null, profile.nom, " ", profile.prenom), " | ", __jsx("span", null, profile.title)), profile.type === "Client" && __jsx("p", null, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    style: {
      marginRight: '10px'
    }
  }), __jsx("span", null, "Client")), profile.type === "Société" && __jsx("span", {
    className: "Likes"
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true",
    style: {
      marginRight: '5px'
    }
  }), " ", profile.stars.length, " J'aime")), userid !== profile._id && profile.type === "Société" && __jsx("div", {
    className: "BookMetting",
    onClick: () => setbook(true)
  }, __jsx(_Svg_BookMetting__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("span", null, "R\xE9server une r\xE9union")), userid === profile._id && __jsx("div", {
    className: "EditProfile",
    onClick: handleEdit
  }, __jsx(_Svg_EditSvg__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("span", null, "Editer profile")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileHead);

/***/ }),

/***/ "./components/Profile_Components/Components/ProgressBar.jsx":
/*!******************************************************************!*\
  !*** ./components/Profile_Components/Components/ProgressBar.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProgressBar = ({
  percentage
}) => {
  return __jsx("div", {
    style: {
      marginBottom: '10%',
      marginTop: '10%',
      textAlign: 'center'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    type: "circle",
    strokeColor: {
      '0%': '#00308F',
      '100%': '#7CB9E8'
    },
    percent: percentage
  }), __jsx("h1", null, "Veuillez patienter ... "), __jsx("p", null, "Nous mettons \xE0 jour votre profil"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./components/Profile_Components/Svg/AboutSvg.js":
/*!*******************************************************!*\
  !*** ./components/Profile_Components/Svg/AboutSvg.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AboutSvg = () => {
  return __jsx("svg", {
    height: "10pt",
    viewBox: "0 0 512 512",
    width: "10pt",
    fill: "currentcolor",
    focusable: "false"
  }, __jsx("path", {
    d: "m453.332031 42.667969h-112v-5.335938c0-20.585937-16.746093-37.332031-37.332031-37.332031h-96c-20.585938 0-37.332031 16.746094-37.332031 37.332031v5.335938h-112c-32.363281 0-58.667969 26.300781-58.667969 58.664062v266.667969c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-266.667969c0-32.363281-26.304688-58.664062-58.667969-58.664062zm-154.644531 42.664062h-85.355469v-42.664062h85.335938zm-138.6875 64c29.398438 0 53.332031 23.9375 53.332031 53.335938 0 29.394531-23.933593 53.332031-53.332031 53.332031s-53.332031-23.9375-53.332031-53.332031c0-29.398438 23.933593-53.335938 53.332031-53.335938zm96 197.335938c0 8.832031-7.167969 16-16 16h-160c-8.832031 0-16-7.167969-16-16v-10.667969c0-32.363281 26.304688-58.667969 58.667969-58.667969h74.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969zm176 16h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.335938h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0-85.332031h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutSvg);

/***/ }),

/***/ "./components/Profile_Components/Svg/BookMetting.js":
/*!**********************************************************!*\
  !*** ./components/Profile_Components/Svg/BookMetting.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BookMetting = () => {
  return __jsx("svg", {
    height: "15pt",
    viewBox: "0 0 512 512",
    width: "15pt",
    fill: "currentcolor",
    focusable: "false"
  }, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M255.501,0.499c-81.448,0-147.711,66.264-147.711,147.711c0,50.449,25.429,95.065,64.137,121.724    c-36.139,12.471-69.263,33.071-97.091,60.899C26.577,379.093,0,443.254,0,511.501h39.922    c0-118.871,96.708-215.579,215.579-215.579c81.448,0,147.711-66.264,147.711-147.712S336.949,0.499,255.501,0.499z M255.501,256    c-59.435,0-107.789-48.354-107.789-107.789S196.066,40.421,255.501,40.421S363.29,88.775,363.29,148.211S314.936,256,255.501,256z    "
  }))), __jsx("g", null, __jsx("g", null, __jsx("polygon", {
    points: "428.164,387.743 428.164,303.906 388.242,303.906 388.242,387.743 304.405,387.743 304.405,427.665     388.242,427.665 388.242,511.501 428.164,511.501 428.164,427.665 512,427.665 512,387.743   "
  }))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/* harmony default export */ __webpack_exports__["default"] = (BookMetting);

/***/ }),

/***/ "./components/Profile_Components/Svg/CalendarSvg.js":
/*!**********************************************************!*\
  !*** ./components/Profile_Components/Svg/CalendarSvg.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CalendarIcon = () => {
  return __jsx("svg", {
    height: "10pt",
    viewBox: "0 0 512 512",
    width: "10pt",
    fill: "currentcolor",
    focusable: "false"
  }, __jsx("g", null, __jsx("g", null, __jsx("g", null, __jsx("circle", {
    cx: "386",
    cy: "210",
    r: "20"
  }), __jsx("path", {
    d: "M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20     c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312     c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120     c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91     v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20     c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z"
  }), __jsx("path", {
    d: "M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472     c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z"
  }), __jsx("path", {
    d: "M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29     c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z"
  }), __jsx("circle", {
    cx: "299",
    cy: "210",
    r: "20"
  }), __jsx("circle", {
    cx: "212",
    cy: "297",
    r: "20"
  }), __jsx("circle", {
    cx: "125",
    cy: "210",
    r: "20"
  }), __jsx("circle", {
    cx: "125",
    cy: "297",
    r: "20"
  }), __jsx("circle", {
    cx: "125",
    cy: "384",
    r: "20"
  }), __jsx("circle", {
    cx: "212",
    cy: "384",
    r: "20"
  }), __jsx("circle", {
    cx: "212",
    cy: "210",
    r: "20"
  })))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/* harmony default export */ __webpack_exports__["default"] = (CalendarIcon);

/***/ }),

/***/ "./components/Profile_Components/Svg/EditSvg.js":
/*!******************************************************!*\
  !*** ./components/Profile_Components/Svg/EditSvg.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const EditSvg = () => {
  return __jsx("svg", {
    height: "18px",
    viewBox: "0 0 512 512",
    width: "18px",
    fill: "currentcolor",
    focusable: "false"
  }, __jsx("g", null, __jsx("g", null, __jsx("polygon", {
    points: "51.2,353.28 0,512 158.72,460.8   "
  }))), __jsx("g", null, __jsx("g", null, __jsx("rect", {
    x: "89.73",
    y: "169.097",
    transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -95.8575 260.3719)",
    width: "353.277",
    height: "153.599"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M504.32,79.36L432.64,7.68c-10.24-10.24-25.6-10.24-35.84,0l-23.04,23.04l107.52,107.52l23.04-23.04    C514.56,104.96,514.56,89.6,504.32,79.36z"
  }))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/* harmony default export */ __webpack_exports__["default"] = (EditSvg);

/***/ }),

/***/ "./components/Profile_Components/Svg/HomeSvg.js":
/*!******************************************************!*\
  !*** ./components/Profile_Components/Svg/HomeSvg.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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

/* harmony default export */ __webpack_exports__["default"] = (HomeSvg);

/***/ }),

/***/ "./components/Profile_Components/map/Map.js":
/*!**************************************************!*\
  !*** ./components/Profile_Components/map/Map.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Profiles_Sass_map_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/Profiles/Sass/map.scss */ "./pages/Profiles/Sass/map.scss");
/* harmony import */ var _pages_Profiles_Sass_map_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_Profiles_Sass_map_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Marker = props => {
  const {
    color,
    name,
    id
  } = props;
  return __jsx("div", null, __jsx("div", {
    className: "pin bounce",
    style: {
      backgroundColor: color,
      cursor: 'pointer'
    },
    title: name
  }), __jsx("div", {
    className: "pulse"
  }));
};

const Map = ({
  location,
  zoomLevel
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// console.log(process.env.REACT_APP_MAP_KEY);
  }, []);
  return __jsx("div", {
    className: "map"
  }, __jsx("div", {
    className: "google-map"
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyBekxJpV7M_HcWjpBkpA2WwfyHOrYQfGV4"
    },
    defaultCenter: location,
    defaultZoom: zoomLevel
  }, __jsx(Marker, {
    lat: location.lat,
    lng: location.lng,
    name: location.address,
    color: "#2E9AFF"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Profile_Components/publicProfile.js":
/*!********************************************************!*\
  !*** ./components/Profile_Components/publicProfile.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/ant-picker.scss */ "./styles/ant-picker.scss");
/* harmony import */ var _styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../head */ "./components/head.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Svg_HomeSvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Svg/HomeSvg */ "./components/Profile_Components/Svg/HomeSvg.js");
/* harmony import */ var _Svg_AboutSvg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Svg/AboutSvg */ "./components/Profile_Components/Svg/AboutSvg.js");
/* harmony import */ var _Svg_CalendarSvg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Svg/CalendarSvg */ "./components/Profile_Components/Svg/CalendarSvg.js");
/* harmony import */ var _pages_Profiles_Sass_fullProfile_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/Profiles/Sass/fullProfile.scss */ "./pages/Profiles/Sass/fullProfile.scss");
/* harmony import */ var _pages_Profiles_Sass_fullProfile_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_pages_Profiles_Sass_fullProfile_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../LikeButton */ "./components/LikeButton.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-geocode */ "react-geocode");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/modal/Modal */ "antd/lib/modal/Modal");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_EditBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/EditBox */ "./components/Profile_Components/Components/EditBox.jsx");
/* harmony import */ var _Components_BookMeeting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/BookMeeting */ "./components/Profile_Components/Components/BookMeeting.jsx");
/* harmony import */ var _Components_NavAcceuil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/NavAcceuil */ "./components/Profile_Components/Components/NavAcceuil.jsx");
/* harmony import */ var _Components_NavPropos__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/NavPropos */ "./components/Profile_Components/Components/NavPropos.jsx");
/* harmony import */ var _Components_ProgressBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/ProgressBar */ "./components/Profile_Components/Components/ProgressBar.jsx");
/* harmony import */ var _Components_ProfileHead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/ProfileHead */ "./components/Profile_Components/Components/ProfileHead.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Acceuil');
  const {
    0: checkbox,
    1: setCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile.stars.includes(userid));
  const {
    0: bookmetting,
    1: setbook
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile);
  const {
    0: location,
    1: setLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: filefirebase,
    1: setfire
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: percentage,
    1: setPrecentage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: visible,
    1: setvisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setloading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: DiplomeList,
    1: setDiplomeList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(profile.diplome);
  const date = new Date(); // Icons -----------------------------------------

  const HomeIcon = props => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    component: _Svg_HomeSvg__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, props));

  const AboutIcon = props => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    component: _Svg_AboutSvg__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, props));

  const CalendarIcon = props => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    component: _Svg_CalendarSvg__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, props));

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const adr = profile.addresse + " , " + profile.city;
    react_geocode__WEBPACK_IMPORTED_MODULE_12___default.a.setApiKey("AIzaSyBekxJpV7M_HcWjpBkpA2WwfyHOrYQfGV4");
    react_geocode__WEBPACK_IMPORTED_MODULE_12___default.a.fromAddress(adr).then(response => {
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
      let uploadImage = _firebase__WEBPACK_IMPORTED_MODULE_4__["storage"].ref(`images/${currentImageName}`).put(file);
      uploadImage.on('state_changed', snapshot => {
        var per = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        setPrecentage(per);
      }, error => {
        reject(error);
      }, () => {
        _firebase__WEBPACK_IMPORTED_MODULE_4__["storage"].ref('images').child(currentImageName).getDownloadURL().then(url => {
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
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(Url, {
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
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Un ou plusieurs champs sont vides");
    } else {
      setloading(true);

      if (filefirebase !== null) {
        setloadimage(true);
        const imgData = await firebaseUrl(filefirebase);
        setData(data.Usrimg = imgData[0]);
      }

      const url = "/api/profiles/update?userid=" + userid;
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data, {
        withCredentials: true
      }).then(response => {
        if (response.status === 200) {
          setloading(false);
          setvisible(false);
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Mise à jour réussie");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Une erreur s'est produite, veuillez réessayer plus tard");
        }
      }).catch(err => {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Une erreur s'est produite, veuillez réessayer plus tard");
        console.log(err);
      });
    }
  }; // ----------------------- Returner ----------------------------------------


  return __jsx("div", {
    className: "Profile"
  }, __jsx(_head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: name + " | 6Solutions"
  }), __jsx("div", {
    className: "ButtonContainer",
    onClick: handleBack
  }, __jsx("i", {
    className: "fa fa-arrow-left icon"
  }), __jsx("span", {
    className: "backButton"
  }, "Retour")), __jsx(_Components_ProfileHead__WEBPACK_IMPORTED_MODULE_19__["default"], {
    profile: profile,
    handleEdit: handleEdit,
    setbook: setbook,
    userid: userid
  }), __jsx("div", {
    className: "ProfileBody"
  }, __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
  }, __jsx(_Components_BookMeeting__WEBPACK_IMPORTED_MODULE_15__["default"], {
    profile: profile,
    loc: "public"
  })), __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_13___default.a, {
    title: "Editez votre profile",
    className: "EditModal",
    visible: visible,
    bodyStyle: {
      height: '50vh',
      overflowY: 'scroll'
    },
    onCancel: () => setvisible(false),
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
  }, !imageLoading && __jsx(_Components_EditBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
    data: data,
    setData: setData,
    setDiplomeList: setDiplomeList,
    DiplomeList: DiplomeList,
    setfire: setfire
  }), imageLoading && __jsx(_Components_ProgressBar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    percentage: percentage
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    onClick: handleClick,
    selectedKeys: current,
    mode: "horizontal",
    style: {
      marginTop: '3%'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "Acceuil",
    icon: __jsx(HomeIcon, null)
  }, "Acceuil"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "propos",
    icon: __jsx(AboutIcon, null)
  }, "A propos"), userid === profile._id && profile.type === "Société" && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "Calendar",
    icon: __jsx(CalendarIcon, null)
  }, "Calendrier")), __jsx("div", {
    className: "MenuContent"
  }, current === "Acceuil" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_NavAcceuil__WEBPACK_IMPORTED_MODULE_16__["default"], {
    date: date,
    profile: profile
  })), current === "propos" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_NavPropos__WEBPACK_IMPORTED_MODULE_17__["default"], {
    profile: profile,
    location: location
  })), current === "Calendar" && __jsx("div", {
    style: {
      marginTop: '30px'
    }
  }, __jsx(_Components_BookMeeting__WEBPACK_IMPORTED_MODULE_15__["default"], {
    profile: profile,
    loc: "profile"
  }))), __jsx("div", {
    className: "MenuFooter"
  }, userid !== profile._id && profile.type === "Société" && __jsx("div", {
    className: "like"
  }, __jsx(_LikeButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    checkbox: checkbox,
    handleLike: handleLike
  }), __jsx("label", {
    htmlFor: "checkbox",
    className: checkbox ? "active" : ""
  }, "J'aime")), __jsx("div", {
    className: "share"
  }, __jsx("i", {
    className: "fa fa-share-alt",
    "aria-hidden": "true",
    style: {
      marginRight: '5px'
    }
  }), "Partager"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileBody);

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
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

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

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

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./pages/Profiles/Sass/calendar.scss":
/*!*******************************************!*\
  !*** ./pages/Profiles/Sass/calendar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Profiles/Sass/editbox.scss":
/*!******************************************!*\
  !*** ./pages/Profiles/Sass/editbox.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Profiles/Sass/fullProfile.scss":
/*!**********************************************!*\
  !*** ./pages/Profiles/Sass/fullProfile.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Profiles/Sass/map.scss":
/*!**************************************!*\
  !*** ./pages/Profiles/Sass/map.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Profiles/[_id].jsx":
/*!**********************************!*\
  !*** ./pages/Profiles/[_id].jsx ***!
  \**********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/head */ "./components/head.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header */ "./components/header.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Profile_Components_publicProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Profile_Components/publicProfile */ "./components/Profile_Components/publicProfile.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Profile = props => {
  const {
    0: userid,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.statusCode === 401) {
      const location = "/Auth/Signin/?ref=tokenexpired&location=" + window.location.href;
      window.location.replace(location);
    } else {
      props.statusCode !== 404 ? setData(props.data.AuthId.userId) : "";
      setLoading(false);
    }
  }, []);

  if (props.statusCode === 404) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
      statusCode: props.statusCode
    });
  }

  if (loading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Loading"
    }), __jsx("div", {
      style: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-50px',
        marginLeft: '-50px'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {
      size: "large"
    })));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "body"
    }, __jsx("div", {
      className: "ContentInside"
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.data === undefined ? __jsx(_components_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Loading"
    }) : '', __jsx("div", {
      style: {
        marginTop: '8%'
      }
    }, props.data !== undefined && __jsx(_components_Profile_Components_publicProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      profile: props.data.profile,
      userid: userid
    })))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }
};

const getServerSideProps = async ctx => {
  try {
    const cookie = ctx.req.headers.cookie;
    const baseUrl = ctx.req ? `${ctx.req.protocol}://${ctx.req.get('Host')}` : '';
    const url = baseUrl + "/api/profiles/profile?userid=" + ctx.query._id;
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
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./styles/ImagePreview.scss":
/*!**********************************!*\
  !*** ./styles/ImagePreview.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/LikeButton.scss":
/*!********************************!*\
  !*** ./styles/LikeButton.scss ***!
  \********************************/
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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react-geocode":
/*!********************************!*\
  !*** external "react-geocode" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRhL0NpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGEvRmllbGRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0YS9Kb2JzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VQcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlrZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVfQ29tcG9uZW50cy9Db21wb25lbnRzL0Jvb2tNZWV0aW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVfQ29tcG9uZW50cy9Db21wb25lbnRzL0VkaXRCb3guanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZV9Db21wb25lbnRzL0NvbXBvbmVudHMvTmF2QWNjZXVpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlX0NvbXBvbmVudHMvQ29tcG9uZW50cy9OYXZQcm9wb3MuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZV9Db21wb25lbnRzL0NvbXBvbmVudHMvUHJvZmlsZUhlYWQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZV9Db21wb25lbnRzL0NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZV9Db21wb25lbnRzL1N2Zy9BYm91dFN2Zy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVfQ29tcG9uZW50cy9TdmcvQm9va01ldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlX0NvbXBvbmVudHMvU3ZnL0NhbGVuZGFyU3ZnLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZV9Db21wb25lbnRzL1N2Zy9FZGl0U3ZnLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZV9Db21wb25lbnRzL1N2Zy9Ib21lU3ZnLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZV9Db21wb25lbnRzL21hcC9NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlX0NvbXBvbmVudHMvcHVibGljUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N2Zy9Ob3RpZkJlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdmcvVG9nZ2xlSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N2Zy9sb2dvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdmcvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N2Zy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19lcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUHJvZmlsZXMvW19pZF0uanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21vZGFsL01vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ29vZ2xlLW1hcC1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdlb2NvZGVcIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiSW1hZ2VQcmV2aWV3IiwiaW1hZ2UiLCJoYW5kbGVDbGljayIsIkxpa2VidXR0b24iLCJjaGVja2JveCIsImhhbmRsZUxpa2UiLCJCdXN5Q29tcG9uZW50IiwiZGF5IiwiaG91ciIsInNldFRpdGxlIiwic2V0dmlzaWJsZSIsIkRhdGVEaXZpZGVyIiwic3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJkYXRlTm93IiwibW9tZW50MSIsIm1vbWVudCIsImdldERheSIsImlzU2FtZSIsIkhvdXJkaWZmIiwiZ2V0SG91cnMiLCJwYXJzZUludCIsInNwbGl0IiwiaXNCZWZvcmUiLCJyZXMiLCJTY2hlZHVsZXIiLCJTdGFydEhvdXIiLCJlbmR0SG91ciIsImxlbmd0aCIsInJlc3VsdHMiLCJpIiwiZm9ybWF0IiwiYWRkIiwicHVzaCIsIk1hdGgiLCJhYnMiLCJkdXJhdGlvbiIsImRpZmYiLCJhc01pbnV0ZXMiLCJEYXRlUGlja2VyIiwiRGF5cyIsIk1vbnRocyIsIkRpc3BsYXlTdHJpbmciLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJDaGVja2VyIiwicHJvZmlsZSIsImVsZW1lbnQiLCJOb3RpZmljYXRpb24iLCJmaWx0ZXIiLCJlbCIsImhvcnJhaXJlIiwidW5kZWZpbmVkIiwiQWNjZXB0U3RhdHVzIiwiY2FsZW5kYXIiLCJsb2MiLCJIb3JyYWlyZSIsIkJvb2tlZCIsImJvb2tlZCIsIkJvb2tlZERpc3BsYXkiLCJzZXREaXNwbGF5IiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwiYm9va2VkVmlzaWJsZSIsInNldGJvb2tlZFZpc2libGUiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJ3ZWVrIiwic2V0V2VlayIsImRhdGVQdXNoZXIiLCJkYXlSZXN1bHQiLCJub3ciLCJzZXREYXRlIiwiaGFuZGxlU2F2ZSIsImtleSIsInZhbHVlIiwiRGF0YSIsIlR5cGUiLCJNZXNzYWdlIiwiYXhpb3MiLCJwb3N0IiwiX2lkIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsImRhdGEiLCJub3RpZmljYXRpb24iLCJkZXNjcmlwdGlvbiIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZURheSIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZvbnRTaXplIiwiZSIsInRhcmdldCIsIm1hcCIsInRleHRBbGlnbiIsImluY2x1ZGVzIiwidG9TdHJpbmciLCJFZGl0Qm94Iiwic2V0RGF0YSIsIkRpcGxvbWVMaXN0Iiwic2V0RGlwbG9tZUxpc3QiLCJzZXRmaXJlIiwiTW9tZW50cyIsIlJhbmdlUGlja2VyIiwiVGltZVBpY2tlciIsIk9wdGlvbiIsIlNlbGVjdCIsInRpbWUiLCJzZXRUaW1lIiwiTGFuZ3VhZ2VzIiwibGFuZyIsImNoaWxkcmVuIiwiY2hhbmdlZCIsInNldGNoYW5nZWQiLCJmaWxlIiwic2V0RmlsZSIsIlVzcmltZyIsIkZpZWxkIiwiRmllbGRzIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJmaWxlcyIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImVycm9yIiwiYWxlcnQiLCJyZXZva2VPYmplY3RVUkwiLCJkaXBDaGFuZ2UiLCJpbmRleCIsIm5hbWUiLCJsaXN0IiwiaGFuZGxlQWRkQ2xpY2siLCJkaXBsb21lTmFtZSIsImRlc2MiLCJoYW5kbGVSZW1vdmVDbGljayIsInNwbGljZSIsImhhbmRsZUxhbmciLCJsYW5ndWFnZXMiLCJoYW5kbGVUYWciLCJkb21haW5lIiwiaGFuZGxlVGltZSIsInRpbWVzdHJpbmciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5vbSIsInByZW5vbSIsInR5cGUiLCJKb2JzIiwiam9iIiwiY29tcGFueW5hbWUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkNpdGllcyIsImNpdGllIiwiYWRkcmVzc2UiLCJwcmVzZW50YXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJOYXZBY2NldWlsIiwidG9EYXRlU3RyaW5nIiwiTmF2UHJvcG9zIiwiZml4cGhvbmUiLCJtb2JpbGVwaG9uZSIsIndoaXRlU3BhY2UiLCJib3JkZXIiLCJkaXBsb21lIiwiZG9tIiwiUHJvZmlsZUhlYWQiLCJoYW5kbGVFZGl0Iiwic2V0Ym9vayIsInVzZXJpZCIsIm1hcmdpblJpZ2h0Iiwic3RhcnMiLCJQcm9ncmVzc0JhciIsInBlcmNlbnRhZ2UiLCJBYm91dFN2ZyIsIkJvb2tNZXR0aW5nIiwiQ2FsZW5kYXJJY29uIiwiRWRpdFN2ZyIsIkhvbWVTdmciLCJNYXJrZXIiLCJwcm9wcyIsImlkIiwiY3Vyc29yIiwiTWFwIiwiem9vbUxldmVsIiwidXNlRWZmZWN0IiwicHJvY2VzcyIsIlJFQUNUX0FQUF9NQVBfS0VZIiwibGF0IiwibG5nIiwiYWRkcmVzcyIsImlzRW1wdHkiLCJvYmoiLCJPYmplY3QiLCJlbnRyaWVzIiwiUHJvZmlsZUJvZHkiLCJpbWFnZUxvYWRpbmciLCJzZXRsb2FkaW1hZ2UiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNldENoZWNrIiwiYm9va21ldHRpbmciLCJzZXRMb2NhdGlvbiIsImZpbGVmaXJlYmFzZSIsInNldFByZWNlbnRhZ2UiLCJIb21lSWNvbiIsIkFib3V0SWNvbiIsIkNhbGVuZGFyU3ZnIiwiYWRyIiwiY2l0eSIsIkdlb2NvZGUiLCJzZXRBcGlLZXkiLCJmcm9tQWRkcmVzcyIsInJlc3BvbnNlIiwiZ2VvbWV0cnkiLCJmaXJlYmFzZVVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3VycmVudEltYWdlTmFtZSIsInVwbG9hZEltYWdlIiwic3RvcmFnZSIsInJlZiIsInB1dCIsIm9uIiwic25hcHNob3QiLCJwZXIiLCJmbG9vciIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY2hpbGQiLCJnZXREb3dubG9hZFVSTCIsImltYWdlRGF0YSIsImluZGV4T2YiLCJVcmwiLCJoYW5kbGVCYWNrIiwiYXNzaWduIiwiT2xkRGF0YSIsImltZ0RhdGEiLCJzdGF0dXMiLCJzdWNjZXNzIiwidG9wIiwib3ZlcmZsb3dZIiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImluaXRpYWxpemVBcHAiLCJGb290ZXIiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJkZWZhdWx0S2V5d29yZHMiLCJkZWZhdWx0T0dVUkwiLCJkZWZhdWx0T0dJbWFnZSIsIkhlYWQiLCJrZXl3b3JkcyIsIm9nSW1hZ2UiLCJwcm9wVHlwZXMiLCJEcm9wZG93bkl0ZW0iLCJvbkNsaWNrIiwibGVmdGljb24iLCJEcm9wRG93biIsImNvdW50IiwiaGFuZGxlTG9nb3V0IiwiZ2V0IiwidGV4dERlY29yYXRpb24iLCJIZWFkZXIiLCJhY3RpdmUiLCJzZXRVc2VySUQiLCJ1c2VySWQiLCJzZXRUb2tlbiIsInNldExvYWRpbmciLCJjaGVja1N0YXR1cyIsInNldENoZWNrU3RhdHVzIiwib3BlbmVkIiwic2V0T3BlbiIsIk5vdGlmVmlldyIsInJlcGxhY2UiLCJOb3RpZkJlbGwiLCJUb2dnbGVJY29uIiwiTG9nb3V0IiwiUHJvZmlsZSIsIlNldHRpbmdzIiwic3RhdHVzQ29kZXMiLCJzdGF0dXNDb2RlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJzdHlsZXMiLCJfX2h0bWwiLCJFcnJvciIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiX2dldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImgxIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsImgyIiwiaHJlZiIsIkF1dGhJZCIsInBvc2l0aW9uIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiYmFzZVVybCIsInByb3RvY29sIiwicXVlcnkiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUs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RCxXQUFRO0FBQ0o3RyxXQUFLLEVBQUc7QUFBQzNHO0FBQUQ7QUFESixLQUFSO0FBR0gsR0FiRCxDQWNBLE9BQU9rRCxLQUFQLEVBQWM7QUFDVnpDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZd0MsS0FBWjtBQUNBb00sT0FBRyxDQUFDclQsR0FBSixDQUFRdVIsVUFBUixHQUFxQnRLLEtBQXJCO0FBQ0EsV0FBTztBQUNBeUQsV0FBSyxFQUFHO0FBQUM2RyxrQkFBVSxFQUFHdEs7QUFBZDtBQURSLEtBQVA7QUFHSDtBQUNGLENBdEJJO0FBd0JRbUssc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL1Byb2ZpbGVzL1tfaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Qcm9maWxlcy9bX2lkXS5qc3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBbXCJDYXNhYmxhbmNhXCJcclxuLFwiRmVzXCJcclxuLFwiVGFuZ2llclwiXHJcbixcIk1hcnJha2VzaFwiXHJcbixcIlNhbMOpXCJcclxuLFwiTWVrbmVzXCJcclxuLFwiUmFiYXRcIlxyXG4sXCJPdWpkYVwiXHJcbixcIktlbml0cmFcIlxyXG4sXCJBZ2FkaXJcIlxyXG4sXCJTb3VzcyBNYXNzYVwiXHJcbixcIlRldG91YW5cIlxyXG4sXCJUZW1hcmFcIlxyXG4sXCJTYWZpXCJcclxuLFwiTW9oYW1tZWRpYVwiXHJcbixcIktob3VyaWJnYVwiXHJcbixcIkVsIEphZGlkYVwiXHJcbixcIkJlbmkgTWVsbGFsXCJcclxuLFwiQcOvdCBNZWxsb3VsXCJcclxuLFwiTmFkb3JcIlxyXG4sXCJEYXIgQm91YXp6YVwiXHJcbixcIlRhemFcIlxyXG4sXCJTZXR0YXRcIlxyXG4sXCJCZXJyZWNoaWRcIlxyXG4sXCJLaGVtaXNzZXRcIlxyXG4sXCJJbmV6Z2FuZVwiXHJcbixcIktzYXIgRWwgS2ViaXJcIlxyXG4sXCJMYXJhY2hlXCJcclxuLFwiR3VlbG1pbVwiXHJcbixcIktoZW5pZnJhXCJcclxuLFwiQmVya2FuZVwiXHJcbixcIlRhb3VyaXJ0XCJcclxuLFwiQm91c2tvdXJhXCJcclxuLFwiRnF1aWhcIlxyXG4sXCJCZW4gU2FsYWhcIlxyXG4sXCJEY2hlaXJhXCJcclxuLFwiRWwgSmloYWRpYVwiXHJcbixcIk91ZWQgWmVtXCJcclxuLFwiTWFycmFrZXNoLVNhZmlcIlxyXG4sXCJTaWRpIFNsaW1hbmVcIlxyXG4sXCJFcnJhY2hpZGlhXCJcclxuLFwiR3VlcmNpZlwiXHJcbixcIk91bGFkIFRlaW1hXCJcclxuLFwiQmVuIEd1ZXJpclwiXHJcbixcIlRpZmVsdFwiXHJcbixcIkxxbGlhYVwiXHJcbixcIlRhcm91ZGFudFwiXHJcbixcIlNlZnJvdVwiXHJcbixcIkVzc2FvdWlyYVwiXHJcbixcIkZuaWRlcVwiXHJcbixcIlNpZGkgS2FjZW1cIlxyXG4sXCJUaXpuaXRcIlxyXG4sXCJUYW4tVGFuXCJcclxuLFwiT3VhcnphemF0ZVwiXHJcbixcIlNvdWtFbEFyYmFhXCJcclxuLFwiWW91c3NvdWZpYVwiXHJcbixcIkxhaHJhb3V5aW5lXCJcclxuLFwiTWFydGlsXCJcclxuLFwiQWluSGFycm91ZGFcIlxyXG4sXCJTdXFhcy1TYWJ0QXdsYWRhbk5hbWFcIlxyXG4sXCJTa2hpcmF0XCJcclxuLFwiT3VhenphbmVcIlxyXG4sXCJCZW5zbGltYW5lXCJcclxuLFwiQWxIb2NlaW1hXCJcclxuLFwiQmVuaUFuc2FyXCJcclxuLFwiTWRpcVwiXHJcbixcIlNpZGlCZW5ub3VyXCJcclxuLFwiTWlkZWx0XCJcclxuLFwiQXpyb3VcIlxyXG4sXCJEcmFyZ3VhXCJdIiwibW9kdWxlLmV4cG9ydHMgPSBbXCJBZ3JpY3VsdHVyZVwiXHJcbixcIkFncm9hbGltZW50YWlyZVwiXHJcbixcIkFsaW1lbnRhdGlvblwiXHJcbixcIkFuaW1hdXhcIlxyXG4sXCJBcmNoaXRlY3R1cmUgLSBBbcOpbmFnZW1lbnQgaW50w6lyaWV1clwiXHJcbixcIkFydGlzYW5hdCAtIE3DqXRpZXJzIGQnYXJ0XCJcclxuLFwiQmFucXVlIC0gRmluYW5jZSAtIEFzc3VyYW5jZVwiXHJcbixcIkLDonRpbWVudCAtIFRyYXZhdXggcHVibGljc1wiXHJcbixcIkJpb2xvZ2llIC0gQ2hpbWllXCJcclxuLFwiQ29tbWVyY2UgLSBJbW1vYmlsaWVyXCJcclxuLFwiQ29tbXVuaWNhdGlvbiAtIEluZm9ybWF0aW9uXCJcclxuLFwiQ3VsdHVyZSAtIFNwZWN0YWNsZVwiXHJcbixcIkTDqWZlbnNlIC0gU8OpY3VyaXTDqSAtIFNlY291cnNcIlxyXG4sXCJEcm9pdFwiXHJcbixcIkVkaXRpb24gLSBJbXByaW1lcmllIC0gTGl2cmVcIlxyXG4sXCJFbGVjdHJvbmlxdWUgLSBJbmZvcm1hdGlxdWVcIlxyXG4sXCJFbnNlaWduZW1lbnQgLSBGb3JtYXRpb25cIlxyXG4sXCJIdW1hbml0YWlyZVwiXHJcbixcIkluZHVzdHJpZSAtIE1hdMOpcmlhdXhcIlxyXG4sXCJMZXR0cmVzIC0gU2NpZW5jZXMgaHVtYWluZXNcIlxyXG4sXCJNw6ljYW5pcXVlIC0gTWFpbnRlbmFuY2VcIlxyXG4sXCJTYW50w6lcIlxyXG4sXCJTY2llbmNlcyAtIE1hdGhzIC0gUGh5c2lxdWVcIlxyXG4sXCJTZWNyw6l0YXJpYXQgLSBBY2N1ZWlsXCJcclxuLFwiU29jaWFsIC0gU2VydmljZXMgw6AgbGEgcGVyc29ubmVcIlxyXG4sXCJTb2lucyAtIEVzdGjDqXRpcXVlIC0gQ29pZmZ1cmVcIlxyXG4sXCJTcG9ydCAtIEFuaW1hdGlvbiBcIlxyXG4sXCJUcmFuc3BvcnQgLSBMb2dpc3RpcXVlXCJcclxuXTsiLCJtb2R1bGUuZXhwb3J0cz0gW1xyXG4sXCJQcsOpc2lkZW50IERpcmVjdGV1ci1Hw6luw6lyYWwgKFBERylcIlxyXG4sXCJEaXJlY3RldXIgZGVzIG9ww6lyYXRpb25zIChDT08pXCJcclxuLFwiRGlyZWN0ZXVyIGZpbmFuY2llciAoQ0ZPKSBvdSBjb250csO0bGV1clwiXHJcbixcIkRpcmVjdGV1ciBtYXJrZXRpbmcgKENNTylcIlxyXG4sXCJEaXJlY3RldXIgZGUgbGEgdGVjaG5vbG9naWUgKENUTylcIlxyXG4sXCJQcsOpc2lkZW50XCJcclxuLFwiVmljZSBwcsOpc2lkZW50XCJcclxuLFwiQXNzaXN0YW50IGV4w6ljdXRpZlwiXHJcbixcIlJlc3BvbnNhYmxlIG1hcmtldGluZ1wiXHJcbixcIkNoZWYgZGUgcHJvZHVpdFwiXHJcbixcIkdlc3Rpb25uYWlyZSBkZSBwcm9qZXRcIlxyXG4sXCJSZXNwb25zYWJsZSBkZXMgZmluYW5jZXNcIlxyXG4sXCJEaXJlY3RldXIgZGVzIFJlc3NvdXJjZXMgSHVtYWluZXNcIlxyXG4sXCJTcMOpY2lhbGlzdGUgZW4gbWFya2V0aW5nXCJcclxuLFwiQW5hbHlzdGUgZCdhZmZhaXJlc1wiXHJcbixcIlBlcnNvbm5lbCBkZXMgcmVzc291cmNlcyBodW1haW5lc1wiXHJcbixcIkNvbXB0YWJsZVwiXHJcbixcIkNvbW1lcmNpYWxcIlxyXG4sXCJSZXByw6lzZW50YW50IGR1IHNlcnZpY2Ugw6AgbGEgY2xpZW50w6hsZVwiXHJcbixcImFzc2lzdGFudCBhZG1pbmlzdHJhdGlmXCJdIiwiaW1wb3J0ICcuLi9zdHlsZXMvSW1hZ2VQcmV2aWV3LnNjc3MnO1xyXG5jb25zdCBJbWFnZVByZXZpZXcgPSAoe2ltYWdlLGhhbmRsZUNsaWNrfSk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlUHJldmlld1wiPlxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBoZWlnaHQ9XCIyMHB4XCIgd2lkdGg9XCIyMHB4XCIgY2xhc3NOYW1lPVwiQ2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjQxNCAxMmw1Ljc5My01Ljc5M2MuMzktLjM5LjM5LTEuMDIzIDAtMS40MTRzLTEuMDIzLS4zOS0xLjQxNCAwTDEyIDEwLjU4NiA2LjIwNyA0Ljc5M2MtLjM5LS4zOS0xLjAyMy0uMzktMS40MTQgMHMtLjM5IDEuMDIzIDAgMS40MTRMMTAuNTg2IDEybC01Ljc5MyA1Ljc5M2MtLjM5LjM5LS4zOSAxLjAyMyAwIDEuNDE0LjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNzLjUxMi0uMDk4LjcwNy0uMjkzTDEyIDEzLjQxNGw1Ljc5MyA1Ljc5M2MuMTk1LjE5NS40NS4yOTMuNzA3LjI5M3MuNTEyLS4wOTguNzA3LS4yOTNjLjM5LS4zOS4zOS0xLjAyMyAwLTEuNDE0TDEzLjQxNCAxMnpcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cInByZXZpZXdcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVByZXZpZXcgOyIsImltcG9ydCAnLi4vc3R5bGVzL0xpa2VCdXR0b24uc2Nzcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExpa2VidXR0b24gPSAoe2NoZWNrYm94ICwgaGFuZGxlTGlrZSB9KT0+e1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VidXR0b25cIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94XCIgY2hlY2tlZD17Y2hlY2tib3h9IG9uQ2hhbmdlPXtoYW5kbGVMaWtlfSAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGVja2JveFwiID5cclxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJoZWFydC1zdmdcIiB2aWV3Qm94PVwiNDY3IDM5MiA1OCA1N1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyb3VwXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDY3IDM5MilcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI5LjE0NCAyMC43NzNjLS4wNjMtLjEzLTQuMjI3LTguNjctMTEuNDQtMi41OUM3LjYzIDI4Ljc5NSAyOC45NCA0My4yNTYgMjkuMTQzIDQzLjM5NGMuMjA0LS4xMzggMjEuNTEzLTE0LjYgMTEuNDQtMjUuMjEzLTcuMjE0LTYuMDgtMTEuMzc3IDIuNDYtMTEuNDQgMi41OXpcIiBpZD1cImhlYXJ0XCIgZmlsbD1cIiNBQUI4QzJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIm1haW4tY2lyY1wiIGZpbGw9XCIjRTIyNjREXCIgb3BhY2l0eT1cIjBcIiBjeD1cIjI5LjVcIiBjeT1cIjI5LjVcIiByPVwiMS41XCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImdycDdcIiBvcGFjaXR5PVwiMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3IDYpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsMVwiIGZpbGw9XCIjOUNEOEMzXCIgY3g9XCIyXCIgY3k9XCI2XCIgcj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsMlwiIGZpbGw9XCIjOENFOEMzXCIgY3g9XCI1XCIgY3k9XCIyXCIgcj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImdycDZcIiBvcGFjaXR5PVwiMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDI4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbDFcIiBmaWxsPVwiI0NDOEVGNVwiIGN4PVwiMlwiIGN5PVwiN1wiIHI9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbDJcIiBmaWxsPVwiIzkxRDJGQVwiIGN4PVwiM1wiIGN5PVwiMlwiIHI9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJncnAzXCIgb3BhY2l0eT1cIjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTIgMjgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsMlwiIGZpbGw9XCIjOUNEOEMzXCIgY3g9XCIyXCIgY3k9XCI3XCIgcj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsMVwiIGZpbGw9XCIjOENFOEMzXCIgY3g9XCI0XCIgY3k9XCIyXCIgcj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImdycDJcIiBvcGFjaXR5PVwiMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0NCA2KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbDJcIiBmaWxsPVwiI0NDOEVGNVwiIGN4PVwiNVwiIGN5PVwiNlwiIHI9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbDFcIiBmaWxsPVwiI0NDOEVGNVwiIGN4PVwiMlwiIGN5PVwiMlwiIHI9XCIyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJncnA1XCIgb3BhY2l0eT1cIjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQgNTApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsMVwiIGZpbGw9XCIjOTFEMkZBXCIgY3g9XCI2XCIgY3k9XCI1XCIgcj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsMlwiIGZpbGw9XCIjOTFEMkZBXCIgY3g9XCIyXCIgY3k9XCIyXCIgcj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImdycDRcIiBvcGFjaXR5PVwiMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNSA1MClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIm92YWwxXCIgZmlsbD1cIiNGNDhFQTdcIiBjeD1cIjZcIiBjeT1cIjVcIiByPVwiMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cIm92YWwyXCIgZmlsbD1cIiNGNDhFQTdcIiBjeD1cIjJcIiBjeT1cIjJcIiByPVwiMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiZ3JwMVwiIG9wYWNpdHk9XCIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI0KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPVwib3ZhbDFcIiBmaWxsPVwiIzlGQzdGQVwiIGN4PVwiMi41XCIgY3k9XCIzXCIgcj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJvdmFsMlwiIGZpbGw9XCIjOUZDN0ZBXCIgY3g9XCI3LjVcIiBjeT1cIjJcIiByPVwiMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGlrZWJ1dHRvbiA7IiwiXHJcbmltcG9ydCBNb2RhbCBmcm9tICdhbnRkL2xpYi9tb2RhbC9Nb2RhbCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL3BhZ2VzL1Byb2ZpbGVzL1Nhc3MvY2FsZW5kYXIuc2Nzcyc7XHJcblxyXG5cclxuY29uc3QgQnVzeUNvbXBvbmVudCA9ICh7ZGF5ICxob3VyICwgc2V0VGl0bGUgLCBzZXR2aXNpYmxlfSk9PntcclxuICAgIGNvbnN0IERhdGVEaXZpZGVyID0gKHN0cmluZyAsIGhvdXIpPT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RyaW5nICk7XHJcbiAgICAgICAgY29uc3QgZGF0ZU5vdyA9IG5ldyBEYXRlKCk7IFxyXG5cclxuICAgICAgICBjb25zdCBtb21lbnQxID0gbW9tZW50KGRhdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkYXRlLmdldERheSgpPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vbWVudDEuaXNTYW1lKGRhdGVOb3csJ3llYXInKSAmJiBtb21lbnQxLmlzU2FtZShkYXRlTm93LCdkYXknKSAmJiBtb21lbnQxLmlzU2FtZShkYXRlTm93LCdtb250aCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEhvdXJkaWZmID0gZGF0ZU5vdy5nZXRIb3VycygpIC0gcGFyc2VJbnQoaG91ci5zcGxpdChcIjpcIilbMF0pIDtcclxuICAgICAgICAgICAgcmV0dXJuIEhvdXJkaWZmIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1vbWVudDEuaXNCZWZvcmUoZGF0ZU5vdykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gLTEgO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzID0gRGF0ZURpdmlkZXIoZGF5LGhvdXIpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge3JlcyA+PSAwID88ZGl2IGNsYXNzTmFtZT1cIkJ1c3lcIiB0aXRsZT1cIkRhdGUgaW5kaXNwb25pYmxlXCI+PC9kaXY+IDogPGRpdiBvbkNsaWNrPXtzZXRUaXRsZSA9PT0gZmFsc2UgPyBudWxsIDogKCk9PntzZXRUaXRsZShob3VyK1wiIHwgXCIrZGF5KTsgc2V0dmlzaWJsZSh0cnVlKX19IGNsYXNzTmFtZT17c2V0VGl0bGUgPT09IGZhbHNlID8gXCJGcmVlUHJvZmlsZVwiIDogXCJGcmVlXCJ9PjwvZGl2Pn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5jb25zdCBTY2hlZHVsZXIgPSAgKFN0YXJ0SG91ciAsIGVuZHRIb3VyICwgbGVuZ3RoICk9PntcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBwYXJzZUludChsZW5ndGgpIDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nICA9ICBTdGFydEhvdXIuZm9ybWF0KCdISDptbScpK1wiLVwiK1N0YXJ0SG91ci5hZGQoMzAsJ21pbnV0ZXMnKS5mb3JtYXQoJ0hIOm1tJykgO1xyXG5cclxuICAgICAgICAvLyBCcmVhayBiZXR3ZWVlbiBtZWV0aW5nc1xyXG4gICAgICAgICByZXN1bHRzLnB1c2goc3RyaW5nKTtcclxuICAgICAgICBpZiAoTWF0aC5hYnMobW9tZW50LmR1cmF0aW9uKFN0YXJ0SG91ci5kaWZmKGVuZHRIb3VyKSkuYXNNaW51dGVzKCkpIDw9IDMwICkge1xyXG4gICAgICAgICAgICBicmVhayA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICBTdGFydEhvdXIuYWRkKDE1LCdtaW51dGVzJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ocmVzdWx0cyk7XHJcbn1cclxuXHJcbmNvbnN0IERhdGVQaWNrZXIgPSAoc3RyaW5nKSA9PlxyXG57XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShzdHJpbmcpO1xyXG4gICAgY29uc3QgRGF5cyA9IFsnRGltYW5jaGUnLCdMdW5kaScsJ01hcmRpJywnTWVyY3JlZGknLCdKZXVkaScsJ1ZlbmRyZWRpJywnU2FtZWRpJ107XHJcbiAgICBjb25zdCBNb250aHMgPSBbJ0phbnZpZXInLCdGw6l2cmllcicsJ01hcnMnLCdBdnJpbCcsJ01haScsJ0p1aW4nLCdKdWlsbGV0JywnQW91dCcsJ1NlcHRlbWJyZScsJ09jdG9icmUnLCdOb3ZlbWJyZScsJ0RlY2VtYnJlJ107XHJcbiAgICBjb25zdCBEaXNwbGF5U3RyaW5nID0gW0RheXNbZGF5LmdldERheSgpXSxkYXkuZ2V0RGF0ZSgpLE1vbnRoc1tkYXkuZ2V0TW9udGgoKV1dO1xyXG4gICAgcmV0dXJuIERpc3BsYXlTdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENoZWNrZXIgPSAocHJvZmlsZSxob3VyLGRheSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHByb2ZpbGUuTm90aWZpY2F0aW9uLmZpbHRlcihlbCA9PiBlbC5kYXkgPT0gZGF5ICYmIGVsLmhvcnJhaXJlID09IGhvdXIpIDsgXHJcbiAgICBpZiAoZWxlbWVudFswXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbMF0uQWNjZXB0U3RhdHVzIDtcclxuICAgIH1lbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgY2FsZW5kYXIgPSAoe3Byb2ZpbGUgLCBsb2N9KT0+e1xyXG5cclxuICAgIC8vRGF0YSBmcm9tIGRhdGFiYXNlIFxyXG4gICAgY29uc3QgSG9ycmFpcmUgPSBwcm9maWxlLmhvcnJhaXJlO1xyXG4gICAgdmFyIEJvb2tlZCAgPSBwcm9maWxlLmJvb2tlZCAhPT0gdW5kZWZpbmVkID8gcHJvZmlsZS5ib29rZWQgOnt9O1xyXG4gICAgXHJcbiAgICAvLyBIb3JyYWlyZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3QgU3RhcnRIb3VyID0gbW9tZW50KEhvcnJhaXJlWzBdLFwiSEg6bW1cIik7XHJcbiAgICBjb25zdCBlbmR0SG91ciA9IG1vbWVudChIb3JyYWlyZVsxXSxcIkhIOm1tXCIpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gKGVuZHRIb3VyLmZvcm1hdChcIkhIXCIpLVN0YXJ0SG91ci5mb3JtYXQoXCJISFwiKSkqNjAvNDU7XHJcbiAgICBjb25zdCByZXN1bHRzID0gU2NoZWR1bGVyKFN0YXJ0SG91cixlbmR0SG91cixsZW5ndGgpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gU3RhdGVzIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBbQm9va2VkRGlzcGxheSAsIHNldERpc3BsYXldID0gdXNlU3RhdGUoQm9va2VkICE9PSB7fSA/IEJvb2tlZCA6IHtcIlwiOlwiXCJ9KTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLHNldHZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Jvb2tlZFZpc2libGUsc2V0Ym9va2VkVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGl0bGUgLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UgLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0bG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbd2VlayAsIHNldFdlZWtdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAvLyBEYXlzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3QgZGF0ZVB1c2hlciA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBkYXlSZXN1bHQgPSBbbW9tZW50KERhdGUubm93KCkpLmFkZCg3ICogd2VlaywnZGF5cycpLmZvcm1hdCgnWVlZWS9NTS9ERCcpXTtcclxuICAgIGRhdGVQdXNoZXIuc2V0RGF0ZShkYXRlUHVzaGVyLmdldERhdGUoKSt3ZWVrICogNyk7XHJcbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICBkYXRlUHVzaGVyLnNldERhdGUoZGF0ZVB1c2hlci5nZXREYXRlKCkrMSk7XHJcbiAgICAgICAgZGF5UmVzdWx0LnB1c2gobW9tZW50KGRhdGVQdXNoZXIpLmZvcm1hdCgnWVlZWS9NTS9ERCcpKTtcclxuICAgIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgLy8gSGFuZGxlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZSA9IGFzeW5jICAoKSA9PntcclxuICAgICAgICBpZiAoQm9va2VkW3RpdGxlLnNwbGl0KFwiIHwgXCIpWzFdXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIEJvb2tlZFt0aXRsZS5zcGxpdChcIiB8IFwiKVsxXV0ucHVzaCh0aXRsZS5zcGxpdChcIiB8IFwiKVswXSkgO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBbdGl0bGUuc3BsaXQoXCIgfCBcIilbMV1dO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRpdGxlLnNwbGl0KFwiIHwgXCIpWzBdIDsgXHJcbiAgICAgICAgICAgIEJvb2tlZCA9PT0ge1wiXCI6XCJcIn0gPyBCb29rZWQgPSB7W2tleVswXV0gOiBbdmFsdWVdfSA6Qm9va2VkPSB7Li4uQm9va2VkICwgW2tleVswXV0gOiBbdmFsdWVdfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0bG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBEYXRhID0ge1xyXG4gICAgICAgICAgICBib29rZWQgOiBCb29rZWQgLFxyXG4gICAgICAgICAgICBOb3RpZmljYXRpb24gOiB7XHJcbiAgICAgICAgICAgICAgICBUeXBlIDogXCJSZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlIDogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGhvcnJhaXJlIDogdGl0bGUuc3BsaXQoXCIgfCBcIilbMF0sXHJcbiAgICAgICAgICAgICAgICBkYXkgOiB0aXRsZS5zcGxpdChcIiB8IFwiKVsxXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvcHJvZmlsZXMvYm9va21lZXRpbmc/dXNlcmlkPScrcHJvZmlsZS5faWQsRGF0YSx7d2l0aENyZWRlbnRpYWxzIDogdHJ1ZX0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShCb29rZWQpO1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uWydzdWNjZXNzJ10oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdWb3RyZSBkZW1hbmRlIGEgw6l0w6kgZW52b3nDqWUgYXZlYyBzdWNjw6hzJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonTm91cyB2b3VzIGluZm9ybWVyb25zIGxvcnNxdWUgbm91cyBhdXJvbnMgdW5lIHLDqXBvbnNlJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWN0aXZlRGF5ID0gKGRheSk9PntcclxuICAgICAgICBpZiAobW9tZW50KGRheSkuZGlmZihtb21lbnQoRGF0ZS5ub3coKSksJ2hvdXJzJykgPiAtMjQgJiYgbW9tZW50KGRheSkuZGlmZihtb21lbnQoRGF0ZS5ub3coKSksJ2hvdXJzJykgPD0gMCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSA7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FsZW5kYXJDb250cm9sbGVyc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZGF5XCIgb25DbGljaz17KCk9PnNldFdlZWsoMCl9PkF1am91cmQnaHVpPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2Vla3NcIj5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0V1wiICBvbkNsaWNrPXsoKT0+c2V0V2Vlayh3ZWVrIC0gMSl9PlNlbWFpbmUgcHLDqWPDqWRlbnRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cInByZXZXXCIgIG9uQ2xpY2s9eygpPT5zZXRXZWVrKHdlZWsgKyAxKX0+UHJvY2hhaW5lIHNlbWFpbmU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0YWJsZSBpZD1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT17dGl0bGV9IHZpc2libGU9e3Zpc2libGV9IHdpZHRoPVwiNTB2d1wiIG9uQ2FuY2VsPXsoKT0+c2V0dmlzaWJsZShmYWxzZSl9IGJvZHlTdHlsZT17e2hlaWdodCA6ICcxMDAlJ319IFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbPEJ1dHRvbiBkaXNhYmxlZD17ZmFsc2V9IGtleT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCIgbG9hZGluZz17bG9hZGluZ30gIHN0eWxlPXt7Ym9yZGVyUmFkaXVzIDonMTBweCcsIGZvbnRGYW1pbHkgOidHbGFjaWFsQm9sZCd9fSBvbkNsaWNrPXtoYW5kbGVTYXZlfSA+RW52b3llcjwvQnV0dG9uPl19PlxyXG4gICAgICAgICAgICAgICAgey8qIFByZXNlbnRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tjb2xvciA6ICcjMmEyYTJhJyAsIGZvbnRGYW1pbHkgOiAnR2xhY2lhbEJvbGQnICwgZm9udFNpemUgOiAnMTZweCd9fSA+TWVzc2FnZTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0QXJlYVwiICBwbGFjZWhvbGRlcj1cIkTDqWNyaXZleiB2b3RyZSBvYmplY3RpZiBkZSBsYSByw6l1bmlvblwiIHJvd3M9XCI0XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSk9PnNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSAvPjxici8+PGJyLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF5UmVzdWx0Lm1hcChkYXkgPT4oPHRoIGtleT17ZGF5K0RhdGUubm93KCl9ICBzdHlsZT17YWN0aXZlRGF5KGRheSkgPyB7Y29sb3IgOiAnIzFhNzNlOCcgLCB0ZXh0QWxpZ24gOiBcImNlbnRlclwifSA6IHt0ZXh0QWxpZ24gOiBcImNlbnRlclwifX0gPntEYXRlUGlja2VyKGRheSlbMF19IDxici8+IHtEYXRlUGlja2VyKGRheSlbMV19IHtEYXRlUGlja2VyKGRheSlbMl19IDwvdGg+KSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7bG9jID09PSBcInB1YmxpY1wiICYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKGhvdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtob3VyK0RhdGUubm93KCl9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57aG91cn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RheVJlc3VsdC5tYXAoZGF5ID0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17ZGF5K2hvdXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Qm9va2VkRGlzcGxheVtkYXldICE9PSB1bmRlZmluZWQgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2tlZERpc3BsYXlbZGF5XS5pbmNsdWRlcyhob3VyKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVja2VyKHByb2ZpbGUsaG91cixkYXkpID09PSB0cnVlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQm9va2VkXCI+UsOpc2VydsOpZTwvZGl2PiA6IENoZWNrZXIocHJvZmlsZSxob3VyLGRheSkgPT09IGZhbHNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1c3lDb21wb25lbnQgZGF5PXtkYXl9IGhvdXI9e2hvdXIudG9TdHJpbmcoKX0gc2V0VGl0bGU9e3NldFRpdGxlfSBzZXR2aXNpYmxlPXtzZXR2aXNpYmxlfS8+IDogPGRpdiBjbGFzc05hbWU9XCJQZW5kaW5nXCI+RW4gYXR0ZW50ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxCdXN5Q29tcG9uZW50IGRheT17ZGF5fSBob3VyPXtob3VyLnRvU3RyaW5nKCl9IHNldFRpdGxlPXtzZXRUaXRsZX0gc2V0dmlzaWJsZT17c2V0dmlzaWJsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0Jvb2tlZERpc3BsYXlbZGF5XSA9PT0gdW5kZWZpbmVkICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnVzeUNvbXBvbmVudCBkYXk9e2RheX0gaG91cj17aG91ci50b1N0cmluZygpfSBzZXRUaXRsZT17c2V0VGl0bGV9IHNldHZpc2libGU9e3NldHZpc2libGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHtsb2MgPT09IFwicHJvZmlsZVwiICYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKGhvdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtob3VyK0RhdGUubm93KCl9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57aG91cn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RheVJlc3VsdC5tYXAoZGF5ID0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17ZGF5K2hvdXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Qm9va2VkRGlzcGxheVtkYXldICE9PSB1bmRlZmluZWQgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2tlZERpc3BsYXlbZGF5XS5pbmNsdWRlcyhob3VyKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVja2VyKHByb2ZpbGUsaG91cixkYXkpID09PSB0cnVlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQm9va2VkXCI+UsOpc2VydsOpZTwvZGl2PiA6IENoZWNrZXIocHJvZmlsZSxob3VyLGRheSkgPT09IGZhbHNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1c3lDb21wb25lbnQgZGF5PXtkYXl9IGhvdXI9e2hvdXIudG9TdHJpbmcoKX0gc2V0VGl0bGU9e2ZhbHNlfSBzZXR2aXNpYmxlPXtmYWxzZX0vPiA6IDxkaXYgY2xhc3NOYW1lPVwiUGVuZGluZ1wiPkVuIGF0dGVudGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8QnVzeUNvbXBvbmVudCBkYXk9e2RheX0gaG91cj17aG91ci50b1N0cmluZygpfSBzZXRUaXRsZT17ZmFsc2V9IHNldHZpc2libGU9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Qm9va2VkRGlzcGxheVtkYXldID09PSB1bmRlZmluZWQgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXN5Q29tcG9uZW50IGRheT17ZGF5fSBob3VyPXtob3VyLnRvU3RyaW5nKCl9IHNldFRpdGxlPXtmYWxzZX0gc2V0dmlzaWJsZT17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2FsZW5kYXIgOyIsImltcG9ydCAnLi4vLi4vLi4vcGFnZXMvUHJvZmlsZXMvU2Fzcy9lZGl0Ym94LnNjc3MnO1xyXG5pbXBvcnQge3VzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NlbGVjdCAsVGltZVBpY2tlciAgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBJbWFnZVByZXZpZXcgZnJvbSAnLi4vLi4vSW1hZ2VQcmV2aWV3JztcclxuLy8gaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvQXV0b0NvbXBsZXRlLnNjc3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBGaWVsZHMgZnJvbSAnLi4vLi4vRGF0YS9GaWVsZHMnO1xyXG5pbXBvcnQgSm9icyBmcm9tICcuLi8uLi9EYXRhL0pvYnMnO1xyXG5pbXBvcnQgQ2l0aWVzIGZyb20gJy4uLy4uL0RhdGEvQ2l0aWVzJztcclxuLy8gIC0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBFZGl0Qm94ID0gKHtkYXRhICwgc2V0RGF0YSAsIERpcGxvbWVMaXN0ICwgc2V0RGlwbG9tZUxpc3QgLCBzZXRmaXJlfSkgPT57XHJcbiAgICBcclxuICAgIC8vIFN0YXRlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3QgTW9tZW50cyA9IFtdO1xyXG4gICAgaWYgKGRhdGEuaG9ycmFpcmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIE1vbWVudHMucHVzaChtb21lbnQoZGF0YS5ob3JyYWlyZVswXSwnSEg6bW0nKSxtb21lbnQoZGF0YS5ob3JyYWlyZVsxXSwnSEg6bW0nKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IFJhbmdlUGlja2VyIH0gPSBUaW1lUGlja2VyO1xyXG4gICAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICAgIGNvbnN0ICBbdGltZSAsIHNldFRpbWVdID11c2VTdGF0ZShNb21lbnRzKTtcclxuICAgIGNvbnN0IExhbmd1YWdlcyA9IFtcIkFyYWJlXCIsXCJGcmFuY2Fpc1wiLFwiQW5nbGFpc1wiLFwiU3BhbmlzaFwiXTtcclxuICAgIGNvbnN0IGxhbmcgPSBbXTtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XHJcbiAgICBjb25zdCBbY2hhbmdlZCxzZXRjaGFuZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWxlLHNldEZpbGVdID0gdXNlU3RhdGUoZGF0YS5Vc3JpbWcpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsc2V0dmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBNYXBwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIExhbmd1YWdlcy5tYXAoRmllbGQgPT57XHJcbiAgICAgICAgbGFuZy5wdXNoKDxPcHRpb24ga2V5PXtGaWVsZH0+e0ZpZWxkfTwvT3B0aW9uPik7XHJcbiAgICB9KTtcclxuICAgIEZpZWxkcy5tYXAoRmllbGQgPT57XHJcbiAgICAgICAgY2hpbGRyZW4ucHVzaCg8T3B0aW9uIGtleT17RmllbGR9PntGaWVsZH08L09wdGlvbj4pO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpPT57XHJcbiAgICAgICAgc2V0Y2hhbmdlZCh0cnVlKTtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0ZmlyZShlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAgVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWxlKHVybCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFdoZW4gY2xpY2sgb24gZGVsZXRlIHBpY3R1cmUgXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpPT57XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICBzZXRGaWxlKGRhdGEuVXNyaW1nKTtcclxuICAgICAgICBzZXRjaGFuZ2VkKGZhbHNlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gV2hlbiBkaXBsb21lIGNoYW5nZSB2YWx1ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdCBkaXBDaGFuZ2UgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBbLi4uRGlwbG9tZUxpc3RdO1xyXG4gICAgICBsaXN0W2luZGV4XVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICBzZXREaXBsb21lTGlzdChsaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gV0hlbiBhZGQgYSBkaXBsb21hYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3QgaGFuZGxlQWRkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIHNldERpcGxvbWVMaXN0KFsuLi5EaXBsb21lTGlzdCwgeyBkaXBsb21lTmFtZTogXCJcIiwgZGVzYzogXCJcIiB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGhhbmRsZSBjbGljayBldmVudCBvZiB0aGUgUmVtb3ZlIGJ1dHRvblxyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbGlzdCA9IFsuLi5EaXBsb21lTGlzdF07XHJcbiAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgc2V0RGlwbG9tZUxpc3QobGlzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgLy8gTGFuZ3VhZ2VzIG9uIGNoYW5nZSBoYW5kbGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0IGhhbmRsZUxhbmcgPSAodmFsdWUpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlIDtcclxuICAgICAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSAsIGxhbmd1YWdlcyA6IHN0cmluZ30pOyBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRG9tYWluZSBoYW5kbGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0IGhhbmRsZVRhZyA9KHZhbHVlKT0+e1xyXG4gICAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlIDtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhICwgZG9tYWluZSA6IHN0cmluZ30pOyBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gV2hlbiBjaGFnZSBvZiB0aW1lIGhhbmRsZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0IGhhbmRsZVRpbWUgPSh0aW1lLHRpbWVzdHJpbmcpPT57XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gdGltZXN0cmluZyA7XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSAsIGhvcnJhaXJlIDogc3RyaW5nfSlcclxuICAgICAgICBzZXRUaW1lKHRpbWUpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC8vIEhhbmRsZXIgd2hlbiBpbnB1dCB2YWx1ZSBjaGFuZ2UgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpPT57XHJcbiAgICAgICAgY29uc3QgIG5hbWUgPSBldmVudC50YXJnZXQubmFtZSA7XHJcbiAgICAgICAgY29uc3QgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlIDtcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhICxbbmFtZV0gOiB2YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVkaXRCb3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nXCIgc3JjPXtmaWxlfSBvbkNsaWNrPXsoKT0+c2V0dmlzaWJsZSh0cnVlKX0gLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS11cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiaW1nXCIgbmFtZT1cImltZ1wiIHBsYWNlaG9sZGVyPVwiQ2hvaXNpc3NleiBwaG90b1wiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVwbG9hZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gICBBam91dGVyIHBob3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFuZ2VkICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIlNob3dtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXItdGltZXNcIiBzdHlsZT17e2NvbG9yIDogJyNiZTAwMDAnfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3Zpc2libGUgJiYoPEltYWdlUHJldmlldyBpbWFnZT17ZmlsZX0gaGFuZGxlQ2xpY2s9eygpID0+IHNldHZpc2libGUoZmFsc2UpfS8+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIE5vbSBldCBwcmVub20gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlwbGVJbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBjb250cm9sbGVkIHVzZXJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tXCIgbmFtZT1cIm5vbVwiIHZhbHVlPXtkYXRhLm5vbX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgY29udHJvbGxlZCB1c2VyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByZW5vbVwiIG5hbWU9XCJwcmVub21cIiB2YWx1ZT17ZGF0YS5wcmVub219IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS50eXBlID09PSBcIlNvY2nDqXTDqVwiICYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlwbGVJbnB1dFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRpdGxlICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiAgdmFsdWU9e2RhdGEudGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlcXVpcmVkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtKb2JzLm1hcChqb2I9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17am9ifSBrZXk9e2pvYn0+e2pvYn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5vbSBkZSBzb2NpZXRlICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb20gZGUgc29jacOpdMOpXCIgbmFtZT1cImNvbXBhbnluYW1lXCIgIHZhbHVlPXtkYXRhLmNvbXBhbnluYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEb21haW5lICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgbW9kZT1cInRhZ3NcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnICwgbWFyZ2luVG9wIDogJzIwcHgnIH19IHBsYWNlaG9sZGVyPVwiVm90cmUgZG9tYWluZSBcIiBtYXhUYWdDb3VudD17M30gb25DaGFuZ2UgPXtoYW5kbGVUYWd9IHZhbHVlPXtkYXRhLmRvbWFpbmV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMJ2hvcnJhaXJlIGRlIGxhIHNvY2nDqXTDqSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7Y29sb3IgOiAnIzMxOENFNycgLCBmb250RmFtaWx5IDogJ0dsYWNpYWxCb2xkJyAsIGZvbnRTaXplIDogJzE2cHgnfX0+TCdob3JyYWlyZSBkZSB2b3RyZSBzb2Npw6l0w6kgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFuZ2VQaWNrZXIgIGJvcmRlcmVkPXtmYWxzZX0gZm9ybWF0PSdISDptbScgIG1pbnV0ZVN0ZXA9ezMwfSB2YWx1ZT17dGltZX0gb25DaGFuZ2U9e2hhbmRsZVRpbWV9Lz48YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlwbGVJbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGl0cmVcIiBzdHlsZT17e21hcmdpbkJvdHRvbSA6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDaXR5ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ0aXRsZVwiIG5hbWU9XCJjaXR5XCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q2l0aWVzLm1hcChjaXRpZSA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NpdGllfSBrZXk9e2NpdGllfT57Y2l0aWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGFkZHJlc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZHJlc3NlXCIgIG5hbWU9XCJhZGRyZXNzZVwiIHZhbHVlPXtkYXRhLmFkZHJlc3NlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPiAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBQcmVzZW50YXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7Y29sb3IgOiAnIzJhMmEyYScgLCBmb250RmFtaWx5IDogJ0dsYWNpYWxCb2xkJyAsIGZvbnRTaXplIDogJzE2cHgnfX0gPlByZXNlbnRhdGlvbjwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0QXJlYVwiIG5hbWU9XCJwcmVzZW50YXRpb25cIiBwbGFjZWhvbGRlcj17ZGF0YS50eXBlICE9PSBcIlNvY2nDqXTDqVwiID8gXCJQYXJsZXotbm91cyBkZSB2b3VzIChvcHRpb25uZWwpXCIgOiBcIkTDqWNyaXZleiB2b3RyZSBlbnRyZXByaXNlXCJ9IHJvd3M9XCI0XCIgdmFsdWU9e2RhdGEucHJlc2VudGF0aW9ufSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPjxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgIHsvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB7LyogTGFuZ3VhZ2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2NvbG9yIDogJyMyYTJhMmEnICwgZm9udEZhbWlseSA6ICdHbGFjaWFsQm9sZCcgLCBmb250U2l6ZSA6ICcxNnB4J319ID5MYW5ndWVzIHBhcmzDqXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBtb2RlPVwidGFnc1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsYm9yZGVyUmFkaXVzIDogJzEwcHgnLCBtYXJnaW5Ub3A6JzVweCcgLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZTlmMWZhJyB9fSBwbGFjZWhvbGRlcj1cIkV4OiBGcmFuY2FpcyAsIGFyYWJlIC4uLlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9e2hhbmRsZUxhbmd9IHZhbHVlPXtkYXRhLmxhbmd1YWdlc30gbWF4VGFnQ291bnQ9ezN9ID5cclxuICAgICAgICAgICAgICAgICAgICB7bGFuZ31cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Pjxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgIHsvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfSAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBEaXBsb21lcyBldCBmb3JtYXRpb25zICAqL31cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2NvbG9yIDogJyMyYTJhMmEnICwgZm9udEZhbWlseSA6ICdHbGFjaWFsQm9sZCcgLCBmb250U2l6ZSA6ICcxNnB4J319ID5EaXBsw7RtZSBldCBmb3JtYXRpb25zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGlwbG9tZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7RGlwbG9tZUxpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgZGlwbG9tZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpcGxvbWVOYW1lXCIgcGxhY2Vob2xkZXI9XCJWb3RyZSBEaXBsb21lXCIgdmFsdWU9e2VsZW1lbnQuZGlwbG9tZU5hbWV9ICBvbkNoYW5nZT17ZSA9PiBkaXBDaGFuZ2UoZSxpbmRleCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2luZGV4ICE9PSAwID9cImlucHV0IGRlc2MyXCI6XCJpbnB1dCBkZXNjXCJ9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NcIiBwbGFjZWhvbGRlcj1cIkJyw6h2ZSBkZXNjcmlwdGlvblwiIHZhbHVlPXtlbGVtZW50LmRlc2N9IG9uQ2hhbmdlPXtlID0+IGRpcENoYW5nZShlLGluZGV4KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSAwICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVDbGljayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9e3tjb2xvciA6ICcjYmUwMDAwJ319PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRDbGlja30gY2xhc3NOYW1lPVwiYWpvdXRlclwiPkFqb3V0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRWRpdEJveCA7IiwiY29uc3QgTmF2QWNjZXVpbCA9ICh7ZGF0ZSxwcm9maWxlfSk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2ZpbGUudHlwZSA9PSBcIlNvY2nDqXTDqVwiICYmKDxoMj5QcmVzZW50YXRpb24gZGUgbCdlbnRyZXByaXNlPC9oMj4pfVxyXG4gICAgICAgICAgICAgICAge3Byb2ZpbGUudHlwZSA9PSBcIkNsaWVudFwiICYmKDxoMj5QcmVzZW50YXRpb24gZHUgY2xpZW50PC9oMj4pfVxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb2ZpbGUucHJlc2VudGF0aW9uID09PSBcIlwiIHx8IHByb2ZpbGUucHJlc2VudGF0aW9uID09PSB1bmRlZmluZWQgPyBcIkNldCB1dGlsaXNhdGV1ciBuJ2EgcGFzIGZvdXJuaWUgZGUgZG9ubsOpZXMgcG91ciBsJ2luc3RhbnRcIiA6IHByb2ZpbGUucHJlc2VudGF0aW9uIH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvZmlsZS50eXBlID09IFwiU29jacOpdMOpXCIgJiYoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvcnJhaXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkhvcnJhaXJlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpbWVUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0gPT09IFwiTW9uXCIgPyBcIlRvZGF5XCIgOiBcIlwifT5MdW5kaTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0gPT09IFwiVHVlXCIgPyBcIlRvZGF5XCIgOiBcIlwifT5NYXJkaTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0gPT09IFwiV2VkXCIgPyBcIlRvZGF5XCIgOiBcIlwifSA+TWVyY3JlZGk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtkYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKVswXSA9PT0gXCJNb25cIiA/IFwiVG9kYXlcIiA6IFwiXCJ9Pntwcm9maWxlLmhvcnJhaXJlWzBdfSAtIHtwcm9maWxlLmhvcnJhaXJlWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0gPT09IFwiVHVlXCIgPyBcIlRvZGF5XCIgOiBcIlwifSA+e3Byb2ZpbGUuaG9ycmFpcmVbMF19IC0ge3Byb2ZpbGUuaG9ycmFpcmVbMV19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtkYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKVswXSA9PT0gXCJXZWRcIiA/IFwiVG9kYXlcIiA6IFwiXCJ9ID57cHJvZmlsZS5ob3JyYWlyZVswXX0gLSB7cHJvZmlsZS5ob3JyYWlyZVsxXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtkYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKVswXSA9PT0gXCJUaHVcIiA/IFwiVG9kYXlcIiA6IFwiXCJ9ID5KZXVkaTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0gPT09IFwiRnJpXCIgPyBcIlRvZGF5XCIgOiBcIlwifSA+VmVuZHJlZGk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RhdGUudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdID09PSBcIlNhdFwiID8gXCJUb2RheVwiIDogXCJcIn0gPlNhbWVkaTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RhdGUudG9EYXRlU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdID09PSBcIlRodVwiID8gXCJUb2RheVwiIDogXCJcIn0gPntwcm9maWxlLmhvcnJhaXJlWzBdfSAtIHtwcm9maWxlLmhvcnJhaXJlWzFdfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZGF0ZS50b0RhdGVTdHJpbmcoKS5zcGxpdChcIiBcIilbMF0gPT09IFwiRnJpXCIgPyBcIlRvZGF5XCIgOiBcIlwifSA+e3Byb2ZpbGUuaG9ycmFpcmVbMF19IC0ge3Byb2ZpbGUuaG9ycmFpcmVbMV19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtkYXRlLnRvRGF0ZVN0cmluZygpLnNwbGl0KFwiIFwiKVswXSA9PT0gXCJTYXRcIiA/IFwiVG9kYXlcIiA6IFwiXCJ9ID57cHJvZmlsZS5ob3JyYWlyZVswXX0gLSB7cHJvZmlsZS5ob3JyYWlyZVsxXX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2QWNjZXVpbCA7IiwiaW1wb3J0IE1hcCBmcm9tICcuLi9tYXAvTWFwJztcclxuY29uc3QgTmF2UHJvcG9zID0gKHtwcm9maWxlLGxvY2F0aW9ufSk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPkluZm9ybWF0aW9uIHN1cHBsZW1lbnRhaXJlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9TdXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS50eXBlID09PSBcIlNvY2nDqXTDqVwiICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb21haW5lIERlIHRyYXZhaWwgOiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgY2xhc3NOYW1lPVwiZWxlbWVudFwiID57cHJvZmlsZS5kb21haW5lLm1hcChlbCA9Pign4oiZICcrZWwrICdcXG4nKSl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpdGxlXCIgPnTDqWzDqXBob25lIGZpeGUgOiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJlbGVtZW50XCIgPntwcm9maWxlLmZpeHBob25lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpdGxlXCIgPnTDqWzDqXBob25lIHBvcnRhYmxlIDogPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZWxlbWVudFwiID57cHJvZmlsZS5tb2JpbGVwaG9uZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGl0bGVcIiA+TGFuZ3VlcyBwYXJsw6lzIDogPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZWxlbWVudFwiICBzdHlsZT17e3doaXRlU3BhY2U6ICdwcmUnfX0+e3Byb2ZpbGUubGFuZ3VhZ2VzLm1hcChlbCA9Pign4oiZICcrZWwrICdcXG4nKSl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3tjb2xvciA6IFwiIzJlOWFmZlwiIH19ID5EaXBsb21lczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7Ym9yZGVyIDogJzFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCknfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZGlwbG9tZS5tYXAoZG9tID0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e0RhdGUubm93KCkrZG9tLmRlc2N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17e2NvbG9yOiAnIzk2OTY5Nid9fT57ZG9tLmRpcGxvbWVOYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJlbGVtZW50XCIgPntkb20uZGVzY308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxociBzdHlsZT17e2JvcmRlciA6ICcxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGl0bGVcIiA+e3Byb2ZpbGUudHlwZSA9PT0gXCJTb2Npw6l0w6lcIiA/XCIgU2nDqGdlIHNvY2lhbCA6XCIgOiBcIkFkZHJlc3NlIGR1IGNsaWVudCA6XCIgfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImVsZW1lbnRcIiA+e3Byb2ZpbGUuYWRkcmVzc2V9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+TG9jYWxpc2F0aW9uPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFwQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcCBsb2NhdGlvbj17bG9jYXRpb259ICB6b29tTGV2ZWw9ezE3fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2UHJvcG9zIDsiLCJpbXBvcnQgQm9va01ldHRpbmcgZnJvbSAnLi4vU3ZnL0Jvb2tNZXR0aW5nJztcclxuaW1wb3J0IEVkaXRTdmcgZnJvbSAnLi4vU3ZnL0VkaXRTdmcnO1xyXG5cclxuY29uc3QgUHJvZmlsZUhlYWQgPSAoe3Byb2ZpbGUgLCBoYW5kbGVFZGl0ICwgc2V0Ym9vayAsIHVzZXJpZH0pPT57XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVIZWFkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGUuVXNyaW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzPntwcm9maWxlLmNvbXBhbnluYW1lID09PSBcIlwiIHx8IHByb2ZpbGUuY29tcGFueW5hbWU9PSB1bmRlZmluZWQgPyBwcm9maWxlLm5vbStcIiBcIitwcm9maWxlLnByZW5vbSA6IHByb2ZpbGUuY29tcGFueW5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIHtwcm9maWxlLnR5cGUgPT09IFwiU29jacOpdMOpXCIgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQgOicxMHB4J319PjwvaT48c3Bhbj57cHJvZmlsZS5ub219IHtwcm9maWxlLnByZW5vbX08L3NwYW4+IHwgPHNwYW4+e3Byb2ZpbGUudGl0bGV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJvZmlsZS50eXBlID09PSBcIkNsaWVudFwiICYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e21hcmdpblJpZ2h0IDonMTBweCd9fT48L2k+PHNwYW4+Q2xpZW50PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJvZmlsZS50eXBlID09PSBcIlNvY2nDqXTDqVwiICYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkxpa2VzXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e21hcmdpblJpZ2h0IDonNXB4J319PjwvaT4ge3Byb2ZpbGUuc3RhcnMubGVuZ3RofSBKJ2FpbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3VzZXJpZCAhPT0gcHJvZmlsZS5faWQgJiYgcHJvZmlsZS50eXBlID09PSBcIlNvY2nDqXTDqVwiICYmKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCb29rTWV0dGluZ1wiIG9uQ2xpY2s9eygpPT5zZXRib29rKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxCb29rTWV0dGluZyAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UsOpc2VydmVyIHVuZSByw6l1bmlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dXNlcmlkID09PSBwcm9maWxlLl9pZCAmJihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWRpdFByb2ZpbGVcIiBvbkNsaWNrPXtoYW5kbGVFZGl0fT5cclxuICAgICAgICAgICAgICAgIDxFZGl0U3ZnLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkVkaXRlciBwcm9maWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVIZWFkIDsiLCJpbXBvcnQgeyBQcm9ncmVzc30gZnJvbSAnYW50ZCcgO1xyXG5cclxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoe3BlcmNlbnRhZ2V9KT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b20gOiAnMTAlJywgbWFyZ2luVG9wIDogJzEwJScsdGV4dEFsaWduIDogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzAlJzogJyMwMDMwOEYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcxMDAlJzogJyM3Q0I5RTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9e3BlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+VmV1aWxsZXogcGF0aWVudGVyIC4uLiA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3VzIG1ldHRvbnMgw6Agam91ciB2b3RyZSBwcm9maWw8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhciA7IiwiY29uc3QgQWJvdXRTdmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgaGVpZ2h0PVwiMTBwdFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiMTBwdFwiIGZpbGw9XCJjdXJyZW50Y29sb3JcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICA8cGF0aCAgZD1cIm00NTMuMzMyMDMxIDQyLjY2Nzk2OWgtMTEydi01LjMzNTkzOGMwLTIwLjU4NTkzNy0xNi43NDYwOTMtMzcuMzMyMDMxLTM3LjMzMjAzMS0zNy4zMzIwMzFoLTk2Yy0yMC41ODU5MzggMC0zNy4zMzIwMzEgMTYuNzQ2MDk0LTM3LjMzMjAzMSAzNy4zMzIwMzF2NS4zMzU5MzhoLTExMmMtMzIuMzYzMjgxIDAtNTguNjY3OTY5IDI2LjMwMDc4MS01OC42Njc5NjkgNTguNjY0MDYydjI2Ni42Njc5NjljMCAzMi4zNjMyODEgMjYuMzA0Njg4IDU4LjY2Nzk2OSA1OC42Njc5NjkgNTguNjY3OTY5aDM5NC42NjQwNjJjMzIuMzYzMjgxIDAgNTguNjY3OTY5LTI2LjMwNDY4OCA1OC42Njc5NjktNTguNjY3OTY5di0yNjYuNjY3OTY5YzAtMzIuMzYzMjgxLTI2LjMwNDY4OC01OC42NjQwNjItNTguNjY3OTY5LTU4LjY2NDA2MnptLTE1NC42NDQ1MzEgNDIuNjY0MDYyaC04NS4zNTU0Njl2LTQyLjY2NDA2Mmg4NS4zMzU5Mzh6bS0xMzguNjg3NSA2NGMyOS4zOTg0MzggMCA1My4zMzIwMzEgMjMuOTM3NSA1My4zMzIwMzEgNTMuMzM1OTM4IDAgMjkuMzk0NTMxLTIzLjkzMzU5MyA1My4zMzIwMzEtNTMuMzMyMDMxIDUzLjMzMjAzMXMtNTMuMzMyMDMxLTIzLjkzNzUtNTMuMzMyMDMxLTUzLjMzMjAzMWMwLTI5LjM5ODQzOCAyMy45MzM1OTMtNTMuMzM1OTM4IDUzLjMzMjAzMS01My4zMzU5Mzh6bTk2IDE5Ny4zMzU5MzhjMCA4LjgzMjAzMS03LjE2Nzk2OSAxNi0xNiAxNmgtMTYwYy04LjgzMjAzMSAwLTE2LTcuMTY3OTY5LTE2LTE2di0xMC42Njc5NjljMC0zMi4zNjMyODEgMjYuMzA0Njg4LTU4LjY2Nzk2OSA1OC42Njc5NjktNTguNjY3OTY5aDc0LjY2NDA2MmMzMi4zNjMyODEgMCA1OC42Njc5NjkgMjYuMzA0Njg4IDU4LjY2Nzk2OSA1OC42Njc5Njl6bTE3NiAxNmgtMTE3LjMzMjAzMWMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnM3LjE2Nzk2OS0xNiAxNi0xNmgxMTcuMzMyMDMxYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wLTg1LjMzNTkzOGgtMTE3LjMzMjAzMWMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnM3LjE2Nzk2OS0xNiAxNi0xNmgxMTcuMzMyMDMxYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wLTg1LjMzMjAzMWgtMTE3LjMzMjAzMWMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnM3LjE2Nzk2OS0xNiAxNi0xNmgxMTcuMzMyMDMxYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wIDBcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTdmc7XHJcbiIsImNvbnN0IEJvb2tNZXR0aW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGhlaWdodD1cIjE1cHRcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjE1cHRcIiBmaWxsPVwiY3VycmVudGNvbG9yXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTI1NS41MDEsMC40OTljLTgxLjQ0OCwwLTE0Ny43MTEsNjYuMjY0LTE0Ny43MTEsMTQ3LjcxMWMwLDUwLjQ0OSwyNS40MjksOTUuMDY1LDY0LjEzNywxMjEuNzI0ICAgIGMtMzYuMTM5LDEyLjQ3MS02OS4yNjMsMzMuMDcxLTk3LjA5MSw2MC44OTlDMjYuNTc3LDM3OS4wOTMsMCw0NDMuMjU0LDAsNTExLjUwMWgzOS45MjIgICAgYzAtMTE4Ljg3MSw5Ni43MDgtMjE1LjU3OSwyMTUuNTc5LTIxNS41NzljODEuNDQ4LDAsMTQ3LjcxMS02Ni4yNjQsMTQ3LjcxMS0xNDcuNzEyUzMzNi45NDksMC40OTksMjU1LjUwMSwwLjQ5OXogTTI1NS41MDEsMjU2ICAgIGMtNTkuNDM1LDAtMTA3Ljc4OS00OC4zNTQtMTA3Ljc4OS0xMDcuNzg5UzE5Ni4wNjYsNDAuNDIxLDI1NS41MDEsNDAuNDIxUzM2My4yOSw4OC43NzUsMzYzLjI5LDE0OC4yMTFTMzE0LjkzNiwyNTYsMjU1LjUwMSwyNTZ6ICAgIFwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNDI4LjE2NCwzODcuNzQzIDQyOC4xNjQsMzAzLjkwNiAzODguMjQyLDMwMy45MDYgMzg4LjI0MiwzODcuNzQzIDMwNC40MDUsMzg3Ljc0MyAzMDQuNDA1LDQyNy42NjUgICAgIDM4OC4yNDIsNDI3LjY2NSAzODguMjQyLDUxMS41MDEgNDI4LjE2NCw1MTEuNTAxIDQyOC4xNjQsNDI3LjY2NSA1MTIsNDI3LjY2NSA1MTIsMzg3Ljc0MyAgIFwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBCb29rTWV0dGluZyA7XHJcbiIsImNvbnN0IENhbGVuZGFySWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICBoZWlnaHQ9XCIxMHB0XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCIxMHB0XCIgZmlsbD1cImN1cnJlbnRjb2xvclwiIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgID5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjM4NlwiIGN5PVwiMjEwXCIgcj1cIjIwXCIgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk00MzIsNDBoLTI2VjIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMHYyMGgtOTFWMjBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjAgICAgIGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MjBoLTkwVjIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCw4Ljk1NC0yMCwyMHYyMEg4MEMzNS44ODgsNDAsMCw3NS44ODgsMCwxMjB2MzEyICAgICBjMCw0NC4xMTIsMzUuODg4LDgwLDgwLDgwaDE1M2MxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMGMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMEg4MGMtMjIuMDU2LDAtNDAtMTcuOTQ0LTQwLTQwVjEyMCAgICAgYzAtMjIuMDU2LDE3Ljk0NC00MCw0MC00MGgyNXYyMGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMHMyMC04Ljk1NCwyMC0yMFY4MGg5MHYyMGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMHMyMC04Ljk1NCwyMC0yMFY4MGg5MSAgICAgdjIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwYzExLjA0NiwwLDIwLTguOTU0LDIwLTIwVjgwaDI2YzIyLjA1NiwwLDQwLDE3Ljk0NCw0MCw0MHYxMTRjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjAgICAgIGMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMFYxMjBDNTEyLDc1Ljg4OCw0NzYuMTEyLDQwLDQzMiw0MHpcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTM5MSwyNzBjLTY2LjcyLDAtMTIxLDU0LjI4LTEyMSwxMjFzNTQuMjgsMTIxLDEyMSwxMjFzMTIxLTU0LjI4LDEyMS0xMjFTNDU3LjcyLDI3MCwzOTEsMjcweiBNMzkxLDQ3MiAgICAgYy00NC42NjMsMC04MS0zNi4zMzYtODEtODFzMzYuMzM3LTgxLDgxLTgxYzQ0LjY2MywwLDgxLDM2LjMzNiw4MSw4MVM0MzUuNjYzLDQ3MiwzOTEsNDcyelwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDIwLDM3MWgtOXYtMjFjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwdjQxYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDI5ICAgICBjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBDNDQwLDM3OS45NTQsNDMxLjA0NiwzNzEsNDIwLDM3MXpcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjk5XCIgY3k9XCIyMTBcIiByPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjEyXCIgY3k9XCIyOTdcIiByPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTI1XCIgY3k9XCIyMTBcIiByPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTI1XCIgY3k9XCIyOTdcIiByPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTI1XCIgY3k9XCIzODRcIiByPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjEyXCIgY3k9XCIzODRcIiByPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjEyXCIgY3k9XCIyMTBcIiByPVwiMjBcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJJY29uO1xyXG4iLCJjb25zdCBFZGl0U3ZnID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgICBoZWlnaHQ9XCIxOHB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCIxOHB4XCIgZmlsbD1cImN1cnJlbnRjb2xvclwiIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgID5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCI1MS4yLDM1My4yOCAwLDUxMiAxNTguNzIsNDYwLjggICBcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8Zz5cclxuICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgIHg9XCI4OS43M1wiXHJcbiAgICAgICAgICAgIHk9XCIxNjkuMDk3XCJcclxuICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTk1Ljg1NzUgMjYwLjM3MTkpXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzNTMuMjc3XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTUzLjU5OVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8Zz5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTA0LjMyLDc5LjM2TDQzMi42NCw3LjY4Yy0xMC4yNC0xMC4yNC0yNS42LTEwLjI0LTM1Ljg0LDBsLTIzLjA0LDIzLjA0bDEwNy41MiwxMDcuNTJsMjMuMDQtMjMuMDQgICAgQzUxNC41NiwxMDQuOTYsNTE0LjU2LDg5LjYsNTA0LjMyLDc5LjM2elwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICAgIDxnPjwvZz5cclxuICAgICAgPGc+PC9nPlxyXG4gICAgICA8Zz48L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0U3ZnO1xyXG4iLCJjb25zdCBIb21lU3ZnID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3ZnIGhlaWdodD1cIjEwcHRcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjEwcHRcIiBmaWxsPVwiY3VycmVudGNvbG9yXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIm00OTguMTk1MzEyIDIyMi42OTUzMTJjLS4wMTE3MTgtLjAxMTcxOC0uMDIzNDM3LS4wMjM0MzctLjAzNTE1Ni0uMDM1MTU2bC0yMDguODU1NDY4LTIwOC44NDc2NTZjLTguOTAyMzQ0LTguOTA2MjUtMjAuNzM4MjgyLTEzLjgxMjUtMzMuMzI4MTI2LTEzLjgxMjUtMTIuNTg5ODQzIDAtMjQuNDI1NzgxIDQuOTAyMzQ0LTMzLjMzMjAzMSAxMy44MDg1OTRsLTIwOC43NDYwOTMgMjA4Ljc0MjE4N2MtLjA3MDMxMy4wNzAzMTMtLjE0MDYyNi4xNDQ1MzEtLjIxMDkzOC4yMTQ4NDQtMTguMjgxMjUgMTguMzg2NzE5LTE4LjI1IDQ4LjIxODc1LjA4OTg0NCA2Ni41NTg1OTQgOC4zNzg5MDYgOC4zODI4MTIgMTkuNDQ1MzEyIDEzLjIzODI4MSAzMS4yNzczNDQgMTMuNzQ2MDkzLjQ4MDQ2OC4wNDY4NzYuOTY0ODQzLjA3MDMxMyAxLjQ1MzEyNC4wNzAzMTNoOC4zMjQyMTl2MTUzLjY5OTIxOWMwIDMwLjQxNDA2MiAyNC43NDYwOTQgNTUuMTYwMTU2IDU1LjE2Nzk2OSA1NS4xNjAxNTZoODEuNzEwOTM4YzguMjgxMjUgMCAxNS02LjcxNDg0NCAxNS0xNXYtMTIwLjVjMC0xMy44Nzg5MDYgMTEuMjg5MDYyLTI1LjE2Nzk2OSAyNS4xNjc5NjgtMjUuMTY3OTY5aDQ4LjE5NTMxM2MxMy44Nzg5MDYgMCAyNS4xNjc5NjkgMTEuMjg5MDYzIDI1LjE2Nzk2OSAyNS4xNjc5Njl2MTIwLjVjMCA4LjI4NTE1NiA2LjcxNDg0MyAxNSAxNSAxNWg4MS43MTA5MzdjMzAuNDIxODc1IDAgNTUuMTY3OTY5LTI0Ljc0NjA5NCA1NS4xNjc5NjktNTUuMTYwMTU2di0xNTMuNjk5MjE5aDcuNzE4NzVjMTIuNTg1OTM3IDAgMjQuNDIxODc1LTQuOTAyMzQ0IDMzLjMzMjAzMS0xMy44MDg1OTQgMTguMzU5Mzc1LTE4LjM3MTA5MyAxOC4zNjcxODctNDguMjUzOTA2LjAyMzQzNy02Ni42MzY3MTl6bTAgMFwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lU3ZnIDsiLCIgIFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0J1xyXG5cclxuXHJcbmltcG9ydCAnLi4vLi4vLi4vcGFnZXMvUHJvZmlsZXMvU2Fzcy9tYXAuc2Nzcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBNYXJrZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY29sb3IsIG5hbWUsIGlkIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwaW4gYm91bmNlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsc2VcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgTWFwID0gKHsgbG9jYXRpb24sIHpvb21MZXZlbCB9KSA9PiB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5SRUFDVF9BUFBfTUFQX0tFWSk7XHJcbiAgfSxbXSk7XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwXCI+XHJcbiAgICAgICAgPEdvb2dsZU1hcFJlYWN0XHJcbiAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01BUF9LRVkgfX1cclxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e2xvY2F0aW9ufVxyXG4gICAgICAgICAgZGVmYXVsdFpvb209e3pvb21MZXZlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgIGxhdD17bG9jYXRpb24ubGF0fVxyXG4gICAgICAgICAgICBsbmc9e2xvY2F0aW9uLmxuZ31cclxuICAgICAgICAgICAgbmFtZT17bG9jYXRpb24uYWRkcmVzc31cclxuICAgICAgICAgICAgY29sb3I9XCIjMkU5QUZGXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYXAiLCIvLyBEZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQge3VzZVN0YXRlICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9hbnQtcGlja2VyLnNjc3MnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vZmlyZWJhc2UnOyBcclxuXHJcbi8vIENvbXBvbmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9oZWFkJztcclxuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgSG9tZVN2ZyBmcm9tICcuL1N2Zy9Ib21lU3ZnJztcclxuaW1wb3J0IEFib3V0U3ZnIGZyb20gJy4vU3ZnL0Fib3V0U3ZnJztcclxuaW1wb3J0IENhbGVuZGFyU3ZnIGZyb20gJy4vU3ZnL0NhbGVuZGFyU3ZnJztcclxuaW1wb3J0ICcuLi8uLi9wYWdlcy9Qcm9maWxlcy9TYXNzL2Z1bGxQcm9maWxlLnNjc3MnO1xyXG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tICcuLi9MaWtlQnV0dG9uJztcclxuaW1wb3J0IEdlb2NvZGUgZnJvbSBcInJlYWN0LWdlb2NvZGVcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gJ2FudGQvbGliL21vZGFsL01vZGFsJztcclxuaW1wb3J0IEVkaXRCb3ggZnJvbSAnLi9Db21wb25lbnRzL0VkaXRCb3gnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9Db21wb25lbnRzL0Jvb2tNZWV0aW5nJztcclxuaW1wb3J0IE5hdkFjY2V1aWwgZnJvbSAnLi9Db21wb25lbnRzL05hdkFjY2V1aWwnO1xyXG5pbXBvcnQgTmF2UHJvcG9zIGZyb20gJy4vQ29tcG9uZW50cy9OYXZQcm9wb3MnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Db21wb25lbnRzL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IFByb2ZpbGVIZWFkIGZyb20gJy4vQ29tcG9uZW50cy9Qcm9maWxlSGVhZCc7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gaXNFbXB0eShvYmogLCB0eXBlKSB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJTb2Npw6l0w6lcIikge1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiXCIgfHwgdmFsdWUgPT0gW10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiYm9va2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvYmpbXCJhZGRyZXNzZVwiXSA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlIDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZSA7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgUHJvZmlsZUJvZHkgPSAoe3Byb2ZpbGUgLCB1c2VyaWR9KT0+e1xyXG4gICAgLy8gU3RhdGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3QgbmFtZSA9IHByb2ZpbGUuY29tcGFueW5hbWUgPT09IFwiXCIgfHwgcHJvZmlsZS5jb21wYW55bmFtZT09IHVuZGVmaW5lZCA/IHByb2ZpbGUubm9tK1wiIFwiK3Byb2ZpbGUucHJlbm9tIDogcHJvZmlsZS5jb21wYW55bmFtZSA7XHJcbiAgICBjb25zdCBbaW1hZ2VMb2FkaW5nICwgc2V0bG9hZGltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50ICwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnQWNjZXVpbCcpO1xyXG4gICAgY29uc3QgW2NoZWNrYm94LHNldENoZWNrXSA9IHVzZVN0YXRlKHByb2ZpbGUuc3RhcnMuaW5jbHVkZXModXNlcmlkKSk7XHJcbiAgICBjb25zdCBbYm9va21ldHRpbmcsc2V0Ym9va10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGF0YSAsIHNldERhdGFdID0gdXNlU3RhdGUocHJvZmlsZSk7XHJcbiAgICBjb25zdCBbbG9jYXRpb24gLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZmlsZWZpcmViYXNlLHNldGZpcmVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcGVyY2VudGFnZSAsIHNldFByZWNlbnRhZ2VdPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLHNldHZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0bG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbRGlwbG9tZUxpc3QgLCBzZXREaXBsb21lTGlzdF0gPSB1c2VTdGF0ZShwcm9maWxlLmRpcGxvbWUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIC8vIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdCBIb21lSWNvbiA9IHByb3BzID0+IDxJY29uIGNvbXBvbmVudD17SG9tZVN2Z30gey4uLnByb3BzfSAvPjtcclxuICAgIGNvbnN0IEFib3V0SWNvbiA9IHByb3BzID0+IDxJY29uIGNvbXBvbmVudD17QWJvdXRTdmd9IHsuLi5wcm9wc30gLz47XHJcbiAgICBjb25zdCBDYWxlbmRhckljb24gPSBwcm9wcyA9PiA8SWNvbiBjb21wb25lbnQ9e0NhbGVuZGFyU3ZnfSB7Li4ucHJvcHN9IC8+IDtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFkciA9IHByb2ZpbGUuYWRkcmVzc2UgKyBcIiAsIFwiKyBwcm9maWxlLmNpdHkgO1xyXG4gICAgICAgIEdlb2NvZGUuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NQVBfS0VZKTtcclxuICAgICAgICBHZW9jb2RlLmZyb21BZGRyZXNzKGFkcikudGhlbihcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XHJcbiAgICAgICAgICAgICAgY29uc3QgbG9jID0ge2FkZHJlc3M6IHByb2ZpbGUuYWRkcmVzc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGxhdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogbG5nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNldExvY2F0aW9uKGxvYyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgIH0sW10pXHJcbiAgICAvLyBGaXJlYmFzZSB1cmwgdXBsb2FkIGZ1bmN0aW9uIFxyXG4gICAgY29uc3QgZmlyZWJhc2VVcmwgPSAoZmlsZSkgPT57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbWFnZU5hbWUgPSBcImZpcmViYXNlLWltYWdlLVwiICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IHVwbG9hZEltYWdlID0gc3RvcmFnZS5yZWYoYGltYWdlcy8ke2N1cnJlbnRJbWFnZU5hbWV9YCkucHV0KGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgdXBsb2FkSW1hZ2Uub24oJ3N0YXRlX2NoYW5nZWQnLFxyXG4gICAgICAgICAgICAgICAgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlciA9IE1hdGguZmxvb3IoKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMClcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcmVjZW50YWdlKHBlcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5yZWYoJ2ltYWdlcycpLmNoaWxkKGN1cnJlbnRJbWFnZU5hbWUpLmdldERvd25sb2FkVVJMKCkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBbdXJsLCBjdXJyZW50SW1hZ2VOYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlTGlrZSA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgdmFyIHN0YXJzID0gcHJvZmlsZS5zdGFycyA7XHJcbiAgICAgICAgaWYgKCFjaGVja2JveCkge1xyXG4gICAgICAgICAgIGF3YWl0IHN0YXJzLnB1c2godXNlcmlkKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBhd2FpdCBzdGFycy5zcGxpY2Uoc3RhcnMuaW5kZXhPZih1c2VyaWQpLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVjayghY2hlY2tib3gpO1xyXG4gICAgICAgIGNvbnN0IFVybCA9ICcvYXBpL3Byb2ZpbGVzL2xpa2U/dXNlcmlkPScrcHJvZmlsZS5faWQ7XHJcbiAgICAgICAgYXhpb3MucG9zdChVcmwse1wic3RhcnNcIjpzdGFyc30se3dpdGhDcmVkZW50aWFscyA6IHRydWV9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+e30pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT57XHJcbiAgICAgICAgc2V0Q3VycmVudChlLmtleSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVCYWNrID0gKCk9PntcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGAvU2VhcmNoP2NvbXBhbnluYW1lPSR7cHJvZmlsZS5jb21wYW55bmFtZX0mZG9tYWluZT0mY2l0eT0mcGFnZT0xYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVFZGl0ID0gKCk9PntcclxuICAgICAgICBzZXR2aXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgbGV0IE9sZERhdGEgPSBkYXRhIDtcclxuICAgICAgICAgICAgT2xkRGF0YVtcImRpcGxvbWVcIl0gPSBEaXBsb21lTGlzdCA7XHJcbiAgICAgICAgICAgIHNldERhdGEoT2xkRGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KGRhdGEgLCBwcm9maWxlLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiVW4gb3UgcGx1c2lldXJzIGNoYW1wcyBzb250IHZpZGVzXCIpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0bG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlZmlyZWJhc2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRsb2FkaW1hZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nRGF0YSA9IGF3YWl0IGZpcmViYXNlVXJsKGZpbGVmaXJlYmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhLlVzcmltZyA9IGltZ0RhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gXCIvYXBpL3Byb2ZpbGVzL3VwZGF0ZT91c2VyaWQ9XCIgKyB1c2VyaWQgO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEse3dpdGhDcmVkZW50aWFscyA6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiTWlzZSDDoCBqb3VyIHLDqXVzc2llXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLCB2ZXVpbGxleiByw6llc3NheWVyIHBsdXMgdGFyZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSwgdmV1aWxsZXogcsOpZXNzYXllciBwbHVzIHRhcmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZXR1cm5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPXtuYW1lK1wiIHwgNlNvbHV0aW9uc1wifS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9uQ29udGFpbmVyXCIgb25DbGljaz17aGFuZGxlQmFja30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0IGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCI+UmV0b3VyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFByb2ZpbGVIZWFkIHByb2ZpbGU9e3Byb2ZpbGV9IGhhbmRsZUVkaXQ9e2hhbmRsZUVkaXR9IHNldGJvb2s9e3NldGJvb2t9IHVzZXJpZD17dXNlcmlkfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVCb2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgc3R5bGU9e3t0b3AgOiAnOSUnfX0gdGl0bGU9XCJTZWxlY3Rpb25uZXogbGEgY2VsbHVsZSBjb3JyZXNwb25kYW50ZSBhIHZvdHJlIHLDqXVuaW9uXCIgdmlzaWJsZT17Ym9va21ldHRpbmd9IHdpZHRoPVwiOTAlXCIgYm9keVN0eWxlPXt7aGVpZ2h0OiAnNzB2aCcgLCBvdmVyZmxvd1kgOiAnc2Nyb2xsJ319IG9uQ2FuY2VsPXsoKT0+c2V0Ym9vayhmYWxzZSl9IGZvb3Rlcj17bnVsbH0+PENhbGVuZGFyIHByb2ZpbGU9e3Byb2ZpbGV9IGxvYz1cInB1YmxpY1wiLz48L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwiRWRpdGV6IHZvdHJlIHByb2ZpbGVcIiBjbGFzc05hbWU9XCJFZGl0TW9kYWxcIiB2aXNpYmxlPXt2aXNpYmxlfSAgYm9keVN0eWxlPXt7aGVpZ2h0OiAnNTB2aCcsIG92ZXJmbG93WSA6ICdzY3JvbGwnfX0gb25DYW5jZWw9eygpPT5zZXR2aXNpYmxlKGZhbHNlKX0gZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtmYWxzZX0ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBsb2FkaW5nPXtsb2FkaW5nfSBzdHlsZT17e2JvcmRlclJhZGl1cyA6JzEwcHgnLCBmb250RmFtaWx5IDonR2xhY2lhbEJvbGQnfX0gIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbsOpICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHshaW1hZ2VMb2FkaW5nICYmKDxFZGl0Qm94IGRhdGE9e2RhdGF9IHNldERhdGE9e3NldERhdGF9IHNldERpcGxvbWVMaXN0PXtzZXREaXBsb21lTGlzdH0gRGlwbG9tZUxpc3Q9e0RpcGxvbWVMaXN0fSBzZXRmaXJlPXtzZXRmaXJlfS8+KX1cclxuICAgICAgICAgICAgICAgIHtpbWFnZUxvYWRpbmcgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHBlcmNlbnRhZ2U9e3BlcmNlbnRhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTmF2IG1lbnUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgPE1lbnUgb25DbGljaz17aGFuZGxlQ2xpY2t9IHNlbGVjdGVkS2V5cz17Y3VycmVudH0gbW9kZT1cImhvcml6b250YWxcIiBzdHlsZT17e21hcmdpblRvcCA6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiQWNjZXVpbFwiIGljb249ezxIb21lSWNvbiAvPn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NldWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwcm9wb3NcIiBpY29uPXs8QWJvdXRJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBwcm9wb3NcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcmlkID09PSBwcm9maWxlLl9pZCAmJiBwcm9maWxlLnR5cGUgPT09IFwiU29jacOpdMOpXCIgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiQ2FsZW5kYXJcIiBpY29uPXs8Q2FsZW5kYXJJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FsZW5kcmllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNZW51Q29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcIkFjY2V1aWxcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZBY2NldWlsIGRhdGU9e2RhdGV9IHByb2ZpbGU9e3Byb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJwcm9wb3NcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZQcm9wb3MgcHJvZmlsZT17cHJvZmlsZX0gbG9jYXRpb249e2xvY2F0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcIkNhbGVuZGFyXCIgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3AgOiAnMzBweCd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgIHByb2ZpbGU9e3Byb2ZpbGV9IGxvYz1cInByb2ZpbGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWVudUZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyaWQgIT09IHByb2ZpbGUuX2lkICYmIHByb2ZpbGUudHlwZSA9PT0gXCJTb2Npw6l0w6lcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaWtlQnV0dG9uIGNoZWNrYm94PXtjaGVja2JveH0gaGFuZGxlTGlrZT17aGFuZGxlTGlrZX0gLz48bGFiZWwgaHRtbEZvcj1cImNoZWNrYm94XCIgY2xhc3NOYW1lPXtjaGVja2JveCA/IFwiYWN0aXZlXCIgOiBcIlwifT5KJ2FpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaGFyZS1hbHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e21hcmdpblJpZ2h0IDonNXB4J319PjwvaT5QYXJ0YWdlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVCb2R5IDsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG52YXIgY29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUQzSFdCX3d5Wmg5VlJ2N2NyUWM3U2k2SVJnT3hRTlJLZ1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJoZXJva3VhcHAtYTQ1YjQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwiaGVyb2t1YXBwLWE0NWI0XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImhlcm9rdWFwcC1hNDViNC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDM3NzYzMTgyNzY5XCIsXHJcbiAgICBhcHBJZDogXCIxOjQzNzc2MzE4Mjc2OTp3ZWI6NGEzYjU1NmI5NTU3NTlhYTBjOTI5MFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTQ3NDIxQ0o1NVdcIlxyXG59O1xyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcblxyXG52YXIgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuZXhwb3J0IHsgc3RvcmFnZSwgZmlyZWJhc2UgYXMgZGVmYXVsdCB9O1xyXG5cclxuXHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2Zvb3Rlci5zY3NzJztcclxuY29uc3QgRm9vdGVyID0gKCkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICDCqSAyMDIwIDZTb2x1dGlvbnMuIFRvdXMgbGVzIGRyb2l0cyBzb250IHLDqXNlcnbDqXMuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIDsiLCJpbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSAnJztcbmNvbnN0IGRlZmF1bHRLZXl3b3JkcyA9ICcnO1xuY29uc3QgZGVmYXVsdE9HVVJMID0gJyc7XG5jb25zdCBkZWZhdWx0T0dJbWFnZSA9ICcnO1xuXG5jb25zdCBIZWFkID0gKHByb3BzKSA9PiAoXG4gIDxOZXh0SGVhZD5cbiAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgIDx0aXRsZT57cHJvcHMudGl0bGUgfHwgXCJcIn08L3RpdGxlPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPG1ldGFcbiAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb259XG4gICAgLz5cbiAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtwcm9wcy5rZXl3b3JkcyB8fCBkZWZhdWx0S2V5d29yZHN9IC8+XG4gICAgPGxpbmtcbiAgICAgIHJlbD1cImljb25cIlxuICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgIGhyZWY9XCIvc3RhdGljL0ljb25zL2ZpcmVfbG9nby5pY29cIlxuICAgIC8+XG4gICAgPGxpbmtcbiAgICAgIHJlbD1cImljb25cIlxuICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgIGhyZWY9XCIvc3RhdGljL0ljb25zL2ZpcmVfbG9nby5pY29cIlxuICAgIC8+XG4gICAgPGxpbmtcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgIC8+XG4gICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL0ljb25zL2ZpcmVfbG9nby5pY29cIiAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICBocmVmPVwiL3N0YXRpYy9JY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgLz5cbiAgICA8bGlua1xuICAgICAgcmVsPVwibWFzay1pY29uXCJcbiAgICAgIGhyZWY9XCIvc3RhdGljL0ljb25zL2ZpcmVfbG9nby5wbmdcIlxuICAgICAgY29sb3I9XCIjMDAwMDAwXCJcbiAgICAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGUgfHwgXCJcIn0gLz5cbiAgICA8bWV0YVxuICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb259XG4gICAgLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17cHJvcHMub2dJbWFnZSB8fCBkZWZhdWx0T0dJbWFnZX0gLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cHJvcHMub2dJbWFnZSB8fCBkZWZhdWx0T0dJbWFnZX0gLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjEyMDBcIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vYTA3NmQwNTM5OS5qc1wiIC8+XG4gIDwvTmV4dEhlYWQ+XG4pO1xuXG5IZWFkLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAga2V5d29yZHM6IHN0cmluZyxcbiAgdXJsOiBzdHJpbmcsXG4gIG9nSW1hZ2U6IHN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZDtcbiIsImltcG9ydCAnLi4vc3R5bGVzL2hlYWRlci5zY3NzJztcclxuaW1wb3J0IHt1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHJvZmlsZUljb24gZnJvbSAnLi9zdmcvcHJvZmlsZS5qcycgO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJy4vc3ZnL3NldHRpbmdzLmpzJyA7XHJcbmltcG9ydCBMb2dvdXRJY29uIGZyb20gJy4vc3ZnL2xvZ291dC5qcycgO1xyXG5pbXBvcnQgTm90aWZCZWxsIGZyb20gJy4vc3ZnL05vdGlmQmVsbCc7XHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBUb2dnbGVJY29uIGZyb20gJy4vc3ZnL1RvZ2dsZUljb24nO1xyXG5cclxuXHJcbmNvbnN0IERyb3Bkb3duSXRlbSA9IChwcm9wcyk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVJdGVtXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYnV0dG9uXCI+e3Byb3BzLmxlZnRpY29ufTwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IERyb3BEb3duID0gKHt1c2VyaWQgLCBjb3VudH0pID0+e1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+e1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9zaWdub3V0Jyx7d2l0aENyZWRlbnRpYWxzIDogdHJ1ZX0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBsZWZ0aWNvbj17PFByb2ZpbGVJY29uLz59PjxhIGhyZWY9e2AvUHJvZmlsZXMvYCt1c2VyaWR9IHN0eWxlPXt7dGV4dERlY29yYXRpb24gOiAnbm9uZSd9fT5Nb24gcHJvZmlsZTwvYT48L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBsZWZ0aWNvbj17PEJhZGdlIGNvdW50PXtjb3VudH0+PE5vdGlmQmVsbCAvPjwvQmFkZ2U+fT48YSBocmVmPXtgL05vdGlmaWNhdGlvbnMvYH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319Pk5vdGlmaWNhdGlvbnM8L2E+PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIHsvKiA8RHJvcGRvd25JdGVtIGxlZnRpY29uPXs8U2V0dGluZ3NJY29uLz59PjxhIGhyZWY9e2AvYWNjb3VudHNldHQvYH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbiA6ICdub25lJ319PlBhcmVtZXRyZXM8L2E+PC9Ecm9wZG93bkl0ZW0+ICovfVxyXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtIGxlZnRpY29uPXs8TG9nb3V0SWNvbi8+fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlNlIGTDqWNvbm5lY3RlcjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBDb21wb25lbmV0ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IEhlYWRlciA9ICh7YWN0aXZlICwgc2V0VXNlcklEfSk9PlxyXG57XHJcbiAgICBjb25zdCBbdXNlcklkICwgc2V0VG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZyAsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbY2hlY2tTdGF0dXMsc2V0Q2hlY2tTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5lZCAsIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGEgLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBjb3VudCA9IGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhIT09IG51bGwgPyBkYXRhLk5vdGlmVmlldyA6ICcnIDtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9wcm9maWxlcy9teXByb2ZpbGUnLHt3aXRoQ3JlZGVudGlhbHMgOiB0cnVlfSlcclxuICAgICAgICAudGhlbihyZXMgPT57ICAgICAgXHJcbiAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEucHJvZmlsZSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoc2V0VXNlcklEICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJJRChyZXMuZGF0YS5wcm9maWxlLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGEucHJvZmlsZS5faWQpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbXSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpPT57XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvQXV0aC9TaWduaW5cIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyX0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5hdlN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGVcIiBvbkNsaWNrPXsoKT0+c2V0Q2hlY2tTdGF0dXMoIWNoZWNrU3RhdHVzKX0+IDxUb2dnbGVJY29uLz4gPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyX0xvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL0ljb25zL0xPR08yMDE3LnBuZ1wiIGhlaWdodD1cIjMwXCIgb25DbGljaz17KCk9PndpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCIvXCIpfSBzdHlsZT17e2N1cnNvciA6ICdwb2ludGVyJ319Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2hlY2tTdGF0dXMgPyBcIkdyaWROYXYgdmlzaWJsZVwiIDogXCJHcmlkTmF2XCIgfT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmU9PVwiYWNjZXVpbFwiP1wiYWN0aXZlXCI6XCJsaW5rXCJ9PjxhIGhyZWY9XCIvXCI+QWNjZXVpbDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZT09XCJwcm9wb3NcIj9cImFjdGl2ZVwiOlwibGlua1wifT48YSBocmVmPVwiL3Byb3Bvc1wiPkEgcHJvcG9zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlPT1cInRlbW9pZ25hZ2VzXCI/XCJhY3RpdmVcIjpcImxpbmtcIn0+PGEgaHJlZj1cIi90ZW1vaWduYWdlc1wiPlRlbW9pZ25hZ2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlPT1cImNvbnRhY3RcIj9cImFjdGl2ZVwiOlwibGlua1wifT48YSBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YWN0aXZlPT1cInF1ZXN0aW9uc1wiP1wiYWN0aXZlXCI6XCJsaW5rXCJ9PjxhIGhyZWY9XCIvcXVlc3Rpb25zXCI+UXVlc3Rpb25zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJfQnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIHVzZXJJZCA9PT0gbnVsbCAmJihcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJIZWFkZXJfc3Vic2NyaWJlXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiUydpbnNjcmlyZVwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL0F1dGgvU2lnblVwXCIpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIkhlYWRlcl9zaWduaW5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTZSBjb25uZWN0ZXJcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgdXNlcklkICE9PSBudWxsICYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVUaHVtYlwiIG9uQ2xpY2s9eygpPT5zZXRPcGVuKCFvcGVuZWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZUltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBjb3VudD17Y291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5Vc3JpbWd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnR5cGUgPT0gXCJTb2Npw6l0w6lcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YS5jb21wYW55bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50eXBlID09IFwiQ2xpZW50XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEubm9tfSB7ZGF0YS5wcmVub219PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wRG93biB1c2VyaWQ9e3VzZXJJZH0gY291bnQ9e2NvdW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgSGVhZGVyIDsiLCJjb25zdCBOb3RpZkJlbGwgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzdmcgIGhlaWdodD1cIjMwcHhcIiB3aWR0aD1cIjMwcHhcIiB2aWV3Qm94PVwiMCAwIDQ3OS42MTkgNDc5LjYxOVwiIGZpbGw9XCJjdXJyZW50Y29sb3JcIj5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8cGF0aCBkPVwiTTQ3NS44MDQsMzM2LjI4NmMtMC41LTIuNy0xLjEtNS41LTItOC4yYy04LjYtMjQtMzMuMi0zOC40LTU4LjMtMzQuMWMtOC4zLDEuMy0xNi4xLTQuNC0xNy40LTEyLjdsLTEyLjYtODAuOCAgICBjLTEwLjUtNjguNS02MC0xMjQuNi0xMjYuNi0xNDMuNGMtNi4xLTM3LjEtNDEtNjIuMi03OC4xLTU2LjJjLTM2LjYsNi02MS43LDQwLjItNTYuNCw3Ni45Yy01Ny40LDM2LjMtODcuOCwxMDMuMy03Ny4xLDE3MC41ICAgIGwxMy42LDg2LjFjMS4yLDguMy00LjQsMTYuMS0xMi43LDE3LjRjLTI1LjIsMy42LTQ0LjIsMjQuOC00NS4xLDUwLjNjLTAuMywyOC4zLDIyLjQsNTEuNCw1MC43LDUxLjdjMC4yLDAsMC40LDAsMC41LDAgICAgYzIuNywwLDUuMy0wLjIsOC0wLjZsNTIuNS04LjNjMTguMywzMi42LDU5LjUsNDQuMyw5Mi4yLDI2YzE3LjItOS43LDI5LjQtMjYuMywzMy4zLTQ1LjdsMTkyLjktMzAuNCAgICBDNDYxLjEwNCwzOTAuMzg2LDQ4MC4yMDQsMzY0LjE4Niw0NzUuODA0LDMzNi4yODZ6IE0xNzMuNzA0LDQ0NS40ODZjLTcuMiwwLTE0LjMtMi4zLTIwLjEtNi42bDQ3LjgtNy41ICAgIEMxOTUuMDA0LDQ0MC4yODYsMTg0LjcwNCw0NDUuNDg2LDE3My43MDQsNDQ1LjQ4NnogTTIxOS43MDQsNTEuMzg2Yy02LjQtMC4yLTEyLjcsMC0xOS4xLDAuNWMtNi43LDAuNi0xMy4zLDEuNy0xOS45LDMuMSAgICBjLTEuNCwwLjMtMi44LDAuNy00LjIsMWMtNS40LDEuMy0xMC42LDIuNy0xNS44LDQuNWMtMC41LDAuMS0xLjEsMC4yLTEuNiwwLjRjMy42LTEyLjksMTQuNC0yMi41LDI3LjYtMjQuNSAgICBjMS44LTAuMywzLjYtMC40LDUuNC0wLjRjMTEuNCwwLjEsMjIuMSw1LjgsMjguNCwxNS40SDIxOS43MDR6XCIvPlxyXG5cdDwvZz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48Zz5cclxuPC9nPlxyXG48L3N2Zz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZkJlbGwgOyIsImNvbnN0IFRvZ2dsZUljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgaGVpZ2h0PVwiMzBweFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgIHdpZHRoPVwiMzBweFwiXHJcbiAgICAgIGZpbGw9XCIjMWU2OGIyXCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIm00NjQuODgzIDY0LjI2N2gtNDE3Ljc2NmMtMjUuOTggMC00Ny4xMTcgMjEuMTM2LTQ3LjExNyA0Ny4xNDkgMCAyNS45OCAyMS4xMzcgNDcuMTE3IDQ3LjExNyA0Ny4xMTdoNDE3Ljc2NmMyNS45OCAwIDQ3LjExNy0yMS4xMzcgNDcuMTE3LTQ3LjExNyAwLTI2LjAxMy0yMS4xMzctNDcuMTQ5LTQ3LjExNy00Ny4xNDl6XCIgLz5cclxuICAgICAgPHBhdGggZD1cIm00NjQuODgzIDIwOC44NjdoLTQxNy43NjZjLTI1Ljk4IDAtNDcuMTE3IDIxLjEzNi00Ny4xMTcgNDcuMTQ5IDAgMjUuOTggMjEuMTM3IDQ3LjExNyA0Ny4xMTcgNDcuMTE3aDQxNy43NjZjMjUuOTggMCA0Ny4xMTctMjEuMTM3IDQ3LjExNy00Ny4xMTcgMC0yNi4wMTMtMjEuMTM3LTQ3LjE0OS00Ny4xMTctNDcuMTQ5elwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJtNDY0Ljg4MyAzNTMuNDY3aC00MTcuNzY2Yy0yNS45OCAwLTQ3LjExNyAyMS4xMzctNDcuMTE3IDQ3LjE0OSAwIDI1Ljk4IDIxLjEzNyA0Ny4xMTcgNDcuMTE3IDQ3LjExN2g0MTcuNzY2YzI1Ljk4IDAgNDcuMTE3LTIxLjEzNyA0Ny4xMTctNDcuMTE3IDAtMjYuMDEyLTIxLjEzNy00Ny4xNDktNDcuMTE3LTQ3LjE0OXpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlSWNvbjtcclxuIiwiY29uc3QgTG9nb3V0ID0gKCk9PntcclxuXHRyZXR1cm4oXHJcblx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiID5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8Zz5cclxuXHRcdFx0PHBhdGggZD1cIk01MTAuMzcxLDIyNi41MTNjLTEuMDg4LTIuNjAzLTIuNjQ1LTQuOTcxLTQuNjI5LTYuOTU1bC02My45NzktNjMuOTc5Yy04LjM0MS04LjMyLTIxLjgyNC04LjMyLTMwLjE2NSwwICAgICBjLTguMzQxLDguMzQxLTguMzQxLDIxLjg0NSwwLDMwLjE2NWwyNy41ODQsMjcuNTg0SDMyMC4wMTNjLTExLjc5NywwLTIxLjMzMyw5LjU1Ny0yMS4zMzMsMjEuMzMzczkuNTM2LDIxLjMzMywyMS4zMzMsMjEuMzMzICAgICBoMTE5LjE2OGwtMjcuNTg0LDI3LjU4NGMtOC4zNDEsOC4zNDEtOC4zNDEsMjEuODQ1LDAsMzAuMTY1YzQuMTYsNC4xODEsOS42MjEsNi4yNTEsMTUuMDgzLDYuMjUxczEwLjkyMy0yLjA2OSwxNS4wODMtNi4yNTEgICAgIGw2My45NzktNjMuOTc5YzEuOTg0LTEuOTYzLDMuNTQxLTQuMzMxLDQuNjI5LTYuOTU1QzUxMi41MjUsMjM3LjYwNiw1MTIuNTI1LDIzMS43MTgsNTEwLjM3MSwyMjYuNTEzelwiLz5cclxuXHRcdFx0PHBhdGggZD1cIk0zNjIuNjgsMjk4LjY2N2MtMTEuNzk3LDAtMjEuMzMzLDkuNTU3LTIxLjMzMywyMS4zMzN2MTA2LjY2N2gtODUuMzMzVjg1LjMzM2MwLTkuNDA4LTYuMTg3LTE3LjcyOC0xNS4yMTEtMjAuNDM3ICAgICBsLTc0LjA5MS0yMi4yMjloMTc0LjYzNXYxMDYuNjY3YzAsMTEuNzc2LDkuNTM2LDIxLjMzMywyMS4zMzMsMjEuMzMzczIxLjMzMy05LjU1NywyMS4zMzMtMjEuMzMzdi0xMjggICAgIEMzODQuMDEzLDkuNTU3LDM3NC40NzcsMCwzNjIuNjgsMEgyMS4zNDdjLTAuNzY4LDAtMS40NTEsMC4zMi0yLjE5NywwLjQwNWMtMS4wMDMsMC4xMDctMS45MiwwLjI3Ny0yLjg4LDAuNTEyICAgICBjLTIuMjQsMC41NzYtNC4yNjcsMS40NTEtNi4xNjUsMi42NDVjLTAuNDY5LDAuMjk5LTEuMDQ1LDAuMzItMS40OTMsMC42NjFDOC40NCw0LjM1Miw4LjM3Niw0LjU4Nyw4LjIwNSw0LjcxNSAgICAgQzUuODgsNi41NDksMy45MzksOC43ODksMi41MzEsMTEuNDU2Yy0wLjI5OSwwLjU3Ni0wLjM2MywxLjE5NS0wLjU5NywxLjc5MmMtMC42ODMsMS42MjEtMS40MjksMy4yLTEuNjg1LDQuOTkyICAgICBjLTAuMTA3LDAuNjQsMC4wODUsMS4yMzcsMC4wNjQsMS44NTZjLTAuMDIxLDAuNDI3LTAuMjk5LDAuODExLTAuMjk5LDEuMjM3VjQ0OGMwLDEwLjE3Niw3LjE4OSwxOC45MjMsMTcuMTUyLDIwLjkwNyAgICAgbDIxMy4zMzMsNDIuNjY3YzEuMzg3LDAuMjk5LDIuNzk1LDAuNDI3LDQuMTgxLDAuNDI3YzQuODg1LDAsOS42ODUtMS42ODUsMTMuNTI1LTQuODQzYzQuOTI4LTQuMDUzLDcuODA4LTEwLjA5MSw3LjgwOC0xNi40OTEgICAgIHYtMjEuMzMzSDM2Mi42OGMxMS43OTcsMCwyMS4zMzMtOS41NTcsMjEuMzMzLTIxLjMzM1YzMjBDMzg0LjAxMywzMDguMjI0LDM3NC40NzcsMjk4LjY2NywzNjIuNjgsMjk4LjY2N3pcIi8+XHJcblx0XHQ8L2c+XHJcblx0PC9nPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPlxyXG5cdClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQgOyIsImNvbnN0IFByb2ZpbGUgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG48c3ZnIHZpZXdCb3g9XCIwIDAgNDE2IDQxNlwiIGFyaWEtaGlkZGVuID0gXCJ0cnVlXCIgPlxyXG4gICAgPGc+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIwOFwiIGN5PVwiOTZcIiByPVwiOTZcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM5NC40LDI5MS44NzJjLTEwOC05MC42NTYtMjY0LjgzMi05MC42NTYtMzcyLjgzMiwwQzE4LjA0OCwyOTQuODQ4LDE2LDI5OS4yLDE2LDMwMy44NGMwLDE1LjQ1NiwwLDUyLjgzMiwwLDgwLjE5MiAgICAgQzE2LDQwMS42OTYsMzAuMzM2LDQxNiw0OCw0MTZoMzIwYzE3LjY2NCwwLDMyLTE0LjMwNCwzMi0zMS45Njh2LTczLjkyQzQwMCwyOTkuMiwzOTcuOTUyLDI5NC44NDgsMzk0LjQsMjkxLjg3MnpcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbiAgICA8Zz5cclxuICAgIDwvZz5cclxuICAgIDxnPlxyXG4gICAgPC9nPlxyXG4gICAgPGc+XHJcbiAgICA8L2c+XHJcbjwvc3ZnPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSA7IiwiY29uc3QgU2V0dGluZ3MgPSAoKT0+e1xyXG5cdHJldHVybihcclxuPHN2ZyB2aWV3Qm94PVwiMCAwIDQ5MC42NjcgNDkwLjY2N1wiID5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8cGF0aCBkPVwiTTQ4OC42ODMsMjE0LjU5MmMtMS42LTEyLjQzNy04LjY0LTIzLjI1My0xOS4zMDctMjkuNjk2Yy0xMC40NzUtNi4zMTUtMjMuMTI1LTcuNDg4LTM0LjgzNy0zLjExNSAgICBjLTkuMzAxLDMuNDU2LTE5LjcxMi0xLjMyMy0yMy45MzYtMTAuNzUyYy00Ljk3MS0xMS4xMzYtMTEuMTE1LTIxLjgwMy0xOC4yMTktMzEuNzAxYy02LjE2NS04LjU3Ni01LjAxMy0xOS44NCwyLjY0NS0yNi4xNTUgICAgYzkuNDkzLTcuNzg3LDE0Ljc4NC0xOS4zMDcsMTQuNTQ5LTMxLjU5NWMtMC4yNTYtMTIuNDgtNi4xMjMtMjQtMTYuMTQ5LTMxLjU3M2MtMTYuMjk5LTEyLjM1Mi0zNC4wOTEtMjIuNjM1LTUyLjg4NS0zMC41NDkgICAgYy0xMS42MjctNC44ODUtMjQuNTk3LTQuMjQ1LTM1LjU0MSwxLjc5MmMtMTAuNzUyLDUuOTA5LTE4LjA5MSwxNi4yNTYtMjAuMDk2LDI4LjM3M2MtMS42NDMsOS44NTYtMTAuOTAxLDE2LjIzNS0yMS40NCwxNS4zNiAgICBjLTExLjkyNS0xLjI1OS0yNC4zNjMtMS4yNTktMzYuMzA5LDBjLTEwLjY4OCwwLjg3NS0xOS43OTctNS40ODMtMjEuNDE5LTE1LjMzOWMtMi4wMDUtMTIuMTM5LTkuMzIzLTIyLjQ4NS0yMC4wNzUtMjguMzk1ICAgIGMtMTAuOTg3LTYuMDM3LTIzLjkxNS02LjY5OS0zNS41NjMtMS44MTNjLTE4LjgxNiw3LjkzNi0zNi42MDgsMTguMjE5LTUyLjg4NSwzMC41NDljLTEwLjAwNSw3LjU5NS0xNS44OTMsMTkuMDkzLTE2LjEyOCwzMS41NzMgICAgYy0wLjI1NiwxMi4yODgsNS4wNTYsMjMuODI5LDE0LjU0OSwzMS42NTljNy42OCw2LjMxNSw4LjgxMSwxNy41MzYsMi42NDUsMjYuMTMzYy03LjEyNSw5Ljk0MS0xMy4yNjksMjAuNTg3LTE4LjIxOSwzMS42OCAgICBjLTQuMjQ1LDkuNDcyLTE0Ljc2MywxNC4yMDgtMjQuMTQ5LDEwLjY2N2MtMTEuNDc3LTQuMjg4LTI0LjA4NS0zLjExNS0zNC42MDMsMy4yYy0xMC42NjcsNi40MjEtMTcuNzI4LDE3LjIzNy0xOS4zMjgsMjkuNjc1ICAgIEMwLjY2MSwyMjQuNzg5LDAsMjM1LjEzNiwwLDI0NS4zMzNzMC42NjEsMjAuNTQ0LDEuOTg0LDMwLjc0MWMxLjYsMTIuNDM3LDguNjQsMjMuMjc1LDE5LjMwNywyOS42OTYgICAgYzEwLjUxNyw2LjMzNiwyMy4xNDcsNy41NTIsMzQuODU5LDMuMTE1YzkuMTMxLTMuMzkyLDE5LjY2OSwxLjI4LDIzLjkxNSwxMC43NTJjNC45NDksMTEuMDkzLDExLjA5MywyMS43NiwxOC4yMTksMzEuNzAxICAgIGM2LjE2NSw4LjU3Niw1LjAxMywxOS44MTktMi42NjcsMjYuMTU1Yy05LjQ3Miw3Ljc4Ny0xNC43NjMsMTkuMzA3LTE0LjUyOCwzMS41OTVjMC4yNTYsMTIuNDgsNi4xMjMsMjQsMTYuMTI4LDMxLjU5NSAgICBjMTYuMjU2LDEyLjMwOSwzNC4wNDgsMjIuNTkyLDUyLjg4NSwzMC41NDljNS4xNjMsMi4xNzYsMTAuNTgxLDMuMjQzLDE1Ljk3OSwzLjI0M2M2Ljc2MywwLDEzLjQ4My0xLjY4NSwxOS41NjMtNS4wNTYgICAgYzEwLjc1Mi01LjkwOSwxOC4wOTEtMTYuMjc3LDIwLjA5Ni0yOC4zNzNjMS42NDMtOS44NTYsMTEuMDA4LTE2LjQwNSwyMS40NC0xNS4zMzljMTEuOTI1LDEuMjU5LDI0LjM2MywxLjI1OSwzNi4zMDksMCAgICBjMTAuNjAzLTEuMDQ1LDE5Ljc3Niw1LjQ4MywyMS40MTksMTUuMzM5YzIuMDI3LDEyLjExNyw5LjM0NCwyMi40NjQsMjAuMDk2LDI4LjM3M2MxMC45ODcsNi4wNTksMjMuOTE1LDYuNjc3LDM1LjU0MSwxLjgxMyAgICBjMTguODE2LTcuOTM2LDM2LjYwOC0xOC4yMTksNTIuODg1LTMwLjU0OWMxMC4wMDUtNy41OTUsMTUuODcyLTE5LjExNSwxNi4xMjgtMzEuNTk1YzAuMjM1LTEyLjI4OC01LjA3Ny0yMy44MDgtMTQuNTkyLTMxLjYxNiAgICBjLTcuNjU5LTYuMzE1LTguNzg5LTE3LjUzNi0yLjYyNC0yNi4xMzNjNy4xMjUtOS44OTksMTMuMjQ4LTIwLjU4NywxOC4yMTktMzEuNjhjNC4yNjctOS40OTMsMTQuODQ4LTE0LjE0NCwyMy45MzYtMTAuNzczICAgIGwwLjIzNSwwLjA4NWMxMS41Miw0LjM1MiwyNC4xNDksMy4xMzYsMzQuNjI0LTMuMTc5YzEwLjY4OC02LjQ0MywxNy43MDctMTcuMjU5LDE5LjMwNy0yOS42NzUgICAgYzEuMzQ0LTEwLjE1NSwyLjAwNS0yMC41MDEsMi4wMDUtMzAuNzg0UzQ5MC4wMDUsMjI0LjcwNCw0ODguNjgzLDIxNC41OTJ6IE0yNDUuMzMzLDM0MS4zMzNjLTUyLjkyOCwwLTk2LTQzLjA3Mi05Ni05NiAgICBzNDMuMDcyLTk2LDk2LTk2YzUyLjkyOCwwLDk2LDQzLjA3Miw5Niw5NlMyOTguMjYxLDM0MS4zMzMsMjQ1LjMzMywzNDEuMzMzelwiLz5cclxuXHQ8L2c+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPC9zdmc+XHJcblx0KVxyXG5cdFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzIDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuXG5jb25zdCBzdGF0dXNDb2RlczogeyBbY29kZTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXG4gIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG59XG5cbmV4cG9ydCB0eXBlIEVycm9yUHJvcHMgPSB7XG4gIHN0YXR1c0NvZGU6IG51bWJlclxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHtcbiAgcmVzLFxuICBlcnIsXG59OiBOZXh0UGFnZUNvbnRleHQpOiBQcm9taXNlPEVycm9yUHJvcHM+IHwgRXJyb3JQcm9wcyB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPVxuICAgIHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUhIDogNDA0XG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfVxufVxuXG4vKipcbiAqIGBFcnJvcmAgY29tcG9uZW50IHVzZWQgZm9yIGhhbmRsaW5nIGVycm9ycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3I8UCA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQICYgRXJyb3JQcm9wcz4ge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJ1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wc1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aXRsZSA9XG4gICAgICB0aGlzLnByb3BzLnRpdGxlIHx8XG4gICAgICBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fFxuICAgICAgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lcnJvcn0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIHtzdGF0dXNDb2RlfToge3RpdGxlfVxuICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnYm9keSB7IG1hcmdpbjogMCB9JyB9fSAvPlxuICAgICAgICAgIHtzdGF0dXNDb2RlID8gPGgxIHN0eWxlPXtzdHlsZXMuaDF9PntzdGF0dXNDb2RlfTwvaDE+IDogbnVsbH1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZGVzY30+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5oMn0+e3RpdGxlfS48L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzdHlsZXM6IHsgW2s6IHN0cmluZ106IFJlYWN0LkNTU1Byb3BlcnRpZXMgfSA9IHtcbiAgZXJyb3I6IHtcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBmb250RmFtaWx5OlxuICAgICAgJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcblxuICBkZXNjOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgIGhlaWdodDogJzQ5cHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICB9LFxuXG4gIGgxOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLC4zKScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgcGFkZGluZzogJzEwcHggMjNweCAxMHB4IDAnLFxuICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICB9LFxuXG4gIGgyOiB7XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0sXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZXJyb3InKVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IHt1c2VTdGF0ZSAsIHVzZUVmZmVjdCwgZm9yd2FyZFJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NwaW4gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFB1YmxpY1Byb2ZpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlX0NvbXBvbmVudHMvcHVibGljUHJvZmlsZSc7XHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5jb25zdCBQcm9maWxlID0gKHByb3BzKT0+e1xyXG5cclxuICAgIGNvbnN0IFt1c2VyaWQsc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChwcm9wcy5zdGF0dXNDb2RlID09PSA0MDEpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBcIi9BdXRoL1NpZ25pbi8/cmVmPXRva2VuZXhwaXJlZCZsb2NhdGlvbj1cIit3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UobG9jYXRpb24pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5zdGF0dXNDb2RlICE9PSA0MDQgPyBzZXREYXRhKHByb3BzLmRhdGEuQXV0aElkLnVzZXJJZCkgOiBcIlwiO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgaWYgKHByb3BzLnN0YXR1c0NvZGUgPT09IDQwNCkge1xyXG4gICAgICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9e3Byb3BzLnN0YXR1c0NvZGV9IC8+XHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZyApIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiTG9hZGluZ1wiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbiA6ICdmaXhlZCcsdG9wIDogJzUwJScsbGVmdDonNTAlJyxtYXJnaW5Ub3AgOictNTBweCcsbWFyZ2luTGVmdDonLTUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW4gc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudEluc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEgPT09IHVuZGVmaW5lZCA/IDxIZWFkIHRpdGxlPVwiTG9hZGluZ1wiLz4gOicnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wIDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRhdGEgIT09IHVuZGVmaW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFB1YmxpY1Byb2ZpbGUgcHJvZmlsZT17cHJvcHMuZGF0YS5wcm9maWxlfSB1c2VyaWQ9e3VzZXJpZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICkgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llIDtcclxuICAgICAgICBjb25zdCBiYXNlVXJsID0gY3R4LnJlcSA/IGAke2N0eC5yZXEucHJvdG9jb2x9Oi8vJHtjdHgucmVxLmdldCgnSG9zdCcpfWAgOiAnJztcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNlVXJsK1wiL2FwaS9wcm9maWxlcy9wcm9maWxlP3VzZXJpZD1cIitjdHgucXVlcnkuX2lkIDtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCggdXJsLHtoZWFkZXJzIDoge2Nvb2tpZX19KTsgXHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXM7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBzdGF0dXNDb2RlIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgcHJvcHMgOiB7ZGF0YSB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBjdHgucmVzLnN0YXR1c0NvZGUgPSBlcnJvcjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICBwcm9wcyA6IHtzdGF0dXNDb2RlIDogZXJyb3J9XHJcbiAgICAgICAgfTtcclxuICAgIH0gICBcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21vZGFsL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1tYXAtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdlb2NvZGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==