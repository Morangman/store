/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/client/plugins/auxiliary-rater/rater.min.js":
/*!***************************************************************!*\
  !*** ./resources/client/plugins/auxiliary-rater/rater.min.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($, window) {
  $.fn.textWidth = function () {
    var html_calc = $("<span>" + $(this).html() + "</span>");
    html_calc.css("font-size", $(this).css("font-size")).hide();
    html_calc.prependTo("body");
    var width = html_calc.width();
    html_calc.remove();

    if (width == 0) {
      var total = 0;
      $(this).eq(0).children().each(function () {
        total += $(this).textWidth();
      });
      return total;
    }

    return width;
  };

  $.fn.textHeight = function () {
    var html_calc = $("<span>" + $(this).html() + "</span>");
    html_calc.css("font-size", $(this).css("font-size")).hide();
    html_calc.prependTo("body");
    var height = html_calc.height();
    html_calc.remove();
    return height;
  };

  Array.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  String.prototype.getCodePointLength = function () {
    return this.length - this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length + 1;
  };

  String.fromCodePoint = function () {
    var chars = Array.prototype.slice.call(arguments);

    for (var i = chars.length; i-- > 0;) {
      var n = chars[i] - 65536;
      if (n >= 0) chars.splice(i, 1, 55296 + (n >> 10), 56320 + (n & 1023));
    }

    return String.fromCharCode.apply(null, chars);
  };

  $.fn.rate = function (options) {
    if (options === undefined || _typeof(options) === "object") {
      return this.each(function () {
        if (!$.data(this, "rate")) {
          $.data(this, "rate", new Rate(this, options));
        }
      });
    } else if (typeof options === "string") {
      var args = arguments;
      var returns;
      this.each(function () {
        var instance = $.data(this, "rate");

        if (instance instanceof Rate && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }

        if (options === "destroy") {
          $(instance.element).off();
          $.data(this, "rate", null);
        }
      });
      return returns !== undefined ? returns : this;
    }
  };

  function Rate(element, options) {
    this.element = element;
    this.settings = $.extend({}, $.fn.rate.settings, options);
    this.set_faces = {};
    this.build();
  }

  Rate.prototype.build = function () {
    this.layers = {};
    this.value = 0;
    this.raise_select_layer = false;

    if (this.settings.initial_value) {
      this.value = this.settings.initial_value;
    }

    if ($(this.element).attr("data-rate-value")) {
      this.value = $(this.element).attr("data-rate-value");
    }

    var selected_width = this.value / this.settings.max_value * 100;

    if (typeof this.settings.symbols[this.settings.selected_symbol_type] === "string") {
      var symbol = this.settings.symbols[this.settings.selected_symbol_type];
      this.settings.symbols[this.settings.selected_symbol_type] = {};
      this.settings.symbols[this.settings.selected_symbol_type]["base"] = symbol;
      this.settings.symbols[this.settings.selected_symbol_type]["selected"] = symbol;
      this.settings.symbols[this.settings.selected_symbol_type]["hover"] = symbol;
    }

    var base_layer = this.addLayer("base-layer", 100, this.settings.symbols[this.settings.selected_symbol_type]["base"], true);
    var select_layer = this.addLayer("select-layer", selected_width, this.settings.symbols[this.settings.selected_symbol_type]["selected"], true);
    var hover_layer = this.addLayer("hover-layer", 0, this.settings.symbols[this.settings.selected_symbol_type]["hover"], false);
    this.layers["base_layer"] = base_layer;
    this.layers["select_layer"] = select_layer;
    this.layers["hover_layer"] = hover_layer;
    $(this.element).on("mousemove", $.proxy(this.hover, this));
    $(this.element).on("click", $.proxy(this.select, this));
    $(this.element).on("mouseleave", $.proxy(this.mouseout, this));
    $(this.element).css({
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none"
    });

    if (this.settings.hasOwnProperty("update_input_field_name")) {
      this.settings.update_input_field_name.val(this.value);
    }
  };

  Rate.prototype.addLayer = function (layer_name, visible_width, symbol, visible) {
    var layer_body = "<div>";

    for (var i = 0; i < this.settings.max_value; i++) {
      if (Array.isArray(symbol)) {
        if (this.settings.convert_to_utf8) {
          symbol[i] = String.fromCodePoint(symbol[i]);
        }

        layer_body += "<span>" + symbol[i] + "</span>";
      } else {
        if (this.settings.convert_to_utf8) {
          symbol = String.fromCodePoint(symbol);
        }

        layer_body += "<span>" + symbol + "</span>";
      }
    }

    layer_body += "</div>";
    var layer = $(layer_body).addClass("rate-" + layer_name).appendTo(this.element);
    $(layer).css({
      width: visible_width + "%",
      height: $(layer).children().eq(0).textHeight(),
      overflow: "hidden",
      position: "absolute",
      top: 0,
      display: visible ? "block" : "none",
      "white-space": "nowrap"
    });
    $(this.element).css({
      width: $(layer).textWidth() + "px",
      height: $(layer).height(),
      position: "relative",
      cursor: this.settings.cursor
    });
    return layer;
  };

  Rate.prototype.updateServer = function () {
    if (this.settings.url != undefined) {
      $.ajax({
        url: this.settings.url,
        type: this.settings.ajax_method,
        data: $.extend({}, {
          value: this.getValue()
        }, this.settings.additional_data),
        success: $.proxy(function (data) {
          $(this.element).trigger("updateSuccess", [data]);
        }, this),
        error: $.proxy(function (jxhr, msg, err) {
          $(this.element).trigger("updateError", [jxhr, msg, err]);
        }, this)
      });
    }
  };

  Rate.prototype.getValue = function () {
    return this.value;
  };

  Rate.prototype.hover = function (ev) {
    var pad = parseInt($(this.element).css("padding-left").replace("px", ""));
    var x = ev.pageX - $(this.element).offset().left - pad;
    var val = this.toValue(x, true);

    if (val != this.value) {
      this.raise_select_layer = false;
    }

    if (!this.raise_select_layer && !this.settings.readonly) {
      var visible_width = this.toWidth(val);
      this.layers.select_layer.css({
        display: "none"
      });

      if (!this.settings.only_select_one_symbol) {
        this.layers.hover_layer.css({
          width: visible_width + "%",
          display: "block"
        });
      } else {
        var index_value = Math.floor(val);
        this.layers.hover_layer.css({
          width: "100%",
          display: "block"
        });
        this.layers.hover_layer.children("span").css({
          visibility: "hidden"
        });
        this.layers.hover_layer.children("span").eq(index_value != 0 ? index_value - 1 : 0).css({
          visibility: "visible"
        });
      }
    }
  };

  Rate.prototype.select = function (ev) {
    if (!this.settings.readonly) {
      var old_value = this.getValue();
      var pad = parseInt($(this.element).css("padding-left").replace("px", ""));
      var x = ev.pageX - $(this.element).offset().left - pad;
      var selected_width = this.toWidth(this.toValue(x, true));
      this.setValue(this.toValue(selected_width));
      this.raise_select_layer = true;
    }
  };

  Rate.prototype.mouseout = function () {
    this.layers.hover_layer.css({
      display: "none"
    });
    this.layers.select_layer.css({
      display: "block"
    });
  };

  Rate.prototype.toWidth = function (val) {
    return val / this.settings.max_value * 100;
  };

  Rate.prototype.toValue = function (width, in_pixels) {
    var val;

    if (in_pixels) {
      val = width / this.layers.base_layer.textWidth() * this.settings.max_value;
    } else {
      val = width / 100 * this.settings.max_value;
    }

    var temp = val / this.settings.step_size;

    if (temp - Math.floor(temp) < 5e-5) {
      val = Math.round(val / this.settings.step_size) * this.settings.step_size;
    }

    val = Math.ceil(val / this.settings.step_size) * this.settings.step_size;
    val = val > this.settings.max_value ? this.settings.max_value : val;
    return val;
  };

  Rate.prototype.getElement = function (layer_name, index) {
    return $(this.element).find(".rate-" + layer_name + " span").eq(index - 1);
  };

  Rate.prototype.getLayers = function () {
    return this.layers;
  };

  Rate.prototype.setFace = function (value, face) {
    this.set_faces[value] = face;
  };

  Rate.prototype.setAdditionalData = function (data) {
    this.settings.additional_data = data;
  };

  Rate.prototype.getAdditionalData = function () {
    return this.settings.additional_data;
  };

  Rate.prototype.removeFace = function (value) {
    delete this.set_faces[value];
  };

  Rate.prototype.setValue = function (value) {
    if (!this.settings.readonly) {
      if (value < 0) {
        value = 0;
      } else if (value > this.settings.max_value) {
        value = this.settings.max_value;
      }

      var old_value = this.getValue();
      this.value = value;
      var change_event = $(this.element).trigger("change", {
        from: old_value,
        to: this.value
      });
      $(this.element).find(".rate-face").remove();
      $(this.element).find("span").css({
        visibility: "visible"
      });
      var index_value = Math.ceil(this.value);

      if (this.set_faces.hasOwnProperty(index_value)) {
        var face = "<div>" + this.set_faces[index_value] + "</div>";
        var base_layer_element = this.getElement("base-layer", index_value);
        var select_layer_element = this.getElement("select-layer", index_value);
        var hover_layer_element = this.getElement("hover-layer", index_value);
        var left_pos = base_layer_element.textWidth() * (index_value - 1) + (base_layer_element.textWidth() - $(face).textWidth()) / 2;
        $(face).appendTo(this.element).css({
          display: "inline-block",
          position: "absolute",
          left: left_pos
        }).addClass("rate-face");
        base_layer_element.css({
          visibility: "hidden"
        });
        select_layer_element.css({
          visibility: "hidden"
        });
        hover_layer_element.css({
          visibility: "hidden"
        });
      }

      if (!this.settings.only_select_one_symbol) {
        var width = this.toWidth(this.value);
        this.layers.select_layer.css({
          display: "block",
          width: width + "%",
          height: this.layers.base_layer.css("height")
        });
        this.layers.hover_layer.css({
          display: "none",
          height: this.layers.base_layer.css("height")
        });
      } else {
        var width = this.toWidth(this.settings.max_value);
        this.layers.select_layer.css({
          display: "block",
          width: width + "%",
          height: this.layers.base_layer.css("height")
        });
        this.layers.hover_layer.css({
          display: "none",
          height: this.layers.base_layer.css("height")
        });
        this.layers.select_layer.children("span").css({
          visibility: "hidden"
        });
        this.layers.select_layer.children("span").eq(index_value != 0 ? index_value - 1 : 0).css({
          visibility: "visible"
        });
      }

      $(this.element).attr("data-rate-value", this.value);

      if (this.settings.change_once) {
        this.settings.readonly = true;
      }

      this.updateServer();
      var change_event = $(this.element).trigger("afterChange", {
        from: old_value,
        to: this.value
      });

      if (this.settings.hasOwnProperty("update_input_field_name")) {
        this.settings.update_input_field_name.val(this.value);
      }
    }
  };

  Rate.prototype.increment = function () {
    this.setValue(this.getValue() + this.settings.step_size);
  };

  Rate.prototype.decrement = function () {
    this.setValue(this.getValue() - this.settings.step_size);
  };

  $.fn.rate.settings = {
    max_value: 5,
    step_size: .5,
    initial_value: 0,
    symbols: {
      utf8_star: {
        base: "☆",
        hover: "★",
        selected: "★"
      },
      utf8_hexagon: {
        base: "⬡",
        hover: "⬢",
        selected: "⬢"
      },
      hearts: "&hearts;",
      fontawesome_beer: '<i class="fa fa-beer"></i>',
      fontawesome_star: {
        base: '<i class="fa fa-star-o"></i>',
        hover: '<i class="fa fa-star"></i>',
        selected: '<i class="fa fa-star"></i>'
      },
      utf8_emoticons: {
        base: [128549, 128531, 128530, 128516],
        hover: [128549, 128531, 128530, 128516],
        selected: [128549, 128531, 128530, 128516]
      }
    },
    selected_symbol_type: "utf8_star",
    convert_to_utf8: false,
    cursor: "default",
    readonly: false,
    change_once: false,
    only_select_one_symbol: false,
    ajax_method: "POST",
    additional_data: {}
  };
})(jQuery, window);

/***/ }),

/***/ "./resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js":
/*!***************************************************************************!*\
  !*** ./resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
  var J = f("html"),
      n = f(r),
      p = f(G),
      b = f.fancybox = function () {
    b.open.apply(this, arguments);
  },
      I = navigator.userAgent.match(/msie/i),
      B = null,
      s = G.createTouch !== v,
      t = function t(a) {
    return a && a.hasOwnProperty && a instanceof f;
  },
      q = function q(a) {
    return a && "string" === f.type(a);
  },
      E = function E(a) {
    return q(a) && 0 < a.indexOf("%");
  },
      l = function l(a, d) {
    var e = parseInt(a, 10) || 0;
    d && E(a) && (e *= b.getViewport()[d] / 100);
    return Math.ceil(e);
  },
      w = function w(a, b) {
    return l(a, b) + "px";
  };

  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 0,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function open(a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
        var k = {},
            g,
            h,
            j,
            m,
            l;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: c.data("fancybox-title") || c.attr("title"),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
        g = d.href || k.href || (q(c) ? c : null);
        h = d.title !== v ? d.title : k.title || "";
        m = (j = d.content || k.content) ? "html" : d.type || k.type;
        !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
        q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
        j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && !g && k.isDom && (m = "inline", j = c));
        f.extend(k, {
          href: g,
          type: m,
          content: j,
          title: h,
          selector: l
        });
        a[e] = k;
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index);
    },
    cancel: function cancel() {
      var a = b.coming;
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a));
    },
    close: function close(a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())));
    },
    play: function play(a) {
      var d = function d() {
        clearTimeout(b.player.timer);
      },
          e = function e() {
        d();
        b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
      },
          c = function c() {
        d();
        p.unbind(".player");
        b.player.isActive = !1;
        b.trigger("onPlayEnd");
      };

      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
          "onCancel.player beforeClose.player": c,
          "onUpdate.player": e,
          "beforeLoad.player": d
        }), e(), b.trigger("onPlayStart");
      } else c();
    },
    next: function next(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
    },
    prev: function prev(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
    },
    jumpto: function jumpto(a, d, e) {
      var c = b.current;
      c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)));
    },
    reposition: function reposition(a, d) {
      var e = b.current,
          c = e ? e.wrap : null,
          k;
      c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)));
    },
    update: function update(a) {
      var d = a && a.type,
          e = !d || "orientationchange" === d;
      e && (clearTimeout(B), B = null);
      b.isOpen && !B && (B = setTimeout(function () {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null);
      }, e && !s ? 0 : 300));
    },
    toggle: function toggle(a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
    },
    hideLoading: function hideLoading() {
      p.unbind(".loading");
      f("#fancybox-loading").remove();
    },
    showLoading: function showLoading() {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
      p.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel();
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }));
    },
    getViewport: function getViewport() {
      var a = b.current && b.current.locked || !1,
          d = {
        x: n.scrollLeft(),
        y: n.scrollTop()
      };
      a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
      return d;
    },
    unbindEvents: function unbindEvents() {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb");
    },
    bindEvents: function bindEvents() {
      var a = b.current,
          d;
      a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
        var c = e.which || e.keyCode,
            k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]")) && f.each(d, function (d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1;
        });
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) {
          j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        }

        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault();
        }
      }));
    },
    trigger: function trigger(a, d) {
      var e,
          c = d || b.coming || b.current;

      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function (d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
        });
        p.trigger(a);
      }
    },
    isImage: function isImage(a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },
    isSWF: function isSWF(a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function _start(a) {
      var d = {},
          e,
          c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, w(d.padding[a]));
        });
        b.trigger("onReady");

        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content");
        } else if (!e) return b._error("href");

        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad();
      }
    },
    _error: function _error(a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });

      b._afterLoad();
    },
    _loadImage: function _loadImage() {
      var a = b.imgPreload = new Image();

      a.onload = function () {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;

        b._afterLoad();
      };

      a.onerror = function () {
        this.onload = this.onerror = null;

        b._error("image");
      };

      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading();
    },
    _loadAjax: function _loadAjax() {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function error(a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
        },
        success: function success(d, e) {
          "success" === e && (a.content = d, b._afterLoad());
        }
      }));
    },
    _loadIframe: function _loadIframe() {
      var a = b.coming,
          d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function () {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();

        b._afterLoad();
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad();
    },
    _preloadImages: function _preloadImages() {
      var a = b.group,
          d = b.current,
          e = a.length,
          c = d.preload ? Math.min(d.preload, e - 1) : 0,
          f,
          g;

      for (g = 1; g <= c; g += 1) {
        f = a[(d.index + g) % e], "image" === f.type && f.href && (new Image().src = f.href);
      }
    },
    _afterLoad: function _afterLoad() {
      var a = b.coming,
          d = b.current,
          e,
          c,
          k,
          g,
          h;
      b.hideLoading();
      if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;else {
        d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
        b.unbindEvents();
        e = a.content;
        c = a.type;
        k = a.scrolling;
        f.extend(b, {
          wrap: a.wrap,
          skin: a.skin,
          outer: a.outer,
          inner: a.inner,
          current: a,
          previous: d
        });
        g = a.href;

        switch (c) {
          case "inline":
          case "ajax":
          case "html":
            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
              f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
            }));
            break;

          case "image":
            e = a.tpl.image.replace("{href}", g);
            break;

          case "swf":
            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
              e += '<param name="' + a + '" value="' + b + '"></param>';
              h += " " + a + '="' + b + '"';
            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>";
        }

        (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
        b.trigger("beforeShow");
        a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);

        b._setDimension();

        b.reposition();
        b.isOpen = !1;
        b.coming = null;
        b.bindEvents();

        if (b.isOpened) {
          if (d.prevMethod) b.transitions[d.prevMethod]();
        } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();

        b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();

        b._preloadImages();
      }
    },
    _setDimension: function _setDimension() {
      var a = b.getViewport(),
          d = 0,
          e = !1,
          c = !1,
          e = b.wrap,
          k = b.skin,
          g = b.inner,
          h = b.current,
          c = h.width,
          j = h.height,
          m = h.minWidth,
          u = h.minHeight,
          n = h.maxWidth,
          p = h.maxHeight,
          s = h.scrolling,
          q = h.scrollOutside ? h.scrollbarWidth : 0,
          x = h.margin,
          y = l(x[1] + x[3]),
          r = l(x[0] + x[2]),
          v,
          z,
          t,
          C,
          A,
          F,
          B,
          D,
          H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = l(k.outerWidth(!0) - k.width());
      v = l(k.outerHeight(!0) - k.height());
      z = y + x;
      t = r + v;
      C = E(c) ? (a.w - z) * l(c) / 100 : c;
      A = E(j) ? (a.h - t) * l(j) / 100 : j;

      if ("iframe" === h.type) {
        if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0));
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");

      c = l(C);
      j = l(A);
      D = C / A;
      m = l(E(m) ? l(m, "w") - z : m);
      n = l(E(n) ? l(n, "w") - z : n);
      u = l(E(u) ? l(u, "h") - t : u);
      p = l(E(p) ? l(p, "h") - t : p);
      F = n;
      B = p;
      h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
      z = a.w - y;
      r = a.h - r;
      h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
      if (h.fitToView) if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio) for (; (a > z || y > r) && c > m && j > u && !(19 < d++);) {
        j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
      } else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
      q && "auto" === s && j < A && c + x + q < z && (c += q);
      g.width(c).height(j);
      e.width(c + x);
      a = e.width();
      y = e.height();
      e = (a > z || y > r) && c > m && j > u;
      c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
      f.extend(h, {
        dim: {
          width: w(a),
          height: w(y)
        },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: x,
        hPadding: v,
        wrapSpace: y - k.outerHeight(!0),
        skinSpace: k.height() - j
      });
      !H && h.autoHeight && j > u && j < p && !c && g.height("auto");
    },
    _getPosition: function _getPosition(a) {
      var d = b.current,
          e = b.getViewport(),
          c = d.margin,
          f = b.wrap.width() + c[1] + c[3],
          g = b.wrap.height() + c[0] + c[2],
          c = {
        position: "absolute",
        top: c[0],
        left: c[3]
      };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c;
    },
    _afterZoomIn: function _afterZoomIn() {
      var a = b.current;
      a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
        a.preventDefault();
        b.close();
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()));
    },
    _afterZoomOut: function _afterZoomOut(a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a);
    }
  });
  b.transitions = {
    getOrigPosition: function getOrigPosition() {
      var a = b.current,
          d = a.element,
          e = a.orig,
          c = {},
          f = 50,
          g = 50,
          h = a.hPadding,
          j = a.wPadding,
          m = b.getViewport();
      !e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));
      t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
      return c = {
        top: w(c.top - h * a.topRatio),
        left: w(c.left - j * a.leftRatio),
        width: w(f + j),
        height: w(g + h)
      };
    },
    step: function step(a, d) {
      var e,
          c,
          f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
          h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e));
    },
    zoomIn: function zoomIn() {
      var a = b.current,
          d = a.pos,
          e = a.openEffect,
          c = "elastic" === e,
          k = f.extend({
        opacity: 1
      }, d);
      delete k.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(k, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      });
    },
    zoomOut: function zoomOut() {
      var a = b.current,
          d = a.closeEffect,
          e = "elastic" === d,
          c = {
        opacity: 0.1
      };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      });
    },
    changeIn: function changeIn() {
      var a = b.current,
          d = a.nextEffect,
          e = a.pos,
          c = {
        opacity: 1
      },
          f = b.direction,
          g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      });
    },
    changeOut: function changeOut() {
      var a = b.previous,
          d = a.prevEffect,
          e = {
        opacity: 0.1
      },
          c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function complete() {
          f(this).trigger("onReset").remove();
        }
      });
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function create(a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0);
    },
    open: function open(a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function (a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1;
      });
      this.overlay.css(a.css).show();
    },
    close: function close() {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: null,
        fixed: !1
      });
    },
    update: function update() {
      var a = "100%",
          b;
      this.overlay.width(a).height("100%");
      I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
      this.overlay.width(a).height(p.height());
    },
    onReady: function onReady(a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && this.fixed && b.fixed && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments);
    },
    beforeShow: function beforeShow(a, b) {
      var e, c;
      b.locked && (!1 !== this.margin && (f("*").filter(function () {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
      this.open(a);
    },
    onUpdate: function onUpdate() {
      this.fixed || this.update();
    },
    afterClose: function afterClose(a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function beforeShow(a) {
      var d = b.current,
          e = d.title,
          c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));

      if (q(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");

        switch (c) {
          case "inside":
            c = b.skin;
            break;

          case "outside":
            c = b.wrap;
            break;

          case "over":
            c = b.inner;
            break;

          default:
            c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")));
        }

        d["top" === a.position ? "prependTo" : "appendTo"](c);
      }
    }
  };

  f.fn.fancybox = function (a) {
    var d,
        e = f(this),
        c = this.selector || "",
        k = function k(g) {
      var h = f(this).blur(),
          j = d,
          k,
          l;
      !g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && "" !== l && "nofollow" !== l && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault());
    };

    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this;
  };

  p.ready(function () {
    var a, d;
    f.scrollbarWidth === v && (f.scrollbarWidth = function () {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
          b = a.children(),
          b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b;
    });

    if (f.support.fixedPosition === v) {
      a = f.support;
      d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e;
    }

    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
    a = f(r).width();
    J.addClass("fancybox-lock-test");
    d = f(r).width();
    J.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head");
  });
})(window, document, jQuery);

/***/ }),

