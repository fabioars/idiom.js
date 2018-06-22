'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (languages) {
    if (!languages.default) {
        throw '[idiom.js] You need to set a default language';
    }

    text.prototype.getLanguages = function () {
        return languages.keys();
    };

    return function (currentLang) {
        return {
            text: function text(key) {}
        };
    };
};