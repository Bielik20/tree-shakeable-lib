import { Subject } from 'rxjs';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function first() {
    var o = { a: '', b: '' };
    console.log('this is from first', __assign({}, o, { c: 'c' }));
}

function second(name) {
    console.log('this is from second');
    return new Subject();
}

var BaseClass = /*@__PURE__*/ (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var DummyClass = /*@__PURE__*/ (function (_super) {
    __extends(DummyClass, _super);
    function DummyClass() {
        var _this = _super.call(this) || this;
        _this.surname = 'bielik surname';
        _this.name = 'bielik';
        return _this;
    }
    Object.defineProperty(DummyClass.prototype, "nameGet", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    DummyClass.instance = new DummyClass();
    return DummyClass;
}(BaseClass));
var dummy = /*@__PURE__*/ new DummyClass();

function third() {
    console.log(dummy);
}

function engine() {
    first();
}

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)

function products() {
    console.log('this is from products');
    first();
}
var ProductsClass = /*@__PURE__*/ (function (_super) {
    __extends(ProductsClass, _super);
    function ProductsClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProductsClass;
}(DummyClass));

export { DummyClass, ProductsClass, dummy, engine, first, products, second, third };
//# sourceMappingURL=index.es5.js.map