/***/ "./resources/client/themes/site/js/common95c495c4.js":
/*!***********************************************************!*\
  !*** ./resources/client/themes/site/js/common95c495c4.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  /*Cart*/
  $('form[name="checkout"]').submit(function () {
    var flagChekout = false;
    $('form[name="checkout"]').find('input[name="billing_first_name"], textarea').each(function () {
      if ($(this).val() == "") {
        flagChekout = true;
        var input = $(this);
        $(this).removeClass('not-valid shake animated');
        setTimeout(function () {
          input.addClass('not-valid shake animated');
        }, 0.01);
      }
    });

    if ($('input[name="billing_phone"]').length === 0 || $('input[name="billing_phone"]').length === 0) {
      flagChekout = true;
      $('input[name="billing_phone"]').removeClass('not-valid shake animated');
      setTimeout(function () {
        $('input[name="billing_phone"]').addClass('not-valid shake animated');
      }, 0.01);
    }

    if (flagChekout) return false;
    products = [];
    $('.product-row').each(function () {
      $(this).find('.product-name-text').text();
      var product = $(this).find('.product-name-text').text() + $(this).find('.product-name-descr').html().replace('<br>', ' ') + $(this).find('.quantity > input').val() + ' ' + $(this).find('.product-price span').text();
      products.push(product);
    });
    console.log(products);
    data = {
      name: $('input[name="billing_first_name"]').val(),
      phone: $('input[name="billing_phone"]').val(),
      address: $('textarea[name="billing_address_1"]').val(),
      time: $('input[name="billing_new_fild11"]:checked').val(),
      total: $('.products .total-product-price .amount').text(),
      date: $('select[name="billing_new_fild13"]').val(),
      products: products
    }; //return false;
  });
  $('.header-baner').css('height', $(window).width() / 1.6);
  $('input[type="text"], textarea').keyup(function () {
    if ($(this).val() != "") $(this).removeClass('not-valid');else $(this).addClass('not-valid');
  });
  var i = 1;
  setTimeout(function () {
    $('.products.container .product-row').each(function () {
      var product = $(this);
      setTimeout(function () {
        product.addClass('visible animated fadeInLeft').fadeIn(200);
      }, 500 * i);
      i++;
    });
  }, 800);
  $(".minus").click(function () {
    var new_val = parseInt($(this).next().find('input').val());

    if (new_val > 1) {
      $(this).next().find('input[name="qty"]').val(--new_val).change();
    } //  $.ajax({
    //      type: 'POST',
    //      dataType: 'json',
    //      url: '/mail/minus',
    //      data: {
    //          new_val: new_val,
    //          key: $(this).parent().find('input[name="c_key"]').val()
    //      },
    //      success: function(result){
    //          $('.products-total .total-product-price .amount').text(result.price);
    //          $('.product-counter').text('Товаров в корзине: ' + result.count);
    //          var dlvr  = $('select[name="delivery"]').val();
    //          if(dlvr == 'flat_rate') {
    //              var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 300;
    //          }else {
    //              var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 500;
    //          }
    //          $('.tot .amount').text(number_format(str, 0, ' ', ' ') + ' руб.');
    //
    //          //function intervalReload()
    //          //{
    //          //    window.location.reload();
    //          //}
    //          //setInterval(intervalReload, 1000);
    //      }
    //  });


    return false;
  });
  $(".plus").click(function () {
    var new_val = parseInt($(this).prev().find('input').val());
    $(this).prev().find('input[name="qty"]').val(++new_val).change(); //
    //    $.ajax({
    //        type: 'POST',
    //        dataType: 'json',
    //        url: '/mail/plus',
    //        data: {
    //            new_val: new_val,
    //            key: $(this).parent().find('input[name="c_key"]').val()
    //        },
    //        success: function(result){
    //            $('.products-total .total-product-price .amount').text(result.price);
    //            $('.product-counter').text('Товаров в корзине: ' + result.count);
    //            var dlvr  = $('select[name="delivery"]').val();
    //            if(dlvr == 'flat_rate') {
    //                var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 300;
    //            }else {
    //                var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 500;
    //            }
    //            $('.tot .amount').text(number_format(str, 0, ' ', ' ') + ' руб.');
    //
    //            //function intervalReload()
    //            //{
    //            //    window.location.reload();
    //            //}
    //            //setInterval(intervalReload, 1000);
    //        }
    //    });

    return false;
  });
  $("input[name=qty]").change(function () {
    //var new_val = parseInt($(this).prev().find('input').val());
    var newVal = $(this).val();
    /*
    
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'send.php',
                data: {
                    new_val: newVal,
                    key: $(this).parent().find('input[name="c_key"]').val()
                },
                success: function(result){
                    $('.products-total .total-product-price .amount').text(result.price);
                    $('.product-counter').text('Товаров в корзине: ' + result.count);
                    var dlvr  = $('select[name="delivery"]').val();
                    if(dlvr == 'flat_rate') {
                        var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 300;
                    }else {
                        var str = parseInt($('.products-total .amount').text().replace('руб.', '').replace(' ', '')) + 500;
                    }
                    $('.tot .amount').text(number_format(str, 0, ' ', ' ') + ' руб.');
                    $('.total-product-price .amount').text(result.price);
    
    
    
                    //function intervalReload()
                    //{
                    //    window.location.reload();
                    //}
                    //setInterval(intervalReload, 1000);
                }
            });
    
            $.ajax({
                type: 'POST',
                dataType: 'html',
                url: 'send.php',
                success: function(data){
                    $('.inner_b_p').empty().html(data);
                }
            })*/

    return false;
  });

  function number_format(number, decimals, dec_point, thousands_sep) {
    // Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +	 bugfix by: Michael White (http://crestidg.com)
    var i, j, kw, kd, km; // input sanitation & defaults

    if (isNaN(decimals = Math.abs(decimals))) {
      decimals = 2;
    }

    if (dec_point == undefined) {
      dec_point = ",";
    }

    if (thousands_sep == undefined) {
      thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if ((j = i.length) > 3) {
      j = j % 3;
    } else {
      j = 0;
    }

    km = j ? i.substr(0, j) + thousands_sep : "";
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep); //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");

    kd = decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "";
    return km + kw + kd;
  }

  $('input[name=phone], input[name="billing_phone"], input[name="phone2"]').inputmask("+38 (999) 999-99-99");
  /*End Cart*/

  $('.header-baner .know-more, .dream-text button').click(function () {
    $("html, body").stop().animate({
      scrollTop: $('#catalogue').offset().top - 53
    });
  });
  var productI = 1;
  $('.basket-icon, .basket-icon-active').click(function () {
    if ($(window).width() < 920) {
      if ($('.top-menu').is(':visible')) {
        $('.toggle-menu').click();
      }
    }

    if ($('#basket-popup').css('display') == 'none') {
      $('#basket-popup').fadeIn();
      $('#basket-popup').css('top', 60);
      $('#basket-popup .product-row').each(function () {
        var product = $(this);
        setTimeout(function () {
          product.addClass('visible animated fadeInRight').fadeIn(200);
        }, 300 * productI);
        productI++;
      });
      setTimeout(function () {
        $('.total-product-price, .blue-button').addClass('visible animated fadeInRight').fadeIn(200);
      }, 300 * productI++);
      $(this).addClass('active');
    } else {
      $('#basket-popup').hide('slow');
      $(this).removeClass('active');
    }

    return false;
  });
  $(document).mouseup(function (e) {
    var container = $("#basket-popup");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut(400);
    }
  });
  $('.carousel-indicators li:first-child').addClass('active');
  $('.carousel-indicators.color-slider li').click(function () {
    /*$(this).parent().parent().find('.carousel-indicators li').removeClass('active');
    $(this).parent().parent().find('.phone-preview img').css('display', 'none');
    $(this).parent().parent().find('.phone-preview img:eq('+$( this ).index()+')').fadeIn();*/
    $(this).parent().parent().find('.color-div:eq(' + $(this).index() + ')').click();
    $(this).addClass('active');
    return false;
  });
  /*fancybox with white bg*/

  $(".fancybox-2").fancybox({
    helpers: {
      overlay: {
        opacity: 1,
        css: {
          'background': '#fff'
        }
      },
      custom: {}
    },
    tpl: {
      closeBtn: '<a class="fancybox-item fancybox-close" href="javascript:;"></a>'
    },
    openMethod: 'dropIn',
    openSpeed: 300,
    closeMethod: 'dropOut',
    closeSpeed: 300,
    margin: [0, 0, 0, 0],
    beforeShow: function beforeShow() {
      $('header').slideToggle(200);
    },
    beforeClose: function beforeClose() {
      $('header').slideToggle(200);
    }
  });
  /*fancybox extentionx*/

  (function ($, F) {
    F.transitions.dropIn = function () {
      var endPos = F._getPosition(true);

      endPos.left = parseInt(endPos.left, 10) - 200 + 'px';
      F.wrap.css(endPos).show().animate({
        left: '+=200px'
      }, {
        duration: F.current.openSpeed,
        complete: F._afterZoomIn
      });
    };

    F.transitions.dropOut = function () {
      F.wrap.removeClass('fancybox-opened').animate({
        left: '-=500px'
      }, {
        duration: F.current.closeSpeed,
        complete: F._afterZoomOut
      });
    };
  })(jQuery, jQuery.fancybox);

  $.fancybox.helpers.custom = {
    defaults: {
      position: 'top',
      space: 0
    },
    onUpdate: function onUpdate(opts, obj) {
      this.setPosition(opts, obj);
    },
    afterShow: function afterShow(opts, obj) {
      this.setPosition(opts, obj);
    },
    setPosition: function setPosition(opts, obj) {
      $('.fancybox-close').css({
        'top': '30px',
        'right': '10px'
      });
    }
  };
  $(".fancybox-grey").fancybox({
    helpers: {
      overlay: {
        locked: false
      }
    },
    tpl: {
      closeBtn: '<a class="fancybox-item fancybox-close" href="javascript:;"></a>'
    },
    openMethod: 'dropIn',
    minHeight: 830,
    fitToView: false,
    fixed: false,
    openSpeed: 200,
    closeMethod: 'dropOut',
    closeSpeed: 100,
    beforeShow: function beforeShow() {
      $('header').slideToggle(200);
      $('.fancybox-wrap').addClass('fancybox-wrap22');

      if ($(window).width() < 480) {
        $('.fancybox-inner').addClass('fancybox-inner-mobile');
        $('.fancybox-wrap').addClass('fancybox-wrap-left');
      }
    },
    beforeClose: function beforeClose() {
      $('header').slideToggle(200);
    }
  });
  /*fancybox with grey bg*/

  if ($(window).width() > 990) {
    $(".fancybox").fancybox({
      openMethod: 'dropIn',
      openSpeed: 200,
      closeMethod: 'dropOut',
      closeSpeed: 100,
      beforeShow: function beforeShow() {
        $('header').slideToggle(200);
      },
      beforeClose: function beforeClose() {
        $('header').slideToggle(200);
      }
    });
  } else {
    $(".fancybox").fancybox({
      helpers: {
        overlay: {
          opacity: 1,
          css: {
            'background': '#fff'
          }
        },
        custom: {}
      },
      tpl: {
        closeBtn: '<a class="fancybox-item fancybox-close" href="javascript:;"></a>'
      },
      openMethod: 'dropIn',
      openSpeed: 300,
      closeMethod: 'dropOut',
      closeSpeed: 300,
      margin: [0, 0, 0, 0],
      beforeShow: function beforeShow() {
        $('header').slideToggle(200);
      },
      beforeClose: function beforeClose() {
        $('header').slideToggle(200);
      }
    });
  }
  /*gallery scripts*/


  $('.gallery-desktop-photo-container').click(function () {
    $(this).parents('.gallery-desktop').find('.gallery-desktop-head > *').remove();

    if ($(this)[0].hasAttribute('large-img')) {
      $(this).parents('.gallery-desktop').find('.gallery-desktop-head').append('<img>');
      $(this).parents('.gallery-desktop').find('.gallery-desktop-head').find('img').attr('src', $(this).attr('large-img'));
    } else if ($(this)[0].hasAttribute('large-video')) {
      $(this).parents('.gallery-desktop').find('.gallery-desktop-head').append('<iframe style="display:none; max-width: 500px; width: 90%; height: 300px" src="' + $(this).attr('large-video') + '" frameborder="0" allowfullscreen></iframe>');
    }

    $(this).parents('.gallery-desktop').find('.gallery-desktop-head > *').css('display', 'none');
    $(this).parents('.gallery-desktop').find('.gallery-desktop-head > *').addClass('visible animated fadeInLeft').fadeIn();
  });
  /*$('.gallery-mobile-photos.carousel .gallery-mobile-photo-container').click(function(){
    $(this).parents('.gallery-mobile').find('.gallery-mobile-head > *').remove();
    if ($(this)[0].hasAttribute('large-img')) {
      $(this).parents('.gallery-mobile').find('.gallery-mobile-head').append($(this).html());
      $(this).parents('.gallery-mobile').find('.gallery-mobile-head').find('img').attr('src', $(this).attr('large-img'));
    }
    else if ($(this)[0].hasAttribute('large-video')) {
      $(this).parents('.gallery-mobile').find('.gallery-mobile-head').append('<iframe style="max-width: 500px; width: 90%; height: 250px; margin-bottom: 30px" src="'+$(this).attr('large-video')+'" frameborder="0" allowfullscreen></iframe>');
    }
    $(this).parents('.gallery-mobile').find('.gallery-mobile-head > *').css('display', 'none');
    $(this).parents('.gallery-mobile').find('.gallery-mobile-head > *').addClass('visible animated fadeInLeft').fadeIn();
  });*/

  /*top menu sctipt*/

  $('.toggle-menu').click(function () {
    $(".sandwich").toggleClass("active");

    if ($('.top-menu').is(':visible')) {
      $('body, html').css('position', 'relative');
      $('.top-menu').fadeOut();
      $('.toggle-menu p').text('меню');
      setTimeout(function () {
        $('.top-menu').css('margin-left', '0');
      }, 300);
      $('header').animate({
        height: "64px"
      }, 300);
      $('.toggle-menu p').css('margin-top', '-11px');
      $('.sandwich').css('margin-top', '0px');
    } else {
      $('body, html').css('position', 'fixed');
      $('.top-menu').fadeIn();
      $('.toggle-menu p').text('закрыть');
      $('header').animate({
        height: $(window).height()
      }, 300);
      $('.sandwich').css('margin-top', '5px');
      if ($(window).width() > 990) $('.top-menu').css('margin-left', '-20%');
    }

    return false;
  });
  $('.header-baner').height($(window).height());
  $('.top-menu a').click(function () {
    if ($('.top-menu').is(':visible') && $(window).width() < 920) {
      $('.toggle-menu').click(); // $(".sandwich").toggleClass("active");
    }
  });
  /*$("form").submit(function() {
  	$.ajax({
  		type: "GET",
  		url: "mail.php",
  		data: $("form").serialize()
  	}).done(function() {
  		alert("Спасибо за заявку!");
  		setTimeout(function() {
  			$.fancybox.close();
  		}, 1000);
  	});
  	return false;
  });*/

  /*top video paralax*/

  $(window).scroll(function () {
    if ($(window).scrollTop() < 900) $('.header-baner video').css('top', $(window).scrollTop());
  });
  /*top menu hidden*/

  $(window).resize(function () {
    if ($(this).width() > 920) {
      $('.top-menu').css('dislay', 'inline-block');
      $('.top-menu').css('margin-left', '0');
    }
  });
  $('.header-baner .know-more').click(function () {
    $("html, body").stop().animate({
      scrollTop: $('#catalogue').offset().top - 53
    });
  });
  $(".select-phone, .select-phone2").click(function () {
    target = $(this).attr('data-ttarget');
    $('html,body').stop().animate({
      scrollTop: $('#' + target).offset().top - 51
    }, 800);
  });
  $('.characteristics').click(function () {
    $('.characteristics-content').empty();
    $('.characteristics-content').append($(this).next().html());
  });
  $('.delivery-kit').click(function () {
    $('#package-popup .package-phone img').attr('src', $(this).next().text());
  });
  $("#buy-in-click-popup2 form").submit(function (e) {
    var flagChekout = false;
    e.preventDefault();
    this_form = $('#buy-in-click-popup2');

    if ($('#buy-in-click-popup2 form').find('input[name="name"]').length === 0) {
      flagChekout = true;
      var input = $('#buy-in-click-popup2 form').find('input[name="name"]');
      input.removeClass('not-valid shake animated');
      setTimeout(function () {
        input.addClass('not-valid shake animated');
      }, 0.01);
    }

    if (this_form.find('input[name=phone]').length == 0 || this_form.find('input[name=phone]').val().match(/\d/g).length < 12) {
      flagChekout = true;
      $('#buy-in-click-popup2 form input[name="phone"]').removeClass('not-valid shake animated');
      setTimeout(function () {
        $('#buy-in-click-popup2 form input[name="phone"]').addClass('not-valid shake animated');
      }, 0.01);
    }

    if (flagChekout) return false;
    axios.post(Router.route('call', {
      name: this_form.find('input[name=name]').val(),
      phone: this_form.find('input[name=phone]').val()
    })).then(function (data) {
      $.fancybox.close();
      $.fancybox({
        'autoScale': true,
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'content': '<p class="thanks_text">Спасибо за Ваш Заказ!<p>'
      });
      setTimeout(function () {
        return location.href = Router.route('thank');
      }, 1200);
    })["catch"](function (error) {
      $('#buy-in-click-popup2 form').html(error.responseText);
      setInterval(function () {
        window.location.reload(true);
      }, 3000);
    });
    return false;
  });
  $("#buy-in-click-popup form").submit(function (e) {
    var flagChekout = false;
    e.preventDefault();
    this_form = $('#buy-in-click-popup');

    if ($('#buy-in-click-popup form').find('input[name="name"]').length === 0) {
      flagChekout = true;
      var input = $('#buy-in-click-popup form').find('input[name="name"]');
      input.removeClass('not-valid shake animated');
      setTimeout(function () {
        input.addClass('not-valid shake animated');
      }, 0.01);
    }

    if (flagChekout) return false;
    return false;
  });
  $("#review form").submit(function () {
    this_form = $(this);
    var flagChekout = false;
    var flagChekout2 = false;

    if ($('#review form').find('input[name="name"]').val() == "") {
      flagChekout = true;
      var input = $('#review form').find('input[name="name"]');
      input.removeClass('not-valid shake animated');
      setTimeout(function () {
        input.addClass('not-valid shake animated');
      }, 0.01);
    }

    if ($('#review form textarea[name="text"]').val().length == 0) {
      flagChekout2 = true;
      $('#review form textarea[name="text"]').removeClass('not-valid shake animated');
      setTimeout(function () {
        $('#review form textarea[name="text"]').addClass('not-valid shake animated');
      }, 0.01);
    }

    if (flagChekout || flagChekout2) {
      return false;
    }

    var ratingValue = $(".rating").rate("getValue");
    axios.post(Router.route('comment', {
      name: this_form.find('input[name=name]').val(),
      text: this_form.find('textarea[name=text]').val(),
      value: ratingValue
    })).then(function (data) {
      $.fancybox.close();
      $.fancybox({
        'autoScale': true,
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'content': '<p class="thanks_text">Спасибо за Ваш Отзыв!<p>'
      });
      setInterval(function () {
        window.location.reload(true);
      }, 3000);
    })["catch"](function (error) {
      $('#review form').html(error.responseText);
      setInterval(function () {
        window.location.reload(true);
      }, 3000);
    });
    return false;
  });
  $("#present-popup form").submit(function () {
    var flagChekout = false;

    if ($('#present-popup form').find('input[name="name"]').val() == "") {
      flagChekout = true;
      var input = $('#present-popup form').find('input[name="name"]');
      input.removeClass('not-valid shake animated');
      setTimeout(function () {
        input.addClass('not-valid shake animated');
      }, 0.01);
    }

    if ($('#present-popup form input[name="phone"]').val().length == 0 || $('#present-popup form input[name="phone"]').val().match(/\d/g).length < 11) {
      flagChekout = true;
      $('#present-popup form input[name="phone"]').removeClass('not-valid shake animated');
      setTimeout(function () {
        $('#present-popup form input[name="phone"]').addClass('not-valid shake animated');
      }, 0.01);
    }

    if (flagChekout) return false;
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function () {
      location.href = '';
    });
    return false;
  });

  function validate_email(target) {
    target.removeClass('not-valid shake animated');

    if ($(target).val() != '') {
      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

      if (pattern.test($(target).val())) {//
      } else {
        setTimeout(function () {
          target.addClass('not-valid shake animated');
        }, 0.01);
      }
    } else {
      setTimeout(function () {
        target.addClass('not-valid shake animated');
      }, 0.01);
    }
  }

  function validate_error(element) {
    element.removeClass('not-valid shake animated');
    setTimeout(function () {
      element.addClass('not-valid shake animated');
    }, 0.01);
  }

  $("#contacts-popup form").submit(function () {
    var flagChekout = false;

    if ($('#contacts-popup form').find('input[name="name"]').val() == "") {
      flagChekout = true;
      validate_error($('#contacts-popup form').find('input[name="name"]'));
    }

    if ($('#contacts-popup form').find('textarea[name="issue"]').val() == "") {
      flagChekout = true;
      validate_error($('#contacts-popup form').find('textarea[name="issue"]'));
    }

    validate_email($('#contacts-popup form').find('input[name="email"]'));

    if ($('#contacts-popup form input[name="phone"]').val().length == 0 || $('#contacts-popup form input[name="phone"]').val().match(/\d/g).length < 11) {
      flagChekout = true;
      validate_error($('#contacts-popup form input[name="phone"]'));
    }

    if ($(this).find("input[name='imei']").val() != '') {
      var pattern = /^\d+$/;

      if (pattern.test($(this).find("input[name='imei']").val())) {//imei_input.removeClass("error");
      } else {
        flagChekout = true;
        validate_error($(this).find("input[name='imei']"));
      }
    } else {
      flagChekout = true;
      validate_error($(this).find("input[name='imei']"));
    }

    if ($(this).find("input[name=date]").val().trim().length < 3) {
      flagChekout = true;
      validate_error($(this).find("input[name=date]"));
    } else $(this).find("input[name=date]").removeClass('not-valid shake animated');

    if ($(this).find("input[name=item_name]").val().trim().length < 3) {
      flagChekout = true;
      validate_error($(this).find("input[name=item_name]"));
    }

    if ($(this).find("select[name=open]").val().trim().length < 1) {
      flagChekout = true;
      validate_error($(this).find(".selected"));
    } else $(this).find(".selected").removeClass('not-valid shake animated');

    if ($(this).find("input[name=serial]").val().trim().length < 3) {
      flagChekout = true;
      validate_error($(this).find("input[name=serial]"));
    }

    if (!(parseInt($("input[name=count]").val().trim()) > 0)) {
      flagChekout = true;
      validate_error($(this).find("input[name=count]"));
    }

    if ($(this).find("textarea[name=issue]").val().trim().length < 3) {
      flagChekout = true;
      validate_error($(this).find("textarea[name=issue]"));
    }

    if ($(this).find("textarea[name=defects]").val().trim().length < 3) {
      flagChekout = true;
      validate_error($(this).find("textarea[name=defects]"));
    }

    if (flagChekout) return false;
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function (data) {
      console.log(data);
      $.fancybox.close();
      setTimeout(function () {
        alert("Спасибо за заявку!");
      }, 500);
    });
    return false;
  });
  $(function () {
    $('#add-popup .add-basket').click(function () {
      window.location.href = "";
    });
  });
});

