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

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./resources/client/js/jquery.dlmenu92fa92fa.js":
/*!******************************************************!*\
  !*** ./resources/client/js/jquery.dlmenu92fa92fa.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * jquery.dlmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;

(function ($, window, undefined) {
  'use strict'; // global

  var Modernizr = window.Modernizr,
      $body = $('body');

  $.DLMenu = function (options, element) {
    this.$el = $(element);

    this._init(options);
  }; // the options


  $.DLMenu.defaults = {
    // classes for the animation effects
    animationClasses: {
      "in": 'dl-animate-in-1',
      out: 'dl-animate-out-1'
    }
  };
  $.DLMenu.prototype = {
    _init: function _init(options) {
      // options
      this.options = $.extend(true, {}, $.DLMenu.defaults, options); // cache some elements and initialize some variables

      this._config();

      var animEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
      },
          transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
      }; // animation end event name

      this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.dlmenu'; // transition end event name

      this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.dlmenu', // support for css animations and css transitions
      this.supportAnimations = Modernizr.cssanimations, this.supportTransitions = Modernizr.csstransitions;

      this._initEvents();
    },
    _config: function _config() {
      this.open = false;
      this.$trigger = this.$el.children('button');
      this.$menu = this.$el.children('ul.dl-menu');
      this.$menuitems = this.$menu.find('li:not(.dl-back)');
      this.$back = this.$menu.find('li.dl-back');
    },
    _initEvents: function _initEvents() {
      var self = this;
      this.$trigger.on('click.dlmenu', function () {
        if (self.open) {
          self._closeMenu();
        } else {
          self._openMenu(); // clicking somewhere else makes the menu close


          $body.off('click').on('click.dlmenu', function () {
            self._closeMenu();
          });
        }

        return false;
      });
      this.$menuitems.on('click.dlmenu', function (event) {
        event.stopPropagation();
        var $item = $(this),
            $submenu = $item.children('ul.dl-submenu');

        if ($submenu.length > 0) {
          var $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses["in"]),
              onAnimationEndFn = function onAnimationEndFn() {
            self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.out).addClass('dl-subview');
            $item.addClass('dl-subviewopen').parents('.dl-subviewopen:first').removeClass('dl-subviewopen').addClass('dl-subview');
            $flyin.remove();
          };

          self.$menu.addClass(self.options.animationClasses.out);

          if (self.supportAnimations) {
            self.$menu.on(self.animEndEventName, onAnimationEndFn);
          } else {
            onAnimationEndFn.call();
          }

          return false;
        }

        self._closeMenu();
      });
      this.$back.on('click.dlmenu', function (event) {
        var $this = $(this),
            $submenu = $this.parents('ul.dl-submenu:first'),
            $item = $submenu.parent(),
            $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses.out);

        var onAnimationEndFn = function onAnimationEndFn() {
          self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses["in"]);
          $flyin.remove();
        };

        self.$menu.addClass(self.options.animationClasses["in"]);

        if (self.supportAnimations) {
          self.$menu.on(self.animEndEventName, onAnimationEndFn);
        } else {
          onAnimationEndFn.call();
        }

        $item.removeClass('dl-subviewopen');
        var $subview = $this.parents('.dl-subview:first');

        if ($subview.is('li')) {
          $subview.addClass('dl-subviewopen');
        }

        $subview.removeClass('dl-subview');
        return false;
      });
    },
    _closeMenu: function _closeMenu() {
      var self = this,
          onTransitionEndFn = function onTransitionEndFn() {
        self.$menu.off(self.transEndEventName);

        self._resetMenu();
      };

      this.$menu.removeClass('dl-menuopen');
      this.$menu.addClass('dl-menu-toggle');
      this.$trigger.removeClass('dl-active');

      if (this.supportTransitions) {
        this.$menu.on(this.transEndEventName, onTransitionEndFn);
      } else {
        onTransitionEndFn.call();
      }

      this.open = false;
    },
    _openMenu: function _openMenu() {
      this.$menu.addClass('dl-menuopen dl-menu-toggle').on(this.transEndEventName, function () {
        $(this).removeClass('dl-menu-toggle');
      });
      this.$trigger.addClass('dl-active');
      this.open = true;
    },
    // resets the menu to its original state (first level of options)
    _resetMenu: function _resetMenu() {
      this.$menu.removeClass('dl-subview');
      this.$menuitems.removeClass('dl-subview dl-subviewopen');
    }
  };

  var logError = function logError(message) {
    if (window.console) {
      window.console.error(message);
    }
  };

  $.fn.dlmenu = function (options) {
    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var instance = $.data(this, 'dlmenu');

        if (!instance) {
          logError("cannot call methods on dlmenu prior to initialization; " + "attempted to call method '" + options + "'");
          return;
        }

        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("no such method '" + options + "' for dlmenu instance");
          return;
        }

        instance[options].apply(instance, args);
      });
    } else {
      this.each(function () {
        var instance = $.data(this, 'dlmenu');

        if (instance) {
          instance._init();
        } else {
          instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
        }
      });
    }

    return this;
  };
})(jQuery, window);

/***/ }),

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

/***/ "./resources/client/plugins/dropdown/dropdown95c495c4.js":
/*!***************************************************************!*\
  !*** ./resources/client/plugins/dropdown/dropdown95c495c4.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * EASYDROPDOWN - A Drop-down Builder for Styleable Inputs and Menus
 * Version: 2.1.4
 * License: Creative Commons Attribution 3.0 Unported - CC BY 3.0
 * http://creativecommons.org/licenses/by/3.0/
 * This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
 * Author: Patrick Kunka
 * Copyright 2013 Patrick Kunka, All Rights Reserved
 */
