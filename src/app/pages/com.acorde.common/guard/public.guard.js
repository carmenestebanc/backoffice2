"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var PublicGuard = (function () {
    function PublicGuard(_router) {
        this._router = _router;
    }
    PublicGuard.prototype.canActivate = function (route, state) {
        if (!this._isGuest) {
            this._router.navigate(['/pages/agencies', {}]);
        }
        return this._isGuest;
    };
    Object.defineProperty(PublicGuard.prototype, "_isGuest", {
        get: function () {
            return true; //!localStorage.getItem('bearer');
        },
        enumerable: true,
        configurable: true
    });
    return PublicGuard;
}());
PublicGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], PublicGuard);
exports.PublicGuard = PublicGuard;
//# sourceMappingURL=public.guard.js.map