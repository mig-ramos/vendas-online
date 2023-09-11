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
exports.OrderProductEntity = void 0;
const order_entity_1 = require("../../order/entities/order.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let OrderProductEntity = exports.OrderProductEntity = class OrderProductEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'order_id', nullable: false }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'product_id', nullable: false }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'amount', nullable: false }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', nullable: false }),
    __metadata("design:type", Number)
], OrderProductEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrderProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], OrderProductEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.OrderEntity, (order) => order.ordersProduct),
    (0, typeorm_1.JoinColumn)({ name: 'order_id', referencedColumnName: 'id' }),
    __metadata("design:type", order_entity_1.OrderEntity)
], OrderProductEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.ordersProduct),
    (0, typeorm_1.JoinColumn)({ name: 'product_id', referencedColumnName: 'id' }),
    __metadata("design:type", product_entity_1.ProductEntity)
], OrderProductEntity.prototype, "product", void 0);
exports.OrderProductEntity = OrderProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_product' })
], OrderProductEntity);
//# sourceMappingURL=order-product.entity.js.map