(function (d) {
  function e() {
    this.isField = !0;
    this.keyboardMode = this.hasLabel = this.cutOff = this.disabled = this.inFocus = this.down = !1;
    this.nativeTouch = !0;
    this.wrapperClass = "dropdown";
    this.onChange = null;
  }

  e.prototype = {
    constructor: e,
    instances: {},
    init: function init(a, c) {
      var b = this;
      d.extend(b, c);
      b.$select = d(a);
      b.id = a.id;
      b.options = [];
      b.$options = b.$select.find("option");
      b.isTouch = "ontouchend" in document;
      b.$select.removeClass(b.wrapperClass + " dropdown");
      b.$select.is(":disabled") && (b.disabled = !0);
      b.$options.length && (b.$options.each(function (a) {
        var c = d(this);
        c.is(":selected") && (b.selected = {
          index: a,
          title: c.text()
        }, b.focusIndex = a);
        c.hasClass("label") && 0 == a ? (b.hasLabel = !0, b.label = c.text(), c.attr("value", "")) : b.options.push({
          domNode: c[0],
          title: c.text(),
          value: c.val(),
          selected: c.is(":selected")
        });
      }), b.selected || (b.selected = {
        index: 0,
        title: b.$options.eq(0).text()
      }, b.focusIndex = 0), b.render());
    },
    render: function render() {
      var a = this;
      a.$container = a.$select.wrap('<div class="' + a.wrapperClass + (a.isTouch && a.nativeTouch ? " touch" : "") + (a.disabled ? " disabled" : "") + '"><span class="old"/></div>').parent().parent();
      a.$active = d('<span class="selected">' + a.selected.title + "</span>").appendTo(a.$container);
      a.$carat = d('<span class="carat"/>').appendTo(a.$container);
      a.$scrollWrapper = d("<div><ul/></div>").appendTo(a.$container);
      a.$dropDown = a.$scrollWrapper.find("ul");
      a.$form = a.$container.closest("form");
      d.each(a.options, function () {
        a.$dropDown.append("<li" + (this.selected ? ' class="active"' : "") + ">" + this.title + "</li>");
      });
      a.$items = a.$dropDown.find("li");
      a.cutOff && a.$items.length > a.cutOff && a.$container.addClass("scrollable");
      a.getMaxHeight();
      a.isTouch && a.nativeTouch ? a.bindTouchHandlers() : a.bindHandlers();
    },
    getMaxHeight: function getMaxHeight() {
      for (i = this.maxHeight = 0; i < this.$items.length; i++) {
        var a = this.$items.eq(i);
        this.maxHeight += a.outerHeight();
        if (this.cutOff == i + 1) break;
      }
    },
    bindTouchHandlers: function bindTouchHandlers() {
      var a = this;
      a.$container.on("click.easyDropDown", function () {
        a.$select.focus();
      });
      a.$select.on({
        change: function change() {
          var c = d(this).find("option:selected"),
              b = c.text(),
              c = c.val();
          a.$active.text(b);
          "function" === typeof a.onChange && a.onChange.call(a.$select[0], {
            title: b,
            value: c
          });
        },
        focus: function focus() {
          a.$container.addClass("focus");
        },
        blur: function blur() {
          a.$container.removeClass("focus");
        }
      });
    },
    bindHandlers: function bindHandlers() {
      var a = this;
      a.query = "";
      a.$container.on({
        "click.easyDropDown": function clickEasyDropDown() {
          a.down || a.disabled ? a.close() : a.open();
        },
        "mousemove.easyDropDown": function mousemoveEasyDropDown() {
          a.keyboardMode && (a.keyboardMode = !1);
        }
      });
      d("body").on("click.easyDropDown." + a.id, function (c) {
        c = d(c.target);
        var b = a.wrapperClass.split(" ").join(".");
        !c.closest("." + b).length && a.down && a.close();
      });
      a.$items.on({
        "click.easyDropDown": function clickEasyDropDown() {
          var c = d(this).index();
          a.select(c);
          a.$select.focus();
        },
        "mouseover.easyDropDown": function mouseoverEasyDropDown() {
          if (!a.keyboardMode) {
            var c = d(this);
            c.addClass("focus").siblings().removeClass("focus");
            a.focusIndex = c.index();
          }
        },
        "mouseout.easyDropDown": function mouseoutEasyDropDown() {
          a.keyboardMode || d(this).removeClass("focus");
        }
      });
      a.$select.on({
        "focus.easyDropDown": function focusEasyDropDown() {
          a.$container.addClass("focus");
          a.inFocus = !0;
        },
        "blur.easyDropDown": function blurEasyDropDown() {
          a.$container.removeClass("focus");
          a.inFocus = !1;
        },
        "keydown.easyDropDown": function keydownEasyDropDown(c) {
          if (a.inFocus) {
            a.keyboardMode = !0;
            var b = c.keyCode;
            if (38 == b || 40 == b || 32 == b) c.preventDefault(), 38 == b ? (a.focusIndex--, a.focusIndex = 0 > a.focusIndex ? a.$items.length - 1 : a.focusIndex) : 40 == b && (a.focusIndex++, a.focusIndex = a.focusIndex > a.$items.length - 1 ? 0 : a.focusIndex), a.down || a.open(), a.$items.removeClass("focus").eq(a.focusIndex).addClass("focus"), a.cutOff && a.scrollToView(), a.query = "";
            if (a.down) if (9 == b || 27 == b) a.close();else {
              if (13 == b) return c.preventDefault(), a.select(a.focusIndex), a.close(), !1;
              if (8 == b) return c.preventDefault(), a.query = a.query.slice(0, -1), a.search(), clearTimeout(a.resetQuery), !1;
              38 != b && 40 != b && (c = String.fromCharCode(b), a.query += c, a.search(), clearTimeout(a.resetQuery));
            }
          }
        },
        "keyup.easyDropDown": function keyupEasyDropDown() {
          a.resetQuery = setTimeout(function () {
            a.query = "";
          }, 1200);
        }
      });
      a.$dropDown.on("scroll.easyDropDown", function (c) {
        a.$dropDown[0].scrollTop >= a.$dropDown[0].scrollHeight - a.maxHeight ? a.$container.addClass("bottom") : a.$container.removeClass("bottom");
      });
      if (a.$form.length) a.$form.on("reset.easyDropDown", function () {
        a.$active.text(a.hasLabel ? a.label : a.options[0].title);
      });
    },
    unbindHandlers: function unbindHandlers() {
      this.$container.add(this.$select).add(this.$items).add(this.$form).add(this.$dropDown).off(".easyDropDown");
      d("body").off("." + this.id);
    },
    open: function open() {
      var a = window.scrollY || document.documentElement.scrollTop,
          c = window.scrollX || document.documentElement.scrollLeft,
          b = this.notInViewport(a);
      this.closeAll();
      this.getMaxHeight();
      this.$select.focus();
      window.scrollTo(c, a + b);
      this.$container.addClass("open");
      this.$scrollWrapper.css("height", this.maxHeight + "px");
      this.down = !0;
    },
    close: function close() {
      this.$container.removeClass("open");
      this.$scrollWrapper.css("height", "0px");
      this.focusIndex = this.selected.index;
      this.query = "";
      this.down = !1;
    },
    closeAll: function closeAll() {
      var a = Object.getPrototypeOf(this).instances,
          c;

      for (c in a) {
        a[c].close();
      }
    },
    select: function select(a) {
      "string" === typeof a && (a = this.$select.find("option[value=" + a + "]").index() - 1);
      var c = this.options[a],
          b = this.hasLabel ? a + 1 : a;
      this.$items.removeClass("active").eq(a).addClass("active");
      this.$active.text(c.title);
      this.$select.find("option").removeAttr("selected").eq(b).prop("selected", !0).parent().trigger("change");
      this.selected = {
        index: a,
        title: c.title
      };
      this.focusIndex = i;
      "function" === typeof this.onChange && this.onChange.call(this.$select[0], {
        title: c.title,
        value: c.value
      });
    },
    search: function search() {
      var a = this,
          c = function c(b) {
        a.focusIndex = b;
        a.$items.removeClass("focus").eq(a.focusIndex).addClass("focus");
        a.scrollToView();
      };

      for (i = 0; i < a.options.length; i++) {
        var b = a.options[i].title.toUpperCase();

        if (0 == b.indexOf(a.query)) {
          c(i);
          return;
        }
      }

      for (i = 0; i < a.options.length; i++) {
        if (b = a.options[i].title.toUpperCase(), -1 < b.indexOf(a.query)) {
          c(i);
          break;
        }
      }
    },
    scrollToView: function scrollToView() {
      if (this.focusIndex >= this.cutOff) {
        var a = this.$items.eq(this.focusIndex).outerHeight() * (this.focusIndex + 1) - this.maxHeight;
        this.$dropDown.scrollTop(a);
      }
    },
    notInViewport: function notInViewport(a) {
      var c = a + (window.innerHeight || document.documentElement.clientHeight),
          b = this.$dropDown.offset().top + this.maxHeight;
      return b >= a && b <= c ? 0 : b - c + 5;
    },
    destroy: function destroy() {
      this.unbindHandlers();
      this.$select.unwrap().siblings().remove();
      this.$select.unwrap();
      delete Object.getPrototypeOf(this).instances[this.$select[0].id];
    },
    disable: function disable() {
      this.disabled = !0;
      this.$container.addClass("disabled");
      this.$select.attr("disabled", !0);
      this.down || this.close();
    },
    enable: function enable() {
      this.disabled = !1;
      this.$container.removeClass("disabled");
      this.$select.attr("disabled", !1);
    }
  };

  var f = function f(a, c) {
    a.id = a.id ? a.id : "EasyDropDown" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase();
    var b = new e();
    b.instances[a.id] || (b.instances[a.id] = b, b.init(a, c));
  };

  d.fn.easyDropDown = function () {
    var a = arguments,
        c = [],
        b;
    b = this.each(function () {
      if (a && "string" === typeof a[0]) {
        var b = e.prototype.instances[this.id][a[0]](a[1], a[2]);
        b && c.push(b);
      } else f(this, a[0]);
    });
    return c.length ? 1 < c.length ? c : c[0] : b;
  };

  d(function () {
    "function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (a) {
      return a.__proto__;
    } : function (a) {
      return a.constructor.prototype;
    });
    d("select.dropdown").each(function () {
      var a = d(this).attr("data-settings");
      settings = a ? d.parseJSON(a) : {};
      f(this, settings);
    });
  });
})(jQuery);

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

