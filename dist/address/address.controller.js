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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const user_type_enum_1 = require("../user/enum/user-type.enum");
const address_service_1 = require("./address.service");
const createAddress_dto_1 = require("./dtos/createAddress.dto");
const returnAddress_dto_1 = require("./dtos/returnAddress.dto");
let AddressController = exports.AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async createAddress(createAddressDto, userId) {
        return this.addressService.createAddress(createAddressDto, userId);
    }
    async findAddressByUserId(userId) {
        return (await this.addressService.findAddressByUserId(userId)).map((address) => new returnAddress_dto_1.ReturnAddressDto(address));
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAddress_dto_1.CreateAddressDto, Number]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "createAddress", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "findAddressByUserId", null);
exports.AddressController = AddressController = __decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.User, user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
//# sourceMappingURL=address.controller.js.map