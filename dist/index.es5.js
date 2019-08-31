import { Injectable, Container } from 'typescript-ioc';
export { Scope } from 'typescript-ioc';

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

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var LibDepOfDep1 = /*@__PURE__*/ (function () {
    function LibDepOfDep1() {
        this.field = (Math.random() * 100).toFixed();
        console.log('constructor LibDepOfDep1', this.field);
    }
    LibDepOfDep1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], LibDepOfDep1);
    return LibDepOfDep1;
}());
var LibDepOfDep2 = /*@__PURE__*/ (function () {
    function LibDepOfDep2() {
        console.log('constructor LibDepOfDep2');
    }
    LibDepOfDep2 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], LibDepOfDep2);
    return LibDepOfDep2;
}());
var LibDependencyClass = /*@__PURE__*/ (function () {
    function LibDependencyClass(dep, dep2) {
        this.dep = dep;
        this.dep2 = dep2;
        this.name = 'bielik name';
        this.surname = 'bielik surname';
        console.log('constructor LibDependencyClass');
    }
    LibDependencyClass = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LibDepOfDep1, LibDepOfDep2])
    ], LibDependencyClass);
    return LibDependencyClass;
}());

var LibUnusedClass = /*@__PURE__*/ (function () {
    function LibUnusedClass() {
        console.log('constructor LibUnusedClass');
    }
    LibUnusedClass = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], LibUnusedClass);
    return LibUnusedClass;
}());

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)

var LibConsumerClass = /*@__PURE__*/ (function () {
    function LibConsumerClass(dependency) {
        this.dependency = dependency;
        console.log('constructor LibConsumerClass');
    }
    LibConsumerClass.prototype.printName = function () {
        console.log(this.dependency.name + " " + this.dependency.surname);
    };
    LibConsumerClass = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LibDependencyClass])
    ], LibConsumerClass);
    return LibConsumerClass;
}());

var container = /*@__PURE__*/ new Container();

export { LibConsumerClass, LibDepOfDep1, LibDepOfDep2, LibDependencyClass, LibUnusedClass, container };
//# sourceMappingURL=index.es5.js.map
