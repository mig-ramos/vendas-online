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
exports.ProductEntity = void 0;
const category_entity_1 = require("../../category/entities/category.entity");
const typeorm_1 = require("typeorm");
const cart_product_entity_1 = require("../../cart-product/entities/cart-product.entity");
const order_product_entity_1 = require("../../order-product/entities/order-product.entity");
let ProductEntity = exports.ProductEntity = class ProductEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', nullable: false }),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_id', nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image', nullable: false }),
    __metadata("design:type", String)
], ProductEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'weight', nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'length', nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'height', nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'width', nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'diameter', nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "diameter", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ProductEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_product_entity_1.CartProductEntity, (cartProduct) => cartProduct.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "cartProduct", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.products),
    (0, typeorm_1.JoinColumn)({ name: 'category_id', referencedColumnName: 'id' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ProductEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_product_entity_1.OrderProductEntity, (orderProduct) => orderProduct.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "ordersProduct", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product' })
], ProductEntity);
//# sourceMappingURL=product.entity.js.map