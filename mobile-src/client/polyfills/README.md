Polyfills
=========

The Polyfills defined here are to make sure that certain functions are defined by the browser.

Meteor does a good job of supporting a wide range of functionality and backporting it. However,
if there is a function that exists in ES5 or ES6 (ecmascript 6), but is not widely supported in
all browser or backported by Meteor in the es5-shim or ecmascript packages, feel free to add
a polyfill file here.