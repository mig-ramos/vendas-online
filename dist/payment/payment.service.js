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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payment_type_enum_1 = require("../payment-status/enums/payment-type.enum");
const typeorm_2 = require("typeorm");
const payment_credit_card_entity_1 = require("./entities/payment-credit-card.entity");
const payment_pix_entity_1 = require("./entities/payment-pix.entity");
const payment_entity_1 = require("./entities/payment.entity");
let PaymentService = exports.PaymentService = class PaymentService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    generateFinalPrice(cart, products) {
        if (!cart.cartProduct || cart.cartProduct.length === 0) {
            return 0;
        }
        return Number(cart.cartProduct
            .map((cartProduct) => {
            const product = products.find((product) => product.id === cartProduct.productId);
            if (product) {
                return cartProduct.amount * product.price;
            }
            return 0;
        })
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            .toFixed(2));
    }
    async createPayment(createOrderDTO, products, cart) {
        const finalPrice = this.generateFinalPrice(cart, products);
        if (createOrderDTO.amountPayments) {
            const paymentCreditCard = new payment_credit_card_entity_1.PaymentCreditCardEntity(payment_type_enum_1.PaymentType.Done, finalPrice, 0, finalPrice, createOrderDTO);
            return this.paymentRepository.save(paymentCreditCard);
        }
        else if (createOrderDTO.codePix && createOrderDTO.datePayment) {
            const paymentPix = new payment_pix_entity_1.PaymentPixEntity(payment_type_enum_1.PaymentType.Done, finalPrice, 0, finalPrice, createOrderDTO);
            return this.paymentRepository.save(paymentPix);
        }
        throw new common_1.BadRequestException('Amount Payments or code pix or date payment not found');
    }
};
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.PaymentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentService);
//# sourceMappingURL=payment.service.js.map