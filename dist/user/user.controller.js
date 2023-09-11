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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const createUser_dto_1 = require("./dtos/createUser.dto");
const returnUser_dto_1 = require("./dtos/returnUser.dto");
const updatePassword_dto_1 = require("./dtos/updatePassword.dto");
const user_type_enum_1 = require("./enum/user-type.enum");
const user_service_1 = require("./user.service");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createAdmin(createUser) {
        return this.userService.createUser(createUser, user_type_enum_1.UserType.Admin);
    }
    async createUser(createUser) {
        return this.userService.createUser(createUser);
    }
    async getAllUser() {
        return (await this.userService.getAllUser()).map((userEntity) => new returnUser_dto_1.ReturnUserDto(userEntity));
    }
    async getUserById(userId) {
        return new returnUser_dto_1.ReturnUserDto(await this.userService.getUserByIdUsingRelations(userId));
    }
    async updatePasswordUser(updatePasswordDTO, userId) {
        return this.userService.updatePasswordUser(updatePasswordDTO, userId);
    }
    async getInfoUser(userId) {
        return new returnUser_dto_1.ReturnUserDto(await this.userService.getUserByIdUsingRelations(userId));
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Root),
    (0, common_1.Post)('/admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUser", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin),
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root, user_type_enum_1.UserType.User),
    (0, common_1.Patch)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updatePassword_dto_1.UpdatePasswordDTO, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePasswordUser", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root, user_type_enum_1.UserType.User),
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getInfoUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map