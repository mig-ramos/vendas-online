import { AddressEntity } from '../../address/entities/address.entity';
import { OrderProductEntity } from '../../order-product/entities/order-product.entity';
import { PaymentEntity } from '../../payment/entities/payment.entity';
import { UserEntity } from '../../user/entities/user.entity';
export declare class OrderEntity {
    id: number;
    userId: number;
    addressId: number;
    date: Date;
    paymentId: number;
    createdAt: Date;
    updatedAt: Date;
    user?: UserEntity;
    address?: AddressEntity;
    payment?: PaymentEntity;
    ordersProduct?: OrderProductEntity[];
    amountProducts?: number;
}
