'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var idiom = function idiom(languages) {
    if (!languages.default) {
        throw '[idiom.js] You need to set a default language';
    }

    return function () {
        var currentLang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
        return {
            get currentLanguage() {
                return !languages[currentLang] ? 'default' : currentLang;
            },
            get languages() {
                return Object.keys(languages);
            },
            extends: function _extends(lib) {
                var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentLanguage;

                if (!languages[name]) {
                    languages[name] = _extends2({}, lib);
                } else {
                    languages[name] = _extends2({}, languages[name], lib);
                }
            },
            text: function text(key) {
                var lib = languages[this.currentLanguage];

                if (!lib[key]) {
                    throw '[idiom.js] Any match for key: \'' + key + '\'.';
                }

                return lib[key];
            }
        };
    };
};

exports.default = idiom;