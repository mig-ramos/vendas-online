import { ReturnPaymentStatus } from '../../payment-status/dtos/return-payment-status.dto';
import { PaymentEntity } from '../entities/payment.entity';
export declare class ReturnPaymentDTO {
    id: number;
    statusId: number;
    price: number;
    discount: number;
    finalPrice: number;
    type: string;
    paymentStatus?: ReturnPaymentStatus;
    constructor(payment: PaymentEntity);
}
