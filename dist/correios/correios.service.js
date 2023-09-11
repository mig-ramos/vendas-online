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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreiosService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const city_service_1 = require("../city/city.service");
const return_cep_dto_1 = require("./dtos/return-cep.dto");
const nestjs_soap_1 = require("nestjs-soap");
const cd_format_enum_1 = require("./enums/cd-format.enum");
let CorreiosService = exports.CorreiosService = class CorreiosService {
    constructor(soapClient, httpService, cityService) {
        this.soapClient = soapClient;
        this.httpService = httpService;
        this.cityService = cityService;
        this.URL_CORREIOS = process.env.URL_CEP_CORREIOS;
        this.CEP_COMPANY = process.env.CEP_COMPANY;
    }
    async findAddressByCep(cep) {
        const returnCep = await this.httpService.axiosRef
            .get(this.URL_CORREIOS.replace('{CEP}', cep))
            .then((result) => {
            if (result.data.erro === 'true') {
                throw new common_1.NotFoundException('CEP not found');
            }
            return result.data;
        })
            .catch((error) => {
            throw new common_1.BadRequestException(`Error in connection request ${error.message}`);
        });
        const city = await this.cityService
            .findCityByName(returnCep.localidade, returnCep.uf)
            .catch(() => undefined);
        return new return_cep_dto_1.ReturnCep(returnCep, city?.id, city?.state?.id);
    }
    async priceDelivery(cdService, cep, sizeProduct) {
        return new Promise((resolve) => {
            this.soapClient.CalcPrecoPrazo({
                nCdServico: cdService,
                sCepOrigem: this.CEP_COMPANY,
                sCepDestino: cep,
                nCdFormato: cd_format_enum_1.CdFormatEnum.BOX,
                nVlPeso: sizeProduct.weight,
                nVlComprimento: sizeProduct.length,
                nVlAltura: sizeProduct.height,
                nVlLargura: sizeProduct.width,
                nVlDiametro: sizeProduct.diameter,
                nCdEmpresa: '',
                sDsSenha: '',
                sCdMaoPropria: 'N',
                nVlValorDeclarado: sizeProduct.productValue < 25 ? 0 : sizeProduct.productValue,
                sCdAvisoRecebimento: 'N',
            }, (_, res) => {
                if (res) {
                    resolve(res);
                }
                else {
                    throw new common_1.BadRequestException('Error SOAP');
                }
            });
        });
    }
};
exports.CorreiosService = CorreiosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SOAP_CORREIOS')),
    __metadata("design:paramtypes", [nestjs_soap_1.Client,
        axios_1.HttpService,
        city_service_1.CityService])
], CorreiosService);
//# sourceMappingURL=correios.service.js.map