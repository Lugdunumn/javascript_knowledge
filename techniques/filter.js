"use strict";

const selfFilter = function (fn, context) {
    let arr = Array.prototype.slice.call(this);
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            fn.call(context, arr[i], i, this) && filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

Array.prototype.selfFilter || (Object.defineProperty(Array.prototype, 'selfFilter', {
    value: selfFilter,
    configurable: true,
    enumerable: false,
    writable: true
}));

const selfFilter2 = function (fn, context) {
    return this.reduce((pre, cur, index) => {
        return fn.call(context, cur, index, this) ? [...pre, cur] : [...pre]
    }, []);
};

Array.prototype.selfFilter2 || (Object.defineProperty(Array.prototype, 'selfFilter2', {
    value: selfFilter2,
    configurable: true,
    enumerable: false,
    writable: true
}));

let arr = [0, 1, 2];

console.log(arr.selfFilter(item => item === 1));
console.log(arr.selfFilter2(function (item) {
    return item === 1;
}, ['a', 'b', 'c']));
