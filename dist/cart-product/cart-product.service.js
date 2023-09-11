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
exports.CartProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
const cart_product_entity_1 = require("./entities/cart-product.entity");
let CartProductService = exports.CartProductService = class CartProductService {
    constructor(cartProductRepository, productService) {
        this.cartProductRepository = cartProductRepository;
        this.productService = productService;
    }
    async verifyProductInCart(productId, cartId) {
        const cartProduct = await this.cartProductRepository.findOne({
            where: {
                productId,
                cartId,
            },
        });
        if (!cartProduct) {
            throw new common_1.NotFoundException('Product not found in cart');
        }
        return cartProduct;
    }
    async createProductInCart(insertCartDTO, cartId) {
        return this.cartProductRepository.save({
            amount: insertCartDTO.amount,
            productId: insertCartDTO.productId,
            cartId,
        });
    }
    async insertProductInCart(insertCartDTO, cart) {
        await this.productService.findProductById(insertCartDTO.productId);
        const cartProduct = await this.verifyProductInCart(insertCartDTO.productId, cart.id).catch(() => undefined);
        if (!cartProduct) {
            return this.createProductInCart(insertCartDTO, cart.id);
        }
        return this.cartProductRepository.save({
            ...cartProduct,
            amount: cartProduct.amount + insertCartDTO.amount,
        });
    }
    async updateProductInCart(updateCartDTO, cart) {
        await this.productService.findProductById(updateCartDTO.productId);
        const cartProduct = await this.verifyProductInCart(updateCartDTO.productId, cart.id);
        return this.cartProductRepository.save({
            ...cartProduct,
            amount: updateCartDTO.amount,
        });
    }
    async deleteProductCart(productId, cartId) {
        return this.cartProductRepository.delete({ productId, cartId });
    }
};
exports.CartProductService = CartProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_product_entity_1.CartProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        product_service_1.ProductService])
], CartProductService);
//# sourceMappingURL=cart-product.service.js.map