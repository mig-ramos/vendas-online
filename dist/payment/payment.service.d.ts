import { CartEntity } from '../cart/entities/cart.entity';
import { CreateOrderDTO } from '../order/dtos/create-order.dto';
import { ProductEntity } from '../product/entities/product.entity';
import { Repository } from 'typeorm';
import { PaymentEntity } from './entities/payment.entity';
export declare class PaymentService {
    private readonly paymentRepository;
    constructor(paymentRepository: Repository<PaymentEntity>);
    generateFinalPrice(cart: CartEntity, products: ProductEntity[]): number;
    createPayment(createOrderDTO: CreateOrderDTO, products: ProductEntity[], cart: CartEntity): Promise<PaymentEntity>;
}
