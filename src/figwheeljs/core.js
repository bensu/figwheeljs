goog.provide('figwheeljs.core');

goog.require('goog.dom');

figwheeljs.core.tagline = "Figwheel is the new way to develop js";

figwheeljs.appNode = document.getElementById('app');

goog.dom.setTextContent(figwheeljs.appNode, figwheeljs.core.tagline);

console.log(figwheeljs.appNode);