/***/ "./resources/client/plugins/jquery-mousewheel/jquery.mousewheel.min95c495c4.js":
/*!*************************************************************************************!*\
  !*** ./resources/client/plugins/jquery-mousewheel/jquery.mousewheel.min95c495c4.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  function h(b) {
    var c = b || window.event,
        g = d.call(arguments, 1),
        h = 0,
        j = 0,
        k = 0,
        l = 0;
    return b = a.event.fix(c), b.type = "mousewheel", "detail" in c && (k = -1 * c.detail), "wheelDelta" in c && (k = c.wheelDelta), "wheelDeltaY" in c && (k = c.wheelDeltaY), "wheelDeltaX" in c && (j = -1 * c.wheelDeltaX), "axis" in c && c.axis === c.HORIZONTAL_AXIS && (j = -1 * k, k = 0), h = 0 === k ? j : k, "deltaY" in c && (k = -1 * c.deltaY, h = k), "deltaX" in c && (j = c.deltaX, 0 === k && (h = -1 * j)), 0 !== k || 0 !== j ? (l = Math.max(Math.abs(k), Math.abs(j)), (!f || f > l) && (f = l), h = Math[h >= 1 ? "floor" : "ceil"](h / f), j = Math[j >= 1 ? "floor" : "ceil"](j / f), k = Math[k >= 1 ? "floor" : "ceil"](k / f), b.deltaX = j, b.deltaY = k, b.deltaFactor = f, g.unshift(b, h, j, k), e && clearTimeout(e), e = setTimeout(i, 200), (a.event.dispatch || a.event.handle).apply(this, g)) : void 0;
  }

  function i() {
    f = null;
  }

  var e,
      f,
      b = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      c = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      d = Array.prototype.slice;
  if (a.event.fixHooks) for (var g = b.length; g;) {
    a.event.fixHooks[b[--g]] = a.event.mouseHooks;
  }
  a.event.special.mousewheel = {
    version: "3.1.6",
    setup: function setup() {
      if (this.addEventListener) for (var a = c.length; a;) {
        this.addEventListener(c[--a], h, !1);
      } else this.onmousewheel = h;
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var a = c.length; a;) {
        this.removeEventListener(c[--a], h, !1);
      } else this.onmousewheel = null;
    }
  }, a.fn.extend({
    mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    }
  });
});

/***/ }),

