import { ProductEntity } from '../../product/entities/product.entity';
export declare class SizeProductDTO {
    weight: number;
    length: number;
    height: number;
    width: number;
    diameter: number;
    productValue: number;
    constructor(product: ProductEntity);
}