/***/ }),

/***/ "./resources/client/themes/site/js/form95c495c4.js":
/*!*********************************************************!*\
  !*** ./resources/client/themes/site/js/form95c495c4.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var ip_img;
  var ip_model;
  var ip_color;
  var ip_memory;
  var ip_oldprice;
  var ip_newprice;
  $('.buy-in-click').click(function () {
    this_form = $(this).closest('form');
    this_block = $(this).closest('section');
    ip_model = this_block.find('.phone-container-title').text().trim();
    ip_img = this_block.find('.phone-preview').find('img:visible').attr('src');
    ip_oldprice = this_form.find('.amount.main_p').text().trim();
    ip_newprice = this_form.find('.amount.sale_p').text().trim();
    ip_color = this_form.find('.color-div.active').attr('data-param') != undefined ? this_form.find('.color-div.active').attr('data-param').trim() : '';
    ip_memory = this_form.find('.memory-div.active').text() != undefined ? this_form.find('.memory-div.active').text().trim() : '';
    $('#ip_model').text(ip_model);
    $('#ip_img').attr('src', ip_img);
    $('#ip_oldprice').text(ip_oldprice);
    $('#ip_newprice').text(ip_newprice);
    $('#ip_color').text(ip_color);
    $('#ip_memory').text(ip_memory);
    $('#buy-in-click-popup').find('.mti_template').remove();
    cloned = this_block.find('.mti_template').clone();
    $('#buy-in-click-popup').find('.mti_text').append(cloned);
  });
});

/***/ }),

