"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreiosModule = void 0;
const common_1 = require("@nestjs/common");
const correios_service_1 = require("./correios.service");
const correios_controller_1 = require("./correios.controller");
const axios_1 = require("@nestjs/axios");
const city_module_1 = require("../city/city.module");
const nestjs_soap_1 = require("nestjs-soap");
let CorreiosModule = exports.CorreiosModule = class CorreiosModule {
};
exports.CorreiosModule = CorreiosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_soap_1.SoapModule.register({
                clientName: 'SOAP_CORREIOS',
                uri: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl',
            }),
            axios_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            }),
            city_module_1.CityModule,
        ],
        providers: [correios_service_1.CorreiosService],
        controllers: [correios_controller_1.CorreiosController],
        exports: [correios_service_1.CorreiosService],
    })
], CorreiosModule);
//# sourceMappingURL=correios.module.js.map