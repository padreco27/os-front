"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var form_field_1 = require("@angular/material/form-field");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var datepicker_1 = require("@angular/material/datepicker");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var snack_bar_1 = require("@angular/material/snack-bar");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var menu_1 = require("@angular/material/menu");
var animations_1 = require("@angular/platform-browser/animations");
var header_component_1 = require("./views/components/template/header/header.component");
var footer_component_1 = require("./views/components/template/footer/footer.component");
var nav_component_1 = require("./views/components/template/nav/nav.component");
var home_component_1 = require("./views/components/home/home.component");
var tecnico_component_1 = require("./views/components/tecnico/tecnico.component");
var tecnico_read_component_1 = require("./views/components/tecnico/tecnico-read/tecnico-read.component");
var tecnico_uptade_component_1 = require("./views/components/tecnico/tecnico-uptade/tecnico-uptade.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                tecnico_component_1.TecnicoComponent,
                tecnico_read_component_1.TecnicoReadComponent,
                tecnico_uptade_component_1.TecnicoUptadeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                datepicker_1.MatDatepickerModule,
                paginator_1.MatPaginatorModule,
                snack_bar_1.MatSnackBarModule,
                form_field_1.MatFormFieldModule,
                menu_1.MatMenuModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
