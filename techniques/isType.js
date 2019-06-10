"use strict";
/*
    How to determine object's type
 */
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);

const selfIsArray = isType('Array');

Array.selfIsArray || (Object.defineProperty(Array, 'selfIsArray', {
    value: selfIsArray,
    enumerable: false,
    configurable: true,
    writable: true
}));

const array = ['toto', 6];
console.log(selfIsArray(array));
console.log(Object.prototype.toString.call(array));
/*
const selfIsNumber = isType('Number');

Number.selfIsNumber || (Object.defineProperty(Number, 'selfIsNumber', {
    value: selfIsNumber,
    enumerable: false,
    configurable: true,
    writable: true
}));

console.log(Number.selfIsNumber(5));
*/
