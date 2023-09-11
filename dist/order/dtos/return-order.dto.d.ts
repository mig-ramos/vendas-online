import { ReturnOrderProductDTO } from '../../order-product/dtos/return-order-product.dto';
import { ReturnAddressDto } from '../../address/dtos/returnAddress.dto';
import { ReturnPaymentDTO } from '../../payment/dtos/return-payment.dto';
import { ReturnUserDto } from '../../user/dtos/returnUser.dto';
import { OrderEntity } from '../entities/order.entity';
export declare class ReturnOrderDTO {
    id: number;
    date: string;
    userId: number;
    addressId: number;
    paymentId: number;
    user?: ReturnUserDto;
    address?: ReturnAddressDto;
    payment?: ReturnPaymentDTO;
    ordersProduct?: ReturnOrderProductDTO[];
    amountProducts?: number;
    constructor(order?: OrderEntity);
}
