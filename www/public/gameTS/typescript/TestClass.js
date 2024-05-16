"use strict";
exports.__esModule = true;
exports.ClassMere = void 0;
var ClassMere = /** @class */ (function () {
    function ClassMere(name) {
        this.name = name;
        this.description = "tintin et milou";
    }
    ClassMere.prototype.bonjour = function () {
        console.log('bonjour ' + this.name);
        console.log(this.description);
    }; /*function*/
    return ClassMere;
}());
exports.ClassMere = ClassMere;
