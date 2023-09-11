import { CartProductEntity } from '../../cart-product/entities/cart-product.entity';
export declare class CartEntity {
    id: number;
    userId: number;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    cartProduct?: CartProductEntity[];
}
