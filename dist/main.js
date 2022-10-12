/** *** */ (() => { // webpackBootstrap
/** *** */

  /** *** */ 	const __webpack_modules__ = ({

    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles.css':
    /*! **************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \************************************************************* */
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
      // Imports

      const ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/check.svg */ './src/asset/check.svg'), __webpack_require__.b);
      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      const ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-weight: 300;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: 40px auto;\n  color: #202020;\n  position: relative;\n}\n\nli:hover {\n  cursor: pointer;\n}\n\n.header,\n.main,\n.menu {\n  padding: 0 3.5vw;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1;\n  display: grid;\n  background-color: #DB4C3F;\n  color: #fff;\n}\n\n.header ul {\n  align-self: center;\n  display: flex;\n  gap: 0.5rem;\n}\n\nli {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-transform: capitalize;\n  padding: 0 0.25rem\n}\n\nli img {\n  width: 22.5px;\n  height: auto;\n  fill: #fff;\n}\n\n.toggle-menu:hover,\n.home:hover,\n.add-task:hover,\n.completed:hover {\n  background-color: #ffffff25;\n  border-radius: 5px;\n}\n\n.header .add-task {\n  margin-left: auto;\n}\n\n.profile {\n  display: inline-block;\n  color: #237caf;\n  width: 1.75rem;\n  height: 1.75rem;\n  background-color: #fff;\n  border: 1px solid #237caf;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 0;\n}\n\n.menu {\n  grid-column: 1;\n  grid-row: 2;\n  display: grid;\n  gap: 2rem;\n  padding-top: 2.5rem;\n  transition: 0.4s;\n  align-self: start;\n}\n\n.menu.hidde {\n  margin-left: -300px;\n}\n\n.menu ul {\n  display: grid;\n  gap: 1rem;\n}\n\n.projects-heading {\n  display: flex;\n  gap: 0.5rem;\n  text-align: center;\n}\n\nh4 {\n  font-size: 16px;\n  text-transform: capitalize;\n}\n\n.project-name {\n  width: 100%;\n}\n\n.projects img {\n  width: 20px;\n  height: auto;\n}\n\n.projects ul {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0 0.5rem 2rem;\n}\n\n.projects li {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.projects li img {\n  display: inline-block;\n  width: 14px;\n  height: auto;\n  display: none;\n  margin-left: auto;\n}\n\n.dots.show {\n  display: block;\n}\n\n.projects li ul {\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  background-color: #fff;\n  border: 1px solid #20202035;\n  border-radius: 5px;\n  z-index: 6;\n  padding: 0.25rem;\n  display: none;\n}\n\n.projects li ul li {\n  width: 5rem;\n}\n\n.projects li ul li + li {\n  margin-top: 0.25rem;\n}\n\n.projects li ul.show {\n  display: block;\n}\n\n.projects li ul img {\n  width: 20px;\n  height: auto;\n  display: inline-block;\n}\n\n.update-task-form,\n.add-task-form,\n.update-project-form,\n.add-project-form {\n  position: absolute;\n  display: none;\n  left: 50%;\n  top: 25vh;\n  transform: translate(-50%, 0);\n  padding: 1rem 2rem;\n  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);\n  border-radius: 10px;\n  width: 500px;\n  z-index: 10;\n  background-color: #fff;\n}\n\n.show {\n  display: block;\n}\n\nform {\n  display: grid;\n  gap: 0.3rem;\n}\n\ninput,\nbutton {\n  line-height: 1.25rem;\n  padding: 0 0.5rem;\n}\n\ninput[type=text],\ninput[type=text]:focus {\n  outline: none;\n  border: none;\n}\n\n.project-info,\n.buttons {\n  margin-top: 1rem;\n}\n\n.project-info {\n  display: flex;\n  gap: 0.25rem;\n}\n\n#priority {\n  margin-left: auto;\n  outline: none;\n  border: none;\n}\n\n.buttons {\n  justify-self: end;\n}\n\n.cancel {\n  border: none;\n  font-weight: 600;\n}\n\nselect,\ninput[type=date] {\n  outline: none;\n  background: #fff;\n  padding: 0 0.5rem;\n  border: 1px solid #20202040;\n  border-radius: 5px;\n  color: #202020D0;\n}\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\nbutton  {\n  border-radius: 5px;\n  padding: 0.25rem 0.5rem;\n}\n\nbutton[type=submit] {\n  border: none;\n  background: #DB4C3F;\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.add {\n  margin-left: auto;\n}\n\n.add-project-form h3 {\n  margin-bottom: 2rem;\n  padding-bottom: 5px;\n  text-align: center;\n  border-bottom: 1px solid #20202025;\n}\n\n.add-project-form input:focus {\n  outline: none;\n  border: 1px solid #202020A0;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.popup-hidder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  z-index: 5;\n}\n\n.popup-hidder.show {\n  display: block;\n}\n\n.main {\n  grid-column: 2;\n  grid-row: 2;\n  width: 100%;\n  transition: 0.4s;\n  padding-top: 2rem;\n  min-height: calc(100vh - 40px);\n  align-self: start;\n}\n\n.main.hidde {\n  margin-left: -300px;\n  width: 100vw;\n}\n\n.check {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #237caf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\n.check img {\n  width: 0.6rem;\n  height: auto;\n}\n\n.check:hover {\n  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  cursor: pointer;\n}\n\n.task {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n}\n\n.main-container h2 {\n  margin-bottom: 1.5rem;\n}\n\n.task .task-name {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.task .task-description {\n  font-size: 0.75rem;\n  color: #202020A0;\n}\n\n.task-priority,\n.task-duedate {\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.task img {\n  width: 20px;\n  height: auto;\n}\n\n.task img:hover {\n  fill: #202020A0;\n  cursor: pointer;\n}\n\n.update {\n  margin-left: auto;\n  display: none;\n}\n\n.update.show {\n  display: block;\n}`, '', {
        version: 3, sources: ['webpack://./src/styles.css'], names: [], mappings: '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', sourcesContent: ["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-weight: 300;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: 40px auto;\n  color: #202020;\n  position: relative;\n}\n\nli:hover {\n  cursor: pointer;\n}\n\n.header,\n.main,\n.menu {\n  padding: 0 3.5vw;\n}\n\n.header {\n  grid-column: 1 / 3;\n  grid-row: 1;\n  display: grid;\n  background-color: #DB4C3F;\n  color: #fff;\n}\n\n.header ul {\n  align-self: center;\n  display: flex;\n  gap: 0.5rem;\n}\n\nli {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-transform: capitalize;\n  padding: 0 0.25rem\n}\n\nli img {\n  width: 22.5px;\n  height: auto;\n  fill: #fff;\n}\n\n.toggle-menu:hover,\n.home:hover,\n.add-task:hover,\n.completed:hover {\n  background-color: #ffffff25;\n  border-radius: 5px;\n}\n\n.header .add-task {\n  margin-left: auto;\n}\n\n.profile {\n  display: inline-block;\n  color: #237caf;\n  width: 1.75rem;\n  height: 1.75rem;\n  background-color: #fff;\n  border: 1px solid #237caf;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 0;\n}\n\n.menu {\n  grid-column: 1;\n  grid-row: 2;\n  display: grid;\n  gap: 2rem;\n  padding-top: 2.5rem;\n  transition: 0.4s;\n  align-self: start;\n}\n\n.menu.hidde {\n  margin-left: -300px;\n}\n\n.menu ul {\n  display: grid;\n  gap: 1rem;\n}\n\n.projects-heading {\n  display: flex;\n  gap: 0.5rem;\n  text-align: center;\n}\n\nh4 {\n  font-size: 16px;\n  text-transform: capitalize;\n}\n\n.project-name {\n  width: 100%;\n}\n\n.projects img {\n  width: 20px;\n  height: auto;\n}\n\n.projects ul {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0 0.5rem 2rem;\n}\n\n.projects li {\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.projects li img {\n  display: inline-block;\n  width: 14px;\n  height: auto;\n  display: none;\n  margin-left: auto;\n}\n\n.dots.show {\n  display: block;\n}\n\n.projects li ul {\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  background-color: #fff;\n  border: 1px solid #20202035;\n  border-radius: 5px;\n  z-index: 6;\n  padding: 0.25rem;\n  display: none;\n}\n\n.projects li ul li {\n  width: 5rem;\n}\n\n.projects li ul li + li {\n  margin-top: 0.25rem;\n}\n\n.projects li ul.show {\n  display: block;\n}\n\n.projects li ul img {\n  width: 20px;\n  height: auto;\n  display: inline-block;\n}\n\n.update-task-form,\n.add-task-form,\n.update-project-form,\n.add-project-form {\n  position: absolute;\n  display: none;\n  left: 50%;\n  top: 25vh;\n  transform: translate(-50%, 0);\n  padding: 1rem 2rem;\n  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);\n  border-radius: 10px;\n  width: 500px;\n  z-index: 10;\n  background-color: #fff;\n}\n\n.show {\n  display: block;\n}\n\nform {\n  display: grid;\n  gap: 0.3rem;\n}\n\ninput,\nbutton {\n  line-height: 1.25rem;\n  padding: 0 0.5rem;\n}\n\ninput[type=text],\ninput[type=text]:focus {\n  outline: none;\n  border: none;\n}\n\n.project-info,\n.buttons {\n  margin-top: 1rem;\n}\n\n.project-info {\n  display: flex;\n  gap: 0.25rem;\n}\n\n#priority {\n  margin-left: auto;\n  outline: none;\n  border: none;\n}\n\n.buttons {\n  justify-self: end;\n}\n\n.cancel {\n  border: none;\n  font-weight: 600;\n}\n\nselect,\ninput[type=date] {\n  outline: none;\n  background: #fff;\n  padding: 0 0.5rem;\n  border: 1px solid #20202040;\n  border-radius: 5px;\n  color: #202020D0;\n}\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\nbutton  {\n  border-radius: 5px;\n  padding: 0.25rem 0.5rem;\n}\n\nbutton[type=submit] {\n  border: none;\n  background: #DB4C3F;\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.add {\n  margin-left: auto;\n}\n\n.add-project-form h3 {\n  margin-bottom: 2rem;\n  padding-bottom: 5px;\n  text-align: center;\n  border-bottom: 1px solid #20202025;\n}\n\n.add-project-form input:focus {\n  outline: none;\n  border: 1px solid #202020A0;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.popup-hidder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  z-index: 5;\n}\n\n.popup-hidder.show {\n  display: block;\n}\n\n.main {\n  grid-column: 2;\n  grid-row: 2;\n  width: 100%;\n  transition: 0.4s;\n  padding-top: 2rem;\n  min-height: calc(100vh - 40px);\n  align-self: start;\n}\n\n.main.hidde {\n  margin-left: -300px;\n  width: 100vw;\n}\n\n.check {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #237caf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-top: 4px;\n}\n\n.check img {\n  width: 0.6rem;\n  height: auto;\n}\n\n.check:hover {\n  content: url(./asset/check.svg);\n  cursor: pointer;\n}\n\n.task {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n}\n\n.main-container h2 {\n  margin-bottom: 1.5rem;\n}\n\n.task .task-name {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.task .task-description {\n  font-size: 0.75rem;\n  color: #202020A0;\n}\n\n.task-priority,\n.task-duedate {\n  font-size: 0.75rem;\n  margin-top: 0.5rem;\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.task img {\n  width: 20px;\n  height: auto;\n}\n\n.task img:hover {\n  fill: #202020A0;\n  cursor: pointer;\n}\n\n.update {\n  margin-left: auto;\n  display: none;\n}\n\n.update.show {\n  display: block;\n}"], sourceRoot: '',
      }]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/api.js':
    /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
    /***/ ((module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        const list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map((item) => {
            let content = '';
            const needLayer = typeof item[5] !== 'undefined';

            if (item[4]) {
              content += '@supports ('.concat(item[4], ') {');
            }

            if (item[2]) {
              content += '@media '.concat(item[2], ' {');
            }

            if (needLayer) {
              content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {');
            }

            content += cssWithMappingToString(item);

            if (needLayer) {
              content += '}';
            }

            if (item[2]) {
              content += '}';
            }

            if (item[4]) {
              content += '}';
            }

            return content;
          }).join('');
        }; // import a list of modules into the list

        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === 'string') {
            modules = [[null, modules, undefined]];
          }

          const alreadyImportedModules = {};

          if (dedupe) {
            for (let k = 0; k < this.length; k++) {
              const id = this[k][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (let _k = 0; _k < modules.length; _k++) {
            const item = [].concat(modules[_k]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }

            if (typeof layer !== 'undefined') {
              if (typeof item[5] === 'undefined') {
                item[5] = layer;
              } else {
                item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}');
                item[5] = layer;
              }
            }

            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
                item[2] = media;
              }
            }

            if (supports) {
              if (!item[4]) {
                item[4] = ''.concat(supports);
              } else {
                item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}');
                item[4] = supports;
              }
            }

            list.push(item);
          }
        };

        return list;
      };
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
    /*! ********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \******************************************************* */
    /***/ ((module) => {
      module.exports = function (url, options) {
        if (!options) {
          options = {};
        }

        if (!url) {
          return url;
        }

        url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

        if (/^['"].*['"]$/.test(url)) {
          url = url.slice(1, -1);
        }

        if (options.hash) {
          url += options.hash;
        } // Should url be wrapped?
        // See https://drafts.csswg.org/css-values-3/#urls

        if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
          return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"');
        }

        return url;
      };
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
    /*! ************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************** */
    /***/ ((module) => {
      module.exports = function (item) {
        const content = item[1];
        const cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (typeof btoa === 'function') {
          const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
          const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
          const sourceMapping = '/*# '.concat(data, ' */');
          const sourceURLs = cssMapping.sources.map((source) => '/*# sourceURL='.concat(cssMapping.sourceRoot || '').concat(source, ' */'));
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      };
      /***/ }),

    /***/ './src/styles.css':
    /*! ************************!*\
  !*** ./src/styles.css ***!
  \*********************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */ const _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ './node_modules/css-loader/dist/cjs.js!./src/styles.css');

      const options = {};

      options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
      options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, 'head');

      options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
      options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

      const update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
    /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
    /***/ ((module) => {
      const stylesInDOM = [];

      function getIndexByIdentifier(identifier) {
        let result = -1;

        for (let i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        const idCountMap = {};
        const identifiers = [];

        for (let i = 0; i < list.length; i++) {
          const item = list[i];
          const id = options.base ? item[0] + options.base : item[0];
          const count = idCountMap[id] || 0;
          const identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          const indexByIdentifier = getIndexByIdentifier(identifier);
          const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5],
          };

          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            const updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier,
              updater,
              references: 1,
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function addElementStyle(obj, options) {
        const api = options.domAPI(options);
        api.update(obj);

        const updater = function updater(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
              return;
            }

            api.update(obj = newObj);
          } else {
            api.remove();
          }
        };

        return updater;
      }

      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        let lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          for (let i = 0; i < lastIdentifiers.length; i++) {
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }

          const newLastIdentifiers = modulesToDom(newList, options);

          for (let _i = 0; _i < lastIdentifiers.length; _i++) {
            const _identifier = lastIdentifiers[_i];

            const _index = getIndexByIdentifier(_identifier);

            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();

              stylesInDOM.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
    /***/ ((module) => {
      const memo = {};
      /* istanbul ignore next  */

      function getTarget(target) {
        if (typeof memo[target] === 'undefined') {
          let styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      }
      /* istanbul ignore next  */

      function insertBySelector(insert, style) {
        const target = getTarget(insert);

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      module.exports = insertBySelector;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function insertStyleElement(options) {
        const element = document.createElement('style');
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }

      module.exports = insertStyleElement;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
    /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      /* istanbul ignore next  */
      function setAttributesWithoutAttributes(styleElement) {
        const nonce = true ? __webpack_require__.nc : 0;

        if (nonce) {
          styleElement.setAttribute('nonce', nonce);
        }
      }

      module.exports = setAttributesWithoutAttributes;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function apply(styleElement, options, obj) {
        let css = '';

        if (obj.supports) {
          css += '@supports ('.concat(obj.supports, ') {');
        }

        if (obj.media) {
          css += '@media '.concat(obj.media, ' {');
        }

        const needLayer = typeof obj.layer !== 'undefined';

        if (needLayer) {
          css += '@layer'.concat(obj.layer.length > 0 ? ' '.concat(obj.layer) : '', ' {');
        }

        css += obj.css;

        if (needLayer) {
          css += '}';
        }

        if (obj.media) {
          css += '}';
        }

        if (obj.supports) {
          css += '}';
        }

        const { sourceMap } = obj;

        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), ' */');
        } // For old IE

        /* istanbul ignore if  */

        options.styleTagTransform(css, styleElement, options.options);
      }

      function removeStyleElement(styleElement) {
        // istanbul ignore if
        if (styleElement.parentNode === null) {
          return false;
        }

        styleElement.parentNode.removeChild(styleElement);
      }
      /* istanbul ignore next  */

      function domAPI(options) {
        const styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }

      module.exports = domAPI;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }

          styleElement.appendChild(document.createTextNode(css));
        }
      }

      module.exports = styleTagTransform;
      /***/ }),

    /***/ './node_modules/uuid/dist/esm-browser/regex.js':
    /*! *****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \**************************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
      /***/ }),

    /***/ './node_modules/uuid/dist/esm-browser/rng.js':
    /*! ***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \************************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ rng),
        /* harmony export */ });
      // Unique ID creation requires a high quality random # generator. In the browser we therefore
      // require the crypto API and do not support built-in fallback to lower quality random number
      // generators (like Math.random()).
      let getRandomValues;
      const rnds8 = new Uint8Array(16);
      function rng() {
        // lazy load so that environments that need to polyfill have a chance to do so
        if (!getRandomValues) {
          // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
          // find the complete implementation of crypto (msCrypto) on IE11.
          getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

          if (!getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
          }
        }

        return getRandomValues(rnds8);
      }
      /***/ }),

    /***/ './node_modules/uuid/dist/esm-browser/stringify.js':
    /*! *********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ './node_modules/uuid/dist/esm-browser/validate.js');

      /**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

      const byteToHex = [];

      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 0x100).toString(16).substr(1));
      }

      function stringify(arr) {
        const offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        // Note: Be careful editing this code!  It's been tuned for performance
        // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
        const uuid = (`${byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]]}-${byteToHex[arr[offset + 4]]}${byteToHex[arr[offset + 5]]}-${byteToHex[arr[offset + 6]]}${byteToHex[arr[offset + 7]]}-${byteToHex[arr[offset + 8]]}${byteToHex[arr[offset + 9]]}-${byteToHex[arr[offset + 10]]}${byteToHex[arr[offset + 11]]}${byteToHex[arr[offset + 12]]}${byteToHex[arr[offset + 13]]}${byteToHex[arr[offset + 14]]}${byteToHex[arr[offset + 15]]}`).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
        // of the following:
        // - One or more input array values don't map to a hex octet (leading to
        // "undefined" in the uuid)
        // - Invalid input values for the RFC `version` or `variant` fields

        if (!(0, _validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
          throw TypeError('Stringified UUID is invalid');
        }

        return uuid;
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);
      /***/ }),

    /***/ './node_modules/uuid/dist/esm-browser/v4.js':
    /*! **************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \************************************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ './node_modules/uuid/dist/esm-browser/rng.js');
      /* harmony import */ const _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ './node_modules/uuid/dist/esm-browser/stringify.js');

      function v4(options, buf, offset) {
        options = options || {};
        const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

        rnds[6] = rnds[6] & 0x0f | 0x40;
        rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

        if (buf) {
          offset = offset || 0;

          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }

          return buf;
        }

        return (0, _stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);
      /***/ }),

    /***/ './node_modules/uuid/dist/esm-browser/validate.js':
    /*! ********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ './node_modules/uuid/dist/esm-browser/regex.js');

      function validate(uuid) {
        return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);
      /***/ }),

    /***/ './src/dom.js':
    /*! ********************!*\
  !*** ./src/dom.js ***!
  \******************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ displayProjects: () => (/* binding */ displayProjects),
        /* harmony export */ });
      /* harmony import */ const _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ './src/logic.js');
      /* harmony import */ const _asset_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/pencil-outline.svg */ './src/asset/pencil-outline.svg');
      /* harmony import */ const _asset_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/trash-can-outline.svg */ './src/asset/trash-can-outline.svg');
      /* harmony import */ const _asset_dots_horizontal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/dots-horizontal.svg */ './src/asset/dots-horizontal.svg');

      (function dom() {
        handleToday();

        const home = document.querySelector('.home');
        home.addEventListener('click', handleToday);

        const addTask = document.querySelector('.add-task');
        addTask.addEventListener('click', handleAddTask);

        const cancel = document.querySelectorAll('.cancel');
        cancel.forEach((c) => c.addEventListener('click', handleCancel));

        const toggleMenu = document.querySelector('.toggle-menu');
        toggleMenu.addEventListener('click', handleToggleMenu);

        const add = document.querySelector('.add');
        add.addEventListener('click', handleAddProject);

        const inbox = document.querySelector('.inbox');
        inbox.addEventListener('click', handleInbox);

        const today = document.querySelector('.today');
        today.addEventListener('click', handleToday);

        const upcomming = document.querySelector('.upcomming');
        upcomming.addEventListener('click', handleUpcomming);

        const addTaskForm = document.querySelector('.add-task-form form');
        addTaskForm.addEventListener('submit', handleSubmitTask);

        const addProjectForm = document.querySelector('.add-project-form form');
        addProjectForm.addEventListener('submit', handleSubmitProject);

        const hiddePopup = document.querySelector('.popup-hidder');
        hiddePopup.addEventListener('click', handleCancel);
      }());

      function handleAddTask() {
        document.querySelector('.add-task-form').classList.add('show');
        document.querySelector('.popup-hidder').classList.add('show');
      }

      function handleAddProject() {
        document.querySelector('.add-project-form').classList.add('show');
        document.querySelector('.add-project-form form input').focus();
        document.querySelector('.popup-hidder').classList.add('show');
      }

      function handleCancel(e) {
        document.querySelector('.add-task-form').classList.remove('show');
        document.querySelector('.update-task-form').classList.remove('show');
        document.querySelector('.add-project-form').classList.remove('show');
        document.querySelector('.update-project-form').classList.remove('show');
        document.querySelector('.popup-hidder').classList.remove('show');
        document.querySelector('.projects li ul')?.classList.remove('show');
        document.querySelector('.dots')?.classList.remove('show');
      }

      function handleToggleMenu() {
        document.querySelector('.main').classList.toggle('hidde');
        document.querySelector('.menu').classList.toggle('hidde');
      }

      function handleInbox() {
        displayTasks('Inbox', []);
      }

      function handleToday() {
        displayTasks('Today', []);
      }

      function handleUpcomming() {
        displayTasks('Upcomming', []);
      }

      function handleSubmitProject(e) {
        e.preventDefault();
        const inputs = document.querySelector('.add-project-form form').elements;
        const projectId = _logic__WEBPACK_IMPORTED_MODULE_0__.crud.createProject(inputs.projectName.value);

        addProject(projectId, inputs.projectName.value);
        resetForm(e);
      }

      function addProject(projectId, projectName) {
        const liContainer = document.createElement('div');

        const li = document.createElement('li');
        li.setAttribute('_id', projectId);

        const span = document.createElement('span');
        span.innerText = projectName;
        span.classList.add('project-name');
        span.addEventListener('click', (e) => handleProjectTasks(projectId));
        li.appendChild(span);
        const dots = new Image();
        dots.classList.add('dots');
        dots.src = _asset_dots_horizontal_svg__WEBPACK_IMPORTED_MODULE_3__;
        li.appendChild(dots);
        dots.addEventListener('click', (e) => handleUpdate(e, li));

        const ul = document.querySelector('.projects ul').appendChild(li);

        li.addEventListener('mouseover', () => dots.classList.add('show'));
        li.addEventListener('mouseout', () => dots.classList.remove('show'));

        const select = document.querySelector('.add-task-form .project-info select');
        const option = document.createElement('option');
        option.setAttribute('value', projectId);
        option.innerText = projectName;
        select.appendChild(option);
      }

      function handleUpdate(e, li) {
        const edit = document.createElement('li');
        const editIcon = new Image();
        editIcon.src = _asset_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        const editText = document.createElement('li');
        editText.innerText = 'Edit';
        edit.appendChild(editIcon);
        edit.appendChild(editText);
        edit.addEventListener('click', () => handleEditProject(e, li));

        const deleteP = document.createElement('li');
        const deleteIcon = new Image();
        deleteIcon.src = _asset_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
        const deleteText = document.createElement('li');
        deleteText.innerText = 'Delete';
        deleteP.appendChild(deleteIcon);
        deleteP.appendChild(deleteText);
        deleteP.addEventListener('click', () => handleDeleteProject(e, li));

        const ul = document.createElement('ul');
        ul.appendChild(edit);
        ul.appendChild(deleteP);

        li.appendChild(ul);
        document.querySelector('.projects li ul').classList.add('show');
        document.querySelector('.popup-hidder').classList.add('show');

        e.stopPropagation();
      }

      function handleEditProject(e, li) {
        const inputs = document.querySelector('.update-project-form form').elements;
        inputs.projectName.value = li.children[0].innerText;
        handleEditProjectForm(li);
        e.stopPropagation();
      }

      function handleEditProjectForm(li) {
        const updateProjectForm = document.querySelector('.update-project-form form');
        updateProjectForm.addEventListener('submit', (e) => updateProject(e, li));
        document.querySelector('.update-project-form').classList.add('show');
        document.querySelector('.update-project-form form input').focus();
        document.querySelector('.popup-hidder').classList.add('show');
      }

      function updateProject(e, li) {
        e.preventDefault();
        const inputs = document.querySelector('.update-project-form form').elements;
        _logic__WEBPACK_IMPORTED_MODULE_0__.crud.updateProject(li.getAttribute('_id'), inputs.projectName.value);
        li.children[0].innerText = inputs.projectName.value;
        handleCancel();
      }

      function handleDeleteProject(e, li) {
        _logic__WEBPACK_IMPORTED_MODULE_0__.crud.deleteProject(li.getAttribute('._id'));
        handleToday();
        document.querySelector('.projects ul').removeChild(li);
        handleCancel();
        e.stopPropagation();
      }

      function handleProjectTasks(projectId) {
        const project = _logic__WEBPACK_IMPORTED_MODULE_0__.crud.findProject(projectId)[0];
        project && displayTasks(project.name, project.tasks);
      }

      function displayTasks(projectName, tasks) {
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('main-container');

        const h2 = document.createElement('h2');
        h2.innerText = projectName;

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        tasks.forEach((task) => taskContainer.appendChild(appendTask(task)));

        mainContainer.appendChild(h2);
        mainContainer.appendChild(taskContainer);

        const main = document.querySelector('.main');
        main.replaceChildren(mainContainer);
      }

      function appendTask(task) {
        const taskCont = document.createElement('div');
        taskCont.classList.add('task');
        taskCont.setAttribute('_id', task._id);

        const check = document.createElement('div');
        check.classList.add('check');

        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');

        const taskName = document.createElement('p');
        taskName.classList.add('task-name');
        taskName.innerText = task.name;
        taskInfo.appendChild(taskName);

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-description');
        taskDesc.innerText = task.description;
        taskInfo.appendChild(taskDesc);

        const taskDuedate = document.createElement('p');
        taskDuedate.classList.add('task-duedate');
        taskDuedate.innerText = task.duedate;
        taskInfo.appendChild(taskDuedate);

        const taskPriority = document.createElement('p');
        taskPriority.classList.add('task-priority');
        taskPriority.innerText = task.priority;
        taskInfo.appendChild(taskPriority);

        const update = document.createElement('div');
        update.classList.add('update');
        const edit = new Image();
        edit.src = _asset_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        edit.addEventListener('click', () => handleEditTask(task, taskInfo));
        update.appendChild(edit);

        const deleteT = new Image();
        deleteT.src = _asset_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
        deleteT.addEventListener('click', () => handleDeleteTask(taskCont, task.projectId));
        update.appendChild(deleteT);

        taskCont.appendChild(check);
        taskCont.appendChild(taskInfo);
        taskCont.appendChild(update);

        taskCont.addEventListener('mouseover', () => update.classList.add('show'));
        taskCont.addEventListener('mouseout', () => update.classList.remove('show'));

        return taskCont;
      }

      function displayProjects(projects) {
        projects.forEach((proj) => addProject(proj._id, proj.name));
      }

      function handleSubmitTask(e) {
        e.preventDefault();
        const inputs = document.querySelector('.add-task-form form').elements;
        const task = _logic__WEBPACK_IMPORTED_MODULE_0__.crud.createTask(
          inputs.taskName.value,
          inputs.description.value,
          inputs.project.value,
          inputs.priority.value,
          inputs.duedate.value,
        );
        document.querySelector('.task-container').appendChild(appendTask(task));
        resetForm(e);
      }

      function resetForm(e) {
        e.target.reset();
        handleCancel();
      }

      function handleEditTask(task, taskInfo) {
        const inputs = document.querySelector('.update-task-form form').elements;
        inputs.taskName.value = task.name;
        inputs.description.value = task.description;
        inputs.priority.value = task.priority;
        inputs.duedate.value = task.duedate;
        handleUpdateTask(task, taskInfo);
      }

      function handleUpdateTask(task, taskInfo) {
        const updateTaskForm = document.querySelector('.update-task-form form');
        updateTaskForm.addEventListener('submit', (e) => updateTask(e, task, taskInfo));
        document.querySelector('.update-task-form').classList.add('show');
        document.querySelector('.popup-hidder').classList.add('show');
      }

      function updateTask(e, task, taskInfo) {
        e.preventDefault();
        const inputs = document.querySelector('.update-task-form form').elements;
        taskInfo.children[0].innerText = inputs.taskName.value;
        taskInfo.children[1].innerText = inputs.description.value;
        taskInfo.children[2].innerText = inputs.duedate.value;
        taskInfo.children[3].innerText = inputs.priority.value;
        _logic__WEBPACK_IMPORTED_MODULE_0__.crud.updateTask(task.projectId, task._id, {
          name: inputs.taskName.value,
          description: inputs.description.value,
          priority: inputs.priority.value,
          duedate: inputs.duedate.value,
        });
        resetForm(e);
      }

      function handleDeleteTask(task, projectId) {
        _logic__WEBPACK_IMPORTED_MODULE_0__.crud.removeTask(projectId, task.getAttribute('._id'));
        document.querySelector('.task-container').removeChild(task);
      }
      /***/ }),

    /***/ './src/localStorage.js':
    /*! *****************************!*\
  !*** ./src/localStorage.js ***!
  \**************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ readLocalStorage: () => (/* binding */ readLocalStorage),
        /* harmony export */ saveToLocalStorage: () => (/* binding */ saveToLocalStorage),
        /* harmony export */ });
      const readLocalStorage = () => JSON.parse(localStorage.getItem('projects_ls'));

      const saveToLocalStorage = (tasks) => {
        localStorage.setItem('projects_ls', JSON.stringify(tasks));
      };
      /***/ }),

    /***/ './src/logic.js':
    /*! **********************!*\
  !*** ./src/logic.js ***!
  \********************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ crud: () => (/* binding */ crud),
        /* harmony export */ });
      /* harmony import */ const uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ './node_modules/uuid/dist/esm-browser/v4.js');
      /* harmony import */ const _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ './src/localStorage.js');

      const CRUD = () => {
        let projects = (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.readLocalStorage)();
        projects = projects || [];

        function createProject(projectName) {
          console.log(projectName);
          const _id = (0, uuid__WEBPACK_IMPORTED_MODULE_1__.default)();
          const project = {
            _id,
            name: projectName,
            tasks: [],
          };
          projects.push(project);
          (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);
          return _id;
        }

        function findProject(projectId) {
          return projects.filter((proj) => proj._id == projectId);
        }

        function removeProject(projectId) {
          const projectIndex = projects.findIndex((proj) => proj._id == projectId);
          if (projectIndex !== -1) {
            const project = projects.splice(projectIndex, 1);
            (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);
            return project;
          }
        }

        function findAllProjects() {
          return projects;
        }

        function deleteProject(projectId) {
          const index = projects.findIndex((project) => project._id == projectId);
          const project = projects.splice(index, 1);

          (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);

          return project;
        }

        function updateProject(projectId, name) {
          const project = findProject(projectId);
          const index = project[0].name = name;

          (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);
        }

        function createTask(name, description, projectId, priority, duedate) {
          const project = findProject(projectId);
          const task = {
            _id: (0, uuid__WEBPACK_IMPORTED_MODULE_1__.default)(),
            name,
            description,
            projectId,
            priority,
            duedate,
          };
          project[0].tasks.push(task);
          (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);
          return (task);
        }

        function removeTask(projectId, taskId) {
          const project = findProject(projectId);
          const index = project[0].tasks.findIndex((task) => task._id == taskId);
          project[0].tasks.splice(index, 1);
          (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);
        }

        function updateTask(projectId, taskId, {
          name, description, priority, duedate,
        }) {
          const project = findProject(projectId);
          const index = project[0].tasks.findIndex((task) => task._id == taskId);
          project[0].tasks[index].name = name;
          project[0].tasks[index].description = description;
          project[0].tasks[index].priority = priority;
          project[0].tasks[index].duedate = duedate;

          (0, _localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);
        }

        return {
          createProject,
          findProject,
          removeProject,
          findAllProjects,
          createTask,
          removeTask,
          updateTask,
          deleteProject,
          updateProject,
        };
      };

      const crud = CRUD();
      /***/ }),

    /***/ './src/asset/check.svg':
    /*! *****************************!*\
  !*** ./src/asset/check.svg ***!
  \**************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}7ff5849d3cfc32e285b2.svg`;
      /***/ }),

    /***/ './src/asset/dots-horizontal.svg':
    /*! ***************************************!*\
  !*** ./src/asset/dots-horizontal.svg ***!
  \************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}469afb7a3c40cc9d6606.svg`;
      /***/ }),

    /***/ './src/asset/pencil-outline.svg':
    /*! **************************************!*\
  !*** ./src/asset/pencil-outline.svg ***!
  \************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}63dbb989de6465972923.svg`;
      /***/ }),

    /***/ './src/asset/trash-can-outline.svg':
    /*! *****************************************!*\
  !*** ./src/asset/trash-can-outline.svg ***!
  \**************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}a69e820bb0c216e93dd2.svg`;
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			id: moduleId,
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = __webpack_modules__;
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/compat get default export */
  /** *** */ 	(() => {
    /** *** */ 		// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 		__webpack_require__.n = (module) => {
      /** *** */ 			const getter = module && module.__esModule
      /** *** */ 				? () => (module.default)
      /** *** */ 				: () => (module);
      /** *** */ 			__webpack_require__.d(getter, { a: getter });
      /** *** */ 			return getter;
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/global */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.g = (function () {
      /** *** */ 			if (typeof globalThis === 'object') return globalThis;
      /** *** */ 			try {
        /** *** */ 				return this || new Function('return this')();
        /** *** */ 			} catch (e) {
        /** *** */ 				if (typeof window === 'object') return window;
        /** *** */ 			}
      /** *** */ 		}());
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/publicPath */
  /** *** */ 	(() => {
    /** *** */ 		let scriptUrl;
    /** *** */ 		if (__webpack_require__.g.importScripts) scriptUrl = `${__webpack_require__.g.location}`;
    /** *** */ 		const { document } = __webpack_require__.g;
    /** *** */ 		if (!scriptUrl && document) {
      /** *** */ 			if (document.currentScript)
      /** *** */ 				{ scriptUrl = document.currentScript.src; }
      /** *** */ 			if (!scriptUrl) {
        /** *** */ 				const scripts = document.getElementsByTagName('script');
        /** *** */ 				if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
        /** *** */ 			}
      /** *** */ 		}
    /** *** */ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /** *** */ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /** *** */ 		if (!scriptUrl) throw new Error('Automatic publicPath is not supported in this browser');
    /** *** */ 		scriptUrl = scriptUrl.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
    /** *** */ 		__webpack_require__.p = scriptUrl;
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/jsonp chunk loading */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.b = document.baseURI || self.location.href;
    /** *** */
    /** *** */ 		// object to store loaded and loading chunks
    /** *** */ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
    /** *** */ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /** *** */ 		const installedChunks = {
      /** *** */ 			main: 0,
      /** *** */ 		};
    /** *** */
    /** *** */ 		// no chunk on demand loading
    /** *** */
    /** *** */ 		// no prefetching
    /** *** */
    /** *** */ 		// no preloaded
    /** *** */
    /** *** */ 		// no HMR
    /** *** */
    /** *** */ 		// no HMR manifest
    /** *** */
    /** *** */ 		// no on chunks loaded
    /** *** */
    /** *** */ 		// no jsonp function
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/nonce */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.nc = undefined;
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ './src/logic.js');
    /* harmony import */ const _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ './src/dom.js');
    /* harmony import */ const _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ './src/styles.css');

    const projects = _logic__WEBPACK_IMPORTED_MODULE_0__.crud.findAllProjects();
    (0, _dom__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(projects);
  })();
