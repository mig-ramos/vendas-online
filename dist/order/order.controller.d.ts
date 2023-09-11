import { CreateOrderDTO } from './dtos/create-order.dto';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './order.service';
import { ReturnOrderDTO } from './dtos/return-order.dto';
import { Response } from 'express';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDTO: CreateOrderDTO, userId: number): Promise<OrderEntity>;
    findOrdersByUserId(userId: number, res?: Response): Promise<OrderEntity[]>;
    findAllOrders(): Promise<ReturnOrderDTO[]>;
    findOrderById(orderId: number): Promise<ReturnOrderDTO>;
}
