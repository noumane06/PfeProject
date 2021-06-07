webpackHotUpdate_N_E("pages/Profiles/[_id]",{

/***/ "./components/Profile_Components/map/Map.js":
/*!**************************************************!*\
  !*** ./components/Profile_Components/map/Map.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/dist/index.modern.js");
/* harmony import */ var _pages_Profiles_Sass_map_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/Profiles/Sass/map.scss */ "./pages/Profiles/Sass/map.scss");
/* harmony import */ var _pages_Profiles_Sass_map_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_Profiles_Sass_map_scss__WEBPACK_IMPORTED_MODULE_2__);
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Marker = function Marker(props) {
  var color = props.color,
      name = props.name,
      id = props.id;
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

_c = Marker;

var Map = function Map(_ref) {
  _s();

  var location = _ref.location,
      zoomLevel = _ref.zoomLevel;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// console.log(process.env.REACT_APP_MAP_KEY);
  }, []);
  return __jsx("div", {
    className: "map"
  }, __jsx("div", {
    className: "google-map"
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

_s(Map, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c2 = Map;
/* harmony default export */ __webpack_exports__["default"] = (Map);

var _c, _c2;

$RefreshReg$(_c, "Marker");
$RefreshReg$(_c2, "Map");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Profile_Components/publicProfile.js":
/*!********************************************************!*\
  !*** ./components/Profile_Components/publicProfile.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/ant-picker.scss */ "./styles/ant-picker.scss");
/* harmony import */ var _styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ant_picker_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase */ "./components/firebase.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../head */ "./components/head.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _Svg_HomeSvg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Svg/HomeSvg */ "./components/Profile_Components/Svg/HomeSvg.js");
/* harmony import */ var _Svg_AboutSvg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Svg/AboutSvg */ "./components/Profile_Components/Svg/AboutSvg.js");
/* harmony import */ var _Svg_CalendarSvg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Svg/CalendarSvg */ "./components/Profile_Components/Svg/CalendarSvg.js");
/* harmony import */ var _pages_Profiles_Sass_fullProfile_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pages/Profiles/Sass/fullProfile.scss */ "./pages/Profiles/Sass/fullProfile.scss");
/* harmony import */ var _pages_Profiles_Sass_fullProfile_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_pages_Profiles_Sass_fullProfile_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../LikeButton */ "./components/LikeButton.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-geocode */ "./node_modules/react-geocode/lib/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/modal/Modal */ "./node_modules/antd/lib/modal/Modal.js");
/* harmony import */ var antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_EditBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/EditBox */ "./components/Profile_Components/Components/EditBox.jsx");
/* harmony import */ var _Components_BookMeeting__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/BookMeeting */ "./components/Profile_Components/Components/BookMeeting.jsx");
/* harmony import */ var _Components_NavAcceuil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/NavAcceuil */ "./components/Profile_Components/Components/NavAcceuil.jsx");
/* harmony import */ var _Components_NavPropos__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/NavPropos */ "./components/Profile_Components/Components/NavPropos.jsx");
/* harmony import */ var _Components_ProgressBar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/ProgressBar */ "./components/Profile_Components/Components/ProgressBar.jsx");
/* harmony import */ var _Components_ProfileHead__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/ProfileHead */ "./components/Profile_Components/Components/ProfileHead.jsx");





var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
// Dependencies ------------------------




 // Components -------------------------















 // -------------------------------------