/***/ "./resources/client/plugins/parallax.min95c495c4.js":
/*!**********************************************************!*\
  !*** ./resources/client/plugins/parallax.min95c495c4.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == _typeof(e) && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    this.$mirror = t("<div />").prependTo("body");
    var a = this.$element.find(">.parallax-slider"),
        n = !1;
    0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({
      visibility: "hidden",
      zIndex: this.zIndex,
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden"
    }), this.$slider.addClass("parallax-slider").one("load", function () {
      h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender();
    }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load");
  }

  function h(s) {
    return this.each(function () {
      var h = t(this),
          r = "object" == _typeof(s) && s;
      this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == _typeof(s) && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }

  !function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) {
      i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
    }

    i.requestAnimationFrame || (i.requestAnimationFrame = function (e) {
      var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
        e(s + o);
      }, o);
      return t = s + o, h;
    }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }(), t.extend(o.prototype, {
    speed: .2,
    bleed: 0,
    zIndex: -100,
    iosFix: !0,
    androidFix: !0,
    position: "center",
    overScrollFix: !1,
    refresh: function refresh() {
      this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
      var t = o.winHeight,
          i = o.docHeight,
          e = Math.min(this.boxOffsetTop, i - t),
          s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
          h = this.boxHeight + (e - s) * (1 - this.speed) | 0,
          r = (this.boxOffsetTop - e) * (1 - this.speed) | 0;

      if (h * this.aspectRatio >= this.boxWidth) {
        this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r;
        var a = this.imageWidth - this.boxWidth;
        this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a);
      } else {
        this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
        var a = this.imageHeight - h;
        this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a);
      }
    },
    render: function render() {
      var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
      this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
        transform: "translate3d(0px, 0px, 0px)",
        visibility: this.visibility,
        top: this.mirrorTop - e,
        left: this.mirrorLeft,
        height: this.boxHeight,
        width: this.boxWidth
      }), this.$slider.css({
        transform: "translate3d(0px, 0px, 0px)",
        position: "absolute",
        top: this.offsetTop,
        left: this.offsetLeft,
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: "none"
      });
    }
  }), t.extend(o, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: !1,
    isFresh: !1,
    isBusy: !1,
    setup: function setup() {
      if (!this.isReady) {
        var s = t(e),
            h = t(i),
            r = function r() {
          o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width();
        },
            a = function a() {
          var t = h.scrollTop(),
              i = o.docHeight - o.winHeight,
              e = o.docWidth - o.winWidth;
          o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0));
        };

        h.on("resize.px.parallax load.px.parallax", function () {
          r(), o.isFresh = !1, o.requestRender();
        }).on("scroll.px.parallax load.px.parallax", function () {
          a(), o.requestRender();
        }), r(), a(), this.isReady = !0;
      }
    },
    configure: function configure(i) {
      "object" == _typeof(i) && (delete i.refresh, delete i.render, t.extend(this.prototype, i));
    },
    refresh: function refresh() {
      t.each(this.sliders, function () {
        this.refresh();
      }), this.isFresh = !0;
    },
    render: function render() {
      this.isFresh || this.refresh(), t.each(this.sliders, function () {
        this.render();
      });
    },
    requestRender: function requestRender() {
      var t = this;
      this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function () {
        t.render(), t.isBusy = !1;
      }));
    },
    destroy: function destroy(e) {
      var s,
          h = t(e).data("px.parallax");

      for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) {
        this.sliders[s] == h && this.sliders.splice(s, 1);
      }

      t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1);
    }
  });
  var r = t.fn.parallax;
  t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () {
    return t.fn.parallax = r, this;
  }, t(e).on("ready.px.parallax.data-api", function () {
    t('[data-parallax="scroll"]').parallax();
  });
}(jQuery, window, document);

/***/ }),

