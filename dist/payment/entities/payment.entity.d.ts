import { OrderEntity } from '../../order/entities/order.entity';
import { PaymentStatusEntity } from '../../payment-status/entities/payment-status.entity';
export declare abstract class PaymentEntity {
    id: number;
    statusId: number;
    price: number;
    discount: number;
    finalPrice: number;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    orders?: OrderEntity[];
    paymentStatus?: PaymentStatusEntity;
    constructor(statusId: number, price: number, discount: number, finalPrice: number);
}
