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
exports.CartEntity = void 0;
const cart_product_entity_1 = require("../../cart-product/entities/cart-product.entity");
const typeorm_1 = require("typeorm");
let CartEntity = exports.CartEntity = class CartEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], CartEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', nullable: false }),
    __metadata("design:type", Number)
], CartEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'active', nullable: false }),
    __metadata("design:type", Boolean)
], CartEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CartEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CartEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_product_entity_1.CartProductEntity, (cartProduct) => cartProduct.cart),
    __metadata("design:type", Array)
], CartEntity.prototype, "cartProduct", void 0);
exports.CartEntity = CartEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'cart' })
], CartEntity);
//# sourceMappingURL=cart.entity.js.map