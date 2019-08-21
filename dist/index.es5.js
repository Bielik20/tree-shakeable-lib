import { Inject } from 'typescript-ioc';

var DependencyClass = /*@__PURE__*/ (function () {
    function DependencyClass() {
        this.name = 'bielik name';
        this.surname = 'bielik surname';
    }
    return DependencyClass;
}());

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var ConsumerClass = /*@__PURE__*/ (function () {
    function ConsumerClass(dependency) {
        this.dependency = dependency;
    }
    ConsumerClass.prototype.printName = function () {
        console.log(this.dependency.name + " " + this.dependency.surname);
    };
    ConsumerClass = __decorate([
        __param(0, Inject),
        __metadata("design:paramtypes", [DependencyClass])
    ], ConsumerClass);
    return ConsumerClass;
}());

export { ConsumerClass, DependencyClass };
//# sourceMappingURL=index.es5.js.map
