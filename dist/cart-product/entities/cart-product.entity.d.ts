import { CartEntity } from '../../cart/entities/cart.entity';
import { ProductEntity } from '../../product/entities/product.entity';
export declare class CartProductEntity {
    id: number;
    cartId: number;
    productId: number;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    product?: ProductEntity;
    cart?: CartEntity;
}