/***/ "./resources/client/themes/site/js/mask95c495c4.js":
/*!*********************************************************!*\
  !*** ./resources/client/themes/site/js/mask95c495c4.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  if ($.fn.inputmask === undefined) {
    var isInputEventSupported = function isInputEventSupported(eventName) {
      var el = document.createElement('input'),
          eventName = 'on' + eventName,
          isSupported = (eventName in el);

      if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
      }

      el = null;
      return isSupported;
    };

    var resolveAlias = function resolveAlias(aliasStr, options, opts) {
      var aliasDefinition = opts.aliases[aliasStr];

      if (aliasDefinition) {
        if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts);
        $.extend(true, opts, aliasDefinition);
        $.extend(true, opts, options);
        return true;
      }

      return false;
    };

    var generateMaskSet = function generateMaskSet(opts) {
      var ms = [];

      function analyseMask(mask) {
        var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,
            escaped = false;

        function maskToken(isGroup, isOptional, isQuantifier, isAlternator) {
          this.matches = [];
          this.isGroup = isGroup || false;
          this.isOptional = isOptional || false;
          this.isQuantifier = isQuantifier || false;
          this.isAlternator = isAlternator || false;
          this.quantifier = {
            min: 1,
            max: 1
          };
        }

        ;

        function insertTestDefinition(mtoken, element, position) {
          var maskdef = opts.definitions[element];
          var newBlockMarker = mtoken.matches.length == 0;
          position = position != undefined ? position : mtoken.matches.length;

          if (maskdef && !escaped) {
            var prevalidators = maskdef["prevalidator"],
                prevalidatorsL = prevalidators ? prevalidators.length : 0;

            for (var i = 1; i < maskdef.cardinality; i++) {
              var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
                  validator = prevalidator["validator"],
                  cardinality = prevalidator["cardinality"];
              mtoken.matches.splice(position++, 0, {
                fn: validator ? typeof validator == 'string' ? new RegExp(validator) : new function () {
                  this.test = validator;
                }() : new RegExp("."),
                cardinality: cardinality ? cardinality : 1,
                optionality: mtoken.isOptional,
                newBlockMarker: newBlockMarker,
                casing: maskdef["casing"],
                def: maskdef["definitionSymbol"] || element
              });
            }

            mtoken.matches.splice(position++, 0, {
              fn: maskdef.validator ? typeof maskdef.validator == 'string' ? new RegExp(maskdef.validator) : new function () {
                this.test = maskdef.validator;
              }() : new RegExp("."),
              cardinality: maskdef.cardinality,
              optionality: mtoken.isOptional,
              newBlockMarker: newBlockMarker,
              casing: maskdef["casing"],
              def: maskdef["definitionSymbol"] || element
            });
          } else {
            mtoken.matches.splice(position++, 0, {
              fn: null,
              cardinality: 0,
              optionality: mtoken.isOptional,
              newBlockMarker: newBlockMarker,
              casing: null,
              def: element
            });
            escaped = false;
          }
        }

        var currentToken = new maskToken(),
            match,
            m,
            openenings = [],
            maskTokens = [];

        while (match = tokenizer.exec(mask)) {
          m = match[0];

          switch (m.charAt(0)) {
            case opts.optionalmarker.end:
            case opts.groupmarker.end:
              var openingToken = openenings.pop();

              if (openenings.length > 0) {
                openenings[openenings.length - 1]["matches"].push(openingToken);
              } else {
                currentToken.matches.push(openingToken);
              }

              break;

            case opts.optionalmarker.start:
              openenings.push(new maskToken(false, true));
              break;

            case opts.groupmarker.start:
              openenings.push(new maskToken(true));
              break;

            case opts.quantifiermarker.start:
              var quantifier = new maskToken(false, false, true);
              m = m.replace(/[{}]/g, "");
              var mq = m.split(","),
                  mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                  mq1 = mq.length == 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);

              if (mq1 == "*" || mq1 == "+") {
                mq0 = mq0 == "*" ? 0 : 1;
                opts.greedy = false;
              }

              quantifier.quantifier = {
                min: mq0,
                max: mq1
              };

              if (openenings.length > 0) {
                var matches = openenings[openenings.length - 1]["matches"];
                var match = matches.pop();

                if (!match["isGroup"]) {
                  var groupToken = new maskToken(true);
                  groupToken.matches.push(match);
                  match = groupToken;
                }

                matches.push(match);
                matches.push(quantifier);
              } else {
                var match = currentToken.matches.pop();

                if (!match["isGroup"]) {
                  var groupToken = new maskToken(true);
                  groupToken.matches.push(match);
                  match = groupToken;
                }

                currentToken.matches.push(match);
                currentToken.matches.push(quantifier);
              }

              break;

            case opts.escapeChar:
              escaped = true;
              break;

            case opts.alternatormarker:
              break;

            default:
              if (openenings.length > 0) {
                insertTestDefinition(openenings[openenings.length - 1], m);
              } else {
                if (currentToken.matches.length > 0) {
                  var lastMatch = currentToken.matches[currentToken.matches.length - 1];

                  if (lastMatch["isGroup"]) {
                    lastMatch.isGroup = false;
                    insertTestDefinition(lastMatch, opts.groupmarker.start, 0);
                    insertTestDefinition(lastMatch, opts.groupmarker.end);
                  }
                }

                insertTestDefinition(currentToken, m);
              }

          }
        }

        if (currentToken.matches.length > 0) maskTokens.push(currentToken);
        return maskTokens;
      }

      function generateMask(mask, metadata) {
        if (opts.numericInput) {
          mask = mask.split('').reverse();

          for (var ndx in mask) {
            if (mask[ndx] == opts.optionalmarker.start) mask[ndx] = opts.optionalmarker.end;else if (mask[ndx] == opts.optionalmarker.end) mask[ndx] = opts.optionalmarker.start;else if (mask[ndx] == opts.groupmarker.start) mask[ndx] = opts.groupmarker.end;else if (mask[ndx] == opts.groupmarker.end) mask[ndx] = opts.groupmarker.start;
          }

          mask = mask.join('');
        }

        if (mask == undefined || mask == "") return undefined;else {
          if (opts.repeat > 0 || opts.repeat == "*" || opts.repeat == "+") {
            var repeatStart = opts.repeat == "*" ? 0 : opts.repeat == "+" ? 1 : opts.repeat;
            mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
          }

          if ($.inputmask.masksCache[mask] == undefined) {
            $.inputmask.masksCache[mask] = {
              "mask": mask,
              "maskToken": analyseMask(mask),
              "validPositions": {},
              "_buffer": undefined,
              "buffer": undefined,
              "tests": {},
              "metadata": metadata
            };
          }

          return $.extend(true, {}, $.inputmask.masksCache[mask]);
        }
      }

      if ($.isFunction(opts.mask)) {
        opts.mask = opts.mask.call(this, opts);
      }

      if ($.isArray(opts.mask)) {
        $.each(opts.mask, function (ndx, msk) {
          if (msk["mask"] != undefined) {
            ms.push(generateMask(msk["mask"].toString(), msk));
          } else {
            ms.push(generateMask(msk.toString()));
          }
        });
      } else {
        if (opts.mask.length == 1 && opts.greedy == false && opts.repeat != 0) {
          opts.placeholder = "";
        }

        if (opts.mask["mask"] != undefined) {
          ms = generateMask(opts.mask["mask"].toString(), opts.mask);
        } else {
          ms = generateMask(opts.mask.toString());
        }
      }

      return ms;
    };

    var maskScope = function maskScope(maskset, opts, actionObj) {
      var isRTL = false,
          valueOnFocus = getBuffer().join(''),
          $el,
          skipKeyPressEvent = false,
          skipInputEvent = false,
          ignorable = false,
          maxLength;

      function getMaskTemplate(baseOnInput, minimalPos, includeInput) {
        minimalPos = minimalPos || 0;
        var maskTemplate = [],
            ndxIntlzr,
            pos = 0,
            test,
            testPos;

        do {
          if (baseOnInput === true && getMaskSet()['validPositions'][pos]) {
            var validPos = getMaskSet()['validPositions'][pos];
            test = validPos["match"];
            ndxIntlzr = validPos["locator"].slice();
            maskTemplate.push(test["fn"] == null ? test["def"] : includeInput === true ? validPos["input"] : opts.placeholder.charAt(pos % opts.placeholder.length));
          } else {
            if (minimalPos > pos) {
              var testPositions = getTests(pos, ndxIntlzr, pos - 1);
              testPos = testPositions[0];
            } else {
              testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
            }

            test = testPos["match"];
            ndxIntlzr = testPos["locator"].slice();
            maskTemplate.push(test["fn"] == null ? test["def"] : opts.placeholder.charAt(pos % opts.placeholder.length));
          }

          pos++;
        } while ((maxLength == undefined || pos - 1 < maxLength) && test["fn"] != null || test["fn"] == null && test["def"] != "" || minimalPos >= pos);

        maskTemplate.pop();
        return maskTemplate;
      }

      function getMaskSet() {
        return maskset;
      }

      function resetMaskSet(soft) {
        var maskset = getMaskSet();
        maskset["buffer"] = undefined;
        maskset["tests"] = {};

        if (soft !== true) {
          maskset["_buffer"] = undefined;
          maskset["validPositions"] = {};
          maskset["p"] = -1;
        }
      }

      function getLastValidPosition(closestTo) {
        var maskset = getMaskSet(),
            lastValidPosition = -1,
            valids = maskset["validPositions"];
        if ($.isFunction(opts.getLastValidPosition)) lastValidPosition = opts.getLastValidPosition.call($el, maskset, closestTo, opts);else {
          if (closestTo == undefined) closestTo = -1;
          var before = lastValidPosition,
              after = lastValidPosition;

          for (var posNdx in valids) {
            var psNdx = parseInt(posNdx);

            if (closestTo == -1 || valids[psNdx]["match"].fn != null) {
              if (psNdx < closestTo) before = psNdx;
              if (psNdx >= closestTo) after = psNdx;
            }
          }

          lastValidPosition = closestTo - before > 1 || after < closestTo ? before : after;
        }
        return lastValidPosition;
      }

      function setValidPosition(pos, validTest, fromSetValid) {
        if (opts.insertMode && getMaskSet()["validPositions"][pos] != undefined && fromSetValid == undefined) {
          var positionsClone = $.extend(true, {}, getMaskSet()["validPositions"]),
              lvp = getLastValidPosition(),
              i;

          for (i = pos; i <= lvp; i++) {
            delete getMaskSet()["validPositions"][i];
          }

          getMaskSet()["validPositions"][pos] = validTest;
          var valid = true;

          for (i = pos; i <= lvp; i++) {
            var t = positionsClone[i];

            if (t != undefined) {
              var j = t["match"].fn == null ? i + 1 : seekNext(i);

              if (positionCanMatchDefinition(j, t["match"].def)) {
                valid = valid && isValid(j, t["input"], true, true) !== false;
              } else valid = false;
            }

            if (!valid) break;
          }

          if (!valid) {
            getMaskSet()["validPositions"] = $.extend(true, {}, positionsClone);
            return false;
          }
        } else getMaskSet()["validPositions"][pos] = validTest;

        return true;
      }

      function stripValidPositions(start, end) {
        var i,
            startPos = start,
            lvp;

        for (i = start; i < end; i++) {
          delete getMaskSet()["validPositions"][i];
        }

        for (i = end; i <= getLastValidPosition();) {
          var t = getMaskSet()["validPositions"][i];
          var s = getMaskSet()["validPositions"][startPos];

          if (t != undefined && s == undefined) {
            if (positionCanMatchDefinition(startPos, t.match.def) && isValid(startPos, t["input"], true) !== false) {
              delete getMaskSet()["validPositions"][i];
              i++;
            }

            startPos++;
          } else i++;
        }

        lvp = getLastValidPosition();

        while (lvp > 0 && (getMaskSet()["validPositions"][lvp] == undefined || getMaskSet()["validPositions"][lvp].match.fn == null)) {
          delete getMaskSet()["validPositions"][lvp];
          lvp--;
        }

        resetMaskSet(true);
      }

      function getTestTemplate(pos, ndxIntlzr, tstPs) {
        var testPositions = getTests(pos, ndxIntlzr, tstPs),
            testPos;

        for (var ndx in testPositions) {
          testPos = testPositions[ndx];

          if (opts.greedy || testPos["match"] && (testPos["match"].optionality === false || testPos["match"].newBlockMarker === false) && testPos["match"].optionalQuantifier !== true) {
            break;
          }
        }

        return testPos;
      }

      function getTest(pos) {
        if (getMaskSet()['validPositions'][pos]) {
          return getMaskSet()['validPositions'][pos]["match"];
        }

        return getTests(pos)[0]["match"];
      }

      function positionCanMatchDefinition(pos, def) {
        var valid = false,
            tests = getTests(pos);

        for (var tndx in tests) {
          if (tests[tndx]["match"] && tests[tndx]["match"].def == def) {
            valid = true;
            break;
          }
        }

        return valid;
      }

      ;

      function getTests(pos, ndxIntlzr, tstPs) {
        var maskTokens = getMaskSet()["maskToken"],
            testPos = ndxIntlzr ? tstPs : 0,
            ndxInitializer = ndxIntlzr || [0],
            matches = [],
            insertStop = false;

        function ResolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
          function handleMatch(match, loopNdx, quantifierRecurse) {
            if (testPos == pos && match.matches == undefined) {
              matches.push({
                "match": match,
                "locator": loopNdx.reverse()
              });
              return true;
            } else if (match.matches != undefined) {
              if (match.isGroup && quantifierRecurse !== true) {
                match = handleMatch(maskToken.matches[tndx + 1], loopNdx);
                if (match) return true;
              } else if (match.isOptional) {
                var optionalToken = match;
                match = ResolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);

                if (match) {
                  var latestMatch = matches[matches.length - 1]["match"];
                  var isFirstMatch = optionalToken.matches.indexOf(latestMatch) == 0;

                  if (isFirstMatch) {
                    insertStop = true;
                  }

                  testPos = pos;
                }
              } else if (match.isAlternator) {} else if (match.isQuantifier && quantifierRecurse !== true) {
                var qt = match;

                for (var qndx = ndxInitializer.length > 0 && quantifierRecurse !== true ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                  var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
                  match = handleMatch(tokenGroup, [qndx].concat(loopNdx), true);

                  if (match) {
                    var latestMatch = matches[matches.length - 1]["match"];
                    latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1;
                    var isFirstMatch = tokenGroup.matches.indexOf(latestMatch) == 0;

                    if (isFirstMatch) {
                      if (qndx > qt.quantifier.min - 1) {
                        insertStop = true;
                        testPos = pos;
                        break;
                      } else return true;
                    } else {
                      return true;
                    }
                  }
                }
              } else {
                match = ResolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                if (match) return true;
              }
            } else testPos++;
          }

          for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
            if (maskToken.matches[tndx]["isQuantifier"] !== true) {
              var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);

              if (match && testPos == pos) {
                return match;
              } else if (testPos > pos) {
                break;
              }
            }
          }
        }

        if (ndxIntlzr == undefined) {
          var previousPos = pos - 1,
              test;

          while ((test = getMaskSet()['validPositions'][previousPos]) == undefined && previousPos > -1) {
            previousPos--;
          }

          if (test != undefined && previousPos > -1) {
            testPos = previousPos;
            ndxInitializer = test["locator"].slice();
          } else {
            previousPos = pos - 1;

            while ((test = getMaskSet()['tests'][previousPos]) == undefined && previousPos > -1) {
              previousPos--;
            }

            if (test != undefined && previousPos > -1) {
              testPos = previousPos;
              ndxInitializer = test[0]["locator"].slice();
            }
          }
        }

        for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
          var match = ResolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);

          if (match && testPos == pos || testPos > pos) {
            break;
          }
        }

        if (matches.length == 0 || insertStop) matches.push({
          "match": {
            fn: null,
            cardinality: 0,
            optionality: true,
            casing: null,
            def: ""
          },
          "locator": []
        });
        getMaskSet()['tests'][pos] = matches;
        return matches;
      }

      function getBufferTemplate() {
        if (getMaskSet()['_buffer'] == undefined) {
          getMaskSet()["_buffer"] = getMaskTemplate(false, 1);
        }

        return getMaskSet()['_buffer'];
      }

      function getBuffer() {
        if (getMaskSet()['buffer'] == undefined) {
          getMaskSet()['buffer'] = getMaskTemplate(true, getLastValidPosition(), true);
        }

        return getMaskSet()['buffer'];
      }

      function refreshFromBuffer(start, end) {
        var buffer = getBuffer().slice();

        for (var i = start; i < end; i++) {
          if (buffer[i] != getPlaceholder(i) && buffer[i] != opts.skipOptionalPartCharacter) {
            isValid(i, buffer[i], true, true);
          }
        }
      }

      function casing(elem, test) {
        switch (test.casing) {
          case "upper":
            elem = elem.toUpperCase();
            break;

          case "lower":
            elem = elem.toLowerCase();
            break;
        }

        return elem;
      }

      function isValid(pos, c, strict, fromSetValid) {
        strict = strict === true;

        function _isValid(position, c, strict, fromSetValid) {
          var rslt = false;
          $.each(getTests(position), function (ndx, tst) {
            var test = tst["match"];
            var loopend = c ? 1 : 0,
                chrs = '',
                buffer = getBuffer();

            for (var i = test.cardinality; i > loopend; i--) {
              chrs += getBufferElement(position - (i - 1));
            }

            if (c) {
              chrs += c;
            }

            rslt = test.fn != null ? test.fn.test(chrs, buffer, position, strict, opts) : (c == test["def"] || c == opts.skipOptionalPartCharacter) && test["def"] != "" ? {
              c: test["def"],
              pos: position
            } : false;

            if (rslt !== false) {
              var elem = rslt.c != undefined ? rslt.c : c;
              elem = elem == opts.skipOptionalPartCharacter && test["fn"] === null ? test["def"] : elem;
              var validatedPos = position;

              if (rslt["refreshFromBuffer"]) {
                var refresh = rslt["refreshFromBuffer"];
                strict = true;

                if (refresh === true) {
                  getMaskSet()["validPositions"] = {};
                  getMaskSet()["tests"] = {};
                  refreshFromBuffer(0, getBuffer().length);
                } else {
                  refreshFromBuffer(refresh["start"], refresh["end"]);
                }

                if (rslt.pos == undefined && rslt.c == undefined) {
                  rslt.pos = getLastValidPosition();
                  return false;
                }

                validatedPos = rslt.pos != undefined ? rslt.pos : position;
                tst = getTests(validatedPos)[0];
              } else if (rslt !== true && rslt["pos"] != position) {
                validatedPos = rslt["pos"];
                refreshFromBuffer(position, validatedPos);
                tst = getTests(validatedPos)[0];
              }

              if (ndx > 0) {
                resetMaskSet(true);
              }

              if (!setValidPosition(validatedPos, $.extend({}, tst, {
                "input": casing(elem, test)
              }), fromSetValid)) rslt = false;
              return false;
            }
          });
          return rslt;
        }

        var maskPos = pos;

        var result = _isValid(maskPos, c, strict, fromSetValid);

        if (!strict && result === false) {
          var currentPosValid = getMaskSet()["validPositions"][maskPos];

          if (currentPosValid && currentPosValid["match"].fn == null && (currentPosValid["match"].def == c || c == opts.skipOptionalPartCharacter)) {
            result = {
              "caret": seekNext(maskPos)
            };
          } else if ((opts.insertMode || getMaskSet()["validPositions"][seekNext(maskPos)] == undefined) && !isMask(maskPos)) {
            for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
              result = _isValid(nPos, c, strict, fromSetValid);

              if (result !== false) {
                maskPos = nPos;
                break;
              }
            }
          }
        }

        if (result === true) result = {
          "pos": maskPos
        };
        return result;
      }

      function isMask(pos) {
        var test = getTest(pos);
        return test.fn != null ? test.fn : false;
      }

      function getMaskLength() {
        var maskLength;
        maxLength = $el.prop('maxLength');
        if (maxLength == -1) maxLength = undefined;

        if (opts.greedy == false) {
          var pos,
              lvp = getLastValidPosition(),
              testPos = getMaskSet()["validPositions"][lvp],
              ndxIntlzr = testPos != undefined ? testPos["locator"].slice() : undefined;

          for (pos = lvp + 1; testPos == undefined || testPos["match"]["fn"] != null || testPos["match"]["fn"] == null && testPos["match"]["def"] != ""; pos++) {
            testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
            ndxIntlzr = testPos["locator"].slice();
          }

          maskLength = pos;
        } else maskLength = getBuffer().length;

        return maxLength == undefined || maskLength < maxLength ? maskLength : maxLength;
      }

      function seekNext(pos) {
        var maskL = getMaskLength();
        if (pos >= maskL) return maskL;
        var position = pos;

        while (++position < maskL && !isMask(position) && (opts.nojumps !== true || opts.nojumpsThreshold > position)) {}

        return position;
      }

      function seekPrevious(pos) {
        var position = pos;
        if (position <= 0) return 0;

        while (--position > 0 && !isMask(position)) {}

        ;
        return position;
      }

      function getBufferElement(position) {
        return getMaskSet()["validPositions"][position] == undefined ? getPlaceholder(position) : getMaskSet()["validPositions"][position]["input"];
      }

      function writeBuffer(input, buffer, caretPos) {
        input._valueSet(buffer.join(''));

        if (caretPos != undefined) {
          caret(input, caretPos);
        }
      }

      function getPlaceholder(pos, test) {
        test = test || getTest(pos);
        return test["fn"] == null ? test["def"] : opts.placeholder.charAt(pos % opts.placeholder.length);
      }

      function checkVal(input, writeOut, strict, nptvl, intelliCheck) {
        var inputValue = nptvl != undefined ? nptvl.slice() : truncateInput(input._valueGet()).split('');
        resetMaskSet();
        if (writeOut) input._valueSet("");
        $.each(inputValue, function (ndx, charCode) {
          if (intelliCheck === true) {
            var p = getMaskSet()["p"],
                lvp = p == -1 ? p : seekPrevious(p),
                pos = lvp == -1 ? ndx : seekNext(lvp);

            if ($.inArray(charCode, getBufferTemplate().slice(lvp + 1, pos)) == -1) {
              keypressEvent.call(input, undefined, true, charCode.charCodeAt(0), false, strict, ndx);
            }
          } else {
            keypressEvent.call(input, undefined, true, charCode.charCodeAt(0), false, strict, ndx);
            strict = strict || ndx > 0 && ndx > getMaskSet()["p"];
          }
        });
        if (writeOut) writeBuffer(input, getBuffer(), seekNext(getLastValidPosition(0)));
      }

      function escapeRegex(str) {
        return $.inputmask.escapeRegex.call(this, str);
      }

      function truncateInput(inputValue) {
        return inputValue.replace(new RegExp("(" + escapeRegex(getBufferTemplate().join('')) + ")*$"), "");
      }

      function clearOptionalTail(input) {
        var buffer = getBuffer(),
            tmpBuffer = buffer.slice(),
            pos,
            lvp = getLastValidPosition(),
            positions = {},
            ndxIntlzr = getMaskSet()["validPositions"][lvp]["locator"].slice(),
            testPos;

        for (pos = lvp + 1; pos < tmpBuffer.length; pos++) {
          testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
          ndxIntlzr = testPos["locator"].slice();
          positions[pos] = testPos;
        }

        for (pos = tmpBuffer.length - 1; pos > lvp; pos--) {
          testPos = positions[pos]["match"];

          if (testPos.optionality && tmpBuffer[pos] == getPlaceholder(pos, testPos)) {
            tmpBuffer.pop();
          } else break;
        }

        writeBuffer(input, tmpBuffer);
      }

      function unmaskedvalue($input, skipDatepickerCheck) {
        if ($input.data('_inputmask') && (skipDatepickerCheck === true || !$input.hasClass('hasDatepicker'))) {
          var umValue = [],
              vps = getMaskSet()["validPositions"];

          for (var pndx in vps) {
            if (vps[pndx]["match"] && vps[pndx]["match"].fn != null) {
              umValue.push(vps[pndx]["input"]);
            }
          }

          var unmaskedValue = (isRTL ? umValue.reverse() : umValue).join('');
          var bufferValue = (isRTL ? getBuffer().reverse() : getBuffer()).join('');
          return $.isFunction(opts.onUnMask) ? opts.onUnMask.call($input, bufferValue, unmaskedValue, opts) : unmaskedValue;
        } else {
          return $input[0]._valueGet();
        }
      }

      function TranslatePosition(pos) {
        if (isRTL && typeof pos == 'number' && (!opts.greedy || opts.placeholder != "")) {
          var bffrLght = getBuffer().length;
          pos = bffrLght - pos;
        }

        return pos;
      }

      function caret(input, begin, end) {
        var npt = input.jquery && input.length > 0 ? input[0] : input,
            range;

        if (typeof begin == 'number') {
          begin = TranslatePosition(begin);
          end = TranslatePosition(end);
          end = typeof end == 'number' ? end : begin;
          var data = $(npt).data('_inputmask') || {};
          data["caret"] = {
            "begin": begin,
            "end": end
          };
          $(npt).data('_inputmask', data);

          if (!$(npt).is(":visible")) {
            return;
          }

          npt.scrollLeft = npt.scrollWidth;
          if (opts.insertMode == false && begin == end) end++;

          if (npt.setSelectionRange) {
            npt.selectionStart = begin;
            npt.selectionEnd = end;
          } else if (npt.createTextRange) {
            range = npt.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        } else {
          var data = $(npt).data('_inputmask');

          if (!$(npt).is(":visible") && data && data["caret"] != undefined) {
            begin = data["caret"]["begin"];
            end = data["caret"]["end"];
          } else if (npt.setSelectionRange) {
            begin = npt.selectionStart;
            end = npt.selectionEnd;
          } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            begin = 0 - range.duplicate().moveStart('character', -100000);
            end = begin + range.text.length;
          }

          begin = TranslatePosition(begin);
          end = TranslatePosition(end);
          return {
            "begin": begin,
            "end": end
          };
        }
      }

      function isComplete(buffer) {
        if ($.isFunction(opts.isComplete)) return opts.isComplete.call($el, buffer, opts);
        if (opts.repeat == "*") return undefined;
        var complete = false,
            aml = seekPrevious(getMaskLength());

        if (getLastValidPosition() == aml) {
          complete = true;

          for (var i = 0; i <= aml; i++) {
            var mask = isMask(i);

            if (mask && (buffer[i] == undefined || buffer[i] == getPlaceholder(i)) || !mask && buffer[i] != getPlaceholder(i)) {
              complete = false;
              break;
            }
          }
        }

        return complete;
      }

      function isSelection(begin, end) {
        return isRTL ? begin - end > 1 || begin - end == 1 && opts.insertMode : end - begin > 1 || end - begin == 1 && opts.insertMode;
      }

      function installEventRuler(npt) {
        var events = $._data(npt).events;

        $.each(events, function (eventType, eventHandlers) {
          $.each(eventHandlers, function (ndx, eventHandler) {
            if (eventHandler.namespace == "inputmask") {
              if (eventHandler.type != "setvalue") {
                var handler = eventHandler.handler;

                eventHandler.handler = function (e) {
                  if (this.readOnly || this.disabled) e.preventDefault;else return handler.apply(this, arguments);
                };
              }
            }
          });
        });
      }

      function patchValueProperty(npt) {
        function PatchValhook(type) {
          if ($.valHooks[type] == undefined || $.valHooks[type].inputmaskpatch != true) {
            var valueGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
              return elem.value;
            };
            var valueSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
              elem.value = value;
              return elem;
            };
            $.valHooks[type] = {
              get: function get(elem) {
                var $elem = $(elem);

                if ($elem.data('_inputmask')) {
                  if ($elem.data('_inputmask')['opts'].autoUnmask) return $elem.inputmask('unmaskedvalue');else {
                    var result = valueGet(elem),
                        inputData = $elem.data('_inputmask'),
                        maskset = inputData['maskset'],
                        bufferTemplate = maskset['_buffer'];
                    bufferTemplate = bufferTemplate ? bufferTemplate.join('') : '';
                    return result != bufferTemplate ? result : '';
                  }
                } else return valueGet(elem);
              },
              set: function set(elem, value) {
                var $elem = $(elem);
                var result = valueSet(elem, value);
                if ($elem.data('_inputmask')) $elem.triggerHandler('setvalue.inputmask');
                return result;
              },
              inputmaskpatch: true
            };
          }
        }

        var valueProperty;
        if (Object.getOwnPropertyDescriptor) valueProperty = Object.getOwnPropertyDescriptor(npt, "value");

        if (valueProperty && valueProperty.get) {
          if (!npt._valueGet) {
            var valueGet = valueProperty.get;
            var valueSet = valueProperty.set;

            npt._valueGet = function () {
              return isRTL ? valueGet.call(this).split('').reverse().join('') : valueGet.call(this);
            };

            npt._valueSet = function (value) {
              valueSet.call(this, isRTL ? value.split('').reverse().join('') : value);
            };

            Object.defineProperty(npt, "value", {
              get: function get() {
                var $self = $(this),
                    inputData = $(this).data('_inputmask');

                if (inputData) {
                  return inputData['opts'].autoUnmask ? $self.inputmask('unmaskedvalue') : valueGet.call(this) != getBufferTemplate().join('') ? valueGet.call(this) : '';
                } else return valueGet.call(this);
              },
              set: function set(value) {
                valueSet.call(this, value);
                $(this).triggerHandler('setvalue.inputmask');
              }
            });
          }
        } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
          if (!npt._valueGet) {
            var valueGet = npt.__lookupGetter__("value");

            var valueSet = npt.__lookupSetter__("value");

            npt._valueGet = function () {
              return isRTL ? valueGet.call(this).split('').reverse().join('') : valueGet.call(this);
            };

            npt._valueSet = function (value) {
              valueSet.call(this, isRTL ? value.split('').reverse().join('') : value);
            };

            npt.__defineGetter__("value", function () {
              var $self = $(this),
                  inputData = $(this).data('_inputmask');

              if (inputData) {
                return inputData['opts'].autoUnmask ? $self.inputmask('unmaskedvalue') : valueGet.call(this) != getBufferTemplate().join('') ? valueGet.call(this) : '';
              } else return valueGet.call(this);
            });

            npt.__defineSetter__("value", function (value) {
              valueSet.call(this, value);
              $(this).triggerHandler('setvalue.inputmask');
            });
          }
        } else {
          if (!npt._valueGet) {
            npt._valueGet = function () {
              return isRTL ? this.value.split('').reverse().join('') : this.value;
            };

            npt._valueSet = function (value) {
              this.value = isRTL ? value.split('').reverse().join('') : value;
            };
          }

          PatchValhook(npt.type);
        }
      }

      function HandleRemove(input, k, pos) {
        if (opts.numericInput || isRTL) {
          switch (k) {
            case opts.keyCode.BACKSPACE:
              k = opts.keyCode.DELETE;
              break;

            case opts.keyCode.DELETE:
              k = opts.keyCode.BACKSPACE;
              break;
          }

          if (isRTL) {
            var pend = pos.end;
            pos.end = pos.begin;
            pos.begin = pend;
          }
        }

        if (pos.begin == pos.end) {
          var posBegin = k == opts.keyCode.BACKSPACE ? pos.begin - 1 : pos.begin;
          if (k == opts.keyCode.BACKSPACE) pos.begin = seekPrevious(pos.begin);else if (k == opts.keyCode.DELETE) pos.end++;
        } else if (pos.end - pos.begin == 1 && !opts.insertMode) {
          if (k == opts.keyCode.BACKSPACE) pos.begin--;
        }

        stripValidPositions(pos.begin, pos.end);
        var firstMaskPos = seekNext(-1);

        if (getLastValidPosition() < firstMaskPos) {
          getMaskSet()["p"] = firstMaskPos;
        } else {
          getMaskSet()["p"] = pos.begin;
        }
      }

      function keydownEvent(e) {
        skipKeyPressEvent = false;
        var input = this,
            $input = $(input),
            k = e.keyCode,
            pos = caret(input);

        if (k == opts.keyCode.BACKSPACE || k == opts.keyCode.DELETE || iphone && k == 127 || e.ctrlKey && k == 88) {
          e.preventDefault();
          if (k == 88) valueOnFocus = getBuffer().join('');
          HandleRemove(input, k, pos);
          writeBuffer(input, getBuffer(), getMaskSet()["p"]);
          if (input._valueGet() == getBufferTemplate().join('')) $input.trigger('cleared');

          if (opts.showTooltip) {
            $input.prop("title", getMaskSet()["mask"]);
          }
        } else if (k == opts.keyCode.END || k == opts.keyCode.PAGE_DOWN) {
          setTimeout(function () {
            var caretPos = seekNext(getLastValidPosition());
            if (!opts.insertMode && caretPos == getMaskLength() && !e.shiftKey) caretPos--;
            caret(input, e.shiftKey ? pos.begin : caretPos, caretPos);
          }, 0);
        } else if (k == opts.keyCode.HOME && !e.shiftKey || k == opts.keyCode.PAGE_UP) {
          caret(input, 0, e.shiftKey ? pos.begin : 0);
        } else if (k == opts.keyCode.ESCAPE || k == 90 && e.ctrlKey) {
          checkVal(input, true, false, valueOnFocus.split(''));
          $input.click();
        } else if (k == opts.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) {
          opts.insertMode = !opts.insertMode;
          caret(input, !opts.insertMode && pos.begin == getMaskLength() ? pos.begin - 1 : pos.begin);
        } else if (opts.insertMode == false && !e.shiftKey) {
          if (k == opts.keyCode.RIGHT) {
            setTimeout(function () {
              var caretPos = caret(input);
              caret(input, caretPos.begin);
            }, 0);
          } else if (k == opts.keyCode.LEFT) {
            setTimeout(function () {
              var caretPos = caret(input);
              caret(input, caretPos.begin - 1);
            }, 0);
          }
        }

        var currentCaretPos = caret(input);
        var keydownResult = opts.onKeyDown.call(this, e, getBuffer(), opts);

        if (keydownResult && keydownResult["refreshFromBuffer"] === true) {
          getMaskSet()["validPositions"] = {};
          getMaskSet()["tests"] = {};
          refreshFromBuffer(0, getBuffer().length);
          resetMaskSet(true);
          writeBuffer(input, getBuffer());
          caret(input, currentCaretPos.begin, currentCaretPos.end);
        }

        ignorable = $.inArray(k, opts.ignorables) != -1;
      }

      function keypressEvent(e, checkval, k, writeOut, strict, ndx) {
        if (k == undefined && skipKeyPressEvent) return false;
        skipKeyPressEvent = true;
        var input = this,
            $input = $(input);
        e = e || window.event;
        var k = checkval ? k : e.which || e.charCode || e.keyCode;

        if (checkval !== true && !(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) {
          return true;
        } else {
          if (k) {
            if (checkval !== true && k == 46 && e.shiftKey == false && opts.radixPoint == ",") k = 44;
            var pos,
                forwardPosition,
                c = String.fromCharCode(k);

            if (checkval) {
              var pcaret = strict ? ndx : getLastValidPosition() + 1;
              pos = {
                begin: pcaret,
                end: pcaret
              };
            } else {
              pos = caret(input);
            }

            var isSlctn = isSelection(pos.begin, pos.end);

            if (isSlctn) {
              getMaskSet()["undoPositions"] = $.extend(true, {}, getMaskSet()["validPositions"]);
              HandleRemove(input, opts.keyCode.DELETE, pos);

              if (!opts.insertMode) {
                opts.insertMode = !opts.insertMode;
                setValidPosition(pos.begin, strict);
                opts.insertMode = !opts.insertMode;
              }

              isSlctn = !opts.multi;
            }

            getMaskSet()["writeOutBuffer"] = true;
            var p = pos.begin;
            var valResult = isValid(p, c, strict);

            if (valResult !== false) {
              if (valResult !== true) {
                p = valResult.pos != undefined ? valResult.pos : p;
                c = valResult.c != undefined ? valResult.c : c;
              }

              resetMaskSet(true);
              if (valResult.caret != undefined) forwardPosition = valResult.caret;else {
                var vps = getMaskSet()["validPositions"];
                if (vps[p + 1] != undefined && getTestTemplate(pos + 1, vps[p].locator.slice(), p)["match"].def != vps[p + 1]["match"].def) forwardPosition = p + 1;else forwardPosition = seekNext(p);
              }
              getMaskSet()["p"] = forwardPosition;
            }

            if (writeOut !== false) {
              var self = this;
              setTimeout(function () {
                opts.onKeyValidation.call(self, valResult, opts);
              }, 0);

              if (getMaskSet()["writeOutBuffer"] && valResult !== false) {
                var buffer = getBuffer();
                writeBuffer(input, buffer, checkval ? undefined : opts.numericInput ? seekPrevious(forwardPosition) : forwardPosition);

                if (checkval !== true) {
                  setTimeout(function () {
                    if (isComplete(buffer) === true) $input.trigger("complete");
                    skipInputEvent = true;
                    $input.trigger("input");
                  }, 0);
                }
              } else if (isSlctn) {
                getMaskSet()["buffer"] = undefined;
                getMaskSet()["validPositions"] = getMaskSet()["undoPositions"];
              }
            } else if (isSlctn) {
              getMaskSet()["buffer"] = undefined;
              getMaskSet()["validPositions"] = getMaskSet()["undoPositions"];
            }

            if (opts.showTooltip) {
              $input.prop("title", getMaskSet()["mask"]);
            }

            if (e && checkval != true) e.preventDefault ? e.preventDefault() : e.returnValue = false;
          }
        }
      }

      function keyupEvent(e) {
        var $input = $(this),
            input = this,
            k = e.keyCode,
            buffer = getBuffer();
        var keyupResult = opts.onKeyUp.call(this, e, buffer, opts);

        if (keyupResult && keyupResult["refreshFromBuffer"] === true) {
          getMaskSet()["validPositions"] = {};
          getMaskSet()["tests"] = {};
          refreshFromBuffer(0, getBuffer().length);
          resetMaskSet(true);
          writeBuffer(input, getBuffer());
        }

        if (k == opts.keyCode.TAB && opts.showMaskOnFocus) {
          if ($input.hasClass('focus.inputmask') && input._valueGet().length == 0) {
            resetMaskSet();
            buffer = getBuffer();
            writeBuffer(input, buffer);
            caret(input, 0);
            valueOnFocus = getBuffer().join('');
          } else {
            writeBuffer(input, buffer);
            caret(input, TranslatePosition(0), TranslatePosition(getMaskLength()));
          }
        }
      }

      function pasteEvent(e) {
        if (skipInputEvent === true && e.type == "input") {
          skipInputEvent = false;
          return true;
        }

        var input = this,
            $input = $(input);

        if (e.type == "propertychange" && input._valueGet().length <= getMaskLength()) {
          return true;
        }

        setTimeout(function () {
          var pasteValue = $.isFunction(opts.onBeforePaste) ? opts.onBeforePaste.call(input, input._valueGet(), opts) : input._valueGet();
          checkVal(input, true, false, pasteValue.split(''), true);
          if (isComplete(getBuffer()) === true) $input.trigger("complete");
          $input.click();
        }, 0);
      }

      function mobileInputEvent(e) {
        if (skipInputEvent === true && e.type == "input") {
          skipInputEvent = false;
          return true;
        }

        var input = this;

        var caretPos = caret(input),
            currentValue = input._valueGet();

        currentValue = currentValue.replace(new RegExp("(" + escapeRegex(getBufferTemplate().join('')) + ")*"), "");

        if (caretPos.begin > currentValue.length) {
          caret(input, currentValue.length);
          caretPos = caret(input);
        }

        if (getBuffer().length - currentValue.length == 1 && currentValue.charAt(caretPos.begin) != getBuffer()[caretPos.begin] && currentValue.charAt(caretPos.begin + 1) != getBuffer()[caretPos.begin] && !isMask(caretPos.begin)) {
          e.keyCode = opts.keyCode.BACKSPACE;
          keydownEvent.call(input, e);
        }

        e.preventDefault();
      }

      function mask(el) {
        $el = $(el);

        if ($el.is(":input")) {
          $el.data('_inputmask', {
            'maskset': maskset,
            'opts': opts,
            'isRTL': false
          });

          if (opts.showTooltip) {
            $el.prop("title", getMaskSet()["mask"]);
          }

          patchValueProperty(el);
          if (el.dir == "rtl" || opts.rightAlign) $el.css("text-align", "right");

          if (el.dir == "rtl" || opts.numericInput) {
            el.dir = "ltr";
            $el.removeAttr("dir");
            var inputData = $el.data('_inputmask');
            inputData['isRTL'] = true;
            $el.data('_inputmask', inputData);
            isRTL = true;
          }

          $el.unbind(".inputmask");
          $el.removeClass('focus.inputmask');
          $el.closest('form').bind("submit", function () {
            if (valueOnFocus != getBuffer().join('')) {
              $el.change();
            }
          }).bind('reset', function () {
            setTimeout(function () {
              $el.trigger("setvalue");
            }, 0);
          });
          $el.bind("mouseenter.inputmask", function () {
            var $input = $(this),
                input = this;

            if (!$input.hasClass('focus.inputmask') && opts.showMaskOnHover) {
              if (input._valueGet() != getBuffer().join('')) {
                writeBuffer(input, getBuffer());
              }
            }
          }).bind("blur.inputmask", function () {
            var $input = $(this),
                input = this;

            if ($input.data('_inputmask')) {
              var nptValue = input._valueGet(),
                  buffer = getBuffer();

              $input.removeClass('focus.inputmask');

              if (valueOnFocus != getBuffer().join('')) {
                $input.change();
              }

              if (opts.clearMaskOnLostFocus && nptValue != '') {
                if (nptValue == getBufferTemplate().join('')) input._valueSet('');else {
                  clearOptionalTail(input);
                }
              }

              if (isComplete(buffer) === false) {
                $input.trigger("incomplete");

                if (opts.clearIncomplete) {
                  resetMaskSet();
                  if (opts.clearMaskOnLostFocus) input._valueSet('');else {
                    buffer = getBufferTemplate().slice();
                    writeBuffer(input, buffer);
                  }
                }
              }
            }
          }).bind("focus.inputmask", function () {
            var $input = $(this),
                input = this,
                nptValue = input._valueGet();

            if (opts.showMaskOnFocus && !$input.hasClass('focus.inputmask') && (!opts.showMaskOnHover || opts.showMaskOnHover && nptValue == '')) {
              if (input._valueGet() != getBuffer().join('')) {
                writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
              }
            }

            $input.addClass('focus.inputmask');
            valueOnFocus = getBuffer().join('');
          }).bind("mouseleave.inputmask", function () {
            var $input = $(this),
                input = this;

            if (opts.clearMaskOnLostFocus) {
              if (!$input.hasClass('focus.inputmask') && input._valueGet() != $input.attr("placeholder")) {
                if (input._valueGet() == getBufferTemplate().join('') || input._valueGet() == '') input._valueSet('');else {
                  clearOptionalTail(input);
                }
              }
            }
          }).bind("click.inputmask", function () {
            var input = this;
            setTimeout(function () {
              var selectedCaret = caret(input),
                  buffer = getBuffer();

              if (selectedCaret.begin == selectedCaret.end) {
                var clickPosition = isRTL ? TranslatePosition(selectedCaret.begin) : selectedCaret.begin,
                    lvp = getLastValidPosition(clickPosition),
                    lastPosition = seekNext(lvp);

                if (clickPosition < lastPosition) {
                  if (isMask(clickPosition)) caret(input, clickPosition);else caret(input, seekNext(clickPosition));
                } else caret(input, lastPosition);
              }
            }, 0);
          }).bind('dblclick.inputmask', function () {
            var input = this;
            setTimeout(function () {
              caret(input, 0, seekNext(getLastValidPosition()));
            }, 0);
          }).bind(PasteEventType + ".inputmask dragdrop.inputmask drop.inputmask", pasteEvent).bind('setvalue.inputmask', function () {
            var input = this;
            checkVal(input, true);
            valueOnFocus = getBuffer().join('');
            if (input._valueGet() == getBufferTemplate().join('')) input._valueSet('');
          }).bind('complete.inputmask', opts.oncomplete).bind('incomplete.inputmask', opts.onincomplete).bind('cleared.inputmask', opts.oncleared);
          $el.bind("keydown.inputmask", keydownEvent).bind("keypress.inputmask", keypressEvent).bind("keyup.inputmask", keyupEvent);

          if (android || androidfirefox || androidchrome || kindle) {
            if (PasteEventType == "input") {
              $el.unbind(PasteEventType + ".inputmask");
            }

            $el.bind("input.inputmask", mobileInputEvent);
          }

          if (msie1x) $el.bind("input.inputmask", pasteEvent);
          var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(el, el._valueGet(), opts) : el._valueGet();
          checkVal(el, false, false, initialValue.split(''), true);
          writeBuffer(el, getBuffer());
          valueOnFocus = getBuffer().join('');
          var activeElement;

          try {
            activeElement = document.activeElement;
          } catch (e) {}

          if (activeElement === el) {
            $el.addClass('focus.inputmask');
            caret(el, seekNext(getLastValidPosition()));
          } else if (opts.clearMaskOnLostFocus) {
            if (getBuffer().join('') == getBufferTemplate().join('')) {
              el._valueSet('');
            } else {
              clearOptionalTail(el);
            }
          } else {
            writeBuffer(el, getBuffer());
          }

          installEventRuler(el);
        }
      }

      if (actionObj != undefined) {
        switch (actionObj["action"]) {
          case "isComplete":
            $el = $(actionObj["el"]);
            return isComplete(actionObj["buffer"]);

          case "unmaskedvalue":
            $el = actionObj["$input"];
            isRTL = actionObj["$input"].data('_inputmask')['isRTL'];
            return unmaskedvalue(actionObj["$input"], actionObj["skipDatepickerCheck"]);

          case "mask":
            mask(actionObj["el"]);
            break;

          case "format":
            $el = $({});
            $el.data('_inputmask', {
              'maskset': maskset,
              'opts': opts,
              'isRTL': opts.numericInput
            });

            if (opts.numericInput) {
              isRTL = true;
            }

            var valueBuffer = actionObj["value"].split('');
            checkVal($el, false, false, isRTL ? valueBuffer.reverse() : valueBuffer, true);
            return isRTL ? getBuffer().reverse().join('') : getBuffer().join('');

          case "isValid":
            $el = $({});
            $el.data('_inputmask', {
              'maskset': maskset,
              'opts': opts,
              'isRTL': opts.numericInput
            });

            if (opts.numericInput) {
              isRTL = true;
            }

            var valueBuffer = actionObj["value"].split('');
            checkVal($el, false, true, isRTL ? valueBuffer.reverse() : valueBuffer);
            return isComplete(getBuffer());
        }
      }
    };

    var multiMaskScope = function multiMaskScope(el, masksets, opts) {
      function PatchValhookMulti(type) {
        if ($.valHooks[type] == undefined || $.valHooks[type].inputmaskmultipatch != true) {
          var valueGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
            return elem.value;
          };
          var valueSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
            elem.value = value;
            return elem;
          };
          $.valHooks[type] = {
            get: function get(elem) {
              var $elem = $(elem);

              if ($elem.data('_inputmask-multi')) {
                var data = $elem.data('_inputmask-multi');
                return valueGet(data["elmasks"][data["activeMasksetIndex"]]);
              } else return valueGet(elem);
            },
            set: function set(elem, value) {
              var $elem = $(elem);
              var result = valueSet(elem, value);
              if ($elem.data('_inputmask-multi')) $elem.triggerHandler('setvalue');
              return result;
            },
            inputmaskmultipatch: true
          };
        }
      }

      function mcaret(input, begin, end) {
        var npt = input.jquery && input.length > 0 ? input[0] : input,
            range;

        if (typeof begin == 'number') {
          begin = TranslatePosition(begin);
          end = TranslatePosition(end);
          end = typeof end == 'number' ? end : begin;

          if (npt != el) {
            var data = $(npt).data('_inputmask') || {};
            data["caret"] = {
              "begin": begin,
              "end": end
            };
            $(npt).data('_inputmask', data);
          }

          if (!$(npt).is(":visible")) {
            return;
          }

          npt.scrollLeft = npt.scrollWidth;
          if (opts.insertMode == false && begin == end) end++;

          if (npt.setSelectionRange) {
            npt.selectionStart = begin;
            npt.selectionEnd = end;
          } else if (npt.createTextRange) {
            range = npt.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        } else {
          var data = $(npt).data('_inputmask');

          if (!$(npt).is(":visible") && data && data["caret"] != undefined) {
            begin = data["caret"]["begin"];
            end = data["caret"]["end"];
          } else if (npt.setSelectionRange) {
            begin = npt.selectionStart;
            end = npt.selectionEnd;
          } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            begin = 0 - range.duplicate().moveStart('character', -100000);
            end = begin + range.text.length;
          }

          begin = TranslatePosition(begin);
          end = TranslatePosition(end);
          return {
            "begin": begin,
            "end": end
          };
        }
      }

      function TranslatePosition(pos) {
        if (isRTL && typeof pos == 'number' && (!opts.greedy || opts.placeholder != "")) {
          var bffrLght = el.value.length;
          pos = bffrLght - pos;
        }

        return pos;
      }

      function determineActiveMask(eventType, elmasks) {
        if (eventType != "multiMaskScope") {
          if ($.isFunction(opts.determineActiveMasksetIndex)) activeMasksetIndex = opts.determineActiveMasksetIndex.call($el, eventType, elmasks);else {
            var lpc = -1,
                cp = -1,
                lvp = -1;
            $.each(elmasks, function (ndx, lmsk) {
              var data = $(lmsk).data('_inputmask');
              var maskset = data["maskset"];
              var lastValidPosition = -1,
                  validPositionCount = 0,
                  caretPos = mcaret(lmsk).begin;

              for (var posNdx in maskset["validPositions"]) {
                var psNdx = parseInt(posNdx);
                if (psNdx > lastValidPosition) lastValidPosition = psNdx;
                validPositionCount++;
              }

              if (validPositionCount > lpc || validPositionCount == lpc && cp > caretPos && lvp > lastValidPosition || validPositionCount == lpc && cp == caretPos && lvp < lastValidPosition) {
                lpc = validPositionCount;
                cp = caretPos;
                activeMasksetIndex = ndx;
                lvp = lastValidPosition;
              }
            });
          }
          var data = $el.data('_inputmask-multi') || {
            "activeMasksetIndex": 0,
            "elmasks": elmasks
          };
          data["activeMasksetIndex"] = activeMasksetIndex;
          $el.data('_inputmask-multi', data);
        }

        if (["focus"].indexOf(eventType) == -1 && el.value != elmasks[activeMasksetIndex]._valueGet()) {
          var value = $(elmasks[activeMasksetIndex]).val() == "" ? elmasks[activeMasksetIndex]._valueGet() : $(elmasks[activeMasksetIndex]).val();
          el.value = value;
        }

        if (["blur", "focus"].indexOf(eventType) == -1) {
          if ($(elmasks[activeMasksetIndex]).hasClass("focus.inputmask")) {
            var activeCaret = mcaret(elmasks[activeMasksetIndex]);
            mcaret(el, activeCaret.begin, activeCaret.end);
          }
        }
      }

      opts.multi = true;
      var $el = $(el),
          isRTL = el.dir == "rtl" || opts.numericInput;
      var activeMasksetIndex = 0,
          elmasks = $.map(masksets, function (msk, ndx) {
        var elMaskStr = '<input type="text" ';
        if ($el.attr("value")) elMaskStr += 'value="' + $el.attr("value") + '" ';
        if ($el.attr("dir")) elMaskStr += 'dir="' + $el.attr("dir") + '" ';
        elMaskStr += '/>';
        var elmask = $(elMaskStr)[0];
        maskScope($.extend(true, {}, msk), opts, {
          "action": "mask",
          "el": elmask
        });
        return elmask;
      });
      $el.data('_inputmask-multi', {
        "activeMasksetIndex": 0,
        "elmasks": elmasks
      });
      if (el.dir == "rtl" || opts.rightAlign) $el.css("text-align", "right");
      el.dir = "ltr";
      $el.removeAttr("dir");

      if ($el.attr("value") != "") {
        determineActiveMask("init", elmasks);
      }

      $el.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress", function (e) {
        var caretPos = mcaret(el),
            k,
            goDetermine = true;

        if (e.type == "keydown") {
          k = e.keyCode;

          if (k == opts.keyCode.DOWN && activeMasksetIndex < elmasks.length - 1) {
            activeMasksetIndex++;
            determineActiveMask("multiMaskScope", elmasks);
            return false;
          } else if (k == opts.keyCode.UP && activeMasksetIndex > 0) {
            activeMasksetIndex--;
            determineActiveMask("multiMaskScope", elmasks);
            return false;
          }

          if (e.ctrlKey || e.shiftKey || e.altKey) {
            return true;
          }
        } else if (e.type == "keypress" && (e.ctrlKey || e.shiftKey || e.altKey)) {
          return true;
        }

        $.each(elmasks, function (ndx, lmnt) {
          if (e.type == "keydown") {
            k = e.keyCode;

            if (k == opts.keyCode.BACKSPACE && lmnt._valueGet().length < caretPos.begin) {
              return;
            } else if (k == opts.keyCode.TAB) {
              goDetermine = false;
            } else if (k == opts.keyCode.RIGHT) {
              mcaret(lmnt, caretPos.begin + 1, caretPos.end + 1);
              goDetermine = false;
              return;
            } else if (k == opts.keyCode.LEFT) {
              mcaret(lmnt, caretPos.begin - 1, caretPos.end - 1);
              goDetermine = false;
              return;
            }
          }

          if (["click"].indexOf(e.type) != -1) {
            mcaret(lmnt, TranslatePosition(caretPos.begin), TranslatePosition(caretPos.end));

            if (caretPos.begin != caretPos.end) {
              goDetermine = false;
              return;
            }
          }

          if (["keydown"].indexOf(e.type) != -1 && caretPos.begin != caretPos.end) {
            mcaret(lmnt, caretPos.begin, caretPos.end);
          }

          $(lmnt).triggerHandler(e);
        });

        if (goDetermine) {
          setTimeout(function () {
            determineActiveMask(e.type, elmasks);
          }, 0);
        }
      });
      $el.bind(PasteEventType + " dragdrop drop setvalue", function (e) {
        var caretPos = mcaret(el);
        setTimeout(function () {
          $.each(elmasks, function (ndx, lmnt) {
            lmnt._valueSet(el.value);

            $(lmnt).triggerHandler(e);
          });
          setTimeout(function () {
            determineActiveMask(e.type, elmasks);
          }, 0);
        }, 0);
      });
      PatchValhookMulti(el.type);
    };

    var msie1x = typeof ScriptEngineMajorVersion === "function" ? ScriptEngineMajorVersion() : new Function("/*@cc_on return @_jscript_version; @*/")() >= 10,
        ua = navigator.userAgent,
        iphone = ua.match(new RegExp("iphone", "i")) !== null,
        android = ua.match(new RegExp("android.*safari.*", "i")) !== null,
        androidchrome = ua.match(new RegExp("android.*chrome.*", "i")) !== null,
        androidfirefox = ua.match(new RegExp("android.*firefox.*", "i")) !== null,
        kindle = /Kindle/i.test(ua) || /Silk/i.test(ua) || /KFTT/i.test(ua) || /KFOT/i.test(ua) || /KFJWA/i.test(ua) || /KFJWI/i.test(ua) || /KFSOWI/i.test(ua) || /KFTHWA/i.test(ua) || /KFTHWI/i.test(ua) || /KFAPWA/i.test(ua) || /KFAPWI/i.test(ua),
        PasteEventType = isInputEventSupported('paste') ? 'paste' : isInputEventSupported('input') ? 'input' : "propertychange";
    ;
    ;
    $.inputmask = {
      defaults: {
        placeholder: "_",
        optionalmarker: {
          start: "[",
          end: "]"
        },
        quantifiermarker: {
          start: "{",
          end: "}"
        },
        groupmarker: {
          start: "(",
          end: ")"
        },
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        oncomplete: $.noop,
        onincomplete: $.noop,
        oncleared: $.noop,
        repeat: 0,
        greedy: true,
        autoUnmask: false,
        clearMaskOnLostFocus: true,
        insertMode: true,
        clearIncomplete: false,
        aliases: {},
        onKeyUp: $.noop,
        onKeyDown: $.noop,
        onBeforeMask: undefined,
        onBeforePaste: undefined,
        onUnMask: undefined,
        showMaskOnFocus: true,
        showMaskOnHover: true,
        onKeyValidation: $.noop,
        skipOptionalPartCharacter: " ",
        showTooltip: false,
        numericInput: false,
        getLastValidPosition: undefined,
        rightAlign: false,
        radixPoint: "",
        definitions: {
          '9': {
            validator: "[0-9]",
            cardinality: 1,
            definitionSymbol: "*"
          },
          'a': {
            validator: "[A-Za-z\u0410-\u044F\u0401\u0451]",
            cardinality: 1,
            definitionSymbol: "*"
          },
          '*': {
            validator: "[A-Za-z\u0410-\u044F\u0401\u04510-9]",
            cardinality: 1
          }
        },
        keyCode: {
          ALT: 18,
          BACKSPACE: 8,
          CAPS_LOCK: 20,
          COMMA: 188,
          COMMAND: 91,
          COMMAND_LEFT: 91,
          COMMAND_RIGHT: 93,
          CONTROL: 17,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          INSERT: 45,
          LEFT: 37,
          MENU: 93,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SHIFT: 16,
          SPACE: 32,
          TAB: 9,
          UP: 38,
          WINDOWS: 91
        },
        ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
        isComplete: undefined,
        multi: false,
        nojumps: false,
        nojumpsThreshold: 0,
        determineActiveMasksetIndex: undefined
      },
      masksCache: {},
      escapeRegex: function escapeRegex(str) {
        var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
        return str.replace(new RegExp('(\\' + specials.join('|\\') + ')', 'gim'), '\\$1');
      },
      format: function format(value, options) {
        var opts = $.extend(true, {}, $.inputmask.defaults, options);
        resolveAlias(opts.alias, options, opts);
        return maskScope(generateMaskSet(opts), opts, {
          "action": "format",
          "value": value
        });
      },
      isValid: function isValid(value, options) {
        var opts = $.extend(true, {}, $.inputmask.defaults, options);
        resolveAlias(opts.alias, options, opts);
        return maskScope(generateMaskSet(opts), opts, {
          "action": "isValid",
          "value": value
        });
      }
    };

    $.fn.inputmask = function (fn, options) {
      function importAttributeOptions(npt, opts) {
        var $npt = $(npt);

        for (var option in opts) {
          var optionData = $npt.data("inputmask-" + option.toLowerCase());
          if (optionData != undefined) opts[option] = optionData;
        }

        return opts;
      }

      var opts = $.extend(true, {}, $.inputmask.defaults, options),
          maskset;

      if (typeof fn === "string") {
        switch (fn) {
          case "mask":
            resolveAlias(opts.alias, options, opts);
            maskset = generateMaskSet(opts);

            if (maskset.length == 0) {
              return this;
            }

            return this.each(function () {
              if ($.isArray(maskset)) {
                multiMaskScope(this, maskset, importAttributeOptions(this, opts));
              } else maskScope($.extend(true, {}, maskset), importAttributeOptions(this, opts), {
                "action": "mask",
                "el": this
              });
            });

          case "unmaskedvalue":
            var $input = $(this),
                input = this;

            if ($input.data('_inputmask')) {
              maskset = $input.data('_inputmask')['maskset'];
              opts = $input.data('_inputmask')['opts'];
              return maskScope(maskset, opts, {
                "action": "unmaskedvalue",
                "$input": $input
              });
            } else return $input.val();

          case "remove":
            return this.each(function () {
              var $input = $(this),
                  input = this;

              if ($input.data('_inputmask')) {
                maskset = $input.data('_inputmask')['maskset'];
                opts = $input.data('_inputmask')['opts'];

                input._valueSet(maskScope(maskset, opts, {
                  "action": "unmaskedvalue",
                  "$input": $input,
                  "skipDatepickerCheck": true
                }));

                $input.unbind(".inputmask");
                $input.removeClass('focus.inputmask');
                $input.removeData('_inputmask');
                var valueProperty;
                if (Object.getOwnPropertyDescriptor) valueProperty = Object.getOwnPropertyDescriptor(input, "value");

                if (valueProperty && valueProperty.get) {
                  if (input._valueGet) {
                    Object.defineProperty(input, "value", {
                      get: input._valueGet,
                      set: input._valueSet
                    });
                  }
                } else if (document.__lookupGetter__ && input.__lookupGetter__("value")) {
                  if (input._valueGet) {
                    input.__defineGetter__("value", input._valueGet);

                    input.__defineSetter__("value", input._valueSet);
                  }
                }

                try {
                  delete input._valueGet;
                  delete input._valueSet;
                } catch (e) {
                  input._valueGet = undefined;
                  input._valueSet = undefined;
                }
              }
            });
            break;

          case "getemptymask":
            if (this.data('_inputmask')) {
              maskset = this.data('_inputmask')['maskset'];
              return maskset['_buffer'].join('');
            } else return "";

          case "hasMaskedValue":
            return this.data('_inputmask') ? !this.data('_inputmask')['opts'].autoUnmask : false;

          case "isComplete":
            if (this.data('_inputmask')) {
              maskset = this.data('_inputmask')['maskset'];
              opts = this.data('_inputmask')['opts'];
              return maskScope(maskset, opts, {
                "action": "isComplete",
                "buffer": this[0]._valueGet().split(''),
                "el": this
              });
            } else return true;

          case "getmetadata":
            if (this.data('_inputmask')) {
              maskset = this.data('_inputmask')['maskset'];
              return maskset['metadata'];
            } else return undefined;

          default:
            if (!resolveAlias(fn, options, opts)) {
              opts.mask = fn;
            }

            maskset = generateMaskSet(opts);

            if (maskset == undefined) {
              return this;
            }

            return this.each(function () {
              if ($.isArray(maskset)) {
                multiMaskScope(this, maskset, importAttributeOptions(this, opts));
              } else maskScope($.extend(true, {}, maskset), importAttributeOptions(this, opts), {
                "action": "mask",
                "el": this
              });
            });
            break;
        }
      } else if (_typeof(fn) == "object") {
        opts = $.extend(true, {}, $.inputmask.defaults, fn);
        resolveAlias(opts.alias, fn, opts);
        maskset = generateMaskSet(opts);

        if (maskset == undefined) {
          return this;
        }

        return this.each(function () {
          if ($.isArray(maskset)) {
            multiMaskScope(this, maskset, importAttributeOptions(this, opts));
          } else maskScope($.extend(true, {}, maskset), importAttributeOptions(this, opts), {
            "action": "mask",
            "el": this
          });
        });
      } else if (fn == undefined) {
        return this.each(function () {
          var attrOptions = $(this).attr("data-inputmask");

          if (attrOptions && attrOptions != "") {
            try {
              attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
              var dataoptions = $.parseJSON("{" + attrOptions + "}");
              $.extend(true, dataoptions, options);
              opts = $.extend(true, {}, $.inputmask.defaults, dataoptions);
              resolveAlias(opts.alias, dataoptions, opts);
              opts.alias = undefined;
              $(this).inputmask(opts);
            } catch (ex) {}
          }
        });
      }
    };
  }
})(jQuery);

