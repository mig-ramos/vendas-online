import { OrderEntity } from '../../order/entities/order.entity';
import { ProductEntity } from '../../product/entities/product.entity';
export declare class OrderProductEntity {
    id: number;
    orderId: number;
    productId: number;
    amount: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    order?: OrderEntity;
    product?: ProductEntity;
}
