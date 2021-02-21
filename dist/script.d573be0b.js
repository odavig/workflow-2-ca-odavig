// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
<<<<<<< Updated upstream
=======
/*
* OK, time for something NEW...
*
* you may self destruct these comments when you have completed the challenge 🕹 if you choose to accept 🤖
*
* you can code! :-) no doubt.
* SOOOoooo now to take things to next level, lets talk Design Patterns.
* Which we will cover more in next semester, but as i always say "there is no time like the present" so here we go
*
* I want you to think of you code as modules and in also in a functional way. think of all the different peices of code you have and break them down into single purpose functions(where possible).
*
* Design Pattern 1
* The revealing module pattern
*
* The basic idea is you can without having to use ES6 module imports or requires and bundlers (because they are not yet fully supported in ALL browsers yet (IE10,11...)),
* you can have code that is broken down into modules and nicely encapsulated in one blobal "app" object namespaced to your website or app or section of app.
*
* - take charge of global variables, create encapsulation
* - break up you code modules,
* - these modules can be single purpose functions, or multiple functions that are related to one feature exporeted as an object.
* - these functions can be re-usable
* - functions that you will be able to call from any where in your app
*   A minimal code example: https://github.com/mannuelf/js-scratch-pad/tree/master/src/revealing-module-pattern
*   - in my example i have app , but I could have called it whatever
*   - I have a generic fetch function doing the API call, if I were smarter I would make it so generic that I can call that method from any module and return what ever data I asked of it via the argument passed in (api endpoint url)
*   - it creates nice closures so you dont have global variables, it will give you a sense of organistaion, control.
*
*   so in our checkout app at superbalist we had modules like:
*   - addreess.js
*   - googlemaps.js
*   - returns.js
*   - forms.js
*   ..etc
*
*   hopefully you can see the benefit, now this is great for vanilla js apps like this one you built, no react/vue/insert-framework.
*
* Now there is much more to this pattern than I have explained here and demo'd  ☝️  there of course:
* some light reading: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
*/
>>>>>>> Stashed changes
var start = document.querySelector("#start");
var banner = document.querySelector("#banner");
var bannerText = document.querySelector("#bannerText");
var history = document.querySelector("#history");
var changeSlide = document.querySelector("#changeSlide");
var info = document.querySelector("#info");
var apollo = document.querySelector("#apollo");
var hubble = document.querySelector("#hubble");
var ongoing = document.querySelector("#ongoing");
var prevSlideBtn = document.querySelector("#prevSlideBtn");
var nextSlideBtn = document.querySelector("#nextSlideBtn");
var openNavBtn = document.querySelector("#openNav");
var closeNavBtn = document.querySelector("#closeNav");
var nav = document.querySelector("#nav");
var header = document.querySelector("#header");
var slides = [history, apollo, hubble, ongoing];
var bannerSlides = [banner, bannerText];
slides.unshift(bannerSlides);
start.addEventListener("click", showSlides);
var slideCounter = 1;

function showSlides() {
  for (var i = 0; i < bannerSlides.length; i++) {
    bannerSlides[i].style.display = "none";
  }

  changeSlide.style.display = "block";
  info.style.display = "block";
  slides[slideCounter].style.display = "grid";
}

prevSlideBtn.addEventListener("click", showPreSlide);

function showPreSlide() {
  if (slideCounter <= 1) {
    for (var i = 0; i < bannerSlides.length; i++) {
      bannerSlides[i].style.display = "block";
      slides[slideCounter].style.display = "none";
    }

    changeSlide.style.display = "none";
    info.style.display = "none";
  } else if (slideCounter > 1) {
    slides[slideCounter].style.display = "none";
    slideCounter--;
    console.log(slideCounter);
    slides[slideCounter].style.display = "grid";
    nextSlideBtn.style.display = "inline";
  }
}

nextSlideBtn.addEventListener("click", showNextSlide);

function showNextSlide() {
  if (slideCounter >= 3) {
    nextSlideBtn.style.display = "none";
  }

  slides[slideCounter].style.display = "none";
  slideCounter++;
  console.log(slideCounter);
  slides[slideCounter].style.display = "grid";
}

openNav.addEventListener("click", openNavFunc);
closeNav.addEventListener("click", closeNavFunc);

function openNavFunc() {
  nav.style.display = "block";
  header.style.backgroundColor = "white";
  header.style.height = "100%";
}

function closeNavFunc() {
  nav.style.display = "none";
  header.style.backgroundColor = "white";
  header.style.height = "0%";
}
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59812" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map