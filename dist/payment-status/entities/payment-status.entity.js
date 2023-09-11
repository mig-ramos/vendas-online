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
exports.PaymentStatusEntity = void 0;
const payment_entity_1 = require("../../payment/entities/payment.entity");
const typeorm_1 = require("typeorm");
let PaymentStatusEntity = exports.PaymentStatusEntity = class PaymentStatusEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], PaymentStatusEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', nullable: false }),
    __metadata("design:type", String)
], PaymentStatusEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], PaymentStatusEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], PaymentStatusEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.PaymentEntity, (payment) => payment.paymentStatus),
    __metadata("design:type", Array)
], PaymentStatusEntity.prototype, "payments", void 0);
exports.PaymentStatusEntity = PaymentStatusEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'payment_status' })
], PaymentStatusEntity);
//# sourceMappingURL=payment-status.entity.js.map