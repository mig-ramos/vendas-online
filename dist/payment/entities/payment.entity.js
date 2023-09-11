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
exports.PaymentEntity = void 0;
const order_entity_1 = require("../../order/entities/order.entity");
const payment_status_entity_1 = require("../../payment-status/entities/payment-status.entity");
const typeorm_1 = require("typeorm");
let PaymentEntity = exports.PaymentEntity = class PaymentEntity {
    constructor(statusId, price, discount, finalPrice) {
        this.statusId = statusId;
        this.price = price;
        this.discount = discount;
        this.finalPrice = finalPrice;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status_id', nullable: false }),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', nullable: false }),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'discount', nullable: false }),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'final_price', nullable: false }),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "finalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', nullable: false }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], PaymentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], PaymentEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (order) => order.payment),
    __metadata("design:type", Array)
], PaymentEntity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_status_entity_1.PaymentStatusEntity, (payment) => payment.payments),
    (0, typeorm_1.JoinColumn)({ name: 'status_id', referencedColumnName: 'id' }),
    __metadata("design:type", payment_status_entity_1.PaymentStatusEntity)
], PaymentEntity.prototype, "paymentStatus", void 0);
exports.PaymentEntity = PaymentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'payment' }),
    (0, typeorm_1.TableInheritance)({ column: { type: 'varchar', name: 'type' } }),
    __metadata("design:paramtypes", [Number, Number, Number, Number])
], PaymentEntity);
//# sourceMappingURL=payment.entity.js.map