/***/ }),

/***/ "./resources/client/themes/site/js/script95c495c4.js":
/*!***********************************************************!*\
  !*** ./resources/client/themes/site/js/script95c495c4.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.oftt').click(function () {
    if ($(this).is(':checked')) {
      $('.grey-button').removeAttr('disabled');
      $('.grey-button').removeClass('no_valid');
    } else {
      $('.grey-button').attr("disabled", "disabled");
      $('.grey-button').addClass('no_valid');
    }
  });
  $('.oftt2').click(function () {
    if ($(this).is(':checked')) {
      $('.b_o_c').removeAttr('disabled');
      $('.b_o_c').removeClass('no_valid');
    } else {
      $('.b_o_c').attr("disabled", "disabled");
      $('.b_o_c').addClass('no_valid');
    }
  }); //$('#block_4[data-type="background"]').each(function(){
  //    var $bgobj = $(this); // Назначаем объект
  //    $(window).scroll(function() {
  //        console.log($(window).scrollTop());
  //        console.log($bgobj.data('speed'));
  //        var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
  //        var coords = '50% '+ yPos + 'px';
  //        $bgobj.css({ backgroundPosition: coords });
  //    });
  //});
  //new WOW().init();

  $('.fancybox').fancybox({
    closeClick: false,
    scrolling: 'no',
    helpers: {
      overlay: {
        closeClick: false //,
        // locked: true // default behavior

      }
    }
  }); //$('input').placeholder();

  $(function () {
    $('a.scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 0
          }, 1000);
          return false;
        }
      }
    });
  });

  getMothName = function getMothName(monthIndex) {
    var m = "";

    switch (monthIndex) {
      case 0:
        m = "января";
        break;

      case 1:
        m = "февраля";
        break;

      case 2:
        m = "марта";
        break;

      case 3:
        m = "апреля";
        break;

      case 4:
        m = "мая";
        break;

      case 5:
        m = "июня";
        break;

      case 6:
        m = "июля";
        break;

      case 7:
        m = "августа";
        break;

      case 8:
        m = "сентября";
        break;

      case 9:
        m = "октября";
        break;

      case 10:
        m = "ноября";
        break;

      case 11:
        m = "декабря";
        break;
    }

    return m;
  };

  var today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  var dd = today.getDate();
  var mm = today.getMonth();
  $(":input").inputmask();
  $('.deadLine').each(function () {
    $(this).text(dd + ' ' + getMothName(mm));
  });

  function checkPhone(phone) {
    var reg = /^((8|\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    var _this = phone.val().trim();

    if (reg.test(_this)) {
      return true;
    } else {
      return false;
    }
  } //$("#send_form_2").validate({
  //	rules: {
  //		your_name: "required",
  //		gift: "required",
  //		delivery: "required",
  //		metro: {
  //			required: {
  //				depends: function(element) {
  //					return $("#send_form_2 [name=delivery]").val() === "metro";
  //				}
  //			}
  //		},
  //		address: {
  //			required: {
  //				depends: function(element) {
  //					return $("#send_form_2 [name=delivery]").val() === "address";
  //				}
  //			}
  //		},
  //		date: "required",
  //		"time[from]": "required",
  //		"time[to]": "required",
  //		tphone: {
  //			required: true,
  //			minlength: 3
  //		}
  //	},
  //	errorPlacement: function(error, element) {
  //		/*if (element.is("select")) {
  //		 element.next(".jq-selectbox__select").addClass("error");
  //		 }*/
  //	}
  //});


  $("#send_form_2, #send_form_3").submit(function (event) {
    $("form fieldset").addClass('wow shake animated');
    shakedAjax();

    if ($(".error").length < 1) {
      $.post("mail/index.html", $(this).serialize()).done(function () {
        setTimeout(function () {
          document.location.href = "mail/thanks" + window.location.search;
        }, 1000);
      });
    }

    return false;
  });
  $('#send_form_1').submit(function () {
    $(".error").removeClass("error");

    if ($('#send_form_1 .main_phone').val() == '') {
      $("#send_form_1 .main_phone").addClass("error");
      $("#send_form_1 fieldset").addClass('wow shake animated');
      shakedAjax();
    }

    if ($(".error").length < 1) {
      $.post("mail/index.html", $(this).serialize()).done(function () {
        setTimeout(function () {
          document.location.href = "/mail/thanks/" + window.location.search;
        }, 1000);
      });
    }

    return false;
  });
  $('.send_order').click(function () {
    $(".error").removeClass("error");

    if ($('#block_1 .phone').val() == '') {
      $("#block_1 .phone").addClass("error");
      $("#block_1 .shake_box").addClass('wow shake animated');
      shakedAjax();
    }

    console.log($('#block_1 .phone').val());

    if ($(".error").length < 1) {
      $.post("mail/index.html", {
        z: 1,
        phone: $('#block_1 .phone').val(),
        name: $('#block_1 [name=top_name]').val() + ' ' + $('#block_1 .mass_elem.active').html() + ' ' + $('#block_1 .color_action.active .color_name').html()
      }).done(function () {
        setTimeout(function () {
          document.location.href = "/mail/thanks/" + window.location.search;
        }, 1000);
      });
    }

    return false;
  });

  var shakedAjax = function shakedAjax() {
    setTimeout(function () {
      $('form').find('fieldset').removeClass('wow shake animated');
      $('.shake_box').removeClass('wow shake animated');
    }, 500);
  };

  function validate_email(target) {
    if ($(target).val() != '') {
      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

      if (pattern.test($(target).val())) {
        // Поле email заполнено (здесь будем писать код валидации)
        $(target).removeClass("error");
      } else {
        $(target).addClass("error");
      }
    } else {
      // Поле email пустое, выводим предупреждающее сообщение
      $(target).addClass("error");
    }
  }

  function validate_phone(target) {
    if ($(target).val() != '') {
      var pattern = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;

      if (pattern.test($(target).val())) {
        $(target).removeClass("error");
      } else {
        $(target).addClass("error");
      }
    } else {
      $(target).addClass("error");
    }
  }

  $("form [name=email]").blur(function () {
    validate_email(this);
  });
  $("form [name=phone]").blur(function () {
    validate_phone(this);
  }); // обмен товара

  $('.change_send').click(function (event) {
    event.preventDefault();
    $(".error").removeClass("error");
    $("#send_form_change .form_select").removeClass("open_select_error");
    validate_email($('#send_form_change [name=email]'));
    validate_phone($('#send_form_change [name=phone]'));

    if ($("#send_form_change [name=date]").val().trim().length < 3) {
      $("#send_form_change [name=date]").addClass("error");
    }

    if ($("#send_form_change [name=item_name]").val().trim().length < 3) {
      $("#send_form_change [name=item_name]").addClass("error");
    }

    var imei_input = $(this).parent('#send_form_change').find("input[name='imei']");

    if ($(this).parent('#send_form_change').find("input[name='imei']").val() != '') {
      var pattern = /^\d+$/;

      if (pattern.test(imei_input.val())) {
        imei_input.removeClass("error");
      } else {
        imei_input.addClass("error");
      }
    } else {
      imei_input.addClass("error");
    }

    if ($("#send_form_change [name=serial]").val().trim().length < 3) {
      $("#send_form_change [name=serial]").addClass("error");
    }

    if ($("#send_form_change [name=issue]").val().trim().length < 3) {
      $("#send_form_change [name=issue]").addClass("error");
    }

    var select = $("#send_form_change [name=open] option:selected").attr("value");

    if (select == "") {
      $("#send_form_change .form_select").addClass("open_select_error");
    }

    if ($("#send_form_change [name=defects]").val().trim().length < 3) {
      $("#send_form_change [name=defects]").addClass("error");
    }

    $("#send_form_change fieldset").addClass('wow shake animated');
    shakedAjax();

    if ($('.error').length < 1) {
      var formData = new FormData($('#send_form_change')[0]);
      $.ajax({
        type: 'POST',
        processData: false,
        contentType: false,
        url: '/mail/send_quality',
        data: formData,
        success: function success(data) {
          $('#change_box').bPopup().close();
        }
      });
    }

    ;
    return false;
  });
  $('.approve_btn').click(function (event) {
    event.preventDefault();
    $(".error").removeClass("error");

    if ($("#send_review_form [name=your_name]").val().trim().length < 1) {
      $("#send_review_form [name=your_name]").addClass("error");
    }

    if ($("#send_review_form [name=city]").val().trim().length < 1) {
      $("#send_review_form [name=city]").addClass("error");
    }

    if ($("#send_review_form [name=issue]").val().trim().length < 3) {
      $("#send_review_form [name=issue]").addClass("error");
    }

    $("#send_review_form fieldset").addClass('wow shake animated');
    shakedAjax();

    if ($('.error').length < 1) {
      $('#send_review').bPopup().close();
    }

    return false;
  });
  $('.control_send').click(function (event) {
    event.preventDefault();
    $(".error").removeClass("error");
    validate_email($('#send_form_control [name=email]'));
    validate_phone($('#send_form_control [name=phone]'));

    if ($("#send_form_control [name=issue]").val().trim().length < 3) {
      $("#send_form_control [name=issue]").addClass("error");
    }

    $("#send_form_control fieldset").addClass('wow shake animated');
    shakedAjax();

    if ($('.error').length < 1) {
      $('#control_box').bPopup().close();
    }

    return false;
  });
  $("#send_form_4").submit(function (event) {
    event.preventDefault();
    $(".error").removeClass("error");

    if ($(this).find("[name=name]").val().trim().length < 3) {
      $(this).find("[name=name]").addClass("error");
    }

    if ($(this).find("[name=city]").val().trim().length < 3) {
      $(this).find("[name=city]").addClass("error");
    }

    if ($(this).find("[name=review]").val().trim().length < 3) {
      $(this).find("[name=review]").addClass("error");
    }

    $("#send_form_4 fieldset").addClass('wow shake animated');
    shakedAjax();

    if ($(this).find(".error").length < 1) {
      document.location.href = "/mail/thanks_review" + window.location.search;
    }

    ;
  });
  $('#block_3 .item_order_button').click(function () {
    $('#frmOrderPhone .item_name').html($(this).closest('.block_3_cat_row').find('.block_3_cat_title').html());
    $('#frmOrderPhone .item_text').html($(this).parent().find('.item_text').html());
    $('#frmOrderPhone .item_color').html($(this).parent().find('.item_color').html());
    $('#frmOrderPhone .item_color .color').attr('onclick', function (val, attr) {
      return "popup" + attr;
    });
    $('#frmOrderPhone .main_color').attr('id', function (val, attr) {
      return "popup" + attr;
    });
    $('#frmOrderPhone .price').html($(this).closest('.block_3_cat_row').find('.price').html());
    $('#frmOrderPhone .price_not_sale span').html($(this).closest('.block_3_cat_row').find('.price_not_sale span').html());
    $('#frmOrderPhone .item_old_price').attr('id', $(this).parent().find('.item_old_price').attr('id'));
    $('#frmOrderPhone .item_old_price').attr('id', function (val, attr) {
      return "popup" + attr;
    });
    $('#frmOrderPhone .item_new_price').html($(this).parent().find('.item_new_price').html());
    $('#frmOrderPhone .item_new_price').attr('id', $(this).parent().find('.item_new_price').attr('id'));
    $('#frmOrderPhone .item_new_price').attr('id', function (val, attr) {
      return "popup" + attr;
    });
    $('#frmOrderPhone .iphone-img').attr('src', $(this).closest('.block_3_cat_row').find('img').attr('src'));
    $('#frmOrderPhone .iphone-img').attr('id', $(this).closest('.block_3_cat_row').find('img').attr('id'));
    $('#frmOrderPhone .iphone-img').attr('id', function (val, attr) {
      return "popup" + attr;
    });
    $('#frmOrderPhone a.btnAction').attr('valcomment', $(this).attr('valinfo'));
    $('#frmOrderPhone input[name=name]').attr('value', $(this).closest('.block_3_cat_row').find('.block_3_cat_title').html() + ' ' + $(this).closest('.block_3_cat_row').find('.mass_elem.active').html() + '  ' + $(this).closest('.block_3_cat_row').find('.color_action.active .color_name').html());
    $('#frmOrderPhone').bPopup({
      speed: 650,
      transition: 'fadeIn',
      positionStyle: 'fixed'
    });
  });
  $('#block_3 .ch').click(function () {
    $('#frmCh .inner .desc').html($(this).next().html());
    $('#frmCh').bPopup({
      speed: 650,
      transition: 'fadeIn'
    });
    return false;
  });

  function changeTextBlock(cls) {
    var testClass = '.for_' + cls;

    if ($('section.block_1').find(testClass).hasClass('active_block')) {
      return;
    }

    $('.block_1 .main_text.active_block').fadeOut('fast', function () {
      $(this).removeClass('active_block');
      $('.block_1').find(testClass).addClass('active_block').fadeIn('fast');
    }); //появление второго блока вызываем в коллбэке, чтобы он не успел появиться до ухода первого
  } // генерация картинок вверху


  select5s16black = function select5s16black() {
    $('#button').attr('valinfo', function (val, attr) {
      return attr + "Black";
    });
    changePicFade('img_main', 'themes/site/img/main_img_black.html');
    $('#img_main_big').attr('href', 'themes/site/img/main_img_black_big.html');
    changeTextBlock('black'); //upd
  };

  select5s16silver = function select5s16silver() {
    $('#button').attr('valinfo', function (val, attr) {
      return attr + "Silver";
    });
    changePicFade('img_main', 'themes/site/img/main_img_silver.html');
    $('#img_main_big').attr('href', 'themes/site/img/main_img_silver_big.html');
    changeTextBlock('silver'); //upd
  };

  select5s16gold = function select5s16gold() {
    $('#button').attr('valinfo', function (val, attr) {
      return attr + "Gold";
    });
    changePicFade('img_main', 'themes/site/img/main_img_gold.html');
    $('#img_main_big').attr('href', 'themes/site/img/main_img_gold_big.html');
    changeTextBlock('gold'); //upd
  };

  removeProdHead = function removeProdHead(id) {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/mail/removeProdHead/',
      data: {
        id: id
      },
      success: function success(result) {
        var deletedProduct = $('.delete-product-' + id).parent();
        deletedProduct.slideToggle("slow");
        setTimeout(function () {
          deletedProduct.remove();
        }, 500);
        $('.product-counter').text('Товаров в корзине: ' + result.count);
        $('.total-product-price span span').text(result.total);
      }
    });
  };

  $('[name="woocommerce_checkout_place_order"]').click(function () {
    setTimeout(sV, 1000);
  });

  function sV() {
    var first = $('.not-valid').first();
    $.scrollTo(first, 1000, {
      offset: -100
    });
  }

  dinamicImagesTop = function dinamicImagesTop(target) {
    var sortId = target[0];
    var img = '/uploads/params/sources/' + target[1];
    var color_name = target[2];
    var prices = target[3];
    var listPrices = '';
    $.each(prices, function () {
      listPrices += '   ' + this.name + ' - <del>' + $.number(this.price, 0, ',', ' ') + '</del> руб. <span><b>' + $.number(this.markup, 0, ',', ' ') + '</b></span> руб.</br>';
    });
    $('#img_main').fadeOut(200, function () {
      $('#img_main').attr('src', img);
      $('#img_main').fadeIn(200);
    });
    sortId = parseInt(sortId);
    $('.block_1 .main_text.active_block').fadeOut('fast', function () {
      var text_inner = '' + 'Цвет: ' + color_name + '</br>' + listPrices;
      $('.block_1').find('.sort_' + sortId + ' .no_red').empty();
      $('.block_1 .sort_' + sortId + ' .no_red').append(text_inner);
      $(this).removeClass('active_block');
      $('.block_1').find('.sort_' + sortId).addClass('active_block').fadeIn('fast');
    }); //var price  = target[2] + ' руб.';
    //var img    = (target[3] == null) ? 'no-image.jpg' : target[3];
    //$("#prod_" + idProd).parent().find('.main_color').text(color);
    //$("#prod_" + idProd).parent().find('.item_new_price').text(price);
    //changePicFade('item_img_' + idProd, '/uploads/params/sources/' + img);
  }; // генерация картинок вверху
  // динамика цен и картинок товара


  changePicFade = function changePicFade(el_id, new_img_url) {
    if ($('#' + el_id).attr('src') == new_img_url) {
      return;
    }

    $('#' + el_id).fadeOut(200, function () {
      $('#' + el_id).attr('src', new_img_url);
      $('#' + el_id).fadeIn(200);
    });
  };

  dinamicParams = function dinamicParams(target) {
    var idProd = target[0];
    var top_id = idProd;
    top_id = parseInt(idProd) + 50;
    var color = target[1];
    var price = target[2] + ' руб.';
    var img = target[3] == null ? 'no-image.jpg' : target[3];
    var paramId = target[4];
    var top = target[5];

    if (top) {
      changePicFade('item_img_' + top_id, '/uploads/params/sources/' + img);
    } else {
      changePicFade('item_img_' + idProd, '/uploads/params/sources/' + img);
    }
  };

  $('.mass_elem, .color_action').on('click', function () {
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    var prodId = $(this).closest('.right').find('.mass_elems .active').attr('data-id');
    var param = $(this).closest('.right').find('.color_actions_box .active').attr('data-param');
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: '/mail/getDinamic',
      data: {
        prodId: prodId,
        param: param
      },
      success: function success(result) {
        console.log(result);
        $('.cat_id_' + result.category).find('.price').html(result.price_2 + ' руб.');
        $('.cat_id_' + result.category).find('.price_not_sale span').html(result.price + ' руб.');
      }
    });
    return false;
  });

  popupdinamicParams = function popupdinamicParams(target) {
    var idProd = target[0];
    var color = target[1];
    var price = target[2] + ' руб.';
    var img = target[3] == null ? 'no-image.jpg' : target[3];
    $("#frmOrderPhone").find('.main_color').text(color);
    $("#frmOrderPhone").find('.item_new_price').text(price);
    changePicFade('popupitem_img_' + idProd, '/uploads/params/sources/' + img);
  }; // динамика цен и картинок товара


  $('.item_color').find('.color:first').addClass('active_color');
  $('.item_color').on('click', '.color', function () {
    $(this).siblings().removeClass('active_color').end().addClass('active_color');
  });
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); // создаем объект

    if ($(window).width() > 767) {
      $(window).scroll(function () {
        var yPos = $(window).scrollTop(); // вычисляем коэффициент
        // Присваиваем значение background-position

        var coords = 'center ' + yPos + 'px'; // Создаем эффект Parallax Scrolling

        $bgobj.css({
          'background-position': coords
        });
      });
    }
  }); //$('.press-about-img-row .press-about-img img').hover(function(){
  //	var src = ($(this).attr('src').lastIndexOf('-h') != -1) ? $(this).attr('src').replace('-h', '') : $(this).attr('src').replace('.png', '-h.png');
  //	$(this).attr('src', src);
  //});
  //$(".top-menu, .bottom-menu").navigation();
  //$(window).scroll(function(){
  //	if ($(window).scrollTop()>=$(".header-baner-title").height() + $(".header-baner-title").offset().top) {
  //		$('.know-more').attr('class', '').addClass('know-more');
  //		$('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').css('opacity', 0);
  //	}
  //	if ($(window).scrollTop()<=$(".header-baner-title").offset().top) {
  //		$('.know-more').addClass('animated fadeInUp');
  //		$('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').animate({
  //			opacity: 1,
  //		}, 1000);
  //	}
  //});
  //if ($(window).width() < 510) {
  //	$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //	$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //	$('.press-about-title').each(function(){
  //		$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //	});
  //	$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //	$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //}
  //else {
  //	$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\n/g, "<br>"));
  //	$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\n/g, "<br>"));
  //	$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br \/\>/g, "\n"));
  //	$('.press-about-title').each(function(){
  //		$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\n/g, "<br>"));
  //	});
  //	$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\n/g, "<br>"));
  //}
  //$(window).resize(function(){
  //	if ($(window).width() < 510) {
  //		$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //		$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //		$('.press-about-title').each(function(){
  //			$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //		});
  //		$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //		$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\<br\>/g, "\n").replace(/\<br \/\>/g, "\n"));
  //		$('.bonus .press-about-text').html($(".bonus .press-about-text").html().replace(/\<br \/\>/g, "\n"));
  //	}
  //	else {
  //		$(".dream .dream-title").html($(".dream .dream-title").html().replace(/\n/g, "<br>"));
  //		$('.guaranty-text-head').html($(".guaranty-text-head").html().replace(/\n/g, "<br>"));
  //		$('.press-about-title').each(function(){
  //			$(this).html($(this).html().replace(/\<br\>/g, "\n").replace(/\n/g, "<br>"));
  //		});
  //		$('.press-about .press-about-text').html($('.press-about .press-about-text').html().replace(/\n/g, "<br>"));
  //	}
  //});
  //jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_cart_product', function(response) {
  //	$('#basket-popup').append(response);
  //});
  //
  //
  //$('.logo-link').click(function(){
  //	$("html, body").stop().animate({
  //		scrollTop: 0
  //	});
  //	return false;
  //});
  //$(".delete-product").livequery(function() {
  //	$('.delete-product').click(function(){
  //		var product_id = jQuery(this).attr("data-product_id");
  //		jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=product_remove&product_id=' + product_id, function(data) {
  //			jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_product_count', function(response) {
  //				$('.product-counter').empty();
  //				$('.product-counter').append('Товаров в корзине: ' + response);
  //				if (response == 0) {
  //					jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_cart_product', function(response) {
  //						$('#basket-popup > *').remove();
  //						$('#basket-popup').append(response);
  //					});
  //					$('.basket-icon-active').css('display', 'none');
  //					$('.basket-icon').css('display', 'block');
  //					return false;
  //				}
  //				jQuery.post( 'http://apple-store.sale/wp-admin/admin-ajax.php?action=get_total_cart_price', function(response1) {
  //					$('.total-product-price').empty();
  //					$('.total-product-price').append(response1);
  //				});
  //			});
  //		});
  //		var deletedProduct = $(this).parent();
  //		deletedProduct.slideToggle("slow");
  //		setTimeout(function(){
  //			deletedProduct.remove();
  //		}, 500);
  //
  //		return false;
  //	});
  //});

  $(function () {
    $('.color-div').click(function () {
      // $(this).closest('.col-md-7').find('.single_add_to_cart_button').attr('disabled','disabled');
      // $(this).closest('.col-md-7').find('.buy-in-click_act').attr('disabled','disabled');
      $(this).parent().parent().find('.color-div').removeClass('active');
      $(this).addClass('active');
      var id = $(this).attr('id');
      $(this).parent().parent().parent().parent().find('select#pa_color option[value="' + id + '"]').prop('selected', true).change();
      $('.product-' + $(this).attr('data-product') + ' .color-slider li').removeClass('active');
      $('.product-' + $(this).attr('data-product') + ' .phone-preview > img').css('display', 'none');
      $('.product-' + $(this).attr('data-product') + ' .phone-preview > img:eq(' + ($(this).attr('data-number') - 1) + ')').fadeIn();
      $('li[number="product-' + $(this).attr('data-product') + '-' + $(this).attr('data-number') + '"]').addClass('active');

      if ($(window).height() < 491) {
        var next = $(this).parent().parent().next().attr('id');
        $("html, body").stop().animate({
          scrollTop: $('#' + next).offset().top - 70
        });
      }

      var prodId = $(this).closest('.col-md-7').find('.memory-div.active').attr('data-id');
      var param = $(this).closest('.col-md-7').find('.color-div.active').attr('data-param'); // sendAjaxPrice(prodId, param);

      return false;
    });
    $('.memory-div').click(function () {
      // $(this).closest('.col-md-7').find('.single_add_to_cart_button').attr('disabled','disabled');
      // $(this).closest('.col-md-7').find('.buy-in-click_act').attr('disabled','disabled');
      $(this).parent().parent().find('.memory-div').removeClass('active');
      price = $(this).attr('data-price');
      oldprice = $(this).attr('data-oldprice');
      $(this).closest('section').find('.sale_p').text(price);
      $(this).closest('section').find('.main_p').text(oldprice);
      $(this).addClass('active');
      var id = $(this).attr('id');
      $(this).parent().parent().parent().parent().find('select#pa_memory option[value="' + id + '"]').prop('selected', true).change(); //if ($("html").height() < 991) {
      //	var next = $(this).parent().parent().next().attr('id');
      //	$("html, body").stop().animate({
      //		scrollTop: $('#' + next).offset().top - 70
      //	});
      //}

      var prodId = $(this).closest('.col-md-7').find('.memory-div.active').attr('data-id');
      var param = $(this).closest('.col-md-7').find('.color-div.active').attr('data-param'); // sendAjaxPrice(prodId, param);
    });

    var sendAjaxPrice = function sendAjaxPrice(p1, p2) {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/mail/getDinamic',
        data: {
          prodId: p1,
          param: p2
        },
        success: function success(result) {
          $('.price_' + result.category).parent().find('.variation_id').val(result.prodParamId);
          $('.price_' + result.category).find('.sale_p').html(result.price_2 + ' руб.');
          $('.price_' + result.category).find('.main_p').html(result.price + ' руб.');
          $('.price_' + result.category).parent().find('.single_add_to_cart_button').removeAttr('disabled', 'disabled');
          $('.price_' + result.category).parent().find('.buy-in-click_act').removeAttr('disabled', 'disabled');
        }
      });
    };

    $('.single_add_to_cart_button').click(function () {
      console.log($(this).parent().find('.prod_img_hidden').text());
      $(this).parent().find('.color-div').addClass('active');
      $.ajax({
        type: 'POST',
        dataType: 'html',
        url: '/mail/addToCart/',
        data: {
          id: $(this).parent().find('.variation_id').val(),
          price: $(this).parent().parent().prev().find('ins > span').text() ? $(this).parent().parent().prev().find('ins > span').text() : $(this).parent().find('.item_old_price').text(),
          model: $(this).parent().find('.popup_model').text(),
          img: $(this).parent().find('.prod_img_hidden').text(),
          color: $(this).parent().parent().parent().find('.color-div.active p').text(),
          memory: $(this).parent().parent().parent().find('.memory-div.active').text()
        },
        success: function success(result) {
          $('#basket-popup').html(result);
          $('.basket-icon').css({
            display: 'none'
          });
          $('.basket-icon-active').css({
            display: 'block'
          });
          $.fancybox.open([{
            href: '#add-popup'
          }]);
        }
      });
      $(this).parent().find('.color-div').removeClass('active');
      var model = $('.buy-in-click-popup-model').text($(this).parent().find('.popup_model').text());
      var price = $(this).parent().parent().prev().find('ins > span').text();

      if (price == '') {
        var price = $(this).parent().parent().prev().find('span.amount').text();
      }

      $('.buy-in-click-popup-price').text(price);
      var img = $('.buy-in-click-popup-img').attr('src', $(this).parent().find('.prod_img_hidden').text());
      var color = $(this).parent().parent().parent().find('.color-div.active p').text();
      var memory = $(this).parent().parent().parent().find('.memory-div.active').attr('id');
      return false;
    });
    $('.diagonal-size').click(function () {
      $(this).parent().parent().find('.diagonal-size').removeClass('active');
      $(this).addClass('active');
      var id = $(this).attr('id');
      $(this).parent().parent().parent().parent().find('select#pa_diagonal option[value="' + id + '"]').prop('selected', true).change();
    });
    $('.buy-in-click_act').click(function () {
      // $('.buy-in-click-popup-model').text($(this).parent().find('span').text() + ' ' + $(this).closest('.phone-container').find('.color-div.active').data('param'));
      $('.buy-in-click-popup-model').text($(this).parent().find('.popup_model').text());
      $('input[name="phone-model"]').val($(this).parent().find('span').text());
      var price = $(this).parent().parent().prev().find('ins > span').text();

      if (price == '') {
        var price = $(this).parent().parent().prev().find('span.amount').text();
      }

      $('.buy-in-click-popup-price').text(price);
      $('input[name="phone-price"]').val(price);
      $('.buy-in-click-popup-img').attr('src', $(this).parent().find('.prod_img_hidden').text());
      $('input[name="phone-color"]').val($(this).parent().parent().parent().find('.color-div.active p').text());
      $('input[name="phone-memory"]').val($(this).parent().parent().parent().find('.memory-div.active').text());
      $('input[name="ip-model"]').val($(this).parent().parent().parent().find('.phone-model').text()); //$('input[name="phone-diagonal"]').val($(this).parent().parent().parent().find('.diagonal-size.active').attr('id').replace('-', '.'));

      return true;
    });
  });
  $(function () {
    function futureDate(days) {
      var result = new Date(),
          rand = days[Math.floor(Math.random() * days.length)];
      result.setDate(result.getDate() + rand);
      return result;
    }

    $(".delivery-self-date").each(function () {
      var date = $.datepicker.formatDate('dd.mm.yy', futureDate([2]));
      $(this).text(date);
    });

    if ($.fn.styler) {
      $(".form_select").styler({
        onSelectClosed: function onSelectClosed() {
          $(":input", this).blur(); //console.log($(":input", this));
        }
      });
      $("form").on("reset", function () {
        window.setTimeout($.proxy(function () {
          $(":input", this).trigger("refresh");
        }, this), 1);
      });
    }

    $("select.select-delivery").on("change.delivery", function () {
      var val = $(this).val(),
          $cont = $(this).closest(".modal-popup"),
          $item = $(".delivery-" + val, $cont),
          $items = $(".delivery-to > *", $cont),
          $deliveryType = $(".delivery-type-name"),
          $deliveryTypeDate = $(".delivery-type-date"),
          $deliveryText = $(".form_field.date"),
          future = $.datepicker.formatDate('dd.mm.yy', futureDate([2])),
          hour = new Date().getHours();
      $(":input", $items).blur();

      if (val) {
        $item.show().siblings().hide();
      } else {
        $items.hide();
      }

      if (val === "self") {
        $deliveryType.text("самовывоза");
        $deliveryText.attr("data-date", future);
      } else if (val === "metro" || val === "address") {
        $deliveryType.text("доставки");
        $deliveryText.attr("data-date", "");

        if (hour < 19) {
          $deliveryTypeDate.text("сегодня");
        } else {
          $deliveryTypeDate.text("завтра");
        }
      }
    }).trigger("change.delivery"); //$(".select-date").datepicker({
    //	//minDate: 0
    //	onSelect: function(dateText, inst) {
    //		$(this).blur();
    //	}
    //});
    //
    //$(window).on("scroll", function(){
    //	$(".select-date:visible").blur().datepicker( "hide" );
    //});

    $(".question_title").on("click", function () {
      var $cont = $(this).closest(".question"),
          $child = $(".question_content", $cont),
          speed = 150;

      if ($cont.hasClass("opened")) {
        $child.slideUp(speed, function () {
          $cont.removeClass("opened");
        });
      } else {
        $cont.addClass("opened");
        $child.hide().slideDown(speed);
      }

      return false;
    });
    $('.callback_order_button').click(function () {
      $('#frmOrderCallback').bPopup({
        speed: 650,
        transition: 'slideIn'
      });
    });
    $('.add_review_button').click(function () {
      $('#frmOrderReview').bPopup({
        speed: 650,
        transition: 'slideIn'
      });
    });
    $('.change_btn').click(function () {
      $('#change_box').bPopup({
        speed: 650,
        transition: 'slideIn'
      });
      return false;
    });
    $('.control_btn').click(function () {
      $('#control_box').bPopup({
        speed: 650,
        transition: 'slideIn'
      });
      return false;
    });
    $('.complain_btn').click(function () {
      $('#complain_box').bPopup({
        speed: 650,
        transition: 'slideIn'
      });
      return false;
    });
    $('.top_fade').hide();
    $('.top_fade').fadeIn(3000); //$(".top-menu, .bottom-menu").navigation();
    //$(window).scroll(function(){
    //    if ($(window).scrollTop()>=$(".header-baner-title").height() + $(".header-baner-title").offset().top) {
    //        $('.know-more').attr('class', '').addClass('know-more');
    //        $('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').css('opacity', 0);
    //    }
    //    if ($(window).scrollTop()<=$(".header-baner-title").offset().top) {
    //        $('.know-more').addClass('animated fadeInUp');
    //        $('.header-baner-title-desc, .header-baner-title, .header-baner-title-head').animate({
    //            opacity: 1,
    //        }, 1000);
    //    }
    //});
  }); // $('.block_3.list .color-div, .block_3.list .memory-div').on('click', function () {
  //     return g();
  // });
  // $('.dd').easyDropDown({
  //     onChange: function(selected){
  //         $('#order_review .input-radio[name="payment_method"]').attr('checked', false);
  //         $('#order_review .input-radio[value="' + selected.value + '"]').prop('checked', true);
  //     }
  // });
});
$(window).load(function () {
  var hash = window.location.hash; // var hash = document.URL.substr(document.URL.indexOf('#')+1);

  if ($(hash).length > 0) {
    destination = $(hash).offset().top - 0;
    $('html, body').animate({
      scrollTop: destination
    }, 1100);
    return false;
  }
}); // новый метод генериции выборки телефонов