function isEmpty(obj, type) {
  if (type === "Société") {
    for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

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


var ProfileBody = function ProfileBody(_ref) {
  _s();

  var profile = _ref.profile,
      userid = _ref.userid;
  // States ---------------------------------------
  var name = profile.companyname === "" || profile.companyname == undefined ? profile.nom + " " + profile.prenom : profile.companyname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      imageLoading = _useState[0],
      setloadimage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('Acceuil'),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(profile.stars.includes(userid)),
      checkbox = _useState3[0],
      setCheck = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      bookmetting = _useState4[0],
      setbook = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(profile),
      data = _useState5[0],
      setData = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      location = _useState6[0],
      setLocation = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      filefirebase = _useState7[0],
      setfire = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      percentage = _useState8[0],
      setPrecentage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visible = _useState9[0],
      setvisible = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState10[0],
      setloading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(profile.diplome),
      DiplomeList = _useState11[0],
      setDiplomeList = _useState11[1];

  var date = new Date(); // Icons -----------------------------------------

  var HomeIcon = function HomeIcon(props) {
    return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      component: _Svg_HomeSvg__WEBPACK_IMPORTED_MODULE_11__["default"]
    }, props));
  };

  var AboutIcon = function AboutIcon(props) {
    return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      component: _Svg_AboutSvg__WEBPACK_IMPORTED_MODULE_12__["default"]
    }, props));
  };

  var CalendarIcon = function CalendarIcon(props) {
    return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      component: _Svg_CalendarSvg__WEBPACK_IMPORTED_MODULE_13__["default"]
    }, props));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var adr = profile.addresse + " , " + profile.city;
    react_geocode__WEBPACK_IMPORTED_MODULE_16___default.a.setApiKey("AIzaSyBekxJpV7M_HcWjpBkpA2WwfyHOrYQfGV4");
    react_geocode__WEBPACK_IMPORTED_MODULE_16___default.a.fromAddress(adr).then(function (response) {
      var _response$results$0$g = response.results[0].geometry.location,
          lat = _response$results$0$g.lat,
          lng = _response$results$0$g.lng;
      var loc = {
        address: profile.addresse,
        lat: lat,
        lng: lng
      };
      setLocation(loc);
    }, function (error) {
      console.error(error);
    });
  }, []); // Firebase url upload function 

  var firebaseUrl = function firebaseUrl(file) {
    return new Promise(function (resolve, reject) {
      var currentImageName = "firebase-image-" + Date.now();
      var uploadImage = _firebase__WEBPACK_IMPORTED_MODULE_8__["storage"].ref("images/".concat(currentImageName)).put(file);
      uploadImage.on('state_changed', function (snapshot) {
        var per = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        setPrecentage(per);
      }, function (error) {
        reject(error);
      }, function () {
        _firebase__WEBPACK_IMPORTED_MODULE_8__["storage"].ref('images').child(currentImageName).getDownloadURL().then(function (url) {
          var imageData = [url, currentImageName];
          resolve(imageData);
        });
      });
    });
  }; // Handlers -------------------------------------


  var handleLike = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var stars, Url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              stars = profile.stars;

              if (checkbox) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return stars.push(userid);

            case 4:
              _context.next = 8;
              break;

            case 6:
              _context.next = 8;
              return stars.splice(stars.indexOf(userid), 1);

            case 8:
              setCheck(!checkbox);
              Url = '/api/profiles/like?userid=' + profile._id;
              axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(Url, {
                "stars": stars
              }, {
                withCredentials: true
              }).then(function (res) {})["catch"](function (err) {
                return console.log(err);
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLike() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleClick = function handleClick(e) {
    setCurrent(e.key);
  };

  var handleBack = function handleBack() {
    window.location.assign("/Search?companyname=".concat(profile.companyname, "&domaine=&city=&page=1"));
  };

  var handleEdit = function handleEdit() {
    setvisible(true);
  };

  var handleSave = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var OldData, imgData, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              OldData = data;
              OldData["diplome"] = DiplomeList;
              setData(OldData);

              if (!isEmpty(data, profile.type)) {
                _context2.next = 7;
                break;
              }

              antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("Un ou plusieurs champs sont vides");
              _context2.next = 16;
              break;

            case 7:
              setloading(true);

              if (!(filefirebase !== null)) {
                _context2.next = 14;
                break;
              }

              setloadimage(true);
              _context2.next = 12;
              return firebaseUrl(filefirebase);

            case 12:
              imgData = _context2.sent;
              setData(data.Usrimg = imgData[0]);

            case 14:
              url = "/api/profiles/update?userid=" + userid;
              axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, data, {
                withCredentials: true
              }).then(function (response) {
                if (response.status === 200) {
                  setloading(false);
                  setvisible(false);
                  antd__WEBPACK_IMPORTED_MODULE_5__["message"].success("Mise à jour réussie");
                  setTimeout(function () {
                    window.location.reload();
                  }, 1000);
                } else {
                  antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("Une erreur s'est produite, veuillez réessayer plus tard");
                }
              })["catch"](function (err) {
                antd__WEBPACK_IMPORTED_MODULE_5__["message"].error("Une erreur s'est produite, veuillez réessayer plus tard");
                console.log(err);
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSave() {
      return _ref3.apply(this, arguments);
    };
  }(); // ----------------------- Returner ----------------------------------------


  return __jsx("div", {
    className: "Profile"
  }, __jsx(_head__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: name + " | 6Solutions"
  }), __jsx("div", {
    className: "ButtonContainer",
    onClick: handleBack
  }, __jsx("i", {
    className: "fa fa-arrow-left icon"
  }), __jsx("span", {
    className: "backButton"
  }, "Retour")), __jsx(_Components_ProfileHead__WEBPACK_IMPORTED_MODULE_23__["default"], {
    profile: profile,
    handleEdit: handleEdit,
    setbook: setbook,
    userid: userid
  }), __jsx("div", {
    className: "ProfileBody"
  }, __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_17___default.a, {
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
    onCancel: function onCancel() {
      return setbook(false);
    },
    footer: null
  }, __jsx(_Components_BookMeeting__WEBPACK_IMPORTED_MODULE_19__["default"], {
    profile: profile,
    loc: "public"
  })), __jsx(antd_lib_modal_Modal__WEBPACK_IMPORTED_MODULE_17___default.a, {
    title: "Editez votre profile",
    className: "EditModal",
    visible: visible,
    bodyStyle: {
      height: '50vh',
      overflowY: 'scroll'
    },
    onCancel: function onCancel() {
      return setvisible(false);
    },
    footer: [__jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
  }, !imageLoading && __jsx(_Components_EditBox__WEBPACK_IMPORTED_MODULE_18__["default"], {
    data: data,
    setData: setData,
    setDiplomeList: setDiplomeList,
    DiplomeList: DiplomeList,
    setfire: setfire
  }), imageLoading && __jsx(_Components_ProgressBar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    percentage: percentage
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    onClick: handleClick,
    selectedKeys: current,
    mode: "horizontal",
    style: {
      marginTop: '3%'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    key: "Acceuil",
    icon: __jsx(HomeIcon, null)
  }, "Acceuil"), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    key: "propos",
    icon: __jsx(AboutIcon, null)
  }, "A propos"), userid === profile._id && profile.type === "Société" && __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    key: "Calendar",
    icon: __jsx(CalendarIcon, null)
  }, "Calendrier")), __jsx("div", {
    className: "MenuContent"
  }, current === "Acceuil" && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_Components_NavAcceuil__WEBPACK_IMPORTED_MODULE_20__["default"], {
    date: date,
    profile: profile
  })), current === "propos" && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_Components_NavPropos__WEBPACK_IMPORTED_MODULE_21__["default"], {
    profile: profile,
    location: location
  })), current === "Calendar" && __jsx("div", {
    style: {
      marginTop: '30px'
    }
  }, __jsx(_Components_BookMeeting__WEBPACK_IMPORTED_MODULE_19__["default"], {
    profile: profile,
    loc: "profile"
  }))), __jsx("div", {
    className: "MenuFooter"
  }, userid !== profile._id && profile.type === "Société" && __jsx("div", {
    className: "like"
  }, __jsx(_LikeButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
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

_s(ProfileBody, "+lA/HtO4AgHIe/QpqlX+PKbsVSU=");

_c = ProfileBody;
/* harmony default export */ __webpack_exports__["default"] = (ProfileBody);

var _c;

$RefreshReg$(_c, "ProfileBody");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlX0NvbXBvbmVudHMvbWFwL01hcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlX0NvbXBvbmVudHMvcHVibGljUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJNYXJrZXIiLCJwcm9wcyIsImNvbG9yIiwibmFtZSIsImlkIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwiTWFwIiwibG9jYXRpb24iLCJ6b29tTGV2ZWwiLCJ1c2VFZmZlY3QiLCJrZXkiLCJwcm9jZXNzIiwiUkVBQ1RfQVBQX01BUF9LRVkiLCJsYXQiLCJsbmciLCJhZGRyZXNzIiwiaXNFbXB0eSIsIm9iaiIsInR5cGUiLCJPYmplY3QiLCJlbnRyaWVzIiwidmFsdWUiLCJQcm9maWxlQm9keSIsInByb2ZpbGUiLCJ1c2VyaWQiLCJjb21wYW55bmFtZSIsInVuZGVmaW5lZCIsIm5vbSIsInByZW5vbSIsInVzZVN0YXRlIiwiaW1hZ2VMb2FkaW5nIiwic2V0bG9hZGltYWdlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzdGFycyIsImluY2x1ZGVzIiwiY2hlY2tib3giLCJzZXRDaGVjayIsImJvb2ttZXR0aW5nIiwic2V0Ym9vayIsImRhdGEiLCJzZXREYXRhIiwic2V0TG9jYXRpb24iLCJmaWxlZmlyZWJhc2UiLCJzZXRmaXJlIiwicGVyY2VudGFnZSIsInNldFByZWNlbnRhZ2UiLCJ2aXNpYmxlIiwic2V0dmlzaWJsZSIsImxvYWRpbmciLCJzZXRsb2FkaW5nIiwiZGlwbG9tZSIsIkRpcGxvbWVMaXN0Iiwic2V0RGlwbG9tZUxpc3QiLCJkYXRlIiwiRGF0ZSIsIkhvbWVJY29uIiwiSG9tZVN2ZyIsIkFib3V0SWNvbiIsIkFib3V0U3ZnIiwiQ2FsZW5kYXJJY29uIiwiQ2FsZW5kYXJTdmciLCJhZHIiLCJhZGRyZXNzZSIsImNpdHkiLCJHZW9jb2RlIiwic2V0QXBpS2V5IiwiZnJvbUFkZHJlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2MiLCJlcnJvciIsImNvbnNvbGUiLCJmaXJlYmFzZVVybCIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImN1cnJlbnRJbWFnZU5hbWUiLCJub3ciLCJ1cGxvYWRJbWFnZSIsInN0b3JhZ2UiLCJyZWYiLCJwdXQiLCJvbiIsInNuYXBzaG90IiwicGVyIiwiTWF0aCIsImZsb29yIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJjaGlsZCIsImdldERvd25sb2FkVVJMIiwidXJsIiwiaW1hZ2VEYXRhIiwiaGFuZGxlTGlrZSIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwiVXJsIiwiX2lkIiwiYXhpb3MiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwicmVzIiwiZXJyIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJlIiwiaGFuZGxlQmFjayIsIndpbmRvdyIsImFzc2lnbiIsImhhbmRsZUVkaXQiLCJoYW5kbGVTYXZlIiwiT2xkRGF0YSIsIm1lc3NhZ2UiLCJpbWdEYXRhIiwiVXNyaW1nIiwic3RhdHVzIiwic3VjY2VzcyIsInNldFRpbWVvdXQiLCJyZWxvYWQiLCJ0b3AiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJib3JkZXJSYWRpdXMiLCJmb250RmFtaWx5IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7O0FBS0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsS0FEYyxHQUNNRCxLQUROLENBQ2RDLEtBRGM7QUFBQSxNQUNQQyxJQURPLEdBQ01GLEtBRE4sQ0FDUEUsSUFETztBQUFBLE1BQ0RDLEVBREMsR0FDTUgsS0FETixDQUNERyxFQURDO0FBRXRCLFNBQ0ksbUJBQ0E7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFSCxL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QUNJLE1BQUMsK0RBQUQ7QUFBWSxRQUFJLEVBQUVzQixJQUFsQjtBQUF3QixXQUFPLEVBQUUvQjtBQUFqQyxJQURKLENBRlIsRUFNS1MsT0FBTyxLQUFLLFFBQVosSUFDRyxtRUFDSSxNQUFDLDhEQUFEO0FBQVcsV0FBTyxFQUFFVCxPQUFwQjtBQUE2QixZQUFRLEVBQUVoQjtBQUF2QyxJQURKLENBUFIsRUFXS3lCLE9BQU8sS0FBSyxVQUFaLElBQ0c7QUFBSyxTQUFLLEVBQUU7QUFBQ2lHLGVBQVMsRUFBRztBQUFiO0FBQVosS0FDSSxNQUFDLGdFQUFEO0FBQVcsV0FBTyxFQUFFMUcsT0FBcEI7QUFBNkIsT0FBRyxFQUFDO0FBQWpDLElBREosQ0FaUixDQTdCSixFQThDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0tDLE1BQU0sS0FBS0QsT0FBTyxDQUFDK0UsR0FBbkIsSUFBMEIvRSxPQUFPLENBQUNMLElBQVIsS0FBaUIsU0FBM0MsSUFDRztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0EsTUFBQyxvREFBRDtBQUFZLFlBQVEsRUFBRWtCLFFBQXRCO0FBQWdDLGNBQVUsRUFBRTZEO0FBQTVDLElBREEsRUFDMEQ7QUFBTyxXQUFPLEVBQUMsVUFBZjtBQUEwQixhQUFTLEVBQUU3RCxRQUFRLEdBQUcsUUFBSCxHQUFjO0FBQTNELGNBRDFELENBRlIsRUFPSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0E7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBK0IsbUJBQVksTUFBM0M7QUFBa0QsU0FBSyxFQUFFO0FBQUM4RixpQkFBVyxFQUFFO0FBQWQ7QUFBekQsSUFEQSxhQVBKLENBOUNKLENBUEosQ0FESjtBQW9FSCxDQWhNRDs7R0FBTTVHLFc7O0tBQUFBLFc7QUFpTVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Byb2ZpbGVzL1tfaWRdLmRlNjFiNDIyZjhhYjgwMGQ5OWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0J1xyXG5cclxuXHJcbmltcG9ydCAnLi4vLi4vLi4vcGFnZXMvUHJvZmlsZXMvU2Fzcy9tYXAuc2Nzcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBNYXJrZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY29sb3IsIG5hbWUsIGlkIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwaW4gYm91bmNlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsc2VcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgTWFwID0gKHsgbG9jYXRpb24sIHpvb21MZXZlbCB9KSA9PiB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5SRUFDVF9BUFBfTUFQX0tFWSk7XHJcbiAgfSxbXSk7XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwXCI+XHJcbiAgICAgICAgPEdvb2dsZU1hcFJlYWN0XHJcbiAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01BUF9LRVkgfX1cclxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e2xvY2F0aW9ufVxyXG4gICAgICAgICAgZGVmYXVsdFpvb209e3pvb21MZXZlbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgIGxhdD17bG9jYXRpb24ubGF0fVxyXG4gICAgICAgICAgICBsbmc9e2xvY2F0aW9uLmxuZ31cclxuICAgICAgICAgICAgbmFtZT17bG9jYXRpb24uYWRkcmVzc31cclxuICAgICAgICAgICAgY29sb3I9XCIjMkU5QUZGXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYXAiLCIvLyBEZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQge3VzZVN0YXRlICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9hbnQtcGlja2VyLnNjc3MnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vZmlyZWJhc2UnOyBcclxuXHJcbi8vIENvbXBvbmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9oZWFkJztcclxuaW1wb3J0IEljb24gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgSG9tZVN2ZyBmcm9tICcuL1N2Zy9Ib21lU3ZnJztcclxuaW1wb3J0IEFib3V0U3ZnIGZyb20gJy4vU3ZnL0Fib3V0U3ZnJztcclxuaW1wb3J0IENhbGVuZGFyU3ZnIGZyb20gJy4vU3ZnL0NhbGVuZGFyU3ZnJztcclxuaW1wb3J0ICcuLi8uLi9wYWdlcy9Qcm9maWxlcy9TYXNzL2Z1bGxQcm9maWxlLnNjc3MnO1xyXG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tICcuLi9MaWtlQnV0dG9uJztcclxuaW1wb3J0IEdlb2NvZGUgZnJvbSBcInJlYWN0LWdlb2NvZGVcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gJ2FudGQvbGliL21vZGFsL01vZGFsJztcclxuaW1wb3J0IEVkaXRCb3ggZnJvbSAnLi9Db21wb25lbnRzL0VkaXRCb3gnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9Db21wb25lbnRzL0Jvb2tNZWV0aW5nJztcclxuaW1wb3J0IE5hdkFjY2V1aWwgZnJvbSAnLi9Db21wb25lbnRzL05hdkFjY2V1aWwnO1xyXG5pbXBvcnQgTmF2UHJvcG9zIGZyb20gJy4vQ29tcG9uZW50cy9OYXZQcm9wb3MnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Db21wb25lbnRzL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IFByb2ZpbGVIZWFkIGZyb20gJy4vQ29tcG9uZW50cy9Qcm9maWxlSGVhZCc7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gaXNFbXB0eShvYmogLCB0eXBlKSB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJTb2Npw6l0w6lcIikge1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiXCIgfHwgdmFsdWUgPT0gW10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiYm9va2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvYmpbXCJhZGRyZXNzZVwiXSA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlIDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZSA7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgUHJvZmlsZUJvZHkgPSAoe3Byb2ZpbGUgLCB1c2VyaWR9KT0+e1xyXG4gICAgLy8gU3RhdGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3QgbmFtZSA9IHByb2ZpbGUuY29tcGFueW5hbWUgPT09IFwiXCIgfHwgcHJvZmlsZS5jb21wYW55bmFtZT09IHVuZGVmaW5lZCA/IHByb2ZpbGUubm9tK1wiIFwiK3Byb2ZpbGUucHJlbm9tIDogcHJvZmlsZS5jb21wYW55bmFtZSA7XHJcbiAgICBjb25zdCBbaW1hZ2VMb2FkaW5nICwgc2V0bG9hZGltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjdXJyZW50ICwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnQWNjZXVpbCcpO1xyXG4gICAgY29uc3QgW2NoZWNrYm94LHNldENoZWNrXSA9IHVzZVN0YXRlKHByb2ZpbGUuc3RhcnMuaW5jbHVkZXModXNlcmlkKSk7XHJcbiAgICBjb25zdCBbYm9va21ldHRpbmcsc2V0Ym9va10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGF0YSAsIHNldERhdGFdID0gdXNlU3RhdGUocHJvZmlsZSk7XHJcbiAgICBjb25zdCBbbG9jYXRpb24gLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZmlsZWZpcmViYXNlLHNldGZpcmVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcGVyY2VudGFnZSAsIHNldFByZWNlbnRhZ2VdPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLHNldHZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0bG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbRGlwbG9tZUxpc3QgLCBzZXREaXBsb21lTGlzdF0gPSB1c2VTdGF0ZShwcm9maWxlLmRpcGxvbWUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIC8vIEljb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdCBIb21lSWNvbiA9IHByb3BzID0+IDxJY29uIGNvbXBvbmVudD17SG9tZVN2Z30gey4uLnByb3BzfSAvPjtcclxuICAgIGNvbnN0IEFib3V0SWNvbiA9IHByb3BzID0+IDxJY29uIGNvbXBvbmVudD17QWJvdXRTdmd9IHsuLi5wcm9wc30gLz47XHJcbiAgICBjb25zdCBDYWxlbmRhckljb24gPSBwcm9wcyA9PiA8SWNvbiBjb21wb25lbnQ9e0NhbGVuZGFyU3ZnfSB7Li4ucHJvcHN9IC8+IDtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFkciA9IHByb2ZpbGUuYWRkcmVzc2UgKyBcIiAsIFwiKyBwcm9maWxlLmNpdHkgO1xyXG4gICAgICAgIEdlb2NvZGUuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NQVBfS0VZKTtcclxuICAgICAgICBHZW9jb2RlLmZyb21BZGRyZXNzKGFkcikudGhlbihcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XHJcbiAgICAgICAgICAgICAgY29uc3QgbG9jID0ge2FkZHJlc3M6IHByb2ZpbGUuYWRkcmVzc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGxhdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogbG5nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNldExvY2F0aW9uKGxvYyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgIH0sW10pXHJcbiAgICAvLyBGaXJlYmFzZSB1cmwgdXBsb2FkIGZ1bmN0aW9uIFxyXG4gICAgY29uc3QgZmlyZWJhc2VVcmwgPSAoZmlsZSkgPT57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbWFnZU5hbWUgPSBcImZpcmViYXNlLWltYWdlLVwiICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IHVwbG9hZEltYWdlID0gc3RvcmFnZS5yZWYoYGltYWdlcy8ke2N1cnJlbnRJbWFnZU5hbWV9YCkucHV0KGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgdXBsb2FkSW1hZ2Uub24oJ3N0YXRlX2NoYW5nZWQnLFxyXG4gICAgICAgICAgICAgICAgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlciA9IE1hdGguZmxvb3IoKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMClcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcmVjZW50YWdlKHBlcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5yZWYoJ2ltYWdlcycpLmNoaWxkKGN1cnJlbnRJbWFnZU5hbWUpLmdldERvd25sb2FkVVJMKCkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBbdXJsLCBjdXJyZW50SW1hZ2VOYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlTGlrZSA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgdmFyIHN0YXJzID0gcHJvZmlsZS5zdGFycyA7XHJcbiAgICAgICAgaWYgKCFjaGVja2JveCkge1xyXG4gICAgICAgICAgIGF3YWl0IHN0YXJzLnB1c2godXNlcmlkKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBhd2FpdCBzdGFycy5zcGxpY2Uoc3RhcnMuaW5kZXhPZih1c2VyaWQpLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVjayghY2hlY2tib3gpO1xyXG4gICAgICAgIGNvbnN0IFVybCA9ICcvYXBpL3Byb2ZpbGVzL2xpa2U/dXNlcmlkPScrcHJvZmlsZS5faWQ7XHJcbiAgICAgICAgYXhpb3MucG9zdChVcmwse1wic3RhcnNcIjpzdGFyc30se3dpdGhDcmVkZW50aWFscyA6IHRydWV9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+e30pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT57XHJcbiAgICAgICAgc2V0Q3VycmVudChlLmtleSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVCYWNrID0gKCk9PntcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGAvU2VhcmNoP2NvbXBhbnluYW1lPSR7cHJvZmlsZS5jb21wYW55bmFtZX0mZG9tYWluZT0mY2l0eT0mcGFnZT0xYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVFZGl0ID0gKCk9PntcclxuICAgICAgICBzZXR2aXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgbGV0IE9sZERhdGEgPSBkYXRhIDtcclxuICAgICAgICAgICAgT2xkRGF0YVtcImRpcGxvbWVcIl0gPSBEaXBsb21lTGlzdCA7XHJcbiAgICAgICAgICAgIHNldERhdGEoT2xkRGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KGRhdGEgLCBwcm9maWxlLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiVW4gb3UgcGx1c2lldXJzIGNoYW1wcyBzb250IHZpZGVzXCIpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0bG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlZmlyZWJhc2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRsb2FkaW1hZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nRGF0YSA9IGF3YWl0IGZpcmViYXNlVXJsKGZpbGVmaXJlYmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhLlVzcmltZyA9IGltZ0RhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gXCIvYXBpL3Byb2ZpbGVzL3VwZGF0ZT91c2VyaWQ9XCIgKyB1c2VyaWQgO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsIGRhdGEse3dpdGhDcmVkZW50aWFscyA6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiTWlzZSDDoCBqb3VyIHLDqXVzc2llXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLCB2ZXVpbGxleiByw6llc3NheWVyIHBsdXMgdGFyZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSwgdmV1aWxsZXogcsOpZXNzYXllciBwbHVzIHRhcmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZXR1cm5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPXtuYW1lK1wiIHwgNlNvbHV0aW9uc1wifS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9uQ29udGFpbmVyXCIgb25DbGljaz17aGFuZGxlQmFja30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0IGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWNrQnV0dG9uXCI+UmV0b3VyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFByb2ZpbGVIZWFkIHByb2ZpbGU9e3Byb2ZpbGV9IGhhbmRsZUVkaXQ9e2hhbmRsZUVkaXR9IHNldGJvb2s9e3NldGJvb2t9IHVzZXJpZD17dXNlcmlkfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVCb2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgc3R5bGU9e3t0b3AgOiAnOSUnfX0gdGl0bGU9XCJTZWxlY3Rpb25uZXogbGEgY2VsbHVsZSBjb3JyZXNwb25kYW50ZSBhIHZvdHJlIHLDqXVuaW9uXCIgdmlzaWJsZT17Ym9va21ldHRpbmd9IHdpZHRoPVwiOTAlXCIgYm9keVN0eWxlPXt7aGVpZ2h0OiAnNzB2aCcgLCBvdmVyZmxvd1kgOiAnc2Nyb2xsJ319IG9uQ2FuY2VsPXsoKT0+c2V0Ym9vayhmYWxzZSl9IGZvb3Rlcj17bnVsbH0+PENhbGVuZGFyIHByb2ZpbGU9e3Byb2ZpbGV9IGxvYz1cInB1YmxpY1wiLz48L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwiRWRpdGV6IHZvdHJlIHByb2ZpbGVcIiBjbGFzc05hbWU9XCJFZGl0TW9kYWxcIiB2aXNpYmxlPXt2aXNpYmxlfSAgYm9keVN0eWxlPXt7aGVpZ2h0OiAnNTB2aCcsIG92ZXJmbG93WSA6ICdzY3JvbGwnfX0gb25DYW5jZWw9eygpPT5zZXR2aXNpYmxlKGZhbHNlKX0gZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtmYWxzZX0ga2V5PVwic3VibWl0XCIgdHlwZT1cInByaW1hcnlcIiBsb2FkaW5nPXtsb2FkaW5nfSBzdHlsZT17e2JvcmRlclJhZGl1cyA6JzEwcHgnLCBmb250RmFtaWx5IDonR2xhY2lhbEJvbGQnfX0gIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbsOpICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHshaW1hZ2VMb2FkaW5nICYmKDxFZGl0Qm94IGRhdGE9e2RhdGF9IHNldERhdGE9e3NldERhdGF9IHNldERpcGxvbWVMaXN0PXtzZXREaXBsb21lTGlzdH0gRGlwbG9tZUxpc3Q9e0RpcGxvbWVMaXN0fSBzZXRmaXJlPXtzZXRmaXJlfS8+KX1cclxuICAgICAgICAgICAgICAgIHtpbWFnZUxvYWRpbmcgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHBlcmNlbnRhZ2U9e3BlcmNlbnRhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTmF2IG1lbnUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgPE1lbnUgb25DbGljaz17aGFuZGxlQ2xpY2t9IHNlbGVjdGVkS2V5cz17Y3VycmVudH0gbW9kZT1cImhvcml6b250YWxcIiBzdHlsZT17e21hcmdpblRvcCA6JzMlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiQWNjZXVpbFwiIGljb249ezxIb21lSWNvbiAvPn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NldWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwcm9wb3NcIiBpY29uPXs8QWJvdXRJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQSBwcm9wb3NcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcmlkID09PSBwcm9maWxlLl9pZCAmJiBwcm9maWxlLnR5cGUgPT09IFwiU29jacOpdMOpXCIgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiQ2FsZW5kYXJcIiBpY29uPXs8Q2FsZW5kYXJJY29uIC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FsZW5kcmllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNZW51Q29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcIkFjY2V1aWxcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZBY2NldWlsIGRhdGU9e2RhdGV9IHByb2ZpbGU9e3Byb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gXCJwcm9wb3NcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZQcm9wb3MgcHJvZmlsZT17cHJvZmlsZX0gbG9jYXRpb249e2xvY2F0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBcIkNhbGVuZGFyXCIgJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3AgOiAnMzBweCd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgIHByb2ZpbGU9e3Byb2ZpbGV9IGxvYz1cInByb2ZpbGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWVudUZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyaWQgIT09IHByb2ZpbGUuX2lkICYmIHByb2ZpbGUudHlwZSA9PT0gXCJTb2Npw6l0w6lcIiAmJihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaWtlQnV0dG9uIGNoZWNrYm94PXtjaGVja2JveH0gaGFuZGxlTGlrZT17aGFuZGxlTGlrZX0gLz48bGFiZWwgaHRtbEZvcj1cImNoZWNrYm94XCIgY2xhc3NOYW1lPXtjaGVja2JveCA/IFwiYWN0aXZlXCIgOiBcIlwifT5KJ2FpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaGFyZS1hbHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17e21hcmdpblJpZ2h0IDonNXB4J319PjwvaT5QYXJ0YWdlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVCb2R5IDsiXSwic291cmNlUm9vdCI6IiJ9