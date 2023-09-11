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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_product_service_1 = require("../cart-product/cart-product.service");
const typeorm_2 = require("typeorm");
const cart_entity_1 = require("./entities/cart.entity");
const LINE_AFFECTED = 1;
let CartService = exports.CartService = class CartService {
    constructor(cartRepository, cartProductService) {
        this.cartRepository = cartRepository;
        this.cartProductService = cartProductService;
    }
    async clearCart(userId) {
        const cart = await this.findCartByUserId(userId);
        await this.cartRepository.save({
            ...cart,
            active: false,
        });
        return {
            raw: [],
            affected: LINE_AFFECTED,
        };
    }
    async findCartByUserId(userId, isRelations) {
        const relations = isRelations
            ? {
                cartProduct: {
                    product: true,
                },
            }
            : undefined;
        const cart = await this.cartRepository.findOne({
            where: {
                userId,
                active: true,
            },
            relations,
        });
        if (!cart) {
            throw new common_1.NotFoundException(`Cart active not found`);
        }
        return cart;
    }
    async createCart(userId) {
        return this.cartRepository.save({
            active: true,
            userId,
        });
    }
    async insertProductInCart(insertCartDTO, userId) {
        const cart = await this.findCartByUserId(userId).catch(async () => {
            return this.createCart(userId);
        });
        await this.cartProductService.insertProductInCart(insertCartDTO, cart);
        return cart;
    }
    async deleteProductCart(productId, userId) {
        const cart = await this.findCartByUserId(userId);
        return this.cartProductService.deleteProductCart(productId, cart.id);
    }
    async updateProductInCart(updateCartDTO, userId) {
        const cart = await this.findCartByUserId(userId).catch(async () => {
            return this.createCart(userId);
        });
        await this.cartProductService.updateProductInCart(updateCartDTO, cart);
        return cart;
    }
};
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.CartEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cart_product_service_1.CartProductService])
], CartService);
//# sourceMappingURL=cart.service.js.map