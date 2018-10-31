'use strict'
var log = null
var $manifest$cssAutoClassificator = false
var $manifest$cssDisableTransformations = false
var $manifest$cssDisableTransitions = false
var $manifest$disableAnimations = false
var $manifest$expectRunContextEvent = false
var $manifest$html5$prefix = ""
var $manifest$log$disable = false
var $manifest$style$font$family = "Montserrat"
var $manifest$style$font$lineHeight = 1.2
var $manifest$style$font$pixelSize = 14
var $manifest$style$font$pointSize = 0
var $manifest$trace$focus = false
var $manifest$trace$keys = false
var $manifest$trace$listeners = false
/** @const @type {!CoreObject} */
var qml = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
/** @const */
var _globals = exports
if (!_globals.core) /** @const */ _globals.core = {}
if (!_globals.web) /** @const */ _globals.web = {}
if (!_globals.controls) /** @const */ _globals.controls = {}
if (!_globals.controls.core) /** @const */ _globals.controls.core = {}
if (!_globals.controls.experiment) /** @const */ _globals.controls.experiment = {}
if (!_globals.controls.web) /** @const */ _globals.controls.web = {}
if (!_globals.controls.pure) /** @const */ _globals.controls.pure = {}
if (!_globals.controls.input) /** @const */ _globals.controls.input = {}
if (!_globals.video) /** @const */ _globals.video = {}
if (!_globals.video.html5) /** @const */ _globals.video.html5 = {}
if (!_globals.video.videojs) /** @const */ _globals.video.videojs = {}
if (!_globals.html5) /** @const */ _globals.html5 = {}
if (!_globals.src) /** @const */ _globals.src = {}
if (!_globals.src.Components) /** @const */ _globals.src.Components = {}
_globals.core.core = (function() {/** @const */
var exports = _globals;
exports._get = function(name) { return exports[name] }
//=====[import core.core]=====================

//WARNING: no log() function usage before init.js

exports.core.device = 0
exports.core.vendor = ""
exports.core.__videoBackends = {}

if (typeof navigator !== 'undefined') {
	exports.core.os = navigator.platform
	exports.core.userAgent = navigator.userAgent
	exports.core.language = navigator.language
} else {
	exports.core.os = 'unknown'
	exports.core.userAgent = 'Unknown'
}

var _checkDevice = function(target, info) {
	if (exports.core.userAgent.indexOf(target) < 0)
		return

	exports.core.vendor = info.vendor
	exports.core.device = info.device
	exports.core.os = info.os
}

if (!exports.core.vendor) {
	_checkDevice('Blackberry', { 'vendor': 'blackberry', 'device': 2, 'os': 'blackberry' })
	_checkDevice('Android', { 'vendor': 'google', 'device': 2, 'os': 'android' })
	_checkDevice('iPhone', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPad', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPod', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
}

// TODO: check on mobile, check Opera/Yandex/Vivaldi
if (exports.core.userAgent.indexOf('Edge') !== -1)
	exports.core.browser = "Edge"
else if (exports.core.userAgent.indexOf('Chrome/') !== -1 || exports.core.userAgent.indexOf('Chromium') !== -1)
	exports.core.browser = "Chrome"
else if (exports.core.userAgent.indexOf('Opera/') !== -1)
	exports.core.browser = "Opera"
else if (exports.core.userAgent.indexOf('Firefox/') !== -1)
	exports.core.browser = "Firefox"
else if (exports.core.userAgent.indexOf('Safari/') !== -1)
	exports.core.browser = "Safari"
else if (exports.core.userAgent.indexOf('MSIE ') !== -1 || exports.core.userAgent.indexOf('Trident') !== -1)
	exports.core.browser = "IE"
else if (exports.core.userAgent.indexOf('YaBrowser') !== -1)
	exports.core.browser = "Yandex"
else
	exports.core.browser = ''


_globals._backend = function() { return _globals.html5.html }
_globals.core.__locationBackend = function() { return _globals.html5.location }
_globals.core.__localStorageBackend = function() { return _globals.html5.localstorage }
_globals.core.__videoBackends.html5 = function() { return _globals.video.html5.backend }
_globals.core.__videoBackends.videojs = function() { return _globals.video.videojs.backend }
_globals.core.__deviceBackend = function() { return _globals.web.device }

exports.core.keyCodes = {
	13: 'Select',
	16: 'Shift',
	17: 'Ctrl',
	18: 'LeftAlt',
	27: 'Back',
	37: 'Left',
	32: 'Space',
	33: 'PageUp',
	34: 'PageDown',
	38: 'Up',
	39: 'Right',
	40: 'Down',
	48: '0',
	49: '1',
	50: '2',
	51: '3',
	52: '4',
	53: '5',
	54: '6',
	55: '7',
	56: '8',
	57: '9',
	96: '0',  // NumPad 0
	97: '1',
	98: '2',
	99: '3',
	100: '4',
	101: '5',
	102: '6',
	103: '7',
	104: '8',
	105: '9',
	65: 'A',
	66: 'B',
	67: 'C',
	68: 'D',
	69: 'E',
	70: 'F',
	71: 'G',
	72: 'H',
	73: 'I',
	74: 'J',
	75: 'K',
	76: 'L',
	77: 'M',
	78: 'N',
	79: 'O',
	80: 'P',
	81: 'Q',
	82: 'R',
	83: 'S',
	84: 'T',
	85: 'U',
	86: 'V',
	87: 'W',
	88: 'X',
	89: 'Y',
	90: 'Z',
	112: 'Red',
	113: 'Green',
	114: 'Yellow',
	115: 'Blue',
	111: 'Red',     // NumPad /
	106: 'Green',   // NumPad *
	109: 'Yellow',  // NumPad -
	107: 'Blue',    // NumPad +
	230: 'RightAlt'
}

exports.closeApp = function() {
	window.close()
}


if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== 'function') {
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP    = function() {},
			fBound  = function() {
				return fToBind.apply(this instanceof fNOP && oThis
					? this
					: oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)))
			}

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
	}

	if (log === null) {
		//old webkits with no bind don't allow binding console.log
		log = function() {
			var line = ''
			for(var i = 0; i < arguments.length; ++i) {
				line += arguments[i] + ' '
			}
			console.log(line)
		}
	}
}

if (log === null)
	log = console.log.bind(console)

/** @const */
/** @param {string} text @param {...} args */
_globals.qsTr = function(text, args) { return _globals._context.qsTr.apply(qml._context, arguments) }

var colorTable = {
	'aliceblue':			'f0f8ff',
	'antiquewhite':			'faebd7',
	'aqua':					'00ffff',
	'aquamarine':			'7fffd4',
	'azure':				'f0ffff',
	'beige':				'f5f5dc',
	'bisque':				'ffe4c4',
	'black':				'000000',
	'blanchedalmond':		'ffebcd',
	'blue':					'0000ff',
	'blueviolet':			'8a2be2',
	'brown':				'a52a2a',
	'burlywood':			'deb887',
	'cadetblue':			'5f9ea0',
	'chartreuse':			'7fff00',
	'chocolate':			'd2691e',
	'coral':				'ff7f50',
	'cornflowerblue':		'6495ed',
	'cornsilk':				'fff8dc',
	'crimson':				'dc143c',
	'cyan':					'00ffff',
	'darkblue':				'00008b',
	'darkcyan':				'008b8b',
	'darkgoldenrod':		'b8860b',
	'darkgray':				'a9a9a9',
	'darkgreen':			'006400',
	'darkgrey':				'a9a9a9',
	'darkkhaki':			'bdb76b',
	'darkmagenta':			'8b008b',
	'darkolivegreen':		'556b2f',
	'darkorange':			'ff8c00',
	'darkorchid':			'9932cc',
	'darkred':				'8b0000',
	'darksalmon':			'e9967a',
	'darkseagreen':			'8fbc8f',
	'darkslateblue':		'483d8b',
	'darkslategray':		'2f4f4f',
	'darkslategrey':		'2f4f4f',
	'darkturquoise':		'00ced1',
	'darkviolet':			'9400d3',
	'deeppink':				'ff1493',
	'deepskyblue':			'00bfff',
	'dimgray':				'696969',
	'dimgrey':				'696969',
	'dodgerblue':			'1e90ff',
	'firebrick':			'b22222',
	'floralwhite':			'fffaf0',
	'forestgreen':			'228b22',
	'fuchsia':				'ff00ff',
	'gainsboro':			'dcdcdc',
	'ghostwhite':			'f8f8ff',
	'gold':					'ffd700',
	'goldenrod':			'daa520',
	'gray':					'808080',
	'grey':					'808080',
	'green':				'008000',
	'greenyellow':			'adff2f',
	'honeydew':				'f0fff0',
	'hotpink':				'ff69b4',
	'indianred':			'cd5c5c',
	'indigo':				'4b0082',
	'ivory':				'fffff0',
	'khaki':				'f0e68c',
	'lavender':				'e6e6fa',
	'lavenderblush':		'fff0f5',
	'lawngreen':			'7cfc00',
	'lemonchiffon':			'fffacd',
	'lightblue':			'add8e6',
	'lightcoral':			'f08080',
	'lightcyan':			'e0ffff',
	'lightgoldenrodyellow':	'fafad2',
	'lightgray':			'd3d3d3',
	'lightgreen':			'90ee90',
	'lightgrey':			'd3d3d3',
	'lightpink':			'ffb6c1',
	'lightsalmon':			'ffa07a',
	'lightseagreen':		'20b2aa',
	'lightskyblue':			'87cefa',
	'lightslategray':		'778899',
	'lightslategrey':		'778899',
	'lightsteelblue':		'b0c4de',
	'lightyellow':			'ffffe0',
	'lime':					'00ff00',
	'limegreen':			'32cd32',
	'linen':				'faf0e6',
	'magenta':				'ff00ff',
	'maroon':				'800000',
	'mediumaquamarine':		'66cdaa',
	'mediumblue':			'0000cd',
	'mediumorchid':			'ba55d3',
	'mediumpurple':			'9370db',
	'mediumseagreen':		'3cb371',
	'mediumslateblue':		'7b68ee',
	'mediumspringgreen':	'00fa9a',
	'mediumturquoise':		'48d1cc',
	'mediumvioletred':		'c71585',
	'midnightblue':			'191970',
	'mintcream':			'f5fffa',
	'mistyrose':			'ffe4e1',
	'moccasin':				'ffe4b5',
	'navajowhite':			'ffdead',
	'navy':					'000080',
	'oldlace':				'fdf5e6',
	'olive':				'808000',
	'olivedrab':			'6b8e23',
	'orange':				'ffa500',
	'orangered':			'ff4500',
	'orchid':				'da70d6',
	'palegoldenrod':		'eee8aa',
	'palegreen':			'98fb98',
	'paleturquoise':		'afeeee',
	'palevioletred':		'db7093',
	'papayawhip':			'ffefd5',
	'peachpuff':			'ffdab9',
	'peru':					'cd853f',
	'pink':					'ffc0cb',
	'plum':					'dda0dd',
	'powderblue':			'b0e0e6',
	'purple':				'800080',
	'red':					'ff0000',
	'rosybrown':			'bc8f8f',
	'royalblue':			'4169e1',
	'saddlebrown':			'8b4513',
	'salmon':				'fa8072',
	'sandybrown':			'f4a460',
	'seagreen':				'2e8b57',
	'seashell':				'fff5ee',
	'sienna':				'a0522d',
	'silver':				'c0c0c0',
	'skyblue':				'87ceeb',
	'slateblue':			'6a5acd',
	'slategray':			'708090',
	'slategrey':			'708090',
	'snow':					'fffafa',
	'springgreen':			'00ff7f',
	'steelblue':			'4682b4',
	'tan':					'd2b48c',
	'teal':					'008080',
	'thistle':				'd8bfd8',
	'tomato':				'ff6347',
	'turquoise':			'40e0d0',
	'violet':				'ee82ee',
	'wheat':				'f5deb3',
	'white':				'ffffff',
	'whitesmoke':			'f5f5f5',
	'yellow':				'ffff00',
	'yellowgreen':			'9acd32',
	'': 					'',
	'transparent': 			'0000'
}

var safeCallImpl = function(callback, self, args, onError) {
	try { return callback.apply(self, args) } catch(ex) { onError(ex) }
}

exports.core.safeCall = function(self, args, onError) {
	return function(callback) { return safeCallImpl(callback, self, args, onError) }
}


exports.core.getKeyCodeByName = function(key) {
	var codes = _globals.core.keyCodes
	for (var i in codes) {
		if (codes[i] === key)
			return ~~i
	}
}
/**
 * @constructor
 */
var CoreObjectComponent = exports.core.CoreObject = function(parent) {
	this._local = Object.create(parent? parent._local: null)
}

var CoreObjectComponentPrototype = CoreObjectComponent.prototype
CoreObjectComponentPrototype.componentName = 'core.CoreObject'
CoreObjectComponentPrototype.constructor = CoreObjectComponent

/** @private **/
CoreObjectComponentPrototype.$c = function() { }

/** @private **/
CoreObjectComponentPrototype.$s = function() { }

CoreObjectComponentPrototype.__init = function() {
	var c = {}
	this.$c(c)
	this.$s(c)
}

/** @private **/
CoreObjectComponentPrototype.__complete = function() { }

///@private gets object by id
CoreObjectComponentPrototype._get = function(name, unsafe) {
	if (name in this) //do not remove in here, properties may contain undefined!
		return this[name]

	if (name in this._local)
		return this._local[name]

	if (unsafe)
		return null
	else
		throw new Error("invalid property requested: '" + name + "'")
}

/** @constructor */
var Color = exports.core.Color = function(value) {
	if (Array.isArray(value)) {
		this.r = value[0]
		this.g = value[1]
		this.b = value[2]
		this.a = value[3] !== undefined? value[3]: 255
		return
	}
	if (typeof value !== 'string')
	{
		this.r = this.b = this.a = 255
		this.g = 0
		log("invalid color specification: " + value, new Error().stack)
		return
	}
	var triplet
	if (value[0] === '#') {
		triplet = value.substring(1)
	} else if (value.substring(0, 4) === "rgba") {
		var b = value.indexOf('('), e = value.lastIndexOf(')')
		value = value.substring(b + 1, e).split(',')
		this.r = parseInt(value[0], 10)
		this.g = parseInt(value[1], 10)
		this.b = parseInt(value[2], 10)
		this.a = Math.floor(parseFloat(value[3]) * 255)
		return
	} else
		triplet = colorTable[value]

	if (!triplet) {
		this.r = this.b = this.a = 255
		this.g = 0
		log("invalid color specification: " + value, new Error().stack)
		return
	}

	var len = triplet.length;
	if (len === 3 || len === 4) {
		var r = parseInt(triplet[0], 16)
		var g = parseInt(triplet[1], 16)
		var b = parseInt(triplet[2], 16)
		var a = (len === 4)? parseInt(triplet[3], 16): 15
		this.r = (r << 4) | r;
		this.g = (g << 4) | g;
		this.b = (b << 4) | b;
		this.a = (a << 4) | a;
	} else if (len === 6 || len === 8) {
		this.r = parseInt(triplet.substring(0, 2), 16)
		this.g = parseInt(triplet.substring(2, 4), 16)
		this.b = parseInt(triplet.substring(4, 6), 16)
		this.a = (len === 8)? parseInt(triplet.substring(6, 8), 16): 255
	} else
		throw new Error("invalid color specification: " + value)
}

Color.interpolate = function(dst, src, t) {
	if (!(dst instanceof Color))
		dst = new Color(dst)
	if (!(src instanceof Color))
		src = new Color(src)

	var interpolate = function (dst, src, t) {
		return Math.floor(t * (dst - src) + src)
	}

	var r = interpolate(dst.r, src.r, t)
	var g = interpolate(dst.g, src.g, t)
	var b = interpolate(dst.b, src.b, t)
	var a = interpolate(dst.a, src.a, t)

	return new Color([r, g, b, a])
}

Color.normalize = function(spec) {
	if (spec instanceof Color)
		return spec.rgba()
	else
		return (new Color(spec)).rgba()
}

var ColorPrototype = Color.prototype
ColorPrototype.constructor = exports.core.Color
/** @const */

ColorPrototype.rgba = function() {
	return "rgba(" + this.r + "," + this.g + "," + this.b + "," + (this.a / 255) + ")";
}

var hexByte = function(v) {
	var h = (v >> 4) & 0x0f
	var l = (v) & 0x0f
	h += (h > 9)? 0x57: 0x30
	l += (l > 9)? 0x57: 0x30
	return String.fromCharCode(h, l)
}

ColorPrototype.hex = function() {
	return '#' + hexByte(this.r) + hexByte(this.g) + hexByte(this.b) + hexByte(this.a)
}

ColorPrototype.ahex = function() {
	return '#' + hexByte(this.a) + hexByte(this.r) + hexByte(this.g) + hexByte(this.b)
}

exports.addLazyProperty = function(proto, name, creator) {
	var get = function(object) {
		var storage = object.__properties[name]
		if (storage !== undefined) {
			if (storage.value === undefined)
				storage.value = creator(object)
			return storage
		}

		return object.__properties[name] = new PropertyStorage(creator(object))
	}

	Object.defineProperty(proto, name, {
		get: function() {
			return get(this).value
		},

		set: function(newValue) {
			var storage = get(this)
			if (storage.forwardSet(this, name, newValue, null))
				return

			throw new Error('could not set lazy property ' + name + ' in ' + proto.componentName)
		},
		enumerable: true
	})
}

exports.addConstProperty = function(proto, name, getter) {
	Object.defineProperty(proto, name, {
		get: function() {
			return getter.call(this)
		},

		set: function(newValue) {
			throw new Error('could not set const property')
		},
		enumerable: true
	})
}

var PropertyStorage = function(value) {
	this.value = value
	this.onChanged = []
}
exports.PropertyStorage = PropertyStorage

var PropertyStoragePrototype = PropertyStorage.prototype

PropertyStoragePrototype.getAnimation = function(name, animation) {
	var a = this.animation
	if (!a || !a.enabled() || a._native)
		return null
	if (!a._context._completed)
		return null
	return a
}

PropertyStoragePrototype.removeUpdater = function() {
	var callback = this.callback
	if (callback === undefined)
		return

	var deps = this.deps
	for(var i = 0, n = deps.length; i < n; i += 2) {
		var object = deps[i]
		var name = deps[i + 1]
		object.removeOnChanged(name, callback)
	}
	this.deps = this.callback = undefined
}

PropertyStoragePrototype.replaceUpdater = function(parent, callback, deps) {
	this.removeUpdater()
	this.callback = callback
	this.deps = deps
	for(var i = 0, n = deps.length; i < n; i += 2) {
		var object = deps[i]
		var name = deps[i + 1]
		parent.connectOnChanged(object, name, callback)
	}
	callback()
}

PropertyStoragePrototype.forwardSet = function(object, name, newValue, defaultValue) {
	var forwardTarget = this.forwardTarget
	if (forwardTarget === undefined)
		return false

	var oldValue = this.getCurrentValue(defaultValue)
	if (oldValue !== null && (oldValue instanceof Object)) {
		//forward property update for mixins
		var forwardedOldValue = oldValue[forwardTarget]
		if (newValue !== forwardedOldValue) {
			oldValue[forwardTarget] = newValue
			this.callOnChanged(object, name, newValue, forwardedOldValue)
		}
		return true
	} else if (newValue instanceof Object) {
		//first assignment of mixin
		object.connectOnChanged(newValue, forwardTarget, function(v, ov) {
			var storage = object.__properties[name]
			if (storage !== undefined)
				storage.callOnChanged(object, name, v, ov)
		})
		return false
	}
}

PropertyStoragePrototype.discard = function() {

}

PropertyStoragePrototype.getSimpleValue = function(defaultValue) {
	var value = this.value
	return value !== undefined? value: defaultValue
}

PropertyStoragePrototype.getCurrentValue = function(defaultValue) {
	var value = this.interpolatedValue
	return value !== undefined? value: this.getSimpleValue(defaultValue)
}

PropertyStoragePrototype.setCurrentValue = function(object, name, newValue, defaultValue, callUpdate) {
	var oldValue = this.value
	this.interpolatedValue = undefined
	this.value = newValue
	if (callUpdate)
		this.callOnChanged(object, name, newValue, oldValue)
}

PropertyStoragePrototype.set = function(object, name, newValue, defaultValue, callUpdate) {
	var oldValue = this.value
	if (oldValue === undefined)
		oldValue = defaultValue

	if (oldValue === newValue)
		return
	if (this.forwardSet(object, name, newValue, defaultValue))
		return
	this.value = newValue
	if (callUpdate)
		this.callOnChanged(object, name, newValue, oldValue)
}

PropertyStoragePrototype.callOnChanged = function(object, name, value) {
	var protoCallbacks = object['__changed__' + name]
	var handlers = this.onChanged

	var hasProtoCallbacks = protoCallbacks !== undefined
	var hasHandlers = handlers !== undefined

	if (!hasProtoCallbacks && !hasHandlers)
		return

	var invoker = _globals.core.safeCall(object, [value], function(ex) { log("on " + name + " changed callback failed: ", ex, ex.stack) })

	if (hasProtoCallbacks)
		protoCallbacks.forEach(invoker)

	if (hasHandlers)
		handlers.forEach(invoker)
}

PropertyStoragePrototype.removeOnChanged = function(callback) {
	var handlers = this.onChanged
	var idx = handlers.indexOf(callback)
	if (idx >= 0)
		return handlers.splice(idx, 1)
}

exports.addProperty = function(proto, type, name, defaultValue) {
	var convert
	var animable = false
	switch(type) {
		case 'enum':
		case 'int':		convert = function(value) { return ~~value }; animable = true; break
		case 'bool':	convert = function(value) { return value? true: false }; break
		case 'real':	convert = function(value) { return +value }; animable = true; break
		case 'string':	convert = function(value) { return String(value) }; break

		case 'Color':	animable = true; //fallthrough
		default:		convert = function(value) { return value }; break
	}

	if (defaultValue !== undefined) {
		defaultValue = convert(defaultValue)
	} else {
		switch(type) {
			case 'enum': //fixme: add default value here
			case 'int':		defaultValue = 0; break
			case 'bool':	defaultValue = false; break
			case 'real':	defaultValue = 0.0; break
			case 'string':	defaultValue = ""; break
			case 'array':	defaultValue = []; break
			case 'Color':	defaultValue = '#0000'; break
			default:
				defaultValue = (type[0].toUpperCase() == type[0])? null: undefined
		}
	}

	var createStorage = function(newValue) {
		var storage = this.__properties[name]
		if (storage === undefined) { //no storage
			if (newValue === defaultValue) //value == defaultValue, no storage allocation
				return
			storage = this.__properties[name] = new PropertyStorage(defaultValue)
		}
		return storage
	}

	var simpleGet = function() {
		var storage = this.__properties[name]
		return storage !== undefined? storage.getSimpleValue(defaultValue): defaultValue
	}

	var simpleSet = function(newValue) {
		newValue = convert(newValue)
		var storage = createStorage.call(this, newValue)
		if (storage === undefined)
			return

		storage.set(this, name, newValue, defaultValue, true)
	}

	var animatedGet = function() {
		var storage = this.__properties[name]
		return storage !== undefined?
			storage.getCurrentValue(defaultValue):
			defaultValue
	}

	var animatedSet = function(newValue) {
		newValue = convert(newValue)

		var storage = createStorage.call(this, newValue)
		if (storage === undefined)
			return

		var animation = storage.getAnimation()
		if (animation && storage.value !== newValue) {
			var context = this._context
			var backend = context.backend
			if (storage.frameRequest)
				backend.cancelAnimationFrame(storage.frameRequest)

			storage.started = Date.now()

			var src = storage.getCurrentValue(defaultValue)
			var dst = newValue

			var self = this

			var complete = function() {
				backend.cancelAnimationFrame(storage.frameRequest)
				storage.frameRequest = undefined
				animation.complete = function() { }
				animation.running = false
				storage.interpolatedValue = undefined
				storage.started = undefined
				storage.callOnChanged(self, name, dst, src)
			}

			var duration = animation.duration

			var nextFrame = context.wrapNativeCallback(function() {
				var now = Date.now()
				var t = 1.0 * (now - storage.started) / duration
				if (t >= 1 || !animation.active()) {
					complete()
				} else {
					storage.interpolatedValue = convert(animation.interpolate(dst, src, t))
					storage.callOnChanged(self, name, storage.getCurrentValue(defaultValue), src)
					storage.frameRequest = backend.requestAnimationFrame(nextFrame)
				}
			})

			storage.frameRequest = backend.requestAnimationFrame(nextFrame)

			animation.running = true
			animation.complete = complete
		}
		storage.set(this, name, newValue, defaultValue, !animation)
		// if ((!animation || !animation.running) && newValue === defaultValue)
		// 	this.__properties[name] = undefined
	}

	Object.defineProperty(proto, name, {
		get: animable? animatedGet: simpleGet,
		set: animable? animatedSet: simpleSet,
		enumerable: true
	})
}

exports.addAliasProperty = function(object, name, getObject, srcProperty) {
	var target = getObject()
	object.connectOnChanged(target, srcProperty, function(value) {
		var storage = object.__properties[name]
		if (storage !== undefined)
			storage.callOnChanged(object, name, value)
	})

	Object.defineProperty(object, name, {
		get: function() { return target[srcProperty] },
		set: function(value) { target[srcProperty] = value },
		enumerable: true
	})
}

exports.core.createSignal = function(name) {
	return function() {
		this.emitWithArgs(name, arguments)
	}
}
exports.core.createSignalForwarder = function(object, name) {
	return (function() {
		object.emitWithArgs(name, arguments)
	})
}

/** @constructor */
exports.core.EventBinder = function(target) {
	this.target = target
	this.callbacks = {}
	this.enabled = false
}

exports.core.EventBinder.prototype.on = function(event, callback) {
	if (event in this.callbacks)
		throw new Error('double adding of event (' + event + ')')
	this.callbacks[event] = callback
	if (this.enabled)
		this.target.on(event, callback)
}

exports.core.EventBinder.prototype.constructor = exports.core.EventBinder

exports.core.EventBinder.prototype.enable = function(value) {
	if (value != this.enabled) {
		var target = this.target
		this.enabled = value
		if (value) {
			for(var event in this.callbacks)
				target.on(event, this.callbacks[event])
		} else {
			for(var event in this.callbacks)
				target.removeListener(event, this.callbacks[event])
		}
	}
}

var protoEvent = function(prefix, proto, name, callback) {
	var sname = prefix + '__' + name
	//if property was in base prototype, create shallow copy and put our handler there or we would add to base prototype's array
	var storage = proto[sname]
	if (storage !== undefined) {
		var ownStorage = proto.hasOwnProperty(sname)
		if (ownStorage)
			storage.push(callback)
		else {
			var copy = storage.slice()
			copy.push(callback)
			proto[sname] = copy
		}
	} else
		proto[sname] = [callback]
}

exports.core._protoOn = function(proto, name, callback)
{ protoEvent('__on', proto, name, callback) }

exports.core._protoOnChanged = function(proto, name, callback)
{ protoEvent('__changed', proto, name, callback) }

exports.core._protoOnKey = function(proto, name, callback)
{ protoEvent('__key', proto, name, callback) }

var ObjectEnumerator = function(callback) {
	this._callback = callback
	this._queue = []
	this.history = []
}

var ObjectEnumeratorPrototype = ObjectEnumerator.prototype
ObjectEnumeratorPrototype.constructor = ObjectEnumerator

ObjectEnumeratorPrototype.unshift = function() {
	var q = this._queue
	q.unshift.apply(q, arguments)
}

ObjectEnumeratorPrototype.push = function() {
	var q = this._queue
	q.push.apply(q, arguments)
}

ObjectEnumeratorPrototype.enumerate = function(root, arg) {
	var args = [this, arg]
	var queue = this._queue
	queue.unshift(root)
	while(queue.length) {
		var el = queue.shift()
		this.history.push(el)
		var r = this._callback.apply(el, args)
		if (r)
			break
	}
}

exports.forEach = function(root, callback, arg) {
	var oe = new ObjectEnumerator(callback)
	oe.enumerate(root, arg)
	return arg
}

String.prototype.arg = function (arg) {
	for(var i = 1; i < 100; ++i) {
		if (this.indexOf('%' + i) !== -1) {
			var str = this
			while(str.indexOf('%' + i) !== -1)
				str = str.replace('%' + i, arg);
			return str
		}
	}
	log("string.arg: Argument missing: '%1', arg: '%2'".arg(this).arg(arg))
	return this;
};

Array.prototype.__defineGetter__("count", function() { return this.length })

return exports;
} )()
//========================================

/** @const @type {!CoreObject} */
var core = _globals.core.core


//=====[component core.EventEmitter]=====================

	var EventEmitterBaseComponent = _globals.core.CoreObject
	var EventEmitterBasePrototype = EventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.CoreObject}
 */
	var EventEmitterComponent = _globals.core.EventEmitter = function(parent, row) {
		EventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._eventHandlers = {}
		this._onConnections = []
	}

	}
	var EventEmitterPrototype = EventEmitterComponent.prototype = Object.create(EventEmitterBasePrototype)

	EventEmitterPrototype.constructor = EventEmitterComponent

	EventEmitterPrototype.componentName = 'core.EventEmitter'
	EventEmitterPrototype.discard = function() {
		for(var name in this._eventHandlers)
			this.removeAllListeners(name)

		var connections = this._onConnections
		for(var i = 0, n = connections.length; i < n; i += 3)
			connections[i].removeListener(connections[i + 1], connections[i + 2])
		this._onConnections = []
	}
	EventEmitterPrototype.removeAllListeners = function(name) {
		delete this._eventHandlers[name]
	}
	EventEmitterPrototype.emit = function(name) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		
		/* COPY_ARGS(args, 1) */
		var $n = arguments.length
		var args = new Array($n - 1)
		var $d = 0, $s = 1;
		while($s < $n) {
			args[$d++] = arguments[$s++]
		}


		var invoker = _globals.core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.emitWithArgs = function(name,args) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		var invoker = _globals.core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.removeListener = function(name,callback) {
		if (!(name in this._eventHandlers) || callback === undefined || callback === null || name === '') {
			if ($manifest$trace$listeners)
				log('invalid removeListener(' + name + ', ' + callback + ') invocation', new Error().stack)
			return
		}

		var handlers = this._eventHandlers[name]
		var idx = handlers.indexOf(callback)
		if (idx >= 0)
			handlers.splice(idx, 1)
		else if ($manifest$trace$listeners)
			log('failed to remove listener for', name, 'from', this)

		if (!handlers.length)
			this.removeAllListeners(name)
	}
	EventEmitterPrototype.on = function(name,callback) {
		if (name === '')
			throw new Error('empty listener name')

		var storage = this._eventHandlers
		var handlers = storage[name]
		if (handlers !== undefined)
			handlers.push(callback)
		else {
			storage[name] = [callback]
		}
	}
	EventEmitterPrototype.connectOn = function(target,name,callback) {
		target.on(name, callback)
		this._onConnections.push(target, name, callback)
	}

//=====[component core.Object]=====================

	var ObjectBaseComponent = _globals.core.EventEmitter
	var ObjectBasePrototype = ObjectBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.EventEmitter}
 */
	var ObjectComponent = _globals.core.Object = function(parent, row) {
		ObjectBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.parent = parent
		this.children = []
		this.__properties = {}
		this.__attachedObjects = []
		if (parent)
			parent.__attachedObjects.push(this)

		var context = this._context = parent? parent._context: null
		if (context)
			context._onCompleted(this)
		if (row) {
			var local = this._local
			local.model = row
			local._delegate = this
		}
		this._changedConnections = []
		this._properties = {}
	}

	}
	var ObjectPrototype = ObjectComponent.prototype = Object.create(ObjectBasePrototype)

	{
		ObjectPrototype._propertyToStyle = {
			width: 'width', height: 'height',
			x: 'left', y: 'top', viewX: 'left', viewY: 'top',
			opacity: 'opacity',
			border: 'border',
			radius: 'border-radius',
			rotate: 'transform',
			boxshadow: 'box-shadow',
			transform: 'transform',
			visible: 'visibility', visibleInView: 'visibility',
			background: 'background',
			color: 'color',
			backgroundImage: 'background-image',
			font: 'font'
		}
	}

	ObjectPrototype.constructor = ObjectComponent

	ObjectPrototype.componentName = 'core.Object'
	core.addProperty(ObjectPrototype, 'bool', 'qt', (false))
	ObjectPrototype.toString = function() {
		return "QML Object"
	}
	ObjectPrototype.discard = function() {
		var connections = this._changedConnections
		for(var i = 0, n = connections.length; i < n; i += 3)
			connections[i].removeOnChanged(connections[i + 1], connections[i + 2])
		this._changedConnections = []

		var attached = this.__attachedObjects
		this.__attachedObjects = []
		attached.forEach(function(child) { child.discard() })

		var parent = this.parent
		if (parent) {
			var discardIdx = parent.__attachedObjects.indexOf(this)
			if (discardIdx >= 0)
				parent.__attachedObjects.splice(discardIdx, 1)
		}

		this.children = []

		this.parent = null
		this._local = {}

		var properties = this.__properties
		for(var name in properties) //fixme: it was added once, then removed, is it needed at all? it double-deletes callbacks
			properties[name].discard()
		this._properties = {}

		_globals.core.EventEmitter.prototype.discard.apply(this)
	}
	ObjectPrototype._tryFocus = function() { return false }
	ObjectPrototype.addChild = function(child) {
		this.children.push(child);
	}
	ObjectPrototype._setId = function(name) {
		var p = this;
		while(p) {
			p._local[name] = this;
			p = p.parent;
		}
	}
	ObjectPrototype._removeUpdater = function(name) {
		var storage = this.__properties[name]
		if (storage !== undefined)
			storage.removeUpdater()
	}
	ObjectPrototype.updateAnimation = function(name,animation) {
		this._context.backend.setAnimation(this, name, animation)
	}
	ObjectPrototype.setAnimation = function(name,animation) {
	var context = this._get('context', true)

		if ($manifest$disableAnimations)
			return

		var context = this._context
		var backend = context.backend
		if (name === 'contentX' || name === 'contentY')
			log('WARNING: you\'re trying to animate contentX/contentY property, this will always use animation frames, ignoring CSS transitions, please use content.x/content.y instead')

		animation._target = this
		animation._property = name
		var storage = this._createPropertyStorage(name)
		storage.animation = animation
		if (backend.setAnimation(this, name, animation))
			animation._native = true
	}
	ObjectPrototype.removeOnChanged = function(name,callback) {
		var storage = this.__properties[name]
		var removed
		if (storage !== undefined)
			removed = storage.removeOnChanged(callback)

		if ($manifest$trace$listeners && !removed)
			log('failed to remove changed listener for', name, 'from', this)
	}
	ObjectPrototype.onChanged = function(name,callback) {
		var storage = this._createPropertyStorage(name)
		storage.onChanged.push(callback)
	}
	ObjectPrototype._replaceUpdater = function(name,callback,deps) {
		this._createPropertyStorage(name).replaceUpdater(this, callback, deps)
	}
	ObjectPrototype.setPropertyForwardingTarget = function(name,target) {
		this._createPropertyStorage(name).forwardTarget = target
	}
	ObjectPrototype._setProperty = function(name,value) {
		//cancel any running software animations
		var storage = this._createPropertyStorage(name, value)
		var animation = storage.animation
		if (animation !== undefined)
			animation.disable()
		storage.setCurrentValue(this, null, value)
		if (animation !== undefined)
			animation.enable()
	}
	ObjectPrototype._createPropertyStorage = function(name,value) {
		var storage = this.__properties[name]
		if (storage !== undefined)
			return storage

		return this.__properties[name] = new _globals.core.core.PropertyStorage(value)
	}
	ObjectPrototype.connectOnChanged = function(target,name,callback) {
		target.onChanged(name, callback)
		this._changedConnections.push(target, name, callback)
	}

//=====[component core.System]=====================

	var SystemBaseComponent = _globals.core.Object
	var SystemBasePrototype = SystemBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var SystemComponent = _globals.core.System = function(parent, row) {
		SystemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.vendor = _globals.core.vendor
		this.device = _globals.core.device
		this.os = _globals.core.os

		this.browser = _globals.core.browser
		this.userAgent = _globals.core.userAgent
		this.language = _globals.core.language

		var ctx = this._context
		ctx.language = this.language.replace('-', '_')
		this.webkit = this.userAgent.toLowerCase().indexOf('webkit') >= 0

		this.support3dTransforms = ctx.backend.capabilities.csstransforms3d || false
		this.supportTransforms = ctx.backend.capabilities.csstransforms || false
		this.supportTransitions = ctx.backend.capabilities.csstransitions || false
	}

	}
	var SystemPrototype = SystemComponent.prototype = Object.create(SystemBasePrototype)

	SystemPrototype.constructor = SystemComponent

	SystemPrototype.componentName = 'core.System'
	core.addProperty(SystemPrototype, 'string', 'userAgent')
	core.addProperty(SystemPrototype, 'string', 'language')
	core.addProperty(SystemPrototype, 'string', 'browser')
	core.addProperty(SystemPrototype, 'string', 'vendor')
	core.addProperty(SystemPrototype, 'string', 'os')
	core.addProperty(SystemPrototype, 'bool', 'webkit')
	core.addProperty(SystemPrototype, 'bool', 'support3dTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransitions')
	core.addProperty(SystemPrototype, 'bool', 'portrait')
	core.addProperty(SystemPrototype, 'bool', 'landscape')
	core.addProperty(SystemPrototype, 'bool', 'pageActive', (true))
	core.addProperty(SystemPrototype, 'int', 'screenWidth')
	core.addProperty(SystemPrototype, 'int', 'screenHeight')
	core.addProperty(SystemPrototype, 'int', 'contextWidth')
	core.addProperty(SystemPrototype, 'int', 'contextHeight')
/** @const @type {number} */
	SystemPrototype.Desktop = 0
/** @const @type {number} */
	SystemComponent.Desktop = 0
/** @const @type {number} */
	SystemPrototype.Tv = 1
/** @const @type {number} */
	SystemComponent.Tv = 1
/** @const @type {number} */
	SystemPrototype.Mobile = 2
/** @const @type {number} */
	SystemComponent.Mobile = 2
	core.addProperty(SystemPrototype, 'enum', 'device')
/** @const @type {number} */
	SystemPrototype.MobileS = 0
/** @const @type {number} */
	SystemComponent.MobileS = 0
/** @const @type {number} */
	SystemPrototype.MobileM = 1
/** @const @type {number} */
	SystemComponent.MobileM = 1
/** @const @type {number} */
	SystemPrototype.MobileL = 2
/** @const @type {number} */
	SystemComponent.MobileL = 2
/** @const @type {number} */
	SystemPrototype.Tablet = 3
/** @const @type {number} */
	SystemComponent.Tablet = 3
/** @const @type {number} */
	SystemPrototype.Laptop = 4
/** @const @type {number} */
	SystemComponent.Laptop = 4
/** @const @type {number} */
	SystemPrototype.LaptopL = 5
/** @const @type {number} */
	SystemComponent.LaptopL = 5
/** @const @type {number} */
	SystemPrototype.Laptop4K = 6
/** @const @type {number} */
	SystemComponent.Laptop4K = 6
	core.addProperty(SystemPrototype, 'enum', 'layoutType')
	SystemPrototype._updateLayoutType = function() {
		if (!this.contextWidth || !this.contextHeight)
			return
		var min = this.contextWidth;// < this.contextHeight ? this.contextWidth : this.contextHeight

		if (min <= 320)
			this.layoutType = this.MobileS
		else if (min <= 375)
			this.layoutType = this.MobileM
		else if (min <= 425)
			this.layoutType = this.MobileL
		else if (min <= 768)
			this.layoutType = this.Tablet
		else if (this.contextWidth <= 1024)
			this.layoutType = this.Laptop
		else if (this.contextWidth <= 1440)
			this.layoutType = this.LaptopL
		else
			this.layoutType = this.Laptop4K
	}
	var $code$0 = function(value) { this._updateLayoutType() }
	_globals.core._protoOnChanged(SystemPrototype, 'contextHeight', $code$0)
	_globals.core._protoOnChanged(SystemPrototype, 'contextWidth', $code$0)

	SystemPrototype.$c = function($c) {
		var $this = this;
		SystemBasePrototype.$c.call(this, $c.$b = { })

	}
	SystemPrototype.$s = function($c) {
		var $this = this;
	SystemBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning portrait to (${parent.width} < ${parent.height})
			$this._replaceUpdater('portrait', function() { $this.portrait = ($this.parent.width < $this.parent.height) }, [$this.parent,'height',$this.parent,'width'])
//assigning contextWidth to (${context.width})
			$this._replaceUpdater('contextWidth', function() { $this.contextWidth = ($this._context.width) }, [$this._context,'width'])
//assigning landscape to (! ${portrait})
			$this._replaceUpdater('landscape', function() { $this.landscape = (! $this.portrait) }, [$this,'portrait'])
//assigning contextHeight to (${context.height})
			$this._replaceUpdater('contextHeight', function() { $this.contextHeight = ($this._context.height) }, [$this._context,'height'])
}


//=====[component core.Item]=====================

	var ItemBaseComponent = _globals.core.Object
	var ItemBasePrototype = ItemBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var ItemComponent = _globals.core.Item = function(parent, row) {
		ItemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._pressedHandlers = {}
		this._topPadding = 0
		this._borderXAdjust = 0
		this._borderYAdjust = 0
		this._borderWidthAdjust = 0
		this._borderHeightAdjust = 0
		if (parent) {
			if (this.element)
				throw new Error('double ctor call')

			this._createElement(this.getTag(), this.getClass())
		} //no parent == top level element, skip
	}

	}
	var ItemPrototype = ItemComponent.prototype = Object.create(ItemBasePrototype)

	ItemPrototype.constructor = ItemComponent

	ItemPrototype.componentName = 'core.Item'
	ItemPrototype.newBoundingBox = _globals.core.createSignal('newBoundingBox')
	core.addProperty(ItemPrototype, 'int', 'x')
	core.addProperty(ItemPrototype, 'int', 'y')
	core.addProperty(ItemPrototype, 'int', 'z')
	core.addProperty(ItemPrototype, 'int', 'width')
	core.addProperty(ItemPrototype, 'int', 'height')
	core.addProperty(ItemPrototype, 'bool', 'clip')
	core.addProperty(ItemPrototype, 'real', 'radius')
	core.addProperty(ItemPrototype, 'real', 'scale', (1))
	core.addProperty(ItemPrototype, 'bool', 'fixed')
	core.addProperty(ItemPrototype, 'bool', 'mouseEnabled', (true))
	core.addProperty(ItemPrototype, 'bool', 'focus')
	core.addProperty(ItemPrototype, 'bool', 'focused')
	core.addProperty(ItemPrototype, 'bool', 'activeFocus')
	core.addProperty(ItemPrototype, 'Item', 'focusedChild')
	core.addProperty(ItemPrototype, 'string', 'class')
	core.addProperty(ItemPrototype, 'bool', 'visible', (true))
	core.addProperty(ItemPrototype, 'bool', 'visibleInView', (true))
	core.addProperty(ItemPrototype, 'bool', 'recursiveVisible', (false))
	core.addProperty(ItemPrototype, 'real', 'opacity', (1))
	core.addProperty(ItemPrototype, 'real', 'rotation')
	core.addLazyProperty(ItemPrototype, 'anchors', (function(__parent, __row) {
		var lazy$anchors = new _globals.core.Anchors(__parent, __row)
		var $c = { lazy$anchors : lazy$anchors }

//creating component Anchors
			lazy$anchors.$c($c.$c$lazy$anchors = { })


//setting up component Anchors
			var lazy$anchors = $c.lazy$anchors
			lazy$anchors.$s($c.$c$lazy$anchors)
			delete $c.$c$lazy$anchors



		return lazy$anchors
}))
	core.addLazyProperty(ItemPrototype, 'effects', (function(__parent, __row) {
		var lazy$effects = new _globals.core.Effects(__parent, __row)
		var $c = { lazy$effects : lazy$effects }

//creating component Effects
			lazy$effects.$c($c.$c$lazy$effects = { })


//setting up component Effects
			var lazy$effects = $c.lazy$effects
			lazy$effects.$s($c.$c$lazy$effects)
			delete $c.$c$lazy$effects



		return lazy$effects
}))
	core.addLazyProperty(ItemPrototype, 'transform', (function(__parent, __row) {
		var lazy$transform = new _globals.core.Transform(__parent, __row)
		var $c = { lazy$transform : lazy$transform }

//creating component Transform
			lazy$transform.$c($c.$c$lazy$transform = { })


//setting up component Transform
			var lazy$transform = $c.lazy$transform
			lazy$transform.$s($c.$c$lazy$transform)
			delete $c.$c$lazy$transform



		return lazy$transform
}))
	core.addProperty(ItemPrototype, 'bool', 'cssTranslatePositioning')
	core.addProperty(ItemPrototype, 'bool', 'cssNullTranslate3D')
	core.addProperty(ItemPrototype, 'bool', 'cssDelegateAlwaysVisibleOnAcceleratedSurfaces', (true))
	core.addProperty(ItemPrototype, 'var', 'itemStyle')
	core.addConstProperty(ItemPrototype, 'left', function() { return [this, 0]; })
	core.addConstProperty(ItemPrototype, 'top', function() { return [this, 1]; })
	core.addConstProperty(ItemPrototype, 'right', function() { return [this, 2]; })
	core.addConstProperty(ItemPrototype, 'bottom', function() { return [this, 3]; })
	core.addConstProperty(ItemPrototype, 'horizontalCenter', function() { return [this, 4]; })
	core.addConstProperty(ItemPrototype, 'verticalCenter', function() { return [this, 5]; })
	core.addProperty(ItemPrototype, 'int', 'viewX')
	core.addProperty(ItemPrototype, 'int', 'viewY')
	core.addProperty(ItemPrototype, 'int', 'keyProcessDelay')
	core.addProperty(ItemPrototype, 'bool', 'absoluteEnabled')
	core.addProperty(ItemPrototype, 'int', 'absoluteX')
	core.addProperty(ItemPrototype, 'int', 'absoluteY')
	core.addProperty(ItemPrototype, 'bool', 'visibleX')
	core.addProperty(ItemPrototype, 'bool', 'visibleY')
	ItemPrototype.discard = function() {
		_globals.core.Object.prototype.discard.apply(this)
		this.focusedChild = null
		this._pressedHandlers = {}
		if (this.element)
			this.element.discard()
	}
	ItemPrototype._tryFocus = function() {
		if (!this.visible)
			return false

		if (this.focusedChild && this.focusedChild._tryFocus())
			return true

		var children = this.children
		for(var i = 0; i < children.length; ++i) {
			var child = children[i]
			if (child._tryFocus()) {
				this._focusChild(child)
				return true
			}
		}
		return this.focus
	}
	ItemPrototype.toString = function() {
		return "Item (width: " + this.width + ", height: " + this.height + ", x: " + this.x + ", y: " + this.y + ")"
	}
	ItemPrototype._updateStyle = function() {
		var element = this.element
		if (element)
			element.updateStyle()
	}
	ItemPrototype.toScreen = function() {
		var item = this
		var x = 0, y = 0
		var w = this.width, h = this.height
		while(item) {
			x += item.x
			y += item.y
			if (item.hasOwnProperty('view')) {
				x += item.viewX + item.view.content.x
				y += item.viewY + item.view.content.y
			}
			item = item.parent
		}
		return [x, y, x + w, y + h, x + w / 2, y + h / 2];
	}
	ItemPrototype.hasActiveFocus = function() {
		var item = this
		while(item.parent) {
			if (item.parent.focusedChild != item)
				return false

			item = item.parent
		}
		return true
	}
	ItemPrototype._propagateFocusToParents = function() {
		var item = this;
		while(item.parent && (!item.parent.focusedChild || !item.parent.focusedChild.visible)) {
			item.parent._focusChild(item)
			item = item.parent
		}
	}
	ItemPrototype.forceActiveFocus = function() {
		var item = this;
		while(item.parent) {
			item.parent._focusChild(item);
			item = item.parent;
		}
	}
	ItemPrototype.getComponentPath = function() {
		var path = []
		var self = this
		while(self) {
			path.unshift(self.componentName)
			self = self.parent
		}
		return path.join(" → ")
	}
	ItemPrototype._updateVisibility = function() {
		var visible = this.visible && this.visibleInView

		var updateStyle = true
		var view = this.view
		if (view !== undefined) {
			var content = view.content
			//do not update real style for individual delegate in case of hardware accelerated surfaces
			//it may trigger large invisible repaints
			//consider this as default in the future.
			if (content.cssDelegateAlwaysVisibleOnAcceleratedSurfaces && (content.cssTranslatePositioning || content.cssNullTranslate3D) && !$manifest$cssDisableTransformations)
				updateStyle = false
		}

		if (updateStyle)
			this.style('visibility', visible? 'inherit': 'hidden')

		this.recursiveVisible = visible && (this.parent !== null? this.parent.recursiveVisible: true)
	}
	ItemPrototype._setSizeAdjust = function() {
		var x = this.x + this.viewX + this._borderXAdjust
		var y = this.y + this.viewY + this._borderYAdjust

		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations) {
			this.transform.translateX = x
			this.transform.translateY = y
		} else {
			this.style('left', x)
			this.style('top', y)
		}
	}
	ItemPrototype._updateAbsoluteCoords = function() {
	var context = this._get('context', true)

		if (!context)
			return
		var absolute = this.element.dom.getBoundingClientRect()
		this.absoluteX = absolute.x + window.pageXOffset
		this.absoluteY = absolute.y + window.pageYOffset
		context._updateContentScroll()
		this.newBoundingBox()
	}
	ItemPrototype.itemStyleUpdate = function() {
 		this.itemStyle._getStyle(this)
 	}
	ItemPrototype.getClass = function() { return '' }
	ItemPrototype.getTag = function() { return 'div' }
	ItemPrototype.setFocus = function() { this.forceActiveFocus() }
	ItemPrototype._focusTree = function(active) {
		this.activeFocus = active;
		if (this.focusedChild)
			this.focusedChild._focusTree(active);
	}
	ItemPrototype.addChild = function(child) {
		_globals.core.Object.prototype.addChild.apply(this, arguments)
		if (child._tryFocus())
			child._propagateFocusToParents()
	}
	ItemPrototype._focusChild = function(child) {
		if (child.parent !== this)
			throw new Error('invalid object passed as child')
		if (this.focusedChild === child)
			return
		if (this.focusedChild) {
			this.focusedChild._focusTree(false)
			this.focusedChild.focused = false
		}
		this.focusedChild = child
		if (this.focusedChild) {
			this.focusedChild._focusTree(this.hasActiveFocus())
			this.focusedChild.focused = true
		}
	}
	ItemPrototype.focusChild = function(child) {
		this._propagateFocusToParents()
		this._focusChild(child)
	}
	ItemPrototype._updateVisibilityForChild = function(child,value) {
		child.recursiveVisible = value && child.visible && child.visibleInView
	}
	ItemPrototype._attachElement = function(element) {
		if (this.element)
			this.element.discard()

		element._item = this
		this.element = element
		var parent = this.parent
		if (parent)
			parent.element.append(element)
	}
	ItemPrototype._processKey = function(event) {
	var key = this._get('key', true)

		var keyCode = event.which || event.keyCode
		var key = _globals.core.keyCodes[keyCode]
		var eventTime = event.timeStamp

		if (key !== undefined) {
			if (this.keyProcessDelay) {
				if (this._lastEvent && eventTime > this._lastEvent && eventTime - this._lastEvent < this.keyProcessDelay)
					return true

				this._lastEvent = eventTime
			}

			//fixme: create invoker only if any of handlers exist
			var invoker = _globals.core.safeCall(this, [key, event], function (ex) { log("on " + key + " handler failed:", ex, ex.stack) })
			var proto_callback = this['__key__' + key]

			if (key in this._pressedHandlers)
				return this.invokeKeyHandlers(key, event, this._pressedHandlers[key], invoker)

			if (proto_callback)
				return this.invokeKeyHandlers(key, event, proto_callback, invoker)

			var proto_callback = this['__key__Key']
			if ('Key' in this._pressedHandlers)
				return this.invokeKeyHandlers(key, event, this._pressedHandlers['Key'], invoker)

			if (proto_callback)
				return this.invokeKeyHandlers(key, event, proto_callback, invoker)
		} else {
			log("unknown keycode " + keyCode + ": [" + event.charCode + " " + event.keyCode + " " + event.which + " " + event.key + " " + event.code + " " + event.location + "]")
		}
		return false
	}
	ItemPrototype.invokeKeyHandlers = function(key,event,handlers,invoker) {
		for(var i = handlers.length - 1; i >= 0; --i) {
			var callback = handlers[i]
			if (invoker(callback)) {
				if ($manifest$trace$keys)
					log("key " + key + " handled in " + (performance.now() - event.timeStamp).toFixed(3) + " ms by", this, new Error().stack)
				return true;
			}
		}
		return false;
	}
	ItemPrototype.onPressed = function(name,callback) {
	var key = this._get('key', true)

		var wrapper
		if (name != 'Key')
			wrapper = function(key, event) { event.accepted = true; callback(key, event); return event.accepted }
		else
			wrapper = callback;

		if (name in this._pressedHandlers)
			this._pressedHandlers[name].push(wrapper);
		else
			this._pressedHandlers[name] = [wrapper];
	}
	ItemPrototype.style = function(name,style) {
		var element = this.element
		if (element)
			return element.style(name, style)
		else
			log('WARNING: style skipped:', name, style)
	}
	ItemPrototype._enqueueNextChildInFocusChain = function(queue,handlers) {
		this._tryFocus() //soft-restore focus for invisible components
		var focusedChild = this.focusedChild
		if (focusedChild && focusedChild.visible) {
			queue.unshift(focusedChild)
			handlers.unshift(focusedChild)
		}
	}
	ItemPrototype.registerStyle = function(style,tag) {
		var rules = 'position: absolute; visibility: inherit; opacity: 1.0;'
		rules += 'border-style: solid; border-width: 0px; border-radius: 0px; box-sizing: border-box; border-color: rgba(0,0,0,1);'
		rules += 'white-space: nowrap; transform: none;'
		rules += 'left: 0px; top: 0px; width: 0px; height: 0px;'
		rules += 'font-family: ' + $manifest$style$font$family + '; line-height: ' + $manifest$style$font$lineHeight + '; '
		if ($manifest$style$font$pixelSize)
			rules += 'font-size: ' + $manifest$style$font$pixelSize + 'px; '
		else if ($manifest$style$font$pointSize)
			rules += 'font-size: ' + $manifest$style$font$pointSize + 'pt; '
		style.addRule(tag, rules)
	}
	ItemPrototype._createElement = function(tag,cls) {
	var context = this._get('context', true)

		var context = this._context
		if (context === null)
			context = this

		context.registerStyle(this, tag, cls)
		this._attachElement(context.createElement(tag, cls))
	}
	_globals.core._protoOnChanged(ItemPrototype, 'cssNullTranslate3D', function(value) {
		if (!$manifest$cssDisableTransformations)
			this.style('transform', value ? 'translateZ(0)' : '')
	})
	_globals.core._protoOnChanged(ItemPrototype, 'recursiveVisible', function(value) {
		var children = this.children
		for(var i = 0, n = children.length; i < n; ++i) {
			var child = children[i]
			this._updateVisibilityForChild(child, value)
		}

		if (!value)
			this.parent._tryFocus()
	})
	var $code$0 = function(value) {
	var hack = this._get('hack', true)

		var x = this.x + this.viewX
		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations)
			this.transform.translateX = x
		else
			this.style('left', x)
		this.newBoundingBox()
		if (hack && this.absoluteEnabled)
			hack.start()
	}
	_globals.core._protoOnChanged(ItemPrototype, 'x', $code$0)
	_globals.core._protoOnChanged(ItemPrototype, 'viewX', $code$0)
	var $code$1 = function(value) {
	var hack = this._get('hack', true)

		var y = this.y + this.viewY
		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations)
			this.transform.translateY = y
		else
			this.style('top', y)
		this.newBoundingBox()
		if (hack && this.absoluteEnabled)
			hack.start()
	}
	_globals.core._protoOnChanged(ItemPrototype, 'y', $code$1)
	_globals.core._protoOnChanged(ItemPrototype, 'viewY', $code$1)
	_globals.core._protoOnChanged(ItemPrototype, 'opacity', function(value) { if (this.element) this.style('opacity', value); })
	var $code$2 = function(value) { this._updateVisibility() }
	_globals.core._protoOnChanged(ItemPrototype, 'visible', $code$2)
	_globals.core._protoOnChanged(ItemPrototype, 'visibleInView', $code$2)
	_globals.core._protoOnChanged(ItemPrototype, 'class', function(value) { this.element.dom.setAttribute('class', value) })
	_globals.core._protoOnChanged(ItemPrototype, 'itemStyle', function(value) { this.itemStyleUpdate() })
	_globals.core._protoOnChanged(ItemPrototype, 'radius', function(value) { this.style('border-radius', value) })
	_globals.core._protoOnChanged(ItemPrototype, 'height', function(value) { this.style('height', value - this._topPadding + this._borderHeightAdjust); this.newBoundingBox() })
	_globals.core._protoOnChanged(ItemPrototype, 'clip', function(value) { this.style('overflow', value? 'hidden': 'visible') })
	_globals.core._protoOnChanged(ItemPrototype, 'mouseEnabled', function(value) { this.style('pointer-events', value ? 'auto' : 'none') })
	_globals.core._protoOnChanged(ItemPrototype, 'fixed', function(value) { this.style('position', value ? 'fixed' :  'absolute') })
	_globals.core._protoOnChanged(ItemPrototype, 'width', function(value) { this.style('width', value + this._borderWidthAdjust); this.newBoundingBox() })
	_globals.core._protoOnChanged(ItemPrototype, 'z', function(value) { this.style('z-index', value) })
	_globals.core._protoOnChanged(ItemPrototype, 'rotation', function(value) { this.transform.rotateZ = this.rotation })
	_globals.core._protoOnChanged(ItemPrototype, 'scale', function(value) { this.transform.scaleX = this.scale; this.transform.scaleY = this.scale; })

	ItemPrototype.$c = function($c) {
		var $this = this;
		ItemBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Timer($this)
		$c._this$child0 = _this$child0

//creating component Timer
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('hack')
		$this.addChild(_this$child0)
	}
	ItemPrototype.$s = function($c) {
		var $this = this;
	ItemBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning visibleX to (${absoluteX} !== - 1 && ${context.contentMaxX} && (${absoluteX} < ${context.contentX} + ${context.width}) && (${absoluteX} + ${context.width} > ${context.contentX}))
			$this._replaceUpdater('visibleX', function() { $this.visibleX = ($this.absoluteX !== - 1 && $this._context.contentMaxX && ($this.absoluteX < $this._context.contentX + $this._context.width) && ($this.absoluteX + $this._context.width > $this._context.contentX)) }, [$this._context,'contentX',$this._context,'contentMaxX',$this,'absoluteX',$this._context,'width'])
//assigning visibleY to (${absoluteY} !== - 1 && ${context.contentMaxY} && (${absoluteY} < ${context.contentY} + ${context.height}) && (${absoluteY} + ${context.height} > ${context.contentY}))
			$this._replaceUpdater('visibleY', function() { $this.visibleY = ($this.absoluteY !== - 1 && $this._context.contentMaxY && ($this.absoluteY < $this._context.contentY + $this._context.height) && ($this.absoluteY + $this._context.height > $this._context.contentY)) }, [$this._context,'height',$this._context,'contentY',$this,'absoluteY',$this._context,'contentMaxY'])
//assigning absoluteX to (- 1)
			$this._removeUpdater('absoluteX'); $this.absoluteX = (- 1);
//assigning absoluteY to (- 1)
			$this._removeUpdater('absoluteY'); $this.absoluteY = (- 1);

//setting up component Timer
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning running to (true)
			_this$child0._removeUpdater('running'); _this$child0.running = (true);
//assigning interval to (100)
			_this$child0._removeUpdater('interval'); _this$child0.interval = (100);
			_this$child0.on('triggered', function() { this.parent._updateAbsoluteCoords() }.bind(_this$child0))
}


//=====[component controls.input.BaseInput]=====================

	var BaseInputBaseComponent = _globals.core.Item
	var BaseInputBasePrototype = BaseInputBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var BaseInputComponent = _globals.controls.input.BaseInput = function(parent, row) {
		BaseInputBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._placeholderClass = ''
		this.element.on("focus", function() { this.forceActiveFocus(); }.bind(this))
		this.element.on("blur", function() { this.forceActiveFocus(); }.bind(this))
	}

	}
	var BaseInputPrototype = BaseInputComponent.prototype = Object.create(BaseInputBasePrototype)

	BaseInputPrototype.constructor = BaseInputComponent

	BaseInputPrototype.componentName = 'controls.input.BaseInput'
	BaseInputPrototype.fontChanged = _globals.core.createSignal('fontChanged')
	core.addProperty(BaseInputPrototype, 'Paddings', 'paddings')
	core.addProperty(BaseInputPrototype, 'Color', 'color', ("#000"))
	core.addProperty(BaseInputPrototype, 'Color', 'backgroundColor', ("#fff"))
	core.addLazyProperty(BaseInputPrototype, 'font', (function(__parent, __row) {
		var lazy$font = new _globals.core.Font(__parent, __row)
		var $c = { lazy$font : lazy$font }

//creating component Font
			lazy$font.$c($c.$c$lazy$font = { })


//setting up component Font
			var lazy$font = $c.lazy$font
			lazy$font.$s($c.$c$lazy$font)
			delete $c.$c$lazy$font



		return lazy$font
}))
	core.addProperty(BaseInputPrototype, 'Border', 'border')
	core.addProperty(BaseInputPrototype, 'string', 'type', ("text"))
	core.addProperty(BaseInputPrototype, 'PlaceHolder', 'placeholder')
	core.addProperty(BaseInputPrototype, 'bool', 'enabled', (true))
/** @const @type {number} */
	BaseInputPrototype.AlignLeft = 0
/** @const @type {number} */
	BaseInputComponent.AlignLeft = 0
/** @const @type {number} */
	BaseInputPrototype.AlignRight = 1
/** @const @type {number} */
	BaseInputComponent.AlignRight = 1
/** @const @type {number} */
	BaseInputPrototype.AlignHCenter = 2
/** @const @type {number} */
	BaseInputComponent.AlignHCenter = 2
/** @const @type {number} */
	BaseInputPrototype.Justify = 3
/** @const @type {number} */
	BaseInputComponent.Justify = 3
	core.addProperty(BaseInputPrototype, 'enum', 'horizontalAlignment')
	BaseInputPrototype._updateSize = function() {
		var style = { width: this.width, height: this.height }
		this.style(style)
	}
	BaseInputPrototype.focusBrowser = function() {
	var focusTimer = this._get('focusTimer', true)

		focusTimer.restart()
	}
	BaseInputPrototype.blurBrowser = function() {
	var focusTimer = this._get('focusTimer', true)

		focusTimer.stop()
		this.element.dom.blur()
	}
	BaseInputPrototype.getTag = function() { return 'input' }
	BaseInputPrototype.registerStyle = function(style) {
		style.addRule('input', "position: absolute; visibility: inherit; border-style: solid; border-width: 0px; box-sizing: border-box;")
		style.addRule('input:focus', "outline: none;")
	}
	_globals.core._protoOnChanged(BaseInputPrototype, 'recursiveVisible', function(value) {
		if (!value)
			this.blurBrowser()
	})
	_globals.core._protoOnChanged(BaseInputPrototype, 'activeFocus', function(value) {
		if (value)
			this.focusBrowser()
		else
			this.blurBrowser()
	})
	_globals.core._protoOnChanged(BaseInputPrototype, 'horizontalAlignment', function(value) {
		switch(value) {
		case this.AlignLeft:	this.style('text-align', 'left'); break
		case this.AlignRight:	this.style('text-align', 'right'); break
		case this.AlignHCenter:	this.style('text-align', 'center'); break
		case this.AlignJustify:	this.style('text-align', 'justify'); break
		}
	})
	_globals.core._protoOnChanged(BaseInputPrototype, 'enabled', function(value) {
		this.element.dom.disabled = !value
	})
	var $code$0 = function(value) { this._updateSize() }
	_globals.core._protoOnChanged(BaseInputPrototype, 'height', $code$0)
	_globals.core._protoOnChanged(BaseInputPrototype, 'width', $code$0)
	_globals.core._protoOnChanged(BaseInputPrototype, 'type', function(value) { this.element.dom.type = value })
	_globals.core._protoOnChanged(BaseInputPrototype, 'backgroundColor', function(value) { this.style('background', value) })
	_globals.core._protoOnChanged(BaseInputPrototype, 'color', function(value) { this.style('color', value) })

	BaseInputPrototype.$c = function($c) {
		var $this = this;
		BaseInputBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Timer($this)
		$c._this$child0 = _this$child0

//creating component Timer
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('focusTimer')
		$this.addChild(_this$child0)
//creating component controls.input.<anonymous>
		var _this$placeholder = new _globals.controls.core.PlaceHolder($this)
		$c._this$placeholder = _this$placeholder

//creating component PlaceHolder
		_this$placeholder.$c($c.$c$_this$placeholder = { })

		$this.placeholder = _this$placeholder
//creating component controls.input.<anonymous>
		var _this$border = new _globals.core.Border($this)
		$c._this$border = _this$border

//creating component Border
		_this$border.$c($c.$c$_this$border = { })

		$this.border = _this$border
//creating component controls.input.<anonymous>
		var _this$paddings = new _globals.controls.core.Paddings($this)
		$c._this$paddings = _this$paddings

//creating component Paddings
		_this$paddings.$c($c.$c$_this$paddings = { })

		$this.paddings = _this$paddings
	}
	BaseInputPrototype.$s = function($c) {
		var $this = this;
	BaseInputBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component PlaceHolder
			var _this$placeholder = $c._this$placeholder
			_this$placeholder.$s($c.$c$_this$placeholder)
			delete $c.$c$_this$placeholder



//setting up component Border
			var _this$border = $c._this$border
			_this$border.$s($c.$c$_this$border)
			delete $c.$c$_this$border



//setting up component Paddings
			var _this$paddings = $c._this$paddings
			_this$paddings.$s($c.$c$_this$paddings)
			delete $c.$c$_this$paddings



//setting up component Timer
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning interval to (100)
			_this$child0._removeUpdater('interval'); _this$child0.interval = (100);
			_this$child0.on('triggered', function() {
			this.parent.element.dom.focus()
			this.parent.element.dom.select()
		}.bind(_this$child0))
}


//=====[component controls.input.DateInput]=====================

	var DateInputBaseComponent = _globals.controls.input.BaseInput
	var DateInputBasePrototype = DateInputBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.input.BaseInput}
 */
	var DateInputComponent = _globals.controls.input.DateInput = function(parent, row) {
		DateInputBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element.on("change", function() { this.value = this.element.dom.value }.bind(this))
	}

	}
	var DateInputPrototype = DateInputComponent.prototype = Object.create(DateInputBasePrototype)

	DateInputPrototype.constructor = DateInputComponent

	DateInputPrototype.componentName = 'controls.input.DateInput'
	core.addProperty(DateInputPrototype, 'string', 'max')
	core.addProperty(DateInputPrototype, 'string', 'min')
	core.addProperty(DateInputPrototype, 'string', 'value')
	_globals.core._protoOnChanged(DateInputPrototype, 'max', function(value) { this.element.dom.max = value; })
	_globals.core._protoOnChanged(DateInputPrototype, 'min', function(value) { this.element.dom.min = value; })

	DateInputPrototype.$c = function($c) {
		var $this = this;
		DateInputBasePrototype.$c.call(this, $c.$b = { })

	}
	DateInputPrototype.$s = function($c) {
		var $this = this;
	DateInputBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (150)
			$this._removeUpdater('width'); $this.width = (150);
//assigning type to ("date")
			$this._removeUpdater('type'); $this.type = ("date");
//assigning height to (20)
			$this._removeUpdater('height'); $this.height = (20);
}


//=====[component core.BaseLayout]=====================

	var BaseLayoutBaseComponent = _globals.core.Item
	var BaseLayoutBasePrototype = BaseLayoutBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var BaseLayoutComponent = _globals.core.BaseLayout = function(parent, row) {
		BaseLayoutBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.count = 0
	}

	}
	var BaseLayoutPrototype = BaseLayoutComponent.prototype = Object.create(BaseLayoutBasePrototype)

	BaseLayoutPrototype.constructor = BaseLayoutComponent

	BaseLayoutPrototype.componentName = 'core.BaseLayout'
	core.addProperty(BaseLayoutPrototype, 'int', 'count')
	core.addProperty(BaseLayoutPrototype, 'bool', 'trace')
	core.addProperty(BaseLayoutPrototype, 'int', 'spacing')
	core.addProperty(BaseLayoutPrototype, 'int', 'currentIndex')
	core.addProperty(BaseLayoutPrototype, 'int', 'contentWidth')
	core.addProperty(BaseLayoutPrototype, 'int', 'contentHeight')
	core.addProperty(BaseLayoutPrototype, 'bool', 'keyNavigationWraps')
	core.addProperty(BaseLayoutPrototype, 'bool', 'handleNavigationKeys')
	core.addProperty(BaseLayoutPrototype, 'int', 'layoutDelay')
	core.addProperty(BaseLayoutPrototype, 'int', 'prerenderDelay')
	core.addProperty(BaseLayoutPrototype, 'bool', 'offlineLayout')
	BaseLayoutPrototype._scheduleLayout = function() {
		if (!this.recursiveVisible && !this.offlineLayout)
			return

		if (this.prerenderDelay >= 0) {
			this._context.delayedAction('layout', this, this._doLayoutNP, this.layoutDelay)
			this._context.delayedAction('prerender', this, this._doLayout, this.prerenderDelay)
		} else
			this._context.delayedAction('layout', this, this._doLayout, this.layoutDelay)
	}
	BaseLayoutPrototype._doLayout = function() {
		this._attach()
		this._processUpdates()
		this._layout()
	}
	BaseLayoutPrototype._doLayoutNP = function() {
		this._attach()
		this._processUpdates()
		this._layout(true)
	}
	BaseLayoutPrototype.__complete = function() { BaseLayoutBasePrototype.__complete.call(this)
this._scheduleLayout() }
	var $code$0 = function() { }
	BaseLayoutPrototype._attach = $code$0
	BaseLayoutPrototype._processUpdates = $code$0
	var $code$1 = function(value) {
		this._scheduleLayout()
	}
	_globals.core._protoOnChanged(BaseLayoutPrototype, 'recursiveVisible', $code$1)
	_globals.core._protoOnChanged(BaseLayoutPrototype, 'spacing', $code$1)

	BaseLayoutPrototype.$c = function($c) {
		var $this = this;
		BaseLayoutBasePrototype.$c.call(this, $c.$b = { })

	}
	BaseLayoutPrototype.$s = function($c) {
		var $this = this;
	BaseLayoutBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning layoutDelay to (- 1)
			$this._removeUpdater('layoutDelay'); $this.layoutDelay = (- 1);
//assigning prerenderDelay to (- 1)
			$this._removeUpdater('prerenderDelay'); $this.prerenderDelay = (- 1);
}


//=====[component core.Layout]=====================

	var LayoutBaseComponent = _globals.core.BaseLayout
	var LayoutBasePrototype = LayoutBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.BaseLayout}
 */
	var LayoutComponent = _globals.core.Layout = function(parent, row) {
		LayoutBaseComponent.apply(this, arguments)

	}
	var LayoutPrototype = LayoutComponent.prototype = Object.create(LayoutBasePrototype)

	LayoutPrototype.constructor = LayoutComponent

	LayoutPrototype.componentName = 'core.Layout'
	LayoutPrototype.focusNextChild = function() {
		var idx = 0;
		var children = this.children
		if (this.focusedChild)
			idx = children.indexOf(this.focusedChild)

		for (var i = idx + 1; i < children.length; ++i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		if (!this.keyNavigationWraps)
			return false

		for (var i = 0; i <= idx; ++i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		return false
	}
	LayoutPrototype.focusPrevChild = function() {
		var idx = 0;
		var children = this.children
		if (this.focusedChild)
			idx = children.indexOf(this.focusedChild)

		for (var i = idx - 1; i >= 0; --i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		if (!this.keyNavigationWraps)
			return false

		var last = children.length - 1
		for (var i = last; i >= idx; --i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		return false

	}
	_globals.core._protoOnChanged(LayoutPrototype, 'currentIndex', function(value) {
		if (value >= 0 && value < this.children.length)
			this.focusChild(this.children[value])
	})

	LayoutPrototype.$c = function($c) {
		var $this = this;
		LayoutBasePrototype.$c.call(this, $c.$b = { })

	}
	LayoutPrototype.$s = function($c) {
		var $this = this;
	LayoutBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning keyNavigationWraps to (true)
			$this._removeUpdater('keyNavigationWraps'); $this.keyNavigationWraps = (true);
//assigning width to (${contentWidth})
			$this._replaceUpdater('width', function() { $this.width = ($this.contentWidth) }, [$this,'contentWidth'])
//assigning handleNavigationKeys to (true)
			$this._removeUpdater('handleNavigationKeys'); $this.handleNavigationKeys = (true);
//assigning height to (${contentHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.contentHeight) }, [$this,'contentHeight'])
}


//=====[component core.Column]=====================

	var ColumnBaseComponent = _globals.core.Layout
	var ColumnBasePrototype = ColumnBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Layout}
 */
	var ColumnComponent = _globals.core.Column = function(parent, row) {
		ColumnBaseComponent.apply(this, arguments)

	}
	var ColumnPrototype = ColumnComponent.prototype = Object.create(ColumnBasePrototype)

	ColumnPrototype.constructor = ColumnComponent

	ColumnPrototype.componentName = 'core.Column'
	ColumnPrototype._layout = function() {
		if (!this.recursiveVisible && !this.offlineLayout)
			return

		var children = this.children;
		var p = 0
		var w = 0
		this.count = children.length
		for(var i = 0; i < children.length; ++i) {
			var c = children[i]
			if (!('height' in c))
				continue

			var tm = c.anchors.topMargin || c.anchors.margins
			var bm = c.anchors.bottomMargin || c.anchors.margins

			var r = c.x + c.width
			if (r > w)
				w = r
			c.viewY = p + tm
			if (c.recursiveVisible)
				p += c.height + tm + bm + this.spacing
		}
		if (p > 0)
			p -= this.spacing
		this.contentWidth = w
		this.contentHeight = p
	}
	ColumnPrototype.addChild = function(child) {
		_globals.core.Item.prototype.addChild.apply(this, arguments)

		if (!('height' in child))
			return

		child.onChanged('height', this._scheduleLayout.bind(this))
		child.onChanged('recursiveVisible', this._scheduleLayout.bind(this))
		child.anchors.on('marginsUpdated', this._scheduleLayout.bind(this))
	}
	_globals.core._protoOnKey(ColumnPrototype, 'Key', function(key,event) {
		if (!this.handleNavigationKeys)
			return false;

		switch (key) {
			case 'Up':		return this.focusPrevChild()
			case 'Down':	return this.focusNextChild()
		}
	})

//=====[component core.BaseView]=====================

	var BaseViewBaseComponent = _globals.core.BaseLayout
	var BaseViewBasePrototype = BaseViewBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.BaseLayout}
 */
	var BaseViewComponent = _globals.core.BaseView = function(parent, row) {
		BaseViewBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._items = []
		this._modelUpdate = new _globals.core.model.ModelUpdate()
		this._attached = null

		//callback instances for dynamic model subscriptions
		this._modelReset = this._onReset.bind(this)
		this._modelRowsInserted = this._onRowsInserted.bind(this)
		this._modelRowsChanged = this._onRowsChanged.bind(this)
		this._modelRowsRemoved =  this._onRowsRemoved.bind(this)
	}

	}
	var BaseViewPrototype = BaseViewComponent.prototype = Object.create(BaseViewBasePrototype)

	BaseViewPrototype.constructor = BaseViewComponent

	BaseViewPrototype.componentName = 'core.BaseView'
	BaseViewPrototype.layoutFinished = _globals.core.createSignal('layoutFinished')
	core.addProperty(BaseViewPrototype, 'Object', 'model')
	core.addProperty(BaseViewPrototype, 'Item', 'delegate')
	core.addProperty(BaseViewPrototype, 'int', 'contentX')
	core.addProperty(BaseViewPrototype, 'int', 'contentY')
	core.addProperty(BaseViewPrototype, 'int', 'scrollingStep', (0))
	core.addProperty(BaseViewPrototype, 'int', 'animationDuration', (0))
	core.addProperty(BaseViewPrototype, 'string', 'animationEasing', ("ease"))
	core.addProperty(BaseViewPrototype, 'bool', 'contentFollowsCurrentItem', (true))
	core.addProperty(BaseViewPrototype, 'bool', 'nativeScrolling')
	core.addProperty(BaseViewPrototype, 'real', 'prerender', (0.5))
	core.addProperty(BaseViewPrototype, 'string', 'visibilityProperty')
	core.addProperty(BaseViewPrototype, 'BaseViewContent', 'content')
/** @const @type {number} */
	BaseViewPrototype.Contain = 0
/** @const @type {number} */
	BaseViewComponent.Contain = 0
/** @const @type {number} */
	BaseViewPrototype.Beginning = 1
/** @const @type {number} */
	BaseViewComponent.Beginning = 1
/** @const @type {number} */
	BaseViewPrototype.Center = 2
/** @const @type {number} */
	BaseViewComponent.Center = 2
/** @const @type {number} */
	BaseViewPrototype.End = 3
/** @const @type {number} */
	BaseViewComponent.End = 3
/** @const @type {number} */
	BaseViewPrototype.Visible = 4
/** @const @type {number} */
	BaseViewComponent.Visible = 4
/** @const @type {number} */
	BaseViewPrototype.Page = 5
/** @const @type {number} */
	BaseViewComponent.Page = 5
	core.addProperty(BaseViewPrototype, 'enum', 'positionMode')
	BaseViewPrototype.discard = function() {
		this._detach()
		_globals.core.BaseLayout.prototype.discard.apply(this)
	}
	BaseViewPrototype._processUpdates = function() {
		this._modelUpdate.apply(this)
		qml.core.BaseLayout.prototype._processUpdates.apply(this)
		this.count = this._items.length
	}
	BaseViewPrototype.focusCurrent = function() {
		var n = this.count
		if (n == 0)
			return

		var idx = this.currentIndex
		if (idx < 0 || idx >= n) {
			if (this.keyNavigationWraps)
				this.currentIndex = (idx + n) % n
			else
				this.currentIndex = idx < 0? 0: n - 1
			return
		}
		var item = this._items[idx]

		if (item)
			this.focusChild(item)
		if (this.contentFollowsCurrentItem)
			this.positionViewAtIndex(idx)
	}
	BaseViewPrototype._attach = function() {
	var model = this._get('model', true)

		if (this._attached || !this.model || !this.delegate)
			return

		if (this.trace)
			log('attaching model...')

		var Model = _globals.core.Model
		var model = this.model
		var modelType = typeof model

		if ((Model !== undefined) && (model instanceof Model)) {
		} else if (Array.isArray(model)) {
			model = new _globals.core.model.ArrayModelWrapper(model)
		} else if (modelType === 'number') {
			var data = []
			for(var i = 0; i < model; ++i)
				data.push({})
			model = new _globals.core.model.ArrayModelWrapper(data)
		} else
			throw new Error("unknown value of type '" + (typeof model) + "', attached to model property: " + model + ((modelType === 'object') && ('componentName' in model)? ', component name: ' + model.componentName: ''))

		model.on('reset', this._modelReset)
		model.on('rowsInserted', this._modelRowsInserted)
		model.on('rowsChanged', this._modelRowsChanged)
		model.on('rowsRemoved', this._modelRowsRemoved)

		this._attached = model
		this._onReset()
	}
	BaseViewPrototype._detach = function() {
	var model = this._get('model', true)

		var model = this._attached
		if (!model)
			return

		if (this.trace)
			log('detaching model...')

		this._attached = null

		model.removeListener('reset', this._modelReset)
		model.removeListener('rowsInserted', this._modelRowsInserted)
		model.removeListener('rowsChanged', this._modelRowsChanged)
		model.removeListener('rowsRemoved', this._modelRowsRemoved)
	}
	BaseViewPrototype._onReset = function() {
	var model = this._get('model', true)

		var model = this._attached
		if (this.trace)
			log("reset", this._items.length, model.count)

		this._modelUpdate.reset(model)
		this._scheduleLayout()
	}
	BaseViewPrototype.__complete = function() { BaseViewBasePrototype.__complete.call(this)
var self = this
		this.element.on('scroll', function(event) {
			self._updateScrollPositions(self.element.dom.scrollLeft, self.element.dom.scrollTop)
		}.bind(this)) }
	BaseViewPrototype._updateItems = function(begin,end) {
		for(var i = begin; i < end; ++i)
			this._updateDelegate(i)
	}
	BaseViewPrototype._onRowsChanged = function(begin,end) {
		if (this.trace)
			log("rows changed", begin, end)

		this._modelUpdate.update(this._attached, begin, end)
		this._scheduleLayout()
	}
	BaseViewPrototype._onRowsInserted = function(begin,end) {
		if (this.trace)
			log("rows inserted", begin, end)

		this._modelUpdate.insert(this._attached, begin, end)
		this._scheduleLayout()
	}
	BaseViewPrototype._onRowsRemoved = function(begin,end) {
		if (this.trace)
			log("rows removed", begin, end)

		this._modelUpdate.remove(this._attached, begin, end)
		this._scheduleLayout()
	}
	BaseViewPrototype._removeItems = function(begin,end) {
		var deleted = this._items.splice(begin, end - begin)
		var view = this
		deleted.forEach(function(item) { view._discardItem(item)})
	}
	BaseViewPrototype._insertItems = function(begin,end) {
		var n = end - begin + 2
		var args = new Array(n)
		args[0] = begin
		args[1] = 0
		for(var i = 2; i < n; ++i)
			args[i] = null
		Array.prototype.splice.apply(this._items, args)
	}
	BaseViewPrototype._updateDelegateIndex = function(idx) {
		var item = this._items[idx]
		if (item) {
			item._local.model.index = idx
			var _rowIndex = item._createPropertyStorage('_rowIndex')
			_rowIndex.callOnChanged(item, '_rowIndex')
		}
	}
	BaseViewPrototype._updateDelegate = function(idx) {
		var item = this._items[idx]
		if (item) {
			var row = this._attached.get(idx)
			row.index = idx
			item._local.model = row
			var _row = item._createPropertyStorage('_row')
			_row.callOnChanged(item, '_row')
		}
	}
	BaseViewPrototype._createDelegate = function(idx) {
		var items = this._items
		var item = items[idx]
		if (item !== null && item !== undefined)
			return item

		var visibilityProperty = this.visibilityProperty
		var row = this._attached.get(idx)

		if (this.trace)
			log('createDelegate', idx, row)

		if (visibilityProperty && !row[visibilityProperty])
			return null;
		row.index = idx

		item = this.delegate(this, row)
		items[idx] = item
		item.view = this
		item.element.remove()
		this.content.element.append(item.element)

		item.recursiveVisible = this.recursiveVisible && item.visible && item.visibleInView

		return item
	}
	BaseViewPrototype._discardItem = function(item) {
		if (item === null)
			return
		if (this.focusedChild === item)
			this.focusedChild = null;
		item.discard()
	}
	BaseViewPrototype.itemAt = function(x,y) {
		var idx = this.indexAt(x, y)
		return idx >= 0? this._items[idx]: null
	}
	BaseViewPrototype._updateScrollPositions = function(x,y,layout) {
		this._setProperty('contentX', x)
		this._setProperty('contentY', y)
		this.content._updateScrollPositions(x, y, layout)
	}
	_globals.core._protoOnChanged(BaseViewPrototype, 'model', function(value) {
		if (this.trace)
			log('model changed to ', value)

		this._detach()
		this._modelUpdate.clear()
		this._removeItems(0, this.count)
		this.count = 0
		this._scheduleLayout()
	})
	_globals.core._protoOnChanged(BaseViewPrototype, 'recursiveVisible', function(value) {
		if (value)
			this._scheduleLayout();

		var view = this
		this._items.forEach(function(child) {
			if (child !== null)
				view._updateVisibilityForChild(child, value)
		})
		this._updateVisibilityForChild(this.content, value)
	})
	_globals.core._protoOnChanged(BaseViewPrototype, 'delegate', function(value) {
		if (value)
			value.visible = false
	})
	_globals.core._protoOnChanged(BaseViewPrototype, 'currentIndex', function(value) {
		this.focusCurrent()
	})
	_globals.core._protoOnChanged(BaseViewPrototype, 'focusedChild', function(value) {
		var idx = this._items.indexOf(this.focusedChild)
		if (idx >= 0)
			this.currentIndex = idx
	})
	var $code$0 = function(value) { this._scheduleLayout() }
	_globals.core._protoOnChanged(BaseViewPrototype, 'height', $code$0)
	_globals.core._protoOnChanged(BaseViewPrototype, 'width', $code$0)
	_globals.core._protoOnChanged(BaseViewPrototype, 'contentX', function(value) { this.content.x = -value; })
	_globals.core._protoOnChanged(BaseViewPrototype, 'contentY', function(value) { this.content.y = -value; })

	BaseViewPrototype.$c = function($c) {
		var $this = this;
		BaseViewBasePrototype.$c.call(this, $c.$b = { })
//creating component core.<anonymous>
		var _this$content = new _globals.core.BaseViewContent($this)
		$c._this$content = _this$content

//creating component BaseViewContent
		_this$content.$c($c.$c$_this$content = { })

		$this.content = _this$content
//creating component core.<anonymous>
		var _this$model = new _globals.core.ListModel($this)
		$c._this$model = _this$model

//creating component ListModel
		_this$model.$c($c.$c$_this$model = { })

		$this.model = _this$model
	}
	BaseViewPrototype.$s = function($c) {
		var $this = this;
	BaseViewBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning keyNavigationWraps to (true)
			$this._removeUpdater('keyNavigationWraps'); $this.keyNavigationWraps = (true);

//setting up component BaseViewContent
			var _this$content = $c._this$content
			_this$content.$s($c.$c$_this$content)
			delete $c.$c$_this$content

	var behavior__this_content_on_y = new _globals.core.Animation(_this$content)
	var behavior__this_content_on_y$c = { behavior__this_content_on_y: behavior__this_content_on_y }

//creating component Animation
	behavior__this_content_on_y.$c(behavior__this_content_on_y$c.$c$behavior__this_content_on_y = { })


//setting up component Animation
	var behavior__this_content_on_y = behavior__this_content_on_y$c.behavior__this_content_on_y
	behavior__this_content_on_y.$s(behavior__this_content_on_y$c.$c$behavior__this_content_on_y)
	delete behavior__this_content_on_y$c.$c$behavior__this_content_on_y

//assigning duration to (${parent.parent.animationDuration})
	behavior__this_content_on_y._replaceUpdater('duration', function() { behavior__this_content_on_y.duration = (behavior__this_content_on_y.parent.parent.animationDuration) }, [behavior__this_content_on_y.parent.parent,'animationDuration'])
//assigning easing to (${parent.parent.animationEasing})
	behavior__this_content_on_y._replaceUpdater('easing', function() { behavior__this_content_on_y.easing = (behavior__this_content_on_y.parent.parent.animationEasing) }, [behavior__this_content_on_y.parent.parent,'animationEasing'])

	_this$content.setAnimation('y', behavior__this_content_on_y);

	var behavior__this_content_on_x = new _globals.core.Animation(_this$content)
	var behavior__this_content_on_x$c = { behavior__this_content_on_x: behavior__this_content_on_x }

//creating component Animation
	behavior__this_content_on_x.$c(behavior__this_content_on_x$c.$c$behavior__this_content_on_x = { })


//setting up component Animation
	var behavior__this_content_on_x = behavior__this_content_on_x$c.behavior__this_content_on_x
	behavior__this_content_on_x.$s(behavior__this_content_on_x$c.$c$behavior__this_content_on_x)
	delete behavior__this_content_on_x$c.$c$behavior__this_content_on_x

//assigning duration to (${parent.parent.animationDuration})
	behavior__this_content_on_x._replaceUpdater('duration', function() { behavior__this_content_on_x.duration = (behavior__this_content_on_x.parent.parent.animationDuration) }, [behavior__this_content_on_x.parent.parent,'animationDuration'])
//assigning easing to (${parent.parent.animationEasing})
	behavior__this_content_on_x._replaceUpdater('easing', function() { behavior__this_content_on_x.easing = (behavior__this_content_on_x.parent.parent.animationEasing) }, [behavior__this_content_on_x.parent.parent,'animationEasing'])

	_this$content.setAnimation('x', behavior__this_content_on_x);

	var behavior__this_content_on_transform = new _globals.core.Animation(_this$content)
	var behavior__this_content_on_transform$c = { behavior__this_content_on_transform: behavior__this_content_on_transform }

//creating component Animation
	behavior__this_content_on_transform.$c(behavior__this_content_on_transform$c.$c$behavior__this_content_on_transform = { })


//setting up component Animation
	var behavior__this_content_on_transform = behavior__this_content_on_transform$c.behavior__this_content_on_transform
	behavior__this_content_on_transform.$s(behavior__this_content_on_transform$c.$c$behavior__this_content_on_transform)
	delete behavior__this_content_on_transform$c.$c$behavior__this_content_on_transform

//assigning duration to (${parent.parent.animationDuration})
	behavior__this_content_on_transform._replaceUpdater('duration', function() { behavior__this_content_on_transform.duration = (behavior__this_content_on_transform.parent.parent.animationDuration) }, [behavior__this_content_on_transform.parent.parent,'animationDuration'])
//assigning easing to (${parent.parent.animationEasing})
	behavior__this_content_on_transform._replaceUpdater('easing', function() { behavior__this_content_on_transform.easing = (behavior__this_content_on_transform.parent.parent.animationEasing) }, [behavior__this_content_on_transform.parent.parent,'animationEasing'])

	_this$content.setAnimation('transform', behavior__this_content_on_transform);

//assigning contentWidth to (1)
			$this._removeUpdater('contentWidth'); $this.contentWidth = (1);

//setting up component ListModel
			var _this$model = $c._this$model
			_this$model.$s($c.$c$_this$model)
			delete $c.$c$_this$model


//assigning contentHeight to (1)
			$this._removeUpdater('contentHeight'); $this.contentHeight = (1);
//assigning handleNavigationKeys to (true)
			$this._removeUpdater('handleNavigationKeys'); $this.handleNavigationKeys = (true);
}


//=====[component core.GridView]=====================

	var GridViewBaseComponent = _globals.core.BaseView
	var GridViewBasePrototype = GridViewBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.BaseView}
 */
	var GridViewComponent = _globals.core.GridView = function(parent, row) {
		GridViewBaseComponent.apply(this, arguments)

	}
	var GridViewPrototype = GridViewComponent.prototype = Object.create(GridViewBasePrototype)

	GridViewPrototype.constructor = GridViewComponent

	GridViewPrototype.componentName = 'core.GridView'
	core.addProperty(GridViewPrototype, 'int', 'cellWidth', (100))
	core.addProperty(GridViewPrototype, 'int', 'cellHeight', (100))
	core.addProperty(GridViewPrototype, 'int', 'rows')
	core.addProperty(GridViewPrototype, 'int', 'columns')
/** @const @type {number} */
	GridViewPrototype.FlowLeftToRight = 0
/** @const @type {number} */
	GridViewComponent.FlowLeftToRight = 0
/** @const @type {number} */
	GridViewPrototype.FlowTopToBottom = 1
/** @const @type {number} */
	GridViewComponent.FlowTopToBottom = 1
	core.addProperty(GridViewPrototype, 'enum', 'flow')
	GridViewPrototype._updateOverflow = function() {
		if (!this.nativeScrolling)
			return

		var horizontal = this.flow !== this.FlowLeftToRight
		var style = {}
		if (horizontal) {
			style['overflow-x'] = 'auto'
			style['overflow-y'] = 'hidden'
		} else {
			style['overflow-x'] = 'hidden'
			style['overflow-y'] = 'auto'
		}
		this.style(style)
	}
	GridViewPrototype._layout = function() {
	var model = this._get('model', true)

		if (!this.recursiveVisible && !this.offlineLayout)
			return

		var model = this._attached;
		if (!model) {
			this.layoutFinished()
			return
		}

		this.count = model.count
		if (!this.count) {
			this.layoutFinished()
			return
		}

		var horizontal = this.flow == this.FlowLeftToRight

		var items = this._items
		var n = items.length
		var w = this.width, h = this.height
		if (this.trace)
			log("layout " + n + " into " + w + "x" + h + " @ " + this.content.x + "," + this.content.y)
		var created = false
		var x = 0, y = 0
		var cx = this.content.x, cy = this.content.y

		var atEnd = horizontal? function() { return cy + y >= h }: function() { return cx + x >= w }

		var itemsCount = 0
		var cellWidth = this.cellWidth, cellHeight = this.cellHeight
		var stepX = cellWidth + this.spacing, stepY = cellHeight + this.spacing
		for(var i = 0; i < n && !atEnd(); ++i) {
			var item = this._items[i]

			if (!item) {
				item = this._createDelegate(i)
				if (item)
					created = true
			}

			++itemsCount

			if (item) {
				item.viewX = x
				item.viewY = y
			}

			if (item) {
				if (this.currentIndex === i && !item.focused) {
					this.focusChild(item)
					if (this.contentFollowsCurrentItem)
						this.positionViewAtIndex(i)
				}

				var visible = horizontal? (cy + y + item.height >= 0 && cy + y < h): (cx + x + item.width >= 0 && cx + x < w)
				item.visibleInView = visible
			}

			if (horizontal) {
				x += stepX
				if (x > 0 && x + cellWidth > w) {
					x = 0
					y += stepY
				}
			} else {
				y += stepY
				if (y > 0 && y + cellHeight > h) {
					y = 0
					x += stepX
				}
			}
		}
		for(; i < n; ++i) {
			var item = items[i]
			if (item)
				item.visibleInView = false
		}

		if (!horizontal) {
			this.rows = Math.floor((h + this.spacing) / (this.cellHeight + this.spacing))
			this.columns = Math.floor((n + this.rows - 1) / this.rows)
			this.contentWidth = this.content.width = this.columns * (this.cellWidth + this.spacing) - this.spacing
			this.contentHeight = this.content.height = this.rows * (this.cellHeight + this.spacing) - this.spacing
		} else {
			this.columns = Math.floor((w + this.spacing ) / (this.cellWidth + this.spacing))
			this.rows = Math.floor((n + this.columns - 1) / this.columns)
			this.contentWidth = this.content.width = this.columns * (this.cellWidth + this.spacing) - this.spacing
			this.contentHeight = this.content.height = this.rows * (this.cellHeight + this.spacing) - this.spacing
		}
		//log(horizontal, w, h, this.rows, this.columns, this.currentIndex, this.contentWidth + "x" + this.contentHeight)
		this.layoutFinished()
		if (created)
			this._context.scheduleComplete()
	}
	GridViewPrototype.__complete = function() { GridViewBasePrototype.__complete.call(this)
this._updateOverflow() }
	GridViewPrototype.move = function(dx,dy) {
		var horizontal = this.flow == this.FlowLeftToRight
		var x, y
		if (horizontal && this.contentHeight > this.height) {
			y = this.contentY + dy
			if (y < 0)
				y = 0
			else if (y > this.contentHeight - this.height)
				y = this.contentHeight - this.height
			this.contentY = y
		} else if (!horizontal && this.contentWidth > this.width) {
			x = this.contentX + dx
			if (x < 0)
				x = 0
			else if (x > this.contentWidth - this.width)
				x = this.contentWidth - this.width
			this.contentX = x
		}
	}
	GridViewPrototype.positionViewAtIndex = function(idx) {
		var cx = this.contentX, cy = this.contentY
		var itemBox = this.getItemPosition(idx)
		var x = itemBox[0], y = itemBox[1]
		var iw = itemBox[2], ih = itemBox[3]
		var w = this.width, h = this.height
		var horizontal = this.flow == this.FlowLeftToRight
		if (!horizontal) {
			if (iw > w) {
				this.contentX = x - w / 2 + iw / 2
				return
			}
			if (x - cx < 0)
				this.contentX = x
			else if (x - cx + iw > w)
				this.contentX = x + iw - w
		} else {
			if (ih > h) {
				this.contentY = y - h / 2 + ih / 2
				return
			}
			if (y - cy < 0)
				this.contentY = y
			else if (y - cy + ih > h)
				this.contentY = y + ih - h
		}
	}
	GridViewPrototype.getItemPosition = function(idx) {
		var horizontal = this.flow == this.FlowLeftToRight
		var x, y, cw = this.cellWidth, ch = this.cellHeight
		if (horizontal) {
			if (this.columns == 0)
				return [0, 0, 0, 0]
			x = (idx % this.columns) * cw
			y = Math.floor(idx / this.columns) * ch
		} else {
			if (this.rows == 0)
				return [0, 0, 0, 0]
			x = Math.floor(idx / this.rows) * cw
			y = (idx % this.rows) * ch
		}
		return [x, y, cw, ch]
	}
	GridViewPrototype.indexAt = function(x,y) {
		x -= this.content.x
		y -= this.content.y
		var horizontal = this.flow == this.FlowLeftToRight
		x = Math.floor(x / (this.cellWidth + this.spacing))
		y = Math.floor(y / (this.cellHeight + this.spacing))
		if (!horizontal) {
			return x * this.rows + y
		} else {
			return y * this.columns + x
		}
	}
	var $code$0 = function(value) {
		this._scheduleLayout()
	}
	_globals.core._protoOnChanged(GridViewPrototype, 'cellWidth', $code$0)
	_globals.core._protoOnChanged(GridViewPrototype, 'cellHeight', $code$0)
	_globals.core._protoOnChanged(GridViewPrototype, 'flow', function(value) {
		this._updateOverflow()
		this._scheduleLayout()
	})
	_globals.core._protoOnKey(GridViewPrototype, 'Key', function(key,event) {
		if (!this.handleNavigationKeys)
			return false;

		var horizontal = this.flow == this.FlowLeftToRight
		if (horizontal) {
			switch(key) {
				case 'Left':
					if (!this.keyNavigationWraps && this.currentIndex == 0)
						return false
					--this.currentIndex
					return true
				case 'Right':
					if (!this.keyNavigationWraps && this.currentIndex == this.columns - 1)
						return false
					++this.currentIndex
					return true
				case 'Up':
					if (!this.keyNavigationWraps && this.currentIndex < this.columns)
						return false
					this.currentIndex -= this.columns
					return true
				case 'Down':
					if (!this.keyNavigationWraps && this.currentIndex > this.count - this.columns + 1)
						return false
					this.currentIndex += this.columns
					return true
			}
		} else {
			switch(key) {
				case 'Up':
					if (!this.keyNavigationWraps && this.currentIndex == 0)
						return false
					--this.currentIndex
					return true
				case 'Down':
					if (!this.keyNavigationWraps && this.currentIndex == this.columns - 1)
						return false
					++this.currentIndex
					return true
				case 'Left':
					if (!this.keyNavigationWraps && this.currentIndex < this.rows)
						return false
					this.currentIndex -= this.rows
					return true
				case 'Right':
					if (!this.keyNavigationWraps && this.currentIndex > this.count - this.rows + 1)
						return false
					this.currentIndex += this.rows
					return true
			}
		}
	})

//=====[component src.Gallery]=====================

	var GalleryBaseComponent = _globals.core.GridView
	var GalleryBasePrototype = GalleryBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.GridView}
 */
	var GalleryComponent = _globals.src.Gallery = function(parent, row) {
		GalleryBaseComponent.apply(this, arguments)

	}
	var GalleryPrototype = GalleryComponent.prototype = Object.create(GalleryBasePrototype)

	GalleryPrototype.constructor = GalleryComponent

	GalleryPrototype.componentName = 'src.Gallery'

	GalleryPrototype.$c = function($c) {
		var $this = this;
		GalleryBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.controls.experiment.NetworkRequest($this)
		$c._this$child0 = _this$child0

//creating component NetworkRequest
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('imagesRequest')
		$this.addChild(_this$child0)
//creating component src.<anonymous>
		var _this$model = new _globals.core.ProxyModel($this)
		$c._this$model = _this$model

//creating component ProxyModel
		_this$model.$c($c.$c$_this$model = { })
		_this$model._setId('proxyModel')
//creating component src.<anonymous>
		var _this_model$target = new _globals.core.ListModel(_this$model)
		$c._this_model$target = _this_model$target

//creating component ListModel
		_this_model$target.$c($c.$c$_this_model$target = { })
		_this_model$target._setId('imagesModel')
		_this$model.target = _this_model$target
		$this.model = _this$model
		$this.delegate = (function(__parent, __row) {
		var delegate = new _globals.core.Image(__parent, __row)
		var $c = { delegate : delegate }

//creating component Image
			delegate.$c($c.$c$delegate = { })
	core.addProperty(delegate, 'string', 'imageUrl')
			var delegate$child0 = new _globals.core.HoverMixin(delegate)
			$c.delegate$child0 = delegate$child0

//creating component HoverMixin
			delegate$child0.$c($c.$c$delegate$child0 = { })
			delegate$child0._setId('hover')
			delegate.addChild(delegate$child0)
			var delegate$child1 = new _globals.core.Rectangle(delegate)
			$c.delegate$child1 = delegate$child1

//creating component Rectangle
			delegate$child1.$c($c.$c$delegate$child1 = { })

			delegate.addChild(delegate$child1)
			var delegate$child2 = new _globals.core.Rectangle(delegate)
			$c.delegate$child2 = delegate$child2

//creating component Rectangle
			delegate$child2.$c($c.$c$delegate$child2 = { })
			var delegate_child2$child0 = new _globals.core.Text(delegate$child2)
			$c.delegate_child2$child0 = delegate_child2$child0

//creating component Text
			delegate_child2$child0.$c($c.$c$delegate_child2$child0 = { })
			delegate_child2$child0._setId('descText')
			delegate$child2.addChild(delegate_child2$child0)
			var delegate_child2$child1 = new _globals.core.Column(delegate$child2)
			$c.delegate_child2$child1 = delegate_child2$child1

//creating component Column
			delegate_child2$child1.$c($c.$c$delegate_child2$child1 = { })
			var delegate_child2_child1$child0 = new _globals.controls.experiment.AbstractButton(delegate_child2$child1)
			$c.delegate_child2_child1$child0 = delegate_child2_child1$child0

//creating component AbstractButton
			delegate_child2_child1$child0.$c($c.$c$delegate_child2_child1$child0 = { })

			delegate_child2$child1.addChild(delegate_child2_child1$child0)
			var delegate_child2_child1$child1 = new _globals.controls.experiment.AbstractButton(delegate_child2$child1)
			$c.delegate_child2_child1$child1 = delegate_child2_child1$child1

//creating component AbstractButton
			delegate_child2_child1$child1.$c($c.$c$delegate_child2_child1$child1 = { })

			delegate_child2$child1.addChild(delegate_child2_child1$child1)
			delegate$child2.addChild(delegate_child2$child1)
			delegate.addChild(delegate$child2)
			delegate._setId('image')

//setting up component Image
			var delegate = $c.delegate
			delegate.$s($c.$c$delegate)
			delete $c.$c$delegate

//assigning source to (${imageUrl})
			delegate._replaceUpdater('source', function() { delegate.source = (delegate.imageUrl) }, [delegate,'imageUrl'])
//assigning imageUrl to (${webApp.serverUrl} + 'images/' + ${model.file})
			delegate._replaceUpdater('imageUrl', function() { delegate.imageUrl = (delegate._get('webApp').serverUrl + 'images/' + delegate._get('model').file) }, [delegate._get('_delegate'),'_row',delegate._get('webApp'),'serverUrl'])
//assigning height to (250)
			delegate._removeUpdater('height'); delegate.height = (250);
//assigning width to (250)
			delegate._removeUpdater('width'); delegate.width = (250);
//assigning fillMode to (_globals.core.Image.prototype.PreserveAspectCrop)
			delegate._removeUpdater('fillMode'); delegate.fillMode = (_globals.core.Image.prototype.PreserveAspectCrop);

//setting up component HoverMixin
			var delegate$child0 = $c.delegate$child0
			delegate$child0.$s($c.$c$delegate$child0)
			delete $c.$c$delegate$child0



//setting up component Rectangle
			var delegate$child1 = $c.delegate$child1
			delegate$child1.$s($c.$c$delegate$child1)
			delete $c.$c$delegate$child1

//assigning color to ('lightgray')
			delegate$child1._removeUpdater('color'); delegate$child1.color = ('lightgray');
//assigning opacity to (${image.status} !== _globals.core.Image.prototype.Ready)
			delegate$child1._replaceUpdater('opacity', function() { delegate$child1.opacity = (delegate$child1._get('image').status !== _globals.core.Image.prototype.Ready) }, [delegate$child1._get('image'),'status'])
//assigning anchors.fill to (${parent})
			delegate$child1.anchors._removeUpdater('fill'); delegate$child1.anchors.fill = (delegate$child1.parent);
	var behavior_delegate_child1_on_opacity = new _globals.core.Animation(delegate$child1)
	var behavior_delegate_child1_on_opacity$c = { behavior_delegate_child1_on_opacity: behavior_delegate_child1_on_opacity }

//creating component Animation
	behavior_delegate_child1_on_opacity.$c(behavior_delegate_child1_on_opacity$c.$c$behavior_delegate_child1_on_opacity = { })


//setting up component Animation
	var behavior_delegate_child1_on_opacity = behavior_delegate_child1_on_opacity$c.behavior_delegate_child1_on_opacity
	behavior_delegate_child1_on_opacity.$s(behavior_delegate_child1_on_opacity$c.$c$behavior_delegate_child1_on_opacity)
	delete behavior_delegate_child1_on_opacity$c.$c$behavior_delegate_child1_on_opacity

//assigning duration to (1000)
	behavior_delegate_child1_on_opacity._removeUpdater('duration'); behavior_delegate_child1_on_opacity.duration = (1000);

	delegate$child1.setAnimation('opacity', behavior_delegate_child1_on_opacity);


//setting up component Rectangle
			var delegate$child2 = $c.delegate$child2
			delegate$child2.$s($c.$c$delegate$child2)
			delete $c.$c$delegate$child2

//assigning opacity to (0.8)
			delegate$child2._removeUpdater('opacity'); delegate$child2.opacity = (0.8);
//assigning color to ('white')
			delegate$child2._removeUpdater('color'); delegate$child2.color = ('white');
//assigning anchors.margins to (10)
			delegate$child2.anchors._removeUpdater('margins'); delegate$child2.anchors.margins = (10);
//assigning visible to (${hover.value})
			delegate$child2._replaceUpdater('visible', function() { delegate$child2.visible = (delegate$child2._get('hover').value) }, [delegate$child2._get('hover'),'value'])
//assigning radius to (5)
			delegate$child2._removeUpdater('radius'); delegate$child2.radius = (5);
//assigning anchors.fill to (${parent})
			delegate$child2.anchors._removeUpdater('fill'); delegate$child2.anchors.fill = (delegate$child2.parent);

//setting up component Text
			var delegate_child2$child0 = $c.delegate_child2$child0
			delegate_child2$child0.$s($c.$c$delegate_child2$child0)
			delete $c.$c$delegate_child2$child0

//assigning anchors.horizontalCenter to (${parent})
			delegate_child2$child0.anchors._removeUpdater('horizontalCenter'); delegate_child2$child0.anchors.horizontalCenter = (delegate_child2$child0.parent);
//assigning text to ('<b>' + ${model.name} + '</b><br><br><b>' + ${model.compress_size} + '</b> MB<br>(original: <b>' + ${model.original_size} + '</b> MB)<br><br>' + ${model.time})
			delegate_child2$child0._replaceUpdater('text', function() { delegate_child2$child0.text = ('<b>' + delegate_child2$child0._get('model').name + '</b><br><br><b>' + delegate_child2$child0._get('model').compress_size + '</b> MB<br>(original: <b>' + delegate_child2$child0._get('model').original_size + '</b> MB)<br><br>' + delegate_child2$child0._get('model').time) }, [delegate_child2$child0._get('_delegate'),'_row'])
//assigning width to (((98) / 100 * ${parent.width}))
			delegate_child2$child0._replaceUpdater('width', function() { delegate_child2$child0.width = (((98) / 100 * delegate_child2$child0.parent.width)) }, [delegate_child2$child0.parent,'width'])
//assigning horizontalAlignment to (_globals.core.Text.prototype.AlignHCenter)
			delegate_child2$child0._removeUpdater('horizontalAlignment'); delegate_child2$child0.horizontalAlignment = (_globals.core.Text.prototype.AlignHCenter);
//assigning wrapMode to (_globals.core.Text.prototype.WrapAnywhere)
			delegate_child2$child0._removeUpdater('wrapMode'); delegate_child2$child0.wrapMode = (_globals.core.Text.prototype.WrapAnywhere);
//assigning x to (5)
			delegate_child2$child0._removeUpdater('x'); delegate_child2$child0.x = (5);


//setting up component Column
			var delegate_child2$child1 = $c.delegate_child2$child1
			delegate_child2$child1.$s($c.$c$delegate_child2$child1)
			delete $c.$c$delegate_child2$child1

//assigning anchors.horizontalCenter to (${parent})
			delegate_child2$child1.anchors._removeUpdater('horizontalCenter'); delegate_child2$child1.anchors.horizontalCenter = (delegate_child2$child1.parent);
//assigning anchors.bottom to (${parent.bottom})
			delegate_child2$child1.anchors._replaceUpdater('bottom', function() { delegate_child2$child1.anchors.bottom = (delegate_child2$child1.parent.bottom) }, [delegate_child2$child1.parent,'bottom'])

//setting up component AbstractButton
			var delegate_child2_child1$child0 = $c.delegate_child2_child1$child0
			delegate_child2_child1$child0.$s($c.$c$delegate_child2_child1$child0)
			delete $c.$c$delegate_child2_child1$child0

//assigning text to ('Compress')
			delegate_child2_child1$child0._removeUpdater('text'); delegate_child2_child1$child0.text = ('Compress');
//assigning height to (35)
			delegate_child2_child1$child0._removeUpdater('height'); delegate_child2_child1$child0.height = (35);
//assigning width to ((${parent.width}))
			delegate_child2_child1$child0._replaceUpdater('width', function() { delegate_child2_child1$child0.width = ((delegate_child2_child1$child0.parent.width)) }, [delegate_child2_child1$child0.parent,'width'])
			delegate_child2_child1$child0.on('clicked', function() {
	var image = this._get('image', true)
 window.open(image.imageUrl, '_blank') }.bind(delegate_child2_child1$child0))


//setting up component AbstractButton
			var delegate_child2_child1$child1 = $c.delegate_child2_child1$child1
			delegate_child2_child1$child1.$s($c.$c$delegate_child2_child1$child1)
			delete $c.$c$delegate_child2_child1$child1

//assigning text to ('Original')
			delegate_child2_child1$child1._removeUpdater('text'); delegate_child2_child1$child1.text = ('Original');
//assigning height to (35)
			delegate_child2_child1$child1._removeUpdater('height'); delegate_child2_child1$child1.height = (35);
//assigning width to ((${parent.width}))
			delegate_child2_child1$child1._replaceUpdater('width', function() { delegate_child2_child1$child1.width = ((delegate_child2_child1$child1.parent.width)) }, [delegate_child2_child1$child1.parent,'width'])
			delegate_child2_child1$child1.on('clicked', function() {
	var model = this._get('model', true)
 window.open(model.original_url, '_blank') }.bind(delegate_child2_child1$child1))





		return delegate
})
		$this._setId('images')
	}
	GalleryPrototype.$s = function($c) {
		var $this = this;
	GalleryBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning cellWidth to (250)
			$this._removeUpdater('cellWidth'); $this.cellWidth = (250);
//assigning spacing to (5)
			$this._removeUpdater('spacing'); $this.spacing = (5);
//assigning height to (${contentHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.contentHeight) }, [$this,'contentHeight'])
//assigning width to ((${parent.width}))
			$this._replaceUpdater('width', function() { $this.width = (($this.parent.width)) }, [$this.parent,'width'])

//setting up component ProxyModel
			var _this$model = $c._this$model
			_this$model.$s($c.$c$_this$model)
			delete $c.$c$_this$model


//setting up component ListModel
			var _this_model$target = $c._this_model$target
			_this_model$target.$s($c.$c$_this_model$target)
			delete $c.$c$_this_model$target

			_this_model$target.__complete = function() {
	var imagesRequest = this._get('imagesRequest', true), filterName = this._get('filterName', true), filterSize = this._get('filterSize', true), proxyModel = this._get('proxyModel', true), filters = this._get('filters', true)
 _globals.core.ListModel.prototype.__complete.call(this)
imagesRequest.send()
                proxyModel.setFilter(item => item.name.includes(filterName.text) && item.compress_size >= filterSize.text && item.time >= filters.filterDateTime) }.bind(_this_model$target)


//assigning anchors.topMargin to (20)
			$this.anchors._removeUpdater('topMargin'); $this.anchors.topMargin = (20);
//assigning anchors.top to (${filters.bottom})
			$this.anchors._replaceUpdater('top', function() { $this.anchors.top = ($this._get('filters').bottom) }, [$this._get('filters'),'bottom'])
//assigning cellHeight to (250)
			$this._removeUpdater('cellHeight'); $this.cellHeight = (250);

//setting up component NetworkRequest
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning url to (${webApp.serverUrl} + 'all')
			_this$child0._replaceUpdater('url', function() { _this$child0.url = (_this$child0._get('webApp').serverUrl + 'all') }, [_this$child0._get('webApp'),'serverUrl'])
			_this$child0.on('error', function(err) {
	var errorRect = this._get('errorRect', true)

            errorRect.visible = true
        }.bind(_this$child0))
			_this$child0.on('loaded', function(res) {
	var imagesModel = this._get('imagesModel', true)

            log(this.url)

            let result = JSON.parse(res)
            imagesModel.append(result)
        }.bind(_this$child0))
}


//=====[component core.Grid]=====================

	var GridBaseComponent = _globals.core.Layout
	var GridBasePrototype = GridBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Layout}
 */
	var GridComponent = _globals.core.Grid = function(parent, row) {
		GridBaseComponent.apply(this, arguments)

	}
	var GridPrototype = GridComponent.prototype = Object.create(GridBasePrototype)

	GridPrototype.constructor = GridComponent

	GridPrototype.componentName = 'core.Grid'
	core.addProperty(GridPrototype, 'int', 'horizontalSpacing')
	core.addProperty(GridPrototype, 'int', 'verticalSpacing')
	core.addProperty(GridPrototype, 'int', 'rowsCount')
/** @const @type {number} */
	GridPrototype.FlowTopToBottom = 0
/** @const @type {number} */
	GridComponent.FlowTopToBottom = 0
/** @const @type {number} */
	GridPrototype.FlowLeftToRight = 1
/** @const @type {number} */
	GridComponent.FlowLeftToRight = 1
	core.addProperty(GridPrototype, 'enum', 'flow')
/** @const @type {number} */
	GridPrototype.AlignLeft = 0
/** @const @type {number} */
	GridComponent.AlignLeft = 0
/** @const @type {number} */
	GridPrototype.AlignRight = 1
/** @const @type {number} */
	GridComponent.AlignRight = 1
/** @const @type {number} */
	GridPrototype.AlignHCenter = 2
/** @const @type {number} */
	GridComponent.AlignHCenter = 2
/** @const @type {number} */
	GridPrototype.AlignJustify = 3
/** @const @type {number} */
	GridComponent.AlignJustify = 3
	core.addProperty(GridPrototype, 'enum', 'horizontalAlignment')
	GridPrototype._layout = function() {
		if (!this.recursiveVisible && !this.offlineLayout)
			return;
		var children = this.children;

		if (this.trace)
			log('Grid.layout ' + children.length + ' items into ' + this.width + 'x' + this.height)

		var crossPos = 0, directPos = 0, crossMax = 0, directMax = 0;
		var dsp = this.verticalSpacing || this.spacing,
			csp = this.horizontalSpacing || this.spacing // Cross Spacing
		this.count = children.length
		var rows = []
		var tempRows = []
		this._rows = []
		rows.push({idx: 0, size: 0}) //starting value
		var horizontal = this.flow == this.FlowLeftToRight
		var size = horizontal ? this.height : this.width
		for(var i = 0; i < children.length; ++i) {
			var c = children[i]

			if (!('height' in c) || !('width' in c))
				continue

			if (!horizontal) {
				var dbm = c.anchors.topMargin || c.anchors.margins // Direct Before Margin
				var dam = c.anchors.bottomMargin || c.anchors.margins // Direct After Margin
				var cbm = c.anchors.leftMargin || c.anchors.margins // Cross Before Margin
				var cam = c.anchors.rightMargin || c.anchors.margins // Cross After Margin
				var crossSize = c.width + cam + cbm
				var directSize = c.height + dbm + dam
			} else {
				var dbm = c.anchors.leftMargin || c.anchors.margins // Direct Before Margin
				var dam = c.anchors.rightMargin || c.anchors.margins // Direct After Margin
				var cbm = c.anchors.topMargin || c.anchors.margins // Cross Before Margin
				var cam = c.anchors.bottomMargin || c.anchors.margins // Cross After Margin
				var crossSize = c.height + cam + cbm
				var directSize = c.width + dbm + dam
			}

			if (c.recursiveVisible) {
				if (size - crossPos < crossSize) { // not enough space to put the item, initiate a new row
					rows.push({idx: i, size: crossPos - csp})
					directPos = directMax + dsp;
					directMax = directPos + directSize;
					if (horizontal) {
						c.y = cbm;
						c.x = directPos + dbm;
					} else {
						c.x = cbm;
						c.y = directPos + dbm;
					}
					this._rows.push(tempRows)
					tempRows = []
					tempRows.push({i: i, x: c.x, w: crossSize})
				} else {
					if (horizontal) {
						c.y = crossPos + cbm;
						c.x = directPos + dbm;
					} else  {
						c.x = crossPos + cbm;
						c.y = directPos + dbm;
					}
					tempRows.push({i: i, x: c.x, w: crossSize})
				}
				if (directMax < directPos + directSize)
					directMax = directPos + directSize;

				if (!horizontal)
					crossPos = c.x + c.width + cam + csp;
				else
					crossPos = c.y + c.height + cam + csp;

				if (crossMax < crossPos - csp)
					crossMax = crossPos - csp;
			}
		}

		this._rows.push(tempRows)

		this.rowsCount = rows.length;
		rows.push({idx: children.length, size: crossPos - csp}) // add last point

		this.contentHeight = horizontal ? crossMax : directMax;
		this.contentWidth = horizontal ? directMax : crossMax;

		if (this.horizontalAlignment === this.AlignLeft)
			return

		var right = this.horizontalAlignment === this.AlignRight
		var center = this.horizontalAlignment === this.AlignHCenter
		var justify = this.horizontalAlignment === this.AlignJustify
		var shift, row

		for (var i = 0; i < rows.length - 1; ++i) {
			row = rows[i+1]

			if (right)
				shift = size - row.size
			else if (center)
				shift = (size - row.size) / 2
			else if (justify)
				shift = (size - row.size)

			if (shift !== 0) {
				var cindex = rows[i].idx
				var baseIndex = cindex
				var maxIdx = baseIndex + this._rows[i].length
				var lindex = row.idx > maxIdx ? maxIdx : row.idx

				if (right || center) {
					for (; cindex < lindex; ++cindex) {
						if (!horizontal) {
							children[cindex].x += shift
							this._rows[i][cindex - baseIndex].x += shift
						} else {
							children[cindex].y += shift
							this._rows[i][cindex - baseIndex].y += shift
						}
					}
				} else if (justify) {
					var c = lindex - cindex + 1
					var sp = shift / c
					for (; cindex < lindex; ++cindex) {
						if (!horizontal) {
							children[cindex].x += sp * (cindex + c - lindex)
							this._rows[i][cindex - baseIndex].x += sp * (cindex + c - lindex)
						} else {
							children[cindex].y += sp * (cindex + c - lindex)
							this._rows[i][cindex - baseIndex].y += sp * (cindex + c - lindex)
						}
					}
				}
			}
		}
	}
	GridPrototype.focusUp = function() {
		var middle = 0, idx = 0;
		var vsp = this.verticalSpacing || this.spacing

		if (this.focusedChild) {
			idx = this.children.indexOf(this.focusedChild)
			middle = this.focusedChild.x + this.focusedChild.width / 2
		}

		var pos = this.getPosition(idx)

		if (!this.keyNavigationWraps && pos.row === 0)
			return false
		var l = this._rows.length
		var r = (pos.row + l - 1) % l
		var row = this._rows[r]

		for (var i = 0; i < row.length; ++i) {
			if (middle <= (row[i].x + row[i].w + vsp)){
				idx = row[i].i
				break
			}
		}

		this.currentIndex = idx
		this.focusChild(this.children[idx])
		return true
	}
	GridPrototype.focusDown = function() {
		var middle = 0, idx = 0;
		var vsp = this.verticalSpacing || this.spacing

		if (this.focusedChild) {
			idx = this.children.indexOf(this.focusedChild)
			middle = this.focusedChild.x + this.focusedChild.width / 2
		}

		var pos = this.getPosition(idx)

		if (!this.keyNavigationWraps && pos.row === this._rows.length - 1)
			return false
		var l = this._rows.length
		var r = (pos.row + 1) % l
		var row = this._rows[r]

		for (var i = 0; i < row.length; ++i) {
			if (middle <= (row[i].x + row[i].w + vsp)){
				idx = row[i].i
				break
			} else
				idx = row[i].i
		}

		this.currentIndex = idx
		this.focusChild(this.children[idx])
		return true
	}
	GridPrototype.addChild = function(child) {
		_globals.core.Item.prototype.addChild.apply(this, arguments)
		if (child instanceof _globals.core.Item) {
			child.onChanged('height', this._scheduleLayout.bind(this))
			child.onChanged('width', this._scheduleLayout.bind(this))
			child.onChanged('recursiveVisible', this._scheduleLayout.bind(this))
			child.anchors.on('marginsUpdated', this._scheduleLayout.bind(this))
		}
	}
	GridPrototype.getPosition = function(idx) {
		for (var r = 0; r < this._rows.length; ++r) {
			var row = this._rows[r]
			for (var i = 0;  i < row.length; ++i) {
				if (row[i].i === idx)
					return { row: r, idx: row[i].i }
			}
		}
	}
	_globals.core._protoOnChanged(GridPrototype, 'height', function(value) {
		if (this.flow == this.FlowLeftToRight)
			this._scheduleLayout()
	})
	_globals.core._protoOnChanged(GridPrototype, 'width', function(value) {
		if (this.flow == this.FlowTopToBottom)
			this._scheduleLayout()
	})
	var $code$0 = function(value) {
		this._scheduleLayout()
	}
	_globals.core._protoOnChanged(GridPrototype, 'horizontalAlignment', $code$0)
	_globals.core._protoOnChanged(GridPrototype, 'verticalSpacing', $code$0)
	_globals.core._protoOnChanged(GridPrototype, 'flow', $code$0)
	_globals.core._protoOnChanged(GridPrototype, 'horizontalSpacing', $code$0)
	_globals.core._protoOnKey(GridPrototype, 'Key', function(key,event) {
		if (!this.handleNavigationKeys)
			return false;

		switch (key) {
			case 'Up':		return this.focusUp()
			case 'Down':	return this.focusDown()
			case 'Left':	return this.focusPrevChild()
			case 'Right':	return this.focusNextChild()
		}
	})

//=====[component src.CompressInput]=====================

	var CompressInputBaseComponent = _globals.core.Grid
	var CompressInputBasePrototype = CompressInputBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Grid}
 */
	var CompressInputComponent = _globals.src.CompressInput = function(parent, row) {
		CompressInputBaseComponent.apply(this, arguments)

	}
	var CompressInputPrototype = CompressInputComponent.prototype = Object.create(CompressInputBasePrototype)

	CompressInputPrototype.constructor = CompressInputComponent

	CompressInputPrototype.componentName = 'src.CompressInput'
	core.addProperty(CompressInputPrototype, 'bool', 'active')
	core.addProperty(CompressInputPrototype, 'string', 'format')

	CompressInputPrototype.$c = function($c) {
		var $this = this;
		CompressInputBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.controls.experiment.TextInputMaterial($this)
		$c._this$child0 = _this$child0

//creating component TextInputMaterial
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('imageInput')
		$this.addChild(_this$child0)
		var _this$child1 = new _globals.controls.experiment.TextInputMaterial($this)
		$c._this$child1 = _this$child1

//creating component TextInputMaterial
		_this$child1.$c($c.$c$_this$child1 = { })
		_this$child1._setId('imageCompress')
		$this.addChild(_this$child1)
		var _this$child2 = new _globals.controls.experiment.ButtonMaterial($this)
		$c._this$child2 = _this$child2

//creating component ButtonMaterial
		_this$child2.$c($c.$c$_this$child2 = { })
		_this$child2._setId('imageButton')
		$this.addChild(_this$child2)
		var _this$child3 = new _globals.controls.experiment.NetworkRequest($this)
		$c._this$child3 = _this$child3

//creating component NetworkRequest
		_this$child3.$c($c.$c$_this$child3 = { })
		_this$child3._setId('urlRequest')
		$this.addChild(_this$child3)
		$this._setId('compressInput')
	}
	CompressInputPrototype.$s = function($c) {
		var $this = this;
	CompressInputBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (${webApp.mobile} ? 300 : ${imageInput.width} + ${imageButton.width} + ${imageCompress.width} + ${spacing} * 2)
			$this._replaceUpdater('width', function() { $this.width = ($this._get('webApp').mobile ? 300 : $this._get('imageInput').width + $this._get('imageButton').width + $this._get('imageCompress').width + $this.spacing * 2) }, [$this._get('imageCompress'),'width',$this,'spacing',$this._get('imageButton'),'width',$this._get('webApp'),'mobile',$this._get('imageInput'),'width'])
//assigning anchors.horizontalCenter to (${parent})
			$this.anchors._removeUpdater('horizontalCenter'); $this.anchors.horizontalCenter = ($this.parent);
//assigning spacing to (10)
			$this._removeUpdater('spacing'); $this.spacing = (10);
//assigning format to ('jpg')
			$this._removeUpdater('format'); $this.format = ('jpg');

//setting up component TextInputMaterial
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning width to (300)
			_this$child0._removeUpdater('width'); _this$child0.width = (300);
//assigning enabled to (! ${compressInput.active})
			_this$child0._replaceUpdater('enabled', function() { _this$child0.enabled = (! _this$child0._get('compressInput').active) }, [_this$child0._get('compressInput'),'active'])
//assigning placeholder.text to (_globals.qsTr(('Insert a link to image compression')))
			_this$child0.placeholder._replaceUpdater('text', function() { _this$child0.placeholder.text = (_globals.qsTr(('Insert a link to image compression'))) }, [_this$child0._context,'language'])
			_this$child0.onChanged('text', function(value) {
	var compressInput = this._get('compressInput', true)

            if (this.text.includes('png'))
                compressInput.format = 'png'
            else if (this.text.match(/.jpg|.jpeg/g))
                compressInput.format = 'jpg'
            else
                compressInput.format = ''
        }.bind(_this$child0))


//setting up component TextInputMaterial
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1

//assigning enabled to (! ${compressInput.active})
			_this$child1._replaceUpdater('enabled', function() { _this$child1.enabled = (! _this$child1._get('compressInput').active) }, [_this$child1._get('compressInput'),'active'])
//assigning placeholder.text to (${compressInput.format} === 'png' ? _globals.qsTr(('Compress (9)')) : _globals.qsTr(('Quality (20)')))
			_this$child1.placeholder._replaceUpdater('text', function() { _this$child1.placeholder.text = (_this$child1._get('compressInput').format === 'png' ? _globals.qsTr(('Compress (9)')) : _globals.qsTr(('Quality (20)'))) }, [_this$child1._context,'language',_this$child1._get('compressInput'),'format'])


//setting up component ButtonMaterial
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2

//assigning text to (_globals.qsTr(('Compress')))
			_this$child2._replaceUpdater('text', function() { _this$child2.text = (_globals.qsTr(('Compress'))) }, [_this$child2._context,'language'])
//assigning enabled to (! ${compressInput.active})
			_this$child2._replaceUpdater('enabled', function() { _this$child2.enabled = (! _this$child2._get('compressInput').active) }, [_this$child2._get('compressInput'),'active'])
//assigning height to (${imageInput.height})
			_this$child2._replaceUpdater('height', function() { _this$child2.height = (_this$child2._get('imageInput').height) }, [_this$child2._get('imageInput'),'height'])
			_this$child2.on('clicked', function() {
	var urlRequest = this._get('urlRequest', true), imageInput = this._get('imageInput', true), compressInput = this._get('compressInput', true)

            if(!imageInput.text || imageInput.text.substring(0, 4) !== 'http') {
                log('TODO: url error')
                return
            }

            compressInput.active = true
            urlRequest.send()
        }.bind(_this$child2))


//setting up component NetworkRequest
			var _this$child3 = $c._this$child3
			_this$child3.$s($c.$c$_this$child3)
			delete $c.$c$_this$child3

//assigning url to (${webApp.serverUrl} + 'add?url=' + ${imageInput.text} + (${imageCompress.text} ? '&jpegQuality=' + ${imageCompress.text} : ''))
			_this$child3._replaceUpdater('url', function() { _this$child3.url = (_this$child3._get('webApp').serverUrl + 'add?url=' + _this$child3._get('imageInput').text + (_this$child3._get('imageCompress').text ? '&jpegQuality=' + _this$child3._get('imageCompress').text : '')) }, [_this$child3._get('webApp'),'serverUrl',_this$child3._get('imageCompress'),'text',_this$child3._get('imageInput'),'text'])
			_this$child3.on('error', function(err) {
	var errorRect = this._get('errorRect', true)

            errorRect.visible = true
        }.bind(_this$child3))
			_this$child3.on('loaded', function(res) {
	var imagesModel = this._get('imagesModel', true), compressErrorRect = this._get('compressErrorRect', true), compressErrorTimer = this._get('compressErrorTimer', true), time = this._get('time', true), imageInput = this._get('imageInput', true), compressInput = this._get('compressInput', true)

            imageInput.text = ''
            compressInput.active = false

            let result = JSON.parse(res)

            if (result.error) {
                let errorMessage
                switch(result.error) {
                    case 'Download': errorMessage = 'Incorrect image url'; break
                    case 'SQL': errorMessage = 'Server error'; break
                    case 'Convert': errorMessage = 'Incorrect image format'; break
                    default: errorMessage = 'Unknown'; break
                }

                compressErrorRect.errorText = errorMessage
                compressErrorRect.visible = true
                compressErrorTimer.start()
                return
            }

            let imageNew = {name: result.image.original.name, original_size: result.image.original.size, original_url: result.image.original.url,
                                file: result.image.compress.name, compress_size: result.image.compress.size, time: result.date }
            
            imagesModel.insert(0, imageNew)
        }.bind(_this$child3))
}


//=====[component core.Row]=====================

	var RowBaseComponent = _globals.core.Layout
	var RowBasePrototype = RowBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Layout}
 */
	var RowComponent = _globals.core.Row = function(parent, row) {
		RowBaseComponent.apply(this, arguments)

	}
	var RowPrototype = RowComponent.prototype = Object.create(RowBasePrototype)

	RowPrototype.constructor = RowComponent

	RowPrototype.componentName = 'core.Row'
	RowPrototype._layout = function() {
		if (!this.recursiveVisible && !this.offlineLayout)
			return

		var children = this.children;
		var p = 0
		var h = 0
		this.count = children.length
		for(var i = 0; i < children.length; ++i) {
			var c = children[i]
			if (!('height' in c))
				continue
			var b = c.y + c.height
			if (b > h)
				h = b
			c.viewX = p
			if (c.recursiveVisible)
				p += c.width + this.spacing
		}
		if (p > 0)
			p -= this.spacing
		this.contentWidth = p
		this.contentHeight = h
	}
	RowPrototype.addChild = function(child) {
		_globals.core.Item.prototype.addChild.apply(this, arguments)
		child.onChanged('recursiveVisible', this._scheduleLayout.bind(this))
		child.onChanged('width', this._scheduleLayout.bind(this))
		child.onChanged('height', this._scheduleLayout.bind(this))
	}
	_globals.core._protoOnKey(RowPrototype, 'Key', function(key,event) {
		if (!this.handleNavigationKeys)
			return false;

		switch(key) {
			case 'Left':	return this.focusPrevChild()
			case 'Right':	return this.focusNextChild()
		}
	})

//=====[component src.Filtres]=====================

	var FiltresBaseComponent = _globals.core.Row
	var FiltresBasePrototype = FiltresBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Row}
 */
	var FiltresComponent = _globals.src.Filtres = function(parent, row) {
		FiltresBaseComponent.apply(this, arguments)

	}
	var FiltresPrototype = FiltresComponent.prototype = Object.create(FiltresBasePrototype)

	FiltresPrototype.constructor = FiltresComponent

	FiltresPrototype.componentName = 'src.Filtres'
	core.addProperty(FiltresPrototype, 'bool', 'isSearch')
	core.addProperty(FiltresPrototype, 'string', 'filterDateTime')
	FiltresPrototype.resetDate = function() {
	var filterDate = this._get('filterDate', true), filterTime = this._get('filterTime', true), filters = this._get('filters', true)

            let searchDate = filterDate.value
            let searchTime = filterTime.value ? filterTime.value : '00:00'
            filters.filterDateTime = searchDate + ' ' + searchTime
            log('Date', filters.filterDateTime)
        }

	FiltresPrototype.$c = function($c) {
		var $this = this;
		FiltresBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Text($this)
		$c._this$child0 = _this$child0

//creating component Text
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new _globals.controls.experiment.TextInputMaterial($this)
		$c._this$child1 = _this$child1

//creating component TextInputMaterial
		_this$child1.$c($c.$c$_this$child1 = { })
		_this$child1._setId('filterName')
		$this.addChild(_this$child1)
		var _this$child2 = new _globals.core.Text($this)
		$c._this$child2 = _this$child2

//creating component Text
		_this$child2.$c($c.$c$_this$child2 = { })

		$this.addChild(_this$child2)
		var _this$child3 = new _globals.controls.experiment.TextInputMaterial($this)
		$c._this$child3 = _this$child3

//creating component TextInputMaterial
		_this$child3.$c($c.$c$_this$child3 = { })
		_this$child3._setId('filterSize')
		$this.addChild(_this$child3)
		var _this$child4 = new _globals.core.Text($this)
		$c._this$child4 = _this$child4

//creating component Text
		_this$child4.$c($c.$c$_this$child4 = { })

		$this.addChild(_this$child4)
		var _this$child5 = new _globals.controls.input.DateInput($this)
		$c._this$child5 = _this$child5

//creating component DateInput
		_this$child5.$c($c.$c$_this$child5 = { })
		_this$child5._setId('filterDate')
		$this.addChild(_this$child5)
		var _this$child6 = new _globals.controls.input.TimeInput($this)
		$c._this$child6 = _this$child6

//creating component TimeInput
		_this$child6.$c($c.$c$_this$child6 = { })
		_this$child6._setId('filterTime')
		$this.addChild(_this$child6)
		var _this$child7 = new _globals.controls.web.Button($this)
		$c._this$child7 = _this$child7

//creating component Button
		_this$child7.$c($c.$c$_this$child7 = { })

		$this.addChild(_this$child7)
		$this._setId('filters')
	}
	FiltresPrototype.$s = function($c) {
		var $this = this;
	FiltresBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning anchors.horizontalAlignment to (${parent})
			$this.anchors._removeUpdater('horizontalAlignment'); $this.anchors.horizontalAlignment = ($this.parent);
//assigning spacing to (3)
			$this._removeUpdater('spacing'); $this.spacing = (3);
//assigning isSearch to (${filterName.text} || ${filterSize.text} || ${filterDate.value} || ${filterTime.value})
			$this._replaceUpdater('isSearch', function() { $this.isSearch = ($this._get('filterName').text || $this._get('filterSize').text || $this._get('filterDate').value || $this._get('filterTime').value) }, [$this._get('filterDate'),'value',$this._get('filterTime'),'value',$this._get('filterSize'),'text',$this._get('filterName'),'text'])
//assigning anchors.topMargin to (30)
			$this.anchors._removeUpdater('topMargin'); $this.anchors.topMargin = (30);
//assigning anchors.top to (${compressInput.bottom})
			$this.anchors._replaceUpdater('top', function() { $this.anchors.top = ($this._get('compressInput').bottom) }, [$this._get('compressInput'),'bottom'])

//setting up component Text
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning text to ('Search:')
			_this$child0._removeUpdater('text'); _this$child0.text = ('Search:');


//setting up component TextInputMaterial
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1

//assigning width to (250)
			_this$child1._removeUpdater('width'); _this$child1.width = (250);
			_this$child1.onChanged('text', function(value) {
	var proxyModel = this._get('proxyModel', true)

                proxyModel._buildIndexMap()
            }.bind(_this$child1))


//setting up component Text
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2

//assigning text to ('Filter by size (MB):')
			_this$child2._removeUpdater('text'); _this$child2.text = ('Filter by size (MB):');


//setting up component TextInputMaterial
			var _this$child3 = $c._this$child3
			_this$child3.$s($c.$c$_this$child3)
			delete $c.$c$_this$child3

			_this$child3.onChanged('text', function(value) {
	var proxyModel = this._get('proxyModel', true)

                proxyModel._buildIndexMap()
            }.bind(_this$child3))


//setting up component Text
			var _this$child4 = $c._this$child4
			_this$child4.$s($c.$c$_this$child4)
			delete $c.$c$_this$child4

//assigning text to ('Filter by load date:')
			_this$child4._removeUpdater('text'); _this$child4.text = ('Filter by load date:');


//setting up component DateInput
			var _this$child5 = $c._this$child5
			_this$child5.$s($c.$c$_this$child5)
			delete $c.$c$_this$child5

			_this$child5.onChanged('value', function(value) {
	var proxyModel = this._get('proxyModel', true), filters = this._get('filters', true)

                filters.resetDate()
                proxyModel._buildIndexMap()
            }.bind(_this$child5))


//setting up component TimeInput
			var _this$child6 = $c._this$child6
			_this$child6.$s($c.$c$_this$child6)
			delete $c.$c$_this$child6

//assigning enabled to (${filterDate.value})
			_this$child6._replaceUpdater('enabled', function() { _this$child6.enabled = (_this$child6._get('filterDate').value) }, [_this$child6._get('filterDate'),'value'])
			_this$child6.onChanged('value', function(value) {
	var proxyModel = this._get('proxyModel', true), filters = this._get('filters', true)

                filters.resetDate()
                proxyModel._buildIndexMap()
            }.bind(_this$child6))


//setting up component Button
			var _this$child7 = $c._this$child7
			_this$child7.$s($c.$c$_this$child7)
			delete $c.$c$_this$child7

//assigning text to ('Reset')
			_this$child7._removeUpdater('text'); _this$child7.text = ('Reset');
			_this$child7.on('clicked', function() {
	var filterDate = this._get('filterDate', true), filterName = this._get('filterName', true), filterSize = this._get('filterSize', true), filterTime = this._get('filterTime', true)

                filterName.text = ''
                filterSize.text = ''
                filterDate.element.dom.value = ''
                filterTime.element.dom.value = ''
                filterDate.value = ''
                filterTime.value = ''  
            }.bind(_this$child7))
}


//=====[component controls.experiment.NetworkRequest]=====================

	var NetworkRequestBaseComponent = _globals.core.Object
	var NetworkRequestBasePrototype = NetworkRequestBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var NetworkRequestComponent = _globals.controls.experiment.NetworkRequest = function(parent, row) {
		NetworkRequestBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._method = 'GET'
	}

	}
	var NetworkRequestPrototype = NetworkRequestComponent.prototype = Object.create(NetworkRequestBasePrototype)

	NetworkRequestPrototype.constructor = NetworkRequestComponent

	NetworkRequestPrototype.componentName = 'controls.experiment.NetworkRequest'
	NetworkRequestPrototype.loaded = _globals.core.createSignal('loaded')
	NetworkRequestPrototype.error = _globals.core.createSignal('error')
	core.addProperty(NetworkRequestPrototype, 'bool', 'autoLoad')
	core.addProperty(NetworkRequestPrototype, 'string', 'url')
	core.addProperty(NetworkRequestPrototype, 'string', 'result')
	core.addProperty(NetworkRequestPrototype, 'string', 'body')
/** @const @type {number} */
	NetworkRequestPrototype.Error = 0
/** @const @type {number} */
	NetworkRequestComponent.Error = 0
/** @const @type {number} */
	NetworkRequestPrototype.Loading = 1
/** @const @type {number} */
	NetworkRequestComponent.Loading = 1
/** @const @type {number} */
	NetworkRequestPrototype.Loaded = 2
/** @const @type {number} */
	NetworkRequestComponent.Loaded = 2
	core.addProperty(NetworkRequestPrototype, 'enum', 'status')
/** @const @type {number} */
	NetworkRequestPrototype.Get = 0
/** @const @type {number} */
	NetworkRequestComponent.Get = 0
/** @const @type {number} */
	NetworkRequestPrototype.Post = 1
/** @const @type {number} */
	NetworkRequestComponent.Post = 1
/** @const @type {number} */
	NetworkRequestPrototype.Put = 2
/** @const @type {number} */
	NetworkRequestComponent.Put = 2
/** @const @type {number} */
	NetworkRequestPrototype.Delete = 3
/** @const @type {number} */
	NetworkRequestComponent.Delete = 3
	core.addProperty(NetworkRequestPrototype, 'enum', 'method')
	NetworkRequestPrototype.toJson = function() {
		var json
		try {
			json = JSON.parse(this.result)
		}
		catch(e) { log('Error loading from ' + this.url); this.error(); return []; }
		this.result = ''
		return json;
	}
	NetworkRequestPrototype.send = function() {
		var xhr = new XMLHttpRequest()

		var self = this
		var ctx = this._context

		xhr.addEventListener('error', ctx.wrapNativeCallback(function(event) {
			self.status = this.Error
			self.result = ''
			self.error(event)
		}))

		xhr.addEventListener('load', ctx.wrapNativeCallback(function(event) {
			if (xhr.readyState == 4 && xhr.status == 200) {
				self.result = xhr.responseText
				self.status = this.Loaded
				self.loaded(self.result)
			}
		}))

		xhr.open(this._method, this.url);
		if ((this._method === 'POST' || this._method === 'PUT') && this.body)
			xhr.send(this.body)
		else
			xhr.send()
		this.loading = true

		//for (var i in request.settings)
		//	xhr[i] = settings[i]
		//for (var i in this.headers)
		//	xhr.setRequestHeader(i, headers[
		//if (request.data)
		//	xhr.send(request.data)
		//else
	}
	_globals.core._protoOnChanged(NetworkRequestPrototype, 'method', function(value) {
		switch(this.method) {
 			case this.GET: this._method = 'GET'; break
			case this.Post: this._method = 'POST'; break
			case this.Put: this._method = 'PUT'; break
			case this.Delete: this._method = 'DELETE'; break
		}
	})

//=====[component controls.experiment.MainItem]=====================

	var MainItemBaseComponent = _globals.core.Item
	var MainItemBasePrototype = MainItemBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var MainItemComponent = _globals.controls.experiment.MainItem = function(parent, row) {
		MainItemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.title = document.title
	}

	}
	var MainItemPrototype = MainItemComponent.prototype = Object.create(MainItemBasePrototype)

	MainItemPrototype.constructor = MainItemComponent

	MainItemPrototype.componentName = 'controls.experiment.MainItem'
	core.addProperty(MainItemPrototype, 'bool', 'active')
	core.addProperty(MainItemPrototype, 'Color', 'color')
	core.addProperty(MainItemPrototype, 'string', 'title')
	core.addProperty(MainItemPrototype, 'bool', 'mobile')
	_globals.core._protoOnChanged(MainItemPrototype, 'color', function(value) {
	var mainItemBackground = this._get('mainItemBackground', true)
 mainItemBackground.color = value; document.body.style.background = _globals.core.Color.normalize(value) })
	_globals.core._protoOnChanged(MainItemPrototype, 'title', function(value) { document.title = value })

	MainItemPrototype.$c = function($c) {
		var $this = this;
		MainItemBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Rectangle($this)
		$c._this$child0 = _this$child0

//creating component Rectangle
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('mainItemBackground')
		$this.addChild(_this$child0)
		$this._setId('mainItemPrivateItem')
	}
	MainItemPrototype.$s = function($c) {
		var $this = this;
	MainItemBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning active to (${context.system.pageActive})
			$this._replaceUpdater('active', function() { $this.active = ($this._context.system.pageActive) }, [$this._context.system,'pageActive'])
//assigning mobile to (${context.system.device} === _globals.core.System.prototype.Mobile || ${width} < ${height})
			$this._replaceUpdater('mobile', function() { $this.mobile = ($this._context.system.device === _globals.core.System.prototype.Mobile || $this.width < $this.height) }, [$this,'width',$this,'height',$this._context.system,'device'])
//assigning anchors.fill to (${parent})
			$this.anchors._removeUpdater('fill'); $this.anchors.fill = ($this.parent);

//setting up component Rectangle
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning color to ("transparent")
			_this$child0._removeUpdater('color'); _this$child0.color = ("transparent");
//assigning fixed to (true)
			_this$child0._removeUpdater('fixed'); _this$child0.fixed = (true);
//assigning anchors.fill to (${parent})
			_this$child0.anchors._removeUpdater('fill'); _this$child0.anchors.fill = (_this$child0.parent);
	var behavior__this_child0_on_background = new _globals.core.Animation(_this$child0)
	var behavior__this_child0_on_background$c = { behavior__this_child0_on_background: behavior__this_child0_on_background }

//creating component Animation
	behavior__this_child0_on_background.$c(behavior__this_child0_on_background$c.$c$behavior__this_child0_on_background = { })


//setting up component Animation
	var behavior__this_child0_on_background = behavior__this_child0_on_background$c.behavior__this_child0_on_background
	behavior__this_child0_on_background.$s(behavior__this_child0_on_background$c.$c$behavior__this_child0_on_background)
	delete behavior__this_child0_on_background$c.$c$behavior__this_child0_on_background

//assigning duration to (500)
	behavior__this_child0_on_background._removeUpdater('duration'); behavior__this_child0_on_background.duration = (500);

	_this$child0.setAnimation('background', behavior__this_child0_on_background);
}


//=====[component core.Animation]=====================

	var AnimationBaseComponent = _globals.core.Object
	var AnimationBasePrototype = AnimationBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var AnimationComponent = _globals.core.Animation = function(parent, row) {
		AnimationBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._disabled = 0; this._native = false }

	}
	var AnimationPrototype = AnimationComponent.prototype = Object.create(AnimationBasePrototype)

	AnimationPrototype.constructor = AnimationComponent

	AnimationPrototype.componentName = 'core.Animation'
	core.addProperty(AnimationPrototype, 'int', 'delay', (0))
	core.addProperty(AnimationPrototype, 'int', 'duration', (200))
	core.addProperty(AnimationPrototype, 'bool', 'cssTransition', (true))
	core.addProperty(AnimationPrototype, 'bool', 'running', (false))
	core.addProperty(AnimationPrototype, 'string', 'easing', ("ease"))
	AnimationPrototype._updateAnimation = function() {
		if (this._target)
			this._target.updateAnimation(this._property, this)
	}
	AnimationPrototype.active = function() {
		return this.enabled() && this.duration > 0
	}
	AnimationPrototype.disable = function() { ++this._disabled; this._updateAnimation() }
	AnimationPrototype.enable = function() { --this._disabled; this._updateAnimation() }
	AnimationPrototype.enabled = function() { return this._disabled == 0 }
	AnimationPrototype.complete = function() { }
	AnimationPrototype.interpolate = function(dst,src,t) {
		return t * (dst - src) + src;
	}
	var $code$0 = function(value) { this._updateAnimation() }
	_globals.core._protoOnChanged(AnimationPrototype, 'easing', $code$0)
	_globals.core._protoOnChanged(AnimationPrototype, 'duration', $code$0)
	_globals.core._protoOnChanged(AnimationPrototype, 'delay', $code$0)
	_globals.core._protoOnChanged(AnimationPrototype, 'cssTransition', $code$0)
	_globals.core._protoOnChanged(AnimationPrototype, 'running', $code$0)

//=====[component controls.core.PlaceholderFont]=====================

	var PlaceholderFontBaseComponent = _globals.core.Object
	var PlaceholderFontBasePrototype = PlaceholderFontBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var PlaceholderFontComponent = _globals.controls.core.PlaceholderFont = function(parent, row) {
		PlaceholderFontBaseComponent.apply(this, arguments)

	}
	var PlaceholderFontPrototype = PlaceholderFontComponent.prototype = Object.create(PlaceholderFontBasePrototype)

	PlaceholderFontPrototype.constructor = PlaceholderFontComponent

	PlaceholderFontPrototype.componentName = 'controls.core.PlaceholderFont'
	core.addProperty(PlaceholderFontPrototype, 'string', 'family')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'italic')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'bold')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'underline')
	core.addProperty(PlaceholderFontPrototype, 'bool', 'strike')
	core.addProperty(PlaceholderFontPrototype, 'int', 'pixelSize')
	core.addProperty(PlaceholderFontPrototype, 'int', 'pointSize')
	core.addProperty(PlaceholderFontPrototype, 'int', 'lineHeight')
	core.addProperty(PlaceholderFontPrototype, 'int', 'weight')
	PlaceholderFontPrototype.getClass = function() {
		var cls
		if (!this._placeholderClass) {
			cls = this._placeholderClass = this._context.stylesheet.allocateClass('placeholderFont')
			this.parent.parent.element.addClass(cls)
		}
		else
			cls = this._placeholderClass
		return cls
	}
	PlaceholderFontPrototype.updateProperty = function(name,value) {
		var cls = this.getClass()

		//fixme: port to modernizr
		var selectors = ['::-webkit-input-placeholder', '::-moz-placeholder', ':-moz-placeholder', ':-ms-input-placeholder']
		selectors.forEach(function(selector) {
			try {
				this._context.stylesheet._addRule('.' + cls + selector, name + ':' + value)
				log('added rule for .' + cls + selector)
			} catch(ex) {
				//log(ex)
			}
		}.bind(this))
	}
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'family', function(value) { this.updateProperty('font-family', value); this.parent.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'pointSize', function(value) { this.updateProperty('font-size', value + "pt"); this.parent.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'pixelSize', function(value) { this.updateProperty('font-size', value + "px"); this.parent.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'italic', function(value) { this.updateProperty('font-style', value? 'italic': 'normal'); this.parent.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'weight', function(value) { this.updateProperty('font-weight', value); this.parent.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'bold', function(value) { this.updateProperty('font-weight', value? 'bold': 'normal'); this.parent.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'lineHeight', function(value) { this.updateProperty('line-height', value + "px"); this.parent.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'strike', function(value) { this.updateProperty('text-decoration', value? 'line-through': ''); this.parent._updateSize(); })
	_globals.core._protoOnChanged(PlaceholderFontPrototype, 'underline', function(value) { this.updateProperty('text-decoration', value? 'underline': ''); this.parent.parent._updateSize(); })

//=====[component core.Loader]=====================

	var LoaderBaseComponent = _globals.core.Item
	var LoaderBasePrototype = LoaderBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var LoaderComponent = _globals.core.Loader = function(parent, row) {
		LoaderBaseComponent.apply(this, arguments)

	}
	var LoaderPrototype = LoaderComponent.prototype = Object.create(LoaderBasePrototype)

	LoaderPrototype.constructor = LoaderComponent

	LoaderPrototype.componentName = 'core.Loader'
	LoaderPrototype.loaded = _globals.core.createSignal('loaded')
	core.addProperty(LoaderPrototype, 'string', 'source')
	core.addProperty(LoaderPrototype, 'Object', 'item')
	LoaderPrototype.discard = function() {
		this.discardItem()
		_globals.core.Item.prototype.discard.call(this)
	}
	LoaderPrototype.discardItem = function() {
		var item = this.item
		if (item) {
			item.discard()
			item = null
		}
	}
	LoaderPrototype._load = function() {
		var source = this.source
		if (!source)
			return

		log('loading ' + source + '…')
		var path = source.split('.')
		var ctor = _globals
		while(path.length) {
			var ns = path.shift()
			ctor = ctor[ns]
			if (ctor === undefined)
				throw new Error('unknown component used: ' + source)
		}
		var item = new ctor(this)
		item.__init()
		this.item = item
		this._context.scheduleComplete()
		this._updateVisibilityForChild(this.item, this.recursiveVisible)
		this._tryFocus()
		this.loaded()
	}
	LoaderPrototype.__complete = function() { LoaderBasePrototype.__complete.call(this)
if (!this.item && this.source)
			this._load() }
	_globals.core._protoOnChanged(LoaderPrototype, 'recursiveVisible', function(value) {
		if (this.item)
			this._updateVisibilityForChild(this.item, value)
	})
	_globals.core._protoOnChanged(LoaderPrototype, 'source', function(value) {
		this.discardItem()
		this._load()
	})

//=====[component controls.input.TextInput]=====================

	var TextInputBaseComponent = _globals.controls.input.BaseInput
	var TextInputBasePrototype = TextInputBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.input.BaseInput}
 */
	var TextInputComponent = _globals.controls.input.TextInput = function(parent, row) {
		TextInputBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element.on("input", function() { this.text = this.element.dom.value }.bind(this))
		this.element.on('select', context.wrapNativeCallback(function() {
			this.selectionStart = this.element.dom.selectionStart
			this.selectionEnd = this.element.dom.selectionEnd
			this.selectedText = this.getText(this.selectionStart, this.selectionEnd)
		}.bind(this)))
		this.element.on('focus', context.wrapNativeCallback(function() {
			this.focused = true
		}.bind(this)))
		this.element.on('blur', context.wrapNativeCallback(function() {
			this.focused = false
		}.bind(this)))
	}

	}
	var TextInputPrototype = TextInputComponent.prototype = Object.create(TextInputBasePrototype)

	TextInputPrototype.constructor = TextInputComponent

	TextInputPrototype.componentName = 'controls.input.TextInput'
	core.addProperty(TextInputPrototype, 'string', 'text')
	core.addProperty(TextInputPrototype, 'Validator', 'validator')
	core.addProperty(TextInputPrototype, 'int', 'length')
	core.addProperty(TextInputPrototype, 'string', 'selectedText')
	core.addProperty(TextInputPrototype, 'int', 'selectionStart')
	core.addProperty(TextInputPrototype, 'int', 'selectionEnd')
	core.addProperty(TextInputPrototype, 'int', 'maximumLength')
	core.addProperty(TextInputPrototype, 'bool', 'cursorVisible', (true))
	core.addProperty(TextInputPrototype, 'color', 'selectedTextColor', ("red"))
/** @const @type {number} */
	TextInputPrototype.Normal = 0
/** @const @type {number} */
	TextInputComponent.Normal = 0
/** @const @type {number} */
	TextInputPrototype.Password = 1
/** @const @type {number} */
	TextInputComponent.Password = 1
/** @const @type {number} */
	TextInputPrototype.NoEcho = 2
/** @const @type {number} */
	TextInputComponent.NoEcho = 2
/** @const @type {number} */
	TextInputPrototype.PasswordEchoOnEdit = 3
/** @const @type {number} */
	TextInputComponent.PasswordEchoOnEdit = 3
	core.addProperty(TextInputPrototype, 'enum', 'echoMode')
/** @const @type {number} */
	TextInputPrototype.AlignLeft = 0
/** @const @type {number} */
	TextInputComponent.AlignLeft = 0
/** @const @type {number} */
	TextInputPrototype.AlignRight = 1
/** @const @type {number} */
	TextInputComponent.AlignRight = 1
/** @const @type {number} */
	TextInputPrototype.AlignHCenter = 2
/** @const @type {number} */
	TextInputComponent.AlignHCenter = 2
/** @const @type {number} */
	TextInputPrototype.AlignJustify = 3
/** @const @type {number} */
	TextInputComponent.AlignJustify = 3
	core.addProperty(TextInputPrototype, 'enum', 'horizontalAlignment')
	TextInputPrototype.copy = function() {
		document.execCommand("Copy");
	}
	TextInputPrototype.cut = function() {
		document.execCommand("Cut");
	}
	TextInputPrototype.selectAll = function() {
		this.element.dom.select()
	}
	TextInputPrototype.clear = function() {
		this.text = ''
	}
	var $code$0 = function() {
	}
	TextInputPrototype.deselect = $code$0
	TextInputPrototype.paste = $code$0
	TextInputPrototype.selectWord = $code$0
	TextInputPrototype.redo = $code$0
	TextInputPrototype.insert = function(position,text) {
		this.text = this.text.slice(0, position) + text + this.text.slice(position);
	}
	TextInputPrototype.getText = function(start,end) {
		return this.text.substring(start, end)
	}
	TextInputPrototype.select = function(start,end) {
		this.element.dom.focus()
		this.element.dom.setSelectionRange(start, end)
	}
	TextInputPrototype.remove = function(start,end) {
		this.text = this.text.slice(0, start) + this.text.slice(end);
	}
	_globals.core._protoOnChanged(TextInputPrototype, 'text', function(value) {
		if (value != this.element.dom.value)
			this.element.dom.value = value;
		this.length = this.element.dom.textLength
	})
	_globals.core._protoOnChanged(TextInputPrototype, 'selectedTextColor', function(value) {
		log("COLOR")
		
	})
	_globals.core._protoOnChanged(TextInputPrototype, 'horizontalAlignment', function(value) {
		switch(value) {
		case this.AlignLeft:	this.style('text-align', 'left'); break
		case this.AlignRight:	this.style('text-align', 'right'); break
		case this.AlignHCenter:	this.style('text-align', 'center'); break
		case this.AlignJustify:	this.style('text-align', 'justify'); break
		}
	})
	_globals.core._protoOnChanged(TextInputPrototype, 'echoMode', function(value) {
		switch(value) {
		case this.Normal: this.type = "text"; break;
		case this.Password: this.type = "password"; break;
		//case this.NoEcho: break;
		//case this.PasswordEchoOnEdit: break;
		}
	})
	_globals.core._protoOnChanged(TextInputPrototype, 'maximumLength', function(value) { this.element.dom.maxLength = value })
	_globals.core._protoOnChanged(TextInputPrototype, 'cursorVisible', function(value) { this.style('caret-color', _globals.core.normalizeColor("transparent")) })

	TextInputPrototype.$c = function($c) {
		var $this = this;
		TextInputBasePrototype.$c.call(this, $c.$b = { })

	}
	TextInputPrototype.$s = function($c) {
		var $this = this;
	TextInputBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (173)
			$this._removeUpdater('width'); $this.width = (173);
//assigning backgroundColor to ("transparent")
			$this._removeUpdater('backgroundColor'); $this.backgroundColor = ("transparent");
//assigning height to (20)
			$this._removeUpdater('height'); $this.height = (20);
}


//=====[component controls.core.BaseActivity]=====================

	var BaseActivityBaseComponent = _globals.core.Item
	var BaseActivityBasePrototype = BaseActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var BaseActivityComponent = _globals.controls.core.BaseActivity = function(parent, row) {
		BaseActivityBaseComponent.apply(this, arguments)

	}
	var BaseActivityPrototype = BaseActivityComponent.prototype = Object.create(BaseActivityBasePrototype)

	BaseActivityPrototype.constructor = BaseActivityComponent

	BaseActivityPrototype.componentName = 'controls.core.BaseActivity'
	BaseActivityPrototype.started = _globals.core.createSignal('started')
	BaseActivityPrototype.stopped = _globals.core.createSignal('stopped')
	core.addProperty(BaseActivityPrototype, 'string', 'name')
	core.addProperty(BaseActivityPrototype, 'Item', 'manager')
	BaseActivityPrototype.clear = function() { this.manager.clear() }
	BaseActivityPrototype.pop = function() { this.manager.pop() }
	BaseActivityPrototype.init = function(intent,state) { }
	BaseActivityPrototype.push = function(name,intent,state) { this.manager.push(name, intent, state) }
	BaseActivityPrototype.replaceTopActivity = function(name,intent,state) { this.manager.replaceTopActivity(name, intent, state) }
	BaseActivityPrototype.setIntent = function(state,name) { this.manager.setIntent(state, name) }
	BaseActivityPrototype.setState = function(state,name) { this.manager.setState(state, name) }
	_globals.core._protoOnKey(BaseActivityPrototype, 'Back', function(key,event) { this.manager.pop(); return true })

	BaseActivityPrototype.$c = function($c) {
		var $this = this;
		BaseActivityBasePrototype.$c.call(this, $c.$b = { })

	}
	BaseActivityPrototype.$s = function($c) {
		var $this = this;
	BaseActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning visible to (false)
			$this._removeUpdater('visible'); $this.visible = (false);
//assigning manager to (${parent})
			$this._removeUpdater('manager'); $this.manager = ($this.parent);
}


//=====[component controls.core.LazyActivity]=====================

	var LazyActivityBaseComponent = _globals.controls.core.BaseActivity
	var LazyActivityBasePrototype = LazyActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.core.BaseActivity}
 */
	var LazyActivityComponent = _globals.controls.core.LazyActivity = function(parent, row) {
		LazyActivityBaseComponent.apply(this, arguments)

	}
	var LazyActivityPrototype = LazyActivityComponent.prototype = Object.create(LazyActivityBasePrototype)

	LazyActivityPrototype.constructor = LazyActivityComponent

	LazyActivityPrototype.componentName = 'controls.core.LazyActivity'
	core.addProperty(LazyActivityPrototype, 'string', 'component')
	LazyActivityPrototype.init = function() {
		_globals.controls.core.BaseActivity.prototype.init.apply(this, arguments)
		var activity = this.createActivity()
		if (activity)
			activity.init.apply(activity, arguments)
	}
	LazyActivityPrototype.start = function() {
		this.createActivity().start()
		this.visible = true
	}
	LazyActivityPrototype.stop = function() {
		this.visible = false
		var item = this.getActivity()
		if (item)
			item.stop()
	}
	LazyActivityPrototype.getActivity = function() {
	var loader = this._get('loader', true)

		return loader.item
	}
	LazyActivityPrototype.createActivity = function() {
	var loader = this._get('loader', true)

		var item = loader.item
		if (!item) {
			loader.source = this.component
			item = loader.item
			item.anchors.fill = this
			this._context._processActions() //we have to process all actions before starting setting up items
			item.manager = this.manager
			if (!item)
				throw new Error("can't create component " + this.component)

			var activity = this
			item.on('started', function() { activity.started() })
			item.on('stopped', function() { activity.stopped() })
		}
		return loader.item
	}

	LazyActivityPrototype.$c = function($c) {
		var $this = this;
		LazyActivityBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Loader($this)
		$c._this$child0 = _this$child0

//creating component Loader
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('loader')
		$this.addChild(_this$child0)
	}
	LazyActivityPrototype.$s = function($c) {
		var $this = this;
	LazyActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning anchors.fill to (${manager})
			$this.anchors._replaceUpdater('fill', function() { $this.anchors.fill = ($this.manager) }, [$this,'manager'])

//setting up component Loader
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning anchors.fill to (${parent.manager})
			_this$child0.anchors._replaceUpdater('fill', function() { _this$child0.anchors.fill = (_this$child0.parent.manager) }, [_this$child0.parent,'manager'])
}


//=====[component controls.core.Paddings]=====================

	var PaddingsBaseComponent = _globals.core.Object
	var PaddingsBasePrototype = PaddingsBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var PaddingsComponent = _globals.controls.core.Paddings = function(parent, row) {
		PaddingsBaseComponent.apply(this, arguments)

	}
	var PaddingsPrototype = PaddingsComponent.prototype = Object.create(PaddingsBasePrototype)

	PaddingsPrototype.constructor = PaddingsComponent

	PaddingsPrototype.componentName = 'controls.core.Paddings'
	core.addProperty(PaddingsPrototype, 'int', 'top')
	core.addProperty(PaddingsPrototype, 'int', 'left')
	core.addProperty(PaddingsPrototype, 'int', 'right')
	core.addProperty(PaddingsPrototype, 'int', 'bottom')
	core.addProperty(PaddingsPrototype, 'int', 'all')
	_globals.core._protoOnChanged(PaddingsPrototype, 'bottom', function(value) { this.parent.style('padding-bottom', value); })
	_globals.core._protoOnChanged(PaddingsPrototype, 'left', function(value) { this.parent.style('padding-left', value); })
	_globals.core._protoOnChanged(PaddingsPrototype, 'right', function(value) { this.parent.style('padding-right', value); })
	_globals.core._protoOnChanged(PaddingsPrototype, 'top', function(value) { this.parent.style('padding-top', value); })

	PaddingsPrototype.$c = function($c) {
		var $this = this;
		PaddingsBasePrototype.$c.call(this, $c.$b = { })

	}
	PaddingsPrototype.$s = function($c) {
		var $this = this;
	PaddingsBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning top to (${all})
			$this._replaceUpdater('top', function() { $this.top = ($this.all) }, [$this,'all'])
//assigning right to (${all})
			$this._replaceUpdater('right', function() { $this.right = ($this.all) }, [$this,'all'])
//assigning bottom to (${all})
			$this._replaceUpdater('bottom', function() { $this.bottom = ($this.all) }, [$this,'all'])
//assigning left to (${all})
			$this._replaceUpdater('left', function() { $this.left = ($this.all) }, [$this,'all'])
}


//=====[component controls.input.TimeInput]=====================

	var TimeInputBaseComponent = _globals.controls.input.BaseInput
	var TimeInputBasePrototype = TimeInputBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.input.BaseInput}
 */
	var TimeInputComponent = _globals.controls.input.TimeInput = function(parent, row) {
		TimeInputBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this.element.on("change", function() { this.value = this.element.dom.value }.bind(this)) }

	}
	var TimeInputPrototype = TimeInputComponent.prototype = Object.create(TimeInputBasePrototype)

	TimeInputPrototype.constructor = TimeInputComponent

	TimeInputPrototype.componentName = 'controls.input.TimeInput'
	core.addProperty(TimeInputPrototype, 'string', 'max')
	core.addProperty(TimeInputPrototype, 'string', 'min')
	core.addProperty(TimeInputPrototype, 'string', 'value')
	_globals.core._protoOnChanged(TimeInputPrototype, 'max', function(value) { this.element.dom.max = value; })
	_globals.core._protoOnChanged(TimeInputPrototype, 'min', function(value) { this.element.dom.min = value; })

	TimeInputPrototype.$c = function($c) {
		var $this = this;
		TimeInputBasePrototype.$c.call(this, $c.$b = { })

	}
	TimeInputPrototype.$s = function($c) {
		var $this = this;
	TimeInputBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (75)
			$this._removeUpdater('width'); $this.width = (75);
//assigning type to ("time")
			$this._removeUpdater('type'); $this.type = ("time");
//assigning height to (20)
			$this._removeUpdater('height'); $this.height = (20);
}


//=====[component core.Rectangle]=====================

	var RectangleBaseComponent = _globals.core.Item
	var RectangleBasePrototype = RectangleBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var RectangleComponent = _globals.core.Rectangle = function(parent, row) {
		RectangleBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initRectangle(this)
		this.style('background-color', _globals.core.Color.normalize(this.color))
	}

	}
	var RectanglePrototype = RectangleComponent.prototype = Object.create(RectangleBasePrototype)

	{
		var styleMap = RectanglePrototype._propertyToStyle = Object.create(RectangleBasePrototype._propertyToStyle)
		styleMap['color'] = 'background-color'
	}

	RectanglePrototype.constructor = RectangleComponent

	RectanglePrototype.componentName = 'core.Rectangle'
	core.addLazyProperty(RectanglePrototype, 'border', (function(__parent, __row) {
		var lazy$border = new _globals.core.Border(__parent, __row)
		var $c = { lazy$border : lazy$border }

//creating component Border
			lazy$border.$c($c.$c$lazy$border = { })


//setting up component Border
			var lazy$border = $c.lazy$border
			lazy$border.$s($c.$c$lazy$border)
			delete $c.$c$lazy$border



		return lazy$border
}))
	core.addProperty(RectanglePrototype, 'color', 'color', ("#ffffff"))
	core.addProperty(RectanglePrototype, 'Gradient', 'gradient')
	RectanglePrototype.toString = function() {
		return "Rectangle (color: " + this.color + ", width: " + this.width + ", height: " + this.height + ", x: " + this.x + ", y: " + this.y + ")"
	}
	_globals.core._protoOnChanged(RectanglePrototype, 'color', function(value) {
		this.style('background-color', _globals.core.Color.normalize(value))
	})

//=====[component src.ErrorRect]=====================

	var ErrorRectBaseComponent = _globals.core.Rectangle
	var ErrorRectBasePrototype = ErrorRectBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Rectangle}
 */
	var ErrorRectComponent = _globals.src.ErrorRect = function(parent, row) {
		ErrorRectBaseComponent.apply(this, arguments)

	}
	var ErrorRectPrototype = ErrorRectComponent.prototype = Object.create(ErrorRectBasePrototype)

	ErrorRectPrototype.constructor = ErrorRectComponent

	ErrorRectPrototype.componentName = 'src.ErrorRect'

	ErrorRectPrototype.$c = function($c) {
		var $this = this;
		ErrorRectBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Text($this)
		$c._this$child0 = _this$child0

//creating component Text
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
		$this._setId('errorRect')
	}
	ErrorRectPrototype.$s = function($c) {
		var $this = this;
	ErrorRectBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning color to ('darkred')
			$this._removeUpdater('color'); $this.color = ('darkred');
//assigning visible to (false)
			$this._removeUpdater('visible'); $this.visible = (false);
//assigning fixed to (true)
			$this._removeUpdater('fixed'); $this.fixed = (true);
//assigning anchors.fill to (${parent})
			$this.anchors._removeUpdater('fill'); $this.anchors.fill = ($this.parent);

//setting up component Text
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning color to ('white')
			_this$child0._removeUpdater('color'); _this$child0.color = ('white');
//assigning text to ('Internet error<br>Please, reload page')
			_this$child0._removeUpdater('text'); _this$child0.text = ('Internet error<br>Please, reload page');
//assigning font.bold to (true)
			_this$child0.font._removeUpdater('bold'); _this$child0.font.bold = (true);
//assigning verticalAlignment to (_globals.core.Text.prototype.AlignVCenter)
			_this$child0._removeUpdater('verticalAlignment'); _this$child0.verticalAlignment = (_globals.core.Text.prototype.AlignVCenter);
//assigning wrapMode to (_globals.core.Text.prototype.WordWrap)
			_this$child0._removeUpdater('wrapMode'); _this$child0.wrapMode = (_globals.core.Text.prototype.WordWrap);
//assigning font.pixelSize to (30)
			_this$child0.font._removeUpdater('pixelSize'); _this$child0.font.pixelSize = (30);
//assigning horizontalAlignment to (_globals.core.Text.prototype.AlignHCenter)
			_this$child0._removeUpdater('horizontalAlignment'); _this$child0.horizontalAlignment = (_globals.core.Text.prototype.AlignHCenter);
//assigning anchors.fill to (${parent})
			_this$child0.anchors._removeUpdater('fill'); _this$child0.anchors.fill = (_this$child0.parent);
}


//=====[component core.Model]=====================

	var ModelBaseComponent = _globals.core.Object
	var ModelBasePrototype = ModelBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var ModelComponent = _globals.core.Model = function(parent, row) {
		ModelBaseComponent.apply(this, arguments)

	}
	var ModelPrototype = ModelComponent.prototype = Object.create(ModelBasePrototype)

	ModelPrototype.constructor = ModelComponent

	ModelPrototype.componentName = 'core.Model'
	ModelPrototype.reset = _globals.core.createSignal('reset')
	ModelPrototype.rowsChanged = _globals.core.createSignal('rowsChanged')
	ModelPrototype.rowsRemoved = _globals.core.createSignal('rowsRemoved')
	ModelPrototype.rowsInserted = _globals.core.createSignal('rowsInserted')
	core.addProperty(ModelPrototype, 'int', 'count')

//=====[component controls.core.PlaceHolder]=====================

	var PlaceHolderBaseComponent = _globals.core.Object
	var PlaceHolderBasePrototype = PlaceHolderBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var PlaceHolderComponent = _globals.controls.core.PlaceHolder = function(parent, row) {
		PlaceHolderBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._placeholderClass = '' }

	}
	var PlaceHolderPrototype = PlaceHolderComponent.prototype = Object.create(PlaceHolderBasePrototype)

	PlaceHolderPrototype.constructor = PlaceHolderComponent

	PlaceHolderPrototype.componentName = 'controls.core.PlaceHolder'
	core.addProperty(PlaceHolderPrototype, 'string', 'text')
	core.addProperty(PlaceHolderPrototype, 'Color', 'color')
	core.addProperty(PlaceHolderPrototype, 'Font', 'font')
	PlaceHolderPrototype.getClass = function() {
		var cls
		if (!this._placeholderClass) {
			cls = this._placeholderClass = this._context.stylesheet.allocateClass('input')
			this.parent.element.addClass(cls)
		}
		else
			cls = this._placeholderClass
		return cls
	}
	PlaceHolderPrototype.setPlaceholderColor = function(color) {
		var cls = this.getClass()

		var rgba = new _globals.core.Color(color).rgba()
		//fixme: port to modernizr
		var selectors = ['::-webkit-input-placeholder', '::-moz-placeholder', ':-moz-placeholder', ':-ms-input-placeholder']
		selectors.forEach(function(selector) {
			try {
				this._context.stylesheet._addRule('.' + cls + selector, 'color: ' + rgba)
				log('added rule for .' + cls + selector)
			} catch(ex) {
				//log(ex)
			}
		}.bind(this))
	}
	_globals.core._protoOnChanged(PlaceHolderPrototype, 'text', function(value) { this.parent.element.setAttribute('placeholder', value) })
	_globals.core._protoOnChanged(PlaceHolderPrototype, 'color', function(value) { this.setPlaceholderColor(value) })

	PlaceHolderPrototype.$c = function($c) {
		var $this = this;
		PlaceHolderBasePrototype.$c.call(this, $c.$b = { })
//creating component controls.core.<anonymous>
		var _this$font = new _globals.controls.core.PlaceholderFont($this)
		$c._this$font = _this$font

//creating component PlaceholderFont
		_this$font.$c($c.$c$_this$font = { })

		$this.font = _this$font
	}
	PlaceHolderPrototype.$s = function($c) {
		var $this = this;
	PlaceHolderBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component PlaceholderFont
			var _this$font = $c._this$font
			_this$font.$s($c.$c$_this$font)
			delete $c.$c$_this$font
}


//=====[component controls.experiment.AbstractButton]=====================

	var AbstractButtonBaseComponent = _globals.core.Rectangle
	var AbstractButtonBasePrototype = AbstractButtonBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Rectangle}
 */
	var AbstractButtonComponent = _globals.controls.experiment.AbstractButton = function(parent, row) {
		AbstractButtonBaseComponent.apply(this, arguments)
	//custom constructor:
	{
	//	this.element.dom.onmousedown = context.wrapNativeCallback(function(e) { log(e) }.bind(this))
	}

	}
	var AbstractButtonPrototype = AbstractButtonComponent.prototype = Object.create(AbstractButtonBasePrototype)

	AbstractButtonPrototype.constructor = AbstractButtonComponent

	AbstractButtonPrototype.componentName = 'controls.experiment.AbstractButton'
	AbstractButtonPrototype.clicked = _globals.core.createSignal('clicked')
	core.addProperty(AbstractButtonPrototype, 'string', 'text')
	core.addProperty(AbstractButtonPrototype, 'bool', 'enabled', (true))
	core.addProperty(AbstractButtonPrototype, 'int', 'spacing', (5))
	core.addProperty(AbstractButtonPrototype, 'Object', 'colors')
	core.addProperty(AbstractButtonPrototype, 'Object', 'icon')
/** @const @type {number} */
	AbstractButtonPrototype.None = 0
/** @const @type {number} */
	AbstractButtonComponent.None = 0
/** @const @type {number} */
	AbstractButtonPrototype.Center = 1
/** @const @type {number} */
	AbstractButtonComponent.Center = 1
/** @const @type {number} */
	AbstractButtonPrototype.Left = 2
/** @const @type {number} */
	AbstractButtonComponent.Left = 2
/** @const @type {number} */
	AbstractButtonPrototype.Right = 3
/** @const @type {number} */
	AbstractButtonComponent.Right = 3
	core.addProperty(AbstractButtonPrototype, 'enum', 'position', AbstractButtonComponent.Center)

	AbstractButtonPrototype.$c = function($c) {
		var $this = this;
		AbstractButtonBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Row($this)
		$c._this$child0 = _this$child0

//creating component Row
		_this$child0.$c($c.$c$_this$child0 = { })
		var _this_child0$child0 = new _globals.core.Image(_this$child0)
		$c._this_child0$child0 = _this_child0$child0

//creating component Image
		_this_child0$child0.$c($c.$c$_this_child0$child0 = { })

		_this$child0.addChild(_this_child0$child0)
		var _this_child0$child1 = new _globals.core.Text(_this$child0)
		$c._this_child0$child1 = _this_child0$child1

//creating component Text
		_this_child0$child1.$c($c.$c$_this_child0$child1 = { })
		_this_child0$child1._setId('privateAbstractButtonText')
		_this$child0.addChild(_this_child0$child1)
		_this$child0._setId('privateAbstractButtonRow')
		$this.addChild(_this$child0)
		var _this$child1 = new _globals.core.MousePressMixin($this)
		$c._this$child1 = _this$child1

//creating component MousePressMixin
		_this$child1.$c($c.$c$_this$child1 = { })
		_this$child1._setId('privateAbstractButtonPress')
		$this.addChild(_this$child1)
		var _this$child2 = new _globals.core.HoverMixin($this)
		$c._this$child2 = _this$child2

//creating component HoverMixin
		_this$child2.$c($c.$c$_this$child2 = { })
		_this$child2._setId('privateAbstractButtonHover')
		$this.addChild(_this$child2)
//creating component controls.experiment.<anonymous>
		var _this$colors = new _globals.core.Object($this)
		$c._this$colors = _this$colors

//creating component Object
		_this$colors.$c($c.$c$_this$colors = { })
	core.addProperty(_this$colors, 'string', 'pressed', ("darkgray"))
	core.addProperty(_this$colors, 'string', 'hovered', ("lightgray"))
	core.addProperty(_this$colors, 'string', 'default', ("transparent"))
	core.addProperty(_this$colors, 'string', 'text', ("black"))
		_this$colors._setId('privateAbstractButtonColor')
		$this.colors = _this$colors
		$this._setId('privateAbstractButton')
//creating component controls.experiment.<anonymous>
		var _this$icon = new _globals.core.Object($this)
		$c._this$icon = _this$icon

//creating component Object
		_this$icon.$c($c.$c$_this$icon = { })
	core.addProperty(_this$icon, 'string', 'source')
	core.addProperty(_this$icon, 'int', 'width')
	core.addProperty(_this$icon, 'int', 'height', (0))
	core.addProperty(_this$icon, 'real', 'opacity', (1))
		_this$icon._setId('privateAbstractButtonIcon')
		$this.icon = _this$icon
		core.addAliasProperty($this, 'font', function() { return $this._get('privateAbstractButtonText') }, 'font')
		core.addAliasProperty($this, 'pressed', function() { return $this._get('privateAbstractButtonPress') }, 'pressed')
		core.addAliasProperty($this, 'hovered', function() { return $this._get('privateAbstractButtonHover') }, 'value')
	}
	AbstractButtonPrototype.$s = function($c) {
		var $this = this;
	AbstractButtonBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning color to (${hovered} && ${enabled} ? (${pressed} ? ${colors.pressed} : ${colors.hovered}) : ${colors.default})
			$this._replaceUpdater('color', function() { $this.color = ($this.hovered && $this.enabled ? ($this.pressed ? $this.colors.pressed : $this.colors.hovered) : $this.colors.default) }, [$this,'enabled',$this.colors,'pressed',$this,'hovered',$this.colors,'default',$this.colors,'hovered',$this,'pressed'])
//assigning height to (45)
			$this._removeUpdater('height'); $this.height = (45);
//assigning width to (${privateAbstractButtonRow.width} + 15)
			$this._replaceUpdater('width', function() { $this.width = ($this._get('privateAbstractButtonRow').width + 15) }, [$this._get('privateAbstractButtonRow'),'width'])

//setting up component Object
			var _this$colors = $c._this$colors
			_this$colors.$s($c.$c$_this$colors)
			delete $c.$c$_this$colors



//setting up component Object
			var _this$icon = $c._this$icon
			_this$icon.$s($c.$c$_this$icon)
			delete $c.$c$_this$icon

//assigning width to (${parent.height})
			_this$icon._replaceUpdater('width', function() { _this$icon.width = (_this$icon.parent.height) }, [_this$icon.parent,'height'])


//setting up component Row
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning anchors.rightMargin to (7)
			_this$child0.anchors._removeUpdater('rightMargin'); _this$child0.anchors.rightMargin = (7);
//assigning anchors.verticalCenter to (${privateAbstractButton.position} !== ${parent.Center} ? ${parent.verticalCenter} : null)
			_this$child0.anchors._replaceUpdater('verticalCenter', function() { _this$child0.anchors.verticalCenter = (_this$child0._get('privateAbstractButton').position !== _this$child0.parent.Center ? _this$child0.parent.verticalCenter : null) }, [_this$child0.parent,'verticalCenter',_this$child0.parent,'Center',_this$child0._get('privateAbstractButton'),'position'])
//assigning spacing to (! ${privateAbstractButtonText.text} || ! ${privateAbstractButtonIcon.source} ? 0 : ${privateAbstractButton.spacing})
			_this$child0._replaceUpdater('spacing', function() { _this$child0.spacing = (! _this$child0._get('privateAbstractButtonText').text || ! _this$child0._get('privateAbstractButtonIcon').source ? 0 : _this$child0._get('privateAbstractButton').spacing) }, [_this$child0._get('privateAbstractButtonText'),'text',_this$child0._get('privateAbstractButtonIcon'),'source',_this$child0._get('privateAbstractButton'),'spacing'])
//assigning anchors.leftMargin to (7)
			_this$child0.anchors._removeUpdater('leftMargin'); _this$child0.anchors.leftMargin = (7);
//assigning anchors.right to (${privateAbstractButton.position} === ${parent.Right} ? ${parent.right} : null)
			_this$child0.anchors._replaceUpdater('right', function() { _this$child0.anchors.right = (_this$child0._get('privateAbstractButton').position === _this$child0.parent.Right ? _this$child0.parent.right : null) }, [_this$child0.parent,'Right',_this$child0.parent,'right',_this$child0._get('privateAbstractButton'),'position'])
//assigning anchors.centerIn to (${privateAbstractButton.position} === ${parent.Center} ? ${parent} : null)
			_this$child0.anchors._replaceUpdater('centerIn', function() { _this$child0.anchors.centerIn = (_this$child0._get('privateAbstractButton').position === _this$child0.parent.Center ? _this$child0.parent : null) }, [_this$child0.parent,'Center',_this$child0._get('privateAbstractButton'),'position'])
//assigning anchors.left to (${privateAbstractButton.position} === ${parent.Left} ? ${parent.left} : null)
			_this$child0.anchors._replaceUpdater('left', function() { _this$child0.anchors.left = (_this$child0._get('privateAbstractButton').position === _this$child0.parent.Left ? _this$child0.parent.left : null) }, [_this$child0.parent,'Left',_this$child0._get('privateAbstractButton'),'position',_this$child0.parent,'left'])

//setting up component Image
			var _this_child0$child0 = $c._this_child0$child0
			_this_child0$child0.$s($c.$c$_this_child0$child0)
			delete $c.$c$_this_child0$child0

//assigning opacity to (${privateAbstractButtonIcon.opacity})
			_this_child0$child0._replaceUpdater('opacity', function() { _this_child0$child0.opacity = (_this_child0$child0._get('privateAbstractButtonIcon').opacity) }, [_this_child0$child0._get('privateAbstractButtonIcon'),'opacity'])
//assigning source to (${privateAbstractButtonIcon.source})
			_this_child0$child0._replaceUpdater('source', function() { _this_child0$child0.source = (_this_child0$child0._get('privateAbstractButtonIcon').source) }, [_this_child0$child0._get('privateAbstractButtonIcon'),'source'])
//assigning anchors.verticalCenter to (${parent.verticalCenter})
			_this_child0$child0.anchors._replaceUpdater('verticalCenter', function() { _this_child0$child0.anchors.verticalCenter = (_this_child0$child0.parent.verticalCenter) }, [_this_child0$child0.parent,'verticalCenter'])
//assigning height to (${privateAbstractButtonIcon.height} ? ${privateAbstractButtonIcon.height} : ${source} ? ${sourceHeight} : 0)
			_this_child0$child0._replaceUpdater('height', function() { _this_child0$child0.height = (_this_child0$child0._get('privateAbstractButtonIcon').height ? _this_child0$child0._get('privateAbstractButtonIcon').height : _this_child0$child0.source ? _this_child0$child0.sourceHeight : 0) }, [_this_child0$child0,'sourceHeight',_this_child0$child0._get('privateAbstractButtonIcon'),'height',_this_child0$child0,'source'])
//assigning width to (${source} ? ${privateAbstractButtonIcon.width} : 0)
			_this_child0$child0._replaceUpdater('width', function() { _this_child0$child0.width = (_this_child0$child0.source ? _this_child0$child0._get('privateAbstractButtonIcon').width : 0) }, [_this_child0$child0._get('privateAbstractButtonIcon'),'width',_this_child0$child0,'source'])
//assigning fillMode to (${privateAbstractButtonIcon.height} ? _globals.core.Image.prototype.Stretch : _globals.core.Image.prototype.PreserveAspectFit)
			_this_child0$child0._replaceUpdater('fillMode', function() { _this_child0$child0.fillMode = (_this_child0$child0._get('privateAbstractButtonIcon').height ? _globals.core.Image.prototype.Stretch : _globals.core.Image.prototype.PreserveAspectFit) }, [_this_child0$child0._get('privateAbstractButtonIcon'),'height'])


//setting up component Text
			var _this_child0$child1 = $c._this_child0$child1
			_this_child0$child1.$s($c.$c$_this_child0$child1)
			delete $c.$c$_this_child0$child1

//assigning color to (${privateAbstractButtonColor.text})
			_this_child0$child1._replaceUpdater('color', function() { _this_child0$child1.color = (_this_child0$child1._get('privateAbstractButtonColor').text) }, [_this_child0$child1._get('privateAbstractButtonColor'),'text'])
//assigning text to (${privateAbstractButton.text})
			_this_child0$child1._replaceUpdater('text', function() { _this_child0$child1.text = (_this_child0$child1._get('privateAbstractButton').text) }, [_this_child0$child1._get('privateAbstractButton'),'text'])
//assigning anchors.verticalCenter to (${parent.verticalCenter})
			_this_child0$child1.anchors._replaceUpdater('verticalCenter', function() { _this_child0$child1.anchors.verticalCenter = (_this_child0$child1.parent.verticalCenter) }, [_this_child0$child1.parent,'verticalCenter'])



//setting up component MousePressMixin
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1

			_this$child1.onChanged('pressed', function(value) {
			if (value) this.parent.clicked()
		}.bind(_this$child1))


//setting up component HoverMixin
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2

//assigning cursor to ("pointer")
			_this$child2._removeUpdater('cursor'); _this$child2.cursor = ("pointer");
}


//=====[component src.Components.LanguageButton]=====================

	var LanguageButtonBaseComponent = _globals.controls.experiment.AbstractButton
	var LanguageButtonBasePrototype = LanguageButtonBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.experiment.AbstractButton}
 */
	var LanguageButtonComponent = _globals.src.Components.LanguageButton = function(parent, row) {
		LanguageButtonBaseComponent.apply(this, arguments)

	}
	var LanguageButtonPrototype = LanguageButtonComponent.prototype = Object.create(LanguageButtonBasePrototype)

	LanguageButtonPrototype.constructor = LanguageButtonComponent

	LanguageButtonPrototype.componentName = 'src.Components.LanguageButton'
	core.addProperty(LanguageButtonPrototype, 'string', 'lang')
	_globals.core._protoOnChanged(LanguageButtonPrototype, 'lang', function(value) {
	var localStorage = this._get('localStorage', true), context = this._get('context', true)

        log('lang', value)
        context.language = value
        localStorage.set('lang', value, function(err) {
            log('lang error', err)
        })
    })
	_globals.core._protoOn(LanguageButtonPrototype, 'clicked', function() {
	var context = this._get('context', true)

        // this.lang = this.lang === 'en' ? 'ru' : 'en'
        log('set lang', context.language)
        context.language = 'uk'
    })

	LanguageButtonPrototype.$c = function($c) {
		var $this = this;
		LanguageButtonBasePrototype.$c.call(this, $c.$b = { })

	}
	LanguageButtonPrototype.$s = function($c) {
		var $this = this;
	LanguageButtonBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning text to (${lang} === 'en' ? 'Русский' : 'English')
			$this._replaceUpdater('text', function() { $this.text = ($this.lang === 'en' ? 'Русский' : 'English') }, [$this,'lang'])
}


//=====[component core.MousePressMixin]=====================

	var MousePressMixinBaseComponent = _globals.core.Object
	var MousePressMixinBasePrototype = MousePressMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var MousePressMixinComponent = _globals.core.MousePressMixin = function(parent, row) {
		MousePressMixinBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element = this.parent.element;
		this._bindPress(this.enabled)
	}

	}
	var MousePressMixinPrototype = MousePressMixinComponent.prototype = Object.create(MousePressMixinBasePrototype)

	MousePressMixinPrototype.constructor = MousePressMixinComponent

	MousePressMixinPrototype.componentName = 'core.MousePressMixin'
	core.addProperty(MousePressMixinPrototype, 'bool', 'enabled', (true))
	core.addProperty(MousePressMixinPrototype, 'bool', 'pressed')
	MousePressMixinPrototype._bindPress = function(value) {
		if (value && !this._mpmPressBinder) {
			this._mpmPressBinder = new _globals.core.EventBinder(this.element)
			this._mpmPressBinder.on('mousedown',	function() { this.pressed = true }.bind(this))
			this._mpmPressBinder.on('mouseup',		function() { this.pressed = false }.bind(this))
			this._mpmPressBinder.on('mouseleave',	function() { this.pressed = false }.bind(this))
		}
		if (this._mpmPressBinder)
			this._mpmPressBinder.enable(value)
	}
	_globals.core._protoOnChanged(MousePressMixinPrototype, 'enabled', function(value) {
		this._bindPress(value)
	})

//=====[component controls.web.Button]=====================

	var ButtonBaseComponent = _globals.core.Rectangle
	var ButtonBasePrototype = ButtonBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Rectangle}
 */
	var ButtonComponent = _globals.controls.web.Button = function(parent, row) {
		ButtonBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var self = this
		this.element.on('click', function() { self.clicked() })
	}

	}
	var ButtonPrototype = ButtonComponent.prototype = Object.create(ButtonBasePrototype)

	ButtonPrototype.constructor = ButtonComponent

	ButtonPrototype.componentName = 'controls.web.Button'
	ButtonPrototype.clicked = _globals.core.createSignal('clicked')
	core.addProperty(ButtonPrototype, 'string', 'text')
	core.addProperty(ButtonPrototype, 'Font', 'font')
	core.addProperty(ButtonPrototype, 'Paddings', 'paddings')
	core.addProperty(ButtonPrototype, 'HoverMixin', 'hover')
	core.addProperty(ButtonPrototype, 'color', 'textColor')
	core.addProperty(ButtonPrototype, 'int', 'paintedWidth')
	core.addProperty(ButtonPrototype, 'int', 'paintedHeight')
	ButtonPrototype._updateSize = function() {
		this.style({ width: 'auto', height: 'auto'}) //no need to reset it to width, it's already there

		this.paintedWidth = this.element.dom.scrollWidth
		this.paintedHeight = this.element.dom.scrollHeight

		this.style({ width: this.width, height: this.height })
	}
	ButtonPrototype.getTag = function() { return 'button' }
	ButtonPrototype.registerStyle = function(style,tag) {
		style.addRule(tag, "position: absolute; visibility: inherit; text-decoration: none; border: none; outline: none; box-sizing: content-box;")
	}
	_globals.core._protoOnChanged(ButtonPrototype, 'text', function(value) { this.element.setHtml(value, this); this._updateSize(); })
	_globals.core._protoOnChanged(ButtonPrototype, 'height', function(value) { this.style("height", value ); })
	_globals.core._protoOnChanged(ButtonPrototype, 'width', function(value) { this.style("width", value); })
	_globals.core._protoOnChanged(ButtonPrototype, 'textColor', function(value) { this.style('color', _globals.core.Color.normalize(value)); })

	ButtonPrototype.$c = function($c) {
		var $this = this;
		ButtonBasePrototype.$c.call(this, $c.$b = { })
//creating component controls.web.<anonymous>
		var _this$hover = new _globals.core.HoverMixin($this)
		$c._this$hover = _this$hover

//creating component HoverMixin
		_this$hover.$c($c.$c$_this$hover = { })

		$this.hover = _this$hover
//creating component controls.web.<anonymous>
		var _this$font = new _globals.core.Font($this)
		$c._this$font = _this$font

//creating component Font
		_this$font.$c($c.$c$_this$font = { })

		$this.font = _this$font
//creating component controls.web.<anonymous>
		var _this$paddings = new _globals.controls.core.Paddings($this)
		$c._this$paddings = _this$paddings

//creating component Paddings
		_this$paddings.$c($c.$c$_this$paddings = { })

		$this.paddings = _this$paddings
	}
	ButtonPrototype.$s = function($c) {
		var $this = this;
	ButtonBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (${paintedWidth})
			$this._replaceUpdater('width', function() { $this.width = ($this.paintedWidth) }, [$this,'paintedWidth'])

//setting up component HoverMixin
			var _this$hover = $c._this$hover
			_this$hover.$s($c.$c$_this$hover)
			delete $c.$c$_this$hover

//assigning cursor to ("pointer")
			_this$hover._removeUpdater('cursor'); _this$hover.cursor = ("pointer");


//setting up component Font
			var _this$font = $c._this$font
			_this$font.$s($c.$c$_this$font)
			delete $c.$c$_this$font



//setting up component Paddings
			var _this$paddings = $c._this$paddings
			_this$paddings.$s($c.$c$_this$paddings)
			delete $c.$c$_this$paddings


//assigning height to (${paintedHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.paintedHeight) }, [$this,'paintedHeight'])
}


//=====[component controls.experiment.TextInputMaterial]=====================

	var TextInputMaterialBaseComponent = _globals.core.Item
	var TextInputMaterialBasePrototype = TextInputMaterialBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var TextInputMaterialComponent = _globals.controls.experiment.TextInputMaterial = function(parent, row) {
		TextInputMaterialBaseComponent.apply(this, arguments)

	}
	var TextInputMaterialPrototype = TextInputMaterialComponent.prototype = Object.create(TextInputMaterialBasePrototype)

	TextInputMaterialPrototype.constructor = TextInputMaterialComponent

	TextInputMaterialPrototype.componentName = 'controls.experiment.TextInputMaterial'
	core.addProperty(TextInputMaterialPrototype, 'var', 'textInput')
	core.addProperty(TextInputMaterialPrototype, 'Color', 'materialColor', ("#009688"))
	_globals.core._protoOnChanged(TextInputMaterialPrototype, 'materialColor', function(value) {
	var ti = this._get('ti', true)

	//	ti.style('caret-color', _globals.core.Color.normalize(this.materialColor))
	})

	TextInputMaterialPrototype.$c = function($c) {
		var $this = this;
		TextInputMaterialBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.controls.input.TextInput($this)
		$c._this$child0 = _this$child0

//creating component TextInput
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('ti')
		$this.addChild(_this$child0)
		var _this$child1 = new _globals.core.Rectangle($this)
		$c._this$child1 = _this$child1

//creating component Rectangle
		_this$child1.$c($c.$c$_this$child1 = { })

		$this.addChild(_this$child1)
		var _this$child2 = new _globals.core.HoverMixin($this)
		$c._this$child2 = _this$child2

//creating component HoverMixin
		_this$child2.$c($c.$c$_this$child2 = { })
		_this$child2._setId('hover')
		$this.addChild(_this$child2)
		core.addAliasProperty($this, 'echoMode', function() { return $this._get('ti') }, 'echoMode')
		core.addAliasProperty($this, 'color', function() { return $this._get('ti') }, 'color')
		core.addAliasProperty($this, 'text', function() { return $this._get('ti') }, 'text')
		core.addAliasProperty($this, 'enabled', function() { return $this._get('ti') }, 'enabled')
		core.addAliasProperty($this, 'font', function() { return $this._get('ti') }, 'font')
		core.addAliasProperty($this, 'placeholder', function() { return $this._get('ti') }, 'placeholder')
	}
	TextInputMaterialPrototype.$s = function($c) {
		var $this = this;
	TextInputMaterialBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (120)
			$this._removeUpdater('width'); $this.width = (120);
//assigning textInput to (${ti})
			$this._replaceUpdater('textInput', function() { $this.textInput = ($this._get('ti')) }, [$this,'ti'])
//assigning height to (${ti.height} + 15)
			$this._replaceUpdater('height', function() { $this.height = ($this._get('ti').height + 15) }, [$this._get('ti'),'height'])

//setting up component TextInput
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning font.pixelSize to (16)
			_this$child0.font._removeUpdater('pixelSize'); _this$child0.font.pixelSize = (16);
//assigning width to ((${parent.width}))
			_this$child0._replaceUpdater('width', function() { _this$child0.width = ((_this$child0.parent.width)) }, [_this$child0.parent,'width'])
//assigning height to (${font.pixelSize} * 1.4)
			_this$child0._replaceUpdater('height', function() { _this$child0.height = (_this$child0.font.pixelSize * 1.4) }, [_this$child0.font,'pixelSize'])


//setting up component Rectangle
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1

//assigning height to (${hover.value} || ${ti.focused} ? 2 : 1)
			_this$child1._replaceUpdater('height', function() { _this$child1.height = (_this$child1._get('hover').value || _this$child1._get('ti').focused ? 2 : 1) }, [_this$child1._get('hover'),'value',_this$child1._get('ti'),'focused'])
//assigning width to ((${parent.width}))
			_this$child1._replaceUpdater('width', function() { _this$child1.width = ((_this$child1.parent.width)) }, [_this$child1.parent,'width'])
//assigning anchors.bottomMargin to (8 + ${ti.font.pixelSize} * 0.1)
			_this$child1.anchors._replaceUpdater('bottomMargin', function() { _this$child1.anchors.bottomMargin = (8 + _this$child1._get('ti').font.pixelSize * 0.1) }, [_this$child1._get('ti').font,'pixelSize'])
//assigning color to (${hover.value} ? ! ${ti.enabled} ? "gray" : (${ti.focused} ? ${parent.materialColor} : "black") : ! ${ti.enabled} ? "gray" : (${ti.focused} ? ${parent.materialColor} : "gray"))
			_this$child1._replaceUpdater('color', function() { _this$child1.color = (_this$child1._get('hover').value ? ! _this$child1._get('ti').enabled ? "gray" : (_this$child1._get('ti').focused ? _this$child1.parent.materialColor : "black") : ! _this$child1._get('ti').enabled ? "gray" : (_this$child1._get('ti').focused ? _this$child1.parent.materialColor : "gray")) }, [_this$child1._get('hover'),'value',_this$child1._get('ti'),'focused',_this$child1._get('ti'),'enabled',_this$child1.parent,'materialColor'])
//assigning anchors.bottom to (${parent.bottom})
			_this$child1.anchors._replaceUpdater('bottom', function() { _this$child1.anchors.bottom = (_this$child1.parent.bottom) }, [_this$child1.parent,'bottom'])


//setting up component HoverMixin
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2
}


//=====[component core.Font]=====================

	var FontBaseComponent = _globals.core.Object
	var FontBasePrototype = FontBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var FontComponent = _globals.core.Font = function(parent, row) {
		FontBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._disabledFontChanged = true
		this.pointSize = Math.round(this.pixelSize * 0.75 * 4) / 4;
		this._disabledFontChanged = false
	}

	}
	var FontPrototype = FontComponent.prototype = Object.create(FontBasePrototype)

	FontPrototype.constructor = FontComponent

	FontPrototype.componentName = 'core.Font'
	core.addProperty(FontPrototype, 'bool', 'bold')
	core.addProperty(FontPrototype, 'string', 'family', ($manifest$style$font$family))
	core.addProperty(FontPrototype, 'bool', 'italic')
	core.addProperty(FontPrototype, 'bool', 'kerning', (true))
	core.addProperty(FontPrototype, 'real', 'letterSpacing')
	core.addProperty(FontPrototype, 'bool', 'overline')
	core.addProperty(FontPrototype, 'int', 'pixelSize', ($manifest$style$font$pixelSize))
	core.addProperty(FontPrototype, 'real', 'pointSize')
	core.addProperty(FontPrototype, 'bool', 'strike')
	core.addProperty(FontPrototype, 'bool', 'strikeout')
	core.addProperty(FontPrototype, 'bool', 'underline')
	core.addProperty(FontPrototype, 'int', 'weight')
	core.addProperty(FontPrototype, 'real', 'wordSpacing')
	core.addProperty(FontPrototype, 'real', 'lineHeight', ($manifest$style$font$lineHeight))
/** @const @type {number} */
	FontPrototype.MixedCase = 0
/** @const @type {number} */
	FontComponent.MixedCase = 0
/** @const @type {number} */
	FontPrototype.AllUppercase = 1
/** @const @type {number} */
	FontComponent.AllUppercase = 1
/** @const @type {number} */
	FontPrototype.AllLowercase = 2
/** @const @type {number} */
	FontComponent.AllLowercase = 2
/** @const @type {number} */
	FontPrototype.SmallCaps = 3
/** @const @type {number} */
	FontComponent.SmallCaps = 3
/** @const @type {number} */
	FontPrototype.Capitalize = 4
/** @const @type {number} */
	FontComponent.Capitalize = 4
	core.addProperty(FontPrototype, 'enum', 'capitalization')
	FontPrototype.toString = function() {
		return "Font (family: " + this.family + ", " + this.pixelSize + "px, " + this.pointSize + "pt)"
	}
	FontPrototype._updateParentSize = function() {
		this.parent._updateSize()
		if (this.parent.fontChanged)
			this.parent.fontChanged()
	}
	FontPrototype._updateTextDecoration = function() {
		var decoration = (this.underline ? ' underline' : '')
			+ (this.overline ? ' overline' : '')
			+ (this.strike || this.strikeout ? ' line-through' : '')
		this.parent.style('text-decoration', decoration)
		this._updateParentSize()
	}
	_globals.core._protoOnChanged(FontPrototype, 'pixelSize', function(value) {
		if (this._disabledFontChanged) return
 		if (value <= 0) {
 			console.warn("Pixel size <= 0, must be greater than 0")
 			this._disabledFontChanged = true
 			this.pixelSize = Math.round(this.pointSize * 1.32)
 			this._disabledFontChanged = false
 			return
 		}
 		this._disabledFontChanged = true
		this.pointSize = Math.round(value * 0.75 * 4) / 4;
		this._disabledFontChanged = false
		this.parent.style('font-size', value > 0 ? value + 'px': '');
		this._updateParentSize()
	})
	_globals.core._protoOnChanged(FontPrototype, 'capitalization', function(value) {
		if (value < 0 || value > 4) {
			console.warn("Font.capitalization: Invalid property assignment: unknown enumeration")
			return
		}
		this.parent.style('text-transform', 'none');
		this.parent.style('font-variant', 'normal');
		switch(value) {
 		case this.AllUppercase: this.parent.style('text-transform', 'uppercase'); break
 		case this.AllLowercase: this.parent.style('text-transform', 'lowercase'); break
 		case this.SmallCaps: this.parent.style('font-variant', 'small-caps'); break
 		case this.Capitalize: this.parent.style('text-transform', 'capitalize'); break
 		}
 		this._updateParentSize()
	})
	_globals.core._protoOnChanged(FontPrototype, 'pointSize', function(value) {
 		if (this._disabledFontChanged) return
 		if (value <= 0) {
 			console.warn("Point size <= 0, must be greater than 0")
 			this._disabledFontChanged = true
 			this.pointSize = this.pixelSize * 0.75
 			this._disabledFontChanged = false
 			return
 		}
 		this._disabledFontChanged = true
 		this.pixelSize = Math.round(value * 1.32);
 		this._disabledFontChanged = false
 		this.parent.style('font-size', value > 0 ? value + 'pt': '');
 		this._updateParentSize()
 	})
	_globals.core._protoOnChanged(FontPrototype, 'kerning', function(value) { log("kerning", value); this.parent.style('font-kerning', value ? "auto" : "none"); this._updateParentSize() })
	var $code$0 = function(value) { this._updateTextDecoration() }
	_globals.core._protoOnChanged(FontPrototype, 'overline', $code$0)
	_globals.core._protoOnChanged(FontPrototype, 'underline', $code$0)
	_globals.core._protoOnChanged(FontPrototype, 'family', function(value) { this.parent.style('font-family', value); this._updateParentSize() })
	_globals.core._protoOnChanged(FontPrototype, 'italic', function(value) { this.parent.style('font-style', value? 'italic': 'normal'); this._updateParentSize() })
	_globals.core._protoOnChanged(FontPrototype, 'weight', function(value) { this.parent.style('font-weight', value); this._updateParentSize() })
	_globals.core._protoOnChanged(FontPrototype, 'bold', function(value) { this.parent.style('font-weight', value? 'bold': 'normal'); this._updateParentSize() })
	_globals.core._protoOnChanged(FontPrototype, 'letterSpacing', function(value) { this.parent.style('letter-spacing', value + "px"); this._updateParentSize() })
	_globals.core._protoOnChanged(FontPrototype, 'lineHeight', function(value) { this.parent.style('line-height', value); this._updateParentSize() })
	_globals.core._protoOnChanged(FontPrototype, 'wordSpacing', function(value) { this.parent.style('word-spacing', value + "px"); this._updateParentSize() })
	_globals.core._protoOnChanged(FontPrototype, 'strikeout', function(value) { this.strike = value; this._updateTextDecoration() })
	_globals.core._protoOnChanged(FontPrototype, 'strike', function(value) { this.strikeout = value; this._updateTextDecoration() })

//=====[component src.IToolBar]=====================

	var IToolBarBaseComponent = _globals.core.Rectangle
	var IToolBarBasePrototype = IToolBarBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Rectangle}
 */
	var IToolBarComponent = _globals.src.IToolBar = function(parent, row) {
		IToolBarBaseComponent.apply(this, arguments)

	}
	var IToolBarPrototype = IToolBarComponent.prototype = Object.create(IToolBarBasePrototype)

	IToolBarPrototype.constructor = IToolBarComponent

	IToolBarPrototype.componentName = 'src.IToolBar'

	IToolBarPrototype.$c = function($c) {
		var $this = this;
		IToolBarBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Text($this)
		$c._this$child0 = _this$child0

//creating component Text
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new _globals.src.Components.LanguageButton($this)
		$c._this$child1 = _this$child1

//creating component LanguageButton
		_this$child1.$c($c.$c$_this$child1 = { })

		$this.addChild(_this$child1)
		$this._setId('toolBar')
	}
	IToolBarPrototype.$s = function($c) {
		var $this = this;
	IToolBarBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning opacity to (1)
			$this._removeUpdater('opacity'); $this.opacity = (1);
//assigning fixed to (true)
			$this._removeUpdater('fixed'); $this.fixed = (true);
//assigning effects.shadow.blur to (6)
			$this.effects.shadow._removeUpdater('blur'); $this.effects.shadow.blur = (6);
//assigning height to (50)
			$this._removeUpdater('height'); $this.height = (50);
//assigning width to ((${parent.width}))
			$this._replaceUpdater('width', function() { $this.width = (($this.parent.width)) }, [$this.parent,'width'])
//assigning effects.shadow.color to ("#d3d3d3")
			$this.effects.shadow._removeUpdater('color'); $this.effects.shadow.color = ("#d3d3d3");
//assigning effects.shadow.spread to (2)
			$this.effects.shadow._removeUpdater('spread'); $this.effects.shadow.spread = (2);
//assigning z to (1)
			$this._removeUpdater('z'); $this.z = (1);
//assigning effects.shadow.x to (1)
			$this.effects.shadow._removeUpdater('x'); $this.effects.shadow.x = (1);
//assigning effects.shadow.y to (1)
			$this.effects.shadow._removeUpdater('y'); $this.effects.shadow.y = (1);

//setting up component Text
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning font.pixelSize to (${parent.height} - 25)
			_this$child0.font._replaceUpdater('pixelSize', function() { _this$child0.font.pixelSize = (_this$child0.parent.height - 25) }, [_this$child0.parent,'height'])
//assigning text to (_globals.qsTr(('Image Compressor')))
			_this$child0._replaceUpdater('text', function() { _this$child0.text = (_globals.qsTr(('Image Compressor'))) }, [_this$child0._context,'language'])
//assigning anchors.centerIn to (${parent})
			_this$child0.anchors._removeUpdater('centerIn'); _this$child0.anchors.centerIn = (_this$child0.parent);
//assigning font.bold to (true)
			_this$child0.font._removeUpdater('bold'); _this$child0.font.bold = (true);


//setting up component LanguageButton
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1
}


//=====[component core.Border]=====================

	var BorderBaseComponent = _globals.core.Object
	var BorderBasePrototype = BorderBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var BorderComponent = _globals.core.Border = function(parent, row) {
		BorderBaseComponent.apply(this, arguments)

	}
	var BorderPrototype = BorderComponent.prototype = Object.create(BorderBasePrototype)

	BorderPrototype.constructor = BorderComponent

	BorderPrototype.componentName = 'core.Border'
	core.addProperty(BorderPrototype, 'int', 'width')
	core.addProperty(BorderPrototype, 'color', 'color', ("black"))
	core.addLazyProperty(BorderPrototype, 'left', (function(__parent, __row) {
		var lazy$left = new _globals.core.BorderSide(__parent, __row)
		var $c = { lazy$left : lazy$left }

//creating component BorderSide
			lazy$left.$c($c.$c$lazy$left = { })


//setting up component BorderSide
			var lazy$left = $c.lazy$left
			lazy$left.$s($c.$c$lazy$left)
			delete $c.$c$lazy$left

//assigning name to ("left")
			lazy$left._removeUpdater('name'); lazy$left.name = ("left");


		return lazy$left
}))
	core.addLazyProperty(BorderPrototype, 'right', (function(__parent, __row) {
		var lazy$right = new _globals.core.BorderSide(__parent, __row)
		var $c = { lazy$right : lazy$right }

//creating component BorderSide
			lazy$right.$c($c.$c$lazy$right = { })


//setting up component BorderSide
			var lazy$right = $c.lazy$right
			lazy$right.$s($c.$c$lazy$right)
			delete $c.$c$lazy$right

//assigning name to ("right")
			lazy$right._removeUpdater('name'); lazy$right.name = ("right");


		return lazy$right
}))
	core.addLazyProperty(BorderPrototype, 'top', (function(__parent, __row) {
		var lazy$top = new _globals.core.BorderSide(__parent, __row)
		var $c = { lazy$top : lazy$top }

//creating component BorderSide
			lazy$top.$c($c.$c$lazy$top = { })


//setting up component BorderSide
			var lazy$top = $c.lazy$top
			lazy$top.$s($c.$c$lazy$top)
			delete $c.$c$lazy$top

//assigning name to ("top")
			lazy$top._removeUpdater('name'); lazy$top.name = ("top");


		return lazy$top
}))
	core.addLazyProperty(BorderPrototype, 'bottom', (function(__parent, __row) {
		var lazy$bottom = new _globals.core.BorderSide(__parent, __row)
		var $c = { lazy$bottom : lazy$bottom }

//creating component BorderSide
			lazy$bottom.$c($c.$c$lazy$bottom = { })


//setting up component BorderSide
			var lazy$bottom = $c.lazy$bottom
			lazy$bottom.$s($c.$c$lazy$bottom)
			delete $c.$c$lazy$bottom

//assigning name to ("bottom")
			lazy$bottom._removeUpdater('name'); lazy$bottom.name = ("bottom");


		return lazy$bottom
}))
/** @const @type {number} */
	BorderPrototype.None = 0
/** @const @type {number} */
	BorderComponent.None = 0
/** @const @type {number} */
	BorderPrototype.Hidden = 1
/** @const @type {number} */
	BorderComponent.Hidden = 1
/** @const @type {number} */
	BorderPrototype.Dotted = 2
/** @const @type {number} */
	BorderComponent.Dotted = 2
/** @const @type {number} */
	BorderPrototype.Dashed = 3
/** @const @type {number} */
	BorderComponent.Dashed = 3
/** @const @type {number} */
	BorderPrototype.Solid = 4
/** @const @type {number} */
	BorderComponent.Solid = 4
/** @const @type {number} */
	BorderPrototype.Double = 5
/** @const @type {number} */
	BorderComponent.Double = 5
/** @const @type {number} */
	BorderPrototype.Groove = 6
/** @const @type {number} */
	BorderComponent.Groove = 6
/** @const @type {number} */
	BorderPrototype.Ridge = 7
/** @const @type {number} */
	BorderComponent.Ridge = 7
/** @const @type {number} */
	BorderPrototype.Inset = 8
/** @const @type {number} */
	BorderComponent.Inset = 8
/** @const @type {number} */
	BorderPrototype.Outset = 9
/** @const @type {number} */
	BorderComponent.Outset = 9
	core.addProperty(BorderPrototype, 'enum', 'style', BorderComponent.Solid)
/** @const @type {number} */
	BorderPrototype.Inner = 0
/** @const @type {number} */
	BorderComponent.Inner = 0
/** @const @type {number} */
	BorderPrototype.Outer = 1
/** @const @type {number} */
	BorderComponent.Outer = 1
/** @const @type {number} */
	BorderPrototype.Center = 2
/** @const @type {number} */
	BorderComponent.Center = 2
	core.addProperty(BorderPrototype, 'enum', 'type')
	_globals.core._protoOnChanged(BorderPrototype, 'color', function(value) {
		var newColor = _globals.core.Color.normalize(this.color)
		this.parent.style('border-color', newColor)
	})
	_globals.core._protoOnChanged(BorderPrototype, 'width', function(value) {
		var parent = this.parent
		parent.style('border-width', value)
		if (this.type == this.Outer) {
			parent._borderXAdjust = -value
			parent._borderYAdjust = -value
			parent._setSizeAdjust()
		} else if (this.type == this.Center) {
			parent._borderXAdjust = -value / 2
			parent._borderYAdjust = -value / 2
			parent._borderWidthAdjust = -value
			parent._borderHeightAdjust = -value
			parent._setSizeAdjust()
		}
	})
	_globals.core._protoOnChanged(BorderPrototype, 'type', function(value) {
		var style
		switch(value) {
			case this.Inner:
				style = 'border-box'; break;
			case this.Outer:
			case this.Center:
				style = 'content-box'; break;
		}
		this.parent.style('box-sizing', style)
	})
	_globals.core._protoOnChanged(BorderPrototype, 'style', function(value) {
		var styleName
		switch(value) {
			case this.None: styleName = 'none'; break
			case this.Hidden: styleName = 'hidden'; break
			case this.Dotted: styleName = 'dotted'; break
			case this.Dashed: styleName = 'dashed'; break
			case this.Solid: styleName = 'solid'; break
			case this.Double: styleName = 'double'; break
			case this.Groove: styleName = 'groove'; break
			case this.Ridge: styleName = 'ridge'; break
			case this.Inset: styleName = 'inset'; break
			case this.Outset: styleName = 'outset'; break
		}

		this.parent.style('border-style', styleName)
	})

//=====[component core.Shadow]=====================

	var ShadowBaseComponent = _globals.core.Object
	var ShadowBasePrototype = ShadowBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var ShadowComponent = _globals.core.Shadow = function(parent, row) {
		ShadowBaseComponent.apply(this, arguments)

	}
	var ShadowPrototype = ShadowComponent.prototype = Object.create(ShadowBasePrototype)

	ShadowPrototype.constructor = ShadowComponent

	ShadowPrototype.componentName = 'core.Shadow'
	core.addProperty(ShadowPrototype, 'real', 'x')
	core.addProperty(ShadowPrototype, 'real', 'y')
	core.addProperty(ShadowPrototype, 'Color', 'color', ("black"))
	core.addProperty(ShadowPrototype, 'real', 'blur')
	core.addProperty(ShadowPrototype, 'real', 'spread')
	ShadowPrototype._empty = function() {
		return !this.x && !this.y && !this.blur && !this.spread;
	}
	ShadowPrototype._getFilterStyle = function() {
		var style = this.x + "px " + this.y + "px " + this.blur + "px "
		if (this.spread > 0)
			style += this.spread + "px "
		style += _globals.core.Color.normalize(this.color)
		return style
	}
	var $code$0 = function(value) {
		this.parent._updateStyle(true)
	}
	_globals.core._protoOnChanged(ShadowPrototype, 'x', $code$0)
	_globals.core._protoOnChanged(ShadowPrototype, 'spread', $code$0)
	_globals.core._protoOnChanged(ShadowPrototype, 'y', $code$0)
	_globals.core._protoOnChanged(ShadowPrototype, 'blur', $code$0)
	_globals.core._protoOnChanged(ShadowPrototype, 'color', $code$0)

//=====[component core.Timer]=====================

	var TimerBaseComponent = _globals.core.Object
	var TimerBasePrototype = TimerBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var TimerComponent = _globals.core.Timer = function(parent, row) {
		TimerBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._trigger = this._context.wrapNativeCallback(this.triggered.bind(this))
	}

	}
	var TimerPrototype = TimerComponent.prototype = Object.create(TimerBasePrototype)

	TimerPrototype.constructor = TimerComponent

	TimerPrototype.componentName = 'core.Timer'
	TimerPrototype.triggered = _globals.core.createSignal('triggered')
	core.addProperty(TimerPrototype, 'int', 'interval', (1000))
	core.addProperty(TimerPrototype, 'bool', 'repeat')
	core.addProperty(TimerPrototype, 'bool', 'running')
	core.addProperty(TimerPrototype, 'bool', 'triggeredOnStart')
	TimerPrototype._restart = function() {
		if (this._timeout) {
			clearTimeout(this._timeout);
			this._timeout = undefined;
		}
		if (this._interval) {
			clearTimeout(this._interval);
			this._interval = undefined;
		}

		if (!this.running)
			return;

		//log("starting timer", this.interval, this.repeat);
		var self = this
		var context = self._context
		if (this.repeat)
			this._interval = setInterval(this._trigger, this.interval);
		else
			this._timeout = setTimeout(this._trigger, this.interval);
	}
	TimerPrototype.__complete = function() { TimerBasePrototype.__complete.call(this)
if (this.running && this.triggeredOnStart)
			this.triggered() }
	TimerPrototype.stop = function() { this.running = false }
	TimerPrototype.start = function() { this.running = true }
	TimerPrototype.restart = function() { this.stop(); this.start(); }
	_globals.core._protoOnChanged(TimerPrototype, 'running', function(value) {
		this._restart()
		if (value && this.triggeredOnStart) {
			this._triggered = false
			this.triggered()
		}
	})
	var $code$0 = function(value) { this._restart() }
	_globals.core._protoOnChanged(TimerPrototype, 'interval', $code$0)
	_globals.core._protoOnChanged(TimerPrototype, 'repeat', $code$0)
	_globals.core._protoOn(TimerPrototype, 'triggered', function() {
		if (!this.repeat && (!this.triggeredOnStart || this._triggered))
			this.running = false
		this._triggered = true
	})

//=====[component controls.core.Activity]=====================

	var ActivityBaseComponent = _globals.controls.core.BaseActivity
	var ActivityBasePrototype = ActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.core.BaseActivity}
 */
	var ActivityComponent = _globals.controls.core.Activity = function(parent, row) {
		ActivityBaseComponent.apply(this, arguments)

	}
	var ActivityPrototype = ActivityComponent.prototype = Object.create(ActivityBasePrototype)

	ActivityPrototype.constructor = ActivityComponent

	ActivityPrototype.componentName = 'controls.core.Activity'
	core.addProperty(ActivityPrototype, 'bool', 'handleDisplay')
	ActivityPrototype.start = function() {
		if (this.handleDisplay)
			this.style('display', 'block')
		this.visible = true
		this.started()
	}
	ActivityPrototype.stop = function() {
		if (this.handleDisplay)
			this.style('display', 'none')
		this.visible = false
		this.stopped()
	}
	ActivityPrototype.getActivity = function() {
		return this
	}

//=====[component core.Effects]=====================

	var EffectsBaseComponent = _globals.core.Object
	var EffectsBasePrototype = EffectsBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var EffectsComponent = _globals.core.Effects = function(parent, row) {
		EffectsBaseComponent.apply(this, arguments)

	}
	var EffectsPrototype = EffectsComponent.prototype = Object.create(EffectsBasePrototype)

	EffectsPrototype.constructor = EffectsComponent

	EffectsPrototype.componentName = 'core.Effects'
	core.addProperty(EffectsPrototype, 'real', 'blur')
	core.addProperty(EffectsPrototype, 'real', 'grayscale')
	core.addProperty(EffectsPrototype, 'real', 'sepia')
	core.addProperty(EffectsPrototype, 'real', 'brightness')
	core.addProperty(EffectsPrototype, 'real', 'contrast')
	core.addProperty(EffectsPrototype, 'real', 'hueRotate')
	core.addProperty(EffectsPrototype, 'real', 'invert')
	core.addProperty(EffectsPrototype, 'real', 'saturate')
	core.addLazyProperty(EffectsPrototype, 'shadow', (function(__parent, __row) {
		var lazy$shadow = new _globals.core.Shadow(__parent, __row)
		var $c = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.$c($c.$c$lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = $c.lazy$shadow
			lazy$shadow.$s($c.$c$lazy$shadow)
			delete $c.$c$lazy$shadow



		return lazy$shadow
}))
	EffectsPrototype._getFilterStyle = function() {
		var style = []
		this._addStyle(style, 'blur', 'blur', 'px')
		this._addStyle(style, 'grayscale')
		this._addStyle(style, 'sepia')
		this._addStyle(style, 'brightness')
		this._addStyle(style, 'contrast')
		this._addStyle(style, 'hueRotate', 'hue-rotate', 'deg')
		this._addStyle(style, 'invert')
		this._addStyle(style, 'saturate')
		return style
	}
	EffectsPrototype._addStyle = function(array,property,style,units) {
		var value = this[property]
		if (value)
			array.push((style || property) + '(' + value + (units || '') + ') ')
	}
	EffectsPrototype._updateStyle = function(updateShadow) {
		var filterStyle = this._getFilterStyle().join('')
		var parent = this.parent
		var style = {}

		//chromium bug
		//https://github.com/Modernizr/Modernizr/issues/981
		style['-webkit-filter'] = filterStyle
		style['filter'] = filterStyle

		if (this.shadow && (!this.shadow._empty() || updateShadow))
			style['box-shadow'] = this.shadow._getFilterStyle()

		parent.style(style)
	}
	var $code$0 = function(value) { this._updateStyle() }
	_globals.core._protoOnChanged(EffectsPrototype, 'saturate', $code$0)
	_globals.core._protoOnChanged(EffectsPrototype, 'brightness', $code$0)
	_globals.core._protoOnChanged(EffectsPrototype, 'grayscale', $code$0)
	_globals.core._protoOnChanged(EffectsPrototype, 'sepia', $code$0)
	_globals.core._protoOnChanged(EffectsPrototype, 'invert', $code$0)
	_globals.core._protoOnChanged(EffectsPrototype, 'hueRotate', $code$0)
	_globals.core._protoOnChanged(EffectsPrototype, 'contrast', $code$0)
	_globals.core._protoOnChanged(EffectsPrototype, 'blur', $code$0)

//=====[component core.LocalStorage]=====================

	var LocalStorageBaseComponent = _globals.core.Object
	var LocalStorageBasePrototype = LocalStorageBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var LocalStorageComponent = _globals.core.LocalStorage = function(parent, row) {
		LocalStorageBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var backend = _globals.core.__localStorageBackend
		this.impl = backend().createLocalStorage(this)
	}

	}
	var LocalStoragePrototype = LocalStorageComponent.prototype = Object.create(LocalStorageBasePrototype)

	LocalStoragePrototype.constructor = LocalStorageComponent

	LocalStoragePrototype.componentName = 'core.LocalStorage'
	LocalStoragePrototype._ensureErrCallback = function(cb) {
		return cb || function(err) { log(err.message) }
	}
	LocalStoragePrototype._ensureCallback = function(cb,name) {
		return cb || function(val) { log("ignore value of", name, "gotten from storage:", val) }
	}
	LocalStoragePrototype._checkNameValid = function(name) {
		if (!name) throw new Error("empty name")
	}
	LocalStoragePrototype.getOrDefault = function(name,callback,defaultValue) {
		this._checkNameValid(name)
		callback = this._ensureCallback(callback, name)
		this.impl.get(name, callback, function() { callback(defaultValue) }, this)
	}
	LocalStoragePrototype.get = function(name,callback,error) {
		this._checkNameValid(name)
		this.impl.get(name, this._ensureCallback(callback, name), this._ensureErrCallback(error), this)
	}
	LocalStoragePrototype.erase = function(name,error) {
		this._checkNameValid(name)
		this.impl.erase(name, this._ensureErrCallback(error), this)
	}
	LocalStoragePrototype.set = function(name,value,error) {
		this._checkNameValid(name)
		this.impl.set(name, value, this._ensureErrCallback(error), this)
	}

//=====[component core.HoverMixin]=====================

	var HoverMixinBaseComponent = _globals.core.Object
	var HoverMixinBasePrototype = HoverMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var HoverMixinComponent = _globals.core.HoverMixin = function(parent, row) {
		HoverMixinBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element = this.parent.element;
		this.parent.style('cursor', this.cursor)
		this._bindHover(this.enabled)
	}

	}
	var HoverMixinPrototype = HoverMixinComponent.prototype = Object.create(HoverMixinBasePrototype)

	HoverMixinPrototype.constructor = HoverMixinComponent

	HoverMixinPrototype.componentName = 'core.HoverMixin'
	core.addProperty(HoverMixinPrototype, 'bool', 'value')
	core.addProperty(HoverMixinPrototype, 'bool', 'enabled', (true))
	core.addProperty(HoverMixinPrototype, 'string', 'cursor')
	HoverMixinPrototype._bindHover = function(value) {
		if (value && !this._hmHoverBinder) {
			this._hmHoverBinder = new _globals.core.EventBinder(this.parent.element)

			if (this._context.backend.capabilities.mouseEnterLeaveSupported) {
				this._hmHoverBinder.on('mouseenter', function() { this.value = true }.bind(this))
				this._hmHoverBinder.on('mouseleave', function() { this.value = false }.bind(this))
			} else {
				this._hmHoverBinder.on('mouseover', function() { this.value = true }.bind(this))
				this._hmHoverBinder.on('mouseout', function() { this.value = false }.bind(this))
			}
		}
		if (this._hmHoverBinder)
			this._hmHoverBinder.enable(value)
	}
	_globals.core._protoOnChanged(HoverMixinPrototype, 'cursor', function(value) {
	var cursor = this._get('cursor', true)

		this.parent.style('cursor', value)
	})
	_globals.core._protoOnChanged(HoverMixinPrototype, 'enabled', function(value) { this._bindHover(value) })

//=====[component src.UiCompress]=====================

	var UiCompressBaseComponent = _globals.controls.experiment.MainItem
	var UiCompressBasePrototype = UiCompressBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.experiment.MainItem}
 */
	var UiCompressComponent = _globals.src.UiCompress = function(parent, row) {
		UiCompressBaseComponent.apply(this, arguments)
	//custom constructor:
	{
        this.serverUrl = window.location.href.includes('file') ? 'http://localhost:3000/' : './'
    }

	}
	var UiCompressPrototype = UiCompressComponent.prototype = Object.create(UiCompressBasePrototype)

	UiCompressPrototype.constructor = UiCompressComponent

	UiCompressPrototype.componentName = 'src.UiCompress'
	core.addProperty(UiCompressPrototype, 'string', 'serverUrl')

	UiCompressPrototype.$c = function($c) {
		var $this = this;
		UiCompressBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.src.IToolBar($this)
		$c._this$child0 = _this$child0

//creating component IToolBar
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new _globals.src.Compressor($this)
		$c._this$child1 = _this$child1

//creating component Compressor
		_this$child1.$c($c.$c$_this$child1 = { })

		$this.addChild(_this$child1)
		var _this$child2 = new _globals.core.LocalStorage($this)
		$c._this$child2 = _this$child2

//creating component LocalStorage
		_this$child2.$c($c.$c$_this$child2 = { })
		_this$child2._setId('localStorage')
		$this.addChild(_this$child2)
		var _this$child3 = new _globals.src.ErrorRect($this)
		$c._this$child3 = _this$child3

//creating component ErrorRect
		_this$child3.$c($c.$c$_this$child3 = { })

		$this.addChild(_this$child3)
		$this._setId('webApp')
	}
	UiCompressPrototype.$s = function($c) {
		var $this = this;
	UiCompressBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning title to (_globals.qsTr(('Image Compressor')))
			$this._replaceUpdater('title', function() { $this.title = (_globals.qsTr(('Image Compressor'))) }, [$this._context,'language'])

//setting up component IToolBar
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0



//setting up component Compressor
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1

//assigning width to (((97) / 100 * ${parent.width}))
			_this$child1._replaceUpdater('width', function() { _this$child1.width = (((97) / 100 * _this$child1.parent.width)) }, [_this$child1.parent,'width'])
//assigning anchors.top to (${toolBar.bottom})
			_this$child1.anchors._replaceUpdater('top', function() { _this$child1.anchors.top = (_this$child1._get('toolBar').bottom) }, [_this$child1._get('toolBar'),'bottom'])
//assigning anchors.horizontalCenter to (${parent})
			_this$child1.anchors._removeUpdater('horizontalCenter'); _this$child1.anchors.horizontalCenter = (_this$child1.parent);
//assigning anchors.topMargin to (15)
			_this$child1.anchors._removeUpdater('topMargin'); _this$child1.anchors.topMargin = (15);
//assigning anchors.bottom to (${parent.bottom})
			_this$child1.anchors._replaceUpdater('bottom', function() { _this$child1.anchors.bottom = (_this$child1.parent.bottom) }, [_this$child1.parent,'bottom'])


//setting up component LocalStorage
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2



//setting up component ErrorRect
			var _this$child3 = $c._this$child3
			_this$child3.$s($c.$c$_this$child3)
			delete $c.$c$_this$child3

//assigning fixed to (true)
			_this$child3._removeUpdater('fixed'); _this$child3.fixed = (true);
//assigning anchors.fill to (${parent})
			_this$child3.anchors._removeUpdater('fill'); _this$child3.anchors.fill = (_this$child3.parent);
}


//=====[component core.Context]=====================

	var ContextBaseComponent = _globals.core.Item
	var ContextBasePrototype = ContextBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var ContextComponent = _globals.core.Context = function(parent, row) {
		ContextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.options = arguments[2]
		this.l10n = this.options.l10n || {}

		this._local['context'] = this
		this._context = this
		this._started = false
		this._completed = false
		this._processingActions = false
		this._delayedActions = []
		this._completedObjects = []
		this._stylesRegistered = {}
		this._asyncInvoker = _globals.core.safeCall(this, [], function (ex) { log("async action failed:", ex, ex.stack) })

		this.backend = _globals._backend()

		this._init()
		this._onCompleted(this) //my context was null at the moment of calling Object ctor

		document.documentElement.style.overflowY = 'auto'
		document.documentElement.style.overflowX = 'hidden'

		window.addEventListener('scroll', function() {
			this._updateContentScroll()
		}.bind(this))
	}

	}
	var ContextPrototype = ContextComponent.prototype = Object.create(ContextBasePrototype)

	ContextPrototype.constructor = ContextComponent

	ContextPrototype.componentName = 'core.Context'
	ContextPrototype.scrolling = _globals.core.createSignal('scrolling')
	core.addProperty(ContextPrototype, 'int', 'scrollY')
	core.addProperty(ContextPrototype, 'int', 'keyProcessDelay')
	core.addProperty(ContextPrototype, 'bool', 'fullscreen')
	core.addProperty(ContextPrototype, 'string', 'language')
	core.addProperty(ContextPrototype, 'System', 'system')
	core.addProperty(ContextPrototype, 'Location', 'location')
	core.addProperty(ContextPrototype, 'Stylesheet', 'stylesheet')
	core.addProperty(ContextPrototype, 'string', 'buildIdentifier', "Powered by PureQML No-Partnership Edition Engine")
	core.addProperty(ContextPrototype, 'bool', 'atXBeginning')
	core.addProperty(ContextPrototype, 'bool', 'atXEnd')
	core.addProperty(ContextPrototype, 'bool', 'atYBeginning')
	core.addProperty(ContextPrototype, 'bool', 'atYEnd')
	core.addProperty(ContextPrototype, 'int', 'contentX')
	core.addProperty(ContextPrototype, 'int', 'contentY')
	core.addProperty(ContextPrototype, 'int', 'contentHeight')
	core.addProperty(ContextPrototype, 'int', 'contentWidth')
	core.addProperty(ContextPrototype, 'int', 'contentMaxX')
	core.addProperty(ContextPrototype, 'int', 'contentMaxY')
/** @const @type {number} */
	ContextPrototype.ScrollBarAsNeeded = 0
/** @const @type {number} */
	ContextComponent.ScrollBarAsNeeded = 0
/** @const @type {number} */
	ContextPrototype.ScrollBarAlwaysOff = 1
/** @const @type {number} */
	ContextComponent.ScrollBarAlwaysOff = 1
/** @const @type {number} */
	ContextPrototype.ScrollBarAlwaysOn = 2
/** @const @type {number} */
	ContextComponent.ScrollBarAlwaysOn = 2
	core.addProperty(ContextPrototype, 'enum', 'horizontalScrollBarPolicy', ContextComponent.ScrollBarAlwaysOff)
/** @const @type {number} */
	ContextPrototype.ScrollBarAsNeeded = 0
/** @const @type {number} */
	ContextComponent.ScrollBarAsNeeded = 0
/** @const @type {number} */
	ContextPrototype.ScrollBarAlwaysOff = 1
/** @const @type {number} */
	ContextComponent.ScrollBarAlwaysOff = 1
/** @const @type {number} */
	ContextPrototype.ScrollBarAlwaysOn = 2
/** @const @type {number} */
	ContextComponent.ScrollBarAlwaysOn = 2
	core.addProperty(ContextPrototype, 'enum', 'verticalScrollBarPolicy')
	ContextPrototype._processActions = function() {
		if (!this._started || this._processingActions)
			return

		this._processingActions = true

		var invoker = this._asyncInvoker

		while (this._delayedActions.length || this._completedObjects.length) {
			var actions = this._delayedActions
			this._delayedActions = []
			for(var i = 0, n = actions.length; i < n; ++i)
				invoker(actions[i])

			var objects = this._completedObjects
			this._completedObjects = []
			for(var i = 0, n = objects.length; i < n; ++i) {
				var object = objects[i]
				try { object.__complete() }
				catch(ex) { log('onCompleted failed', ex, ex.stack)}
			}
		}

		this._processingActions = false
		this.backend.tick(this)
	}
	ContextPrototype._init = function() {
		log('Context: initializing...')
		new this.backend.init(this)
	}
	ContextPrototype._run = function() {
		log('Context: signalling layout')
		this.visibleInView = true
		this.newBoundingBox()
		log('Context: calling completed()')
		this._started = true
		this._processActions()
		this._completed = true
	}
	ContextPrototype.init = function() {
		this.__init()
		this.backend.initSystem(this.system)
	}
	ContextPrototype.run = function() {
		this.backend.run(this, this._run.bind(this))
	}
	ContextPrototype._updateContentScroll = function() {
		this.contentX = window.pageXOffset
		this.contentY = window.pageYOffset
		this.contentHeight = document.documentElement.scrollHeight
		this.contentWidth = document.documentElement.scrollWidth
		this.scrolling()
    }
	ContextPrototype.scheduleComplete = function() {
		this.delayedAction('completed', this, this._processActions)
	}
	ContextPrototype.__complete = function() {
	var hackScrollTimerToDelete = this._get('hackScrollTimerToDelete', true)
 ContextBasePrototype.__complete.call(this)
hackScrollTimerToDelete.start() }
	ContextPrototype.scheduleAction = function(action) {
		this._delayedActions.push(action)
	}
	ContextPrototype.wrapNativeCallback = function(callback) {
		var ctx = this
		return function() {
			try {
				var r = callback.apply(this, arguments)
				ctx._processActions()
				return r
			} catch(ex) {
				ctx._processActions()
				throw ex
			}
		}
	}
	ContextPrototype.processKey = function(event) {
		var handlers = core.forEach(this, _globals.core.Item.prototype._enqueueNextChildInFocusChain, [])
		var n = handlers.length
		for(var i = 0; i < n; ++i) {
			var handler = handlers[i]
			if (handler._processKey(event))
				return true
		}
		return false
	}
	ContextPrototype.start = function(instance) {
		this.children.push(instance)
		instance.__init()
		log('Context: created instance')
		// log('Context: calling on completed')
		return instance;
	}
	ContextPrototype.registerStyle = function(item,tag,cls) {
		cls = this.mangleClass(cls)
		var selector = cls? tag + '.' + cls: tag
		if (!(selector in this._stylesRegistered)) {
			item.registerStyle(this.stylesheet, selector)
			this._stylesRegistered[selector] = true
		}
	}
	ContextPrototype.mangleClass = function(name) {
		return $manifest$html5$prefix + name
	}
	ContextPrototype.delayedAction = function(name,self,method,delay) {
		var registry = self._registeredDelayedActions

		if (registry === undefined)
			registry = self._registeredDelayedActions = {}

		if (registry[name] === true)
			return

		registry[name] = true

		var callback = function() {
			registry[name] = false
			method.call(self)
		}

		if (delay > 0) {
			setTimeout(callback, delay)
		} else if (delay === 0) {
			this.backend.requestAnimationFrame(callback)
		} else {
			this.scheduleAction(callback)
		}
	}
	ContextPrototype._onCompleted = function(object) {
		this._completedObjects.push(object)
	}
	ContextPrototype.createElement = function(tag,cls) {
		return this.backend.createElement(this, tag, cls)
	}
	ContextPrototype.qsTr = function(text) {
		var args = arguments
		var lang = this.language
		var messages = this.l10n[lang] || {}
		var contexts = messages[text] || {}
		for(var name in contexts) {
			text = contexts[name] //fixme: add context handling here
			break
		}
		return text.replace(/%(\d+)/, function(text, index) { return args[index] })
	}
	ContextPrototype.scroll = function(x,y) {
		window.scroll({
			left: x,
			top: y,
			behavior: 'smooth' 
		})
	}
	_globals.core._protoOnChanged(ContextPrototype, 'horizontalScrollBarPolicy', function(value) {
		switch(value) {
			case _globals.controls.experiment.MainItem.prototype.ScrollBarAsNeeded:
				document.documentElement.style.overflowX = 'auto'
				break
			case _globals.controls.experiment.MainItem.prototype.ScrollBarAlwaysOn:
				document.documentElement.style.overflowX = 'visible'
				break
			case _globals.controls.experiment.MainItem.prototype.ScrollBarAlwaysOff:
				document.documentElement.style.overflowX = 'hidden'
				break
		}
	})
	_globals.core._protoOnChanged(ContextPrototype, 'verticalScrollBarPolicy', function(value) {
		switch(value) {
			case _globals.controls.experiment.MainItem.prototype.ScrollBarAsNeeded:
				document.documentElement.style.overflowY = 'auto'
				break
			case _globals.controls.experiment.MainItem.prototype.ScrollBarAlwaysOn:
				document.documentElement.style.overflowY = 'visible'
				break
			case _globals.controls.experiment.MainItem.prototype.ScrollBarAlwaysOff:
				document.documentElement.style.overflowY = 'hidden'
				break
		}
	})
	_globals.core._protoOnChanged(ContextPrototype, 'fullscreen', function(value) { if (value) this.backend.enterFullscreenMode(this.element); else this.backend.exitFullscreenMode(); })

	ContextPrototype.$c = function($c) {
		var $this = this;
		ContextBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.core.Timer($this)
		$c._this$child0 = _this$child0

//creating component Timer
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('hackScrollTimerToDelete')
		$this.addChild(_this$child0)
//creating component core.<anonymous>
		var _this$system = new _globals.core.System($this)
		$c._this$system = _this$system

//creating component System
		_this$system.$c($c.$c$_this$system = { })

		$this.system = _this$system
//creating component core.<anonymous>
		var _this$stylesheet = new _globals.html5.Stylesheet($this)
		$c._this$stylesheet = _this$stylesheet

//creating component Stylesheet
		_this$stylesheet.$c($c.$c$_this$stylesheet = { })

		$this.stylesheet = _this$stylesheet
//creating component core.<anonymous>
		var _this$location = new _globals.core.Location($this)
		$c._this$location = _this$location

//creating component Location
		_this$location.$c($c.$c$_this$location = { })

		$this.location = _this$location
	}
	ContextPrototype.$s = function($c) {
		var $this = this;
	ContextBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning contentMaxX to (${contentWidth} - ${width})
			$this._replaceUpdater('contentMaxX', function() { $this.contentMaxX = ($this.contentWidth - $this.width) }, [$this,'contentWidth',$this,'width'])
//assigning atXEnd to (${contentX} >= ${contentMaxX})
			$this._replaceUpdater('atXEnd', function() { $this.atXEnd = ($this.contentX >= $this.contentMaxX) }, [$this,'contentMaxX',$this,'contentX'])
//assigning contentMaxY to (${contentHeight} - ${height})
			$this._replaceUpdater('contentMaxY', function() { $this.contentMaxY = ($this.contentHeight - $this.height) }, [$this,'height',$this,'contentHeight'])

//setting up component System
			var _this$system = $c._this$system
			_this$system.$s($c.$c$_this$system)
			delete $c.$c$_this$system


//assigning atYEnd to (${contentY} >= ${contentMaxY})
			$this._replaceUpdater('atYEnd', function() { $this.atYEnd = ($this.contentY >= $this.contentMaxY) }, [$this,'contentY',$this,'contentMaxY'])

//setting up component Stylesheet
			var _this$stylesheet = $c._this$stylesheet
			_this$stylesheet.$s($c.$c$_this$stylesheet)
			delete $c.$c$_this$stylesheet



//setting up component Location
			var _this$location = $c._this$location
			_this$location.$s($c.$c$_this$location)
			delete $c.$c$_this$location


//assigning atXBeginning to (! ${contentX})
			$this._replaceUpdater('atXBeginning', function() { $this.atXBeginning = (! $this.contentX) }, [$this,'contentX'])
//assigning visibleInView to (false)
			$this._removeUpdater('visibleInView'); $this.visibleInView = (false);
//assigning atYBeginning to (! ${contentY})
			$this._replaceUpdater('atYBeginning', function() { $this.atYBeginning = (! $this.contentY) }, [$this,'contentY'])

//setting up component Timer
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning interval to (100)
			_this$child0._removeUpdater('interval'); _this$child0.interval = (100);
			_this$child0.on('triggered', function() {
			this.parent._updateContentScroll()
		}.bind(_this$child0))
}


//=====[component controls.experiment.ButtonMaterial]=====================

	var ButtonMaterialBaseComponent = _globals.controls.experiment.AbstractButton
	var ButtonMaterialBasePrototype = ButtonMaterialBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.experiment.AbstractButton}
 */
	var ButtonMaterialComponent = _globals.controls.experiment.ButtonMaterial = function(parent, row) {
		ButtonMaterialBaseComponent.apply(this, arguments)

	}
	var ButtonMaterialPrototype = ButtonMaterialComponent.prototype = Object.create(ButtonMaterialBasePrototype)

	ButtonMaterialPrototype.constructor = ButtonMaterialComponent

	ButtonMaterialPrototype.componentName = 'controls.experiment.ButtonMaterial'

	ButtonMaterialPrototype.$c = function($c) {
		var $this = this;
		ButtonMaterialBasePrototype.$c.call(this, $c.$b = { })

	}
	ButtonMaterialPrototype.$s = function($c) {
		var $this = this;
	ButtonMaterialBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning effects.shadow.color to ("rgba(0,0,0,0.2)")
			$this.effects.shadow._removeUpdater('color'); $this.effects.shadow.color = ("rgba(0,0,0,0.2)");
//assigning font.capitalization to (_globals.core.Font.prototype.AllUppercase)
			$this.font._removeUpdater('capitalization'); $this.font.capitalization = (_globals.core.Font.prototype.AllUppercase);
//assigning effects.shadow.blur to (6)
			$this.effects.shadow._removeUpdater('blur'); $this.effects.shadow.blur = (6);
//assigning colors.default to ("white")
			$this.colors._removeUpdater('default'); $this.colors.default = ("white");
//assigning effects.shadow.spread to (2)
			$this.effects.shadow._removeUpdater('spread'); $this.effects.shadow.spread = (2);
//assigning effects.shadow.x to (1)
			$this.effects.shadow._removeUpdater('x'); $this.effects.shadow.x = (1);
//assigning effects.shadow.y to (1)
			$this.effects.shadow._removeUpdater('y'); $this.effects.shadow.y = (1);
}


//=====[component core.Text]=====================

	var TextBaseComponent = _globals.core.Item
	var TextBasePrototype = TextBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var TextComponent = _globals.core.Text = function(parent, row) {
		TextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initText(this)
		if (this.text.length > 0)
			this._setText(this.text)
	}

	}
	var TextPrototype = TextComponent.prototype = Object.create(TextBasePrototype)

	TextPrototype.constructor = TextComponent

	TextPrototype.componentName = 'core.Text'
	TextPrototype.fontChanged = _globals.core.createSignal('fontChanged')
	core.addProperty(TextPrototype, 'string', 'text')
	core.addProperty(TextPrototype, 'color', 'color', ("black"))
	core.addLazyProperty(TextPrototype, 'shadow', (function(__parent, __row) {
		var lazy$shadow = new _globals.core.Shadow(__parent, __row)
		var $c = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.$c($c.$c$lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = $c.lazy$shadow
			lazy$shadow.$s($c.$c$lazy$shadow)
			delete $c.$c$lazy$shadow



		return lazy$shadow
}))
	core.addLazyProperty(TextPrototype, 'font', (function(__parent, __row) {
		var lazy$font = new _globals.core.Font(__parent, __row)
		var $c = { lazy$font : lazy$font }

//creating component Font
			lazy$font.$c($c.$c$lazy$font = { })


//setting up component Font
			var lazy$font = $c.lazy$font
			lazy$font.$s($c.$c$lazy$font)
			delete $c.$c$lazy$font



		return lazy$font
}))
	core.addProperty(TextPrototype, 'int', 'paintedWidth')
	core.addProperty(TextPrototype, 'int', 'paintedHeight')
/** @const @type {number} */
	TextPrototype.AlignTop = 0
/** @const @type {number} */
	TextComponent.AlignTop = 0
/** @const @type {number} */
	TextPrototype.AlignBottom = 1
/** @const @type {number} */
	TextComponent.AlignBottom = 1
/** @const @type {number} */
	TextPrototype.AlignVCenter = 2
/** @const @type {number} */
	TextComponent.AlignVCenter = 2
	core.addProperty(TextPrototype, 'enum', 'verticalAlignment')
/** @const @type {number} */
	TextPrototype.Html = 0
/** @const @type {number} */
	TextComponent.Html = 0
/** @const @type {number} */
	TextPrototype.Text = 1
/** @const @type {number} */
	TextComponent.Text = 1
	core.addProperty(TextPrototype, 'enum', 'textFormat')
/** @const @type {number} */
	TextPrototype.ElideNone = 0
/** @const @type {number} */
	TextComponent.ElideNone = 0
/** @const @type {number} */
	TextPrototype.ElideLeft = 1
/** @const @type {number} */
	TextComponent.ElideLeft = 1
/** @const @type {number} */
	TextPrototype.ElideMiddle = 2
/** @const @type {number} */
	TextComponent.ElideMiddle = 2
/** @const @type {number} */
	TextPrototype.ElideRight = 3
/** @const @type {number} */
	TextComponent.ElideRight = 3
	core.addProperty(TextPrototype, 'enum', 'elide')
/** @const @type {number} */
	TextPrototype.AlignLeft = 0
/** @const @type {number} */
	TextComponent.AlignLeft = 0
/** @const @type {number} */
	TextPrototype.AlignRight = 1
/** @const @type {number} */
	TextComponent.AlignRight = 1
/** @const @type {number} */
	TextPrototype.AlignHCenter = 2
/** @const @type {number} */
	TextComponent.AlignHCenter = 2
/** @const @type {number} */
	TextPrototype.AlignJustify = 3
/** @const @type {number} */
	TextComponent.AlignJustify = 3
	core.addProperty(TextPrototype, 'enum', 'horizontalAlignment')
/** @const @type {number} */
	TextPrototype.NoWrap = 0
/** @const @type {number} */
	TextComponent.NoWrap = 0
/** @const @type {number} */
	TextPrototype.WordWrap = 1
/** @const @type {number} */
	TextComponent.WordWrap = 1
/** @const @type {number} */
	TextPrototype.WrapAnywhere = 2
/** @const @type {number} */
	TextComponent.WrapAnywhere = 2
/** @const @type {number} */
	TextPrototype.Wrap = 3
/** @const @type {number} */
	TextComponent.Wrap = 3
	core.addProperty(TextPrototype, 'enum', 'wrapMode')
	TextPrototype._updateSize = function() {
		if (this.recursiveVisible && (this._updateSizeNeeded || this.clip))
			this._scheduleUpdateSize()
	}
	TextPrototype._updateStyle = function() {
		if (this.shadow && !this.shadow._empty())
			this.style('text-shadow', this.shadow._getFilterStyle())
		else
			this.style('text-shadow', '')
		_globals.core.Item.prototype._updateStyle.apply(this, arguments)
	}
	TextPrototype._updateSizeImpl = function() {
		if (this.text.length === 0) {
			this.paintedWidth = 0
			this.paintedHeight = 0
			return
		}

		this._context.backend.layoutText(this)
	}
	TextPrototype.toString = function() {
		return "Text (color: " + this.color + ", width: " + this.paintedWidth + ", height: " + this.paintedHeight + ", x: " + this.x + ", y: " + this.y + ")"
	}
	TextPrototype._scheduleUpdateSize = function() {
		this._context.delayedAction('text:update-size', this, this._updateSizeImpl)
	}
	TextPrototype._enableSizeUpdate = function() {
		this._updateSizeNeeded = true
		this._updateSize()
	}
	TextPrototype._updateWSHandling = function() {
		var text = this.textFormat === this.Text
		switch(this.wrapMode) {
		case this.NoWrap:
			this.style({'white-space': text? 'pre': 'nowrap', 'word-break': '' })
			break
		case this.Wrap:
		case this.WordWrap:
			this.style({'white-space': text? 'pre-wrap': 'normal', 'word-break': '' })
			break
		case this.WrapAnywhere:
			this.style({ 'white-space': text? 'pre-wrap': 'normal', 'word-break': 'break-all' })
			break
		}
		this._updateSize();
	}
	TextPrototype.getClass = function() { return 'core-text' }
	TextPrototype._setText = function(html) {
		this._context.backend.setText(this, html)
	}
	TextPrototype.on = function(name,callback) {
		if (!this._updateSizeNeeded) {
			if (name == 'newBoundingBox')
				this._enableSizeUpdate()
		}
		_globals.core.Object.prototype.on.apply(this, arguments)
	}
	TextPrototype.onChanged = function(name,callback) {
		if (!this._updateSizeNeeded) {
			switch(name) {
				case "right":
				case "width":
				case "bottom":
				case "height":
				case "verticalCenter":
				case "horizontalCenter":
					this._enableSizeUpdate()
			}
		}
		_globals.core.Object.prototype.onChanged.apply(this, arguments);
	}
	TextPrototype.registerStyle = function(style,tag) {
		style.addRule(tag, 'width: auto; height: auto;')
	}
	_globals.core._protoOnChanged(TextPrototype, 'recursiveVisible', function(value) {
		if (value)
			this._updateSize()
	})
	_globals.core._protoOnChanged(TextPrototype, 'horizontalAlignment', function(value) {
		switch(value) {
		case this.AlignLeft:	this.style('text-align', 'left'); break
		case this.AlignRight:	this.style('text-align', 'right'); break
		case this.AlignHCenter:	this.style('text-align', 'center'); break
		case this.AlignJustify:	this.style('text-align', 'justify'); break
		}
	})
	var $code$0 = function(value) {
		this._updateWSHandling()
	}
	_globals.core._protoOnChanged(TextPrototype, 'wrapMode', $code$0)
	_globals.core._protoOnChanged(TextPrototype, 'textFormat', $code$0)
	_globals.core._protoOnChanged(TextPrototype, 'elide', function(value) {
		this.style('direction', 'ltr');
		switch(value) {
		case this.ElideNone:
			this.style('text-overflow', 'string');
			this.clip = false; // ?
			break
		case this.ElideLeft:
			this.style('direction', 'rtl');
			this.style('text-overflow', 'ellipsis');
			this.clip = true;
			break
		//case this.ElideMiddle:
		//	break
		case this.ElideRight:
			this.style('text-overflow', 'ellipsis');
			this.clip = true;
			break
		}
	})
	_globals.core._protoOnChanged(TextPrototype, 'verticalAlignment', function(value) {
		this.verticalAlignment = value;
		this._enableSizeUpdate()
	})
	_globals.core._protoOnChanged(TextPrototype, 'text', function(value) { this._setText(value); this._updateSize() })
	_globals.core._protoOnChanged(TextPrototype, 'width', function(value) { this._updateSize() })
	_globals.core._protoOnChanged(TextPrototype, 'color', function(value) { this.style('color', _globals.core.Color.normalize(value)) })

	TextPrototype.$c = function($c) {
		var $this = this;
		TextBasePrototype.$c.call(this, $c.$b = { })

	}
	TextPrototype.$s = function($c) {
		var $this = this;
	TextBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (${paintedWidth})
			$this._replaceUpdater('width', function() { $this.width = ($this.paintedWidth) }, [$this,'paintedWidth'])
//assigning height to (${paintedHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.paintedHeight) }, [$this,'paintedHeight'])
}


//=====[component core.Transform]=====================

	var TransformBaseComponent = _globals.core.Object
	var TransformBasePrototype = TransformBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var TransformComponent = _globals.core.Transform = function(parent, row) {
		TransformBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._transforms = {} }

	}
	var TransformPrototype = TransformComponent.prototype = Object.create(TransformBasePrototype)

	TransformPrototype.constructor = TransformComponent

	TransformPrototype.componentName = 'core.Transform'
	core.addProperty(TransformPrototype, 'int', 'perspective')
	core.addProperty(TransformPrototype, 'int', 'translateX')
	core.addProperty(TransformPrototype, 'int', 'translateY')
	core.addProperty(TransformPrototype, 'int', 'translateZ')
	core.addProperty(TransformPrototype, 'real', 'rotateX')
	core.addProperty(TransformPrototype, 'real', 'rotateY')
	core.addProperty(TransformPrototype, 'real', 'rotateZ')
	core.addProperty(TransformPrototype, 'real', 'rotate')
	core.addProperty(TransformPrototype, 'real', 'scaleX')
	core.addProperty(TransformPrototype, 'real', 'scaleY')
	core.addProperty(TransformPrototype, 'real', 'skewX')
	core.addProperty(TransformPrototype, 'real', 'skewY')
	TransformPrototype._updateTransform = function() {
		var str = ""
		for (var i in this._transforms) {
			str += i
			str += "(" + this._transforms[i] + ") "
		}
		this.parent.style('transform', str)
	}
	_globals.core._protoOnChanged(TransformPrototype, 'perspective', function(value) { this._transforms['perspective'] = value + 'px'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'rotate', function(value) { this._transforms['rotate'] = value + 'deg'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'rotateX', function(value) { this._transforms['rotateX'] = value + 'deg'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'rotateY', function(value) { this._transforms['rotateY'] = value + 'deg'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'rotateZ', function(value) { this._transforms['rotateZ'] = value + 'deg'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'scaleX', function(value) { this._transforms['scaleX'] = value; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'scaleY', function(value) { this._transforms['scaleY'] = value; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'skewX', function(value) { this._transforms['skewX'] = value + 'deg'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'skewY', function(value) { this._transforms['skewY'] = value + 'deg'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'translateX', function(value) { this._transforms['translateX'] = value + 'px'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'translateY', function(value) { this._transforms['translateY'] = value + 'px'; this._updateTransform() })
	_globals.core._protoOnChanged(TransformPrototype, 'translateZ', function(value) { this._transforms['translateZ'] = value + 'px'; this._updateTransform() })

//=====[component src.Compressor]=====================

	var CompressorBaseComponent = _globals.core.Item
	var CompressorBasePrototype = CompressorBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var CompressorComponent = _globals.src.Compressor = function(parent, row) {
		CompressorBaseComponent.apply(this, arguments)

	}
	var CompressorPrototype = CompressorComponent.prototype = Object.create(CompressorBasePrototype)

	CompressorPrototype.constructor = CompressorComponent

	CompressorPrototype.componentName = 'src.Compressor'

	CompressorPrototype.$c = function($c) {
		var $this = this;
		CompressorBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new _globals.src.CompressInput($this)
		$c._this$child0 = _this$child0

//creating component CompressInput
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new _globals.src.Filtres($this)
		$c._this$child1 = _this$child1

//creating component Filtres
		_this$child1.$c($c.$c$_this$child1 = { })

		$this.addChild(_this$child1)
		var _this$child2 = new _globals.core.Text($this)
		$c._this$child2 = _this$child2

//creating component Text
		_this$child2.$c($c.$c$_this$child2 = { })

		$this.addChild(_this$child2)
		var _this$child3 = new _globals.src.Gallery($this)
		$c._this$child3 = _this$child3

//creating component Gallery
		_this$child3.$c($c.$c$_this$child3 = { })

		$this.addChild(_this$child3)
	}
	CompressorPrototype.$s = function($c) {
		var $this = this;
	CompressorBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component CompressInput
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0



//setting up component Filtres
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1



//setting up component Text
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2

//assigning text to ('<b>' + ${imagesModel.count} + '</b> images' + (${filters.isSearch} ? ' | <b>' + ${proxyModel.count} + '</b> matches' : ''))
			_this$child2._replaceUpdater('text', function() { _this$child2.text = ('<b>' + _this$child2._get('imagesModel').count + '</b> images' + (_this$child2._get('filters').isSearch ? ' | <b>' + _this$child2._get('proxyModel').count + '</b> matches' : '')) }, [_this$child2._get('proxyModel'),'count',_this$child2._get('filters'),'isSearch',_this$child2._get('imagesModel'),'count'])
//assigning anchors.top to (${filters.bottom})
			_this$child2.anchors._replaceUpdater('top', function() { _this$child2.anchors.top = (_this$child2._get('filters').bottom) }, [_this$child2._get('filters'),'bottom'])


//setting up component Gallery
			var _this$child3 = $c._this$child3
			_this$child3.$s($c.$c$_this$child3)
			delete $c.$c$_this$child3
}


//=====[component core.BorderSide]=====================

	var BorderSideBaseComponent = _globals.core.Object
	var BorderSideBasePrototype = BorderSideBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var BorderSideComponent = _globals.core.BorderSide = function(parent, row) {
		BorderSideBaseComponent.apply(this, arguments)

	}
	var BorderSidePrototype = BorderSideComponent.prototype = Object.create(BorderSideBasePrototype)

	BorderSidePrototype.constructor = BorderSideComponent

	BorderSidePrototype.componentName = 'core.BorderSide'
	core.addProperty(BorderSidePrototype, 'string', 'name')
	core.addProperty(BorderSidePrototype, 'int', 'width')
	core.addProperty(BorderSidePrototype, 'color', 'color')
	core.addProperty(BorderSidePrototype, 'int', 'style')
	BorderSidePrototype._updateStyle = function() {
		if (!this.parent || !this.parent.parent || !this.name)
			return

		var Border = _globals.core.Border
		var styleName
		switch(this.style) {
		case _globals.core.Border.prototype.None: styleName = 'none'; break
		case _globals.core.Border.prototype.Hidden: styleName = 'hidden'; break
		case _globals.core.Border.prototype.Dotted: styleName = 'dotted'; break
		case _globals.core.Border.prototype.Dashed: styleName = 'dashed'; break
		case _globals.core.Border.prototype.Solid: styleName = 'solid'; break
		case _globals.core.Border.prototype.Double: styleName = 'double'; break
		case _globals.core.Border.prototype.Groove: styleName = 'groove'; break
		case _globals.core.Border.prototype.Ridge: styleName = 'ridge'; break
		case _globals.core.Border.prototype.Inset: styleName = 'inset'; break
		case _globals.core.Border.prototype.Outset: styleName = 'outset'; break
		}

		var borderCss = this.width + "px " + styleName + " " + _globals.core.Color.normalize(this.color)
		this.parent.parent.style('border-' + this.name, borderCss)
	}
	var $code$0 = function(value) { this._updateStyle() }
	_globals.core._protoOnChanged(BorderSidePrototype, 'width', $code$0)
	_globals.core._protoOnChanged(BorderSidePrototype, 'color', $code$0)
	_globals.core._protoOnChanged(BorderSidePrototype, 'style', $code$0)

	BorderSidePrototype.$c = function($c) {
		var $this = this;
		BorderSideBasePrototype.$c.call(this, $c.$b = { })

	}
	BorderSidePrototype.$s = function($c) {
		var $this = this;
	BorderSideBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning color to (${parent.color})
			$this._replaceUpdater('color', function() { $this.color = ($this.parent.color) }, [$this.parent,'color'])
//assigning width to (${parent.width})
			$this._replaceUpdater('width', function() { $this.width = ($this.parent.width) }, [$this.parent,'width'])
//assigning style to (${parent.style})
			$this._replaceUpdater('style', function() { $this.style = ($this.parent.style) }, [$this.parent,'style'])
}


//=====[component core.ListModel]=====================

	var ListModelBaseComponent = _globals.core.Model
	var ListModelBasePrototype = ListModelBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Model}
 */
	var ListModelComponent = _globals.core.ListModel = function(parent, row) {
		ListModelBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._rows = []
	}

	}
	var ListModelPrototype = ListModelComponent.prototype = Object.create(ListModelBasePrototype)

	ListModelPrototype.constructor = ListModelComponent

	ListModelPrototype.componentName = 'core.ListModel'
	core.addProperty(ListModelPrototype, 'array', 'data')
	ListModelPrototype.clear = function() { this.assign([]) }
	ListModelPrototype.forEach = function(callback) {
		return this._rows.forEach(callback)
	}
	ListModelPrototype.addChild = function(child) {
		this.append(child)
	}
	ListModelPrototype.get = function(idx) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		var row = this._rows[idx]
		if (!(row instanceof Object))
			throw new Error('row is non-object')
		row.index = idx
		return row
	}
	ListModelPrototype.remove = function(idx,n) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds')
		if (n === undefined)
			n = 1
		this._rows.splice(idx, n)
		this.count = this._rows.length
		this.rowsRemoved(idx, idx + n)
	}
	ListModelPrototype.setProperty = function(idx,name,value) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		var row = this._rows[idx]
		if (!(row instanceof Object))
			throw new Error('row is non-object, invalid index? (' + idx + ')')

		if (row[name] !== value) {
			row[name] = value
			this.rowsChanged(idx, idx + 1)
		}
	}
	ListModelPrototype.insert = function(idx,row) {
		if (idx < 0 || idx > this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		this._rows.splice(idx, 0, row)
		this.count = this._rows.length
		this.rowsInserted(idx, idx + 1)
	}
	ListModelPrototype.set = function(idx,row) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		if (!(row instanceof Object))
			throw new Error('row is non-object')
		this._rows[idx] = row
		this.rowsChanged(idx, idx + 1)
	}
	ListModelPrototype.append = function(row) {
		var l = this._rows.length
		if (Array.isArray(row)) {
			Array.prototype.push.apply(this._rows, row)
			this.count = this._rows.length
			this.rowsInserted(l, l + row.length)
		} else {
			this._rows.push(row)
			this.count = this._rows.length
			this.rowsInserted(l, l + 1)
		}
	}
	ListModelPrototype.assign = function(rows) {
		this._rows = rows
		this.count = this._rows.length
		this.reset()
	}
	_globals.core._protoOnChanged(ListModelPrototype, 'data', function(value) { this.assign(value) })

//=====[component core.Location]=====================

	var LocationBaseComponent = _globals.core.Object
	var LocationBasePrototype = LocationBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var LocationComponent = _globals.core.Location = function(parent, row) {
		LocationBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var backend = _globals.core.__locationBackend
		if (!backend)
			throw new Error('no backend found')
		this.impl = backend().createLocation(this)
	}

	}
	var LocationPrototype = LocationComponent.prototype = Object.create(LocationBasePrototype)

	LocationPrototype.constructor = LocationComponent

	LocationPrototype.componentName = 'core.Location'
	core.addProperty(LocationPrototype, 'string', 'hash')
	core.addProperty(LocationPrototype, 'string', 'host')
	core.addProperty(LocationPrototype, 'string', 'href')
	core.addProperty(LocationPrototype, 'string', 'port')
	core.addProperty(LocationPrototype, 'string', 'origin')
	core.addProperty(LocationPrototype, 'string', 'hostname')
	core.addProperty(LocationPrototype, 'string', 'pathname')
	core.addProperty(LocationPrototype, 'string', 'protocol')
	core.addProperty(LocationPrototype, 'string', 'search')
	core.addProperty(LocationPrototype, 'Object', 'state')
	LocationPrototype.changeHref = function(href) {
		this.impl.changeHref(href)
	}
	LocationPrototype.pushState = function(state,title,url) {
		this.impl.pushState(state, title, url)
	}

//=====[component core.Image]=====================

	var ImageBaseComponent = _globals.core.Item
	var ImageBasePrototype = ImageBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var ImageComponent = _globals.core.Image = function(parent, row) {
		ImageBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initImage(this)
		this._scheduleLoad()
	}

	}
	var ImagePrototype = ImageComponent.prototype = Object.create(ImageBasePrototype)

	ImagePrototype.constructor = ImageComponent

	ImagePrototype.componentName = 'core.Image'
	core.addProperty(ImagePrototype, 'int', 'paintedWidth')
	core.addProperty(ImagePrototype, 'int', 'paintedHeight')
	core.addProperty(ImagePrototype, 'int', 'sourceWidth')
	core.addProperty(ImagePrototype, 'int', 'sourceHeight')
	core.addProperty(ImagePrototype, 'string', 'source')
	core.addProperty(ImagePrototype, 'bool', 'smooth', (true))
	core.addProperty(ImagePrototype, 'bool', 'preload', (false))
/** @const @type {number} */
	ImagePrototype.Null = 0
/** @const @type {number} */
	ImageComponent.Null = 0
/** @const @type {number} */
	ImagePrototype.Ready = 1
/** @const @type {number} */
	ImageComponent.Ready = 1
/** @const @type {number} */
	ImagePrototype.Loading = 2
/** @const @type {number} */
	ImageComponent.Loading = 2
/** @const @type {number} */
	ImagePrototype.Error = 3
/** @const @type {number} */
	ImageComponent.Error = 3
	core.addProperty(ImagePrototype, 'enum', 'status')
/** @const @type {number} */
	ImagePrototype.Stretch = 0
/** @const @type {number} */
	ImageComponent.Stretch = 0
/** @const @type {number} */
	ImagePrototype.PreserveAspectFit = 1
/** @const @type {number} */
	ImageComponent.PreserveAspectFit = 1
/** @const @type {number} */
	ImagePrototype.PreserveAspectCrop = 2
/** @const @type {number} */
	ImageComponent.PreserveAspectCrop = 2
/** @const @type {number} */
	ImagePrototype.Tile = 3
/** @const @type {number} */
	ImageComponent.Tile = 3
/** @const @type {number} */
	ImagePrototype.TileVertically = 4
/** @const @type {number} */
	ImageComponent.TileVertically = 4
/** @const @type {number} */
	ImagePrototype.TileHorizontally = 5
/** @const @type {number} */
	ImageComponent.TileHorizontally = 5
/** @const @type {number} */
	ImagePrototype.Pad = 6
/** @const @type {number} */
	ImageComponent.Pad = 6
	core.addProperty(ImagePrototype, 'enum', 'fillMode')
	ImagePrototype._load = function() {
		if (this.status === this.Ready || (!this.preload && !this.recursiveVisible))
			return

		if (!this.source)
			return

		this.status = this.Loading
		this._context.backend.loadImage(this)
	}
	ImagePrototype._onError = function() {
		this.status = this.Error;
	}
	ImagePrototype._scheduleLoad = function() {
	var image = this._get('image', true)

		if (this.preload || this.recursiveVisible)
			this._context.delayedAction('image.load', this, this._load)
	}
	ImagePrototype.getClass = function() {
	var image = this._get('image', true)
 return 'core-image' }
	var $code$0 = function(value) {
		this._scheduleLoad()
	}
	_globals.core._protoOnChanged(ImagePrototype, 'width', $code$0)
	_globals.core._protoOnChanged(ImagePrototype, 'preload', $code$0)
	_globals.core._protoOnChanged(ImagePrototype, 'height', $code$0)
	_globals.core._protoOnChanged(ImagePrototype, 'recursiveVisible', $code$0)
	_globals.core._protoOnChanged(ImagePrototype, 'fillMode', $code$0)
	_globals.core._protoOnChanged(ImagePrototype, 'source', function(value) {
		this.status = this.Null
		this._scheduleLoad()
	})

	ImagePrototype.$c = function($c) {
		var $this = this;
		ImageBasePrototype.$c.call(this, $c.$b = { })

	}
	ImagePrototype.$s = function($c) {
		var $this = this;
	ImageBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning visible to (! ${absoluteEnabled} || (${visibleX} && ${visibleY}))
			$this._replaceUpdater('visible', function() { $this.visible = (! $this.absoluteEnabled || ($this.visibleX && $this.visibleY)) }, [$this,'visibleX',$this,'absoluteEnabled',$this,'visibleY'])
//assigning height to (${sourceHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.sourceHeight) }, [$this,'sourceHeight'])
//assigning width to (${sourceWidth})
			$this._replaceUpdater('width', function() { $this.width = ($this.sourceWidth) }, [$this,'sourceWidth'])
}


//=====[component core.Anchors]=====================

	var AnchorsBaseComponent = _globals.core.Object
	var AnchorsBasePrototype = AnchorsBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var AnchorsComponent = _globals.core.Anchors = function(parent, row) {
		AnchorsBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._items = []
		this._scheduleUpdate = function() { this._context.delayedAction('update-anchors', this, this._updateAll) }.bind(this)
		this._grabX = false
		this._grabY = false
	}

	}
	var AnchorsPrototype = AnchorsComponent.prototype = Object.create(AnchorsBasePrototype)

	AnchorsPrototype.constructor = AnchorsComponent

	AnchorsPrototype.componentName = 'core.Anchors'
	AnchorsPrototype.marginsUpdated = _globals.core.createSignal('marginsUpdated')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'bottom')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'verticalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'top')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'left')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'horizontalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'right')
	core.addProperty(AnchorsPrototype, 'Item', 'fill')
	core.addProperty(AnchorsPrototype, 'Item', 'centerIn')
	core.addProperty(AnchorsPrototype, 'int', 'margins')
	core.addProperty(AnchorsPrototype, 'int', 'bottomMargin')
	core.addProperty(AnchorsPrototype, 'int', 'topMargin')
	core.addProperty(AnchorsPrototype, 'int', 'leftMargin')
	core.addProperty(AnchorsPrototype, 'int', 'rightMargin')
	AnchorsPrototype._updateAll = function() {
		var anchors = this
		var item = anchors.parent
		var parent = item.parent

		var parent_box = parent.toScreen()
		var parentX = parent_box[0], parentY = parent_box[1]

		var fill = anchors.fill
		var leftAnchor = anchors._getAnchor('left') || (fill? fill.left: null)
		var rightAnchor = anchors._getAnchor('right') || (fill? fill.right: null)
		var topAnchor = anchors._getAnchor('top') || (fill? fill.top: null)
		var bottomAnchor = anchors._getAnchor('bottom') || (fill? fill.bottom: null)

		var centerIn = anchors.centerIn
		var hcenterAnchor = anchors._getAnchor('horizontalCenter') || (centerIn? centerIn.horizontalCenter: null)
		var vcenterAnchor = anchors._getAnchor('verticalCenter') || (centerIn? centerIn.verticalCenter: null)

		var lm = anchors.leftMargin || anchors.margins
		var rm = anchors.rightMargin || anchors.margins
		var tm = anchors.topMargin || anchors.margins
		var bm = anchors.bottomMargin || anchors.margins

		var toScreen = function(line) {
			var object = line[0], index = line[1]
			return object.toScreen()[index]
		}

		var left, top, right, bottom, hcenter, vcenter
		if (leftAnchor && rightAnchor) {
			left = toScreen(leftAnchor)
			right = toScreen(rightAnchor)
			item.x = left + lm - parentX - item.viewX
			item.width = right - left - rm - lm
		} else if (leftAnchor && hcenterAnchor) {
			left = toScreen(leftAnchor)
			hcenter = toScreen(hcenterAnchor);
			item.x = left + lm - parentX - item.viewX
			item.width = (hcenter - left) * 2 - rm - lm
		} else if (hcenterAnchor && rightAnchor) {
			hcenter = toScreen(hcenterAnchor);
			right = toScreen(rightAnchor)
			item.width = (right - hcenter) * 2 - rm - lm
			item.x = hcenter - (item.width + lm - rm) / 2 - parentX - item.viewX
		} else if (leftAnchor) {
			left = toScreen(leftAnchor)
			item.x = left + lm - parentX - item.viewX
		} else if (rightAnchor) {
			right = toScreen(rightAnchor)
			item.x = right - parentX - rm - item.width - item.viewX
		} else if (hcenterAnchor) {
			hcenter = toScreen(hcenterAnchor)
			item.x = hcenter - (item.width + lm - rm) / 2 - parentX - item.viewX
		} else if (this._grabX)
			item.x = lm

		if (topAnchor && bottomAnchor) {
			top = toScreen(topAnchor)
			bottom = toScreen(bottomAnchor)
			item.y = top + tm - parentY - item.viewY
			item.height = bottom - top - bm - tm
		} else if (topAnchor && vcenterAnchor) {
			top = toScreen(topAnchor)
			vcenter = toScreen(vcenterAnchor)
			item.y = top + tm - parentY - item.viewY
			item.height = (vcenter - top) * 2 - bm - tm
		} else if (vcenterAnchor && bottomAnchor) {
			vcenter = toScreen(vcenterAnchor)
			bottom = toScreen(bottomAnchor)
			item.height = (bottom - vcenter) * 2 - bm - tm
			item.y = vcenter - (item.height + tm - bm) / 2 - parentY - item.viewY
		} else if (topAnchor) {
			top = toScreen(topAnchor)
			item.y = top + tm - parentY - item.viewY
		} else if (bottomAnchor) {
			bottom = toScreen(bottomAnchor)
			item.y = bottom - parentY - bm - item.height - item.viewY
		} else if (vcenterAnchor) {
			vcenter = toScreen(vcenterAnchor)
			item.y = vcenter - (item.height + tm - bm) / 2 - parentY - item.viewY
		} else if (this._grabY)
			item.y = tm
	}
	AnchorsPrototype._grab = function(item,prop) {
		if (prop === 'x')
			this._grabX = true
		if (prop === 'y')
			this._grabY = true
		item._removeUpdater(prop)
	}
	AnchorsPrototype._getAnchor = function(name) {
		var value = this[name]
		return value? Array.isArray(value)? value: value[name]: null
	}
	AnchorsPrototype._subscribe = function(src) {
		var items = this._items
		//connect only once per item
		if (items.indexOf(src) < 0) {
			items.push(src)
			this.connectOn(src, 'newBoundingBox', this._scheduleUpdate)
		}
	}
	_globals.core._protoOnChanged(AnchorsPrototype, 'fill', function(value) {
		this._scheduleUpdate()
		if (value === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		this._grab(item, 'width')
		this._grab(item, 'y')
		this._grab(item, 'height')
		this._subscribe(value)
	})
	_globals.core._protoOnChanged(AnchorsPrototype, 'centerIn', function(value) {
		this._scheduleUpdate()
		if (value === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		this._grab(item, 'y')
		this._subscribe(value)
		this._subscribe(item)
	})
	_globals.core._protoOnChanged(AnchorsPrototype, 'bottom', function(value) {
		this._scheduleUpdate()
		var bottom = this._getAnchor('bottom')
		if (bottom === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.top || anchors.verticalCenter) {
			this._grab(item, 'height')
		}
		this._subscribe(item)
		this._subscribe(bottom[0])
	})
	_globals.core._protoOnChanged(AnchorsPrototype, 'horizontalCenter', function(value) {
		this._scheduleUpdate()
		var hc = this._getAnchor('horizontalCenter')
		if (hc === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.left || anchors.right) {
			this._grab(item, 'width')
		}
		this._subscribe(item)
		this._subscribe(hc[0])
	})
	_globals.core._protoOnChanged(AnchorsPrototype, 'left', function(value) {
		this._scheduleUpdate()
		var left = this._getAnchor('left')
		if (left === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.right || anchors.horizontalCenter) {
			this._grab(item, 'width')
			this._subscribe(item)
		}
		this._subscribe(left[0])
	})
	_globals.core._protoOnChanged(AnchorsPrototype, 'right', function(value) {
		this._scheduleUpdate()
		var right = this._getAnchor('right')
		if (right === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.left || anchors.horizontalCenter) {
			this._grab(item, 'width')
		}
		this._subscribe(item)
		this._subscribe(right[0])
	})
	_globals.core._protoOnChanged(AnchorsPrototype, 'top', function(value) {
		this._scheduleUpdate()
		var top = this._getAnchor('top')
		if (top === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.bottom || anchors.verticalCenter) {
			this._grab(item, 'height')
			this._subscribe(item)
		}
		this._subscribe(top[0])
	})
	_globals.core._protoOnChanged(AnchorsPrototype, 'verticalCenter', function(value) {
		this._scheduleUpdate()
		var vc = this._getAnchor('verticalCenter')
		if (vc === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.top || anchors.bottom) {
			this._grab(item, 'height')
		}
		this._subscribe(item)
		this._subscribe(vc[0])
	})
	var $code$0 = function(value) { this.marginsUpdated(); this._scheduleUpdate(); }
	_globals.core._protoOnChanged(AnchorsPrototype, 'bottomMargin', $code$0)
	_globals.core._protoOnChanged(AnchorsPrototype, 'leftMargin', $code$0)
	_globals.core._protoOnChanged(AnchorsPrototype, 'topMargin', $code$0)
	_globals.core._protoOnChanged(AnchorsPrototype, 'rightMargin', $code$0)
	_globals.core._protoOnChanged(AnchorsPrototype, 'margin', $code$0)

//=====[component core.BaseViewContent]=====================

	var BaseViewContentBaseComponent = _globals.core.Item
	var BaseViewContentBasePrototype = BaseViewContentBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var BaseViewContentComponent = _globals.core.BaseViewContent = function(parent, row) {
		BaseViewContentBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.style('will-change', 'scroll-position, transform, left, top')
	}

	}
	var BaseViewContentPrototype = BaseViewContentComponent.prototype = Object.create(BaseViewContentBasePrototype)

	BaseViewContentPrototype.constructor = BaseViewContentComponent

	BaseViewContentPrototype.componentName = 'core.BaseViewContent'
	BaseViewContentPrototype._updateScrollPositions = function(x,y,layout) {
		this._setProperty('x', -x)
		this._setProperty('y', -y)
		if (layout === undefined || layout) //default true
			this.parent._scheduleLayout()
	}
	var $code$0 = function(value) { this.parent._scheduleLayout() }
	_globals.core._protoOnChanged(BaseViewContentPrototype, 'x', $code$0)
	_globals.core._protoOnChanged(BaseViewContentPrototype, 'y', $code$0)

//=====[component core.RAIIEventEmitter]=====================

	var RAIIEventEmitterBaseComponent = _globals.core.EventEmitter
	var RAIIEventEmitterBasePrototype = RAIIEventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.EventEmitter}
 */
	var RAIIEventEmitterComponent = _globals.core.RAIIEventEmitter = function(parent, row) {
		RAIIEventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._onListener = {}
	}

	}
	var RAIIEventEmitterPrototype = RAIIEventEmitterComponent.prototype = Object.create(RAIIEventEmitterBasePrototype)

	RAIIEventEmitterPrototype.constructor = RAIIEventEmitterComponent

	RAIIEventEmitterPrototype.componentName = 'core.RAIIEventEmitter'
	RAIIEventEmitterPrototype.removeAllListeners = function(name) {
		_globals.core.EventEmitter.prototype.removeAllListeners.call(this, name)
		if (name in this._onListener)
			this._onListener[name][1](name)
		else if ('' in this._onListener) {
			//log('first listener to', name)
			this._onListener[''][1](name)
		}
	}
	RAIIEventEmitterPrototype.on = function(name,callback) {
		if (!(name in this._eventHandlers)) {
			if (name in this._onListener) {
				//log('first listener to', name)
				this._onListener[name][0](name)
			} else if ('' in this._onListener) {
				//log('first listener to', name)
				this._onListener[''][0](name)
			}
			if (this._eventHandlers[name])
				throw new Error('listener callback added event handler')
		}
		_globals.core.EventEmitter.prototype.on.call(this, name, callback)
	}
	RAIIEventEmitterPrototype.onListener = function(name,first,last) {
		this._onListener[name] = [first, last]
	}

//=====[component html5.Stylesheet]=====================

	var StylesheetBaseComponent = _globals.core.Object
	var StylesheetBasePrototype = StylesheetBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var StylesheetComponent = _globals.html5.Stylesheet = function(parent, row) {
		StylesheetBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var context = this._context
		var options = context.options

		var style = this.style = context.createElement('style')
		style.dom.type = 'text/css'

		this.prefix = options.prefix
		var divId = options.id

		var div = document.getElementById(context, divId)
		var topLevel = div === null

		var userSelect = window.Modernizr.prefixedCSS('user-select') + ": none; "
		var os = _globals.core.os
		var tapHighlightedPlatform = (os == "android" || os == "androidttk" || os == "hisense")

		style.setHtml(
			"div#" + divId + " { position: absolute; visibility: hidden; left: 0px; top: 0px; }" +
			(os == "webOS" || tapHighlightedPlatform ? this.mangleRule('div', "{ " + userSelect + " }") : "") +
			(tapHighlightedPlatform ? this.mangleRule('div', "{ -webkit-tap-highlight-color: rgba(255, 255, 255, 0); -webkit-focus-ring-color: rgba(255, 255, 255, 0); outline: none; }") : "") +
			(topLevel? "body { padding: 0; margin: 0; border: 0px; overflow: hidden; }": "") + //fixme: do we need style here in non-top-level mode?
			this.mangleRule('video', "{ position: absolute; }") + //fixme: do we need position rule if it's item?
			this.mangleRule('img', "{ position: absolute; -webkit-touch-callout: none; " + userSelect + " }")
		)
		var head = _globals.html5.html.getElement(context, 'head')
		head.append(style)
		head.updateStyle()

		this._addRule = _globals.html5.html.createAddRule(style.dom).bind(this)
		this._lastId = 0
	}

	}
	var StylesheetPrototype = StylesheetComponent.prototype = Object.create(StylesheetBasePrototype)

	StylesheetPrototype.constructor = StylesheetComponent

	StylesheetPrototype.componentName = 'html5.Stylesheet'
	StylesheetPrototype.allocateClass = function(prefix) {
		var globalPrefix = this.prefix
		return (globalPrefix? globalPrefix: '') + prefix + '-' + this._lastId++
	}
	StylesheetPrototype.mangleSelector = function(selector) {
		var prefix = this.prefix
		if (prefix)
			return selector + '.' + prefix + 'core-item'
		else
			return selector
	}
	StylesheetPrototype.mangleRule = function(selector,rule) {
		return this.mangleSelector(selector) + ' ' + rule + ' '
	}
	StylesheetPrototype.addRule = function(selector,rule) {
		this._addRule(selector, rule)
	}

//=====[component core.ProxyModel]=====================

	var ProxyModelBaseComponent = _globals.core.Model
	var ProxyModelBasePrototype = ProxyModelBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Model}
 */
	var ProxyModelComponent = _globals.core.ProxyModel = function(parent, row) {
		ProxyModelBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._indexes = []
	}

	}
	var ProxyModelPrototype = ProxyModelComponent.prototype = Object.create(ProxyModelBasePrototype)

	ProxyModelPrototype.constructor = ProxyModelComponent

	ProxyModelPrototype.componentName = 'core.ProxyModel'
	core.addProperty(ProxyModelPrototype, 'Object', 'target')
/** @const @type {number} */
	ProxyModelPrototype.Number = 0
/** @const @type {number} */
	ProxyModelComponent.Number = 0
/** @const @type {number} */
	ProxyModelPrototype.String = 1
/** @const @type {number} */
	ProxyModelComponent.String = 1
	core.addProperty(ProxyModelPrototype, 'enum', 'filterType', ProxyModelComponent.String)
	ProxyModelPrototype.clear = function() {
		this._indexes = []
		this.count = 0
		this.reset()
	}
	ProxyModelPrototype._buildIndexMap = function() {
	var model = this._get('model', true)

		this.clear()
		var targetRows = this.target._rows
		if (!targetRows) {
			log("Bad target model")
			return
		}
		if (this._filter) {
			for (var i = 0; i < targetRows.length; ++i)
				if (this._filter(targetRows[i])) {
					var last = this._indexes.length
					this._indexes.push(i)
				}
		} else {
			for (var i = 0; i < targetRows.length; ++i) {
				this._indexes.push(i)
			}
		}
		if (this._cmp) {
			var self = this
			this._indexes = this._indexes.sort(function(a, b) { return self._cmp(targetRows[a], targetRows[b]) })
		}
		this.count = this._indexes.length
		this.rowsInserted(0, this.count)
	}
	ProxyModelPrototype.__complete = function() { ProxyModelBasePrototype.__complete.call(this)
var target = this.target

		this.connectOn(target, 'reset', this._buildIndexMap.bind(this))
		this.connectOn(target, 'rowsInserted', this._buildIndexMap.bind(this))
		this.connectOn(target, 'rowsChanged', this._buildIndexMap.bind(this))
		this.connectOn(target, 'rowsRemoved', this._buildIndexMap.bind(this))

		this._buildIndexMap() }
	ProxyModelPrototype.rebuild = function() { this._buildIndexMap() }
	ProxyModelPrototype.addChild = function(child) {
		this.append(child)
	}
	ProxyModelPrototype.setCompare = function(cmp) {
		this._cmp = cmp
		this._buildIndexMap()
	}
	ProxyModelPrototype.setFilter = function(filter) {
		this._filter = filter
		this._buildIndexMap()
	}
	ProxyModelPrototype.get = function(idx) {
	var model = this._get('model', true)

		var targetRows = this.target._rows
		if (!targetRows)
			throw new Error('Bad target model')
		if (idx < 0 || idx >= this._indexes.length)
			throw new Error('index ' + idx + ' out of bounds')
		var row = targetRows[this._indexes[idx]]
		if (!(row instanceof Object))
			throw new Error('row is non-object')
		row.index = idx
		return row
	}
	ProxyModelPrototype.remove = function(idx,n) {
		if (idx < 0 || idx >= this._indexes.length)
			throw new Error('index ' + idx + ' out of bounds')
		this.target.remove(this._indexes[idx], n)
	}
	ProxyModelPrototype.setProperty = function(idx,name,value) {
		if (idx < 0 || idx >= this._indexes.length)
			throw new Error('index ' + idx + ' out of bounds')
		var targetIdx = this._indexes[idx]
		this.target.setProperty(targetIdx, name, value)
	}
	ProxyModelPrototype.insert = function(idx,row) {
		if (idx < 0 || idx > this._indexes.length)
			throw new Error('index ' + idx + ' out of bounds')

		var targetIdx = this._indexes[idx]
		this.target.set(targetIdx, row)
	}
	ProxyModelPrototype.set = function(idx,row) {
		if (idx < 0 || idx >= this._indexes.length)
			throw new Error('index ' + idx + ' out of bounds')
		if (!(row instanceof Object))
			throw new Error('row is non-object')
		var targetIdx = this._indexes[idx]
		this.target.set(targetIdx, row)
	}
	ProxyModelPrototype.append = function(row) {
		this.target.append(row)
	}
_globals.core.model = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import core.model]=====================

var ModelUpdateNothing = 0
var ModelUpdateInsert = 1
var ModelUpdateUpdate = 2

var ModelUpdateRange = function(type, length) {
	this.type = type
	this.length = length
}

exports.ModelUpdate = function() {
	this.count = 0
	this._reset()
}
exports.ModelUpdate.prototype.constructor = exports.ModelUpdate

exports.ModelUpdate.prototype._reset = function() {
	this._ranges = [new ModelUpdateRange(ModelUpdateNothing, this.count)]
	this._updateIndex = this.count
}

exports.ModelUpdate.prototype._setUpdateIndex = function(begin) {
	if (begin < this._updateIndex)
		this._updateIndex = begin
}

exports.ModelUpdate.prototype._find = function(index) {
	var ranges = this._ranges
	var i
	for(i = 0; i < ranges.length; ++i) {
		var range = ranges[i]
		if (index < range.length)
			return { index: i, offset: index }
		if (range.length > 0)
			index -= range.length
	}
	if (index != 0)
		throw new Error('invalid index ' + index)

	return { index: i - 1, offset: range.length }
}

exports.ModelUpdate.prototype.reset = function(model) {
	this.update(model, 0, Math.min(model.count, this.count))
	if (this.count < model.count) {
		this.insert(model, this.count, model.count)
	} else {
		this.remove(model, model.count, this.count)
	}
}

exports.ModelUpdate.prototype._merge = function() {
	var ranges = this._ranges
	for(var index = 1; index < ranges.length; ) {
		var range = ranges[index - 1]
		var nextRange = ranges[index]
		if (range.type === nextRange.type) {
			if (range.type === ModelUpdateInsert && range.length < 0 && nextRange.length > 0) {
				//removed + inserted rows reappers as updated
				var updated = Math.min(-range.length, nextRange.length)
				range.type = ModelUpdateUpdate
				nextRange.length += range.length
				range.length = updated
				if (index > 1)
					--index
			} else {
				range.length += nextRange.length
				ranges.splice(index, 1)
			}
		} else if (range.type == ModelUpdateInsert && range.length === 0) {
			ranges.splice(index, 1)
		} else
			++index
	}
}

exports.ModelUpdate.prototype._split = function(index, offset, type, length) {
	var ranges = this._ranges
	if (offset == 0) {
		ranges.splice(index, 0, new ModelUpdateRange(type, length))
		return index + 1
	} else {
		var range = ranges[index]
		var right = range.length - offset
		range.length = offset
		if (right != 0) {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length),
				new ModelUpdateRange(range.type, right))
			return index + 2
		} else {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length))
			return index + 2
		}
	}
}

exports.ModelUpdate.prototype.insert = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count += d
	if (this.count != model.count)
		throw new Error('unbalanced insert ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]
	if (range.length == 0) { //first insert
		range.type = ModelUpdateInsert
		range.length += d
	} else {
		if (res.offset >= 0)
			this._split(res.index, res.offset, ModelUpdateInsert, d)
		else
			this._split(res.index + 1, 0, ModelUpdateInsert, d)
	}
	this._merge()
}

exports.ModelUpdate.prototype.remove = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count -= d
	if (this.count != model.count)
		throw new Error('unbalanced remove ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]

	if (range.type == ModelUpdateInsert) {
		range.length -= d
	} else {
		var index = this._split(res.index, res.offset, ModelUpdateInsert, -d)
		while(d > 0) {
			var range = ranges[index]
			if (range.length <= d) {
				ranges.splice(index, 1)
				d -= range.length
			} else {
				range.length -= d
				d = 0
			}
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.update = function(model, begin, end) {
	if (begin >= end)
		return

	var ranges = this._ranges
	var n = end - begin
	var res = this._find(begin)
	var index = res.index

	var range = ranges[index]
	if (res.offset > 0) {
		ranges.splice(index + 1, 0, new ModelUpdateRange(range.type, range.length - res.offset))
		range.length = res.offset
		++index
		if (range.length == 0)
			throw new Error('invalid offset')
	}

	while(n > 0) {
		var range = ranges[index]
		var length = range.length
		switch(range.type) {
			case ModelUpdateNothing:
				if (length > n) {
					//range larger than needed
					range.length -= n
					ranges.splice(index, 0, new ModelUpdateRange(ModelUpdateUpdate, n))
					n -= length
				} else { //length <= n
					range.type = ModelUpdateUpdate
					n -= length
				}
				break
			case ModelUpdateInsert:
				if (length > 0)
					n -= length
				++index
				break
			case ModelUpdateUpdate:
				n -= length
				++index
				break
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.clear = function() {
	this.count = 0
	this._reset()
}

exports.ModelUpdate.prototype.apply = function(view, skipCheck) {
	var index = 0
	this._ranges.forEach(
		function(range) {
			var n = range.length
			switch(range.type) {
				case ModelUpdateInsert:
					if (n > 0) {
						view._insertItems(index, index + n)
						index += n
					} else if (n < 0) {
						view._removeItems(index, index - n)
					}
					break
				case ModelUpdateUpdate:
					view._updateItems(index, index + n)
					index += n
					break
				default:
					index += range.length
			}
		}
	)
	if (!skipCheck && view._items.length != this.count)
		throw new Error('unbalanced items update, view: ' + view._items.length + ', update:' + this.count)

	for(var i = this._updateIndex; i < this.count; ++i)
		view._updateDelegateIndex(i)
	this._reset()
}

var ArrayModelWrapper = exports.ArrayModelWrapper = function (data) { this.data = data; this.count = data.length }
ArrayModelWrapper.prototype.get = function(idx)  { return { value: this.data[idx] } }
ArrayModelWrapper.prototype.on = function() { }
ArrayModelWrapper.prototype.removeListener = function() { }

return exports;
} )()
_globals.html5.cache = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import html5.cache]=====================

var getTime = function() { return Math.floor(new Date().getTime() / 1000) }

var Entry = function() {
	this.created = getTime()
	this.waiters = []
	this.invoker = null
}

Entry.prototype.expired = function(ttl) {
	return getTime() - this.created >= ttl
}

Entry.prototype.set = function(result) {
	this.created = getTime()
	var invoker = this.invoker = _globals.core.safeCall(null, [result], function(ex) { log("cache entry callback failed: ", ex, ex.stack) })
	while(this.waiters.length) {
		var waiters = this.waiters
		this.waiters = []
		waiters.forEach(invoker)
	}
	this.waiters = null
}

Entry.prototype.wait = function(callback) {
	if (this.invoker !== null)
		this.invoker(callback)
	else
		this.waiters.push(callback)
}

var Cache = function(create, ttl) {
	if (!create)
		throw new Error("create callback is required")
	this._create = create
	this._ttl = ttl || 3600
	this._cache = {}
	setInterval(this.cleanup.bind(this), this._ttl / 2 * 1000)
}

Cache.prototype.get = function(key, callback) {
	var entry = this._cache[key]
	if (entry === undefined || entry.expired(this._ttl)) {
		this._cache[key] = entry = new Entry()
		this._create(key, function(result) {
			entry.set(result)
		})
	}
	entry.wait(callback)
}

Cache.prototype.cleanup = function() {
	for(var k in this._cache) {
		var entry = this._cache[k]
		if (entry.expired(this._ttl)) {
			delete this._cache[k]
		}
	}
}

exports.Cache = Cache

return exports;
} )()
_globals.html5.html = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import html5.html]=====================

/*** @using { core.RAIIEventEmitter } **/

var Modernizr = window.Modernizr

exports.capabilities = {
	csstransforms3d: Modernizr.csstransforms3d,
	csstransforms: Modernizr.csstransforms,
	csstransitions: Modernizr.csstransitions,
	mouseEnterLeaveSupported: _globals.core.os != "netcast"
}

var imageCache = null

exports.createAddRule = function(style) {
	if(! (style.sheet || {}).insertRule) {
		var sheet = (style.styleSheet || style.sheet)
		return function(name, rules) {
			try {
				sheet.addRule(name, rules)
			} catch(e) {
				log("AddRule failed:", e, ", sheet:", sheet, ", name:", name, ", rules:", rules)
			}
		}
	}
	else {
		var sheet = style.sheet
		return function(name, rules) {
			try {
				sheet.insertRule(name + '{' + rules + '}', sheet.cssRules.length)
			} catch(e) {
				log("InsertRule failed:", e, ", sheet:", sheet, ", name:", name, ", rules:", rules)
			}
		}
	}
}

var StyleCache = function() {
	this._cache = {}
}

var StyleCachePrototype = StyleCache.prototype
StyleCachePrototype.constructor = StyleCache

StyleCachePrototype.update = function(element, name, value) {
	//log('update', element._uniqueId, name, value)
	var cache = this._cache
	var id = element._uniqueId
	var entry = cache[id]
	if (entry !== undefined) {
		entry.data[name] = value
		++entry.size
	} else {
		var data = {}
		data[name] = value
		cache[id] = {data: data, element: element, size: 1}
	}
}

StyleCachePrototype.pop = function(element) {
	var id = element._uniqueId
	var data = this._cache[id]
	if (data === undefined)
		return

	delete this._cache[id]
	return data
}

StyleCachePrototype.apply = function() {
	var cache = this._cache
	this._cache = {}

	for(var id in cache) {
		var entry = cache[id]
		entry.element.updateStyle(entry)
	}
}

var StyleClassifier = function (prefix) {
	var style = document.createElement('style')
	style.type = 'text/css'
	document.head.appendChild(style)

	this.prefix = prefix + 'C-'
	this.style = style
	this.total = 0
	this.stats = {}
	this.classes = {}
	this.classes_total = 0
	this._addRule = exports.createAddRule(style)
}

var StyleClassifierPrototype = StyleClassifier.prototype
StyleClassifierPrototype.constructor = StyleClassifier

StyleClassifierPrototype.add = function(rule) {
	this.stats[rule] = (this.stats[rule] || 0) + 1
	++this.total
}

StyleClassifierPrototype.register = function(rules) {
	var rule = rules.join(';')
	var classes = this.classes
	var cls = classes[rule]
	if (cls !== undefined)
		return cls

	cls = classes[rule] = this.prefix + this.classes_total++
	this._addRule('.' + cls, rule)
	return cls
}

StyleClassifierPrototype.classify = function(rules) {
	var total = this.total
	if (total < 10) //fixme: initial population threshold
		return ''

	rules.sort() //mind vendor prefixes!
	var classified = []
	var hot = []
	var stats = this.stats
	rules.forEach(function(rule, idx) {
		var hits = stats[rule]
		var usage = hits / total
		if (usage > 0.05) { //fixme: usage threshold
			classified.push(rule)
			hot.push(idx)
		}
	})
	if (hot.length < 2)
		return ''
	hot.forEach(function(offset, idx) {
		rules.splice(offset - idx, 1)
	})
	return this.register(classified)
}

var _modernizrCache = {}
if (_globals.core.userAgent.toLowerCase().indexOf('webkit') >= 0)
	_modernizrCache['appearance'] = '-webkit-appearance'

var getPrefixedName = function(name) {
	var prefixedName = _modernizrCache[name]
	if (prefixedName === undefined)
		_modernizrCache[name] = prefixedName = window.Modernizr.prefixedCSS(name)
	return prefixedName
}

exports.getPrefixedName = getPrefixedName

var passiveListeners = ['touchstart', 'touchend', 'wheel', 'scroll']
var passiveArg = Modernizr.passiveeventlisteners ? {passive: true} : false

var registerGenericListener = function(target) {
	var storage = target.__domEventListeners
	if (storage === undefined)
		storage = target.__domEventListeners = {}

	target.onListener('',
		function(name) {
			//log('registering generic event', name)
			var callback = storage[name] = target._context.wrapNativeCallback(function() {
				target.emitWithArgs(name, arguments)
			})

			var args = [name, callback]
			if (passiveListeners.indexOf(name) >= 0)
				args.push(passiveArg)

			target.dom.addEventListener.apply(target.dom, args)
		},
		function(name) {
			//log('removing generic event', name)
			target.dom.removeEventListener(name, storage[name])
		}
	)
}

var _loadedStylesheets = {}

exports.loadExternalStylesheet = function(url) {
	if (!_loadedStylesheets[url]) {
		var link = document.createElement('link')
		link.setAttribute('rel', "stylesheet")
		link.setAttribute('href', url)
		document.head.appendChild(link)
		_loadedStylesheets[url] = true
	}
}

var lastId = 0

var nodesCache = {};

/**
 * @constructor
 */

function mangleClass(name) {
	return $manifest$html5$prefix + name
}

exports.Element = function(context, tag, cls) {
	if (typeof tag === 'string') {
		if (cls === undefined)
			cls = ''

		var key = tag + '.' + cls
		if (!nodesCache[key]) {
			var el = document.createElement(tag)
			if ($manifest$html5$prefix || cls)
				el.classList.add(mangleClass(cls))
			if ($manifest$html5$prefix && cls)
				el.classList.add(mangleClass('')) //base item style, fixme: pass array here?
			nodesCache[key] = el
		}
		this.dom = nodesCache[key].cloneNode(false);
	}
	else
		this.dom = tag

	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this._transitions = {}
	this._class = ''
	this._widthAdjust = 0
	this._uniqueId = String(++lastId)
	this._firstChildIndex = 0

	registerGenericListener(this)
}

var ElementPrototype = exports.Element.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
ElementPrototype.constructor = exports.Element

ElementPrototype.addClass = function(cls) {
	this.dom.classList.add(cls)
}

ElementPrototype.appendChildren = function(children) {
	if (children.length > 0) {
		var fragment = document.createDocumentFragment()
		children.forEach(function(child) {
			fragment.appendChild(child)
		})
		this.dom.appendChild(fragment)
	}
}

ElementPrototype.removeChildren = function(ui) {
	var removedChildren = []

	var dom = this.dom
	ui.children.forEach(function(child) {
		var element = child.element
		if (element !== undefined) {
			var childNode = element.dom
			if (childNode.parentNode === dom) {
				dom.removeChild(childNode)
				removedChildren.push(childNode)
			}
		}
	})
	return removedChildren
}


ElementPrototype.setHtml = function(html, component) {
	this._widthAdjust = 0 //reset any text related rounding corrections
	var dom = this.dom
	var children
	if (component !== undefined)
		children = this.removeChildren(component)
	else
		children = []
	dom.innerHTML = html
	this.appendChildren(children)
}

ElementPrototype.width = function() {
	this.updateStyle()
	return this.dom.clientWidth - this._widthAdjust
}

ElementPrototype.height = function() {
	this.updateStyle()
	return this.dom.clientHeight
}

ElementPrototype.fullWidth = function() {
	this.updateStyle()
	return this.dom.scrollWidth - this._widthAdjust
}

ElementPrototype.fullHeight = function() {
	this.updateStyle()
	return this.dom.scrollHeight
}

ElementPrototype.style = function(name, style) {
	var cache = this._context._styleCache
	if (style !== undefined) {
		cache.update(this, name, style)
	} else if (typeof name === 'object') { //style({ }) assignment
		for(var k in name)
			cache.update(this, k, name[k])
	}
	else
		throw new Error('cache is write-only')
}

ElementPrototype.setAttribute = function(name, value) {
	this.dom.setAttribute(name, value)
}

/** @const */
var cssUnits = {
	'left': 'px',
	'top': 'px',
	'width': 'px',
	'height': 'px',

	'border-radius': 'px',
	'border-width': 'px',

	'margin-left': 'px',
	'margin-top': 'px',
	'margin-right': 'px',
	'margin-bottom': 'px',

	'padding-left': 'px',
	'padding-top': 'px',
	'padding-right': 'px',
	'padding-bottom': 'px',
	'padding': 'px'
}

ElementPrototype.forceLayout = function() {
	this.updateStyle()
	return this.dom.offsetWidth | this.dom.offsetHeight
}

ElementPrototype.updateStyle = function(updated) {
	var element = this.dom
	if (!element)
		return

	if (updated === undefined) {
		updated = this._context._styleCache.pop(this)
		if (updated === undefined) //no update at all
			return
	}

	var styles = updated.data

	var rules = []
	for(var name in styles) {
		var value = styles[name]
		//log('updateStyle', this._uniqueId, name, value)

		var prefixedName = getPrefixedName(name)
		var ruleName = prefixedName !== false? prefixedName: name
		if (Array.isArray(value))
			value = value.join(',')

		var unit = ''
		if (typeof value === 'number') {
			if (name in cssUnits)
				unit = cssUnits[name]
			if (name === 'width')
				value += this._widthAdjust
		}
		value += unit

		element.style[ruleName] = value
	}

	var cache = this._context._styleClassifier
	var cls = cache? cache.classify(rules): ''
	if (cls !== this._class) {
		var classList = element.classList
		if (this._class !== '')
			classList.remove(this._class)
		this._class = cls
		if (cls !== '')
			classList.add(cls)
	}
}

ElementPrototype.append = function(el) {
	this.dom.appendChild((el instanceof exports.Element)? el.dom: el)
}

ElementPrototype.discard = function() {
	_globals.core.RAIIEventEmitter.prototype.discard.apply(this)
	this.remove()
}

ElementPrototype.remove = function() {
	var dom = this.dom
	if (dom.parentNode)
		dom.parentNode.removeChild(dom)
}

exports.Document = function(context, dom) {
	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this.dom = dom

	registerGenericListener(this)
}

var DocumentPrototype = exports.Document.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
DocumentPrototype.constructor = exports.Document

exports.Window = function(context, dom) {
	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this.dom = dom

	registerGenericListener(this)
}

var WindowPrototype = exports.Window.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
WindowPrototype.constructor = exports.Window

WindowPrototype.width = function() {
	return this.dom.innerWidth
}

WindowPrototype.height = function() {
	return this.dom.innerHeight
}

WindowPrototype.scrollY = function() {
	return this.dom.scrollY
}

exports.getElement = function(ctx, tag) {
	var tags = document.getElementsByTagName(tag)
	if (tags.length != 1)
		throw new Error('no tag ' + tag + '/multiple tags')
	return new exports.Element(ctx, tags[0])
}

exports.init = function(ctx) {
	imageCache = new _globals.html5.cache.Cache(loadImage)

	ctx._styleCache = new StyleCache()
	var options = ctx.options
	var prefix = ctx._prefix
	var divId = options.id
	var tag = options.tag || 'div'

	if (prefix) {
		prefix += '-'
		log('Context: using prefix', prefix)
	}

	var doc = new _globals.html5.html.Document(ctx, document)
	ctx.document = doc

	var win = new _globals.html5.html.Window(ctx, window)
	ctx.window = win
	var w, h

	var html = exports
	var div = document.getElementById(divId)
	var topLevel = div === null
	if (!topLevel) {
		div = new html.Element(ctx, div)
		w = div.width()
		h = div.height()
		log('Context: found element by id, size: ' + w + 'x' + h)
		win.on('resize', function() { ctx.width = div.width(); ctx.height = div.height(); });
	} else {
		w = win.width();
		h = win.height();
		log("Context: window size: " + w + "x" + h);
		div = html.createElement(ctx, tag)
		div.dom.id = divId
		win.on('resize', function() { ctx.width = win.width(); ctx.height = win.height(); });
		var body = html.getElement(ctx, 'body')
		body.append(div);
	}

	if (Modernizr.canvastext) {
		ctx._textCanvas = html.createElement(ctx, 'canvas')
		ctx._textCanvas.style('width', 0)
		ctx._textCanvas.style('height', 0)
		div.append(ctx._textCanvas)
		ctx._textCanvasContext = ('getContext' in ctx._textCanvas.dom)? ctx._textCanvas.dom.getContext('2d'): null
	} else {
		ctx._textCanvasContext = null
	}

	ctx.element = div
	ctx.width = w
	ctx.height = h

	win.on('scroll', function(event) { ctx.scrollY = win.scrollY(); });

	var onFullscreenChanged = function(e) {
		var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
		ctx.fullscreen = state
	}

	new Array('webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange').forEach(function(name) {
		div.on(name, onFullscreenChanged)
	})

	win.on('keydown', function(event) {
		if (ctx.processKey(event))
			event.preventDefault()
	}) //fixme: add html.Document instead

	ctx._styleClassifier = $manifest$cssAutoClassificator? new StyleClassifier(ctx._prefix): null; //broken beyond repair
}


//fixme: this is sorta hack, generalize that across other backends
exports.initSystem = function(system) {
	var win = system._context.window

	win.on('focus', function() { system.pageActive = true })
	win.on('blur', function() { system.pageActive = false })

	system.screenWidth = window.screen.width
	system.screenHeight = window.screen.height
}

exports.createElement = function(ctx, tag, cls) {
	return new exports.Element(ctx, tag, cls)
}

exports.initRectangle = function(rect) {
}

var ImageComponent = _globals.core.Image

var updateImage = function(image, metrics) {
	if (!metrics) {
		image.status = ImageComponent.Error
		return
	}

	var style = {'background-image': 'url("' + image.source + '")'}

	var natW = metrics.width, natH = metrics.height
	image.sourceWidth = natW
	image.sourceHeight = natH

	if (image.fillMode !== ImageComponent.PreserveAspectFit) {
		image.paintedWidth = image.width
		image.paintedHeight = image.height
	}

	switch(image.fillMode) {
		case ImageComponent.Stretch:
			style['background-repeat'] = 'no-repeat'
			style['background-size'] = '100% 100%'
			break;
		case ImageComponent.TileVertically:
			style['background-repeat'] = 'repeat-y'
			style['background-size'] = '100% ' + natH + 'px'
			break;
		case ImageComponent.TileHorizontally:
			style['background-repeat'] = 'repeat-x'
			style['background-size'] = natW + 'px 100%'
			break;
		case ImageComponent.Tile:
			style['background-repeat'] = 'repeat-y repeat-x'
			style['background-size'] = 'auto'
			break;
		case ImageComponent.PreserveAspectCrop:
			style['background-repeat'] = 'no-repeat'
			style['background-position'] = 'center'
			style['background-size'] = 'cover'
			break;
		case ImageComponent.Pad:
			style['background-repeat'] = 'no-repeat'
			style['background-position'] = '0% 0%'
			style['background-size'] = 'auto'
			break;
		case ImageComponent.PreserveAspectFit:
			style['background-repeat'] = 'no-repeat'
			style['background-position'] = 'center'
			style['background-size'] = 'contain'
			var w = image.width, h = image.height
			var targetRatio = 0, srcRatio = natW / natH

			if (w && h)
				targetRatio = w / h

			if (srcRatio > targetRatio && w) { // img width aligned with target width
				image.paintedWidth = w;
				image.paintedHeight = w / srcRatio;
			} else {
				image.paintedHeight = h;
				image.paintedWidth = h * srcRatio;
			}
			break;
	}
	style['image-rendering'] = image.smooth? 'auto': 'pixelated'
	image.style(style)

	image.status = ImageComponent.Ready
	image._context._processActions()
}

var failImage = function(image) {
	image._onError()
	image._context._processActions()
}

var loadImage = function(url, callback) {
	var tmp = new Image()

	tmp.onerror = function() {
		tmp.onload = null
		tmp.onerror = null
		callback(null)
	}

	tmp.onload = function() {
		tmp.onload = null
		tmp.onerror = null
		callback({ width: tmp.naturalWidth, height: tmp.naturalHeight })
	}
	tmp.src = url
}

exports.initImage = function(image) {
}

exports.loadImage = function(image) {
	var callback = function(metrics) {
		updateImage(image, metrics)
	}

	if (image.source.indexOf('?') < 0) {
		imageCache.get(image.source, callback)
	} else {
		loadImage(image.source, callback)
	}
}

exports.initText = function(text) {
}

var layoutTextSetStyle = function(text, style) {
	switch(text.verticalAlignment) {
		case text.AlignTop:		text._topPadding = 0; break
		case text.AlignBottom:	text._topPadding = text.height - text.paintedHeight; break
		case text.AlignVCenter:	text._topPadding = (text.height - text.paintedHeight) / 2; break
	}
	style['padding-top'] = text._topPadding
	style['height'] = text.height - text._topPadding
	text.style(style)
}

exports.setText = function(text, html) {
	text.element.setHtml(html, text)
}

exports.layoutText = function(text) {
	var ctx = text._context
	var textCanvasContext = ctx._textCanvasContext
	var wrap = text.wrapMode !== _globals.core.Text.NoWrap
	var element = text.element

	var dom = element.dom

	var isHtml = text.textFormat === text.Html || text.text.search(/[\<\&]/) >= 0 //dubious check

	if (!wrap && textCanvasContext !== null && !isHtml) {
		var font = text.font
		var fontSize
		if (font.pointSize)
			fontSize = Math.round(font.pointSize * 96 / 72)
		else
			fontSize = font.pixelSize
		//log('fontSize = ', fontSize)

		textCanvasContext.font = fontSize + 'px ' + font.family

		//log('font from canvas:', textCanvasContext.font, font.family, font.pixelSize, font.pointSize, fontSize)
		var metrics = textCanvasContext.measureText(text.text)
		text.paintedWidth = metrics.width
		text.paintedHeight = fontSize * font.lineHeight
		//log('layoutText', text.text, text.paintedWidth, text.paintedHeight)
		layoutTextSetStyle(text, {})
		return
	}
	var removedChildren = element.removeChildren(text)

	if (!wrap)
		text.style({ width: 'auto', height: 'auto', 'padding-top': 0 }) //no need to reset it to width, it's already there
	else
		text.style({ 'height': 'auto', 'padding-top': 0})

	//this is the source of rounding error. For instance you have 186.3px wide text, this sets width to 186px and causes wrapping
	text.paintedWidth = element.fullWidth()
	text.paintedHeight = element.fullHeight()

	//this makes style to adjust width (by adding this value), and return back _widthAdjust less
	element._widthAdjust = 1

	var style
	if (!wrap)
		style = { width: text.width, height: text.height } //restore original width value (see 'if' above)
	else
		style = {'height': text.height }

	layoutTextSetStyle(text, style)
	element.appendChildren(removedChildren)
}

exports.run = function(ctx, onloadCallback) {
	ctx.window.on($manifest$expectRunContextEvent ? 'runContext' : 'load', function() {
		onloadCallback()
	})
}

exports.tick = function(ctx) {
	//log('tick')
	ctx._styleCache.apply()
}

///@private
var setTransition = function(component, name, animation) {
	var html5 = exports
	var transition = {
		property: html5.getPrefixedName('transition-property'),
		delay: html5.getPrefixedName('transition-delay'),
		duration: html5.getPrefixedName('transition-duration'),
		timing: html5.getPrefixedName('transition-timing-function')
	}
	var element = component.element
	element.forceLayout() //flush styles before setting transition

	name = html5.getPrefixedName(name) || name //replace transform: <prefix>rotate hack

	var transitions = element._transitions
	var property	= transitions[transition.property] || []
	var duration	= transitions[transition.duration] || []
	var timing		= transitions[transition.timing] || []
	var delay		= transitions[transition.delay] || []

	var idx = property.indexOf(name)
	if (idx === -1) { //if property not set
		if (animation) {
			property.push(name)
			duration.push(animation.duration + 'ms')
			timing.push(animation.easing)
			delay.push(animation.delay + 'ms')
		}
	} else { //property already set, adjust the params
		if (animation && animation.active()) {
			duration[idx] = animation.duration + 'ms'
			timing[idx] = animation.easing
			delay[idx] = animation.delay + 'ms'
		} else {
			property.splice(idx, 1)
			duration.splice(idx, 1)
			timing.splice(idx, 1)
			delay.splice(idx, 1)
		}
	}

	transitions[transition.property] = property
	transitions[transition.duration] = duration
	transitions[transition.timing] = timing
	transitions[transition.delay] = delay

	//FIXME: orsay animation is not working without this shit =(
	if (component._context.system.os === 'orsay' || component._context.system.os === 'netcast') {
		transitions["transition-property"] = property
		transitions["transition-duration"] = duration
		transitions["transition-delay"] = delay
		transitions["transition-timing-function"] = timing
	}
	component.style(transitions)
	return true
}

var cssMappings = {
	width: 'width', height: 'height',
	x: 'left', y: 'top', viewX: 'left', viewY: 'top',
	opacity: 'opacity',
	border: 'border',
	radius: 'border-radius',
	rotate: 'transform',
	boxshadow: 'box-shadow',
	transform: 'transform',
	visible: 'visibility', visibleInView: 'visibility',
	background: 'background',
	color: 'color',
	backgroundImage: 'background-image',
	font: 'font'
}

///@private tries to set animation on name using css transitions, returns true on success
exports.setAnimation = function (component, name, animation) {
	if (!exports.capabilities.csstransitions || $manifest$cssDisableTransitions || (animation && !animation.cssTransition))
		return false

	var css = cssMappings[name]
	return css !== undefined? setTransition(component, css, animation): false
}

exports.requestAnimationFrame = Modernizr.prefixed('requestAnimationFrame', window)	|| function(callback) { return setTimeout(callback, 0) }
exports.cancelAnimationFrame = Modernizr.prefixed('cancelAnimationFrame', window)	|| function(id) { return clearTimeout(id) }

exports.enterFullscreenMode = function(el) { return Modernizr.prefixed('requestFullscreen', el.dom)() }
exports.exitFullscreenMode = function() { return window.Modernizr.prefixed('exitFullscreen', document)() }
exports.inFullscreenMode = function () { return !!window.Modernizr.prefixed('fullscreenElement', document) }

return exports;
} )()
_globals.html5.localstorage = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import html5.localstorage]=====================

var LocalStorage = function(parent) {
	if (parent && parent.name !== undefined) {
		// TODO: implement properties sunchronization using parent._setProperty() and parent.ready()
	}
	this._storage = window.localStorage;
	if (!this._storage)
		throw new Error("no local storage support")
}

LocalStorage.prototype.get = function(name, callback, error) {
	var value = this._storage.getItem(name)
	if (value !== null)
		callback(value)
	else
		error(new Error('no item with name ' + name))
}

LocalStorage.prototype.set = function(name, value) {
	this._storage.setItem(name, value)
}

LocalStorage.prototype.erase = function(name, error) {
	this._storage.removeItem(name)
}

exports.createLocalStorage = function(parent) {
	return new LocalStorage(parent)
}

exports.LocalStorage = LocalStorage

return exports;
} )()
_globals.html5.location = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import html5.location]=====================

var Location = function(ui) {
	this._ui = ui
	var location = window.location
	this.updateActualValues()
	var self = this
	var context = ui._context
	context.window.on("hashchange", function() { self._ui.hash = location.hash }.bind(this))
	context.window.on("popstate", function() { self.updateActualValues() }.bind(this))
}

Location.prototype.updateActualValues = function() {
	var ui = this._ui
	var windowContext = ui._context.window.dom
	ui.hash = windowContext.location.hash
	ui.href = windowContext.location.href
	ui.port = windowContext.location.port
	ui.host = windowContext.location.host
	ui.origin = windowContext.location.origin
	ui.hostname = windowContext.location.hostname
	ui.pathname = windowContext.location.pathname
	ui.protocol = windowContext.location.protocol
	ui.search = windowContext.location.search
	ui.state = windowContext.history.state
}

Location.prototype.changeHref = function(href) {
	this._ui._context.window.dom.location.href = href
	this.updateActualValues()
}

Location.prototype.pushState = function(state, title, url) {
	var ui = this._ui
	var windowContext = ui._context.window.dom
	if (windowContext.location.hostname) {
		windowContext.history.pushState(state, title, url)
		this.updateActualValues()
	} else {
		ui._context.document.title = title
		this._ui.state = state
	}
}

exports.createLocation = function(ui) {
	return new Location(ui)
}

exports.Location = Location

return exports;
} )()
_globals.video.html5.backend = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import video.html5.backend]=====================

var Player = function(ui) {
	var player = ui._context.createElement('video')
	player.dom.preload = "metadata"

	var dom = player.dom
	player.on('play', function() { ui.waiting = false; ui.paused = dom.paused }.bind(ui))
	player.on('pause', function() { ui.paused = dom.paused }.bind(ui))
	player.on('ended', function() { ui.finished() }.bind(ui))
	player.on('seeked', function() { log("seeked"); ui.seeking = false; ui.waiting = false }.bind(ui))
	player.on('canplay', function() { log("canplay", dom.readyState); ui.ready = dom.readyState }.bind(ui))
	player.on('seeking', function() { log("seeking"); ui.seeking = true; ui.waiting = true }.bind(ui))
	player.on('waiting', function() { log("waiting"); ui.waiting = true }.bind(ui))
	player.on('stalled', function() { log("Was stalled", dom.networkState); }.bind(ui))
	player.on('emptied', function() { log("Was emptied", dom.networkState); }.bind(ui))
	player.on('volumechange', function() { ui.muted = dom.muted }.bind(ui))
	player.on('canplaythrough', function() { log("ready to play"); ui.paused = dom.paused }.bind(ui))

	player.on('error', function() {
		log("Player error occured", dom.error, "src", ui.source)

		if (!dom.error || !ui.source)
			return

		ui.error(dom.error)

		log("player.error", dom.error)
		switch (dom.error.code) {
		case 1:
			log("MEDIA_ERR_ABORTED error occured")
			break;
		case 2:
			log("MEDIA_ERR_NETWORK error occured")
			break;
		case 3:
			log("MEDIA_ERR_DECODE error occured")
			break;
		case 4:
			log("MEDIA_ERR_SRC_NOT_SUPPORTED error occured")
			break;
		default:
			log("UNDEFINED error occured")
			break;
		}
	}.bind(ui))

	player.on('timeupdate', function() {
		ui.waiting = false
		if (!ui.seeking)
			ui.progress = dom.currentTime
	}.bind(ui))

	player.on('durationchange', function() {
		var d = dom.duration
		log("Duration", d)
		ui.duration = isFinite(d) ? d : 0
	}.bind(ui))

	player.on('progress', function() {
		var last = dom.buffered.length - 1
		ui.waiting = false
		if (last >= 0)
			ui.buffered = dom.buffered.end(last) - dom.buffered.start(last)
	}.bind(ui))

	this.element = player
	this.ui = ui

	ui.element.remove()
	ui.element = player
	ui.parent.element.append(ui.element)
}

Player.prototype.setSource = function(url) {
	this.ui.ready = false
	this.element.dom.src = url
}

Player.prototype.play = function() {
	this.element.dom.play()
}

Player.prototype.pause = function() {
	this.element.dom.pause()
}

Player.prototype.stop = function() {
	//where is no 'stop' method in html5 video player just pause instead
	this.pause()
}

Player.prototype.seek = function(delta) {
	this.element.dom.currentTime += delta
}

Player.prototype.seekTo = function(tp) {
	this.element.dom.currentTime = tp
}

Player.prototype.setVolume = function(volume) {
	this.element.dom.volume = volume
}

Player.prototype.setMute = function(muted) {
	this.element.dom.muted = muted
}

Player.prototype.setLoop = function(loop) {
	this.element.dom.loop = loop
}

Player.prototype.setRect = function(l, t, r, b) {
	//not needed in this port
}

Player.prototype.setVisibility = function(visible) {
	log('VISIBILITY LOGIC MISSING HERE, visible:', visible)
}

Player.prototype.setBackgroundColor = function(color) {
	var Color = _globals.core.Color
	this.element.dom.style.backgroundColor = new Color(color).rgba()
}


exports.createPlayer = function(ui) {
	return new Player(ui)
}

exports.probeUrl = function(url) {
	return 50
}

exports.Player = Player

return exports;
} )()
_globals.video.videojs.backend = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import video.videojs.backend]=====================

var Player = function(ui) {
	var player = ui._context.createElement('video')
	player.dom.preload = "metadata"

	if (ui.autoPlay)
		player.setAttribute('autoplay')
	player.setAttribute('preload', 'auto')
	player.setAttribute('data-setup', '{}')
	player.setAttribute('class', 'video-js')

	var dom = player.dom
	player.on('play', function() { ui.waiting = false; ui.paused = dom.paused }.bind(ui))
	player.on('pause', function() { ui.paused = dom.paused }.bind(ui))
	player.on('ended', function() { ui.finished() }.bind(ui))
	player.on('seeked', function() { log("seeked"); ui.seeking = false; ui.waiting = false }.bind(ui))
	player.on('canplay', function() { log("canplay", dom.readyState); ui.ready = dom.readyState }.bind(ui))
	player.on('seeking', function() { log("seeking"); ui.seeking = true; ui.waiting = true }.bind(ui))
	player.on('waiting', function() { log("waiting"); ui.waiting = true }.bind(ui))
	player.on('stalled', function() { log("Was stalled", dom.networkState); }.bind(ui))
	player.on('emptied', function() { log("Was emptied", dom.networkState); }.bind(ui))
	player.on('volumechange', function() { ui.muted = dom.muted }.bind(ui))
	player.on('canplaythrough', function() { log("ready to play"); if (ui.autoPlay) dom.play() }.bind(ui))

	player.on('error', function() {
		log("Player error occured")
		ui.error(dom.error)

		if (!dom.error)
			return

		log("player.error", dom.error)
		switch (dom.error.code) {
		case 1:
			log("MEDIA_ERR_ABORTED error occured")
			break;
		case 2:
			log("MEDIA_ERR_NETWORK error occured")
			break;
		case 3:
			log("MEDIA_ERR_DECODE error occured")
			break;
		case 4:
			log("MEDIA_ERR_SRC_NOT_SUPPORTED error occured")
			break;
		default:
			log("UNDEFINED error occured")
			break;
		}
	}.bind(ui))


	player.on('timeupdate', function() {
		ui.waiting = false
		if (!ui.seeking)
			ui.progress = dom.currentTime
	}.bind(ui))

	player.on('durationchange', function() {
		var d = dom.duration
		ui.ready = false
		ui.duration = isFinite(d) ? d : 0
	}.bind(ui))

	player.on('progress', function() {
		var last = dom.buffered.length - 1
		ui.waiting = false
		if (last >= 0)
			ui.buffered = dom.buffered.end(last) - dom.buffered.start(last)
	}.bind(ui))

	this.element = player
	this.ui = ui

	var uniqueId = 'videojs' + this.element._uniqueId
	player.setAttribute('id', uniqueId)

	ui.element.remove()
	ui.element = player
	ui.parent.element.append(ui.element)

	this.videojs = window.videojs(uniqueId)
	this.videojs.width = 'auto'
	this.videojs.height = 'auto'

	var errorDisplay = document.getElementsByClassName("vjs-error-display")
	if (errorDisplay && errorDisplay.length)
		errorDisplay[0].style.display = 'none'

	var videojsSpinner = document.getElementsByClassName("vjs-loading-spinner")
	if (videojsSpinner && videojsSpinner.length)
		videojsSpinner[0].style.display = 'none'

	this.videojsContaner = document.getElementById(uniqueId)
	this.videojsContaner.style.zindex = -1
}

Player.prototype = Object.create(_globals.video.html5.backend.Player.prototype)

Player.prototype.setSource = function(url) {
	var media = { 'src': url }
	log("SetSource", url)
	if (url) {
		var urlLower = url.toLowerCase()
		var querryIndex = url.indexOf("?")
		if (querryIndex >= 0)
			urlLower = urlLower.substring(0, querryIndex)
		var extIndex = urlLower.lastIndexOf(".")
		var extension = urlLower.substring(extIndex, urlLower.length - 1)
		if (extension == ".m3u8" || extension == ".m3u")
			media.type = 'application/x-mpegURL'
		else if (extension == ".mpd")
			media.type = 'application/dash+xml'
	}
	this.videojs.src(media, { html5: { hls: { withCredentials: true } }, fluid: true, preload: 'none', techOrder: ["html5"] })
}

Player.prototype.play = function() {
	var playPromise = this.element.dom.play()
	if (playPromise !== undefined) {
		playPromise.catch(function(e) {
			log('play error:', e)
			if (this.ui.autoPlay && e.code == DOMException.ABORT_ERR)
				this.element.dom.play()
		}.bind(this))
	}
}

Player.prototype.setRect = function(l, t, r, b) {
	this.videojsContaner.style.width = (r - l) + "px"
	this.videojsContaner.style.height = (b - t) + "px"
}

exports.createPlayer = function(ui) {
	return new Player(ui)
}

exports.probeUrl = function(url) {
	return window.videojs ? 60 : 0
}

return exports;
} )()
_globals.web.device = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import web.device]=====================

var Device = function(ui) {
	var context = ui._context
	var deviceString = context.system.os + "_" + context.system.browser
	deviceString = deviceString.replace(/\s/g, '')
	ui.deviceId = deviceString + "_" + Math.random().toString(36).substr(2, 9)
}

exports.createDevice = function(ui) {
	return new Device(ui)
}

exports.Device = Device

return exports;
} )()
_globals.controls.pure.format = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import controls.pure.format]=====================

exports.currency = function(v, n, x) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return v.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}

exports.format = function() {
	var args = [].slice.call(arguments);
	var initial = args.shift();

	function replacer (text, replacement) {
		return text.replace('%s', replacement);
	}
	return args.reduce(replacer, initial);
}
return exports;
} )()


return exports;
} )();
try {
	var l10n = {}

	var context = qml._context = new qml.core.Context(null, false, {id: 'qml-context-compress', l10n: l10n, nativeContext: null})
	context.init()
	context.start(new qml.src.UiCompress(context))
	context.run()
} catch(ex) { log("qml initialization failed: ", ex, ex.stack) }
