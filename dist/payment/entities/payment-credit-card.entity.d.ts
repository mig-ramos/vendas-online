import { CreateOrderDTO } from '../../order/dtos/create-order.dto';
import { PaymentEntity } from './payment.entity';
export declare class PaymentCreditCardEntity extends PaymentEntity {
    amountPayments: number;
    constructor(statusId: number, price: number, discount: number, finalPrice: number, createOrderDTO: CreateOrderDTO);
}