function dinamPhones(attr) {
  $(function () {
    $('.color-div').on('click', function () {
      var colorId = $(this).data('param-color');
      var sizeId = $(this).parent().parent().parent().find('.memory-div.active').data('size-id');
      var category = $(this).parent().parent().parent().find('input[name="category_id"]').val();
      returnChanngePage(colorId, sizeId, category);
    });
    $('.memory-div').on('click', function () {
      var sizeId = $(this).data('size-id');
      var colorId = $(this).parent().parent().parent().find('.color-div.active').data('param-color');
      var category = $(this).parent().parent().parent().find('input[name="category_id"]').val();
      returnChanngePage(colorId, sizeId, category);
    });

    function returnChanngePage(colorId, sizeId, category) {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'send333.php',
        data: {
          category: category,
          colorId: colorId,
          sizeId: sizeId
        },
        success: function success(result) {
          if (result.prodId) {
            if (attr) {
              window.location.href = '/' + result.sef + '/';
            } else {
              $('#product-' + result.cat).find('.single_variation_wrap').fadeIn();
              $('.price_' + result.cat).fadeIn();
              $('#product-' + result.cat).find('.amount.main_p').text(result.price);
              $('#product-' + result.cat).find('.amount.sale_p').text(result.price2);
              $('#product-' + result.cat).find('.popup_model').text(result.name);
              $('#product-' + result.cat).find('.prod_img_hidden').text('/uploads/params/sources/' + result.img);
              $('#product-' + result.cat).find('.popup_model').text(result.product_name);
              $('#product-' + result.cat).find('.variation_id').val(result.prodId);
            }
          } else {
            $('#product-' + category).find('.single_variation_wrap').fadeOut();
            $('.price_' + category).fadeOut(); // $('.woocommerce-variation-add-to-cart').fadeOut();
          }
        }
      });
    }
  }());
}

;

/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js ./resources/client/themes/site/js/mask95c495c4.js ./resources/client/plugins/auxiliary-rater/rater.min.js ./resources/client/themes/site/js/common95c495c4.js ./resources/client/themes/site/js/script95c495c4.js ./resources/client/themes/site/js/form95c495c4.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /app/resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js */"./resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/mask95c495c4.js */"./resources/client/themes/site/js/mask95c495c4.js");
__webpack_require__(/*! /app/resources/client/plugins/auxiliary-rater/rater.min.js */"./resources/client/plugins/auxiliary-rater/rater.min.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/common95c495c4.js */"./resources/client/themes/site/js/common95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/script95c495c4.js */"./resources/client/themes/site/js/script95c495c4.js");
module.exports = __webpack_require__(/*! /app/resources/client/themes/site/js/form95c495c4.js */"./resources/client/themes/site/js/form95c495c4.js");


/***/ })

/******/ });