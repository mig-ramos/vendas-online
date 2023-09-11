"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_module_1 = require("../product/product.module");
const cart_product_service_1 = require("./cart-product.service");
const cart_product_entity_1 = require("./entities/cart-product.entity");
let CartProductModule = exports.CartProductModule = class CartProductModule {
};
exports.CartProductModule = CartProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cart_product_entity_1.CartProductEntity]), product_module_1.ProductModule],
        providers: [cart_product_service_1.CartProductService],
        exports: [cart_product_service_1.CartProductService],
    })
], CartProductModule);
//# sourceMappingURL=cart-product.module.js.map