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
exports.OrderProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_product_entity_1 = require("./entities/order-product.entity");
let OrderProductService = exports.OrderProductService = class OrderProductService {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    async createOrderProduct(productId, orderId, price, amount) {
        return this.orderProductRepository.save({
            amount,
            orderId,
            price,
            productId,
        });
    }
    async findAmountProductsByOrderId(orderId) {
        return this.orderProductRepository
            .createQueryBuilder('order_product')
            .select('order_product.order_id, COUNT(*) as total')
            .where('order_product.order_id IN (:...ids)', { ids: orderId })
            .groupBy('order_product.order_id')
            .getRawMany();
    }
};
exports.OrderProductService = OrderProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_product_entity_1.OrderProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderProductService);
//# sourceMappingURL=order-product.service.js.map