/** *** */ })();

// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw2Q0FBNkMsMkJBQTJCLGNBQWMsZUFBZSxHQUFHLFVBQVUsd0pBQXdKLHFCQUFxQixHQUFHLGdCQUFnQixrQkFBa0Isc0NBQXNDLGtDQUFrQyxtQkFBbUIsdUJBQXVCLEdBQUcsY0FBYyxvQkFBb0IsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsYUFBYSx1QkFBdUIsZ0JBQWdCLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLEdBQUcsZ0JBQWdCLHVCQUF1QixrQkFBa0IsZ0JBQWdCLEdBQUcsUUFBUSxxQkFBcUIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsK0JBQStCLHlCQUF5QixZQUFZLGtCQUFrQixpQkFBaUIsZUFBZSxHQUFHLDJFQUEyRSxnQ0FBZ0MsdUJBQXVCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLGNBQWMsMEJBQTBCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDJCQUEyQiw4QkFBOEIsdUJBQXVCLHVCQUF1QixzQkFBc0IsZUFBZSxHQUFHLFdBQVcsbUJBQW1CLGdCQUFnQixrQkFBa0IsY0FBYyx3QkFBd0IscUJBQXFCLHNCQUFzQixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxjQUFjLGtCQUFrQixjQUFjLEdBQUcsdUJBQXVCLGtCQUFrQixnQkFBZ0IsdUJBQXVCLEdBQUcsUUFBUSxvQkFBb0IsK0JBQStCLEdBQUcsbUJBQW1CLGdCQUFnQixHQUFHLG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsa0JBQWtCLHVCQUF1QixrQ0FBa0MsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsdUJBQXVCLEdBQUcsc0JBQXNCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixzQkFBc0IsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcscUJBQXFCLHVCQUF1QixhQUFhLGdCQUFnQiwyQkFBMkIsZ0NBQWdDLHVCQUF1QixlQUFlLHFCQUFxQixrQkFBa0IsR0FBRyx3QkFBd0IsZ0JBQWdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDBCQUEwQixtQkFBbUIsR0FBRyx5QkFBeUIsZ0JBQWdCLGlCQUFpQiwwQkFBMEIsR0FBRyxtRkFBbUYsdUJBQXVCLGtCQUFrQixjQUFjLGNBQWMsa0NBQWtDLHVCQUF1QiwrQ0FBK0Msd0JBQXdCLGlCQUFpQixnQkFBZ0IsMkJBQTJCLEdBQUcsV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtCQUFrQixnQkFBZ0IsR0FBRyxvQkFBb0IseUJBQXlCLHNCQUFzQixHQUFHLCtDQUErQyxrQkFBa0IsaUJBQWlCLEdBQUcsOEJBQThCLHFCQUFxQixHQUFHLG1CQUFtQixrQkFBa0IsaUJBQWlCLEdBQUcsZUFBZSxzQkFBc0Isa0JBQWtCLGlCQUFpQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsYUFBYSxpQkFBaUIscUJBQXFCLEdBQUcsK0JBQStCLGtCQUFrQixxQkFBcUIsc0JBQXNCLGdDQUFnQyx1QkFBdUIscUJBQXFCLEdBQUcsWUFBWSwwQkFBMEIsNkJBQTZCLEdBQUcsYUFBYSx1QkFBdUIsNEJBQTRCLEdBQUcseUJBQXlCLGlCQUFpQix3QkFBd0IsZ0JBQWdCLHFCQUFxQixzQkFBc0IsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsVUFBVSxzQkFBc0IsR0FBRywwQkFBMEIsd0JBQXdCLHdCQUF3Qix1QkFBdUIsdUNBQXVDLEdBQUcsbUNBQW1DLGtCQUFrQixnQ0FBZ0MsdUJBQXVCLGdCQUFnQixHQUFHLG1CQUFtQix1QkFBdUIsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIsa0JBQWtCLGVBQWUsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsV0FBVyxtQkFBbUIsZ0JBQWdCLGdCQUFnQixxQkFBcUIsc0JBQXNCLG1DQUFtQyxzQkFBc0IsR0FBRyxpQkFBaUIsd0JBQXdCLGlCQUFpQixHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQiw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLG9CQUFvQixHQUFHLGdCQUFnQixrQkFBa0IsaUJBQWlCLEdBQUcsa0JBQWtCLDZEQUE2RCxvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQixjQUFjLDRCQUE0QiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRyw2QkFBNkIsdUJBQXVCLHFCQUFxQixHQUFHLG9DQUFvQyx1QkFBdUIsdUJBQXVCLDBCQUEwQix1QkFBdUIsR0FBRyxlQUFlLGdCQUFnQixpQkFBaUIsR0FBRyxxQkFBcUIsb0JBQW9CLG9CQUFvQixHQUFHLGFBQWEsc0JBQXNCLGtCQUFrQixHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxPQUFPLGlGQUFpRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFB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a0I7QUFDdEI7O0FBRUEsMENBQTBDLHFDQUFxQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpRUFBa0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25HQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ1M7QUFDbEI7O0FBRXRCLGlCQUFpQix3REFBb0I7QUFDckMscURBQWUsVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9jaGVjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCBhdXRvO1xcbiAgY29sb3I6ICMyMDIwMjA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlcixcXG4ubWFpbixcXG4ubWVudSB7XFxuICBwYWRkaW5nOiAwIDMuNXZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjRDM0Y7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRlciB1bCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBwYWRkaW5nOiAwIDAuMjVyZW1cXG59XFxuXFxubGkgaW1nIHtcXG4gIHdpZHRoOiAyMi41cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBmaWxsOiAjZmZmO1xcbn1cXG5cXG4udG9nZ2xlLW1lbnU6aG92ZXIsXFxuLmhvbWU6aG92ZXIsXFxuLmFkZC10YXNrOmhvdmVyLFxcbi5jb21wbGV0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjI1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyIC5hZGQtdGFzayB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICMyMzdjYWY7XFxuICB3aWR0aDogMS43NXJlbTtcXG4gIGhlaWdodDogMS43NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjM3Y2FmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5tZW51LmhpZGRlIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XFxufVxcblxcbi5tZW51IHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cyBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0cyB1bCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMnJlbTtcXG59XFxuXFxuLnByb2plY3RzIGxpIHtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdHMgbGkgaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZG90cy5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdHMgbGkgdWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjAyMDIwMzU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiA2O1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0cyBsaSB1bCBsaSB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuXFxuLnByb2plY3RzIGxpIHVsIGxpICsgbGkge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG59XFxuXFxuLnByb2plY3RzIGxpIHVsLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0cyBsaSB1bCBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi51cGRhdGUtdGFzay1mb3JtLFxcbi5hZGQtdGFzay1mb3JtLFxcbi51cGRhdGUtcHJvamVjdC1mb3JtLFxcbi5hZGQtcHJvamVjdC1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDI1dmg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMTVweCA1MHB4IDAgcmdiKDAgMCAwIC8gMzUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLFxcbi5idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuc2VsZWN0LFxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjA0MDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMjAyMDIwRDA7XFxufVxcblxcbnNlbGVjdCB7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiAge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxufVxcblxcbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI0RCNEMzRjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjAyMDIwMjU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjAyMDIwQTA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBvcHVwLWhpZGRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLnBvcHVwLWhpZGRlci5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLm1haW4uaGlkZGUge1xcbiAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmNoZWNrIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzIzN2NhZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbi5jaGVjayBpbWcge1xcbiAgd2lkdGg6IDAuNnJlbTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNoZWNrOmhvdmVyIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLnRhc2sgLnRhc2stbmFtZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50YXNrIC50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGNvbG9yOiAjMjAyMDIwQTA7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LFxcbi50YXNrLWR1ZWRhdGUge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFzayBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrIGltZzpob3ZlciB7XFxuICBmaWxsOiAjMjAyMDIwQTA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51cGRhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udXBkYXRlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtSkFBbUo7RUFDbkosZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBOzs7O0VBSUUsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNy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LGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnREFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IGF1dG87XFxuICBjb2xvcjogIzIwMjAyMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5tYWluLFxcbi5tZW51IHtcXG4gIHBhZGRpbmc6IDAgMy41dnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCNEMzRjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGVhZGVyIHVsIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHBhZGRpbmc6IDAgMC4yNXJlbVxcbn1cXG5cXG5saSBpbWcge1xcbiAgd2lkdGg6IDIyLjVweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZpbGw6ICNmZmY7XFxufVxcblxcbi50b2dnbGUtbWVudTpob3ZlcixcXG4uaG9tZTpob3ZlcixcXG4uYWRkLXRhc2s6aG92ZXIsXFxuLmNvbXBsZXRlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMjU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oZWFkZXIgLmFkZC10YXNrIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ucHJvZmlsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogIzIzN2NhZjtcXG4gIHdpZHRoOiAxLjc1cmVtO1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzdjYWY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tZW51IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLm1lbnUuaGlkZGUge1xcbiAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcXG59XFxuXFxuLm1lbnUgdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzIGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3RzIHVsIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAycmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgbGkge1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0cyBsaSBpbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kb3RzLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0cyBsaSB1bCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjAzNTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDY7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzIGxpIHVsIGxpIHtcXG4gIHdpZHRoOiA1cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgbGkgdWwgbGkgKyBsaSB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgbGkgdWwuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByb2plY3RzIGxpIHVsIGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnVwZGF0ZS10YXNrLWZvcm0sXFxuLmFkZC10YXNrLWZvcm0sXFxuLnVwZGF0ZS1wcm9qZWN0LWZvcm0sXFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogMjV2aDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm94LXNoYWRvdzogMCAxNXB4IDUwcHggMCByZ2IoMCAwIDAgLyAzNSUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24ge1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWluZm8sXFxuLmJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5zZWxlY3QsXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIwMjAyMDQwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICMyMDIwMjBEMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uICB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9c3VibWl0XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjREI0QzNGO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMDIwMjAyNTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjBBMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9wdXAtaGlkZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ucG9wdXAtaGlkZGVyLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ubWFpbi5oaWRkZSB7XFxuICBtYXJnaW4tbGVmdDogLTMwMHB4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjM3Y2FmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuLmNoZWNrIGltZyB7XFxuICB3aWR0aDogMC42cmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2s6aG92ZXIge1xcbiAgY29udGVudDogdXJsKC4vYXNzZXQvY2hlY2suc3ZnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4udGFzayAudGFzay1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2sgLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6ICMyMDIwMjBBMDtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHksXFxuLnRhc2stZHVlZGF0ZSB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50YXNrIGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2sgaW1nOmhvdmVyIHtcXG4gIGZpbGw6ICMyMDIwMjBBMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVwZGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51cGRhdGUuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyBjcnVkIH0gZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2Fzc2V0L3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgRGVsZXRlIGZyb20gJy4vYXNzZXQvdHJhc2gtY2FuLW91dGxpbmUuc3ZnJztcbmltcG9ydCBEb3RzIGZyb20gJy4vYXNzZXQvZG90cy1ob3Jpem9udGFsLnN2Zyc7XG5cbihmdW5jdGlvbiBkb20oKSB7XG5cdGhhbmRsZVRvZGF5KCk7XG5cblx0Y29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG5cdGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2RheSk7XG5cblx0Y29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuXHRhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkVGFzayk7XG5cblx0Y29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbmNlbCcpO1xuXHRjYW5jZWwuZm9yRWFjaChjID0+IGMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWwpKTtcblxuXHRjb25zdCB0b2dnbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51Jyk7XG5cdHRvZ2dsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVNZW51KTtcblxuXHRjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcblx0YWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkUHJvamVjdCk7XG5cblx0Y29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuXHRpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUluYm94KTtcblxuXHRjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG5cdHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kYXkpO1xuXG5cdGNvbnN0IHVwY29tbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBjb21taW5nXCIpO1xuXHR1cGNvbW1pbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVVcGNvbW1pbmcpO1xuXG5cdGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtIGZvcm1cIik7XG5cdGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdFRhc2spO1xuXG5cdGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1mb3JtIGZvcm1cIik7XG5cdGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdFByb2plY3QpO1xuXG5cdGNvbnN0IGhpZGRlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaGlkZGVyJyk7XG5cdGhpZGRlUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYW5jZWwpO1xufSkoKTtcblxuZnVuY3Rpb24gaGFuZGxlQWRkVGFzaygpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWhpZGRlcicpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRQcm9qZWN0KCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybSBmb3JtIGlucHV0JykuZm9jdXMoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWhpZGRlcicpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDYW5jZWwoZSkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLXRhc2stZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLXByb2plY3QtZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaGlkZGVyJykuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cyBsaSB1bCcpPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdHMnKT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZU1lbnUoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUluYm94KCkge1xuXHRkaXNwbGF5VGFza3MoXCJJbmJveFwiLCBbXSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9kYXkoKSB7XG5cdGRpc3BsYXlUYXNrcyhcIlRvZGF5XCIsIFtdKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVXBjb21taW5nKCkge1xuXHRkaXNwbGF5VGFza3MoXCJVcGNvbW1pbmdcIiwgW10pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXRQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybSBmb3JtJykuZWxlbWVudHM7XG4gIGNvbnN0IHByb2plY3RJZCA9IGNydWQuY3JlYXRlUHJvamVjdChpbnB1dHMucHJvamVjdE5hbWUudmFsdWUpO1xuXG4gIGFkZFByb2plY3QocHJvamVjdElkLCBpbnB1dHMucHJvamVjdE5hbWUudmFsdWUpO1xuICByZXNldEZvcm0oZSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdElkLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCBsaUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJfaWRcIiwgcHJvamVjdElkKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVQcm9qZWN0VGFza3MocHJvamVjdElkKSk7XG4gIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICBjb25zdCBkb3RzID0gbmV3IEltYWdlKCk7XG4gIGRvdHMuY2xhc3NMaXN0LmFkZChcImRvdHNcIik7XG4gIGRvdHMuc3JjID0gRG90cztcbiAgbGkuYXBwZW5kQ2hpbGQoZG90cyk7XG4gIGRvdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZVVwZGF0ZShlLCBsaSkpO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzIHVsJykuYXBwZW5kQ2hpbGQobGkpO1xuXG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IGRvdHMuY2xhc3NMaXN0LmFkZChcInNob3dcIikpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IGRvdHMuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikpO1xuXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtIC5wcm9qZWN0LWluZm8gc2VsZWN0Jyk7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3RJZCk7XG4gIG9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcbiAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShlLCBsaSkge1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEljb24uc3JjID0gRWRpdDtcbiAgY29uc3QgZWRpdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBlZGl0VGV4dC5pbm5lclRleHQgPSBcIkVkaXRcIjtcbiAgZWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIGVkaXQuYXBwZW5kQ2hpbGQoZWRpdFRleHQpO1xuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRWRpdFByb2plY3QoZSwgbGkpKTtcblxuICBjb25zdCBkZWxldGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBkZWxldGVJY29uLnNyYyA9IERlbGV0ZTtcbiAgY29uc3QgZGVsZXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGRlbGV0ZVRleHQuaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlUC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgZGVsZXRlUC5hcHBlbmRDaGlsZChkZWxldGVUZXh0KTtcbiAgZGVsZXRlUC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZURlbGV0ZVByb2plY3QoZSwgbGkpKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmFwcGVuZENoaWxkKGVkaXQpO1xuICB1bC5hcHBlbmRDaGlsZChkZWxldGVQKTtcblxuICBsaS5hcHBlbmRDaGlsZCh1bCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cyBsaSB1bCcpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaGlkZGVyJykuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3QoZSwgbGkpIHtcbiAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1wcm9qZWN0LWZvcm0gZm9ybScpLmVsZW1lbnRzO1xuICBpbnB1dHMucHJvamVjdE5hbWUudmFsdWUgPSBsaS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gIGhhbmRsZUVkaXRQcm9qZWN0Rm9ybShsaSk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVkaXRQcm9qZWN0Rm9ybShsaSkge1xuICBjb25zdCB1cGRhdGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBkYXRlLXByb2plY3QtZm9ybSBmb3JtXCIpO1xuXHR1cGRhdGVQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHVwZGF0ZVByb2plY3QoZSwgbGkpKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1wcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1wcm9qZWN0LWZvcm0gZm9ybSBpbnB1dCcpLmZvY3VzKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1oaWRkZXInKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdChlLCBsaSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtcHJvamVjdC1mb3JtIGZvcm0nKS5lbGVtZW50cztcbiAgY3J1ZC51cGRhdGVQcm9qZWN0KGxpLmdldEF0dHJpYnV0ZSgnX2lkJyksIGlucHV0cy5wcm9qZWN0TmFtZS52YWx1ZSk7XG4gIGxpLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IGlucHV0cy5wcm9qZWN0TmFtZS52YWx1ZTtcbiAgaGFuZGxlQ2FuY2VsKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVByb2plY3QoZSwgbGkpIHtcbiAgY3J1ZC5kZWxldGVQcm9qZWN0KGxpLmdldEF0dHJpYnV0ZSgnLl9pZCcpKTtcblx0aGFuZGxlVG9kYXkoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzIHVsJykucmVtb3ZlQ2hpbGQobGkpO1xuICBoYW5kbGVDYW5jZWwoKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdFRhc2tzKHByb2plY3RJZCkge1xuICBjb25zdCBwcm9qZWN0ID0gY3J1ZC5maW5kUHJvamVjdChwcm9qZWN0SWQpWzBdO1xuICBwcm9qZWN0ICYmIGRpc3BsYXlUYXNrcyhwcm9qZWN0Lm5hbWUsIHByb2plY3QudGFza3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdE5hbWUsIHRhc2tzKSB7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5cdGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0aDIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG5cbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGVuZFRhc2sodGFzaykpKTtcblxuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblx0bWFpbi5yZXBsYWNlQ2hpbGRyZW4obWFpbkNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRhc2sodGFzaykge1xuICBjb25zdCB0YXNrQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQ29udC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIHRhc2tDb250LnNldEF0dHJpYnV0ZSgnX2lkJywgdGFzay5faWQpO1xuXG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG5cbiAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0luZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICB0YXNrTmFtZS5pbm5lclRleHQgPSB0YXNrLm5hbWU7XG4gIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzYy5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG5cbiAgY29uc3QgdGFza0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tEdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlZGF0ZScpO1xuICB0YXNrRHVlZGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZWRhdGU7XG4gIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tEdWVkYXRlKTtcblxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5Jyk7XG4gIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSB0YXNrLnByaW9yaXR5O1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGRhdGUuY2xhc3NMaXN0LmFkZCgndXBkYXRlJyk7XG4gIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdC5zcmMgPSBFZGl0O1xuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlRWRpdFRhc2sodGFzaywgdGFza0luZm8pKTtcbiAgdXBkYXRlLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gIGNvbnN0IGRlbGV0ZVQgPSBuZXcgSW1hZ2UoKTtcbiAgZGVsZXRlVC5zcmMgPSBEZWxldGU7XG4gIGRlbGV0ZVQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVEZWxldGVUYXNrKHRhc2tDb250LCB0YXNrLnByb2plY3RJZCkpO1xuICB1cGRhdGUuYXBwZW5kQ2hpbGQoZGVsZXRlVCk7XG5cbiAgdGFza0NvbnQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICB0YXNrQ29udC5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gIHRhc2tDb250LmFwcGVuZENoaWxkKHVwZGF0ZSk7XG5cbiAgdGFza0NvbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdXBkYXRlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpKTtcbiAgdGFza0NvbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB1cGRhdGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikpO1xuXG4gIHJldHVybiB0YXNrQ29udDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKHByb2plY3RzKSB7XG4gIHByb2plY3RzLmZvckVhY2gocHJvaiA9PiBhZGRQcm9qZWN0KHByb2ouX2lkLCBwcm9qLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3VibWl0VGFzayhlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0gZm9ybScpLmVsZW1lbnRzO1xuICBjb25zdCB0YXNrID0gY3J1ZC5jcmVhdGVUYXNrKFxuICAgIGlucHV0cy50YXNrTmFtZS52YWx1ZSxcblx0XHRpbnB1dHMuZGVzY3JpcHRpb24udmFsdWUsXG5cdFx0aW5wdXRzLnByb2plY3QudmFsdWUsXG5cdFx0aW5wdXRzLnByaW9yaXR5LnZhbHVlLFxuXHRcdGlucHV0cy5kdWVkYXRlLnZhbHVlXG4gICk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFwcGVuZFRhc2sodGFzaykpO1xuICByZXNldEZvcm0oZSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybShlKSB7XG4gIGUudGFyZ2V0LnJlc2V0KCk7XG4gIGhhbmRsZUNhbmNlbCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFZGl0VGFzayh0YXNrLCB0YXNrSW5mbykge1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLXRhc2stZm9ybSBmb3JtJykuZWxlbWVudHM7XG4gIGlucHV0cy50YXNrTmFtZS52YWx1ZSA9IHRhc2submFtZTtcbiAgaW5wdXRzLmRlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgaW5wdXRzLnByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgaW5wdXRzLmR1ZWRhdGUudmFsdWUgPSB0YXNrLmR1ZWRhdGU7XG4gIGhhbmRsZVVwZGF0ZVRhc2sodGFzaywgdGFza0luZm8pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVVcGRhdGVUYXNrKHRhc2ssIHRhc2tJbmZvKSB7XG4gIGNvbnN0IHVwZGF0ZVRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGUtdGFzay1mb3JtIGZvcm1cIik7XG5cdHVwZGF0ZVRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4gdXBkYXRlVGFzayhlLCB0YXNrLCB0YXNrSW5mbykpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLXRhc2stZm9ybScpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaGlkZGVyJykuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2soZSwgdGFzaywgdGFza0luZm8pIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLXRhc2stZm9ybSBmb3JtJykuZWxlbWVudHM7XG4gIHRhc2tJbmZvLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IGlucHV0cy50YXNrTmFtZS52YWx1ZTtcbiAgdGFza0luZm8uY2hpbGRyZW5bMV0uaW5uZXJUZXh0ID0gaW5wdXRzLmRlc2NyaXB0aW9uLnZhbHVlO1xuICB0YXNrSW5mby5jaGlsZHJlblsyXS5pbm5lclRleHQgPSBpbnB1dHMuZHVlZGF0ZS52YWx1ZTtcbiAgdGFza0luZm8uY2hpbGRyZW5bM10uaW5uZXJUZXh0ID0gaW5wdXRzLnByaW9yaXR5LnZhbHVlO1xuICBjcnVkLnVwZGF0ZVRhc2sodGFzay5wcm9qZWN0SWQsIHRhc2suX2lkLCB7XG4gICAgbmFtZTogaW5wdXRzLnRhc2tOYW1lLnZhbHVlLFxuXHRcdGRlc2NyaXB0aW9uOiBpbnB1dHMuZGVzY3JpcHRpb24udmFsdWUsXG5cdFx0cHJpb3JpdHk6IGlucHV0cy5wcmlvcml0eS52YWx1ZSxcblx0XHRkdWVkYXRlOiBpbnB1dHMuZHVlZGF0ZS52YWx1ZVxuICB9KTtcbiAgcmVzZXRGb3JtKGUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUYXNrKHRhc2ssIHByb2plY3RJZCkge1xuICBjcnVkLnJlbW92ZVRhc2socHJvamVjdElkLCB0YXNrLmdldEF0dHJpYnV0ZSgnLl9pZCcpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykucmVtb3ZlQ2hpbGQodGFzayk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9OyIsImNvbnN0IHJlYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c19scycpKTtcbn07XG5cbmNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9ICh0YXNrcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNfbHMnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufTtcblxuZXhwb3J0IHsgcmVhZExvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlIH07IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyByZWFkTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IENSVUQgPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IHJlYWRMb2NhbFN0b3JhZ2UoKTtcbiAgcHJvamVjdHMgPSBwcm9qZWN0cyA/IHByb2plY3RzIDogW107XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBfaWQgPSB1dWlkdjQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gIHtcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lOiBwcm9qZWN0TmFtZSxcbiAgICAgICAgdGFza3M6IFtdLFxuICAgIH1cbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gICAgcmV0dXJuIF9pZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3RJZCkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIocHJvaiA9PiBwcm9qLl9pZCA9PSBwcm9qZWN0SWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvaiA9PiBwcm9qLl9pZCA9PSBwcm9qZWN0SWQpO1xuICAgIGlmIChwcm9qZWN0SW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0Ll9pZCA9PSBwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChwcm9qZWN0SWQsIG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RbMF0ubmFtZSA9IG5hbWU7IFxuXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3RJZCwgcHJpb3JpdHksIGR1ZWRhdGUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgX2lkOiB1dWlkdjQoKSxcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHByb2plY3RJZCxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgZHVlZGF0ZSxcbiAgICB9XG4gICAgcHJvamVjdFswXS50YXNrcy5wdXNoKHRhc2spO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gICAgcmV0dXJuICh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2socHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RbMF0udGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5faWQgPT0gdGFza0lkKTtcbiAgICBwcm9qZWN0WzBdLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhc2socHJvamVjdElkLCB0YXNrSWQsIHtuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZWRhdGV9KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0WzBdLnRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suX2lkID09IHRhc2tJZCk7XG4gICAgcHJvamVjdFswXS50YXNrc1tpbmRleF0ubmFtZSA9IG5hbWU7XG4gICAgcHJvamVjdFswXS50YXNrc1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBwcm9qZWN0WzBdLnRhc2tzW2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHByb2plY3RbMF0udGFza3NbaW5kZXhdLmR1ZWRhdGUgPSBkdWVkYXRlOyAgICBcblxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZmluZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kQWxsUHJvamVjdHMsXG4gICAgY3JlYXRlVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIHVwZGF0ZVRhc2ssXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0XG4gIH1cbn1cblxuY29uc3QgY3J1ZCA9IENSVUQoKTtcbmV4cG9ydCB7IGNydWQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcnVkIH0gZnJvbSAnLi9sb2dpYyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHByb2plY3RzID0gY3J1ZC5maW5kQWxsUHJvamVjdHMoKTtcbmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
