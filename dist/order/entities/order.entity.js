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
exports.OrderEntity = void 0;
const address_entity_1 = require("../../address/entities/address.entity");
const order_product_entity_1 = require("../../order-product/entities/order-product.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let OrderEntity = exports.OrderEntity = class OrderEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], OrderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', nullable: false }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address_id', nullable: false }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "addressId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date', nullable: false }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_id', nullable: false }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "paymentId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.orders),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], OrderEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => address_entity_1.AddressEntity, (address) => address.orders),
    (0, typeorm_1.JoinColumn)({ name: 'address_id', referencedColumnName: 'id' }),
    __metadata("design:type", address_entity_1.AddressEntity)
], OrderEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_entity_1.PaymentEntity, (payment) => payment.orders),
    (0, typeorm_1.JoinColumn)({ name: 'payment_id', referencedColumnName: 'id' }),
    __metadata("design:type", payment_entity_1.PaymentEntity)
], OrderEntity.prototype, "payment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_product_entity_1.OrderProductEntity, (orderProduct) => orderProduct.order),
    __metadata("design:type", Array)
], OrderEntity.prototype, "ordersProduct", void 0);
exports.OrderEntity = OrderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order' })
], OrderEntity);
//# sourceMappingURL=order.entity.js.map