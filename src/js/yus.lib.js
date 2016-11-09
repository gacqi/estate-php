/**
 * Yus.js：一个函数工具库
 * 作者：严广杰
 */
(function () {
    var root = this;

    var yus = function () {
        return {};
    };
    root.yus = yus;

    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    var push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ArrayProto.toString,
        hasOwnProperty = ArrayProto.hasOwnProperty;

    var nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create,
        nativeKeys = Object.keys;

    yus.log = function () {
        console.log.apply(root, arguments);
    };

    yus.beautify = function (sign) {
        if (!(typeof sign === "string")) {
            throw new Error("sign must be a string.");
        }
        var i, length, str = '';
        for (i = 1, length = arguments.length; i < length; i++) {
            str += arguments[i];
            if (i === (length - 1)) break;
            str += sign;
        }
        return str;
    };

    yus.each = function (obj, iteratee) {
        var i, length;
        if (nativeIsArray(obj)) {
            for (i = 0, length = obj.length; i < length; i++) {
                iteratee(obj[i], i, obj);
            }
        } else {
            var keys = nativeKeys(obj);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    };
    // 各种类型的判断
    yus.isElement = function (obj) {
        return !!(obj && obj.nodeType === 1);
    };

    yus.isArray = nativeIsArray || function (obj) {
        return toString.call(obj) === '[object Array]';
    };

    yus.isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || (type === 'object' && !!obj);
    };

    yus.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
        yus['is' + name] = function (obj) {
            return toString.call(obj) === '[object ' + name + ']';
        };
    });

    yus.isFinite = function (obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    yus.isNaN = function (obj) {
        return yus.isNumber(obj) && obj !== +obj;
    };

    yus.isBoolean = function (obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };

    yus.isNull = function (obj) {
        return obj === null;
    };

    yus.isUndefined = function (obj) {
        return obj === void 0;
    }

    yus.has = function (obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
    };

    // 取得对象的键
    yus.keys = function (obj) {
        if(!yus.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if(yus.has(obj,key)) keys.push(key);
        return keys;
    };

    // 取得对象的值
    yus.values=function(obj){
        var keys=yus.keys(obj);
        var length=keys.length;
        var values=Array(length);
        for(var i=0;i<length;i++){
            values[i]=obj[keys[i]];
        }
        return values;
    };

    yus.random = function (min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    //暂时只支持数组乱序
    yus.shuffle = function (obj) {
        var set = obj;
        var length = obj.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
            rand = yus.random(0, index);
            if (rand !== index) shuffled[index] = shuffled[rand];
            shuffled[rand] = set[index];
        }
        return shuffled;
    };
}.call(this));