/***/ "./resources/client/plugins/waypoints/waypoints-1.6.2.min95c495c4.js":
/*!***************************************************************************!*\
  !*** ./resources/client/plugins/waypoints/waypoints-1.6.2.min95c495c4.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.6.2

/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }

    return -1;
  },
      e = [].slice;

  (function (t, e) {
    if (true) {
      return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (n) {
        return e(n, t);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })(window, function (n, r) {
    var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";

    o = function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function () {
          var t;

          if (!(e.didScroll || a)) {
            e.didScroll = true;

            t = function t() {
              e.doScroll();
              return e.didScroll = false;
            };

            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;

          if (!e.didResize) {
            e.didResize = true;

            t = function t() {
              n[m]("refresh");
              return e.didResize = false;
            };

            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }

      t.prototype.doScroll = function () {
        var t,
            e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };

        if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }

        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;

            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });

          if (!o) {
            l.reverse();
          }

          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        };
      };

      t.prototype.refresh = function () {
        var t,
            e,
            r,
            i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];

            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);

              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100);
              }
            }

            r.offset = o - e.contextOffset + e.contextScroll - i;

            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return;
            }

            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };

      t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete c[this.id];
        }
      };

      return t;
    }();

    l = function () {
      function t(t, e, r) {
        var i, o;

        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");

            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }

            return t - n(this).outerHeight();
          };
        }

        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = this.element[w]) != null ? o : [];
        i.push(this.id);
        this.element[w] = i;
      }

      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }

        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }

        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      t.prototype.disable = function () {
        return this.enabled = false;
      };

      t.prototype.enable = function () {
        this.context.refresh();
        return this.enabled = true;
      };

      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      t.getWaypointsByElement = function (t) {
        var e, r;
        r = t[w];

        if (!r) {
          return [];
        }

        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };

      return t;
    }();

    d = {
      init: function init(t, e) {
        var r;
        e = n.extend({}, n.fn[g].defaults, e);

        if ((r = e.handler) == null) {
          e.handler = t;
        }

        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;

          if (!n.isWindow(i)) {
            i = t.closest(i);
          }

          i = n(i);
          r = c[i[0][u]];

          if (!r) {
            r = new o(i);
          }

          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function disable() {
        return d._invoke.call(this, "disable");
      },
      enable: function enable() {
        return d._invoke.call(this, "enable");
      },
      destroy: function destroy() {
        return d._invoke.call(this, "destroy");
      },
      prev: function prev(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function next(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function _traverse(t, e, i) {
        var o, l;

        if (t == null) {
          t = "vertical";
        }

        if (e == null) {
          e = r;
        }

        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function _invoke(t) {
        this.each(function () {
          var e;
          e = l.getWaypointsByElement(this);
          return n.each(e, function (e, n) {
            n[t]();
            return true;
          });
        });
        return this;
      }
    };

    n.fn[g] = function () {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.");
      }
    };

    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function refresh() {
        return n.each(c, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function viewportHeight() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function aggregate(t) {
        var e, r, i;
        e = s;

        if (t) {
          e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0;
        }

        if (!e) {
          return [];
        }

        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return r[t] = n.unique(r[t]);
        });
        return r;
      },
      above: function above(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function below(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function left(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function right(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function enable() {
        return h._invoke("enable");
      },
      disable: function disable() {
        return h._invoke("disable");
      },
      destroy: function destroy() {
        return h._invoke("destroy");
      },
      extendFn: function extendFn(t, e) {
        return d[t] = e;
      },
      _invoke: function _invoke(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function _filter(t, e, r) {
        var i, o;
        i = c[n(t)[0][u]];

        if (!i) {
          return [];
        }

        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      }
    };

    n[m] = function () {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };

    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.on("load.waypoints", function () {
      return n[m]("refresh");
    });
  });
}).call(this);

/***/ }),

/***/ "./resources/client/themes/site/js/animate95c495c4.js":
/*!************************************************************!*\
  !*** ./resources/client/themes/site/js/animate95c495c4.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.catalogue-title, .phone-container-title, .guaranty-title, .press-about-title, .dream-title, .phone-preview .show-gallery, footer, .catalogue-desc').addClass('hidden-opacity').viewportChecker({
    offset: 0,
    classToAdd: 'visible animated fadeInDown'
  });
  $('.catalogue-row > div, .phone-preview ~.col-md-7, .guaranty-text p, .press-about-img, .advantages-row > div, .advantages-box img, .bonus-img-row img, .press-about-text, .bonus button, .delivery-desc, .press-about-text-1, .press-about-text-2, #map, .dream-text button').addClass('hidden-opacity').viewportChecker({
    offset: 100,
    classToAdd: 'visible animated fadeInUp'
  });
  $('.phone-preview > img, .products-ordering').viewportChecker({
    offset: 100 // classToAdd:'visible animated fadeInLeft'

  });
  $('.phone-preview button, .link_modal, .phone-preview .show-gallery').viewportChecker({
    offset: 100,
    classToAdd: 'visible animated fadeInLeft'
  });
  $('.dream .dream-img, .guaranty .talon-img').addClass('hidden-opacity').viewportChecker({
    offset: 0,
    classToAdd: 'visible animated fadeInRight'
  });
  $('.buy-buttons, .phone-preview ~.col-md-7').viewportChecker({
    offset: -50 // classToAdd:'visible animated fadeInRight'

  });
  $('.carousel-indicators li').click(function () {
    $(this).parent().parent().find('.buy-buttons, .phone-preview ~.col-md-7').addClass('visible animated fadeInRight full-visible');
    $(this).parent().parent().find('.phone-preview button, .phone-preview .show-gallery').addClass('visible animated full-visible fadeInLeft');
    $(this).parent().parent().find('.phone-preview img').addClass('visible animated fadeInleft full-visible');
  });
  var carousel = $('.owl-carousel');
  carousel.on({
    'initialized.owl.carousel': function initializedOwlCarousel() {
      carousel.find('.owl-item').show();
      carousel.find('.loading-placeholder').hide();
    }
  }).owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 10,
    nav: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    autoplay: true,
    stopOnHover: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });
  var carousel = $('.owl-carousel2');
  carousel.on({
    'initialized.owl.carousel': function initializedOwlCarousel() {
      carousel.find('.owl-item').show();
      carousel.find('.loading-placeholder').hide();
    }
  }).owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 5,
    nav: false,
    navText: ['', ''],
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: true,
        loop: true
      },
      600: {
        items: 3,
        nav: false,
        loop: true
      },
      1000: {
        items: 6,
        nav: false,
        loop: true
      }
    },
    autoplay: true,
    stopOnHover: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
});

/***/ }),

