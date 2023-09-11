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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_type_enum_1 = require("../user/enum/user-type.enum");
const user_id_decorator_1 = require("../decorators/user-id.decorator");
const create_order_dto_1 = require("./dtos/create-order.dto");
const order_service_1 = require("./order.service");
const return_order_dto_1 = require("./dtos/return-order.dto");
let OrderController = exports.OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createOrder(createOrderDTO, userId) {
        return this.orderService.createOrder(createOrderDTO, userId);
    }
    async findOrdersByUserId(userId, res) {
        const orders = await this.orderService
            .findOrdersByUserId(userId)
            .catch(() => undefined);
        if (orders) {
            return orders;
        }
        res.status(204).send();
        return;
    }
    async findAllOrders() {
        return (await this.orderService.findAllOrders()).map((order) => new return_order_dto_1.ReturnOrderDTO(order));
    }
    async findOrderById(orderId) {
        return new return_order_dto_1.ReturnOrderDTO((await this.orderService.findOrdersByUserId(undefined, orderId))[0]);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDTO, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_id_decorator_1.UserId)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findOrdersByUserId", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findAllOrders", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root),
    (0, common_1.Get)('/:orderId'),
    __param(0, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findOrderById", null);
exports.OrderController = OrderController = __decorate([
    (0, roles_decorator_1.Roles)(user_type_enum_1.UserType.Admin, user_type_enum_1.UserType.Root, user_type_enum_1.UserType.User),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map