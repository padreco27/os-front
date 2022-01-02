"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OsService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var OsService = /** @class */ (function () {
    function OsService(http, snack) {
        this.http = http;
        this.snack = snack;
        this.baseUrl = environment_1.environment.baseUrl;
    }
    OsService.prototype.findAll = function () {
        var url = this.baseUrl + "/os";
        return this.http.get(url);
    };
    OsService.prototype.findById = function (id) {
        var url = this.baseUrl + "/os/" + id;
        return this.http.get(url);
    };
    OsService.prototype.create = function (os) {
        var url = this.baseUrl + "/os";
        return this.http.post(url, os);
    };
    OsService.prototype.update = function (os) {
        var url = this.baseUrl + "/os";
        return this.http.put(url, os);
    };
    OsService.prototype["delete"] = function (id) {
        var url = this.baseUrl + "/os/" + id;
        return this.http["delete"](url);
    };
    OsService.prototype.message = function (msg) {
        this.snack.open("" + msg, 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 4000
        });
    };
    OsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OsService);
    return OsService;
}());
exports.OsService = OsService;
