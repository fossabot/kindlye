import styled, { css } from 'styled-components';
import * as React from 'react';
import React__default from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgAirplane(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "airplane_svg__ionicon",
    viewBox: "0 0 512 512"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M186.62 464H160a16 16 0 01-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 01-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 000-.15 14.82 14.82 0 01-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0113.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05 97.32-1.44-64.44-142A16 16 0 01160 48h26.91a25 25 0 0119.35 9.8l125.05 152 57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16-14.93 6.6-34.85 9.94-59.21 9.94-2.68 0-14.37-.08-18.66-.31l-57.76-1.54-125.36 152a25 25 0 01-19.32 9.75z"
  })));
}

// @ts-nocheck
var BORDER_COLOR = "#282424";
var fixedStyle = css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 50\n"], ["\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 50\n"])));
var Navbar = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid ", ";\n    background: #fff;\n    ", "\n"], ["\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid ", ";\n    background: #fff;\n    ", "\n"])), BORDER_COLOR, function (props) { return (props.fixed ? fixedStyle : ""); });
var Action = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: none;\n    background-color: #fff;\n    width: 50px;\n    transition: background-color 0.5s;\n    svg {\n        width: 23px;\n    }\n    &:hover {\n        background-color: #000;\n        svg {\n            stroke: #fff;\n        }\n    }\n"], ["\n    border: none;\n    background-color: #fff;\n    width: 50px;\n    transition: background-color 0.5s;\n    svg {\n        width: 23px;\n    }\n    &:hover {\n        background-color: #000;\n        svg {\n            stroke: #fff;\n        }\n    }\n"])));
var StatuBar = function (_a) {
    var className = _a.className, children = _a.children;
    return (React__default.createElement("div", { className: className }, children));
};
var ActionBar = function (_a) {
    var className = _a.className, children = _a.children;
    return (React__default.createElement("div", { className: className }, children));
};
var StyledStatuBar = styled(StatuBar)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #000;\n    padding: 3px 18px;\n    height: 19px;\n    .statu-item {\n        margin-left: 10px;\n        & svg{\n    width: 18px;\n\n        }\n    }\n    .time {\n        transform: scaleY(-50%);\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #000;\n    padding: 3px 18px;\n    height: 19px;\n    .statu-item {\n        margin-left: 10px;\n        & svg{\n    width: 18px;\n\n        }\n    }\n    .time {\n        transform: scaleY(-50%);\n    }\n"])));
var StyledActionBar = styled(ActionBar)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    height: 50px;\n"], ["\n    display: flex;\n    height: 50px;\n"])));
/**
 * Navbar组件
 * @author rivertwilight
 * @param {string} deviceName 设备名称
 */
var index$1 = (function (_a) {
    var _b = _a.deviceName, deviceName = _b === void 0 ? "My Kindle" : _b, _c = _a.autoClose, autoClose = _c === void 0 ? true : _c;
    return (React__default.createElement(Navbar, { fixed: autoClose },
        React__default.createElement(StyledStatuBar, null,
            React__default.createElement("div", { className: "statu-item" }, deviceName),
            React__default.createElement("div", { className: "statu-item" },
                React__default.createElement(SvgAirplane, null),
                React__default.createElement("span", { className: "time" }, "15:00 AM"))),
        React__default.createElement(StyledActionBar, null,
            React__default.createElement(Action, null,
                React__default.createElement(SvgAirplane, null),
                "Home"),
            React__default.createElement(Action, null,
                React__default.createElement(SvgAirplane, null),
                "Home"),
            React__default.createElement(Action, null,
                React__default.createElement(SvgAirplane, null),
                "Home"))));
});
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var Typography = styled.article(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 15px;\n"], ["\n    padding: 15px;\n"])));
var index = (function (_a) {
    var children = _a.children;
    return React__default.createElement(Typography, null, children);
});
var templateObject_1;

export { index$1 as Navbar, index as Typography };
