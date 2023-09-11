import { CreateOrderDTO } from '../../order/dtos/create-order.dto';
import { PaymentEntity } from './payment.entity';
export declare class PaymentPixEntity extends PaymentEntity {
    code: string;
    datePayment: Date;
    constructor(statusId: number, price: number, discount: number, finalPrice: number, createOrderDTO: CreateOrderDTO);
}
