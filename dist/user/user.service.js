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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const password_1 = require("../utils/password");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const user_type_enum_1 = require("./enum/user-type.enum");
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto, userType) {
        const user = await this.findUserByEmail(createUserDto.email).catch(() => undefined);
        if (user) {
            throw new common_1.BadGatewayException('email registered in system');
        }
        const passwordHashed = await (0, password_1.createPasswordHashed)(createUserDto.password);
        return this.userRepository.save({
            ...createUserDto,
            typeUser: userType ? userType : user_type_enum_1.UserType.User,
            password: passwordHashed,
        });
    }
    async getUserByIdUsingRelations(userId) {
        return this.userRepository.findOne({
            where: {
                id: userId,
            },
            relations: {
                addresses: {
                    city: {
                        state: true,
                    },
                },
            },
        });
    }
    async getAllUser() {
        return this.userRepository.find();
    }
    async findUserById(userId) {
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`UserId: ${userId} Not Found`);
        }
        return user;
    }
    async findUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Email: ${email} Not Found`);
        }
        return user;
    }
    async updatePasswordUser(updatePasswordDTO, userId) {
        const user = await this.findUserById(userId);
        const passwordHashed = await (0, password_1.createPasswordHashed)(updatePasswordDTO.newPassword);
        const isMatch = await (0, password_1.validatePassword)(updatePasswordDTO.lastPassword, user.password || '');
        if (!isMatch) {
            throw new common_1.BadRequestException('Last password invalid');
        }
        return this.userRepository.save({
            ...user,
            password: passwordHashed,
        });
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map