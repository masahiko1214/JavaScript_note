// エラーが発生しないのをエラーにさせる
'use strict';

// const obj = {prop: 0};

const obj = {};

Object.defineProperty(obj,'prop',{
configurable: true,
value: 0,
writable: true
})


delete obj.prop

// configurable = 設定の変更の可否 writable = 値の書き換えの可否

obj.prop = 1;
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj,'prop');

console.log(descriptor);