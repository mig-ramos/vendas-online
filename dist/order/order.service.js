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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_service_1 = require("../cart/cart.service");
const order_product_service_1 = require("../order-product/order-product.service");
const payment_service_1 = require("../payment/payment.service");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
let OrderService = exports.OrderService = class OrderService {
    constructor(orderRepository, paymentService, cartService, orderProductService, productService) {
        this.orderRepository = orderRepository;
        this.paymentService = paymentService;
        this.cartService = cartService;
        this.orderProductService = orderProductService;
        this.productService = productService;
    }
    async saveOrder(createOrderDTO, userId, payment) {
        return this.orderRepository.save({
            addressId: createOrderDTO.addressId,
            date: new Date(),
            paymentId: payment.id,
            userId,
        });
    }
    async createOrderProductUsingCart(cart, orderId, products) {
        return Promise.all(cart.cartProduct?.map((cartProduct) => this.orderProductService.createOrderProduct(cartProduct.productId, orderId, products.find((product) => product.id === cartProduct.productId)
            ?.price || 0, cartProduct.amount)));
    }
    async createOrder(createOrderDTO, userId) {
        const cart = await this.cartService.findCartByUserId(userId, true);
        const products = await this.productService.findAll(cart.cartProduct?.map((cartProduct) => cartProduct.productId));
        const payment = await this.paymentService.createPayment(createOrderDTO, products, cart);
        const order = await this.saveOrder(createOrderDTO, userId, payment);
        await this.createOrderProductUsingCart(cart, order.id, products);
        await this.cartService.clearCart(userId);
        return order;
    }
    async findOrdersByUserId(userId, orderId) {
        const orders = await this.orderRepository.find({
            where: {
                userId,
                id: orderId,
            },
            relations: {
                address: {
                    city: {
                        state: true,
                    },
                },
                ordersProduct: {
                    product: true,
                },
                payment: {
                    paymentStatus: true,
                },
                user: !!orderId,
            },
        });
        if (!orders || orders.length === 0) {
            throw new common_1.NotFoundException('Orders not found');
        }
        return orders;
    }
    async findAllOrders() {
        const orders = await this.orderRepository.find({
            relations: {
                user: true,
            },
        });
        if (!orders || orders.length === 0) {
            throw new common_1.NotFoundException('Orders not found');
        }
        const ordersProduct = await this.orderProductService.findAmountProductsByOrderId(orders.map((order) => order.id));
        return orders.map((order) => {
            const orderProduct = ordersProduct.find((currentOrder) => currentOrder.order_id === order.id);
            if (orderProduct) {
                return {
                    ...order,
                    amountProducts: Number(orderProduct.total),
                };
            }
            return order;
        });
    }
};
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.OrderEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        payment_service_1.PaymentService,
        cart_service_1.CartService,
        order_product_service_1.OrderProductService,
        product_service_1.ProductService])
], OrderService);
//# sourceMappingURL=order.service.js.map