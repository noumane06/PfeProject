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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("AIzaSyBekxJpV7M_HcWjpBkpA2WwfyHOrYQfGV4");
  }, []);
  var apiKey = '' + "AIzaSyBekxJpV7M_HcWjpBkpA2WwfyHOrYQfGV4";
  return __jsx("div", {
    className: "map"
  }, __jsx("div", {
    className: "google-map"
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bootstrapURLKeys: {
      key: 'AIzaSyBekxJpV7M_HcWjpBkpA2WwfyHOrYQfGV4'
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlX0NvbXBvbmVudHMvbWFwL01hcC5qcyJdLCJuYW1lcyI6WyJNYXJrZXIiLCJwcm9wcyIsImNvbG9yIiwibmFtZSIsImlkIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwiTWFwIiwibG9jYXRpb24iLCJ6b29tTGV2ZWwiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImFwaUtleSIsImtleSIsImxhdCIsImxuZyIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7O0FBS0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsS0FEYyxHQUNNRCxLQUROLENBQ2RDLEtBRGM7QUFBQSxNQUNQQyxJQURPLEdBQ01GLEtBRE4sQ0FDUEUsSUFETztBQUFBLE1BQ0RDLEVBREMsR0FDTUgsS0FETixDQUNERyxFQURDO0FBRXRCLFNBQ0ksbUJBQ0E7QUFDRSxhQUFTLEVBQUMsWUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFSCxLQUFuQjtBQUEwQkksWUFBTSxFQUFFO0FBQWxDLEtBRlQ7QUFHRSxTQUFLLEVBQUVIO0FBSFQsSUFEQSxFQU1BO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFOQSxDQURKO0FBVUgsQ0FaRDs7S0FBTUgsTTs7QUFlTixJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBRXZDQyx5REFBUyxDQUFDLFlBQUk7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLHlDQUFaO0FBQ0gsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUdBLE1BQU1DLE1BQU0sR0FBRyxLQUFHRCx5Q0FBbEI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyx3REFBRDtBQUNFLG9CQUFnQixFQUFFO0FBQUVFLFNBQUcsRUFBRTtBQUFQLEtBRHBCO0FBRUUsaUJBQWEsRUFBRVAsUUFGakI7QUFHRSxlQUFXLEVBQUVDO0FBSGYsS0FLRSxNQUFDLE1BQUQ7QUFDRSxPQUFHLEVBQUVELFFBQVEsQ0FBQ1EsR0FEaEI7QUFFRSxPQUFHLEVBQUVSLFFBQVEsQ0FBQ1MsR0FGaEI7QUFHRSxRQUFJLEVBQUVULFFBQVEsQ0FBQ1UsT0FIakI7QUFJRSxTQUFLLEVBQUM7QUFKUixJQUxGLENBREYsQ0FERixDQURGO0FBbUJELENBMUJEOztHQUFNWCxHOztNQUFBQSxHO0FBMkJTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Qcm9maWxlcy9bX2lkXS42NTE0ODZiYWViODdkZWFmN2MyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcclxuXHJcblxyXG5pbXBvcnQgJy4uLy4uLy4uL3BhZ2VzL1Byb2ZpbGVzL1Nhc3MvbWFwLnNjc3MnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgTWFya2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbG9yLCBuYW1lLCBpZCB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGluIGJvdW5jZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bHNlXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IE1hcCA9ICh7IGxvY2F0aW9uLCB6b29tTGV2ZWwgfSkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01BUF9LRVkpO1xyXG4gIH0sW10pO1xyXG4gIGNvbnN0IGFwaUtleSA9ICcnK3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9NQVBfS0VZO1xyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlLW1hcFwiPlxyXG4gICAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCZWt4SnBWN01fSGNXanBCa3BBMld3ZnlIT3JZUWZHVjQnIH19XHJcbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXtsb2NhdGlvbn1cclxuICAgICAgICAgIGRlZmF1bHRab29tPXt6b29tTGV2ZWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICBsYXQ9e2xvY2F0aW9uLmxhdH1cclxuICAgICAgICAgICAgbG5nPXtsb2NhdGlvbi5sbmd9XHJcbiAgICAgICAgICAgIG5hbWU9e2xvY2F0aW9uLmFkZHJlc3N9XHJcbiAgICAgICAgICAgIGNvbG9yPVwiIzJFOUFGRlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==