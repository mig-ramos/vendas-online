import { ReturnOrderDTO } from '../../order/dtos/return-order.dto';
import { ReturnProduct } from '../../product/dtos/return-product.dto';
import { OrderProductEntity } from '../entities/order-product.entity';
export declare class ReturnOrderProductDTO {
    id: number;
    orderId: number;
    productId: number;
    amount: number;
    price: number;
    order?: ReturnOrderDTO;
    product?: ReturnProduct;
    constructor(orderProduct: OrderProductEntity);
}
