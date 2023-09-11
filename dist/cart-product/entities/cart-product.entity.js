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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProductEntity = void 0;
const cart_entity_1 = require("../../cart/entities/cart.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let CartProductEntity = exports.CartProductEntity = class CartProductEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], CartProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cart_id', nullable: false }),
    __metadata("design:type", Number)
], CartProductEntity.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'product_id', nullable: false }),
    __metadata("design:type", Number)
], CartProductEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amount', nullable: false }),
    __metadata("design:type", Number)
], CartProductEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CartProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CartProductEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (productEntity) => productEntity.cartProduct),
    (0, typeorm_1.JoinColumn)({ name: 'product_id', referencedColumnName: 'id' }),
    __metadata("design:type", product_entity_1.ProductEntity)
], CartProductEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cart_entity_1.CartEntity, (cartEntity) => cartEntity.cartProduct),
    (0, typeorm_1.JoinColumn)({ name: 'cart_id', referencedColumnName: 'id' }),
    __metadata("design:type", cart_entity_1.CartEntity)
], CartProductEntity.prototype, "cart", void 0);
exports.CartProductEntity = CartProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'cart_product' })
], CartProductEntity);
//# sourceMappingURL=cart-product.entity.js.map