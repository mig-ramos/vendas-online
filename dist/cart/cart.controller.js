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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const user_type_enum_1 = require("../user/enum/user-type.enum");
const cart_service_1 = require("./cart.service");
const insert_cart_dto_1 = require("./dtos/insert-cart.dto");
const return_cart_dto_1 = require("./dtos/return-cart.dto");
const update_cart_dto_1 = require("./dtos/update-cart.dto");
let CartController = exports.CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async createCart(insertCart, userId) {
        return new return_cart_dto_1.ReturnCartDTO(await this.cartService.insertProductInCart(insertCart, userId));
    }
    async findCartByUserId(userId, res) {
        const cart = await this.cartService
            .findCartByUserId(userId, true)
            .catch(() => undefined);
        if (cart) {
            return cart;
        }
        res.status(204).send();
        return;
    }
    async clearCart(userId) {
        return this.cartService.clearCart(userId);
    }
    async deleteProductCart(productId, userId) {
        return this.cartService.deleteProductCart(productId, userId);
    }
    async updateProductInCart(updateCartDTO, userId) {
        return new return_cart_dto_1.ReturnCartDTO(await this.cartService.updateProductInCart(updateCartDTO, userId));
    }
};
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_cart_dto_1.InsertCartDTO, Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "findCartByUserId", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "clearCart", null);
__decorate([
    (0, common_1.Delete)('/product/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteProductCart", null);
__decorate([
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_cart_dto_1.UpdateCartDTO, Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateProductInCart", null);
exports.CartController = CartController = __decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.User, user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map