import { CategoryEntity } from '../../category/entities/category.entity';
import { CartProductEntity } from '../../cart-product/entities/cart-product.entity';
import { OrderProductEntity } from '../../order-product/entities/order-product.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    categoryId: number;
    price: number;
    image: string;
    weight: number;
    length: number;
    height: number;
    width: number;
    diameter: number;
    createdAt: Date;
    updatedAt: Date;
    cartProduct?: CartProductEntity[];
    category?: CategoryEntity;
    ordersProduct?: OrderProductEntity[];
}
