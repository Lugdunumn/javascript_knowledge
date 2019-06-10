"use strict";
// implement by for loop
const selfMap = function (fn, context) {
    let arr = Array.prototype.slice.call(this);
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            mappedArr.push(fn.call(context, arr[i], i, this));
        }
    }
    return mappedArr;
};

// implement by reduce
const selfMap2 = function (fn, context) {
    let arr = Array.prototype.slice.call(this);
    return arr.reduce((pre, cur, index) => {
        return [...pre, fn.call(context, cur, index, this)];
    })
};

Array.prototype.selfMap || (Object.defineProperty(Array.prototype, 'selfMap', {
    value: selfMap,
    enumerable: false,
    configurable: true,
    writable: true
}));

Array.prototype.selfMap2 || (Object.defineProperty(Array.prototype, 'selfMap2', {
    value: selfMap2,
    enumerable: false,
    configurable: true,
    writable: true
}));


let arry = [1, 'z', true];

console.log(arry.selfMap(item => item));
console.log(arry.selfMap2(item => item + 'toto'));
