"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnUserDto = void 0;
const returnAddress_dto_1 = require("../../address/dtos/returnAddress.dto");
class ReturnUserDto {
    constructor(userEntity) {
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.phone = userEntity.phone;
        this.cpf = userEntity.cpf;
        this.addresses = userEntity.addresses
            ? userEntity.addresses.map((address) => new returnAddress_dto_1.ReturnAddressDto(address))
            : undefined;
    }
}
exports.ReturnUserDto = ReturnUserDto;
//# sourceMappingURL=returnUser.dto.js.map