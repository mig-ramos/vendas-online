import { CartService } from '../cart/cart.service';
import { CartEntity } from '../cart/entities/cart.entity';
import { OrderProductEntity } from '../order-product/entities/order-product.entity';
import { OrderProductService } from '../order-product/order-product.service';
import { PaymentEntity } from '../payment/entities/payment.entity';
import { PaymentService } from '../payment/payment.service';
import { ProductEntity } from '../product/entities/product.entity';
import { ProductService } from '../product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { OrderEntity } from './entities/order.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly paymentService;
    private readonly cartService;
    private readonly orderProductService;
    private readonly productService;
    constructor(orderRepository: Repository<OrderEntity>, paymentService: PaymentService, cartService: CartService, orderProductService: OrderProductService, productService: ProductService);
    saveOrder(createOrderDTO: CreateOrderDTO, userId: number, payment: PaymentEntity): Promise<OrderEntity>;
    createOrderProductUsingCart(cart: CartEntity, orderId: number, products: ProductEntity[]): Promise<OrderProductEntity[]>;
    createOrder(createOrderDTO: CreateOrderDTO, userId: number): Promise<OrderEntity>;
    findOrdersByUserId(userId?: number, orderId?: number): Promise<OrderEntity[]>;
    findAllOrders(): Promise<OrderEntity[]>;
}
