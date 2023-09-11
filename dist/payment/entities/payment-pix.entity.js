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
exports.PaymentPixEntity = void 0;
const create_order_dto_1 = require("../../order/dtos/create-order.dto");
const typeorm_1 = require("typeorm");
const payment_entity_1 = require("./payment.entity");
let PaymentPixEntity = exports.PaymentPixEntity = class PaymentPixEntity extends payment_entity_1.PaymentEntity {
    constructor(statusId, price, discount, finalPrice, createOrderDTO) {
        super(statusId, price, discount, finalPrice);
        this.code = createOrderDTO?.codePix || '';
        this.datePayment = new Date(createOrderDTO?.datePayment || '');
    }
};
__decorate([
    (0, typeorm_1.Column)({ name: 'code', nullable: false }),
    __metadata("design:type", String)
], PaymentPixEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date_payment', nullable: false }),
    __metadata("design:type", Date)
], PaymentPixEntity.prototype, "datePayment", void 0);
exports.PaymentPixEntity = PaymentPixEntity = __decorate([
    (0, typeorm_1.ChildEntity)(),
    __metadata("design:paramtypes", [Number, Number, Number, Number, create_order_dto_1.CreateOrderDTO])
], PaymentPixEntity);
//# sourceMappingURL=payment-pix.entity.js.map