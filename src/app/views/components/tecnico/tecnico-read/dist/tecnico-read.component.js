"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TecnicoReadComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var TecnicoReadComponent = /** @class */ (function () {
    function TecnicoReadComponent(service, router) {
        this.service = service;
        this.router = router;
        this.tecnicos = [];
        this.displayedColumns = ['id', 'nome', 'cpf', 'telefone', 'action'];
        this.dataSource = new table_1.MatTableDataSource(this.tecnicos);
    }
    TecnicoReadComponent.prototype.ngAfterViewInit = function () {
        this.findAll();
    };
    TecnicoReadComponent.prototype.findAll = function () {
        var _this = this;
        this.service.findAll().subscribe(function (resposta) {
            _this.tecnicos = resposta;
            console.log(_this.tecnicos);
            _this.dataSource = new table_1.MatTableDataSource(_this.tecnicos);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    TecnicoReadComponent.prototype.navigateToCreate = function () {
        this.router.navigate(['tecnicos/create']);
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], TecnicoReadComponent.prototype, "paginator");
    TecnicoReadComponent = __decorate([
        core_1.Component({
            selector: 'app-tecnico-read',
            templateUrl: './tecnico-read.component.html',
            styleUrls: ['./tecnico-read.component.css']
        })
    ], TecnicoReadComponent);
    return TecnicoReadComponent;
}());
exports.TecnicoReadComponent = TecnicoReadComponent;
