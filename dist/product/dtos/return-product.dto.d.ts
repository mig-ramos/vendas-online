import { ReturnCategory } from '../../category/dtos/return-category.dto';
import { ProductEntity } from '../entities/product.entity';
export declare class ReturnProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    weight: number;
    length: number;
    height: number;
    width: number;
    diameter: number;
    category?: ReturnCategory;
    constructor(productEntity: ProductEntity);
}
