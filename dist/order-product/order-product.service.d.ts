import { Repository } from 'typeorm';
import { ReturnGroupOrder } from './dtos/return-group-order.dto';
import { OrderProductEntity } from './entities/order-product.entity';
export declare class OrderProductService {
    private readonly orderProductRepository;
    constructor(orderProductRepository: Repository<OrderProductEntity>);
    createOrderProduct(productId: number, orderId: number, price: number, amount: number): Promise<OrderProductEntity>;
    findAmountProductsByOrderId(orderId: number[]): Promise<ReturnGroupOrder[]>;
}
