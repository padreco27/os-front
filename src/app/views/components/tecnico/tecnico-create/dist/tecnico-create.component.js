"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TecnicoCreateComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var TecnicoCreateComponent = /** @class */ (function () {
    function TecnicoCreateComponent(router, service) {
        this.router = router;
        this.service = service;
        this.tecnico = {
            id: '',
            nome: '',
            cpf: '',
            telefone: ''
        };
        this.nome = new forms_1.FormControl('', [forms_1.Validators.minLength(5)]);
        this.cpf = new forms_1.FormControl('', [forms_1.Validators.minLength(11)]);
        this.telefone = new forms_1.FormControl('', [forms_1.Validators.minLength(11)]);
    }
    TecnicoCreateComponent.prototype.ngOnInit = function () {
    };
    TecnicoCreateComponent.prototype.cancel = function () {
        this.router.navigate(['tecnicos']);
    };
    TecnicoCreateComponent.prototype.create = function () {
        var _this = this;
        this.service.create(this.tecnico).subscribe(function (resposta) {
            _this.router.navigate(['tecnicos']);
            _this.service.message('Tecnico criado com sucesso!');
        }, function (err) {
            if (err.error.error.match('já cadastrado')) {
                _this.service.message(err.error.error);
            }
            else if (err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido") {
                _this.service.message("CPF inválido!");
            }
        });
    };
    TecnicoCreateComponent.prototype.errorValidName = function () {
        if (this.nome.invalid) {
            return 'O nome deve ter entre 5 e 100 caracteres!';
        }
        return false;
    };
    TecnicoCreateComponent.prototype.errorValidCpf = function () {
        if (this.cpf.invalid) {
            return 'O CPF deve ter entre 11 e 15 caracteres';
        }
        return false;
    };
    TecnicoCreateComponent.prototype.errorValidTelefone = function () {
        if (this.telefone.invalid) {
            return 'O telefone deve ter entre 11 e 18 caracteres!';
        }
        return false;
    };
    TecnicoCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-tecnico-create',
            templateUrl: './tecnico-create.component.html',
            styleUrls: ['./tecnico-create.component.css']
        })
    ], TecnicoCreateComponent);
    return TecnicoCreateComponent;
}());
exports.TecnicoCreateComponent = TecnicoCreateComponent;