/***/ "./resources/client/themes/site/js/common95c495c4.js":
/*!***********************************************************!*\
  !*** ./resources/client/themes/site/js/common95c495c4.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*Jnload animate*/
$(window).on('load', function () {// setTimeout(function(){
  // $('.header-baner-title-head').animate({
  //  opacity: 1,
  // }, 500);
  // },500);
  // setTimeout(function(){
  // 	$('.header-baner-title-desc, .header-baner-title').animate({
  //  opacity: 1,
  // }, 500);
  // },500);
  // setTimeout(function(){
  //     $('.know-more').removeClass('hidden-div').addClass('visible-div').viewportChecker({
  // 		offset: -300,
  // 		classToAdd:'animated fadeInUp'
  // 	});
  // },1000);
  // setTimeout(function(){
  // 	$('#map .ymaps-2-1-34-inner-panes .ymaps-2-1-34-places-pane .ymaps-2-1-34-svg-icon').css({'background-image': 'url(img/map-icon.png)','background-size': '64px 76px', 'width': '64px', 'height': '76px', 'margin-top': '-45px'});
  // }, 4000);

  /*if ($(window).width() < 768) {
   var url = "http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.js";
     $.getScript( url, function() {
       $(".popup.gallery").on( "swipeleft", function(){
         $(this).carousel('next');
         $(this).find(".item.active img")[0].click();
       });
       $(".popup.gallery").on( "swiperight", function(){
         $(this).carousel('prev');
         $(this).find(".item.active img")[0].click();
       });
     });
   }*/
});
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
      setInterval(function () {
        window.location.reload(true);
      }, 3000);
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

/***/ "./resources/client/themes/site/js/jquery.livequery.min95c495c4.js":
/*!*************************************************************************!*\
  !*** ./resources/client/themes/site/js/jquery.livequery.min95c495c4.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jquery.livequery - v1.3.6 - 2013-08-26
 * Copyright (c)
 *  (c) 2010, Brandon Aaron (http://brandonaaron.net)
 *  (c) 2012 - 2013, Alexander Zaytsev (http://hazzik.ru/en)
 * Dual licensed under the MIT (MIT_LICENSE.txt)
 * and GPL Version 2 (GPL_LICENSE.txt) licenses.
 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a, b) {
  function c(a, b, c, d) {
    return !(a.selector != b.selector || a.context != b.context || c && c.$lqguid != b.fn.$lqguid || d && d.$lqguid != b.fn2.$lqguid);
  }

  a.extend(a.fn, {
    livequery: function livequery(b, e) {
      var f,
          g = this;
      return a.each(d.queries, function (a, d) {
        return c(g, d, b, e) ? (f = d) && !1 : void 0;
      }), f = f || new d(g.selector, g.context, b, e), f.stopped = !1, f.run(), g;
    },
    expire: function expire(b, e) {
      var f = this;
      return a.each(d.queries, function (a, g) {
        c(f, g, b, e) && !f.stopped && d.stop(g.id);
      }), f;
    }
  });

  var d = a.livequery = function (b, c, e, f) {
    var g = this;
    return g.selector = b, g.context = c, g.fn = e, g.fn2 = f, g.elements = a([]), g.stopped = !1, g.id = d.queries.push(g) - 1, e.$lqguid = e.$lqguid || d.guid++, f && (f.$lqguid = f.$lqguid || d.guid++), g;
  };

  d.prototype = {
    stop: function stop() {
      var b = this;
      b.stopped || (b.fn2 && b.elements.each(b.fn2), b.elements = a([]), b.stopped = !0);
    },
    run: function run() {
      var b = this;

      if (!b.stopped) {
        var c = b.elements,
            d = a(b.selector, b.context),
            e = d.not(c),
            f = c.not(d);
        b.elements = d, e.each(b.fn), b.fn2 && f.each(b.fn2);
      }
    }
  }, a.extend(d, {
    guid: 0,
    queries: [],
    queue: [],
    running: !1,
    timeout: null,
    registered: [],
    checkQueue: function checkQueue() {
      if (d.running && d.queue.length) for (var a = d.queue.length; a--;) {
        d.queries[d.queue.shift()].run();
      }
    },
    pause: function pause() {
      d.running = !1;
    },
    play: function play() {
      d.running = !0, d.run();
    },
    registerPlugin: function registerPlugin() {
      a.each(arguments, function (b, c) {
        if (a.fn[c] && !(a.inArray(c, d.registered) > 0)) {
          var e = a.fn[c];
          a.fn[c] = function () {
            var a = e.apply(this, arguments);
            return d.run(), a;
          }, d.registered.push(c);
        }
      });
    },
    run: function run(c) {
      c !== b ? a.inArray(c, d.queue) < 0 && d.queue.push(c) : a.each(d.queries, function (b) {
        a.inArray(b, d.queue) < 0 && d.queue.push(b);
      }), d.timeout && clearTimeout(d.timeout), d.timeout = setTimeout(d.checkQueue, 20);
    },
    stop: function stop(c) {
      c !== b ? d.queries[c].stop() : a.each(d.queries, d.prototype.stop);
    }
  }), d.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html", "prop", "removeProp"), a(function () {
    d.play();
  });
});

/***/ }),

