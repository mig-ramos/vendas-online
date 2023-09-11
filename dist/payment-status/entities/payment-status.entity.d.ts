import { PaymentEntity } from '../../payment/entities/payment.entity';
export declare class PaymentStatusEntity {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    payments?: PaymentEntity[];
}
