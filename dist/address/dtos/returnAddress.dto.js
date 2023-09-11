"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnAddressDto = void 0;
const rreturnCity_dto_1 = require("../../city/dtos/rreturnCity.dto");
class ReturnAddressDto {
    constructor(address) {
        this.id = address.id;
        this.complement = address.complement;
        this.numberAddress = address.numberAddress;
        this.cep = address.cep;
        this.city = address.city ? new rreturnCity_dto_1.ReturnCityDto(address.city) : undefined;
    }
}
exports.ReturnAddressDto = ReturnAddressDto;
//# sourceMappingURL=returnAddress.dto.js.map