/***/ "./resources/client/themes/site/js/jquery.scrollTo.min95c495c4.js":
/*!************************************************************************!*\
  !*** ./resources/client/themes/site/js/jquery.scrollTo.min95c495c4.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.13
 */
;

(function (k) {
  'use strict';

  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
    var j = $.scrollTo = function (a, b, c) {
      return $(window).scrollTo(a, b, c);
    };

    j.defaults = {
      axis: 'xy',
      duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
      limit: !0
    };

    j.window = function (a) {
      return $(window)._scrollable();
    };

    $.fn._scrollable = function () {
      return this.map(function () {
        var a = this,
            isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
        if (!isWin) return a;
        var b = (a.contentWindow || a).document || a.ownerDocument || a;
        return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement;
      });
    };

    $.fn.scrollTo = function (f, g, h) {
      if (_typeof(g) == 'object') {
        h = g;
        g = 0;
      }

      if (typeof h == 'function') h = {
        onAfter: h
      };
      if (f == 'max') f = 9e9;
      h = $.extend({}, j.defaults, h);
      g = g || h.duration;
      h.queue = h.queue && h.axis.length > 1;
      if (h.queue) g /= 2;
      h.offset = both(h.offset);
      h.over = both(h.over);
      return this._scrollable().each(function () {
        if (f == null) return;
        var d = this,
            $elem = $(d),
            targ = f,
            toff,
            attr = {},
            win = $elem.is('html,body');

        switch (_typeof(targ)) {
          case 'number':
          case 'string':
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
              targ = both(targ);
              break;
            }

            targ = win ? $(targ) : $(targ, this);
            if (!targ.length) return;

          case 'object':
            if (targ.is || targ.style) toff = (targ = $(targ)).offset();
        }

        var e = $.isFunction(h.offset) && h.offset(d, targ) || h.offset;
        $.each(h.axis.split(''), function (i, a) {
          var b = a == 'x' ? 'Left' : 'Top',
              pos = b.toLowerCase(),
              key = 'scroll' + b,
              old = d[key],
              max = j.max(d, a);

          if (toff) {
            attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);

            if (h.margin) {
              attr[key] -= parseInt(targ.css('margin' + b)) || 0;
              attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0;
            }

            attr[key] += e[pos] || 0;
            if (h.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * h.over[pos];
          } else {
            var c = targ[pos];
            attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c;
          }

          if (h.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);

          if (!i && h.queue) {
            if (old != attr[key]) animate(h.onAfterFirst);
            delete attr[key];
          }
        });
        animate(h.onAfter);

        function animate(a) {
          $elem.animate(attr, g, h.easing, a && function () {
            a.call(this, targ, h);
          });
        }
      }).end();
    };

    j.max = function (a, b) {
      var c = b == 'x' ? 'Width' : 'Height',
          scroll = 'scroll' + c;
      if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
      var d = 'client' + c,
          html = a.ownerDocument.documentElement,
          body = a.ownerDocument.body;
      return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
    };

    function both(a) {
      return $.isFunction(a) || _typeof(a) == 'object' ? a : {
        top: a,
        left: a
      };
    }

    return j;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js"));

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

  $('.dd').easyDropDown({
    onChange: function onChange(selected) {
      $('#order_review .input-radio[name="payment_method"]').attr('checked', false);
      $('#order_review .input-radio[value="' + selected.value + '"]').prop('checked', true);
    }
  });
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

/***/ "./resources/client/themes/site/js/vch95c495c4.js":
/*!********************************************************!*\
  !*** ./resources/client/themes/site/js/vch95c495c4.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.viewportChecker = function (useroptions) {
    var options = {
      classToAdd: 'visible',
      classToRemove: 'invisible',
      classToAddForFullView: 'full-visible',
      removeClassAfterAnimation: false,
      offset: 100,
      repeat: false,
      invertBottomOffset: true,
      callbackFunction: function callbackFunction(elem, action) {},
      scrollHorizontal: false,
      scrollBox: window
    };
    $.extend(options, useroptions);
    var $elem = this,
        boxSize = {
      height: $(options.scrollBox).height(),
      width: $(options.scrollBox).width()
    },
        scrollElem = navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('windows phone') != -1 ? 'body' : 'html';

    this.checkElements = function () {
      var viewportStart, viewportEnd;

      if (!options.scrollHorizontal) {
        viewportStart = $(scrollElem).scrollTop();
        viewportEnd = viewportStart + boxSize.height;
      } else {
        viewportStart = $(scrollElem).scrollLeft();
        viewportEnd = viewportStart + boxSize.width;
      }

      $elem.each(function () {
        var $obj = $(this),
            objOptions = {},
            attrOptions = {};
        if ($obj.data('vp-add-class')) attrOptions.classToAdd = $obj.data('vp-add-class');
        if ($obj.data('vp-remove-class')) attrOptions.classToRemove = $obj.data('vp-remove-class');
        if ($obj.data('vp-add-class-full-view')) attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
        if ($obj.data('vp-keep-add-class')) attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
        if ($obj.data('vp-offset')) attrOptions.offset = $obj.data('vp-offset');
        if ($obj.data('vp-repeat')) attrOptions.repeat = $obj.data('vp-repeat');
        if ($obj.data('vp-scrollHorizontal')) attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
        if ($obj.data('vp-invertBottomOffset')) attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');
        $.extend(objOptions, options);
        $.extend(objOptions, attrOptions);

        if ($obj.data('vp-animated') && !objOptions.repeat) {
          return;
        }

        if (String(objOptions.offset).indexOf("%") > 0) objOptions.offset = parseInt(objOptions.offset) / 100 * boxSize.height;
        var rawStart = !objOptions.scrollHorizontal ? $obj.offset().top : $obj.offset().left,
            rawEnd = !objOptions.scrollHorizontal ? rawStart + $obj.height() : rawStart + $obj.width();
        var elemStart = Math.round(rawStart) + objOptions.offset,
            elemEnd = !objOptions.scrollHorizontal ? elemStart + $obj.height() : elemStart + $obj.width();
        if (objOptions.invertBottomOffset) elemEnd -= objOptions.offset * 2;

        if (elemStart < viewportEnd && elemEnd > viewportStart) {
          $obj.removeClass(objOptions.classToRemove);
          $obj.addClass(objOptions.classToAdd);
          objOptions.callbackFunction($obj, "add");
          if (rawEnd <= viewportEnd && rawStart >= viewportStart) $obj.addClass(objOptions.classToAddForFullView);else $obj.removeClass(objOptions.classToAddForFullView);
          $obj.data('vp-animated', true);

          if (objOptions.removeClassAfterAnimation) {
            $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
              $obj.removeClass(objOptions.classToAdd);
            });
          }
        } else if ($obj.hasClass(objOptions.classToAdd) && objOptions.repeat) {
          $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);
          objOptions.callbackFunction($obj, "remove");
          $obj.data('vp-animated', false);
        }
      });
    };

    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
      $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
    }

    $(options.scrollBox).bind("load scroll", this.checkElements);
    $(window).resize(function (e) {
      boxSize = {
        height: $(options.scrollBox).height(),
        width: $(options.scrollBox).width()
      };
      $elem.checkElements();
    });
    this.checkElements();
    return this;
  };
})(jQuery);

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js ./resources/client/plugins/jquery-mousewheel/jquery.mousewheel.min95c495c4.js ./resources/client/plugins/waypoints/waypoints-1.6.2.min95c495c4.js ./resources/client/themes/site/js/jquery.scrollTo.min95c495c4.js ./resources/client/themes/site/js/vch95c495c4.js ./resources/client/themes/site/js/mask95c495c4.js ./resources/client/plugins/auxiliary-rater/rater.min.js ./resources/client/themes/site/js/common95c495c4.js ./resources/client/plugins/dropdown/dropdown95c495c4.js ./resources/client/themes/site/js/jquery.livequery.min95c495c4.js ./resources/client/themes/site/js/animate95c495c4.js ./resources/client/themes/site/js/script95c495c4.js ./resources/client/plugins/parallax.min95c495c4.js ./resources/client/themes/site/js/form95c495c4.js ./resources/client/js/jquery.dlmenu92fa92fa.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /app/resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js */"./resources/client/plugins/fancybox/jquery.fancybox.pack95c495c4.js");
__webpack_require__(/*! /app/resources/client/plugins/jquery-mousewheel/jquery.mousewheel.min95c495c4.js */"./resources/client/plugins/jquery-mousewheel/jquery.mousewheel.min95c495c4.js");
__webpack_require__(/*! /app/resources/client/plugins/waypoints/waypoints-1.6.2.min95c495c4.js */"./resources/client/plugins/waypoints/waypoints-1.6.2.min95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/jquery.scrollTo.min95c495c4.js */"./resources/client/themes/site/js/jquery.scrollTo.min95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/vch95c495c4.js */"./resources/client/themes/site/js/vch95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/mask95c495c4.js */"./resources/client/themes/site/js/mask95c495c4.js");
__webpack_require__(/*! /app/resources/client/plugins/auxiliary-rater/rater.min.js */"./resources/client/plugins/auxiliary-rater/rater.min.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/common95c495c4.js */"./resources/client/themes/site/js/common95c495c4.js");
__webpack_require__(/*! /app/resources/client/plugins/dropdown/dropdown95c495c4.js */"./resources/client/plugins/dropdown/dropdown95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/jquery.livequery.min95c495c4.js */"./resources/client/themes/site/js/jquery.livequery.min95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/animate95c495c4.js */"./resources/client/themes/site/js/animate95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/script95c495c4.js */"./resources/client/themes/site/js/script95c495c4.js");
__webpack_require__(/*! /app/resources/client/plugins/parallax.min95c495c4.js */"./resources/client/plugins/parallax.min95c495c4.js");
__webpack_require__(/*! /app/resources/client/themes/site/js/form95c495c4.js */"./resources/client/themes/site/js/form95c495c4.js");
module.exports = __webpack_require__(/*! /app/resources/client/js/jquery.dlmenu92fa92fa.js */"./resources/client/js/jquery.dlmenu92fa92fa.js");


/***/ })

/******/ });